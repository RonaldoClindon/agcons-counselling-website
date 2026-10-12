import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { BookingRequest } from '../../models/booking.model';
import { COUNSELLING_TYPES } from '../../config/content';
import { IconComponent } from '../../components/icon/icon.component';

type Status = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule, IconComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private bookingService = inject(BookingService);

  types = COUNSELLING_TYPES;
  status = signal<Status>('idle');
  whatsappUrl = signal('');
  today = new Date().toISOString().split('T')[0];

  form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[+()\d\s-]{6,20}$/)]],
    whatsapp: ['', [Validators.pattern(/^[+()\d\s-]{6,20}$/)]],
    preferredDate: ['', Validators.required],
    preferredTime: ['', Validators.required],
    counsellingType: ['', Validators.required],
    sessionMode: ['', Validators.required],
    message: [''],
    consent: [false, Validators.requiredTrue],
  });

  ngOnInit(): void {
    const type = this.route.snapshot.queryParamMap.get('type');
    if (type && this.types.includes(type)) this.form.patchValue({ counsellingType: type });
  }

  /** True when a field should show its error message. */
  showError(name: string): boolean {
    const c = this.form.get(name);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  submit(): void {
    console.log("datas");
    
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      document.querySelector<HTMLElement>('.invalid')?.focus();
      return;
    }
    const { consent, ...booking } = this.form.getRawValue();
    this.status.set('sending');
    this.bookingService.submitBooking(booking as BookingRequest).subscribe({
      next: () => {
        this.whatsappUrl.set(this.bookingService.createWhatsAppUrl(booking as BookingRequest));
        this.status.set('success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: () => {
        this.whatsappUrl.set(this.bookingService.createWhatsAppUrl(booking as BookingRequest));
        this.status.set('error');
      },
    });
  }
}

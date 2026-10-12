import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SITE } from '../../config/site.config';
import { BookingService } from '../../services/booking.service';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private sanitizer = inject(DomSanitizer);
  private bookingService = inject(BookingService);

  site = SITE;
  status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
  whatsappUrl = this.bookingService.createWhatsAppUrl();

  /** Google Maps embed for SITE.mapLocation; null while it is not configured. */
  mapUrl: SafeResourceUrl | null = SITE.mapLocation
    ? this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapLocation)}&output=embed`)
    : null;

  form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(5)]],
  });

  showError(name: string): boolean {
    const c = this.form.get(name);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.status.set('sending');
    this.bookingService.submitContact(this.form.getRawValue()).subscribe({
      next: () => { this.status.set('success'); this.form.reset(); },
      error: () => this.status.set('error'),
    });
  }
}

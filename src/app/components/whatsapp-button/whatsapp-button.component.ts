import { Component, inject } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { IconComponent } from '../icon/icon.component';

/** Floating click-to-chat button shown on every page. */
@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [IconComponent],
  template: `
    <a class="wa" [href]="url" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp (opens in a new tab)">
      <app-icon name="whatsapp" [size]="30" />
    </a>
  `,
  styles: [`
    .wa { position: fixed; right: 1.25rem; bottom: 1.25rem; z-index: 90; width: 58px; height: 58px; border-radius: 50%;
      background: #1c7a4d; color: #fff; display: grid; place-items: center; box-shadow: 0 12px 24px -8px rgba(0,0,0,.35);
      transition: transform .25s, background .25s; }
    .wa:hover { transform: translateY(-3px) scale(1.05); background: #166a42; }
  `],
})
export class WhatsappButtonComponent {
  url = inject(BookingService).createWhatsAppUrl();
}

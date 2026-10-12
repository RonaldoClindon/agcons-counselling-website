import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, delay, map } from 'rxjs';
import { BookingRequest, ContactRequest } from '../models/booking.model';
import { FORM_CONFIG, SITE } from '../config/site.config';

@Injectable({ providedIn: 'root' })
export class BookingService {
  constructor(private http: HttpClient) {}

  /** Sends the appointment request using the provider chosen in site.config.ts */
  submitBooking(booking: BookingRequest): Observable<void> {
    return this.send('booking', 'New Counselling Appointment Request', {
      Name: booking.fullName,
      Email: booking.email,
      Phone: booking.phone,
      WhatsApp: booking.whatsapp || '-',
      'Preferred Date': booking.preferredDate,
      'Preferred Time': booking.preferredTime,
      'Counselling Type': booking.counsellingType,
      'Session Mode': booking.sessionMode,
      Message: booking.message || '-',
    });
  }

  submitContact(contact: ContactRequest): Observable<void> {
    return this.send('contact', 'New Website Enquiry', {
      Name: contact.fullName,
      Email: contact.email,
      Message: contact.message,
    });
  }

  /** Text pre-filled in WhatsApp click-to-chat. */
  createWhatsAppMessage(booking?: Partial<BookingRequest>): string {
    if (!booking) return 'Hello, I would like to request a counselling session.';
    return [
      'Hello, I would like to request a counselling session.',
      '',
      `Name: ${booking.fullName ?? ''}`,
      `Preferred Date: ${booking.preferredDate ?? ''}`,
      `Preferred Time: ${booking.preferredTime ?? ''}`,
      `Counselling Type: ${booking.counsellingType ?? ''}`,
      `Session Mode: ${booking.sessionMode ?? ''}`,
    ].join('\n');
  }

  /**
   * Standard WhatsApp click-to-chat link. The visitor sends the message themselves,
   * so nothing reaches WhatsApp automatically. If no number is configured yet,
   * WhatsApp opens with the text ready and lets the visitor pick a contact.
   */
  createWhatsAppUrl(booking?: Partial<BookingRequest>): string {
    const text = encodeURIComponent(this.createWhatsAppMessage(booking));
    const number = SITE.whatsappNumber.replace(/\D/g, '');
    return `https://wa.me/${number}?text=${text}`;
  }

  // ---- provider layer: swap providers in FORM_CONFIG, not here ----

  private send(formName: string, subject: string, fields: Record<string, string>): Observable<void> {
    // `ng serve` has no form backend, so simulate success while developing.
    if (isDevMode() && FORM_CONFIG.provider === 'netlify') {
      console.info('[dev] Form not sent (Netlify Forms only works once deployed):', formName, fields);
      return of(void 0).pipe(delay(700));
    }
    console.log("formspree");
    switch (FORM_CONFIG.provider) {
      case 'formspree':
  return this.http
    .post(
      FORM_CONFIG.formspreeEndpoint,
      { _subject: subject, ...fields },
      { headers: { Accept: 'application/json' } }
    )
    .pipe(
      map(() => {
        console.log('Formspree accepted the submission');
        return void 0;
      })
    );
      case 'function':
        return this.http.post(FORM_CONFIG.functionPath, { formName, subject, fields }).pipe(map(() => void 0));
      case 'netlify':
      default: {
        const body = new URLSearchParams({ 'form-name': formName, subject, 'bot-field': '', ...fields }).toString();
        return this.http
          .post('/', body, {
            headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
            responseType: 'text',
          })
          .pipe(map(() => void 0));
          
      }
    }
  }
}

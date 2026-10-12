import { Component, input } from '@angular/core';

/** Small icon set. Usage: <app-icon name="heart" [size]="24" /> */
@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
      @switch (name()) {
        @case ('user') { <circle cx="12" cy="8" r="3.6"/><path d="M5 20c.6-3.6 3.5-5.6 7-5.6s6.4 2 7 5.6"/> }
        @case ('heart') { <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/> }
        @case ('wind') { <path d="M3 9h10a2.5 2.5 0 1 0-2.5-2.5M3 15h14a2.5 2.5 0 1 1-2.5 2.5M3 12h7"/> }
        @case ('compass') { <circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/> }
        @case ('sprout') { <path d="M12 21v-9M12 12C12 8 9 6 5 6c0 4 3 6 7 6zM12 14c0-3.5 2.5-5.5 7-5.5 0 3.5-2.5 5.5-7 5.5z"/> }
        @case ('video') { <rect x="3" y="6.5" width="12" height="11" rx="2.5"/><path d="M15 11l6-3.5v8L15 13"/> }
        @case ('lock') { <rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/> }
        @case ('check') { <path d="M5 12.5l4.5 4.5L19 7.5"/> }
        @case ('calendar') { <rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/> }
        @case ('clock') { <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/> }
        @case ('phone') { <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/> }
        @case ('mail') { <rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M3.5 7.5L12 13l8.5-5.5"/> }
        @case ('pin') { <path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/> }
        @case ('whatsapp') { <path d="M4 20l1.3-4.2A8 8 0 1 1 8.3 18.8z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.7-2-1-.9.8a4.5 4.5 0 0 1-2.2-2.2l.8-.9-1-2z"/> }
        @case ('menu') { <path d="M4 7h16M4 12h16M4 17h16"/> }
        @case ('close') { <path d="M6 6l12 12M18 6L6 18"/> }
        @case ('instagram') { <rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.8"/><circle cx="17" cy="7" r=".6" fill="currentColor"/> }
        @case ('facebook') { <path d="M14 21v-8h2.7l.5-3.3H14V7.6c0-1 .4-1.7 1.8-1.7h1.5V3.1C17 3 16 3 15 3c-2.5 0-4 1.5-4 4.2v2.5H8.3V13H11v8z"/> }
        @case ('arrow') { <path d="M5 12h14M13 6l6 6-6 6"/> }
      }
    </svg>
  `,
  styles: [`:host { display: inline-flex; line-height: 0; }`],
})
export class IconComponent {
  name = input.required<string>();
  size = input(24);
}

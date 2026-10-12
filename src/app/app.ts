import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, WhatsappButtonComponent],
  template: `
    <a class="skip-link" href="#main">Skip to main content</a>
    <app-navbar />
    <main id="main" tabindex="-1"><router-outlet /></main>
    <app-footer />
    <app-whatsapp-button />
  `,
})
export class App {
  constructor() { inject(SeoService).init(); }
}

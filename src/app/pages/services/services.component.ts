import { Component } from '@angular/core';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { SERVICES, WHO_BENEFITS } from '../../config/content';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent, CtaBannerComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services = SERVICES;
  who = WHO_BENEFITS;
}

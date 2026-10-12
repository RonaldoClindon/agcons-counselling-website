import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { IconComponent } from '../../components/icon/icon.component';
import { BENEFITS, SERVICES, STEPS, TESTIMONIALS, WHY_US } from '../../config/content';
import { ButtonDirective } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeroComponent, ServiceCardComponent, TestimonialComponent, CtaBannerComponent, IconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  why = WHY_US;
  benefits = BENEFITS;
  featured = SERVICES.slice(0, 3);
  steps = STEPS;
  testimonials = TESTIMONIALS;
}

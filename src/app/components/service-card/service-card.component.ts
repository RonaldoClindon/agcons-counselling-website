import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceItem } from '../../config/content';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: `
    <article class="svc">
      <span class="svc__icon"><app-icon [name]="service().icon" [size]="28" /></span>
      <h3>{{ service().title }}</h3>
      <p>{{ service().description }}</p>
      <a class="svc__link" routerLink="/booking" [queryParams]="{ type: service().title }"
         [attr.aria-label]="'Book a session: ' + service().title">Book Session <app-icon name="arrow" [size]="18" /></a>
    </article>
  `,
  styles: [`
    .svc { height: 100%; background: var(--white); border-radius: var(--radius); padding: 2rem; border: 1px solid rgba(179,146,78,.14);
      box-shadow: var(--shadow); display: flex; flex-direction: column; transition: transform .3s var(--ease), box-shadow .3s; }
    .svc:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
    .svc__icon { width: 56px; height: 56px; border-radius: 16px; background: var(--beige); color: var(--green); display: grid; place-items: center; margin-bottom: 1.25rem; }
    p { color: var(--muted); flex: 1; }
    .svc__link { display: inline-flex; align-items: center; gap: .4rem; font-weight: 600; text-decoration: none; color: var(--green); transition: gap .2s; }
    .svc__link:hover { gap: .7rem; }
  `],
})
export class ServiceCardComponent {
  service = input.required<ServiceItem>();
}

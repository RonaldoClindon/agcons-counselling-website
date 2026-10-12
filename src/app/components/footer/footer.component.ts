import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../config/site.config';
import { SERVICES } from '../../config/content';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  site = SITE;
  services = SERVICES;
}

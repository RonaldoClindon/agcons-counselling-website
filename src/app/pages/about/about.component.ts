import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../config/site.config';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  site = SITE;
  expertise = ['Stress and everyday pressure', 'Relationships and communication', 'Life transitions', 'Career direction', 'Self-awareness and personal growth'];
  comfort = [
    'You set the pace. There is no pressure to share more than you want to.',
    'Sessions are respectful, unhurried and free of judgement.',
    'You can choose online or in-person meetings.',
    'You are welcome to ask questions about the process at any time.',
  ];

   profileRevealed = signal(false);

  toggleProfile(): void {
    this.profileRevealed.update(value => !value);
  }
}

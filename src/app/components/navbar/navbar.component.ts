import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SITE } from '../../config/site.config';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  site = SITE;
  open = signal(false);
  scrolled = signal(false);
  links = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about', exact: false },
    { label: 'Services', path: '/services', exact: false },
    { label: 'Book a Session', path: '/booking', exact: false },
    { label: 'Contact', path: '/contact', exact: false },
  ];

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 12); }

  @HostListener('document:keydown.escape')
  onEscape() { this.open.set(false); }

  toggle() { this.open.update(v => !v); }
  close() { this.open.set(false); }
}

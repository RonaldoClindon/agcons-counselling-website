import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SITE } from '../config/site.config';

/** Updates description, canonical and Open Graph tags on every navigation using route `data`. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private router = inject(Router);
  private meta = inject(Meta);
  private title = inject(Title);
  private doc = inject(DOCUMENT);

  init(): void {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      let route: ActivatedRoute = this.router.routerState.root;
      while (route.firstChild) route = route.firstChild;
      const description: string = route.snapshot.data['description'] ?? '';
      const noindex: boolean = !!route.snapshot.data['noindex'];
      // The router sets the page title from the route's `title`; read it back for og:title.
      setTimeout(() => this.apply(this.title.getTitle(), description, noindex));
    });
  }

  private apply(title: string, description: string, noindex: boolean): void {
    const url = SITE.siteUrl + this.router.url.split('?')[0];
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: noindex ? 'noindex' : 'index, follow' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = 'canonical';
      this.doc.head.appendChild(link);
    }
    link.href = url;
  }
}

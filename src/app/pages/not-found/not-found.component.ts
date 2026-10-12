import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="nf">
      <div class="container">
        <p class="nf__code" aria-hidden="true">404</p>
        <h1>Page Not Found</h1>
        <p>The page you are looking for may have moved or no longer exists.</p>
        <a routerLink="/" class="btn btn--primary">Return Home</a>
      </div>
    </section>
  `,
  styles: [`
    .nf { text-align: center; padding-block: clamp(4rem, 12vw, 9rem); }
    .nf__code { font: 600 clamp(5rem, 18vw, 10rem)/1 var(--font-head); color: var(--beige-deep); margin: 0 auto 1rem; }
    p { margin-inline: auto; color: var(--muted); }
    h1 { font-size: clamp(2rem, 5vw, 3rem); }
  `],
})
export class NotFoundComponent {}

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  template: `
    <figure class="t">
      <blockquote>{{ quote() }}</blockquote>
      <figcaption>{{ name() }} @if (note()) { <span class="t__note">({{ note() }})</span> }</figcaption>
    </figure>
  `,
  styles: [`
    .t { margin: 0; height: 100%; background: var(--white); border-radius: var(--radius); padding: 2rem; box-shadow: var(--shadow);
      border-top: 3px solid var(--gold); transition: transform .3s var(--ease); }
    .t:hover { transform: translateY(-4px); }
    blockquote { margin: 0 0 1.25rem; font: 500 1.1rem/1.6 var(--font-head); color: var(--green); }
    figcaption { font-weight: 600; font-size: .92rem; color: var(--muted); }
    .t__note { font-weight: 400; }
  `],
})
export class TestimonialComponent {
  quote = input.required<string>();
  name = input.required<string>();
  note = input('');
}

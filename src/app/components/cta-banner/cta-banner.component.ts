import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [RouterLink],

  template: `
    <section class="cta">
      <div class="bubbles" aria-hidden="true">
        <span class="bubble bubble-1"></span>
        <span class="bubble bubble-2"></span>
        <span class="bubble bubble-3"></span>
        <span class="bubble bubble-4"></span>
        <span class="bubble bubble-5"></span>
        <span class="bubble bubble-6"></span>
      </div>

      <div class="cta-content">
        <span class="tag">YOUR WELL-BEING MATTERS</span>

        <h2>{{ title() }}</h2>

        <p>{{ text() }}</p>

        <a routerLink="/booking" class="cta-button">
          {{ button() }}
          <span>→</span>
        </a>

        <div class="cta-note">
          <span class="dot"></span>
          A safe space. A fresh start. A better you.
        </div>
      </div>
    </section>
  `,

  styles: [`
    :host {
      display: block;
      margin: 24px 16px;
    }

    .cta {
      position: relative;
      isolation: isolate;
      overflow: hidden;
      padding: 65px 24px;
      text-align: center;
      border: 1px solid rgba(151, 125, 220, 0.45);
      border-radius: 32px;
      background: linear-gradient(
        135deg,
       #add1de 0%,
    #edfffa 50%,
    #b087d0 100%
      );
      box-shadow: 0 16px 45px rgba(111, 83, 170, 0.12);
      transition: box-shadow 0.35s ease, border-color 0.35s ease;
    }

    .cta:hover {
      border-color: rgba(139, 106, 210, 0.7);
      box-shadow: 0 22px 55px rgba(111, 83, 170, 0.2);
    }

    .cta-content {
      position: relative;
      z-index: 2;
      max-width: 760px;
      margin: auto;
      padding: 42px 28px;
      border: 1px solid rgba(255, 255, 255, 0.85);
      border-radius: 26px;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(12px);
      animation: fadeUp 0.8s ease both;
    }

    .tag {
      display: inline-block;
      margin-bottom: 16px;
      padding: 8px 15px;
      border: 1px solid rgba(139, 106, 210, 0.2);
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.65);
      color: #7855b7;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
    }

    h2 {
      margin: 0 0 16px;
      color: #352653;
      font-size: clamp(30px, 4vw, 48px);
      line-height: 1.2;
      letter-spacing: -1px;
    }

    p {
      max-width: 580px;
      margin: 0 auto 28px;
      color: #716781;
      font-size: 16px;
      line-height: 1.8;
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 15px 25px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 50px;
      background: linear-gradient(135deg, #8d6bd1, #6d83d9);
      box-shadow: 0 10px 25px rgba(109, 93, 190, 0.25);
      color: white;
      font-weight: 700;
      text-decoration: none;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .cta-button:hover {
      transform: translateY(-4px);
      box-shadow: 0 15px 30px rgba(109, 93, 190, 0.35);
    }

    .cta-button span {
      font-size: 20px;
      transition: transform 0.3s ease;
    }

    .cta-button:hover span {
      transform: translateX(4px);
    }

    .cta-note {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      margin-top: 25px;
      color: #887b9c;
      font-size: 12px;
    }

    .dot {
      width: 7px;
      height: 7px;
      flex-shrink: 0;
      border-radius: 50%;
      background: #9b80d7;
      box-shadow: 0 0 12px rgba(155, 128, 215, 0.7);
    }

    .bubbles {
      position: absolute;
      z-index: 1;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
    }

    .bubble {
      position: absolute;
      display: block;
      border: 1px solid rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      background: radial-gradient(
        circle at 30% 25%,
        rgba(255, 255, 255, 0.85),
        rgba(174, 155, 235, 0.18) 55%,
        rgba(155, 190, 255, 0.08)
      );
      box-shadow: inset 0 0 15px rgba(255, 255, 255, 0.4);
      animation: floatBubble 7s ease-in-out infinite alternate;
    }

    .bubble-1 {
      width: 75px;
      height: 75px;
      top: 12%;
      left: 8%;
    }

    .bubble-2 {
      width: 35px;
      height: 35px;
      top: 65%;
      left: 18%;
      animation-delay: -2s;
    }

    .bubble-3 {
      width: 95px;
      height: 95px;
      top: 55%;
      right: 7%;
      animation-delay: -3s;
    }

    .bubble-4 {
      width: 42px;
      height: 42px;
      top: 12%;
      right: 20%;
      animation-delay: -1s;
    }

    .bubble-5 {
      width: 22px;
      height: 22px;
      top: 35%;
      left: 4%;
      animation-delay: -4s;
    }

    .bubble-6 {
      width: 55px;
      height: 55px;
      bottom: 5%;
      right: 30%;
      animation-delay: -2.5s;
    }

    @keyframes floatBubble {
      from { transform: translate3d(0, 0, 0) scale(1); }
      to { transform: translate3d(12px, -24px, 0) scale(1.08); }
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(18px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 600px) {
      :host {
        margin: 16px 10px;
      }

      .cta {
        padding: 30px 14px;
        border-radius: 24px;
      }

      .cta-content {
        padding: 32px 16px;
      }

      p {
        font-size: 14px;
      }

      .bubble-1, .bubble-3 {
        width: 45px;
        height: 45px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
      }
    }
  `]
})
export class CtaBannerComponent {
  title = input('Ready to take the first step?');
  text = input(
    'Request a session in two minutes. We will contact you to confirm a time that suits you.'
  );
  button = input('Book Your Session');
}
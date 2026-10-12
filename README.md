# Counselling Website (Angular 20)

Pages: Home `/`, About `/about`, Services `/services`, Booking `/booking`, Contact `/contact`, plus a 404 page.

## 1. Setup (needs Node 20.19+ or 22.12+)
```bash
npm install
npm start          # http://localhost:4200  (ng serve)
npm run build      # production build -> dist/counselling-site/browser
```

## 2. Edit your details (one file)
`src/app/config/site.config.ts` - brand, counsellor, email, phone, WhatsApp number (digits only, e.g. 971501234567), address, hours, social links, `mapLocation` (COUNSELLING_LOCATION), `siteUrl`.
Page copy, services, testimonials: `src/app/config/content.ts`. Replace `public/images/counsellor-placeholder.svg` with a real photo (update the path in `about.component.html`) and `public/images/og-image.png` with a 1200x630 brand image.
Also replace `https://your-site-name.netlify.app` in `public/robots.txt`, `public/sitemap.xml`, and `siteUrl`. Replace the sample testimonials with real, permitted ones, and write real Privacy/Terms text (Contact page).

## 3. Email (no secrets in Angular code)
Default = **Netlify Forms**: after deploy, go to Netlify > Forms > Form notifications > Add notification > Email, and enter `COUNSELLING_EMAIL`'s address. Forms `booking` and `contact` are declared in `src/index.html`.
Other options in `FORM_CONFIG.provider`:
- `'formspree'` - paste your public form URL in `formspreeEndpoint`.
- `'function'` - uses `netlify/functions/send-booking.mts`. Set Netlify env vars `RESEND_API_KEY`, `COUNSELLING_EMAIL`, `FROM_EMAIL` (Site settings > Environment variables).
Under `ng serve` the Netlify provider only simulates success (logged in the console); real sending works once deployed.

## 4. WhatsApp
Click-to-chat only (`https://wa.me/<number>?text=...`). The visitor presses send themselves; nothing reaches WhatsApp automatically. Set `whatsappNumber` once in `site.config.ts`.

## 5. Git + GitHub
```bash
git init && git add . && git commit -m "Initial counselling website"
git branch -M main
# create an empty repo on github.com (or: gh repo create counselling-site --private --source=. --push)
git remote add origin https://github.com/<you>/counselling-site.git
git push -u origin main
```

## 6. Netlify
Add new site > Import from GitHub. Build command `npm run build`, publish directory `dist/counselling-site/browser` (already set in `netlify.toml`). SPA refresh on `/about` etc. works via `public/_redirects`.
Custom domain: Site configuration > Domain management > Add domain, then set the DNS records Netlify shows (HTTPS is automatic).

## 7. Google Search Console
Add property > URL prefix (your https domain) > verify (HTML tag: paste into `src/index.html` `<head>`, redeploy) > Sitemaps > submit `sitemap.xml`. Then use URL Inspection on `/` to request indexing.

## SEO checklist
Unique title and description per page (routes), canonical + Open Graph tags (`SeoService`), one H1 per page, alt text, robots.txt, sitemap.xml, favicon. Test sharing with a social preview tool and run Lighthouse.

## Testing checklist
- Widths 320, 375, 768, 1024, 1440; mobile menu opens/closes (Esc too)
- Refresh `/about`, `/services`, `/booking`, `/contact`; unknown URL shows 404
- Booking: each required field shows its message; consent required; success text; error text (go offline); WhatsApp button text
- Keyboard-only: skip link, focus rings, form completion
- After deploy: submit a test booking and confirm the email arrives

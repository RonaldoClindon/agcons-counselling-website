/**
 * ONE place to edit your business details.
 * Everything marked [like this] is a placeholder - replace it with real information.
 * Nothing secret belongs in this file: it is shipped to every visitor's browser.
 */
export const SITE = {
  brandName: 'AGcONS - FOR UR PEACEFULL MIND',
  logoPath: 'assets/logoAg.png',
  counsellorName: '[Counsellor Name]',
  counsellorTitle: '[Professional Title]',

  // Contact details shown on the website
  email: '[ronaldoc.j1608@gmail.com]',
  phone: '[+91 8870947891]',
  /** Digits only, with country code, no "+" or spaces. Example: 971501234567. Leave '' until you have it. */
  whatsappNumber: '91 887 094 7891',
  whatsappDisplay: '[+91 8870947891]',
  address: '[Street, City, Country]',
  workingHours: [
    { days: 'Monday to Friday', hours: '[00:00 - 00:00]' },
    { days: 'Saturday', hours: '[00:00 - 00:00]' },
    { days: 'Sunday', hours: '[Closed / 00:00 - 00:00]' },
  ],

  // Social links. Leave '' to hide an icon.
  instagram: '',
  facebook: '',

  /**
   * COUNSELLING_LOCATION - what Google Maps should show.
   * Put a full address or a business name, e.g. 'Dubai Healthcare City, Dubai'.
   * While this is '' a friendly placeholder is shown instead of a map.
   */
  mapLocation: '',

  /** Your live website address (no trailing slash). Used for SEO tags. */
  siteUrl: 'https://your-site-name.netlify.app',
};

/**
 * How booking/contact forms are delivered. Change `provider` to switch - no UI code changes needed.
 *  - 'netlify'   : Netlify Forms (default, no code or keys needed; email set in Netlify dashboard)
 *  - 'formspree' : Formspree (paste your public form URL below)
 *  - 'function'  : Netlify Function in netlify/functions/send-booking.mts (uses COUNSELLING_EMAIL env var)
 */
export const FORM_CONFIG = {  
  provider: 'formspree' as 'netlify' | 'formspree' | 'function',
  formspreeEndpoint: 'https://formspree.io/f/moejlrbp', // e.g. 'https://formspree.io/f/xxxxxxx' (public URL, safe to expose)
  functionPath: '/.netlify/functions/send-booking',
};

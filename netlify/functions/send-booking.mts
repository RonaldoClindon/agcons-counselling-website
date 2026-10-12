/**
 * Optional secure email sender (use with FORM_CONFIG.provider = 'function').
 * Secrets live ONLY in Netlify environment variables, never in Angular code:
 *   RESEND_API_KEY   - your Resend API key
 *   COUNSELLING_EMAIL - where requests are delivered
 *   FROM_EMAIL       - a sender verified in Resend, e.g. "Bookings <bookings@yourdomain.com>"
 * To use a different email provider, change only the fetch() call below.
 */
export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });

  const { RESEND_API_KEY, COUNSELLING_EMAIL, FROM_EMAIL } = process.env as Record<string, string | undefined>;
  if (!RESEND_API_KEY || !COUNSELLING_EMAIL || !FROM_EMAIL) {
    return new Response('Email is not configured', { status: 500 });
  }

  let payload: { subject?: string; fields?: Record<string, string> };
  try { payload = await req.json(); } catch { return new Response('Bad request', { status: 400 }); }

  const fields = payload.fields ?? {};
  const body = [payload.subject ?? 'New Counselling Appointment Request', '',
    ...Object.entries(fields).map(([k, v]) => `${k}: ${String(v).slice(0, 2000)}`)].join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: FROM_EMAIL, to: [COUNSELLING_EMAIL], reply_to: fields['Email'], subject: payload.subject ?? 'New Counselling Appointment Request', text: body }),
  });
  return new Response(res.ok ? 'OK' : 'Email failed', { status: res.ok ? 200 : 502 });
};

import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 2000;

function clean(value) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, MAX_LEN);
}

function escapeHtml(value) {
  return clean(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' }
  });
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse(400, { error: 'Invalid JSON body.' });
  }

  const name = clean(payload?.name);
  const business = clean(payload?.business);
  const email = clean(payload?.email);
  const users = clean(payload?.users);
  const challenge = clean(payload?.challenge);
  const honeypot = clean(payload?.company); // simple bot trap; field not rendered

  if (honeypot) {
    // Pretend success so bots don't probe; do not actually send.
    return jsonResponse(200, { ok: true });
  }

  if (!name || !business || !email || !users || !challenge) {
    return jsonResponse(400, { error: 'Please fill in all fields.' });
  }

  if (!EMAIL_RE.test(email)) {
    return jsonResponse(400, { error: 'Please enter a valid email address.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.DEMO_FROM || 'Enerflo.ai <hello@enerflo-ai.co.uk>';
  const notifyTo = process.env.DEMO_NOTIFY_TO || 'hello@enerflo-ai.co.uk';
  const replyTo = process.env.DEMO_REPLY_TO || 'support@enerflo-ai.co.uk';

  if (!apiKey) {
    console.error('book-demo: RESEND_API_KEY is not configured.');
    return jsonResponse(500, { error: 'Email service is not configured.' });
  }

  const resend = new Resend(apiKey);

  const safe = {
    name: escapeHtml(name),
    business: escapeHtml(business),
    email: escapeHtml(email),
    users: escapeHtml(users),
    challenge: escapeHtml(challenge)
  };

  const notificationSubject = `Demo request: ${name} (${business})`;
  const notificationText = [
    `New demo request from the Enerflo.ai marketing site.`,
    ``,
    `Name:           ${name}`,
    `Brokerage:      ${business}`,
    `Email:          ${email}`,
    `Team size:      ${users}`,
    `Main challenge: ${challenge}`
  ].join('\n');

  const notificationHtml = `
    <div style="font-family:Inter,Arial,sans-serif;font-size:15px;color:#0f172a;line-height:1.5;">
      <h2 style="margin:0 0 12px;">New demo request</h2>
      <p style="margin:0 0 16px;color:#475569;">From the Enerflo.ai marketing site.</p>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;border:1px solid #e2e8f0;">
        <tr><td style="background:#f8fafc;font-weight:600;">Name</td><td>${safe.name}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:600;">Brokerage</td><td>${safe.business}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:600;">Email</td><td><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
        <tr><td style="background:#f8fafc;font-weight:600;">Team size</td><td>${safe.users}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:600;">Main challenge</td><td>${safe.challenge}</td></tr>
      </table>
      <p style="margin:16px 0 0;color:#64748b;font-size:13px;">Reply directly to this email to respond to the prospect.</p>
    </div>
  `;

  const firstName = name.split(/\s+/)[0] || 'there';
  const autoSubject = 'Thanks for your Enerflo.ai demo request';
  const autoText = [
    `Hi ${firstName},`,
    ``,
    `Thanks for requesting a demo of Enerflo.ai. We have received your details and a member of the team will be in touch within one business day to schedule a session that fits your workflow.`,
    ``,
    `For reference, this is what you submitted:`,
    ``,
    `  Name:           ${name}`,
    `  Brokerage:      ${business}`,
    `  Team size:      ${users}`,
    `  Main challenge: ${challenge}`,
    ``,
    `If anything has changed in the meantime, just reply to this email.`,
    ``,
    `Speak soon,`,
    `The Enerflo.ai team`,
    `https://enerflo-ai.co.uk`
  ].join('\n');

  const autoHtml = `
    <div style="font-family:Inter,Arial,sans-serif;font-size:15px;color:#0f172a;line-height:1.6;max-width:560px;">
      <p>Hi ${escapeHtml(firstName)},</p>
      <p>Thanks for requesting a demo of <strong>Enerflo.ai</strong>. We have received your details and a member of the team will be in touch within one business day to schedule a session that fits your workflow.</p>
      <p style="margin:24px 0 8px;font-weight:600;">For reference, this is what you submitted:</p>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;border:1px solid #e2e8f0;">
        <tr><td style="background:#f8fafc;font-weight:600;">Name</td><td>${safe.name}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:600;">Brokerage</td><td>${safe.business}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:600;">Team size</td><td>${safe.users}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:600;">Main challenge</td><td>${safe.challenge}</td></tr>
      </table>
      <p style="margin-top:24px;">If anything has changed in the meantime, just reply to this email.</p>
      <p style="margin-top:24px;">Speak soon,<br/>The Enerflo.ai team<br/><a href="https://enerflo-ai.co.uk">enerflo-ai.co.uk</a></p>
    </div>
  `;

  try {
    const notification = await resend.emails.send({
      from,
      to: [notifyTo],
      replyTo: email,
      subject: notificationSubject,
      text: notificationText,
      html: notificationHtml
    });

    if (notification.error) {
      console.error('book-demo: notification send failed', notification.error);
      return jsonResponse(502, { error: 'Could not send your request. Please try again.' });
    }

    const autoReply = await resend.emails.send({
      from,
      to: [email],
      replyTo,
      subject: autoSubject,
      text: autoText,
      html: autoHtml
    });

    if (autoReply.error) {
      // Notification already went through, so the team still has the lead.
      console.error('book-demo: auto-reply send failed', autoReply.error);
    }

    return jsonResponse(200, { ok: true });
  } catch (error) {
    console.error('book-demo: unexpected error', error);
    return jsonResponse(500, { error: 'Unexpected error. Please try again.' });
  }
}

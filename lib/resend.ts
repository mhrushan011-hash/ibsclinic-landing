import { Resend } from "resend";
import type { LeadInput } from "./schema";
import { callTimeLabels } from "./schema";

let _client: Resend | null = null;
function client() {
  if (_client) return _client;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is not set");
  }
  _client = new Resend(key);
  return _client;
}

const FROM = process.env.RESEND_FROM ?? "IBS Clinic <consultation@mail.ibsclinic.com>";
const CLINIC_EMAIL = process.env.CLINIC_NOTIFY_EMAIL ?? "info@ibsclinic.com";
const CLINIC_PHONE = process.env.CLINIC_NOTIFY_PHONE ?? "917500334343";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendClinicNotification(lead: LeadInput, leadEmail?: string) {
  const subject = `New IBS lead — ${lead.fullName}, ${lead.city}, ${callTimeLabels[lead.callTime]}`;
  const phoneClean = lead.phone.replace(/[^\d+]/g, "");
  const waLink = `https://wa.me/${phoneClean.replace(/^\+/, "")}`;
  const html = `
<!doctype html><html><body style="font-family:Inter,system-ui,sans-serif;color:#2A2A2A;background:#F7F1E6;padding:24px">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #E4DFD3;border-radius:16px;padding:24px">
    <h1 style="margin:0 0 16px;color:#2F4F3F;font-size:22px">New IBS lead</h1>
    <table cellpadding="6" cellspacing="0" style="width:100%;border-collapse:collapse">
      <tr><td style="color:#5A8F7B;width:140px"><b>Name</b></td><td>${escapeHtml(lead.fullName)}</td></tr>
      <tr><td style="color:#5A8F7B"><b>Phone</b></td><td><a href="tel:${escapeHtml(phoneClean)}">${escapeHtml(lead.phone)}</a> · <a href="${waLink}">WhatsApp</a></td></tr>
      <tr><td style="color:#5A8F7B"><b>City</b></td><td>${escapeHtml(lead.city)}</td></tr>
      <tr><td style="color:#5A8F7B"><b>Preferred call</b></td><td>${escapeHtml(callTimeLabels[lead.callTime])}${lead.specificTime ? " — " + escapeHtml(lead.specificTime) : ""}</td></tr>
      ${lead.concern ? `<tr><td style="color:#5A8F7B;vertical-align:top"><b>Concern</b></td><td>${escapeHtml(lead.concern)}</td></tr>` : ""}
    </table>
    <p style="margin-top:24px;color:#666;font-size:13px">Reply within 30 min · Mon–Sat 9 AM – 8 PM IST</p>
  </div>
</body></html>`;
  return client().emails.send({
    from: FROM,
    to: [CLINIC_EMAIL],
    replyTo: leadEmail,
    subject,
    html,
  });
}

export async function sendLeadAutoresponder(lead: LeadInput, toEmail?: string) {
  if (!toEmail) return null; // we don't collect lead email by default
  const html = `
<!doctype html><html><body style="font-family:Inter,system-ui,sans-serif;color:#2A2A2A;background:#F7F1E6;padding:24px">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #E4DFD3;border-radius:16px;padding:24px">
    <h1 style="margin:0 0 16px;color:#2F4F3F;font-size:22px">We got your evaluation request</h1>
    <p>Hi ${escapeHtml(lead.fullName.split(" ")[0])},</p>
    <p>Thanks for filling out the evaluation form. One of our senior doctors will call you on <b>${escapeHtml(lead.phone)}</b> ${escapeHtml(callTimeLabels[lead.callTime].toLowerCase())}.</p>
    <p>The call takes about 15 minutes. The doctor reads what you wrote, asks a few short questions, and tells you honestly whether IBS Clinic is the right fit.</p>
    <p>If anything urgent comes up before then, message us on WhatsApp on the same number, or call <a href="tel:${CLINIC_PHONE}">+91 750 033 4343</a> directly.</p>
    <p style="margin-top:24px">— The IBS Clinic team</p>
    <p style="color:#666;font-size:13px;border-top:1px solid #E4DFD3;padding-top:12px;margin-top:24px">+91 750 033 4343 · info@ibsclinic.com · Mon–Sat 9 AM – 8 PM IST</p>
  </div>
</body></html>`;
  return client().emails.send({
    from: FROM,
    to: [toEmail],
    subject: "We got your evaluation request — IBS Clinic",
    html,
  });
}

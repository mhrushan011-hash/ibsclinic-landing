/**
 * Client-visible form endpoints. Both forms POST straight from the browser so
 * this exact flow keeps working after the WordPress/Hostinger migration (no
 * server routes). Dependency-free on purpose — it ports to plain JS later.
 *
 * - NEXT_PUBLIC_FORMSUBMIT_ENDPOINT: the formsubmit.co destination — a hashed
 *   token (recommended, hides the email) or the raw clinic email. Used by BOTH
 *   forms; the email subject line tells leads vs. patient intakes apart.
 * - NEXT_PUBLIC_LEAD_SHEET_WEBHOOK_URL: the deployed Apps Script Web App /exec
 *   URL. Only the short LeadForm writes here (the long intake form is email-only).
 */

const formsubmitId = process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT ?? "";

export const FORMSUBMIT_AJAX_ENDPOINT = formsubmitId
  ? `https://formsubmit.co/ajax/${formsubmitId}`
  : "";

export const LEAD_SHEET_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_LEAD_SHEET_WEBHOOK_URL ?? "";

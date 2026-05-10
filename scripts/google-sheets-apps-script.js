/**
 * IBS Clinic — Google Sheets webhook (Apps Script)
 *
 * Setup (5 minutes, do this in mhrushan011@gmail.com):
 *
 * 1. Create a new Google Sheet titled "IBS Clinic — Leads".
 * 2. Add a header row in row 1, columns A–H, exactly:
 *    timestamp | fullName | phone | city | callTime | specificTime | concern | consent
 * 3. Extensions → Apps Script. Replace the default code with the contents
 *    of this file. Save (Ctrl/Cmd-S).
 * 4. Click "Deploy" → "New deployment" → gear icon → "Web app".
 *    - Description: "IBS Clinic lead webhook v1"
 *    - Execute as: Me (mhrushan011@gmail.com)
 *    - Who has access: Anyone (with the link). This is required for the
 *      Vercel function to POST to it. The URL is unguessable — keep it private.
 * 5. Click Deploy. Copy the Web App URL (looks like
 *    https://script.google.com/macros/s/AKfycbz.../exec).
 * 6. In Vercel project → Settings → Environment Variables, add:
 *    GOOGLE_SHEETS_WEBHOOK_URL = <the URL>
 *    Apply to Production, Preview, Development.
 * 7. Redeploy on Vercel so the new env var is live.
 *
 * Test the wiring:
 *   curl -X POST <YOUR_URL> \
 *     -H "Content-Type: application/json" \
 *     -d '{"timestamp":"now","fullName":"Test","phone":"+919999999999","city":"Mumbai","callTime":"Today","specificTime":"","concern":"test","consent":"yes"}'
 *
 * Confirm a row appears in the sheet.
 *
 * Hardening notes:
 * - The webhook URL is the only credential. Treat it like a password — do not
 *   share, do not commit. It lives in Vercel env vars only.
 * - To rotate: redeploy as a new version in Apps Script (a new URL is issued).
 *   Update Vercel env var. Old URL stops working only when you delete the
 *   old deployment.
 */

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([
      payload.timestamp || new Date().toISOString(),
      payload.fullName || "",
      payload.phone || "",
      payload.city || "",
      payload.callTime || "",
      payload.specificTime || "",
      payload.concern || "",
      payload.consent || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional GET for health-check (returns 200 so you can ping it).
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: "ibs-clinic-leads" }))
    .setMimeType(ContentService.MimeType.JSON);
}

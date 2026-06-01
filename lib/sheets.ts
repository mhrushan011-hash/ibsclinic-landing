import type { LeadInput } from "./schema";
import { callTimeLabels } from "./schema";
import type { PatientIntakeInput } from "./patient-schema";
import { genderLabels } from "./patient-schema";

/**
 * Append a row to the Google Sheet via Apps Script Web App webhook.
 * Owner: mhrushan011@gmail.com.
 * See scripts/google-sheets-apps-script.js for setup.
 *
 * Fire-and-forget: a failure here must NOT block the lead — email is the
 * primary channel; the sheet is a backup.
 */
export async function appendLeadToSheet(lead: LeadInput): Promise<void> {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return;

  const row = {
    timestamp: new Date().toISOString(),
    fullName: lead.fullName,
    phone: lead.phone,
    city: lead.city,
    callTime: callTimeLabels[lead.callTime],
    specificTime: lead.specificTime ?? "",
    concern: lead.concern ?? "",
    consent: "yes",
  };

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
      // small timeout — don't block the response on a slow sheet
      signal: AbortSignal.timeout(3000),
    });
  } catch (err) {
    console.error("[sheets] append failed", err);
  }
}

/**
 * Append a row to the patient intake Google Sheet. Reads from a separate
 * webhook URL so the column schema can differ from the lead form.
 *
 * Fire-and-forget: email is the primary channel; the sheet is a backup.
 */
export async function appendPatientIntakeToSheet(
  intake: PatientIntakeInput,
): Promise<void> {
  const url =
    process.env.GOOGLE_SHEETS_PATIENT_WEBHOOK_URL ??
    process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return;

  const row = {
    type: "patient_intake",
    timestamp: new Date().toISOString(),
    fullName: intake.fullName,
    email: intake.email,
    mobile: intake.mobile,
    landline: intake.landline ?? "",
    address: intake.address ?? "",
    city: intake.city,
    state: intake.state ?? "",
    zip: intake.zip ?? "",
    country: intake.country ?? "",
    gender: genderLabels[intake.gender],
    age: intake.age,
    problemDetails: intake.problemDetails,
    problemStart: intake.problemStart ?? "",
    commonProblems: (intake.commonProblems ?? []).join("; "),
    treatedBefore: intake.treatedBefore ?? "",
    pastInvestigations: intake.pastInvestigations ?? "",
    consent: "yes",
  };

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
      signal: AbortSignal.timeout(3000),
    });
  } catch (err) {
    console.error("[sheets] patient-intake append failed", err);
  }
}

import { NextRequest, NextResponse } from "next/server";
import { patientIntakeSchema } from "@/lib/patient-schema";
import { sendPatientIntakeNotification } from "@/lib/resend";
import { appendPatientIntakeToSheet } from "@/lib/sheets";
import { rateLimit } from "@/lib/utils";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "anonymous";

    const rate = rateLimit(`patient-intake:${ip}`, {
      limit: 5,
      windowMs: 15 * 60 * 1000,
    });
    if (!rate.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again shortly." },
        { status: 429 },
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { ok: false, error: "Invalid request." },
        { status: 400 },
      );
    }

    const parsed = patientIntakeSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Validation failed.",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const intake = parsed.data;

    // Honeypot — bots fill this. Return 200 silently to deceive them.
    if (intake.website_url && intake.website_url.length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Email is the load-bearing path.
    await sendPatientIntakeNotification(intake);

    // Fire-and-forget the sheets append — must not block the response.
    appendPatientIntakeToSheet(intake).catch(() => {});

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/patient-intake] failed", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Couldn't send right now. Please call +91 750 033 4343 or email info@ibsclinic.com.",
      },
      { status: 500 },
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/schema";
import { sendClinicNotification } from "@/lib/resend";
import { appendLeadToSheet } from "@/lib/sheets";
import { rateLimit } from "@/lib/utils";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "anonymous";

    const rate = rateLimit(`lead:${ip}`, { limit: 5, windowMs: 15 * 60 * 1000 });
    if (!rate.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again shortly." },
        { status: 429 },
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
    }

    const parsed = leadSchema.safeParse(body);
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

    const lead = parsed.data;

    // Honeypot — bots fill this. Return 200 silently to deceive them.
    if (lead.website_url && lead.website_url.length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Send the clinic email (the load-bearing path).
    await sendClinicNotification(lead);

    // Fire-and-forget the sheets append — must not block.
    appendLeadToSheet(lead).catch(() => {});

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/lead] failed", err);
    return NextResponse.json(
      { ok: false, error: "Couldn't send right now. Please call +91 750 033 4343." },
      { status: 500 },
    );
  }
}

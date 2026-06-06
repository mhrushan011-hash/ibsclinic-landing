import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  return NextResponse.json(
    { error: "Deprecated. Forms use formsubmit.co client-side." },
    { status: 410 }
  );
}

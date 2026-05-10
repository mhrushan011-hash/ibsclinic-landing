"use client";

import { pushEvent } from "@/lib/analytics";

const PHONE = "+917500334343";
const WA = "https://wa.me/917500334343";

export function FloatingCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 divide-x divide-border">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-1 py-3 text-sm font-medium text-sage-dark"
          onClick={() => pushEvent({ event: "phone_click", source: "sticky" })}
        >
          📞 Call
        </a>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 py-3 text-sm font-medium text-sage-dark"
          onClick={() => pushEvent({ event: "whatsapp_click", source: "sticky" })}
        >
          💬 WhatsApp
        </a>
        <a
          href="#book"
          className="flex items-center justify-center bg-rust py-3 text-sm font-semibold text-linen"
          onClick={() => pushEvent({ event: "sticky_cta_click" })}
        >
          Book free eval
        </a>
      </div>
    </div>
  );
}

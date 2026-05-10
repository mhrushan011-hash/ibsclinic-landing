"use client";

import { pushEvent } from "@/lib/analytics";

const PHONE = "+917500334343";
const WA = "https://wa.me/917500334343";

interface FloatingCtaProps {
  onBookClick: () => void;
}

export function FloatingCta({ onBookClick }: FloatingCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-border bg-white/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 divide-x divide-gray-border">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-1 py-3 text-sm font-medium text-charcoal no-underline"
          onClick={() => pushEvent({ event: "phone_click", source: "sticky" })}
        >
          📞 Call
        </a>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 py-3 text-sm font-medium text-charcoal no-underline"
          onClick={() =>
            pushEvent({ event: "whatsapp_click", source: "sticky" })
          }
        >
          💬 WhatsApp
        </a>
        <button
          type="button"
          onClick={() => {
            pushEvent({ event: "sticky_cta_click" });
            onBookClick();
          }}
          className="flex items-center justify-center bg-green py-3 text-sm font-semibold text-white"
        >
          Book free eval
        </button>
      </div>
    </div>
  );
}

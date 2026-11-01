"use client";

import Link from "next/link";
import { pushEvent } from "@/lib/analytics";
import { BOOK_HREF, PHONE_TEL, WHATSAPP_URL } from "@/lib/nav";

/**
 * Mobile-only Call / WhatsApp / Book bar. Rendered sitewide by SiteFooter
 * (Q4 Sprint 6); the homepage passes `onBookClick` to open its lead modal,
 * every other page links to the booking page.
 */
interface FloatingCtaProps {
  onBookClick?: () => void;
}

export function FloatingCta({ onBookClick }: FloatingCtaProps) {
  const bookClass = "flex items-center justify-center bg-green py-3 text-sm font-semibold text-white no-underline";
  return (
    <div className="mobile-bar md:hidden">
      <div className="grid grid-cols-3 divide-x divide-gray-border">
        <a
          href={`tel:${PHONE_TEL}`}
          className="mobile-bar__item"
          onClick={() => pushEvent({ event: "phone_click", source: "sticky" })}
        >
          <span aria-hidden="true">📞</span> Call
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar__item"
          onClick={() => pushEvent({ event: "whatsapp_click", source: "sticky" })}
        >
          <span aria-hidden="true">💬</span> WhatsApp
        </a>
        {onBookClick ? (
          <button
            type="button"
            onClick={() => {
              pushEvent({ event: "sticky_cta_click" });
              onBookClick();
            }}
            className={bookClass}
          >
            Book free eval
          </button>
        ) : (
          <Link href={BOOK_HREF} className={bookClass} onClick={() => pushEvent({ event: "sticky_cta_click" })}>
            Book free eval
          </Link>
        )}
      </div>
    </div>
  );
}

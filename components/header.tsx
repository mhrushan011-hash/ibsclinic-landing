"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { pushEvent } from "@/lib/analytics";

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";

interface HeaderProps {
  onBookClick: () => void;
}

export function Header({ onBookClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-30 w-full border-b transition-colors",
        scrolled
          ? "border-gray-border bg-white/95 backdrop-blur"
          : "border-transparent bg-white",
      ].join(" ")}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" aria-label="IBS Clinic — home" className="no-underline">
          <Logo />
        </Link>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden text-sm font-medium text-charcoal-soft no-underline hover:text-green sm:inline-flex"
            onClick={() =>
              pushEvent({ event: "phone_click", source: "header" })
            }
          >
            <span aria-hidden="true">📞</span>&nbsp;{PHONE_DISPLAY}
          </a>
          <button
            type="button"
            onClick={() => {
              pushEvent({ event: "header_cta_click" });
              onBookClick();
            }}
            className="btn-primary text-sm"
          >
            Book Free Evaluation
          </button>
        </div>
      </div>
    </header>
  );
}

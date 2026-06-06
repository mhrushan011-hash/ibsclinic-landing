"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";

const NAV_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/about", label: "About" },
  { href: "/doctors", label: "Doctors" },
  { href: "/products", label: "Products" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SimpleHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";

  return (
    <header className="sticky top-0 z-30 border-b border-gray-border bg-white/95 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="IBS Clinic — home" className="shrink-0">
          <Logo height={32} />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  active
                    ? "font-medium text-green border-b-2 border-green pb-1"
                    : "text-charcoal-soft hover:text-green"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden text-sm text-charcoal-soft hover:text-green lg:block"
          >
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/book-an-appointment"
            className="btn-primary hidden text-sm sm:inline-flex"
          >
            Book Free Evaluation
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="simple-header-mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-border text-charcoal md:hidden"
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="simple-header-mobile-menu"
          className="border-t border-gray-border bg-white md:hidden"
        >
          <nav className="container-page flex flex-col py-3">
            {NAV_LINKS.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-2 py-3 text-base ${
                    active
                      ? "bg-green-tint font-medium text-green"
                      : "text-charcoal hover:bg-green-tint hover:text-green"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              );
            })}
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-base text-charcoal-soft hover:text-green"
            >
              📞 {PHONE_DISPLAY}
            </a>
            <Link
              href="/book-an-appointment"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full justify-center text-center"
            >
              Book Free Evaluation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

interface HamburgerIconProps {
  open: boolean;
}

function HamburgerIcon({ open }: HamburgerIconProps) {
  if (open) {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 4l12 12M16 4L4 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 6h14M3 10h14M3 14h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

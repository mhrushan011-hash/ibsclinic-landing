"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { pushEvent } from "@/lib/analytics";

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

interface HeaderProps {
  onBookClick: () => void;
}

export function Header({ onBookClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setOpen((v) => {
      const next = !v;
      pushEvent({ event: "mobile_menu_toggle", state: next ? "open" : "closed" });
      return next;
    });
  };

  return (
    <header
      className={[
        "sticky top-0 z-30 w-full border-b transition-colors",
        scrolled
          ? "border-gray-border bg-white/95 backdrop-blur"
          : "border-transparent bg-white",
      ].join(" ")}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="IBS Clinic — home" className="no-underline shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors no-underline ${
                  active
                    ? "font-medium text-green border-b-2 border-green pb-1"
                    : "font-medium text-charcoal-soft hover:text-green"
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
            className="hidden text-sm font-medium text-charcoal-soft no-underline hover:text-green lg:inline-flex"
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
            className="btn-primary hidden text-sm sm:inline-flex"
          >
            Book Free Evaluation
          </button>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-header-mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-border text-charcoal md:hidden"
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="main-header-mobile-menu"
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
                  className={`rounded-md px-2 py-3 text-base no-underline ${
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
              className="rounded-md px-2 py-3 text-base text-charcoal-soft no-underline hover:text-green"
            >
              📞 {PHONE_DISPLAY}
            </a>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                pushEvent({ event: "header_cta_click", source: "mobile_menu" });
                onBookClick();
              }}
              className="btn-primary mt-2 w-full justify-center"
            >
              Book Free Evaluation
            </button>
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

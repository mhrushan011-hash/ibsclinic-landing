"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { pushEvent } from "@/lib/analytics";
import { BOOK_HREF, NAV_GROUPS, PHONE_DISPLAY, PHONE_TEL, type NavGroup } from "@/lib/nav";

/**
 * The one site header (Q4 Sprint 6): replaces the old Header + SimpleHeader
 * pair. Desktop (lg+) shows a mega-menu; smaller screens get a drawer with
 * native <details> accordions. `onBookClick` opens the lead modal where a page
 * has one (homepage); otherwise "Book" links to the booking page.
 */
interface HeaderProps {
  onBookClick?: () => void;
}

const HOVER_CLOSE_DELAY_MS = 150;

function isActive(pathname: string, href: string): boolean {
  const clean = href.replace(/\/$/, "");
  return clean !== "" && (pathname === clean || pathname.startsWith(`${clean}/`));
}

function groupActive(pathname: string, group: NavGroup): boolean {
  return group.columns.some((c) => c.links.some((l) => isActive(pathname, l.href)));
}

export function Header({ onBookClick }: HeaderProps) {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverOpened = useRef(false);

  const closeAll = useCallback(() => {
    setOpenGroup(null);
    setDrawerOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation, Escape, and clicks outside the header.
  useEffect(() => closeAll(), [pathname, closeAll]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAll();
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenGroup(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [closeAll]);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenGroup(null), HOVER_CLOSE_DELAY_MS);
  };

  // A click right after hover-open must keep the panel open, not toggle it shut.
  const toggleGroup = (id: string) => {
    const openedByHover = hoverOpened.current;
    hoverOpened.current = false;
    setOpenGroup((cur) => {
      const next = cur === id && !openedByHover ? null : id;
      if (next) pushEvent({ event: "mega_menu_open", group: next });
      return next;
    });
  };
  const hoverOpen = (id: string) => {
    cancelClose();
    hoverOpened.current = openGroup !== id || hoverOpened.current;
    setOpenGroup(id);
  };

  const toggleDrawer = () => {
    setDrawerOpen((v) => {
      pushEvent({ event: "mobile_menu_toggle", state: v ? "closed" : "open" });
      return !v;
    });
  };

  const activeGroup = NAV_GROUPS.find((g) => g.id === openGroup) ?? null;

  return (
    <header
      ref={headerRef}
      className={`site-header ${scrolled || openGroup ? "site-header--raised" : ""}`}
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="IBS Clinic home" className="shrink-0 no-underline">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="site-header__nav">
            {NAV_GROUPS.map((g) => {
              const open = openGroup === g.id;
              return (
                <li key={g.id}>
                  <button
                    type="button"
                    className={`site-header__trigger ${groupActive(pathname, g) ? "site-header__trigger--active" : ""}`}
                    aria-expanded={open}
                    aria-controls={`mega-${g.id}`}
                    onClick={() => toggleGroup(g.id)}
                    onMouseEnter={() => hoverOpen(g.id)}
                  >
                    {g.label}
                    <Chevron open={open} />
                  </button>
                </li>
              );
            })}
            <li>
              <Link
                href="/doctors/"
                className={`site-header__trigger ${isActive(pathname, "/doctors/") ? "site-header__trigger--active" : ""}`}
                onMouseEnter={() => setOpenGroup(null)}
              >
                Doctors
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="site-header__phone"
            onClick={() => pushEvent({ event: "phone_click", source: "header" })}
          >
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
          <BookButton onBookClick={onBookClick} source="header" className="btn-primary hidden text-sm sm:inline-flex" />
          <button
            type="button"
            onClick={toggleDrawer}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            aria-controls="site-drawer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-border text-charcoal lg:hidden"
          >
            <HamburgerIcon open={drawerOpen} />
          </button>
        </div>
      </div>

      {activeGroup && (
        <div id={`mega-${activeGroup.id}`} className="mega hidden lg:block" role="region" aria-label={activeGroup.label}>
          <div className="container-page py-8">
            <div
              className="mega__grid"
              style={{ gridTemplateColumns: `repeat(${activeGroup.columns.length}, minmax(0, 1fr))` }}
            >
              {activeGroup.columns.map((col) => (
                <div key={col.title}>
                  <p className="mega__title">{col.title}</p>
                  <ul className={col.links.length > 8 ? "mega__list mega__list--grid" : "mega__list"}>
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="mega__link" aria-current={isActive(pathname, l.href) ? "page" : undefined}>
                          <span className="mega__label">{l.label}</span>
                          {l.hint && <span className="mega__hint">{l.hint}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {activeGroup.overview && (
              <Link href={activeGroup.overview.href} className="mega__overview">
                {activeGroup.overview.label}&nbsp;&rarr;
              </Link>
            )}
          </div>
        </div>
      )}

      {drawerOpen && (
        <div id="site-drawer" className="site-drawer lg:hidden">
          <nav aria-label="Main" className="container-page py-3">
            {NAV_GROUPS.map((g) => (
              <details key={g.id} className="site-drawer__group" open={groupActive(pathname, g)}>
                <summary className="site-drawer__summary">
                  {g.label}
                  <Chevron open={false} />
                </summary>
                <ul className={g.id === "cities" ? "site-drawer__list site-drawer__list--grid" : "site-drawer__list"}>
                  {g.columns.flatMap((c) => c.links).map((l) => (
                    <li key={`${g.id}-${l.href}`}>
                      <Link href={l.href} className="site-drawer__link" aria-current={isActive(pathname, l.href) ? "page" : undefined}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  {g.overview && (
                    <li className={g.id === "cities" ? "col-span-2" : undefined}>
                      <Link href={g.overview.href} className="site-drawer__link site-drawer__link--more">
                        {g.overview.label}&nbsp;&rarr;
                      </Link>
                    </li>
                  )}
                </ul>
              </details>
            ))}
            <Link href="/doctors/" className="site-drawer__summary no-underline">
              Doctors
            </Link>
            <a href={`tel:${PHONE_TEL}`} className="site-drawer__summary no-underline">
              <span className="inline-flex items-center gap-2">
                <PhoneIcon />
                {PHONE_DISPLAY}
              </span>
            </a>
            <BookButton
              onBookClick={onBookClick ? () => { setDrawerOpen(false); onBookClick(); } : undefined}
              source="mobile_menu"
              className="btn-primary mt-3 w-full justify-center"
            />
          </nav>
        </div>
      )}
    </header>
  );
}

interface BookButtonProps {
  onBookClick?: () => void;
  source: string;
  className: string;
}

function BookButton({ onBookClick, source, className }: BookButtonProps) {
  const label = "Book Free Evaluation";
  if (onBookClick) {
    return (
      <button
        type="button"
        className={className}
        onClick={() => {
          pushEvent({ event: "header_cta_click", source });
          onBookClick();
        }}
      >
        {label}
      </button>
    );
  }
  return (
    <Link href={BOOK_HREF} className={className} onClick={() => pushEvent({ event: "header_cta_click", source })}>
      {label}
    </Link>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`site-header__chevron ${open ? "rotate-180" : ""}`}
    >
      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d={open ? "M4 4l12 12M16 4L4 16" : "M3 6h14M3 10h14M3 14h14"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

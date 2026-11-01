import Link from "next/link";
import { FloatingCta } from "@/components/floating-cta";
import {
  CITY_LINKS,
  CLINIC_LINKS,
  COMBO_LINKS,
  GUIDE_LINKS,
  GUT_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  type NavLink,
} from "@/lib/nav";

const LEGAL_LINKS: ReadonlyArray<NavLink> = [
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Service" },
  { href: "/return-policy/", label: "Return Policy" },
  { href: "/medical-disclaimer/", label: "Medical Disclaimer" },
];

interface SiteFooterProps {
  /** The homepage renders its own bar wired to the lead modal. */
  mobileBar?: boolean;
}

/** Sitewide footer (Q4 Sprint 6): every guide, gut page, city and combo, plus the mobile call bar. */
export function SiteFooter({ mobileBar = true }: SiteFooterProps) {
  return (
    <>
      <footer className="site-footer">
        <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-heading text-xl font-semibold">IBS Clinic</p>
            <p className="mt-2 max-w-sm text-sm opacity-80">
              Specialist IBS care: Ayurveda-led treatment backed by modern diagnostics, with
              online consultations across India and medicines delivered home.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="site-footer__link">
                  Call {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="site-footer__link">
                  WhatsApp us
                </a>
              </li>
              <li>
                <a href="mailto:info@ibsclinic.com" className="site-footer__link">
                  info@ibsclinic.com
                </a>
              </li>
              <li className="opacity-80">Mon–Sat, 9 AM – 8 PM IST</li>
            </ul>
            <p className="site-footer__heading mt-6">Clinic address</p>
            <p className="mt-2 max-w-sm text-sm opacity-90">
              Shop No. 2, HDIL Residency Park-1, Wing A1, Opp. Star Bazaar, Narangi Bypass, Virar (West), Mumbai
              401303
            </p>
          </div>

          <FooterColumn title="IBS guides" links={GUIDE_LINKS} className="lg:col-span-3" />

          <div className="lg:col-span-2">
            <FooterColumn title="Treatment combos" links={COMBO_LINKS} />
            <FooterColumn title="The clinic" links={CLINIC_LINKS} className="mt-8" />
          </div>

          <div className="lg:col-span-3">
            <FooterColumn title="Gut health" links={GUT_LINKS} />
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-page py-8">
            <p className="site-footer__heading">IBS treatment in your city</p>
            <ul className="site-footer__cities">
              {CITY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="site-footer__link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-page flex flex-col gap-3 py-5 text-xs opacity-80 md:flex-row md:items-center md:justify-between">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="site-footer__link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p>
              © {new Date().getFullYear()} IBS Clinic. Information on this site is educational and does not replace
              professional medical advice.
            </p>
          </div>
        </div>
      </footer>
      {mobileBar && <FloatingCta />}
    </>
  );
}

interface FooterColumnProps {
  title: string;
  links: ReadonlyArray<NavLink>;
  className?: string;
}

function FooterColumn({ title, links, className }: FooterColumnProps) {
  return (
    <div className={className}>
      <p className="site-footer__heading">{title}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="site-footer__link">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

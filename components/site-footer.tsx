import Link from "next/link";

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";

const SITE_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/about", label: "About Us" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/science", label: "The Science" },
  { href: "/doctors", label: "Doctors" },
  { href: "/best-ibs-doctor-in-india", label: "Best IBS Doctor in India" },
  { href: "/products", label: "Treatment Combos" },
  { href: "/blogs", label: "Blog" },
  { href: "/our-success-stories", label: "Success Stories" },
  { href: "/faq", label: "FAQ" },
  { href: "/book-an-appointment", label: "Book an Appointment" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/return-policy", label: "Return Policy" },
  { href: "/medical-disclaimer", label: "Medical Disclaimer" },
];

const CITY_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/ibs-treatment-in-delhi", label: "Delhi" },
  { href: "/ibs-treatment-in-bangalore", label: "Bangalore" },
  { href: "/ibs-treatment-in-pune", label: "Pune" },
  { href: "/ibs-treatment-in-hyderabad", label: "Hyderabad" },
  { href: "/ibs-treatment-in-chennai", label: "Chennai" },
  { href: "/ibs-treatment-in-kolkata", label: "Kolkata" },
  { href: "/ibs-treatment-in-ahmedabad", label: "Ahmedabad" },
  { href: "/ibs-treatment-in-kerala", label: "Kerala" },
];

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-page grid gap-8 py-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <h3 className="font-heading text-lg">IBS Clinic</h3>
          <p className="mt-2 text-sm opacity-80">
            India&apos;s leading specialist IBS clinic — Ayurveda-led care backed
            by modern diagnostics.
          </p>
          <p className="mt-4 text-sm opacity-60">Address</p>
          <p className="mt-1 text-sm opacity-90">
            Shop No. 2, HDIL Residency Park-1, Wing A1, Opp. Star Bazaar,
            Narangi Bypass, Virar (West), Mumbai 401303
          </p>
        </div>
        <div>
          <p className="text-sm opacity-60">Contact</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="text-white">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href="mailto:info@ibsclinic.com" className="text-white">
                info@ibsclinic.com
              </a>
            </li>
            <li className="opacity-80">Mon–Sat, 9 AM – 8 PM IST</li>
          </ul>
          <p className="mt-4 text-sm opacity-60">Site</p>
          <ul className="mt-2 space-y-1 text-sm">
            {SITE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm opacity-60">Treatment in your city</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
            {CITY_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm opacity-60">Legal</p>
          <ul className="mt-2 space-y-1 text-sm">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-4 text-center text-xs opacity-70">
          © {new Date().getFullYear()} IBS Clinic. All rights reserved.
          Information on this site is for educational purposes and does not
          replace professional medical advice.
        </div>
      </div>
    </footer>
  );
}

import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "We've got it — IBS Clinic",
  robots: { index: false, follow: false },
};

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";
const WA = "https://wa.me/917500334343";

export default function ThanksPage() {
  const adsId = process.env.NEXT_PUBLIC_ADS_CONVERSION_ID;
  const adsLabel = process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL;

  return (
    <main className="min-h-screen bg-white">
      <div className="container-page mx-auto max-w-3xl py-20 text-center">
        <h1 className="text-h1 text-charcoal">
          We&apos;ve got it. A doctor will call you within 30 minutes.
        </h1>
        <p className="mt-6 text-lead text-charcoal-soft">
          Our team is reviewing your details right now. Expect a call from{" "}
          <span className="font-semibold text-charcoal">{PHONE_DISPLAY}</span> —
          please save the number so we don&apos;t go to voicemail.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <a href={`tel:${PHONE_TEL}`} className="card no-underline text-left">
            <p className="text-sm font-medium text-green">📞 Prefer to call us first?</p>
            <p className="mt-1 font-heading text-lg text-charcoal">{PHONE_DISPLAY}</p>
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="card no-underline text-left"
          >
            <p className="text-sm font-medium text-green">💬 Got a quick question?</p>
            <p className="mt-1 font-heading text-lg text-charcoal">WhatsApp us now</p>
          </a>
          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card no-underline text-left"
          >
            <p className="text-sm font-medium text-green">📅 Add to calendar</p>
            <p className="mt-1 font-heading text-lg text-charcoal">15-minute hold</p>
          </a>
        </div>

        <p className="mt-12 text-sm text-charcoal-soft">
          Mon–Sat, 9 AM – 8 PM IST · info@ibsclinic.com
        </p>
      </div>

      {/* GA4 + Google Ads conversion fire — only if env vars are configured */}
      {adsId && adsLabel ? (
        <Script
          id="ads-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && window.dataLayer) {
                window.dataLayer.push({
                  event: 'conversion',
                  send_to: '${adsId}/${adsLabel}',
                });
              }
            `,
          }}
        />
      ) : null}
    </main>
  );
}

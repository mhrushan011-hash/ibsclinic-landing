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
    <main className="min-h-screen bg-linen">
      <div className="container-page mx-auto max-w-3xl py-20 text-center">
        <h1 className="text-h1 text-sage-dark">
          We&apos;ve got it. A doctor will call you within 30 minutes.
        </h1>
        <p className="mt-6 text-lead text-slate/85">
          Our team is reviewing your details right now. Expect a call from{" "}
          <b>{PHONE_DISPLAY}</b> — please save the number so we don&apos;t go to voicemail.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <a href={`tel:${PHONE_TEL}`} className="card no-underline text-left">
            <p className="text-sm text-mint">📞 Prefer to call us first?</p>
            <p className="mt-1 font-heading text-lg text-sage-dark">{PHONE_DISPLAY}</p>
          </a>
          <a href={WA} target="_blank" rel="noopener" className="card no-underline text-left">
            <p className="text-sm text-mint">💬 Got a quick question?</p>
            <p className="mt-1 font-heading text-lg text-sage-dark">WhatsApp us now</p>
          </a>
          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener"
            className="card no-underline text-left"
          >
            <p className="text-sm text-mint">📅 Add to calendar</p>
            <p className="mt-1 font-heading text-lg text-sage-dark">15-minute hold</p>
          </a>
        </div>

        <p className="mt-12 text-sm text-slate/70">
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

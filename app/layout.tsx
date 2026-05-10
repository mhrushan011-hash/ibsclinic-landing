import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://consultation.ibsclinic.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "IBS Treatment Specialist Clinic — Free Evaluation in 60s",
  description:
    "Specialist IBS care for 20+ years. 80–90% symptom reduction in ~90 days through personalised Ayurveda, diet, and modern testing. Book a free evaluation.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Stop fearing food. Start trusting your gut. — IBS Clinic",
    description:
      "India's leading specialist IBS clinic. 4.7★, lakhs of patients treated, 8 cities. Book your free evaluation.",
    url: SITE_URL,
    siteName: "IBS Clinic",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop fearing food. Start trusting your gut. — IBS Clinic",
    description:
      "India's leading specialist IBS clinic. ~90 days to significant relief.",
  },
};

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "IBS Clinic",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+91-750-033-4343",
  email: "info@ibsclinic.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop No. 2, HDIL Residency Park-1, Wing A1, Opp. Star Bazaar, Narangi Bypass",
    addressLocality: "Virar (West)",
    addressRegion: "Maharashtra",
    postalCode: "401303",
    addressCountry: "IN",
  },
  medicalSpecialty: ["Gastroenterology", "Ayurveda"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "80",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;

  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        {/* GTM init — runs early so the dataLayer is ready before form events fire. */}
        {gtmId ? (
          <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        ) : null}

        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}

        {/* MedicalOrganization JSON-LD — embedded in the document, not loaded as a remote script. */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />

        {children}
      </body>
    </html>
  );
}

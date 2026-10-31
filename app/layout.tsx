import type { Metadata, Viewport } from "next";
import { Montserrat, Inter, Oswald, Noto_Sans_Devanagari } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { graph, organizationNode, websiteNode } from "@/lib/structured-data";

const heading = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const display = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "600"],
});

// Devanagari — used for the Hindi/Hinglish content (e.g. /incomplete-evacuation).
const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  display: "swap",
  variable: "--font-devanagari",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsclinic.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "IBS Treatment Specialist Clinic — Free Evaluation in 60s",
  description:
    "Specialist IBS care for 18+ years. 80–90% symptom reduction in ~90 days through personalised Ayurveda, diet, and modern testing. Book a free evaluation.",
  // NO canonical here: every route declares its own `alternates.canonical`.
  // A layout-level canonical is inherited by any page that forgets one, which
  // made /doctors/ and every /products/ page point Google at the homepage.
  robots: { index: true, follow: true },
  verification: { google: "qMgbN1D7MVcrcsWGOrHPAqVW9u13ZYYsyU9tkCZ1j_Y" },
  openGraph: {
    title: "Stop fearing food. Start trusting your gut. — IBS Clinic",
    description:
      "India's leading specialist IBS clinic. 4.7★ Google, Thousands of patients treated, 8 cities. Book your free evaluation.",
    // No `url` here either — an inherited og:url would point every page at "/".
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

export const viewport: Viewport = {
  themeColor: "#81AF12",
};

// Organisation + WebSite on every page (defined once in lib/structured-data.ts;
// page-level nodes reference them by @id). No aggregateRating — see that file.
const SITE_SCHEMA = graph(organizationNode(), websiteNode());

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;

  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${display.variable} ${devanagari.variable}`}
    >
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

        {/* Server-rendered (next/script would inject it client-side only). */}
        <JsonLd data={SITE_SCHEMA} />

        {children}
      </body>
    </html>
  );
}

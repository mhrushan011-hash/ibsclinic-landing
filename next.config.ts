import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Serve canonical URLs with a trailing slash to match the legacy WordPress
  // site (e.g. /contact/, /blogs/what-is-ibs/) so SEO/backlinks carry over.
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Add CDN hosts here once real assets land
    ],
  },
  experimental: {
    optimizePackageImports: ["react-hook-form", "zod", "libphonenumber-js"],
  },
  // Permanent (308) map from the legacy WordPress/WooCommerce URLs to their new
  // homes. Sources are matched ignoring the trailing slash, but Next emits the
  // destination EXACTLY as written — so every destination below MUST end in a
  // slash, otherwise crawlers take a second 308 hop to add it. Keep in sync
  // with the migration runbook (`Runbook_ Move ibsclinic.md`). Any unmapped
  // legacy URL falls through to the catch-all `/[slug]` 404 — add it here
  // rather than leaving a dead link.
  async redirects() {
    return [
      // Blog archive (pre-existing)
      { source: "/blog", destination: "/blogs/", permanent: true },
      { source: "/blog/:path*", destination: "/blogs/:path*/", permanent: true },

      // Rank Math redirects that existed on WordPress and were not carried
      // over in the July 2026 migration (old root-level blog slugs).
      { source: "/types-of-ibs", destination: "/blogs/types-of-ibs/", permanent: true },
      { source: "/what-is-ibs", destination: "/blogs/what-is-ibs/", permanent: true },
      { source: "/ibs-treatment-guide", destination: "/blogs/ibs-treatment-guide/", permanent: true },
      { source: "/worst-foods-for-ibs", destination: "/blogs/worst-foods-for-ibs/", permanent: true },
      { source: "/ibs-home-remedies", destination: "/blogs/ibs-home-remedies/", permanent: true },
      { source: "/ibd-vs-ibs", destination: "/blogs/ibd-vs-ibs/", permanent: true },
      { source: "/ibs-diet-plan", destination: "/blogs/ibs-diet-plan/", permanent: true },
      { source: "/ibs/worst-foods-for-ibs", destination: "/blogs/worst-foods-for-ibs/", permanent: true },
      { source: "/ibs/ibs-symptoms", destination: "/blogs/ibs-symptoms/", permanent: true },
      // `/ibs/` was a 404 (and the 404 page is noindex) -> GSC "Excluded by noindex".
      { source: "/ibs", destination: "/blogs/what-is-ibs/", permanent: true },
      // Old dated WordPress permalinks (/2025/09/01/...) -> blog hub
      { source: "/2025/:path*", destination: "/blogs/", permanent: true },

      // City page whose slug changed (Chennai lost the "in-")
      {
        source: "/ibs-treatment-chennai",
        destination: "/ibs-treatment-in-chennai/",
        permanent: true,
      },
      { source: "/ibs-treatment-in-delhi-2", destination: "/ibs-treatment-in-delhi/", permanent: true },

      // Old WordPress test / empty pages still crawled by Google (404 before).
      { source: "/home", destination: "/", permanent: true },
      { source: "/landing-page", destination: "/", permanent: true },
      { source: "/form-v1", destination: "/contact/", permanent: true },
      { source: "/product-desgin", destination: "/products/", permanent: true },

      // Info / condition pages
      { source: "/about-us-2", destination: "/about/", permanent: true },
      // TEMPORARY: the gastrocolic page is being restored as its own live page
      // (Q4 recovery, Sprint 4). Remove this redirect when that page ships.
      {
        source: "/gastrocolic-reflex-dysfunction",
        destination: "/incomplete-evacuation/",
        permanent: true,
      },
      // PRODUCTS ARE LIVE (combo pages only — lead-gen, no cart yet; the
      // WooCommerce checkout returns later). The /products/** pages render
      // normally, so there is NO blanket /products redirect. The legacy
      // WordPress/WooCommerce product URLs below 301 to their matching new
      // combo page (or the /products hub) so SEO equity carries over. There are
      // no single-powder pages — those slugs point at the combos hub.

      // Old condition page that used to map to a product.
      {
        source: "/chronic-ibs-d-frequent-loose-and-mushy-stools",
        destination: "/products/ibs-d-chronic/",
        permanent: true,
      },

      // Legacy root long-slug product pages -> matching combo
      {
        source:
          "/ibs-m-ibs-diglac-and-ibs-diapro-powders-for-alternative-constipation-and-diarrhea",
        destination: "/products/ibs-m/",
        permanent: true,
      },
      {
        source:
          "/ibs-c-ibs-diglac-and-ibs-diglac-plus-powders-for-chronic-ibs-constipation",
        destination: "/products/ibs-c/",
        permanent: true,
      },
      {
        source: "/ibs-d-ibs-diarrheal-plus-and-diapro-powders",
        destination: "/products/ibs-d/",
        permanent: true,
      },
      {
        source: "/ibs-diapro-and-ibs-diglac-plus-powder",
        destination: "/products/ibs-diapro-diglac-plus/",
        permanent: true,
      },
      { source: "/combo", destination: "/products/", permanent: true },

      // Individual-powder pages (no single-powder pages exist) -> combos hub
      { source: "/diapro-ibs-powder", destination: "/products/", permanent: true },
      { source: "/diarrheal-plus-powder", destination: "/products/", permanent: true },
      { source: "/ibs-diarrheal-powder", destination: "/products/", permanent: true },
      { source: "/ibs-diglac-powder", destination: "/products/", permanent: true },
      { source: "/ibs-diglac-plus-powder", destination: "/products/", permanent: true },
      { source: "/product-tag/:slug*", destination: "/products/", permanent: true },

      // WooCommerce system pages — store checkout still offline
      { source: "/shop", destination: "/products/", permanent: true },
      { source: "/shop/:path*", destination: "/products/", permanent: true },
      { source: "/cart", destination: "/", permanent: true },
      { source: "/checkout", destination: "/", permanent: true },
      { source: "/my-account", destination: "/", permanent: true },
      { source: "/my-account/:path*", destination: "/", permanent: true },

      // Noindex taxonomy junk -> blog hub
      { source: "/tag/:slug*", destination: "/blogs/", permanent: true },
      { source: "/uncategorized", destination: "/blogs/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

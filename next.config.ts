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
  // 301 map from the legacy WordPress/WooCommerce URLs to their new homes.
  // Sources are matched ignoring the trailing slash; `trailingSlash: true`
  // adds the slash back to the emitted destination. Keep in sync with the
  // migration runbook (`Runbook_ Move ibsclinic.md`). Any unmapped legacy
  // product URL falls through to the catch-all `/[slug]` 404 — add it here
  // rather than leaving a dead link.
  async redirects() {
    return [
      // Blog archive (pre-existing)
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/blog/:path*", destination: "/blogs/:path*", permanent: true },

      // City page whose slug changed (Chennai lost the "in-")
      {
        source: "/ibs-treatment-chennai",
        destination: "/ibs-treatment-in-chennai",
        permanent: true,
      },

      // Info / condition pages
      { source: "/about-us-2", destination: "/about", permanent: true },
      {
        source: "/gastrocolic-reflex-dysfunction",
        destination: "/incomplete-evacuation",
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
        destination: "/products/ibs-d-chronic",
        permanent: true,
      },

      // Legacy root long-slug product pages -> matching combo
      {
        source:
          "/ibs-m-ibs-diglac-and-ibs-diapro-powders-for-alternative-constipation-and-diarrhea",
        destination: "/products/ibs-m",
        permanent: true,
      },
      {
        source:
          "/ibs-c-ibs-diglac-and-ibs-diglac-plus-powders-for-chronic-ibs-constipation",
        destination: "/products/ibs-c",
        permanent: true,
      },
      {
        source: "/ibs-d-ibs-diarrheal-plus-and-diapro-powders",
        destination: "/products/ibs-d",
        permanent: true,
      },
      {
        source: "/ibs-diapro-and-ibs-diglac-plus-powder",
        destination: "/products/ibs-diapro-diglac-plus",
        permanent: true,
      },
      { source: "/combo", destination: "/products", permanent: true },

      // Individual-powder pages (no single-powder pages exist) -> combos hub
      { source: "/diapro-ibs-powder", destination: "/products", permanent: true },
      { source: "/diarrheal-plus-powder", destination: "/products", permanent: true },
      { source: "/ibs-diarrheal-powder", destination: "/products", permanent: true },
      { source: "/ibs-diglac-powder", destination: "/products", permanent: true },
      { source: "/ibs-diglac-plus-powder", destination: "/products", permanent: true },
      { source: "/product-tag/:slug*", destination: "/products", permanent: true },

      // WooCommerce system pages — store checkout still offline
      { source: "/shop", destination: "/products", permanent: true },
      { source: "/cart", destination: "/", permanent: true },
      { source: "/checkout", destination: "/", permanent: true },
      { source: "/my-account", destination: "/", permanent: true },
      { source: "/my-account/:path*", destination: "/", permanent: true },

      // Noindex taxonomy junk -> blog hub
      { source: "/tag/:slug*", destination: "/blogs", permanent: true },
      { source: "/uncategorized", destination: "/blogs", permanent: true },
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

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
      // Old condition page that used to map to a product; products are not
      // live (see below), so send it to the home page.
      {
        source: "/chronic-ibs-d-frequent-loose-and-mushy-stools",
        destination: "/",
        permanent: true,
      },

      // PRODUCTS ARE NOT LIVE (lead-gen only; the WooCommerce store returns
      // later). The /products pages still exist in the repo but are hidden from
      // the website: every product, powder, combo and WooCommerce URL — old or
      // new — 301s to the home page. Do not remove the /products/** page code.
      { source: "/products", destination: "/", permanent: true },
      { source: "/products/:path*", destination: "/", permanent: true },

      // Legacy root long-slug product pages
      {
        source:
          "/ibs-m-ibs-diglac-and-ibs-diapro-powders-for-alternative-constipation-and-diarrhea",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/ibs-c-ibs-diglac-and-ibs-diglac-plus-powders-for-chronic-ibs-constipation",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ibs-d-ibs-diarrheal-plus-and-diapro-powders",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ibs-diapro-and-ibs-diglac-plus-powder",
        destination: "/",
        permanent: true,
      },
      { source: "/combo", destination: "/", permanent: true },

      // Individual-powder pages
      { source: "/diapro-ibs-powder", destination: "/", permanent: true },
      { source: "/diarrheal-plus-powder", destination: "/", permanent: true },
      { source: "/ibs-diarrheal-powder", destination: "/", permanent: true },
      { source: "/ibs-diglac-powder", destination: "/", permanent: true },
      { source: "/ibs-diglac-plus-powder", destination: "/", permanent: true },
      { source: "/product-tag/:slug*", destination: "/", permanent: true },

      // WooCommerce system pages
      { source: "/cart", destination: "/", permanent: true },
      { source: "/checkout", destination: "/", permanent: true },
      { source: "/shop", destination: "/", permanent: true },
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

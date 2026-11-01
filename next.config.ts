import type { NextConfig } from "next";

/**
 * Old WordPress blog image URLs (still indexed in Google Images) -> the restored,
 * optimised copies in /public/figures. Each entry also matches WordPress's
 * resized variants, e.g. `name-1024x683.png`. Images that had errors and are
 * being redrawn (worst-foods-for-ibs, ibd-vs-ibs, the what-is-ibs flowchart)
 * are added here once their replacements ship.
 */
const LEGACY_IMAGES: ReadonlyArray<[month: string, name: string, ext: string, dest: string]> = [
  ["2025/09", "ChatGPT-Image-Sep-10-2025-03_43_07-PM", "png", "/figures/types-of-ibs/types-of-ibs-c-d-m-u.webp"],
  ["2025/09", "ChatGPT-Image-Sep-10-2025-03_38_32-PM", "png", "/figures/types-of-ibs/ibs-medications-by-type.webp"],
  ["2025/09", "ChatGPT-Image-Sep-12-2025-01_56_41-PM", "png", "/figures/ibs-diet-plan/ibs-diet-plan-safe-foods-foods-to-avoid.webp"],
  ["2025/09", "ChatGPT-Image-Sep-3-2025-07_29_41-PM", "png", "/figures/ibs-treatment-guide/ibs-treatment-guide.webp"],
  ["2025/09", "ChatGPT-Image-Sep-9-2025-11_23_33-PM", "png", "/figures/what-is-ibs/what-is-ibs.webp"],
  ["2025/09", "ChatGPT-Image-Sep-9-2025-11_31_52-PM", "png", "/figures/what-is-ibs/ibs-symptoms-by-subtype.webp"],
  ["2025/09", "IBS-Symptoms-and-Discomfort", "jpg", "/figures/ibs-symptoms/ibs-symptoms.webp"],
  ["2025/10", "Gemini_Generated_Image_p7ncn3p7ncn3p7nc", "png", "/figures/ibs-home-remedies/ibs-home-remedies.webp"],
  ["2025/10", "Gemini_Generated_Image_8y7hng8y7hng8y7h", "png", "/figures/ibs-home-remedies/home-remedies-for-ibs-pain.webp"],
  ["2025/10", "Gemini_Generated_Image_s1vi6rs1vi6rs1vi", "png", "/figures/ibs-home-remedies/ibs-friendly-diet-and-remedies.webp"],
  ["2025/10", "Gemini_Generated_Image_rdrzikrdrzikrdrz", "png", "/figures/ibs-home-remedies/yoga-for-ibs-stress-relief.webp"],
  ["2025/11", "Gemini_Generated_Image_8tyfwh8tyfwh8tyf", "jpg", "/figures/medicine-for-ibs/medicine-for-ibs-guide.webp"],
  ["2025/11", "Gemini_Generated_Image_e9a8xoe9a8xoe9a8", "jpg", "/figures/medicine-for-ibs/herbal-ayurvedic-medicine-for-ibs.webp"],
  ["2025/11", "ayurvedic-treatment-for-ibs", "jpg", "/figures/ibs-ayurvedic-treatment/ayurvedic-treatment-for-ibs.webp"],
  // Redrawn replacements for the WordPress images that had errors
  ["2025/10", "ten-worst-food-ibs", "jpg", "/figures/worst-foods-for-ibs/worst-foods-for-ibs-top-10.webp"],
  ["2025/10", "fodmap-gut", "jpg", "/figures/worst-foods-for-ibs/how-fodmaps-trigger-ibs.webp"],
  ["2025/10", "Gemini_Generated_Image_s5swvgs5swvgs5sw", "jpg", "/figures/worst-foods-for-ibs/ibs-trigger-foods-severity.webp"],
  ["2025/10", "wrost-food-ibs", "jpg", "/figures/worst-foods-for-ibs/ibs-fruit-guide-high-vs-low-fodmap.webp"],
  ["2025/10", "Gemini_Generated_Image_amppzlamppzlampp", "png", "/figures/ibd-vs-ibs/ibd-vs-ibs-differences.webp"],
  ["2025/10", "Gemini_Generated_Image_cwynf0cwynf0cwyn", "png", "/figures/ibd-vs-ibs/ibd-vs-ibs-pain-location.webp"],
  ["2025/10", "Gemini_Generated_Image_gh8vclgh8vclgh8v", "png", "/figures/ibd-vs-ibs/ibd-vs-ibs-treatment-pathways.webp"],
  ["2025/10", "Gemini_Generated_Image_7l9r3u7l9r3u7l9r", "png", "/figures/ibd-vs-ibs/ibd-vs-ibs-diet.webp"],
  ["2025/09", "ChatGPT-Image-Sep-9-2025-11_27_40-PM", "png", "/figures/what-is-ibs/ibs-treatment-options.webp"],
];

const legacyImageRedirects = LEGACY_IMAGES.map(([month, name, ext, destination]) => ({
  // `:file(...)` is a regex param: the base name, an optional -WxH suffix, the extension.
  source: `/wp-content/uploads/${month}/:file(${name}(?:-\\d+x\\d+)?\\.${ext})`,
  destination,
  permanent: true,
}));

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
      // Slug variants without "in-" for the 5 cities rebuilt in Q4 Sprint 5.
      ...["lucknow", "jaipur", "indore", "nagpur", "chandigarh"].map((city) => ({
        source: `/ibs-treatment-${city}`,
        destination: `/ibs-treatment-in-${city}/`,
        permanent: true,
      })),

      // Old WordPress test / empty pages still crawled by Google (404 before).
      { source: "/home", destination: "/", permanent: true },
      { source: "/landing-page", destination: "/", permanent: true },
      { source: "/form-v1", destination: "/contact/", permanent: true },
      { source: "/product-desgin", destination: "/products/", permanent: true },

      // Info / condition pages
      { source: "/about-us-2", destination: "/about/", permanent: true },
      // /gastrocolic-reflex-dysfunction/ is a live page again (Q4 Sprint 4.7).
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

      // Legacy WordPress image URLs -> restored figures
      ...legacyImageRedirects,
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

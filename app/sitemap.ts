import type { MetadataRoute } from "next";
import { CITY_SLUGS } from "@/lib/cities";
import { getAllPosts } from "@/lib/blog";
import { AUTHOR_SLUGS } from "@/lib/doctors";
import { GUT_TOPICS } from "@/lib/gut-topics";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsclinic.com";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

/** Absolute URL with exactly one trailing slash, matching `trailingSlash: true`. */
function abs(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}

interface PageEntry {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  /** Date of the last MEANINGFUL content change (YYYY-MM-DD). Update it when you edit the page. */
  lastModified: string;
}

// Real content dates, not the build time. A lastmod that changes on every
// deploy teaches Google to ignore it.
const MIGRATION_DATE = "2026-07-09"; // WordPress -> Next.js cutover
const GUT_PAGES_DATE = "2026-10-11"; // gut-health pages launch + homepage grid
const PRODUCTS_LIVE_DATE = "2026-07-15"; // combo pages back live, city bios unified

const CORE_PAGES: ReadonlyArray<PageEntry> = [
  { path: "", changeFrequency: "weekly", priority: 1.0, lastModified: GUT_PAGES_DATE },
  { path: "about", changeFrequency: "monthly", priority: 0.7, lastModified: MIGRATION_DATE },
  { path: "contact", changeFrequency: "monthly", priority: 0.7, lastModified: MIGRATION_DATE },
  { path: "doctors", changeFrequency: "monthly", priority: 0.8, lastModified: PRODUCTS_LIVE_DATE },
  { path: "products", changeFrequency: "monthly", priority: 0.8, lastModified: PRODUCTS_LIVE_DATE },
  { path: "book-an-appointment", changeFrequency: "weekly", priority: 0.9, lastModified: MIGRATION_DATE },
  { path: "why-choose-us", changeFrequency: "monthly", priority: 0.7, lastModified: MIGRATION_DATE },
  { path: "science", changeFrequency: "monthly", priority: 0.7, lastModified: MIGRATION_DATE },
  { path: "our-success-stories", changeFrequency: "monthly", priority: 0.7, lastModified: MIGRATION_DATE },
  { path: "faq", changeFrequency: "monthly", priority: 0.7, lastModified: MIGRATION_DATE },
  { path: "best-ibs-doctor-in-india", changeFrequency: "monthly", priority: 0.8, lastModified: PRODUCTS_LIVE_DATE },
  { path: "incomplete-evacuation", changeFrequency: "monthly", priority: 0.8, lastModified: GUT_PAGES_DATE },
  ...GUT_TOPICS.filter((t) => t.slug !== "incomplete-evacuation").map(
    (t): PageEntry => ({
      path: t.slug,
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: GUT_PAGES_DATE,
    }),
  ),
  { path: "blogs", changeFrequency: "weekly", priority: 0.7, lastModified: "2026-07-21" },
  { path: "privacy", changeFrequency: "yearly", priority: 0.3, lastModified: MIGRATION_DATE },
  { path: "terms", changeFrequency: "yearly", priority: 0.3, lastModified: MIGRATION_DATE },
  { path: "return-policy", changeFrequency: "yearly", priority: 0.3, lastModified: MIGRATION_DATE },
  { path: "medical-disclaimer", changeFrequency: "yearly", priority: 0.3, lastModified: MIGRATION_DATE },
];

/** Combo product detail pages under /products (the listing is in CORE_PAGES). */
const PRODUCT_SLUGS: ReadonlyArray<string> = [
  "ibs-m",
  "ibs-c",
  "ibs-d-chronic",
  "ibs-d",
  "ibs-diapro-diglac-plus",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = CORE_PAGES.map((entry) => ({
    url: abs(entry.path),
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const cityPages: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: abs(slug),
    lastModified: PRODUCTS_LIVE_DATE,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = PRODUCT_SLUGS.map((slug) => ({
    url: abs(`products/${slug}`),
    lastModified: PRODUCTS_LIVE_DATE,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: abs(`blogs/${post.slug}`),
    lastModified: post.dateModified ?? post.datePublished,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const authorPages: MetadataRoute.Sitemap = AUTHOR_SLUGS.map((slug) => ({
    url: abs(`author/${slug}`),
    lastModified: MIGRATION_DATE,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...corePages, ...productPages, ...cityPages, ...blogPages, ...authorPages];
}

import type { MetadataRoute } from "next";
import { CITY_SLUGS } from "@/lib/cities";
import { BLOG_SLUGS } from "@/lib/blog";
import { AUTHOR_SLUGS } from "@/lib/doctors";

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
}

const CORE_PAGES: ReadonlyArray<PageEntry> = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "about", changeFrequency: "monthly", priority: 0.7 },
  { path: "contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "doctors", changeFrequency: "monthly", priority: 0.8 },
  { path: "products", changeFrequency: "monthly", priority: 0.8 },
  { path: "book-an-appointment", changeFrequency: "weekly", priority: 0.9 },
  { path: "why-choose-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "science", changeFrequency: "monthly", priority: 0.7 },
  { path: "our-success-stories", changeFrequency: "monthly", priority: 0.7 },
  { path: "faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "best-ibs-doctor-in-india", changeFrequency: "monthly", priority: 0.8 },
  { path: "incomplete-evacuation", changeFrequency: "monthly", priority: 0.8 },
  { path: "blogs", changeFrequency: "weekly", priority: 0.7 },
  { path: "privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "return-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "medical-disclaimer", changeFrequency: "yearly", priority: 0.3 },
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
  const lastModified = new Date();

  const corePages: MetadataRoute.Sitemap = CORE_PAGES.map((entry) => ({
    url: abs(entry.path),
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const cityPages: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: abs(slug),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = PRODUCT_SLUGS.map((slug) => ({
    url: abs(`products/${slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: abs(`blogs/${slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const authorPages: MetadataRoute.Sitemap = AUTHOR_SLUGS.map((slug) => ({
    url: abs(`author/${slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...corePages, ...productPages, ...cityPages, ...blogPages, ...authorPages];
}

/**
 * Schema.org JSON-LD builders — the ONLY place structured data is defined.
 *
 * Rules (see Q4-Recovery/02-schema-map.md):
 * - Server-rendered only (via <JsonLd />), never next/script.
 * - One organisation, referenced everywhere by ORG_ID.
 * - NO Review / AggregateRating anywhere: self-serving ratings are ineligible
 *   and previously pushed every page into GSC "Review snippets".
 * - FAQPage only when the same questions are visible on the page.
 * - City pages are a Service area, never a LocalBusiness with a fake address.
 */
import type { Doctor } from "@/lib/doctors";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsclinic.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export type JsonLdNode = Readonly<Record<string, unknown>>;

export interface FaqItem {
  q: string;
  a: string;
}

/** Absolute URL with exactly one trailing slash (matches `trailingSlash: true`). */
export function absUrl(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}

/** Absolute URL for a static asset (no trailing slash). */
export function assetUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

const ref = (id: string): JsonLdNode => ({ "@id": id });

// ---------------------------------------------------------------- site-wide

export function organizationNode(): JsonLdNode {
  return {
    "@type": "MedicalClinic",
    "@id": ORG_ID,
    name: "IBS Clinic",
    url: absUrl("/"),
    logo: { "@type": "ImageObject", url: assetUrl("/logo.png") },
    image: assetUrl("/icon.png"),
    description:
      "Specialist IBS clinic combining Ayurveda, diet and modern testing, with an in-person clinic in Mumbai and online consultations across India.",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "patient appointments",
        telephone: "+91-750-033-4343",
        email: "info@ibsclinic.com",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    medicalSpecialty: ["Gastroenterology", "Ayurveda"],
    areaServed: { "@type": "Country", name: "India" },
    founder: { "@id": personId("kamal") },
    // Verified live 2026-11-01. Google Business Profile = knowledge-graph id /g/1tkmk_wm.
    hasMap: "https://www.google.com/search?kgmid=/g/1tkmk_wm",
    sameAs: [
      "https://www.google.com/search?kgmid=/g/1tkmk_wm",
      "https://www.facebook.com/ibsclinic",
      "https://www.instagram.com/ibscliniic/",
      "https://www.youtube.com/@ibsclinicofficial",
    ],
  };
}

export function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: absUrl("/"),
    name: "IBS Clinic",
    inLanguage: "en-IN",
    publisher: ref(ORG_ID),
  };
}

// ---------------------------------------------------------------- pages

export interface Crumb {
  label: string;
  /** Site path, e.g. "/blogs". Omit for the current page. */
  href?: string;
}

export function breadcrumbId(path: string): string {
  return `${absUrl(path)}#breadcrumb`;
}

/** BreadcrumbList for a page; the last crumb (no href) is the current page. */
export function breadcrumbNode(path: string, items: ReadonlyArray<Crumb>): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId(path),
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href ? absUrl(c.href) : absUrl(path),
    })),
  };
}

export type WebPageType =
  | "WebPage"
  | "MedicalWebPage"
  | "AboutPage"
  | "ContactPage"
  | "CollectionPage"
  | "ProfilePage"
  | "FAQPage";

export interface WebPageOptions {
  path: string;
  name: string;
  description?: string;
  type?: WebPageType;
  /** Set when the page renders a <Breadcrumb> (which emits the matching list). */
  hasBreadcrumb?: boolean;
  about?: JsonLdNode;
  mainEntity?: JsonLdNode;
  dateModified?: string;
  primaryImage?: string;
}

export function webPageNode(o: WebPageOptions): JsonLdNode {
  return {
    "@type": o.type ?? "WebPage",
    "@id": absUrl(o.path),
    url: absUrl(o.path),
    name: o.name,
    ...(o.description ? { description: o.description } : {}),
    inLanguage: "en-IN",
    isPartOf: ref(WEBSITE_ID),
    publisher: ref(ORG_ID),
    ...(o.hasBreadcrumb ? { breadcrumb: ref(breadcrumbId(o.path)) } : {}),
    ...(o.about ? { about: o.about } : {}),
    ...(o.mainEntity ? { mainEntity: o.mainEntity } : {}),
    ...(o.dateModified ? { dateModified: o.dateModified } : {}),
    ...(o.primaryImage ? { primaryImageOfPage: assetUrl(o.primaryImage) } : {}),
  };
}

/** FAQPage — only pass questions that are visible on the page. */
export function faqNode(path: string, faqs: ReadonlyArray<FaqItem>): JsonLdNode | null {
  if (faqs.length === 0) return null;
  return {
    "@type": "FAQPage",
    "@id": `${absUrl(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export const IBS_CONDITION: JsonLdNode = {
  "@type": "MedicalCondition",
  name: "Irritable bowel syndrome",
  alternateName: "IBS",
};

// ---------------------------------------------------------------- people

export function personId(slug: string): string {
  return `${absUrl(`/author/${slug}`)}#person`;
}

/** Person (not Physician — the founder is a naturopath; see schema map D3). */
export function personNode(d: Doctor, hasAuthorPage: boolean): JsonLdNode {
  return {
    "@type": "Person",
    "@id": personId(d.slug),
    name: d.name,
    jobTitle: d.creds,
    image: assetUrl(d.image),
    worksFor: ref(ORG_ID),
    knowsAbout: ["Irritable bowel syndrome", "Ayurveda", "Digestive health"],
    ...(hasAuthorPage ? { url: absUrl(`/author/${d.slug}`) } : {}),
  };
}

// ---------------------------------------------------------------- services & products

/** Online consultation service for a city we serve remotely (no local address). */
export function cityServiceNode(path: string, cityName: string): JsonLdNode {
  return {
    "@type": "Service",
    "@id": `${absUrl(path)}#service`,
    name: `IBS treatment in ${cityName} (online consultation)`,
    serviceType: "IBS diagnosis and treatment",
    description: `Specialist IBS consultations by video and phone for patients in ${cityName}, with personalised Ayurvedic treatment, diet plans and home delivery of medicines.`,
    provider: ref(ORG_ID),
    areaServed: { "@type": "City", name: cityName, containedInPlace: { "@type": "Country", name: "India" } },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absUrl(path),
      servicePhone: { "@type": "ContactPoint", telephone: "+91-750-033-4343" },
      availableLanguage: ["English", "Hindi"],
    },
    audience: { "@type": "PeopleAudience", healthCondition: IBS_CONDITION },
  };
}

export interface ProductInput {
  path: string;
  sku: string;
  name: string;
  description: string;
  image: string;
  priceInr: number;
}

/** Product + Offer for a combo page. No reviews/ratings unless real on-page reviews exist. */
export function productNode(p: ProductInput): JsonLdNode {
  return {
    "@type": "Product",
    "@id": `${absUrl(p.path)}#product`,
    name: p.name,
    description: p.description,
    sku: p.sku,
    image: assetUrl(p.image),
    brand: { "@type": "Brand", name: "IBS Clinic" },
    category: "Ayurvedic digestive health supplement",
    offers: {
      "@type": "Offer",
      url: absUrl(p.path),
      price: p.priceInr.toFixed(2),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: ref(ORG_ID),
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        // Matches /return-policy/: unopened packs within 7 days, reverse pickup.
        // returnFees deliberately omitted — the policy doesn't state who pays.
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnByMail",
        merchantReturnLink: absUrl("/return-policy"),
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "IN" },
      },
    },
  };
}

export function itemListNode(
  path: string,
  items: ReadonlyArray<{ name: string; path: string }>,
): JsonLdNode {
  return {
    "@type": "ItemList",
    "@id": `${absUrl(path)}#list`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: absUrl(it.path),
    })),
  };
}

/** Wrap nodes into one graph document (nulls are skipped). */
export function graph(...nodes: ReadonlyArray<JsonLdNode | null | undefined>): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter((n): n is JsonLdNode => Boolean(n)),
  };
}

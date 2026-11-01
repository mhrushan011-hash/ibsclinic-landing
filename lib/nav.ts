/**
 * One source for site navigation: the header mega-menu and the footer both
 * read from here, so a new city, guide or combo shows up everywhere at once.
 * Kept free of blog bodies so the client-side header bundle stays small.
 */
import { CITY_DATA } from "./cities";
import { GUT_TOPICS } from "./gut-topics";

export interface NavLink {
  href: string;
  label: string;
  /** One-line hint shown under the label in the desktop mega-menu. */
  hint?: string;
}

export interface NavGroup {
  id: string;
  label: string;
  /** Overview page for the group, shown as the panel's footer link. */
  overview?: NavLink;
  columns: ReadonlyArray<{ title: string; links: ReadonlyArray<NavLink> }>;
}

export const PHONE_DISPLAY = "+91 750 033 4343";
export const PHONE_TEL = "+917500334343";
export const WHATSAPP_URL = "https://wa.me/917500334343";
export const BOOK_HREF = "/book-an-appointment/";

export const COMBO_LINKS: ReadonlyArray<NavLink> = [
  { href: "/products/ibs-c/", label: "IBS-C combo", hint: "Constipation-predominant IBS" },
  { href: "/products/ibs-d/", label: "IBS-D combo", hint: "Loose motions and urgency" },
  { href: "/products/ibs-m/", label: "IBS-M combo", hint: "Alternating constipation and loose motions" },
  { href: "/products/ibs-d-chronic/", label: "Chronic IBS-D combo", hint: "Long-standing loose, mushy stools" },
  { href: "/products/ibs-diapro-diglac-plus/", label: "IBS-C gastrocolic combo", hint: "Urge after meals, never fully clear" },
];

/** Priority blogs: the pages Q4 recovery is lifting, linked sitewide. */
export const GUIDE_LINKS: ReadonlyArray<NavLink> = [
  { href: "/blogs/what-is-ibs/", label: "What is IBS?", hint: "Meaning, causes and diagnosis" },
  { href: "/blogs/ibs-symptoms/", label: "IBS symptoms", hint: "Signs in women and men, red flags" },
  { href: "/blogs/types-of-ibs/", label: "Types of IBS", hint: "IBS-C, IBS-D, IBS-M explained" },
  { href: "/blogs/ibs-diet-plan/", label: "IBS diet plan", hint: "Low-FODMAP with a 7-day Indian plan" },
  { href: "/blogs/worst-foods-for-ibs/", label: "Worst foods for IBS", hint: "Triggers and Indian swaps" },
  { href: "/blogs/ibs-home-remedies/", label: "IBS home remedies", hint: "Drinks, routine and flare relief" },
  { href: "/blogs/medicine-for-ibs/", label: "Medicine for IBS", hint: "Options by IBS type" },
  { href: "/blogs/ibs-ayurvedic-treatment/", label: "Ayurvedic treatment", hint: "Herbs, diet and daily routine" },
  { href: "/blogs/ibd-vs-ibs/", label: "IBD vs IBS", hint: "How to tell them apart" },
];

export const GUT_LINKS: ReadonlyArray<NavLink> = GUT_TOPICS.map((t) => ({
  href: t.href,
  label: t.title,
  hint: t.blurb,
}));

export const CITY_LINKS: ReadonlyArray<NavLink> = Object.values(CITY_DATA)
  .map((c) => ({ href: `/${c.slug}/`, label: c.name }))
  .sort((a, b) => a.label.localeCompare(b.label));

export const CLINIC_LINKS: ReadonlyArray<NavLink> = [
  { href: "/doctors/", label: "Our doctors" },
  { href: "/best-ibs-doctor-in-india/", label: "Choosing an IBS doctor" },
  { href: "/why-choose-us/", label: "Why choose us" },
  { href: "/science/", label: "The science" },
  { href: "/our-success-stories/", label: "Success stories" },
  { href: "/about/", label: "About us" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

export const NAV_GROUPS: ReadonlyArray<NavGroup> = [
  {
    id: "treatment",
    label: "Treatment",
    overview: { href: "/products/", label: "See all treatment combos" },
    columns: [
      { title: "Combos by IBS type", links: COMBO_LINKS },
      {
        title: "Your care",
        links: [
          { href: "/doctors/", label: "Our doctors", hint: "Senior IBS specialists" },
          { href: "/blogs/ibs-treatment-guide/", label: "IBS treatment guide", hint: "How treatment works, step by step" },
          { href: "/our-success-stories/", label: "Success stories", hint: "Patients in their own words" },
          { href: BOOK_HREF, label: "Book a free evaluation", hint: "15 minutes, online" },
        ],
      },
    ],
  },
  {
    id: "guides",
    label: "IBS Guides",
    overview: { href: "/blogs/", label: "All articles" },
    columns: [
      { title: "Understand IBS", links: GUIDE_LINKS.slice(0, 3) },
      { title: "Food and diet", links: GUIDE_LINKS.slice(3, 6) },
      { title: "Treatment", links: GUIDE_LINKS.slice(6) },
    ],
  },
  {
    id: "gut",
    label: "Gut Health",
    columns: [
      { title: "Bowel and toilet", links: GUT_LINKS.slice(0, 4) },
      { title: "Diet, gas and other conditions", links: GUT_LINKS.slice(4) },
    ],
  },
  {
    id: "cities",
    label: "Cities",
    overview: { href: "/best-ibs-doctor-in-india/", label: "Online IBS care across India" },
    columns: [{ title: "IBS treatment in your city", links: CITY_LINKS }],
  },
];

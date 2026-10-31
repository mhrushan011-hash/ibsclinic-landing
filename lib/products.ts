/**
 * The five treatment combos — single source for Product schema, the /products
 * hub list and the Google Merchant Center feed. Prices match the live pages.
 *
 * ⚠️ Chronic IBS-D: the page text says "IBS Diglac + IBS Diapro" (same as
 * IBS-M) but its product photo shows "IBS Diarr-Heal Plus + IBS Diarr-Heal".
 * Pending Dr. Kamal's confirmation, its schema name avoids naming the powders.
 */
export interface Combo {
  slug: string;
  /** Stable SKU / Merchant Center id */
  sku: string;
  /** IBS type badge, e.g. "IBS-M" */
  type: string;
  /** Product name used in schema and the feed */
  name: string;
  /** Short label used in breadcrumbs */
  crumb: string;
  description: string;
  image: string;
  imageAlt: string;
  priceInr: number;
}

export const COMBOS: ReadonlyArray<Combo> = [
  {
    slug: "ibs-m",
    sku: "IBSC-COMBO-IBS-M",
    type: "IBS-M",
    name: "IBS-M Combo: IBS Diglac + IBS Diapro",
    crumb: "IBS-M Combo",
    description:
      "Ayurvedic powder combo for IBS-M (alternating constipation and diarrhoea). Includes specialist consultation, diet plan and follow-up support.",
    image: "/products/ibs-m.jpg",
    imageAlt: "IBS Diglac and IBS Diapro powders — IBS-M combo",
    priceInr: 2260,
  },
  {
    slug: "ibs-c",
    sku: "IBSC-COMBO-IBS-C",
    type: "IBS-C",
    name: "IBS-C Combo: IBS Diglac + IBS Diglac Plus",
    crumb: "IBS-C Combo",
    description:
      "Ayurvedic powder combo for chronic IBS constipation with gas and acidity. Includes specialist consultation, diet plan and follow-up support.",
    image: "/products/ibs-c.jpg",
    imageAlt: "IBS Diglac and IBS Diglac Plus powders — IBS-C combo",
    priceInr: 2260,
  },
  {
    slug: "ibs-d",
    sku: "IBSC-COMBO-IBS-D",
    type: "IBS-D",
    name: "IBS-D Combo: IBS Diarrheal Plus + IBS Diapro",
    crumb: "IBS-D Combo",
    description:
      "Ayurvedic powder combo for mild IBS-D with loose stools. Includes specialist consultation, diet plan and follow-up support.",
    image: "/products/ibs-d.jpg",
    imageAlt: "IBS Diarrheal Plus and IBS Diapro powders — IBS-D combo",
    priceInr: 2260,
  },
  {
    slug: "ibs-d-chronic",
    sku: "IBSC-COMBO-IBS-D-CHRONIC",
    type: "Chronic IBS-D",
    name: "Chronic IBS-D Combo",
    crumb: "Chronic IBS-D Combo",
    description:
      "Ayurvedic powder combo for chronic IBS-D with frequent loose, mushy stools and urgency. Includes specialist consultation, diet plan and follow-up support.",
    image: "/products/ibs-d-chronic.jpg",
    imageAlt: "Chronic IBS-D powder combo",
    priceInr: 2260,
  },
  {
    slug: "ibs-diapro-diglac-plus",
    sku: "IBSC-COMBO-IBS-C-GCR",
    type: "IBS-C + Gastrocolic",
    name: "IBS-C Gastrocolic Combo: IBS Diapro + IBS Diglac Plus",
    crumb: "IBS-C Gastrocolic Combo",
    description:
      "Ayurvedic powder combo for IBS-C with gastrocolic reflex (urgency after meals, incomplete evacuation). Includes specialist consultation, diet plan and follow-up support.",
    image: "/products/ibs-diapro-diglac-plus.jpg",
    imageAlt: "IBS Diapro and IBS Diglac Plus powders — IBS-C gastrocolic combo",
    priceInr: 2260,
  },
];

export function getCombo(slug: string): Combo {
  const combo = COMBOS.find((c) => c.slug === slug);
  if (!combo) throw new Error(`Unknown combo: ${slug}`);
  return combo;
}

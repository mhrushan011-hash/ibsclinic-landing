/**
 * Single source of truth for the medical team. Used by the author pages
 * (/author/[slug]) and the /best-ibs-doctor-in-india landing page.
 * (Existing pages keep their own inline arrays for now — see plan notes.)
 */
export interface Doctor {
  slug: string;
  name: string;
  creds: string;
  exp: string;
  speciality: string;
  bio: string;
  image: string;
  isAuthor: boolean;
}

export const DOCTORS: Readonly<Record<string, Doctor>> = {
  kamal: {
    slug: "kamal",
    name: "Dr. Kamal K Khajuria",
    creds: "Founder, ND (Naturopathy)",
    exp: "18+ years",
    speciality: "Naturopathy · IBS protocol design · Patient history",
    bio: "Dr. Kamal founded IBS Clinic over 18 years ago after experiencing IBS himself. His personal journey gave him a unique perspective on patient-centred care — understanding not just the clinical picture but the anxiety, diet restrictions, and daily disruption that come with IBS. He has personally guided treatment for thousands of patients across India and Bangladesh, developing the integrated Naturopathy and Ayurveda protocols the clinic is known for today.",
    image: "/doctors/dr-kamal.webp",
    isAuthor: true,
  },
  "dr-keshav-raj": {
    slug: "dr-keshav-raj",
    name: "Dr. Keshav Raj",
    creds: "BAMS, MD (Ayurveda)",
    exp: "12+ years",
    speciality: "Ayurveda · IBS-D · IBS-M · Dosha assessment",
    bio: "Dr. Keshav is a senior Ayurvedic specialist with an MD in Ayurveda and deep clinical experience in IBS-D and IBS-M presentations. He focuses on dosha-tailored protocols — matching the correct Ayurvedic formulation to the patient's constitutional type and IBS subtype — and oversees the integration of modern gut testing with traditional Ayurvedic diagnostics.",
    image: "/doctors/dr-keshav.webp",
    isAuthor: false,
  },
  "dr-rajeev-gaur": {
    slug: "dr-rajeev-gaur",
    name: "Dr. Rajeev Gaur",
    creds: "BAMS — Ayurvedic Physician",
    exp: "15+ years",
    speciality: "Ayurveda · Patient case history · Plan personalisation",
    bio: "Dr. Rajeev is an Ayurvedic Physician who specialises in long-form patient case-history work. He is known for thorough one-on-one consultations that uncover triggers, dietary patterns, and lifestyle factors most doctors miss — detailed case-building that directly informs each personalised treatment plan.",
    image: "/doctors/dr-rajeev.webp",
    isAuthor: false,
  },
  "dr-nishikant-dwivedi": {
    slug: "dr-nishikant-dwivedi",
    name: "Dr. Nishikant Dwivedi",
    creds: "BAMS, Ayurvedacharya",
    exp: "30+ years",
    speciality: "Classical Ayurveda · Panchakarma · Formulations",
    bio: "Dr. Nishikant holds the title of Ayurvedacharya and brings deep grounding in classical Ayurvedic formulations and Panchakarma protocols. He contributes to the clinic's formulation work — ensuring every herbal combination used in treatment is backed by classical texts and validated through clinical outcomes.",
    image: "/doctors/dr-nishikant.webp",
    isAuthor: true,
  },
};

/** Display order for team listings (matches the rest of the site). */
export const DOCTOR_LIST: ReadonlyArray<Doctor> = [
  DOCTORS["kamal"],
  DOCTORS["dr-keshav-raj"],
  DOCTORS["dr-rajeev-gaur"],
  DOCTORS["dr-nishikant-dwivedi"],
];

/** Slugs that have a public /author/[slug] page (the blog bylines). */
export const AUTHOR_SLUGS: ReadonlyArray<string> = DOCTOR_LIST.filter(
  (d) => d.isAuthor,
).map((d) => d.slug);

export function getDoctor(slug: string): Doctor | undefined {
  return DOCTORS[slug];
}

export interface Testimonial {
  quote: string;
  name: string;
  meta: string;
}

/**
 * Verified patient testimonials shared across the homepage and the
 * /our-success-stories page. Single source of truth — do not duplicate
 * this array inline in a page.
 */
export const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    quote:
      "I had IBS since 2021. After seven months at IBS Clinic, I'm 80% better — I can eat normally again.",
    name: "Abhishek",
    meta: "India · 7 months · IBS",
  },
  {
    quote:
      "I wasn't sure consultations would make a difference. Six months later I'm almost 80% better. The best place to take treatment.",
    name: "Aditya",
    meta: "India · 6 months · IBS",
  },
  {
    quote:
      "I had IBS for over a decade and visited many hospitals. With IBS Clinic, my symptoms reduced beyond 70%. I can eat normal foods again.",
    name: "Manimul",
    meta: "Bangladesh · IBS for 10+ years",
  },
  {
    quote:
      "I was losing weight rapidly and couldn't digest even rice. Dr Kamal listened to my full history and gave me a plan. I'm well now.",
    name: "Ashish",
    meta: "Bihar · 2 years of IBS",
  },
];

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/IBS+Clinic+Mumbai";

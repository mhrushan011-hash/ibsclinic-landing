import type { FaqItem } from "@/lib/structured-data";

/**
 * Homepage FAQ — rendered as the accordion in components/home-page.tsx AND as
 * FAQPage JSON-LD by the server wrapper app/page.tsx. Kept outside the client
 * component so the server page can read the data.
 */
export const HOME_FAQ: ReadonlyArray<FaqItem> = [
  {
    q: "Is IBS curable?",
    a: "There's no overnight cure for IBS, but most patients reach durable, symptom-free living through a personalised plan. Our 90-day programme is designed exactly around that.",
  },
  {
    q: "How is your treatment different from generic Ayurveda?",
    a: "We're a specialist clinic — IBS only, not general gastric or wellness. Plans are tailored to your IBS subtype (IBS-D, IBS-C, IBS-M), supported by modern testing where useful, and tracked weekly.",
  },
  {
    q: "How long does it take to feel better?",
    a: "Most patients feel meaningful change in 4–8 weeks and 80–90% symptom reduction by ~90 days. Some take longer — we plan for your case, not an average.",
  },
  {
    q: "Do I need to come to Mumbai?",
    a: "No. Our patients across Delhi, Bangalore, Hyderabad, Pune, Kolkata, Chennai, Ahmedabad, Kerala, Lucknow, Jaipur, Indore, Nagpur and Chandigarh consult by video or phone. Medicines reach you wherever you are in India.",
  },
  {
    q: "What does it cost?",
    a: "The free evaluation has zero cost. Treatment cost depends on your plan duration and shipping. Your doctor will discuss this transparently before you commit.",
  },
  {
    q: "What happens during the free 15-minute evaluation?",
    a: "A senior doctor reviews your symptoms, history, and prior treatments. You'll leave the call with a clear opinion on whether IBS Clinic is right for you — no pressure to enrol.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your details are seen only by our medical team. We comply with India's DPDP Act 2023 — see our Privacy Policy.",
  },
];

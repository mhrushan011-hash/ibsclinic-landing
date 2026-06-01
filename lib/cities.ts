export interface CityFaq {
  q: string;
  a: string;
}

export interface CityPage {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  ctaTagline: string;
  cityFaq: ReadonlyArray<CityFaq>;
}

/**
 * City-specific content for `/ibs-treatment-in-[city]` pages. H1s and FAQs are
 * sourced verbatim (or closely mirrored) from the live ibsclinic.com city
 * pages, with the rest of the template shared via the dynamic route.
 */
export const CITY_DATA: Readonly<Record<string, CityPage>> = {
  "ibs-treatment-in-kerala": {
    slug: "ibs-treatment-in-kerala",
    name: "Kerala",
    h1: "Get Relief with IBS Treatment in Kerala — Book Free Consultation",
    metaTitle: "Get Relief with IBS Treatment in Kerala | Book Free Consultation",
    metaDescription:
      "Specialist IBS treatment in Kerala — Ayurveda-led care, advanced diagnostics, and gut-brain therapy. 15+ years, 5000+ patients, 95% success rate.",
    heroIntro:
      "Book effective IBS treatment in Kerala today. Personalised care, advanced diagnostics, and holistic approaches to restore gut health are all part of our expert IBS treatment in Kerala. Our specialist team offers the best Ayurvedic treatment for IBS in Kerala.",
    ctaTagline: "Get Free Consultation With IBS Treatment Specialists in Kerala",
    cityFaq: [
      {
        q: "Is Ayurvedic treatment effective for IBS in Kerala?",
        a: "Yes. Kerala has a rich tradition of Ayurvedic medicine that has proven effective for digestive disorders like IBS. Our clinic combines traditional Kerala Ayurvedic principles with modern medical approaches for optimal results.",
      },
      {
        q: "Can I get IBS treatment in Kerala via telehealth?",
        a: "Yes. We serve patients across Kerala through online consultations and home-delivered Ayurvedic powders, with regular follow-ups to track your progress from anywhere in the state.",
      },
    ],
  },
  "ibs-treatment-in-bangalore": {
    slug: "ibs-treatment-in-bangalore",
    name: "Bangalore",
    h1: "Easy IBS Treatment in Bangalore — Book Specialists Near You",
    metaTitle: "Easy IBS Treatment in Bangalore | Book Specialists Near You",
    metaDescription:
      "Expert IBS treatment in Bangalore with personalised care, advanced diagnostics, and a holistic approach to restore gut health. 95% success rate.",
    heroIntro:
      "We offer expert IBS treatment in Bangalore with personalised care, advanced diagnostics, and a holistic approach to restore gut health. Identifying symptoms early helps our specialists build the most effective long-term plan.",
    ctaTagline: "Get Free Consultation With IBS Treatment Specialists in Bangalore",
    cityFaq: [
      {
        q: "Where can I get the best IBS treatment in Bangalore?",
        a: "IBS Clinic offers some of the best IBS treatment for Bangalore patients — through experienced gastroenterologists and Ayurveda doctors, telehealth consultations, and a structured 8-step protocol with home delivery of all medication.",
      },
      {
        q: "When should I see an IBS doctor in Bangalore?",
        a: "If you have had recurring bloating, cramping, alternating constipation/diarrhoea, or food-triggered gut discomfort for more than 6 weeks, it is time to consult an IBS specialist. Early evaluation prevents the condition from worsening.",
      },
    ],
  },
  "ibs-treatment-in-delhi": {
    slug: "ibs-treatment-in-delhi",
    name: "Delhi",
    h1: "Get IBS Treatment in Delhi — Book Free Consultation Now",
    metaTitle: "Get IBS Treatment in Delhi | Book Free Consultation Now",
    metaDescription:
      "Specialist IBS treatment in Delhi — Ayurveda-led personalised care with telemedicine support, advanced diagnostics, and gut-brain axis therapy.",
    heroIntro:
      "Expert IBS treatment in Delhi — personalised care, advanced diagnostics, and gut-brain therapy delivered via online consultations and home-delivered medication, so you can start treatment without leaving home.",
    ctaTagline: "Get Free Consultation With IBS Treatment Specialists in Delhi",
    cityFaq: [
      {
        q: "Can I do IBS treatment in Delhi entirely online?",
        a: "Yes. Most of our Delhi patients are managed via telehealth — initial consult, follow-ups, and dietary coaching all happen online; medication ships to your home address.",
      },
      {
        q: "Does Delhi air pollution affect IBS symptoms?",
        a: "Environmental stressors including poor air quality can aggravate the gut-brain axis. Our protocol pairs Ayurvedic treatment with stress-management and lifestyle guidance tailored to urban patients in cities like Delhi.",
      },
    ],
  },
  "ibs-treatment-in-pune": {
    slug: "ibs-treatment-in-pune",
    name: "Pune",
    h1: "Best IBS Treatment in Pune — Personalised Care for Gut Health",
    metaTitle: "Best IBS Treatment in Pune | Personalised Care for Gut Health",
    metaDescription:
      "Personalised IBS treatment in Pune from senior IBS specialists. Ayurveda-led care, low-FODMAP coaching, and telemedicine support.",
    heroIntro:
      "Personalised IBS treatment in Pune from our team of senior IBS specialists. Combining Ayurveda-led care with modern diagnostics, dietary coaching, and gut-brain therapy.",
    ctaTagline: "Book a Call with IBS Specialist in Pune",
    cityFaq: [
      {
        q: "Who provides the best IBS treatment in Pune?",
        a: "IBS Clinic offers structured, doctor-supervised IBS treatment for Pune patients — Ayurveda-led protocols, modern diagnostics, and ongoing telehealth follow-ups so your progress is tracked monthly.",
      },
      {
        q: "When should I see an IBS doctor in Pune?",
        a: "Any time gut symptoms — bloating, cramps, irregular bowel movements, food sensitivity — affect your daily life for more than 6 weeks, you should consult an IBS specialist. Early intervention reduces total treatment time.",
      },
    ],
  },
  "ibs-treatment-in-ahmedabad": {
    slug: "ibs-treatment-in-ahmedabad",
    name: "Ahmedabad",
    h1: "Proven IBS Treatment in Ahmedabad — Free Consultation Today",
    metaTitle: "Proven IBS Treatment in Ahmedabad | Free Consultation Today",
    metaDescription:
      "Proven IBS treatment in Ahmedabad with Ayurveda-led care, gut-brain therapy, and dietary coaching tailored to Gujarati food and lifestyle patterns.",
    heroIntro:
      "Proven IBS treatment in Ahmedabad — personalised care, advanced diagnostics, and Ayurveda-led protocols. Our specialists tailor diet and lifestyle recommendations to local food patterns for better adherence.",
    ctaTagline: "Get Free Consultation With IBS Treatment Specialists in Ahmedabad",
    cityFaq: [
      {
        q: "Does diet matter for IBS patients in Ahmedabad?",
        a: "Absolutely. Many traditional Gujarati staples — wheat, dairy, certain dals — can be IBS triggers. Our specialists build a personalised low-FODMAP plan that respects local food preferences while removing triggers.",
      },
      {
        q: "Can I get IBS medicine delivered in Ahmedabad?",
        a: "Yes. All Ayurvedic powders prescribed by our doctors ship to any Ahmedabad pincode within 3–5 business days.",
      },
    ],
  },
  "ibs-treatment-in-chennai": {
    slug: "ibs-treatment-in-chennai",
    name: "Chennai",
    h1: "Best Doctor for IBS Treatment in Chennai — Get Free Consultation",
    metaTitle: "Best Doctor for IBS Treatment in Chennai | Get Free Consultation",
    metaDescription:
      "Consult senior IBS doctors for IBS treatment in Chennai — Ayurveda-led care, modern diagnostics, gut-brain therapy, and telehealth follow-ups.",
    heroIntro:
      "Talk to senior IBS doctors for IBS treatment in Chennai. Our specialists combine Ayurveda, modern diagnostics, and gut-brain therapy so you address both symptoms and stress triggers at the same time.",
    ctaTagline: "Get Free Consultation With IBS Treatment Specialists in Chennai",
    cityFaq: [
      {
        q: "Do you have IBS doctors who speak Tamil?",
        a: "Yes. Our patient-support team speaks Tamil, English, and Hindi, and we match doctors to language preferences where possible during the initial consultation.",
      },
      {
        q: "Will I need to travel for IBS treatment in Chennai?",
        a: "No. The full treatment — consultation, follow-ups, and medication delivery — is available via telehealth, so most Chennai patients are managed without ever travelling.",
      },
    ],
  },
  "ibs-treatment-in-kolkata": {
    slug: "ibs-treatment-in-kolkata",
    name: "Kolkata",
    h1: "Best IBS Treatment in Kolkata & Symptom Management",
    metaTitle: "Advanced Care IBS Treatment in Kolkata | Get Free Consultation",
    metaDescription:
      "Advanced-care IBS treatment in Kolkata — Ayurveda-led protocols, modern diagnostics, gut-brain therapy, and home-delivered medication.",
    heroIntro:
      "Advanced-care IBS treatment in Kolkata. Our senior specialists evaluate every case in detail and design a personalised Ayurveda-led plan that targets both symptoms and root causes.",
    ctaTagline: "Get Free Consultation With IBS Treatment Specialists in Kolkata",
    cityFaq: [
      {
        q: "How long does IBS treatment take for Kolkata patients?",
        a: "Most patients see meaningful improvement within ~90 days. Total treatment duration depends on case severity, adherence, and response — your doctor will share a personalised timeline at consultation.",
      },
      {
        q: "Can stress from city life worsen IBS in Kolkata?",
        a: "Yes — chronic stress directly impacts the gut-brain axis and is one of the most common triggers we see in urban IBS patients. Stress management and lifestyle coaching are part of every plan.",
      },
    ],
  },
  "ibs-treatment-in-hyderabad": {
    slug: "ibs-treatment-in-hyderabad",
    name: "Hyderabad",
    h1: "Effective IBS Treatment in Hyderabad — Talk to Our Experts Free",
    metaTitle: "Effective IBS Treatment in Hyderabad | Talk to Our Experts Free",
    metaDescription:
      "Effective IBS treatment in Hyderabad — Ayurveda-led specialist care, modern diagnostics, and gut-brain therapy with home-delivered medication.",
    heroIntro:
      "Effective IBS treatment in Hyderabad — speak to our specialists at no cost and get a personalised, Ayurveda-led plan that fits your symptoms, lifestyle, and food preferences.",
    ctaTagline: "Get Free Consultation With IBS Treatment Specialists in Hyderabad",
    cityFaq: [
      {
        q: "Is online IBS consultation reliable for Hyderabad patients?",
        a: "Yes. Online consultation under the Indian Telemedicine Practice Guidelines 2020 is fully reliable for IBS — our doctors review history, symptoms, and any prior reports before recommending a plan.",
      },
      {
        q: "Do you treat IBS along with other gut conditions in Hyderabad?",
        a: "Yes. Many patients have overlapping conditions — acid reflux, gastritis, food intolerance, post-infectious IBS. Your treatment plan addresses the IBS as well as related conditions where applicable.",
      },
    ],
  },
} as const;

export const CITY_SLUGS: ReadonlyArray<string> = Object.keys(CITY_DATA);

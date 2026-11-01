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
      "Specialist IBS treatment in Kerala by online consultation — Ayurveda-led care, diet plans for Kerala food, and medicines delivered home. Book a free evaluation.",
    heroIntro:
      "Book effective IBS treatment in Kerala today. Personalised care, advanced diagnostics, and holistic approaches to restore gut health are all part of our expert IBS treatment in Kerala. Our specialist team offers the best Ayurvedic treatment for IBS in Kerala.",
    ctaTagline: "Get Free Consultation With IBS Treatment Specialists in Kerala",
    cityFaq: [
      {
        q: "Is Ayurvedic treatment effective for IBS in Kerala?",
        a: "Yes. Kerala has a rich tradition of Ayurvedic medicine, long used for digestive disorders like IBS. Our clinic combines traditional Kerala Ayurvedic principles with modern medical approaches for optimal results.",
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
      "Specialist IBS treatment in Bangalore by online consultation — Ayurveda-led care, diet plans for South Indian food, and medicines delivered home.",
    heroIntro:
      "We offer expert IBS treatment in Bangalore with personalised care, advanced diagnostics, and a holistic approach to restore gut health. Identifying symptoms early helps our specialists build the most effective long-term plan.",
    ctaTagline: "Get Free Consultation With IBS Treatment Specialists in Bangalore",
    cityFaq: [
      {
        q: "Where can I get the best IBS treatment in Bangalore?",
        a: "IBS Clinic offers some of the best IBS treatment for Bangalore patients — through experienced Ayurvedic IBS specialists, telehealth consultations, and a structured 8-step protocol with home delivery of all medication.",
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
    h1: "Specialist IBS Treatment in Pune — Personalised Care for Gut Health",
    metaTitle: "Specialist IBS Treatment in Pune | Personalised Care for Gut Health",
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
    h1: "Specialist IBS Treatment in Ahmedabad — Free Consultation Today",
    metaTitle: "Specialist IBS Treatment in Ahmedabad | Free Consultation Today",
    metaDescription:
      "Specialist IBS treatment in Ahmedabad with Ayurveda-led care, gut-brain therapy, and dietary coaching tailored to Gujarati food and lifestyle patterns.",
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
        a: "Yes. All Ayurvedic powders prescribed by our doctors ship to any Ahmedabad pincode, usually within a few working days, with tracking shared by our team.",
      },
    ],
  },
  "ibs-treatment-in-chennai": {
    slug: "ibs-treatment-in-chennai",
    name: "Chennai",
    h1: "IBS Treatment in Chennai — Consult a Specialist Doctor for Free",
    metaTitle: "IBS Treatment in Chennai | Consult a Specialist Doctor Free",
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
  // --- Rebuilt Q4 2026 (Sprint 5). These 5 were live on WordPress and 404'd
  // after the July migration. Old copy listed a made-up local address and
  // "95% success" claims; neither is carried over.
  "ibs-treatment-in-lucknow": {
    slug: "ibs-treatment-in-lucknow",
    name: "Lucknow",
    h1: "IBS Treatment in Lucknow — Start with a Free Doctor Consultation",
    metaTitle: "IBS Treatment in Lucknow | Start with Free Doctor Consultation",
    metaDescription:
      "IBS treatment in Lucknow by online consultation with senior IBS doctors — Ayurveda-led care, diet plans for Awadhi food, and medicines delivered home.",
    heroIntro:
      "Get IBS treatment in Lucknow without long waits or repeat clinic trips. Senior IBS doctors review your history online, find your IBS type and triggers, and build a plan around your routine and Awadhi food habits, with medicines delivered to your door.",
    ctaTagline: "Get Free Consultation With IBS Treatment Specialists in Lucknow",
    cityFaq: [
      {
        q: "Do you have an IBS clinic in Lucknow?",
        a: "Our only physical clinic is in Virar West, Mumbai. Lucknow patients are treated through online video or phone consultations with the same senior doctors, and medicines are couriered to any Lucknow address.",
      },
      {
        q: "When should I see an IBS doctor in Lucknow?",
        a: "See a doctor if bloating, belly pain, or constipation and loose motions keep coming back for more than a few weeks, or affect work and sleep. See a doctor urgently for blood in the stool, weight loss without trying, or fever.",
      },
    ],
  },
  "ibs-treatment-in-jaipur": {
    slug: "ibs-treatment-in-jaipur",
    name: "Jaipur",
    h1: "Online IBS Treatment in Jaipur — Free Consultation with Specialists",
    metaTitle: "Online IBS Treatment in Jaipur | Free Consultation Offer",
    metaDescription:
      "Online IBS treatment in Jaipur with senior IBS doctors — Ayurveda-led care, diet plans for Rajasthani food, and medicines delivered home.",
    heroIntro:
      "Get IBS treatment in Jaipur from home. Our senior IBS doctors consult by video or phone, match your plan to your IBS type, and adapt your diet to Rajasthani food and Jaipur's dry heat, with medicines delivered to your door.",
    ctaTagline: "Get Free Consultation With IBS Treatment Specialists in Jaipur",
    cityFaq: [
      {
        q: "Can I get IBS treatment in Jaipur without visiting a clinic?",
        a: "Yes. Consultation, follow-ups and diet coaching all happen online, and medicines ship to your Jaipur address. Our only physical clinic is in Virar West, Mumbai.",
      },
      {
        q: "What is the best medicine for IBS?",
        a: "There is no single best medicine. It depends on your IBS type: constipation, loose motions or both. Your doctor matches Ayurvedic medicines, diet and lifestyle steps to your pattern.",
      },
    ],
  },
  "ibs-treatment-in-indore": {
    slug: "ibs-treatment-in-indore",
    name: "Indore",
    h1: "IBS Treatment in Indore — Trusted Specialists, Free Consultation",
    metaTitle: "IBS Treatment in Indore | Trusted Specialist & Free Consultation",
    metaDescription:
      "IBS treatment in Indore by online consultation with senior IBS doctors — Ayurveda-led care, diet plans for Malwa food, and medicines delivered home.",
    heroIntro:
      "Get IBS treatment in Indore that fits Indori life. Senior IBS doctors consult online, work out your IBS type and triggers, and give you a written plan for diet, routine and Ayurvedic medicines, delivered to your door.",
    ctaTagline: "Get Free Consultation With IBS Treatment Specialists in Indore",
    cityFaq: [
      {
        q: "Do you have an IBS clinic in Indore?",
        a: "Our only physical clinic is in Virar West, Mumbai. Indore patients consult the same senior doctors by video or phone, and medicines are couriered to any Indore address.",
      },
      {
        q: "How can I relieve IBS symptoms naturally?",
        a: "Regular meal times, slow eating, enough water, daily walking and managing stress help most people. Spotting your own food triggers with a short food and symptom diary matters too.",
      },
    ],
  },
  "ibs-treatment-in-nagpur": {
    slug: "ibs-treatment-in-nagpur",
    name: "Nagpur",
    h1: "IBS Treatment in Nagpur — Talk to an IBS Specialist Online",
    metaTitle: "IBS Treatment in Nagpur | Talk to an IBS Specialist Online",
    metaDescription:
      "No clinic visits needed: online IBS treatment in Nagpur with senior IBS doctors, Ayurveda-led care, diet plans for Vidarbha food, and medicines delivered home.",
    heroIntro:
      "Get IBS treatment in Nagpur with no clinic visits. Senior IBS doctors consult online, look at your symptoms, reports and routine, and build a plan that works with Vidarbha food and Nagpur's hot summers, with medicines delivered home.",
    ctaTagline: "Get Free Consultation With IBS Treatment Specialists in Nagpur",
    cityFaq: [
      {
        q: "Can I get IBS treatment in Nagpur online?",
        a: "Yes. Consultation, follow-ups and diet coaching happen by video or phone, and medicines ship to your Nagpur address. Our only physical clinic is in Virar West, Mumbai.",
      },
      {
        q: "How can I prevent IBS flare-ups?",
        a: "Eat at regular times, keep portions moderate, drink enough water, stay active and manage stress. Keeping a short food and symptom diary helps you and your doctor spot your own triggers.",
      },
    ],
  },
  "ibs-treatment-in-chandigarh": {
    slug: "ibs-treatment-in-chandigarh",
    name: "Chandigarh",
    h1: "IBS Treatment in Chandigarh — Free Consultation with IBS Specialists",
    metaTitle: "IBS Treatment in Chandigarh | Free Consultation Today",
    metaDescription:
      "IBS treatment in Chandigarh, Mohali and Panchkula by online consultation — Ayurveda-led care, diet plans for Punjabi food, and medicines delivered home.",
    heroIntro:
      "Get IBS treatment in Chandigarh, Mohali and Panchkula from senior IBS doctors online. We find your IBS type and triggers, adapt your diet to Punjabi home food, and track your progress with regular follow-ups, with medicines delivered home.",
    ctaTagline: "Get Free Consultation With IBS Treatment Specialists in Chandigarh",
    cityFaq: [
      {
        q: "How do I find a good IBS doctor in Chandigarh?",
        a: "Look for a doctor who treats IBS regularly, works out your IBS type before prescribing, and gives you a diet and follow-up plan, not just tablets. Our senior IBS doctors consult Chandigarh patients online; the only physical clinic is in Virar West, Mumbai.",
      },
      {
        q: "What are the early warning signs of IBS?",
        a: "Belly pain or cramps that ease after passing stool, bloating, gas, and a change in how often or how hard your stools are. See a doctor quickly for blood in the stool or weight loss without trying.",
      },
    ],
  },
} as const;

export const CITY_SLUGS: ReadonlyArray<string> = Object.keys(CITY_DATA);

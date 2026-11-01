import type { CityFaq } from "@/lib/cities";

/**
 * Genuinely local content for each city page (Q4 2026 recovery): local food
 * habits and low-FODMAP swaps, lifestyle factors, and how online care works
 * from that city. Keeps the 13 city pages from being near-duplicates.
 *
 * Rules: no local address or clinic claims (the only physical clinic is in
 * Virar West, Mumbai); no city-specific patient numbers; FODMAP statements
 * follow Monash University guidance (see New Pages/sources/verified-references.md).
 */
export interface LocalSwap {
  food: string;
  swap: string;
}

export interface CityLocal {
  /** H2 for the local section */
  title: string;
  /** Paragraphs */
  intro: ReadonlyArray<string>;
  swaps: ReadonlyArray<LocalSwap>;
  faq: ReadonlyArray<CityFaq>;
}

const ONLINE_STEPS =
  "Book a free 15-minute evaluation, then a detailed video or phone consultation with a senior IBS doctor who reviews your history and reports. You receive a written plan — diet, lifestyle and Ayurvedic medicines matched to your IBS type — with medicines shipped to your home and regular online follow-ups.";

export const CITY_LOCAL: Readonly<Record<string, CityLocal>> = {
  "ibs-treatment-in-delhi": {
    title: "IBS Care for Delhi Patients: Food, Routine and Online Follow-Up",
    intro: [
      "Delhi food is some of the hardest on an IBS gut. Rajma-chawal, chole bhature, stuffed parathas and street chaat combine wheat, onion, garlic and pulses — the fructans and GOS that ferment in a sensitive bowel — often fried and eaten late. Add milky chai through the day and long commutes that push meals around, and evening bloating and morning urgency are a very common pattern among our Delhi patients.",
      "You don't have to give up Punjabi food. Most patients do well by changing the base of the meal rather than the flavour, and by testing pulses and wheat back in carefully once symptoms settle.",
    ],
    swaps: [
      { food: "Rajma-chawal or a big bowl of chole", swap: "Rice with a tomato-ginger egg, chicken or tofu curry; test a small portion of rinsed chickpeas later" },
      { food: "Aloo or gobhi paratha", swap: "Rice or millet roti with jeera aloo (cauliflower is high-FODMAP)" },
      { food: "Chaat with onion and imli chutney", swap: "Boiled potato chaat with lemon, roasted jeera and coriander" },
      { food: "Lassi or milky chai several times a day", swap: "Lactose-free milk in chai, or chaas in a small glass if tolerated" },
    ],
    faq: [
      { q: "Which Delhi foods commonly trigger IBS?", a: "Rajma, chole, stuffed parathas, onion-garlic gravies, street chaat and milky chai or lassi are the most frequent triggers we see in Delhi patients, because they combine wheat, pulses, onion, garlic and lactose." },
      { q: "How does an online IBS consultation work for Delhi patients?", a: ONLINE_STEPS },
    ],
  },
  "ibs-treatment-in-kolkata": {
    title: "IBS Care for Kolkata Patients: Bengali Food, Stress and Online Follow-Up",
    intro: [
      "The good news for Kolkata patients is that a traditional Bengali meal of rice, fish and lightly spiced vegetables is naturally kind to an IBS gut — rice and fish contain no FODMAPs, and mustard oil and panch phoron are usually well tolerated. The trouble tends to come from elsewhere: luchi and kachori made from maida, phuchka with chickpeas and spicy tamarind water, and milk sweets such as rosogolla, sandesh and mishti doi.",
      "Long working hours, crowded commutes and irregular meals also feature in many Kolkata patients' stories, and stress feeds IBS through the gut–brain axis. Treatment works on both the plate and the pressure.",
    ],
    swaps: [
      { food: "Luchi or kachori", swap: "Rice, or a rice-flour roti" },
      { food: "Phuchka or ghugni", swap: "Jhal muri made with puffed rice, peanuts, cucumber and tomato (no onion)" },
      { food: "Mishti doi, rosogolla or sandesh", swap: "A small serving occasionally after a meal, or lactose-free curd with a little jaggery" },
      { food: "Heavy onion-garlic kosha mangsho", swap: "Fish jhol or chicken curry with ginger, cumin and tomato" },
    ],
    faq: [
      { q: "Is Bengali food good or bad for IBS?", a: "A traditional meal of rice, fish and lightly spiced vegetables is usually well tolerated. Maida-based luchi and kachori, phuchka, onion-garlic heavy gravies and milk sweets are the common Kolkata triggers." },
      { q: "How does an online IBS consultation work for Kolkata patients?", a: ONLINE_STEPS },
    ],
  },
  "ibs-treatment-in-pune": {
    title: "IBS Care for Pune Patients: Maharashtrian Food, Desk Jobs and Online Care",
    intro: [
      "Many of our Pune patients work long hours at a desk, eat lunch late and dinner later, and rely on quick food — misal pav, vada pav, sandwiches and canteen thalis. Misal combines sprouted moth beans, onion and spice with wheat pav, which is a heavy FODMAP load, and long sitting slows bowel movement for people with IBS-C.",
      "Maharashtrian home food has good options too: poha, sabudana khichdi, rice bhakri and varan-bhaat in moderate portions are usually easier on the gut.",
    ],
    swaps: [
      { food: "Misal pav or vada pav", swap: "Poha with peanuts, or sabudana khichdi (small portion of peanuts)" },
      { food: "Wheat chapati at every meal", swap: "Rice bhakri or plain rice on some days" },
      { food: "Large bowl of usal (sprouted pulses)", swap: "Egg bhurji or tofu bhaji without onion; test usal later in small amounts" },
      { food: "Cutting chai with milk, several times", swap: "Lactose-free milk chai, or ginger or lemongrass tea" },
    ],
    faq: [
      { q: "Which Pune foods commonly trigger IBS?", a: "Misal pav, vada pav, usal made from sprouted pulses, wheat chapati at every meal and milky chai are frequent triggers. Poha, sabudana khichdi and rice-based meals are usually better tolerated." },
      { q: "How does an online IBS consultation work for Pune patients?", a: ONLINE_STEPS },
    ],
  },
  "ibs-treatment-in-bangalore": {
    title: "IBS Care for Bangalore Patients: South Indian Food, Long Hours and Online Care",
    intro: [
      "Bangalore's long tech workdays, late dinners and irregular sleep are a recurring theme in our patients' histories, and they make IBS harder to control. On the plate, South Indian staples are mixed news: rice, curd rice and vegetable palya are usually well tolerated, while bisi bele bath, large portions of sambar, onion-rich chutneys and strong filter coffee often aggravate symptoms.",
      "Idli and dosa contain urad dal: some people with IBS tolerate them well, others react, so it is worth testing them during the reintroduction phase rather than cutting them out for good.",
    ],
    swaps: [
      { food: "Bisi bele bath or a large bowl of sambar", swap: "Lemon rice or jeera rice with a vegetable palya; a small katori of sambar" },
      { food: "Onion or coconut-onion chutney", swap: "Tomato or coriander-ginger chutney" },
      { food: "Two or three cups of strong filter coffee", swap: "One cup with food, or ginger or peppermint tea" },
      { food: "Late, heavy takeaway dinners", swap: "An earlier, lighter dinner such as curd rice made with lactose-free curd" },
    ],
    faq: [
      { q: "Can I eat idli and dosa if I have IBS?", a: "Many people with IBS tolerate idli and dosa, but the urad dal in the batter can trigger symptoms in some. Keep portions moderate and test them during the reintroduction phase of your diet plan." },
      { q: "How does an online IBS consultation work for Bangalore patients?", a: ONLINE_STEPS },
    ],
  },
  "ibs-treatment-in-hyderabad": {
    title: "IBS Care for Hyderabad Patients: Rich Food, Spice and Online Follow-Up",
    intro: [
      "Hyderabadi cuisine is rich and generous — biryani cooked with fried onions and ghee, haleem made from wheat, lentils and meat, mirchi ka salan, and milky Irani chai with biscuits. For an IBS gut, the combination of fat, onion, wheat, pulses and strong chilli is a reliable trigger, especially when eaten late in the evening.",
      "The aim isn't to give up biryani; it is to find the portion and preparation your gut tolerates, and to keep everyday meals simpler.",
    ],
    swaps: [
      { food: "Biryani with fried onions, a large portion", swap: "Jeera or plain rice with chicken or egg curry; biryani occasionally, in a small portion" },
      { food: "Haleem", swap: "A small bowl occasionally; on regular days, chicken or mutton soup with rice" },
      { food: "Mirchi ka salan or very spicy gravies", swap: "Milder tomato-based gravies, especially for IBS-D" },
      { food: "Irani chai with Osmania biscuits", swap: "Lactose-free milk chai with a few rice crackers" },
    ],
    faq: [
      { q: "Which Hyderabad foods commonly trigger IBS?", a: "Biryani with fried onions and ghee, haleem, very spicy gravies like mirchi ka salan, and milky Irani chai are common triggers because they combine fat, onion, wheat, pulses, lactose and chilli." },
      { q: "How does an online IBS consultation work for Hyderabad patients?", a: ONLINE_STEPS },
    ],
  },
  "ibs-treatment-in-chennai": {
    title: "IBS Care for Chennai Patients: Tamil Food, Heat and Online Follow-Up",
    intro: [
      "A Tamil meal can be very IBS-friendly — rice, curd rice, poriyal and kootu are usually well tolerated. The common triggers are large servings of sambar and pongal made with dal, garlic-heavy rasam or kuzhambu, onion-rich chutneys, and strong filter coffee. In Chennai's heat, many patients also drink too little water, which worsens constipation.",
      "Small changes — moderating dal portions, choosing tomato chutney over onion chutney, and keeping a water bottle at hand — make a noticeable difference for many patients.",
    ],
    swaps: [
      { food: "Large servings of sambar or ven pongal", swap: "A small katori of sambar; rice with poriyal or kootu" },
      { food: "Garlic-heavy rasam or kuzhambu", swap: "Tomato-pepper rasam made without garlic" },
      { food: "Onion chutney", swap: "Tomato, coriander or curry-leaf chutney" },
      { food: "Strong filter coffee, several cups", swap: "One cup with food; water and buttermilk in small amounts if tolerated" },
    ],
    faq: [
      { q: "Is curd rice good for IBS?", a: "Curd rice is usually well tolerated because curd has less lactose than milk and rice contains no FODMAPs. If dairy clearly triggers you, make it with lactose-free curd." },
      { q: "How does an online IBS consultation work for Chennai patients?", a: ONLINE_STEPS },
    ],
  },
  "ibs-treatment-in-ahmedabad": {
    title: "IBS Care for Ahmedabad Patients: Gujarati Food, Jain Cooking and Online Care",
    intro: [
      "Gujarati home food has one big IBS advantage: many families, especially those following Jain cooking, already avoid onion and garlic — two of the strongest FODMAP triggers. The challenge is what fills the plate instead: wheat rotli at every meal, besan-based farsan such as dhokla, khandvi and fafda, kadhi made with besan and curd, sweetened dals and milk-based sweets.",
      "Most Ahmedabad patients are vegetarian, so protein needs care on a low-FODMAP diet: firm tofu, peanuts, seeds, hard cheese and small portions of rinsed pulses help keep meals balanced.",
    ],
    swaps: [
      { food: "Wheat rotli at every meal", swap: "Bajra or rice rotla on some days, or plain rice" },
      { food: "Dhokla, khandvi, fafda (besan farsan)", swap: "Sabudana vada or khichdi, or roasted peanuts in small portions" },
      { food: "Kadhi and a large bowl of dal", swap: "A small katori of dal; jeera rice with a dry vegetable shaak" },
      { food: "Milk sweets and shrikhand", swap: "Small servings occasionally, or lactose-free curd with fruit like papaya" },
    ],
    faq: [
      { q: "Is Jain food good for IBS?", a: "Jain cooking avoids onion and garlic, which removes two major IBS triggers. Watch the rest of the plate, though: wheat rotli, besan farsan, large portions of dal and milk sweets can still cause symptoms." },
      { q: "How does an online IBS consultation work for Ahmedabad patients?", a: ONLINE_STEPS },
    ],
  },
  "ibs-treatment-in-kerala": {
    title: "IBS Care for Kerala Patients: Monsoon Infections, Coconut and Online Care",
    intro: [
      "Kerala food is often gentle on an IBS gut — rice, fish, coconut in normal amounts, kappa (tapioca) and vegetable thoran are usually well tolerated. Triggers we commonly see are porotta made from maida, beef or chicken fry cooked with plenty of onion and garlic, very spicy curries, jackfruit and over-ripe bananas.",
      "The monsoon also matters. Gut infections are more common in the rainy months, and IBS that starts after a bout of infectious gastroenteritis — post-infectious IBS — is well documented: [more than 1 in 10 people](https://pubmed.ncbi.nlm.nih.gov/28069350/) develop IBS after such an infection. If your symptoms began after a stomach infection, tell your doctor.",
    ],
    swaps: [
      { food: "Porotta", swap: "Puttu or appam made from rice, or plain rice" },
      { food: "Onion-garlic heavy fry or roast", swap: "Fish curry or meen pollichathu flavoured with ginger, pepper and curry leaves" },
      { food: "Jackfruit and over-ripe bananas", swap: "Firm bananas, papaya or pineapple" },
      { food: "Strong spicy curries during a flare", swap: "A mild vegetable or chicken stew made with coconut milk" },
    ],
    faq: [
      { q: "Can a stomach infection cause IBS?", a: "Yes. Post-infectious IBS is well documented — a meta-analysis found that more than 1 in 10 people develop IBS after infectious gastroenteritis. Gut infections are more common in Kerala's monsoon months." },
      { q: "How does an online IBS consultation work for patients in Kerala?", a: ONLINE_STEPS },
    ],
  },
  // --- Sprint 5 (Q4 2026): the 5 rebuilt cities.
  "ibs-treatment-in-lucknow": {
    title: "IBS Care for Lucknow Patients: Awadhi Food, Late Dinners and Online Care",
    intro: [
      "Lucknow's food is rich and slow-cooked: biryani, nihari with kulcha or sheermal, kebabs, korma, and a breakfast of khasta kachori with aloo sabzi. Much of it combines maida or wheat, onion, garlic, cream and ghee — a heavy FODMAP and fat load for an IBS gut, often eaten late in the evening. Malai makhan, kulfi and milky chai add lactose on top.",
      "Most Lucknow patients don't need to give up Awadhi food. What helps is simpler everyday meals, smaller portions of the rich dishes, and an earlier dinner, so the bowel is not working hardest overnight.",
    ],
    swaps: [
      { food: "Khasta kachori with aloo sabzi for breakfast", swap: "Poha or vegetable upma made without onion" },
      { food: "Nihari with kulcha or sheermal", swap: "Mutton or chicken shorba with plain rice; nihari occasionally, in a small bowl" },
      { food: "Rich korma or biryani with fried onions, late at night", swap: "Chicken or paneer tikka with jeera rice, eaten earlier" },
      { food: "Malai makhan, kulfi or milky chai", swap: "A small serving occasionally; lactose-free milk in chai" },
    ],
    faq: [
      { q: "Which Lucknow foods commonly trigger IBS?", a: "Kachori-sabzi, nihari with kulcha or sheermal, rich kormas and biryani with fried onions, and milky sweets like malai makhan and kulfi are frequent triggers because they combine wheat or maida, onion, garlic, fat and lactose." },
      { q: "How does an online IBS consultation work for Lucknow patients?", a: ONLINE_STEPS },
    ],
  },
  "ibs-treatment-in-jaipur": {
    title: "IBS Care for Jaipur Patients: Rajasthani Food, Dry Heat and Online Care",
    intro: [
      "Rajasthani food is built for a desert climate: ghee-rich dal baati churma, gatte ki sabzi made from besan in a curd gravy, pyaaz kachori and mirchi vada. Wheat, besan, onion and plenty of ghee together are hard on an IBS gut, and very spicy dishes often worsen IBS-D.",
      "Jaipur's dry heat matters too. Many patients drink less water than they need, especially in summer, which makes stools harder and IBS-C worse. Bajra and makki rotis, rice, and moong dal in small portions are useful everyday options.",
    ],
    swaps: [
      { food: "Dal baati churma", swap: "One baati with a small katori of moong dal; skip the extra ghee" },
      { food: "Pyaaz kachori or mirchi vada", swap: "Poha with peanuts and lemon" },
      { food: "Gatte ki sabzi (besan in curd gravy)", swap: "Ker sangri or a dry vegetable sabzi with bajra roti" },
      { food: "Lassi, several glasses in summer", swap: "Water through the day; chaas in a small glass if tolerated" },
    ],
    faq: [
      { q: "Which Jaipur foods commonly trigger IBS?", a: "Dal baati churma, pyaaz kachori, mirchi vada, besan-based gatte and large glasses of lassi are common triggers because they combine wheat, besan, onion, fat and lactose. Too little water in the dry heat also worsens constipation." },
      { q: "How does an online IBS consultation work for Jaipur patients?", a: ONLINE_STEPS },
    ],
  },
  "ibs-treatment-in-indore": {
    title: "IBS Care for Indore Patients: Poha, Namkeen, Sarafa and Online Care",
    intro: [
      "Indore starts the day with poha, and that is good news: plain poha is rice-based and usually well tolerated. The trouble is what comes with it and after it — a thick layer of sev, jalebi, namkeen through the day, and late-night snacking at Sarafa or Chappan Dukan on kachori, dahi vada and garadu. Sev and most namkeen are made from besan, and fried snacks late at night are a common reason for morning urgency.",
      "Indori shikanji is another hidden trigger: unlike lemon water elsewhere, it is a thick, sweet milk drink, so it adds lactose and sugar.",
    ],
    swaps: [
      { food: "Poha topped with lots of sev, plus jalebi", swap: "Poha with peanuts and pomegranate, a light sprinkle of sev" },
      { food: "Namkeen and sev through the day", swap: "A small bowl of roasted peanuts" },
      { food: "Late-night kachori or dahi vada at Sarafa", swap: "Sabudana khichdi in a small portion, earlier in the evening" },
      { food: "Indori shikanji (milk-based)", swap: "Nimbu pani with a pinch of salt and roasted jeera" },
    ],
    faq: [
      { q: "Is poha good for IBS?", a: "Plain poha is made from flattened rice and is usually well tolerated. Go easy on the sev, onion and jalebi that often come with it in Indore, and add peanuts for protein." },
      { q: "How does an online IBS consultation work for Indore patients?", a: ONLINE_STEPS },
    ],
  },
  "ibs-treatment-in-nagpur": {
    title: "IBS Care for Nagpur Patients: Saoji Spice, Summer Heat and Online Care",
    intro: [
      "Nagpur is known for Saoji food — mutton and chicken curries cooked with lots of oil, dry chilli, garlic and onion — and for tarri poha served with a spicy chana gravy. Very spicy, oily, garlic-heavy meals are a common trigger for IBS-D and for burning after meals.",
      "Nagpur's summers are among the hottest in India, and dehydration makes constipation worse. The city's oranges are a good choice: a medium orange is low in FODMAPs and adds fluid and fibre.",
    ],
    swaps: [
      { food: "Saoji mutton or chicken curry", swap: "A milder tomato-ginger curry with rice; Saoji occasionally, in a small portion" },
      { food: "Tarri poha with chana gravy", swap: "Plain poha with peanuts and lemon" },
      { food: "Zunka or patodi made from besan", swap: "A dry vegetable sabzi with jowar bhakri" },
      { food: "Cold fizzy drinks in the heat", swap: "Water, nimbu pani, or one Nagpur orange" },
    ],
    faq: [
      { q: "Is spicy Saoji food bad for IBS?", a: "For many people with IBS, especially IBS-D, very spicy, oily and garlic-heavy dishes like Saoji curries trigger cramps, urgency or burning. You don't have to give them up completely; keep them occasional and in small portions." },
      { q: "How does an online IBS consultation work for Nagpur patients?", a: ONLINE_STEPS },
    ],
  },
  "ibs-treatment-in-chandigarh": {
    title: "IBS Care for Chandigarh Patients: Punjabi Food, Lassi and Online Care",
    intro: [
      "Punjabi home food has one handy IBS-friendly staple: makki di roti, made from maize flour, which is low in FODMAPs and a good change from wheat. Its usual partner, sarson da saag, is often cooked with plenty of garlic, and the white butter on top adds fat. Other common triggers we see in the tricity are chole kulche, stuffed parathas with butter, creamy butter chicken and large glasses of lassi.",
      "Chandigarh's open roads, gardens and Sukhna Lake make a daily walk easy, and regular movement helps IBS. A 20 to 30 minute walk on most days is part of many of our patients' plans.",
    ],
    swaps: [
      { food: "Aloo or gobhi paratha with white butter", swap: "Makki di roti or a plain roti with a dry sabzi" },
      { food: "Sarson da saag made with lots of garlic", swap: "Saag cooked in garlic-infused oil, with the garlic pieces removed" },
      { food: "Chole kulche or rajma-chawal", swap: "Rice with a moong dal tadka or chicken curry" },
      { food: "A tall glass of lassi", swap: "Chaas in a small glass, or lactose-free curd" },
    ],
    faq: [
      { q: "Is makki di roti good for IBS?", a: "Maize flour is low in FODMAPs, so makki di roti is a useful alternative to wheat roti for many people with IBS. Keep the white butter light and watch how much garlic goes into the saag." },
      { q: "How does an online IBS consultation work for Chandigarh patients?", a: ONLINE_STEPS },
    ],
  },
};

export function getCityLocal(slug: string): CityLocal | undefined {
  return CITY_LOCAL[slug];
}

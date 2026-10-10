/** Verified 2026-10-10. Mirror of IBS Clinic/New Pages/sources/verified-references.md. Cite only these. */
export interface Reference {
  citation: string;
  url: string;
}

export type RefId = keyof typeof GUT_REFERENCES;

export const GUT_REFERENCES = {
  R1: {
    citation:
      "Rao SSC et al. Randomized controlled trial of biofeedback, sham feedback, and standard therapy for dyssynergic defecation. Clinical Gastroenterology and Hepatology, 2007.",
    url: "https://www.cghjournal.org/article/S1542-3565(06)01321-8/pdf",
  },
  R2: {
    citation: "Rao SSC et al. Long-term efficacy of biofeedback therapy for dyssynergic defecation. PubMed 20179692.",
    url: "https://pubmed.ncbi.nlm.nih.gov/20179692/",
  },
  R3: {
    citation:
      "Rao SSC et al. Home-based versus office-based biofeedback therapy for constipation with dyssynergic defecation. Lancet Gastroenterology & Hepatology, 2018.",
    url: "https://www.thelancet.com/journals/langas/article/PIIS2468-1253(18)30266-8/abstract",
  },
  R4: {
    citation:
      "Sakakibara R et al. Influence of body position on defecation in humans. Low Urinary Tract Symptoms, 2010.",
    url: "https://pubmed.ncbi.nlm.nih.gov/26676214/",
  },
  R5: {
    citation:
      "Modi RM et al. Implementation of a defecation posture modification device: impact on bowel movement patterns in healthy subjects. Journal of Clinical Gastroenterology, 2019.",
    url: "https://pubmed.ncbi.nlm.nih.gov/30346317/",
  },
  R6: {
    citation:
      "Trieu RQ et al. Using a footstool does not aid simulated defecation in undifferentiated constipation: a randomized trial. Neurogastroenterology & Motility, 2023.",
    url: "https://pubmed.ncbi.nlm.nih.gov/36989181/",
  },
  R7: {
    citation: "Thyroid disorders and gastrointestinal dysmotility: an old association. PubMed Central, PMC11129086.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11129086/",
  },
  R8: {
    citation:
      "Chang L et al. AGA-ACG Clinical Practice Guideline: Pharmacological Management of Chronic Idiopathic Constipation. Gastroenterology, 2023.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10542656/",
  },
  R9: {
    citation:
      "Lacy BE et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. American Journal of Gastroenterology, 2021.",
    url: "https://pubmed.ncbi.nlm.nih.gov/33315591/",
  },
  R10: {
    citation: "Assessment of Gastrointestinal Autonomic Dysfunction. Journal of Clinical Medicine, 2021;10(7):1392.",
    url: "https://www.mdpi.com/2077-0383/10/7/1392",
  },
} as const satisfies Readonly<Record<string, Reference>>;

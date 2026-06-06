import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";

export const COMMON_PROBLEMS = [
  "Bloating",
  "Gas",
  "Irregular bowel movements",
  "Diarrhea",
  "Stomach pain",
  "Constipation",
  "Acid reflux",
  "Loss of appetite",
  "Nausea",
  "Heartburn",
  "Regurgitation",
  "Cramps",
] as const;

export type CommonProblem = (typeof COMMON_PROBLEMS)[number];

export const SITE_REFERENCE = [
  "Google",
  "Referral",
  "Newspaper",
  "Social Media",
  "Friend or Family",
  "Other",
] as const;

export type SiteReference = (typeof SITE_REFERENCE)[number];

export const patientIntakeSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),
  email: z.string().email("Please enter a valid email."),
  address: z.string().max(240, "Address is too long.").optional().or(z.literal("")),
  city: z
    .string()
    .min(2, "Please enter your city.")
    .max(80, "City name is too long."),
  zip: z.string().max(20, "Zip code is too long.").optional().or(z.literal("")),
  state: z.string().max(80, "State name is too long.").optional().or(z.literal("")),
  country: z.string().max(80, "Country name is too long.").optional().or(z.literal("")),
  landline: z.string().max(20, "Landline is too long.").optional().or(z.literal("")),
  mobile: z
    .string()
    .min(7, "Please enter a valid mobile number.")
    .refine((v) => isValidPhoneNumber(v, "IN"), "Please enter a valid mobile number."),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Please select your gender." }),
  }),
  age: z.coerce
    .number({ invalid_type_error: "Please enter your age." })
    .int("Age must be a whole number.")
    .min(1, "Age must be at least 1.")
    .max(120, "Please enter a valid age."),
  problemDetails: z
    .string()
    .min(10, "Please describe your problem in a bit more detail.")
    .max(2000, "Keep it under 2000 characters."),
  problemStart: z
    .string()
    .max(120, "Keep it short — when did it start?")
    .optional()
    .or(z.literal("")),
  commonProblems: z.array(z.enum(COMMON_PROBLEMS)).optional().default([]),
  treatedBefore: z
    .string()
    .max(1000, "Keep it under 1000 characters.")
    .optional()
    .or(z.literal("")),
  pastInvestigations: z
    .string()
    .max(2000, "Keep it under 2000 characters.")
    .optional()
    .or(z.literal("")),
  otherInfo: z
    .string()
    .max(2000, "Keep it under 2000 characters.")
    .optional()
    .or(z.literal("")),
  siteReference: z.enum(SITE_REFERENCE).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "We need your consent to contact you." }),
  }),
  // Honeypot — bots fill this; humans never see it.
  website_url: z.string().max(0).optional().or(z.literal("")),
});

export type PatientIntakeInput = z.infer<typeof patientIntakeSchema>;

export const genderLabels: Record<PatientIntakeInput["gender"], string> = {
  male: "Male",
  female: "Female",
  other: "Other",
};

import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";

export const leadSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number.")
    .refine((v) => isValidPhoneNumber(v, "IN"), "Please enter a valid phone number."),
  city: z
    .string()
    .min(2, "Please enter your city.")
    .max(80, "City name is too long."),
  callTime: z.enum(["today", "tomorrow", "this_week", "specific"], {
    errorMap: () => ({ message: "Please pick a preferred call time." }),
  }),
  specificTime: z.string().optional(),
  concern: z.string().max(280, "Keep it under 280 characters.").optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "We need your consent to call you." }),
  }),
  // Honeypot — bots fill this; humans never see it.
  website_url: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const callTimeLabels: Record<LeadInput["callTime"], string> = {
  today: "Today",
  tomorrow: "Tomorrow",
  this_week: "This week",
  specific: "Pick a time",
};

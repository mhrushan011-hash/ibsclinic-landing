"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  COMMON_PROBLEMS,
  genderLabels,
  patientIntakeSchema,
  type PatientIntakeInput,
} from "@/lib/patient-schema";
import { pushEvent } from "@/lib/analytics";
import {
  FORMSUBMIT_AJAX_ENDPOINT,
  LEAD_SHEET_WEBHOOK_URL,
} from "@/lib/forms-config";

export interface PatientIntakeFormProps {
  defaultCity?: string;
  source?: string;
  headingId?: string;
}

export function PatientIntakeForm({
  defaultCity,
  source = "patient_intake",
  headingId,
}: PatientIntakeFormProps) {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PatientIntakeInput>({
    resolver: zodResolver(patientIntakeSchema),
    defaultValues: {
      country: "India",
      city: defaultCity ?? "",
      commonProblems: [],
    },
  });

  const onSubmit = async (data: PatientIntakeInput) => {
    setSubmitError(null);

    // Honeypot tripped — silently redirect so the bot sees a normal success.
    if (data.website_url) {
      router.push("/thanks");
      return;
    }

    // Fire-and-forget: save common fields to the Sheet (same tab as short form).
    if (LEAD_SHEET_WEBHOOK_URL) {
      fetch(LEAD_SHEET_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          phone: data.mobile,
          city: data.city,
          callTime: "",
          specificTime: "",
          concern: "",
          consent: "yes",
          source: "patient_intake",
        }),
      }).catch(() => {});
    }

    const payload = {
      fullName: data.fullName,
      email: data.email,
      gender: genderLabels[data.gender],
      age: String(data.age),
      mobile: data.mobile,
      landline: data.landline ?? "",
      address: data.address ?? "",
      city: data.city,
      state: data.state ?? "",
      zip: data.zip ?? "",
      country: data.country ?? "",
      problemDetails: data.problemDetails,
      problemStart: data.problemStart ?? "",
      commonProblems: (data.commonProblems ?? []).join(", "),
      treatedBefore: data.treatedBefore ?? "",
      pastInvestigations: data.pastInvestigations ?? "",
      consent: "yes",
      _subject: `New patient intake — ${data.fullName}, ${data.city}, ${data.mobile}`,
      _template: "table",
      _captcha: "false",
      _honey: data.website_url ?? "",
    };

    try {
      const res = await fetch(FORMSUBMIT_AJAX_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        setSubmitError(
          "Couldn't send right now. Please call +91 750 033 4343.",
        );
        return;
      }
      pushEvent({ event: "patient_intake_submit", source });
      router.push("/thanks");
    } catch {
      setSubmitError("Network issue. Please call +91 750 033 4343.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="card flex flex-col gap-6"
      aria-label="Patient consultation form"
    >
      <div className="space-y-1">
        <h3 id={headingId} className="font-heading text-h3 text-charcoal">
          🌿 New Patient Consultation Form
        </h3>
        <p className="text-sm text-charcoal-soft">
          Fill in your details — a senior IBS doctor will review your case and
          call you back. All information is confidential.
        </p>
      </div>

      {/* PERSONAL */}
      <fieldset className="space-y-4">
        <legend className="font-heading text-base text-green">
          Personal information
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            id="fullName"
            label="Full name"
            error={errors.fullName?.message}
          >
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="e.g., Pooja Sharma"
              className="input-base"
              {...register("fullName")}
              aria-invalid={!!errors.fullName}
            />
          </Field>
          <Field
            id="email"
            label="E-Mail"
            error={errors.email?.message}
          >
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="input-base"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
          </Field>
          <Field id="gender" label="Gender" error={errors.gender?.message}>
            <select
              id="gender"
              className="input-base"
              defaultValue=""
              {...register("gender")}
              aria-invalid={!!errors.gender}
            >
              <option value="" disabled>
                Select…
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </Field>
          <Field id="age" label="Age" error={errors.age?.message}>
            <input
              id="age"
              type="number"
              inputMode="numeric"
              min={1}
              max={120}
              placeholder="e.g., 32"
              className="input-base"
              {...register("age")}
              aria-invalid={!!errors.age}
            />
          </Field>
        </div>
      </fieldset>

      {/* CONTACT */}
      <fieldset className="space-y-4">
        <legend className="font-heading text-base text-green">
          Contact details
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="mobile" label="Mobile No" error={errors.mobile?.message}>
            <input
              id="mobile"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+91 9XXXXXXXXX"
              className="input-base"
              {...register("mobile")}
              aria-invalid={!!errors.mobile}
            />
          </Field>
          <Field
            id="landline"
            label="Landline (optional)"
            error={errors.landline?.message}
          >
            <input
              id="landline"
              type="tel"
              autoComplete="tel-national"
              placeholder="e.g., 022 12345678"
              className="input-base"
              {...register("landline")}
            />
          </Field>
        </div>
        <Field id="address" label="Address" error={errors.address?.message}>
          <input
            id="address"
            type="text"
            autoComplete="street-address"
            placeholder="House / flat, street, locality"
            className="input-base"
            {...register("address")}
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field id="city" label="City" error={errors.city?.message}>
            <input
              id="city"
              type="text"
              autoComplete="address-level2"
              placeholder="e.g., Pune"
              className="input-base"
              {...register("city")}
              aria-invalid={!!errors.city}
            />
          </Field>
          <Field id="state" label="State" error={errors.state?.message}>
            <input
              id="state"
              type="text"
              autoComplete="address-level1"
              placeholder="e.g., Maharashtra"
              className="input-base"
              {...register("state")}
            />
          </Field>
          <Field id="zip" label="Zip code" error={errors.zip?.message}>
            <input
              id="zip"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="e.g., 411001"
              className="input-base"
              {...register("zip")}
            />
          </Field>
          <Field id="country" label="Country" error={errors.country?.message}>
            <input
              id="country"
              type="text"
              autoComplete="country-name"
              className="input-base"
              {...register("country")}
            />
          </Field>
        </div>
      </fieldset>

      {/* MEDICAL HISTORY */}
      <fieldset className="space-y-4">
        <legend className="font-heading text-base text-green">
          Medical history
        </legend>
        <Field
          id="problemDetails"
          label="Problem details"
          error={errors.problemDetails?.message}
        >
          <textarea
            id="problemDetails"
            rows={4}
            maxLength={2000}
            placeholder="Describe your current symptoms, severity, and how they affect daily life."
            className="input-base resize-y"
            {...register("problemDetails")}
            aria-invalid={!!errors.problemDetails}
          />
        </Field>
        <Field
          id="problemStart"
          label="When did the problem start? (optional)"
          error={errors.problemStart?.message}
        >
          <input
            id="problemStart"
            type="text"
            placeholder="e.g., 2 years ago, March 2024, after a stomach infection"
            className="input-base"
            {...register("problemStart")}
          />
        </Field>

        <div className="space-y-2">
          <p className="text-sm font-medium">
            Common problems you experience (select all that apply)
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {COMMON_PROBLEMS.map((problem) => (
              <label
                key={problem}
                className="flex cursor-pointer items-center gap-2 rounded-[10px] border border-border bg-[#FBF6EC] px-3 py-2 text-sm has-[:checked]:border-green has-[:checked]:bg-green-tint"
              >
                <input
                  type="checkbox"
                  value={problem}
                  className="accent-green"
                  {...register("commonProblems")}
                />
                <span>{problem}</span>
              </label>
            ))}
          </div>
        </div>

        <Field
          id="treatedBefore"
          label="Treated before? (optional)"
          error={errors.treatedBefore?.message}
        >
          <textarea
            id="treatedBefore"
            rows={3}
            maxLength={1000}
            placeholder="List any treatments, doctors, hospitals, or medicines tried previously."
            className="input-base resize-y"
            {...register("treatedBefore")}
          />
        </Field>
        <Field
          id="pastInvestigations"
          label="Past investigations (optional)"
          error={errors.pastInvestigations?.message}
        >
          <textarea
            id="pastInvestigations"
            rows={3}
            maxLength={2000}
            placeholder="Reports, scans, endoscopy, blood tests, etc. — what was done and what was found."
            className="input-base resize-y"
            {...register("pastInvestigations")}
          />
        </Field>
      </fieldset>

      <label className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-green"
          {...register("consent")}
        />
        <span>
          You can call me on this number and message me on WhatsApp / email for
          consultation follow-up.
        </span>
      </label>
      {errors.consent && (
        <p className="text-sm text-danger">{errors.consent.message}</p>
      )}

      {/* Honeypot — invisible to humans, fillable by bots */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Website URL
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website_url")}
          />
        </label>
      </div>

      <button
        type="submit"
        className="btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending your details…" : "Submit & Request Consultation"}
      </button>

      {submitError && (
        <p role="alert" className="text-sm text-danger">
          {submitError}
        </p>
      )}

      <p className="text-xs text-charcoal-soft/80">
        Your details stay with our doctors. We never sell or share data.{" "}
        <a href="/privacy" className="underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error && <p className="text-sm text-danger">{error}</p>}
    </div>
  );
}

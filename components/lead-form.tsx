"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { leadSchema, type LeadInput } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { pushEvent } from "@/lib/analytics";

const CALL_TIMES: ReadonlyArray<{ value: LeadInput["callTime"]; label: string }> = [
  { value: "today", label: "Today" },
  { value: "tomorrow", label: "Tomorrow" },
  { value: "this_week", label: "This week" },
  { value: "specific", label: "Pick a time" },
];

export interface LeadFormProps {
  variant?: "default" | "compact" | "modal";
  headingId?: string;
  onSuccess?: () => void;
}

export function LeadForm({
  variant = "default",
  headingId,
  onSuccess,
}: LeadFormProps) {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: { callTime: "today" },
  });

  const callTime = watch("callTime");

  const onSubmit = async (data: LeadInput) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        setSubmitError(
          body.error ?? "Couldn't send right now. Please call +91 750 033 4343.",
        );
        return;
      }
      pushEvent({ event: "lead_form_submit", form_variant: variant });
      onSuccess?.();
      router.push("/thanks");
    } catch {
      setSubmitError("Network issue. Please call +91 750 033 4343.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn(
        "card flex flex-col gap-4",
        variant === "compact" && "p-5 gap-3",
        variant === "modal" && "rounded-[20px] border-0 shadow-none p-6 gap-3",
      )}
      aria-label="Free IBS evaluation form"
    >
      <div className="space-y-1">
        <h3
          id={headingId}
          className="font-heading text-h3 text-charcoal"
        >
          Get your free 15-minute evaluation
        </h3>
        <p className="text-sm text-charcoal-soft">
          Confidential. A senior IBS doctor reviews your case before the call.
        </p>
      </div>

      <div className="space-y-1">
        <label htmlFor="fullName" className="text-sm font-medium">
          Full name
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          placeholder="e.g., Pooja Sharma"
          className="input-base"
          {...register("fullName")}
          aria-invalid={!!errors.fullName}
        />
        {errors.fullName && (
          <p className="text-sm text-danger">{errors.fullName.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91 9XXXXXXXXX"
          className="input-base"
          {...register("phone")}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="text-sm text-danger">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="city" className="text-sm font-medium">
          City
        </label>
        <input
          id="city"
          type="text"
          autoComplete="address-level2"
          placeholder="e.g., Pune"
          className="input-base"
          {...register("city")}
          aria-invalid={!!errors.city}
        />
        {errors.city && <p className="text-sm text-danger">{errors.city.message}</p>}
      </div>

      <fieldset className="space-y-1">
        <legend className="text-sm font-medium">When can we call you?</legend>
        <div className="grid grid-cols-4 gap-1.5">
          {CALL_TIMES.map((opt) => (
            <label
              key={opt.value}
              className={cn(
                "flex cursor-pointer items-center gap-1.5 rounded-[10px] border border-border bg-[#FBF6EC] px-2 py-1.5 text-xs",
                "has-[:checked]:border-green has-[:checked]:bg-green-tint",
              )}
            >
              <input
                type="radio"
                value={opt.value}
                {...register("callTime")}
                className="accent-green"
              />
              {opt.label}
            </label>
          ))}
        </div>
        {errors.callTime && (
          <p className="text-sm text-danger">{errors.callTime.message}</p>
        )}
      </fieldset>

      {callTime === "specific" && (
        <div className="space-y-1">
          <label htmlFor="specificTime" className="text-sm font-medium">
            Specific time
          </label>
          <input
            id="specificTime"
            type="datetime-local"
            className="input-base"
            {...register("specificTime")}
          />
        </div>
      )}

      <div className="space-y-1">
        <label htmlFor="concern" className="text-sm font-medium">
          Your main concern <span className="text-charcoal-soft/60">(optional)</span>
        </label>
        <textarea
          id="concern"
          rows={3}
          maxLength={280}
          placeholder="e.g., bloating + alternating constipation/diarrhoea for 2 years"
          className="input-base resize-y"
          {...register("concern")}
        />
      </div>

      <label className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-green"
          {...register("consent")}
        />
        <span>
          You can call me on this number and message me on WhatsApp.
        </span>
      </label>
      {errors.consent && (
        <p className="text-sm text-danger">{errors.consent.message}</p>
      )}

      {/* Honeypot — invisible to humans, fillable by bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
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
        {isSubmitting ? "Sending your request…" : "Request a Call Back"}
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

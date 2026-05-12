"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { LeadForm } from "@/components/lead-form";

export interface LeadFormModalProps {
  open: boolean;
  onClose: () => void;
}

export function LeadFormModal({ open, onClose }: LeadFormModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // ESC to close + body-scroll lock + restore focus on close
  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the dialog after mount
    const t = setTimeout(() => {
      const focusable = dialogRef.current?.querySelector<HTMLElement>(
        'input, button, textarea, [tabindex]:not([tabindex="-1"])',
      );
      focusable?.focus();
    }, 30);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      clearTimeout(t);
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-charcoal/60 p-0 animate-fade-in sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-form-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-md rounded-t-[24px] bg-white p-1 shadow-modal animate-scale-in sm:rounded-[20px] max-h-[90vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-border bg-white text-charcoal-soft transition-colors hover:border-green hover:text-green"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ×
          </span>
        </button>
        <LeadForm
          variant="modal"
          headingId="lead-form-modal-title"
          onSuccess={() => {
            // The form router-pushes to /thanks; modal will be unmounted by
            // navigation. This callback is here as a defensive close.
            onClose();
          }}
        />
      </div>
    </div>,
    document.body,
  );
}

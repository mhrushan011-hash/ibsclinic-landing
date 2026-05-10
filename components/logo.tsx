import { cn } from "@/lib/utils";

/**
 * Wordmark logo for IBS Clinic.
 *
 * Inline SVG so it inherits brand colours and stays sharp at any DPR.
 * Swap for a real artwork file when one lands — see public/README.md.
 */
export interface LogoProps {
  className?: string;
  variant?: "default" | "reverse";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  const fillStrong = variant === "reverse" ? "#FFFFFF" : "#333333";
  const fillLight = variant === "reverse" ? "#FFFFFF" : "#555555";
  const accent = "#81AF12";

  return (
    <span
      className={cn("inline-flex items-center gap-2 leading-none", className)}
      aria-label="IBS Clinic"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Soft circular badge */}
        <circle cx="16" cy="16" r="15" fill={accent} />
        {/* Stylised gut curve in white */}
        <path
          d="M9 11.5 C 13 9, 19 9, 23 11.5 C 21 14, 24 16, 22 18.5 C 19 21, 13 21, 9 18.5 C 11 16, 7 14, 9 11.5 Z"
          fill="#fff"
          opacity="0.95"
        />
        {/* Inner accent dot */}
        <circle cx="16" cy="15" r="1.6" fill={accent} />
      </svg>
      <span className="flex items-baseline gap-1 font-heading text-lg font-bold tracking-tight">
        <span style={{ color: fillStrong }}>IBS</span>
        <span
          className="text-base font-medium"
          style={{ color: fillLight }}
        >
          clinic
        </span>
      </span>
    </span>
  );
}

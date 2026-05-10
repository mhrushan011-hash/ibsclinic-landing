import type { Config } from "tailwindcss";

/**
 * IBS Clinic brand tokens — synced to the updated mood board (May 2026).
 * Primary: Fresh Growth lime green. Charcoal for type/structure. White canvas.
 * 65% white / 25% charcoal / 10% green.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand
        green: {
          DEFAULT: "#81AF12", // Fresh Growth — buttons, highlights
          dark: "#729C10", // Mid Green — hover
          tint: "#EEF5D8", // Soft Green Tint — alt section bg
        },
        // Structure
        charcoal: {
          DEFAULT: "#333333", // Clinic Charcoal — heads, body
          soft: "#555555", // Soft Charcoal — secondary text
        },
        // Neutrals
        gray: {
          light: "#F5F5F5", // Light Gray — neutral panels
          border: "#E3E3E3", // Border Gray
        },
        // System
        success: "#3A8B5C",
        caution: "#D9A441",
        danger: "#B23A2A",
        // Keep `border` as a default token so border-border still works
        border: "#E3E3E3",
      },
      fontFamily: {
        heading: [
          "var(--font-heading)",
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "var(--font-body)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "Oswald",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "12px",
        lg: "16px",
        xl: "20px",
      },
      maxWidth: {
        prose: "70ch",
        content: "1200px",
      },
      fontSize: {
        h1: [
          "clamp(2.25rem, 4vw + 1rem, 3.5rem)",
          { lineHeight: "1.1", fontWeight: "700" },
        ],
        h2: [
          "clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)",
          { lineHeight: "1.2", fontWeight: "700" },
        ],
        h3: ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        lead: ["1.125rem", { lineHeight: "1.55" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(51,51,51,0.04), 0 4px 12px rgba(51,51,51,0.04)",
        modal: "0 20px 60px rgba(51,51,51,0.20)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96) translateY(8px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 150ms ease-out",
        "scale-in": "scale-in 200ms ease-out",
      },
    },
  },
  plugins: [],
};

export default config;

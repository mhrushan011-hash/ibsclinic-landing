import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // IBS Clinic brand tokens — see IBS-Brand-Moodboard.md
        sage: {
          DEFAULT: "#5A8F7B", // Sage Healing — primary brand
          dark: "#2F4F3F", // Forest Calm
          light: "#D8E8DD", // Aloe Mist
        },
        linen: "#F7F1E6", // Warm Linen — page canvas
        slate: {
          DEFAULT: "#2A2A2A", // Clinic Slate — body
        },
        rust: "#C9663A", // Turmeric Rust — CTAs only
        mint: "#3FA9A0", // Mint Stream — links
        apricot: "#F4D9C2", // Apricot Wash — soft callouts
        success: "#3A8B5C",
        caution: "#D9A441",
        danger: "#B23A2A",
        border: "#E4DFD3",
      },
      fontFamily: {
        heading: [
          "var(--font-heading)",
          "Plus Jakarta Sans",
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
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "12px",
        lg: "16px",
        xl: "24px",
      },
      maxWidth: {
        prose: "70ch",
        content: "1200px",
      },
      fontSize: {
        // Per moodboard type scale
        h1: ["clamp(2.25rem, 4vw + 1rem, 3.5rem)", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        lead: ["1.125rem", { lineHeight: "1.55" }],
      },
    },
  },
  plugins: [],
};

export default config;

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IBS Clinic — Specialist IBS Care",
    short_name: "IBS Clinic",
    description:
      "Specialist IBS clinic: personalised Ayurveda, diet and modern testing. Book a free evaluation.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#81AF12",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/icon.png", type: "image/png", sizes: "512x512" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}

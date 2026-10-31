import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

// Server wrapper: the homepage body is a client component (modal state), which
// cannot export metadata. The canonical lives here, not in the root layout, so
// no other route can inherit it.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}

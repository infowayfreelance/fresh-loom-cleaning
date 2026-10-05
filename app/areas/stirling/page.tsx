import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { stirling } from "@/lib/areas/stirling";

export const metadata: Metadata = {
  title: "Stirling's Premier Carpet Cleaning for a Fresh Home",
  description:
    "Experience top-notch carpet cleaning in Stirling. Book your appointment today for a fresh, clean home!",
  alternates: {
    canonical: "/areas/stirling",
  },
  openGraph: {
    title: "Stirling's Premier Carpet Cleaning for a Fresh Home",
    description:
      "Experience top-notch carpet cleaning in Stirling. Book your appointment today for a fresh, clean home!",
    url: "/areas/stirling",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stirling's Premier Carpet Cleaning for a Fresh Home",
    description:
      "Experience top-notch carpet cleaning in Stirling. Book your appointment today for a fresh, clean home!",
    images: ["/images/og-home.jpg"],
  },
};

export default function StirlingAreaPage() {
  return <LocationPage content={stirling} />;
}

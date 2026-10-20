import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { stirling } from "@/lib/areas/stirling";

export const metadata: Metadata = {
  title: stirling.metaTitle,
  description: stirling.metaDescription,
  alternates: {
    canonical: "/areas/stirling",
  },
  openGraph: {
    title: stirling.metaTitle,
    description: stirling.metaDescription,
    url: "/areas/stirling",
    type: "website",
    images: [{ url: stirling.heroImage, width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: stirling.metaTitle,
    description: stirling.metaDescription,
    images: [stirling.heroImage],
  },
};

export default function StirlingAreaPage() {
  return <LocationPage content={stirling} />;
}

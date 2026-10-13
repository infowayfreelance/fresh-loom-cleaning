import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { edinburgh } from "@/lib/areas/edinburgh";

export const metadata: Metadata = {
  title: edinburgh.metaTitle,
  description: edinburgh.metaDescription,
  alternates: {
    canonical: "/areas/edinburgh",
  },
  openGraph: {
    title: edinburgh.metaTitle,
    description: edinburgh.metaDescription,
    url: "/areas/edinburgh",
    type: "website",
    images: [{ url: edinburgh.heroImage, width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: edinburgh.metaTitle,
    description: edinburgh.metaDescription,
    images: [edinburgh.heroImage],
  },
};

export default function EdinburghAreaPage() {
  return <LocationPage content={edinburgh} />;
}

import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { perth } from "@/lib/areas/perth";

export const metadata: Metadata = {
  title: perth.metaTitle,
  description: perth.metaDescription,
  alternates: {
    canonical: "/areas/perth",
  },
  openGraph: {
    title: perth.metaTitle,
    description: perth.metaDescription,
    url: "/areas/perth",
    type: "website",
    images: [{ url: perth.heroImage, width: 1000, height: 667 }],
  },
  twitter: {
    card: "summary_large_image",
    title: perth.metaTitle,
    description: perth.metaDescription,
    images: [perth.heroImage],
  },
};

export default function PerthAreaPage() {
  return <LocationPage content={perth} />;
}

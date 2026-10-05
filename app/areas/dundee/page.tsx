import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { dundee } from "@/lib/areas/dundee";

export const metadata: Metadata = {
  title: "Expert Carpet Cleaning in Dundee That Delivers Results",
  description:
    "Experience deep cleaning for your carpets in Dundee. Book your appointment for a cleaner home now!",
  alternates: {
    canonical: "/areas/dundee",
  },
  openGraph: {
    title: "Expert Carpet Cleaning in Dundee That Delivers Results",
    description:
      "Experience deep cleaning for your carpets in Dundee. Book your appointment for a cleaner home now!",
    url: "/areas/dundee",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Carpet Cleaning in Dundee That Delivers Results",
    description:
      "Experience deep cleaning for your carpets in Dundee. Book your appointment for a cleaner home now!",
    images: ["/images/og-home.jpg"],
  },
};

export default function DundeeAreaPage() {
  return <LocationPage content={dundee} />;
}

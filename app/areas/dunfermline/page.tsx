import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { dunfermline } from "@/lib/areas/dunfermline";

export const metadata: Metadata = {
  title: dunfermline.metaTitle,
  description: dunfermline.metaDescription,
  alternates: {
    canonical: "/areas/dunfermline",
  },
  openGraph: {
    title: dunfermline.metaTitle,
    description: dunfermline.metaDescription,
    url: "/areas/dunfermline",
    type: "website",
    images: [{ url: dunfermline.heroImage, width: 1200, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: dunfermline.metaTitle,
    description: dunfermline.metaDescription,
    images: [dunfermline.heroImage],
  },
};

export default function DunfermlineAreaPage() {
  return <LocationPage content={dunfermline} />;
}

import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { dunfermline } from "@/lib/areas/dunfermline";

export const metadata: Metadata = {
  title: "Revive Your Carpets: Dunfermline Cleaning Solutions",
  description:
    "Need carpet cleaning in Dunfermline? We deliver exceptional results and customer satisfaction. Call us now!",
  alternates: {
    canonical: "/areas/dunfermline",
  },
  openGraph: {
    title: "Revive Your Carpets: Dunfermline Cleaning Solutions",
    description:
      "Need carpet cleaning in Dunfermline? We deliver exceptional results and customer satisfaction. Call us now!",
    url: "/areas/dunfermline",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revive Your Carpets: Dunfermline Cleaning Solutions",
    description:
      "Need carpet cleaning in Dunfermline? We deliver exceptional results and customer satisfaction. Call us now!",
    images: ["/images/og-home.jpg"],
  },
};

export default function DunfermlineAreaPage() {
  return <LocationPage content={dunfermline} />;
}

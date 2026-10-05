import type { Metadata } from "next";
import LocationPage from "@/components/areas/LocationPage";
import { edinburgh } from "@/lib/areas/edinburgh";

export const metadata: Metadata = {
  title: "Carpet Cleaning Edinburgh: Fresh & Clean Every Time",
  description:
    "Looking for top carpet cleaning in Edinburgh? Get exceptional results and restore your carpets' beauty!",
  alternates: {
    canonical: "/areas/edinburgh",
  },
  openGraph: {
    title: "Carpet Cleaning Edinburgh: Fresh & Clean Every Time",
    description:
      "Looking for top carpet cleaning in Edinburgh? Get exceptional results and restore your carpets' beauty!",
    url: "/areas/edinburgh",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpet Cleaning Edinburgh: Fresh & Clean Every Time",
    description:
      "Looking for top carpet cleaning in Edinburgh? Get exceptional results and restore your carpets' beauty!",
    images: ["/images/og-home.jpg"],
  },
};

export default function EdinburghAreaPage() {
  return <LocationPage content={edinburgh} />;
}

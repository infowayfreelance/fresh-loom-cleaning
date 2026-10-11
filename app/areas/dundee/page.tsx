import type { Metadata } from "next";
import Script from "next/script";
import DundeeHero from "@/components/dundee/DundeeHero";
import DundeeIntro from "@/components/dundee/DundeeIntro";
import DundeeServiceOverview from "@/components/dundee/DundeeServiceOverview";
import DundeeProcess from "@/components/dundee/DundeeProcess";
import DundeeHomes from "@/components/dundee/DundeeHomes";
import DundeeWhyChoose from "@/components/dundee/DundeeWhyChoose";
import DundeeOtherServices from "@/components/dundee/DundeeOtherServices";
import DundeeAreasCovered from "@/components/dundee/DundeeAreasCovered";
import DundeeFaq, { dundeeFaqs } from "@/components/dundee/DundeeFaq";
import DundeeFinalCta from "@/components/dundee/DundeeFinalCta";
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from "@/lib/seo";

const description =
  "Professional carpet cleaning in Dundee from Fresh Loom Carpet Cleaning. Straightforward carpet cleaners serving homes and properties across Dundee and selected surrounding areas.";

export const metadata: Metadata = {
  title: "Carpet Cleaning Dundee | Fresh Loom Carpet Cleaning",
  description,
  alternates: {
    canonical: "/areas/dundee",
  },
  openGraph: {
    title: "Carpet Cleaning Dundee | Fresh Loom Carpet Cleaning",
    description,
    url: "/areas/dundee",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpet Cleaning Dundee | Fresh Loom Carpet Cleaning",
    description,
    images: ["/images/og-home.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Carpet Cleaning Dundee",
  description,
  url: `${SITE_URL}/areas/dundee`,
  serviceType: "Carpet Cleaning",
  provider: { "@id": BUSINESS_ID },
  areaServed: {
    "@type": "City",
    name: "Dundee",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: dundeeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Dundee", path: "/areas/dundee" },
]);

export default function DundeeAreaPage() {
  return (
    <>
      <Script id="dundee-service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="dundee-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="dundee-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>

      <DundeeHero />
      <DundeeIntro />
      <DundeeServiceOverview />
      <DundeeProcess />
      <DundeeHomes />
      <DundeeWhyChoose />
      <DundeeOtherServices />
      <DundeeAreasCovered />
      <DundeeFaq />
      <DundeeFinalCta />
    </>
  );
}

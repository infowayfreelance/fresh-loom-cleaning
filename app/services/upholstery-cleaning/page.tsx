import type { Metadata } from "next";
import Script from "next/script";
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from "@/lib/seo";
import { upholsteryFaqs } from "@/components/upholstery-cleaning/upholsteryFaqs";
import UpholsteryHero from "@/components/upholstery-cleaning/UpholsteryHero";
import UpholsteryBuildUp from "@/components/upholstery-cleaning/UpholsteryBuildUp";
import UpholsteryProcess from "@/components/upholstery-cleaning/UpholsteryProcess";
import DeepUpholsterySplit from "@/components/upholstery-cleaning/DeepUpholsterySplit";
import FabricCareSection from "@/components/upholstery-cleaning/FabricCareSection";
import StainsMarksSection from "@/components/upholstery-cleaning/StainsMarksSection";
import FurnitureWeClean from "@/components/upholstery-cleaning/FurnitureWeClean";
import WhenToCleanUpholstery from "@/components/upholstery-cleaning/WhenToCleanUpholstery";
import WhyChooseUpholstery from "@/components/upholstery-cleaning/WhyChooseUpholstery";
import UpholsteryBeforeAfter from "@/components/upholstery-cleaning/UpholsteryBeforeAfter";
import UpholsteryFaq from "@/components/upholstery-cleaning/UpholsteryFaq";
import UpholsteryFinalCta from "@/components/upholstery-cleaning/UpholsteryFinalCta";

const title = "Upholstery Cleaning in Glasgow | Fresh Loom";
const description =
  "Professional upholstery cleaning in Glasgow for sofas, armchairs and fabric furniture, with fabric-aware deep cleaning. Free quotes from Fresh Loom.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/services/upholstery-cleaning",
  },
  openGraph: {
    title,
    description,
    url: "/services/upholstery-cleaning",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-home.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Professional Upholstery Cleaning",
  description,
  url: `${SITE_URL}/services/upholstery-cleaning`,
  serviceType: "Upholstery Cleaning",
  provider: { "@id": BUSINESS_ID },
  areaServed: {
    "@type": "City",
    name: "Glasgow",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: upholsteryFaqs.map((faq) => ({
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
  { name: "Services", path: "/services" },
  { name: "Upholstery Cleaning", path: "/services/upholstery-cleaning" },
]);

export default function UpholsteryCleaningPage() {
  return (
    <>
      <Script id="upholstery-service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="upholstery-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="upholstery-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>

      <UpholsteryHero />
      <UpholsteryBuildUp />
      <UpholsteryProcess />
      <DeepUpholsterySplit />
      <FabricCareSection />
      <StainsMarksSection />
      <FurnitureWeClean />
      <WhenToCleanUpholstery />
      <WhyChooseUpholstery />
      <UpholsteryBeforeAfter />
      <UpholsteryFaq />
      <UpholsteryFinalCta />
    </>
  );
}

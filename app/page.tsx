import type { Metadata } from "next";
import Script from "next/script";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseFreshLoom from "@/components/home/WhyChooseFreshLoom";
import CarpetCleaningSection from "@/components/home/CarpetCleaningSection";
import UpholsterySection from "@/components/home/UpholsterySection";
import StainRemovalSection from "@/components/home/StainRemovalSection";
import RugCleaningSection from "@/components/home/RugCleaningSection";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import BeforeAfterGallery from "@/components/home/BeforeAfterGallery";
import GlasgowCoverage from "@/components/home/GlasgowCoverage";
import HomeFaq from "@/components/home/HomeFaq";
import FinalCta from "@/components/home/FinalCta";
import { SITE_URL, BUSINESS_ID } from "@/lib/seo";
const title = "Professional Carpet Cleaning Glasgow | Fresh Loom";
const description =
  "Trusted carpet cleaning in Glasgow for carpets, rugs, sofas and upholstery, with 10+ years' experience. Request a free quote from Fresh Loom today.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-home.jpg"],
  },
};

// Reinforces topical relevance for the homepage's primary "carpet cleaning
// Glasgow" intent — the LocalBusiness schema in app/layout.tsx covers NAP,
// this adds the specific service + area it's known for.
const carpetCleaningServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Carpet Cleaning",
  description,
  url: SITE_URL,
  serviceType: "Carpet Cleaning",
  provider: { "@id": BUSINESS_ID },
  areaServed: {
    "@type": "City",
    name: "Glasgow",
  },
};

export default function Home() {
  return (
    <>
      <Script id="home-service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(carpetCleaningServiceSchema)}
      </Script>
      <Hero />
      <Services />
      <WhyChooseFreshLoom />
      <CarpetCleaningSection />
      <UpholsterySection />
      <StainRemovalSection />
      <RugCleaningSection />
      <ProcessTimeline />
      <BeforeAfterGallery />
      <GlasgowCoverage />
      <HomeFaq />
      <FinalCta />
    </>
  );
}

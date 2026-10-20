import type { Metadata } from "next";
import Script from "next/script";
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from "@/lib/seo";
import { stainFaqs } from "@/components/stain-removal/stainFaqs";
import StainHero from "@/components/stain-removal/StainHero";
import StainDifferences from "@/components/stain-removal/StainDifferences";
import StainProcess from "@/components/stain-removal/StainProcess";
import StubbornStainsSplit from "@/components/stain-removal/StubbornStainsSplit";
import SurfaceApproachSection from "@/components/stain-removal/SurfaceApproachSection";
import CommonStainsSection from "@/components/stain-removal/CommonStainsSection";
import SurfaceTreatmentSection from "@/components/stain-removal/SurfaceTreatmentSection";
import WhenToCallSpecialist from "@/components/stain-removal/WhenToCallSpecialist";
import WhyChooseStainRemoval from "@/components/stain-removal/WhyChooseStainRemoval";
import StainBeforeAfter from "@/components/stain-removal/StainBeforeAfter";
import StainFaq from "@/components/stain-removal/StainFaq";
import StainFinalCta from "@/components/stain-removal/StainFinalCta";

const title = "Carpet & Upholstery Stain Removal in Glasgow | Fresh Loom";
const description = "Professional stain removal in Glasgow for carpets, rugs, sofas and upholstery, with targeted treatment based on the stain and material. Free quotes.";
export const metadata: Metadata = { title, description, alternates: { canonical: "/services/stain-removal" }, openGraph: { title, description, url: "/services/stain-removal", images: [{ url: "/images/og-home.jpg", width: 1200, height: 630 }] }, twitter: { card: "summary_large_image", title, description, images: ["/images/og-home.jpg"] } };
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Professional Stain Removal", description, url: `${SITE_URL}/services/stain-removal`, serviceType: "Stain Removal", provider: { "@id": BUSINESS_ID } };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: stainFaqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
const breadcrumbs = breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Stain Removal", path: "/services/stain-removal" }]);

export default function StainRemovalPage() {
  return <>
    <Script id="stain-service-schema" type="application/ld+json" strategy="afterInteractive">{JSON.stringify(serviceSchema)}</Script>
    <Script id="stain-faq-schema" type="application/ld+json" strategy="afterInteractive">{JSON.stringify(faqSchema)}</Script>
    <Script id="stain-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">{JSON.stringify(breadcrumbs)}</Script>
    <StainHero /><StainDifferences /><StainProcess /><StubbornStainsSplit /><SurfaceApproachSection /><CommonStainsSection /><SurfaceTreatmentSection /><WhenToCallSpecialist /><WhyChooseStainRemoval /><StainBeforeAfter /><StainFaq /><StainFinalCta />
  </>;
}

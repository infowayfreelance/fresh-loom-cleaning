import type { Metadata } from "next";
import Script from "next/script";
import PhotoHero from "@/components/PhotoHero";
import ServicesGrid from "@/components/ServicesGrid";
import AdditionalServices from "@/components/AdditionalServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";
import { allServices, siteInfo } from "@/lib/data";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";

const title = "Carpet & Upholstery Cleaning Services | Fresh Loom";
const description =
  "Explore Fresh Loom's carpet, upholstery, rug and sofa cleaning services in Glasgow, plus stain removal and odour removal. Request a free quote.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title,
    description,
    url: "/services",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-home.jpg"],
  },
};

const servicesCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Our Services | ${siteInfo.name}`,
  description,
  url: `${SITE_URL}/services`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: allServices.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: service.title,
      url: `${SITE_URL}/services/${service.slug}`,
    })),
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <Script id="services-collection-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(servicesCollectionSchema)}
      </Script>
      <Script id="services-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>
      <PhotoHero
        title="Our Services"
        breadcrumbLabel="Services"
        image="/images/services/carpet-cleaning.jpg"
      />
      <ServicesGrid />
      <AdditionalServices />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}

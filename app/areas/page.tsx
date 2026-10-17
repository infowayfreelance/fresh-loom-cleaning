import type { Metadata } from "next";
import Script from "next/script";
import AreasHubHero from "@/components/areas-hub/AreasHubHero";
import AreasHubIntro from "@/components/areas-hub/AreasHubIntro";
import AreasHubAreaCards from "@/components/areas-hub/AreasHubAreaCards";
import AreasHubServices from "@/components/areas-hub/AreasHubServices";
import AreasHubProcess from "@/components/areas-hub/AreasHubProcess";
import AreasHubWhyChoose from "@/components/areas-hub/AreasHubWhyChoose";
import AreasHubFaq, { areasHubFaqSchemaData } from "@/components/areas-hub/AreasHubFaq";
import AreasHubFinalCta from "@/components/areas-hub/AreasHubFinalCta";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";

const title = "Carpet Cleaning Areas We Serve | Fresh Loom Carpet Cleaning";
const description =
  "Fresh Loom Carpet Cleaning provides professional carpet and specialist cleaning services across Glasgow, Edinburgh, Stirling, Perth, Dundee and Dunfermline. Find your local service area.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/areas",
  },
  openGraph: {
    title,
    description,
    url: "/areas",
    type: "website",
    images: [
      {
        url: "/images/areas-hub/service-areas-map-planning.webp",
        width: 1100,
        height: 825,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/areas-hub/service-areas-map-planning.webp"],
  },
};

const areas = [
  { name: "Glasgow", path: "/" },
  { name: "Edinburgh", path: "/areas/edinburgh" },
  { name: "Stirling", path: "/areas/stirling" },
  { name: "Perth", path: "/areas/perth" },
  { name: "Dundee", path: "/areas/dundee" },
  { name: "Dunfermline", path: "/areas/dunfermline" },
];

const areasCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: `${SITE_URL}/areas`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: areas.map((area, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: area.name,
      url: `${SITE_URL}${area.path}`,
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: areasHubFaqSchemaData.map((faq) => ({
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
  { name: "Areas We Serve", path: "/areas" },
]);

export default function AreasHubPage() {
  return (
    <>
      <Script id="areas-hub-collection-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(areasCollectionSchema)}
      </Script>
      <Script id="areas-hub-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="areas-hub-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>

      <AreasHubHero />
      <AreasHubIntro />
      <AreasHubAreaCards />
      <AreasHubServices />
      <AreasHubProcess />
      <AreasHubWhyChoose />
      <AreasHubFaq />
      <AreasHubFinalCta />
    </>
  );
}

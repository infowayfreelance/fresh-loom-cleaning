import type { Metadata } from "next";
import Script from "next/script";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurApproach from "@/components/about/OurApproach";
import FreshLoomAtWork from "@/components/about/FreshLoomAtWork";
import WhyFreshLoom from "@/components/about/WhyFreshLoom";
import BusinessStats from "@/components/about/BusinessStats";
import ServicesWeProvide from "@/components/about/ServicesWeProvide";
import WhereWeServe from "@/components/about/WhereWeServe";
import VisitContact from "@/components/about/VisitContact";
import { siteInfo } from "@/lib/data";
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from "@/lib/seo";

const description = `${siteInfo.name} provides professional carpet, upholstery, sofa and rug cleaning services for homes and properties across Glasgow and surrounding areas.`;
const metaTitle = "About Fresh Loom Carpet Cleaning";
const metaDescription =
  "Fresh Loom Carpet Cleaning has provided carpet, upholstery and sofa cleaning in Glasgow for over a decade. Learn about our approach and the services we provide.";
const ogImage = "/images/professional-cleaner-arriving-glasgow-property.webp";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: "/about-us",
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [ogImage],
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About Us | ${siteInfo.name}`,
  description,
  url: `${SITE_URL}/about-us`,
  about: { "@id": BUSINESS_ID },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
]);

export default function AboutUsPage() {
  return (
    <>
      <Script id="about-page-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(aboutPageSchema)}
      </Script>
      <Script id="about-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>
      <AboutHero />
      <OurStory />
      <OurApproach />
      <FreshLoomAtWork />
      <WhyFreshLoom />
      <BusinessStats />
      <ServicesWeProvide />
      <WhereWeServe />
      <VisitContact />
    </>
  );
}

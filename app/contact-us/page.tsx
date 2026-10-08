import type { Metadata } from "next";
import Script from "next/script";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactQuoteForm from "@/components/contact/ContactQuoteForm";
import WhyContactFreshLoom from "@/components/contact/WhyContactFreshLoom";
import ContactServicesGrid from "@/components/contact/ContactServicesGrid";
import ContactAreasServed from "@/components/contact/ContactAreasServed";
import ContactFaq, { contactFaqs } from "@/components/contact/ContactFaq";
import { siteInfo } from "@/lib/data";
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from "@/lib/seo";

const description = `Contact ${siteInfo.name} for professional carpet, upholstery and sofa cleaning in Glasgow and surrounding areas. Call, email or request a quote online.`;

export const metadata: Metadata = {
  title: "Contact Fresh Loom Carpet Cleaning",
  description,
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Fresh Loom Carpet Cleaning",
    description,
    url: "/contact-us",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Fresh Loom Carpet Cleaning",
    description,
    images: ["/images/og-home.jpg"],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact Us | ${siteInfo.name}`,
  description,
  url: `${SITE_URL}/contact-us`,
  about: { "@id": BUSINESS_ID },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFaqs.map((faq) => ({
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
  { name: "Contact Us", path: "/contact-us" },
]);

export default function ContactUsPage() {
  return (
    <>
      <Script id="contact-page-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(contactPageSchema)}
      </Script>
      <Script id="contact-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="contact-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>

      <ContactHero />
      <ContactDetails />
      <ContactQuoteForm />
      <WhyContactFreshLoom />
      <ContactServicesGrid />
      <ContactAreasServed />
      <ContactFaq />
    </>
  );
}

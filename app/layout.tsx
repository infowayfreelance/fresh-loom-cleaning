import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GTMLoader from "@/components/cookies/GTMLoader";
import { siteInfo } from "@/lib/data";

const GA_MEASUREMENT_ID = "G-3FCF7HJDT7";
import { SITE_URL, BUSINESS_ID } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${siteInfo.name} | Carpet & Upholstery Cleaning Services`,
  description:
    "Professional carpet, sofa, rug, and upholstery cleaning using advanced equipment to remove stains, dirt, and allergens effectively.",
};

// NAP (Name, Address, Phone) structured data — kept identical to siteInfo
// everywhere on the site for local SEO / Google Business Profile consistency.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BUSINESS_ID,
  name: siteInfo.name,
  legalName: siteInfo.legalName,
  image: `${SITE_URL}/images/logo.png`,
  url: SITE_URL,
  telephone: siteInfo.phone,
  email: siteInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2/2, 156 Charles St",
    addressLocality: "Glasgow",
    postalCode: "G21 2QH",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "City",
    name: "Glasgow",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <Script id="local-business-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      {/* Google tag (gtag.js) — lazyOnload, so it loads once the browser is
          idle rather than during the Total Blocking Time measurement window
          right after hydration (which is what afterInteractive did, and
          where it was competing with GTM's own afterInteractive script).
          Analytics has no UX-critical deadline, so deferring it to idle time
          is the standard mitigation and keeps the tag reliably firing on
          every page without costing Core Web Vitals. */}
      <Script
        id="google-tag-gtag-js"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-tag-gtag-init" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
      <body className="min-h-full flex flex-col font-body">
        <GTMLoader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

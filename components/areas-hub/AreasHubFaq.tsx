import Link from "next/link";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";

// Plain-text version of all 5 FAQs for the FAQPage structured data, which
// requires plain strings (the visible answers below embed natural links).
export const areasHubFaqSchemaData = [
  {
    q: "What areas does Fresh Loom Carpet Cleaning cover?",
    a: "Fresh Loom is based in Glasgow and currently provides services across Glasgow, Edinburgh, Stirling, Perth, Dundee and Dunfermline.",
  },
  {
    q: "Do you provide carpet cleaning outside Glasgow?",
    a: "Yes. Fresh Loom provides carpet cleaning and other cleaning services across its established service areas. Visit your local area page for more information.",
  },
  {
    q: "Which cleaning services are available?",
    a: "Fresh Loom provides carpet cleaning, upholstery cleaning, sofa cleaning, rug cleaning, stain removal, odour removal, mattress cleaning, pet stain removal and other specialist cleaning services.",
  },
  {
    q: "How do I find services in my area?",
    a: "Select your location from the service areas listed on this page. Each area page provides more information about Fresh Loom's services in that location.",
  },
  {
    q: "How can I request a quote?",
    a: `You can contact Fresh Loom by calling ${siteInfo.phone} or by using the website contact form.`,
  },
];

const linkClass = "text-accent-dark font-semibold hover:underline";

export default function AreasHubFaq() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page max-w-3xl">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Areas We Serve FAQs
          </h2>
        </Reveal>

        <div className="space-y-3">
          <div className="rounded-xl bg-white p-5">
            <h3 className="font-semibold text-navy-dark mb-2">
              What areas does Fresh Loom Carpet Cleaning cover?
            </h3>
            <p className="text-sm text-slate-600">
              Fresh Loom is based in{" "}
              <Link href="/" className={linkClass}>
                Glasgow
              </Link>{" "}
              and currently provides services across Glasgow,{" "}
              <Link href="/areas/edinburgh" className={linkClass}>
                Edinburgh
              </Link>
              ,{" "}
              <Link href="/areas/stirling" className={linkClass}>
                Stirling
              </Link>
              ,{" "}
              <Link href="/areas/perth" className={linkClass}>
                Perth
              </Link>
              ,{" "}
              <Link href="/areas/dundee" className={linkClass}>
                Dundee
              </Link>{" "}
              and{" "}
              <Link href="/areas/dunfermline" className={linkClass}>
                Dunfermline
              </Link>
              .
            </p>
          </div>

          <div className="rounded-xl bg-white p-5">
            <h3 className="font-semibold text-navy-dark mb-2">
              Do you provide carpet cleaning outside Glasgow?
            </h3>
            <p className="text-sm text-slate-600">
              Yes. Fresh Loom provides{" "}
              <Link href="/services/carpet-cleaning" className={linkClass}>
                carpet cleaning
              </Link>{" "}
              and other cleaning services across its established service areas. Visit your local
              area page for more information.
            </p>
          </div>

          <div className="rounded-xl bg-white p-5">
            <h3 className="font-semibold text-navy-dark mb-2">
              Which cleaning services are available?
            </h3>
            <p className="text-sm text-slate-600">
              Fresh Loom provides{" "}
              <Link href="/services/carpet-cleaning" className={linkClass}>
                carpet cleaning
              </Link>
              ,{" "}
              <Link href="/services/upholstery-cleaning" className={linkClass}>
                upholstery cleaning
              </Link>
              ,{" "}
              <Link href="/services/sofa-cleaning" className={linkClass}>
                sofa cleaning
              </Link>
              ,{" "}
              <Link href="/services/rug-cleaning" className={linkClass}>
                rug cleaning
              </Link>
              ,{" "}
              <Link href="/services/stain-removal" className={linkClass}>
                stain removal
              </Link>
              ,{" "}
              <Link href="/services/odour-removal" className={linkClass}>
                odour removal
              </Link>
              ,{" "}
              <Link href="/services/mattress-cleaning" className={linkClass}>
                mattress cleaning
              </Link>
              ,{" "}
              <Link href="/services/pet-stain-removal" className={linkClass}>
                pet stain removal
              </Link>{" "}
              and other specialist cleaning services.
            </p>
          </div>

          <div className="rounded-xl bg-white p-5">
            <h3 className="font-semibold text-navy-dark mb-2">
              How do I find services in my area?
            </h3>
            <p className="text-sm text-slate-600">
              Select your location from the service areas listed on this page. Each area page
              provides more information about Fresh Loom&apos;s services in that location.
            </p>
          </div>

          <div className="rounded-xl bg-white p-5">
            <h3 className="font-semibold text-navy-dark mb-2">How can I request a quote?</h3>
            <p className="text-sm text-slate-600">
              You can contact Fresh Loom by calling{" "}
              <a href={siteInfo.phoneHref} className={linkClass}>
                {siteInfo.phone}
              </a>{" "}
              or by using the{" "}
              <Link href="/contact-us" className={linkClass}>
                website contact form
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

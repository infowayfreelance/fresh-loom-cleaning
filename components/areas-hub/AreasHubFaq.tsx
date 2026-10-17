import Link from "next/link";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";

export const areasHubFaqs = [
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
];

// Plain-text version of all 5 FAQs (including the one with inline links
// below) for the FAQPage structured data, which requires plain strings.
export const areasHubFaqSchemaData = [
  ...areasHubFaqs,
  {
    q: "How can I request a quote?",
    a: `You can contact Fresh Loom by calling ${siteInfo.phone} or by using the website contact form.`,
  },
];

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
          {areasHubFaqs.map((faq) => (
            <div key={faq.q} className="rounded-xl bg-white p-5">
              <h3 className="font-semibold text-navy-dark mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600">{faq.a}</p>
            </div>
          ))}

          <div className="rounded-xl bg-white p-5">
            <h3 className="font-semibold text-navy-dark mb-2">How can I request a quote?</h3>
            <p className="text-sm text-slate-600">
              You can contact Fresh Loom by calling{" "}
              <a href={siteInfo.phoneHref} className="text-accent-dark font-semibold hover:underline">
                {siteInfo.phone}
              </a>{" "}
              or by using the{" "}
              <Link href="/contact-us" className="text-accent-dark font-semibold hover:underline">
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

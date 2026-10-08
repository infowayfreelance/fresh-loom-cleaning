import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";

export const contactFaqs = [
  {
    q: "How can I contact Fresh Loom Carpet Cleaning?",
    a: `You can call ${siteInfo.phone} or use the contact form to send your enquiry.`,
  },
  {
    q: "What cleaning services do you provide?",
    a: "Fresh Loom provides carpet cleaning, upholstery cleaning, sofa cleaning, rug cleaning, stain removal, odour removal, curtain cleaning, leather cleaning, mattress cleaning, pet stain removal and end of tenancy deep cleaning.",
  },
  {
    q: "Where is Fresh Loom Carpet Cleaning based?",
    a: "Fresh Loom Carpet Cleaning is based at 2/2, 156 Charles St, Glasgow G21 2QH, United Kingdom.",
  },
  {
    q: "Do you serve areas outside Glasgow?",
    a: "Yes. Fresh Loom serves Glasgow and selected surrounding areas including Edinburgh, Stirling, Perth, Dundee and Dunfermline.",
  },
  {
    q: "How can I request a quote?",
    a: `Use the contact form on this page or call Fresh Loom directly on ${siteInfo.phone}.`,
  },
];

export default function ContactFaq() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page max-w-3xl">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="space-y-3">
          {contactFaqs.map((faq) => (
            <div key={faq.q} className="rounded-xl bg-white p-5">
              <h3 className="font-semibold text-navy-dark mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

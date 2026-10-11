import Link from "next/link";
import Reveal from "../Reveal";

export const dundeeFaqs = [
  {
    q: "Do you provide carpet cleaning in Dundee?",
    a: "Yes. Fresh Loom provides carpet cleaning services for customers in Dundee and selected surrounding areas.",
  },
  {
    q: "What can carpet cleaning help with?",
    a: "Professional carpet cleaning can help remove accumulated dirt, soil and suitable stains from carpets. Results depend on the carpet material, condition and type of stain.",
  },
  {
    q: "Can you remove pet stains from carpets?",
    a: "Fresh Loom provides pet stain removal as a separate service. The result depends on the type and age of the stain and the condition of the carpet.",
    link: { href: "/services/pet-stain-removal", label: "Learn more about pet stain removal" },
  },
  {
    q: "Do you clean stairs and hallways?",
    a: "Yes, carpeted stairs, hallways and other areas can be discussed when requesting a quote.",
  },
  {
    q: "How do I book carpet cleaning in Dundee?",
    a: "Contact Fresh Loom by phone or use the website enquiry form to explain what you need cleaned and request a quote.",
  },
  {
    q: "Do you provide other cleaning services in Dundee?",
    a: "Fresh Loom provides several cleaning services, including upholstery, sofa, rug, stain and pet stain cleaning. Availability depends on the service area.",
  },
];

export default function DundeeFaq() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page max-w-3xl">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="space-y-3">
          {dundeeFaqs.map((faq) => (
            <div key={faq.q} className="rounded-xl bg-white p-5">
              <h3 className="font-semibold text-navy-dark mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600">{faq.a}</p>
              {faq.link ? (
                <Link
                  href={faq.link.href}
                  className="inline-block mt-2 text-sm font-semibold text-accent-dark hover:underline"
                >
                  {faq.link.label}
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

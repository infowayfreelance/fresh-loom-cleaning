import Link from "next/link";
import Reveal from "../Reveal";

const linkClass = "text-accent-dark font-semibold hover:underline";

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
          <div className="rounded-xl bg-white p-5">
            <h3 className="font-semibold text-navy-dark mb-2">{dundeeFaqs[0].q}</h3>
            <p className="text-sm text-slate-600">{dundeeFaqs[0].a}</p>
          </div>

          <div className="rounded-xl bg-white p-5">
            <h3 className="font-semibold text-navy-dark mb-2">{dundeeFaqs[1].q}</h3>
            <p className="text-sm text-slate-600">
              Professional{" "}
              <Link href="/services/carpet-cleaning" className={linkClass}>
                carpet cleaning
              </Link>{" "}
              can help remove accumulated dirt, soil and suitable stains from carpets. Results
              depend on the carpet material, condition and type of stain.
            </p>
          </div>

          <div className="rounded-xl bg-white p-5">
            <h3 className="font-semibold text-navy-dark mb-2">{dundeeFaqs[2].q}</h3>
            <p className="text-sm text-slate-600">{dundeeFaqs[2].a}</p>
            <Link href="/services/pet-stain-removal" className={`inline-block mt-2 ${linkClass}`}>
              Learn more about pet stain removal
            </Link>
          </div>

          <div className="rounded-xl bg-white p-5">
            <h3 className="font-semibold text-navy-dark mb-2">{dundeeFaqs[3].q}</h3>
            <p className="text-sm text-slate-600">{dundeeFaqs[3].a}</p>
          </div>

          <div className="rounded-xl bg-white p-5">
            <h3 className="font-semibold text-navy-dark mb-2">{dundeeFaqs[4].q}</h3>
            <p className="text-sm text-slate-600">
              Contact Fresh Loom by phone or use the{" "}
              <Link href="/contact-us" className={linkClass}>
                website enquiry form
              </Link>{" "}
              to explain what you need cleaned and request a quote.
            </p>
          </div>

          <div className="rounded-xl bg-white p-5">
            <h3 className="font-semibold text-navy-dark mb-2">{dundeeFaqs[5].q}</h3>
            <p className="text-sm text-slate-600">
              Fresh Loom provides several cleaning services, including{" "}
              <Link href="/services/upholstery-cleaning" className={linkClass}>
                upholstery
              </Link>
              ,{" "}
              <Link href="/services/sofa-cleaning" className={linkClass}>
                sofa
              </Link>
              ,{" "}
              <Link href="/services/rug-cleaning" className={linkClass}>
                rug
              </Link>
              ,{" "}
              <Link href="/services/stain-removal" className={linkClass}>
                stain
              </Link>{" "}
              and{" "}
              <Link href="/services/pet-stain-removal" className={linkClass}>
                pet stain
              </Link>{" "}
              cleaning. Availability depends on the service area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Reveal from "../Reveal";

export default function DundeeIntro() {
  return (
    <section className="py-16 lg:py-24">
      <Reveal className="container-page max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
          Professional Carpet Cleaning in Dundee
        </h2>
        <div className="space-y-4 text-slate-600">
          <p>
            Carpets deal with everyday foot traffic, spills, dust and general use. Over time,
            this can leave them looking tired even when regular vacuuming is part of your
            routine.
          </p>
          <p>
            Fresh Loom Carpet Cleaning provides a professional{" "}
            <Link href="/services/carpet-cleaning" className="text-accent-dark font-semibold hover:underline">
              carpet cleaning service
            </Link>{" "}
            for customers in Dundee and our{" "}
            <Link href="/areas" className="text-accent-dark font-semibold hover:underline">
              surrounding service areas
            </Link>
            . We focus on the areas that need attention while keeping the cleaning process
            straightforward from enquiry to completion.
          </p>
          <p>
            If you are looking for carpet cleaners in Dundee,{" "}
            <Link href="/contact-us" className="text-accent-dark font-semibold hover:underline">
              contact Fresh Loom
            </Link>{" "}
            to discuss your requirements and request a quote.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

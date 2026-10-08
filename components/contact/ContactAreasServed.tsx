import Link from "next/link";
import { serviceAreas } from "@/lib/data";
import Reveal from "../Reveal";
import ImagePlaceholder from "../ImagePlaceholder";

const locations = [{ name: "Glasgow", href: "/" }, ...serviceAreas];

export default function ContactAreasServed() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Areas We Serve
          </h2>
          <p className="text-slate-600">
            Fresh Loom Carpet Cleaning is based in Glasgow and provides cleaning services across
            Glasgow and selected surrounding areas.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap gap-3 mb-16">
          {locations.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="text-sm font-semibold px-5 py-2.5 rounded-full bg-light border border-black/5 text-navy-dark hover:border-navy hover:text-accent-dark transition-colors"
            >
              {area.name}
            </Link>
          ))}
        </Reveal>

        <Reveal>
          <ImagePlaceholder
            label="Fresh Loom cleaning or service photograph"
            aspect="aspect-[16/9] md:aspect-[21/9]"
          />
        </Reveal>
      </div>
    </section>
  );
}

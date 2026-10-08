import Link from "next/link";
import { siteInfo, serviceAreas } from "@/lib/data";
import Reveal from "../Reveal";
import ConsentGatedMap from "../cookies/ConsentGatedMap";

const locations = [{ name: "Glasgow", href: "/" }, ...serviceAreas];

export default function ContactAreasServed() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Areas We Serve
          </h2>
          <p className="text-slate-600 mb-8">
            Fresh Loom Carpet Cleaning is based in Glasgow and provides cleaning services across
            Glasgow and selected surrounding areas.
          </p>

          <div className="flex flex-wrap gap-3">
            {locations.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="text-sm font-semibold px-5 py-2.5 rounded-full bg-white border border-black/5 text-navy-dark hover:border-navy hover:text-accent-dark transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <ConsentGatedMap
              title={`${siteInfo.name} location`}
              className="h-[300px] lg:h-[380px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

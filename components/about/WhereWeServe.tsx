import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { serviceAreas } from "@/lib/data";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const locations = [{ name: "Glasgow", href: "/" }, ...serviceAreas];

export default function WhereWeServe() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-10">
          <span className="eyebrow mb-4">
            <MapPin size={16} /> Service Area
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Where We Serve
          </h2>
          <p className="text-slate-600">
            Fresh Loom Carpet Cleaning is based in Glasgow and provides cleaning services across
            Glasgow and selected surrounding areas.
          </p>
        </Reveal>

        <StaggerGroup className="flex flex-wrap gap-3">
          {locations.map((location) => (
            <StaggerItem key={location.name}>
              <Link
                href={location.href}
                className="inline-flex items-center gap-2 rounded-full bg-light border border-black/5 px-5 py-2.5 text-sm font-semibold text-navy-dark hover:bg-navy hover:text-white transition-colors"
              >
                {location.name} <ArrowUpRight size={14} />
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

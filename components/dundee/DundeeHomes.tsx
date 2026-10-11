import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const propertyTypes = [
  "Bedrooms",
  "Living rooms",
  "Hallways",
  "Stairs and landings",
  "Rental properties",
  "Family homes",
  "Other residential carpeted areas",
];

export default function DundeeHomes() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Carpet Cleaning for Dundee Homes
          </h2>
          <p className="text-slate-600 mb-6">
            Every property has different cleaning requirements. Fresh Loom provides carpet
            cleaning for customers across Dundee, whether you need individual rooms refreshed or
            several carpeted areas cleaned.
          </p>
          <p className="text-slate-600 mb-4">Our service can be suitable for:</p>

          <StaggerGroup className="flex flex-wrap gap-3 mb-6">
            {propertyTypes.map((type) => (
              <StaggerItem key={type}>
                <div className="flex items-center gap-2 bg-white rounded-full border border-black/5 pl-3 pr-4 py-2">
                  <span className="w-5 h-5 shrink-0 rounded-full bg-accent/15 text-accent-dark flex items-center justify-center">
                    <Check size={12} />
                  </span>
                  <span className="text-sm font-medium text-navy-dark">{type}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <p className="text-slate-600">
            If you are unsure which service you need,{" "}
            <Link href="/contact-us" className="text-accent-dark font-semibold hover:underline">
              contact us
            </Link>{" "}
            and explain what you would like cleaned.
          </p>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/carpet-cleaning-hallway-stairs-dundee.webp"
              alt="Carpet cleaning equipment set up in a hallway near the stairs in a Dundee home"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

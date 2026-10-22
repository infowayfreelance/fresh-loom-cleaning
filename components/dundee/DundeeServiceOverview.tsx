import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const points = [
  "Everyday dirt and soil",
  "Foot traffic and general wear",
  "Food and drink marks",
  "Visible stains",
  "Pet-related marks and odours",
  "Areas that have become dull or heavily used",
];

export default function DundeeServiceOverview() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/carpet-stain-treatment-dundee.webp"
              alt="Carpet stain being treated with cleaning solution and a brush in a Dundee home"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Our Carpet Cleaning Service
          </h2>
          <p className="text-slate-600 mb-6">
            Our{" "}
            <Link href="/services/carpet-cleaning" className="text-accent-dark font-semibold hover:underline">
              carpet cleaning service
            </Link>{" "}
            is suitable for homes and properties where carpets need a deeper clean than normal
            household maintenance can provide.
          </p>
          <p className="text-slate-600 mb-4">We can help with carpets affected by:</p>

          <StaggerGroup className="grid sm:grid-cols-2 gap-3 mb-6">
            {points.map((point) => (
              <StaggerItem key={point}>
                <div className="flex items-start gap-3 bg-white rounded-xl border border-black/5 p-4">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-accent/15 text-accent-dark flex items-center justify-center mt-0.5">
                    <Check size={14} />
                  </span>
                  <span className="text-slate-700">{point}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <p className="text-sm text-slate-500">
            Results can vary depending on the carpet material, condition, type of{" "}
            <Link href="/services/stain-removal" className="text-accent-dark font-semibold hover:underline">
              stain
            </Link>{" "}
            and how long the problem has been present. We do not promise that every stain can be
            completely removed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

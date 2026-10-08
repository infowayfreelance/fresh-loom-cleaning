import Link from "next/link";
import { CalendarCheck, Layers3, MapPin } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const points = [
  {
    icon: CalendarCheck,
    title: "Over a Decade of Experience",
    description: "A long-standing cleaning business serving customers across Glasgow and surrounding areas.",
  },
  {
    icon: Layers3,
    title: "Wide Range of Services",
    description: "Carpet, upholstery, sofa, rug, stain, odour and other specialist cleaning services.",
  },
  {
    icon: MapPin,
    title: "Local Service",
    description: "Based in Glasgow and serving customers across our established service areas.",
  },
];

export default function WhyContactFreshLoom() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Why Choose Fresh Loom?
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>
              {siteInfo.name} has been providing cleaning services for over a decade, helping
              customers with carpets, upholstery, sofas, rugs and other specialist cleaning needs.
            </p>
            <p>
              We keep the process straightforward. Tell us what needs cleaning, provide the
              relevant details and we can discuss the most suitable service for your requirements.
              Read more about our business on the{" "}
              <Link href="/about-us" className="text-accent-dark font-semibold hover:underline">
                About Us
              </Link>{" "}
              page.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-3 gap-6">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div className="h-full rounded-2xl bg-white border border-black/5 shadow-sm p-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent-dark flex items-center justify-center mb-5">
                  <point.icon size={22} />
                </div>
                <h3 className="font-bold text-navy-dark mb-2">{point.title}</h3>
                <p className="text-sm text-slate-600">{point.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

import Link from "next/link";
import {
  SprayCan,
  Sofa,
  Waves,
  Armchair,
  Droplets,
  Wind,
  Blinds,
  Sparkles,
  BedDouble,
  PawPrint,
  KeyRound,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { allServices } from "@/lib/data";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const iconMap: Record<string, LucideIcon> = {
  SprayCan,
  Sofa,
  Waves,
  Armchair,
  Droplets,
  Wind,
  Blinds,
  Sparkles,
  BedDouble,
  PawPrint,
  KeyRound,
};

export default function ContactServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Cleaning Services
          </h2>
          <p className="text-slate-600">
            From everyday carpet cleaning to specialist treatment for upholstery, stains, odours
            and furnishings, Fresh Loom provides a range of cleaning services for homes and
            properties.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {allServices.map((service) => {
            const Icon = iconMap[service.icon] ?? SprayCan;
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-3 h-full bg-white rounded-xl border border-black/5 shadow-sm px-4 py-3.5 hover:border-navy transition-colors group"
                >
                  <div className="w-9 h-9 shrink-0 rounded-full bg-navy/10 text-navy flex items-center justify-center">
                    <Icon size={16} />
                  </div>
                  <span className="text-sm font-semibold text-navy-dark flex-1">
                    {service.title}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-accent shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

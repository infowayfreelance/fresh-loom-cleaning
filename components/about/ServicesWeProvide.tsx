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
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const aboutServices: { title: string; description: string; slug: string; icon: LucideIcon }[] = [
  {
    title: "Carpet Cleaning",
    description: "Professional cleaning for carpets affected by everyday dirt, marks and built-up soil.",
    slug: "carpet-cleaning",
    icon: SprayCan,
  },
  {
    title: "Upholstery Cleaning",
    description: "Careful cleaning for upholstered furniture and fabric surfaces.",
    slug: "upholstery-cleaning",
    icon: Sofa,
  },
  {
    title: "Rug Cleaning",
    description: "Cleaning designed for rugs that need refreshing and removal of accumulated dirt.",
    slug: "rug-cleaning",
    icon: Waves,
  },
  {
    title: "Sofa Cleaning",
    description: "A dedicated service for refreshing sofas and improving their overall cleanliness.",
    slug: "sofa-cleaning",
    icon: Armchair,
  },
  {
    title: "Stain Removal",
    description: "Targeted treatment for visible stains and marks on suitable carpet and upholstery surfaces.",
    slug: "stain-removal",
    icon: Droplets,
  },
  {
    title: "Odour Removal",
    description: "Cleaning support for carpets and furnishings affected by unwanted odours.",
    slug: "odour-removal",
    icon: Wind,
  },
  {
    title: "Curtain Cleaning",
    description: "Cleaning for curtains and fabric window coverings.",
    slug: "curtain-cleaning",
    icon: Blinds,
  },
  {
    title: "Leather Cleaning",
    description: "Cleaning and care for suitable leather furniture and surfaces.",
    slug: "leather-cleaning",
    icon: Sparkles,
  },
  {
    title: "Mattress Cleaning",
    description: "A dedicated service for cleaning and refreshing mattresses.",
    slug: "mattress-cleaning",
    icon: BedDouble,
  },
  {
    title: "Pet Stain Removal",
    description: "Cleaning focused on stains and odours associated with pets.",
    slug: "pet-stain-removal",
    icon: PawPrint,
  },
  {
    title: "End of Tenancy Deep Cleaning",
    description: "A broader deep-cleaning service for properties being prepared at the end of a tenancy.",
    slug: "end-of-tenancy-deep-clean",
    icon: KeyRound,
  },
];

export default function ServicesWeProvide() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Cleaning Services We Provide
          </h2>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutServices.map((service) => (
            <StaggerItem key={service.slug}>
              <Link href={`/services/${service.slug}`} className="block h-full group">
                <div className="h-full bg-white rounded-2xl border border-black/5 shadow-sm p-6 transition-shadow group-hover:shadow-md">
                  <div className="w-11 h-11 rounded-full bg-navy/10 text-navy flex items-center justify-center mb-4">
                    <service.icon size={20} />
                  </div>
                  <h3 className="font-bold text-navy-dark mb-1.5">{service.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-dark">
                    View Service{" "}
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

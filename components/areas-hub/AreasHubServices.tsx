import Link from "next/link";
import {
  ArrowUpRight,
  Armchair,
  BedDouble,
  Droplets,
  PawPrint,
  Sofa,
  SprayCan,
  Waves,
  Wind,
  type LucideIcon,
} from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const services: { title: string; description: string; slug: string; icon: LucideIcon }[] = [
  {
    title: "Carpet Cleaning",
    description: "Professional cleaning for carpets affected by everyday dirt, marks and general use.",
    slug: "carpet-cleaning",
    icon: SprayCan,
  },
  {
    title: "Upholstery Cleaning",
    description: "Cleaning for upholstered furniture and fabric surfaces that need refreshing.",
    slug: "upholstery-cleaning",
    icon: Sofa,
  },
  {
    title: "Sofa Cleaning",
    description: "A dedicated service for cleaning and refreshing sofas and upholstered seating.",
    slug: "sofa-cleaning",
    icon: Armchair,
  },
  {
    title: "Rug Cleaning",
    description: "Cleaning for rugs affected by everyday dirt, marks and general wear.",
    slug: "rug-cleaning",
    icon: Waves,
  },
  {
    title: "Stain Removal",
    description: "Targeted cleaning for suitable stains and marks on carpets and furnishings.",
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
    title: "Mattress Cleaning",
    description: "A dedicated cleaning service for refreshing and cleaning mattresses.",
    slug: "mattress-cleaning",
    icon: BedDouble,
  },
  {
    title: "Pet Stain Removal",
    description: "Cleaning focused on stains and odours associated with pets.",
    slug: "pet-stain-removal",
    icon: PawPrint,
  },
];

export default function AreasHubServices() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Cleaning Services Available
          </h2>
          <p className="text-slate-600">
            Fresh Loom provides a range of cleaning services for carpets, furniture and other
            household furnishings. The exact services available can be explored through our
            individual service pages.
          </p>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link href={`/services/${service.slug}`} className="block h-full group">
                <div className="h-full bg-white rounded-2xl border border-black/5 shadow-sm p-6 transition-shadow group-hover:shadow-md">
                  <div className="w-11 h-11 rounded-full bg-navy/10 text-navy flex items-center justify-center mb-4">
                    <service.icon size={20} />
                  </div>
                  <h3 className="font-bold text-navy-dark mb-1.5">{service.title}</h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="text-center">
          <Link href="/services" className="btn-outline">
            Explore All Cleaning Services <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

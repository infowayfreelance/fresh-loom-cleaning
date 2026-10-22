import Link from "next/link";
import { Sofa, Armchair, Waves, Droplets, PawPrint, ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const services = [
  {
    title: "Upholstery Cleaning",
    description: "Professional cleaning for upholstered furniture and fabric surfaces.",
    href: "/services/upholstery-cleaning",
    icon: Sofa,
  },
  {
    title: "Sofa Cleaning",
    description: "Cleaning for sofas and upholstered seating.",
    href: "/services/sofa-cleaning",
    icon: Armchair,
  },
  {
    title: "Rug Cleaning",
    description: "Cleaning for rugs affected by everyday dirt, marks and use.",
    href: "/services/rug-cleaning",
    icon: Waves,
  },
  {
    title: "Stain Removal",
    description: "Specialist cleaning support for suitable stains and marks.",
    href: "/services/stain-removal",
    icon: Droplets,
  },
  {
    title: "Pet Stain Removal",
    description: "Cleaning focused on stains and odours associated with pets.",
    href: "/services/pet-stain-removal",
    icon: PawPrint,
  },
];

export default function DundeeOtherServices() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Other Cleaning Services
          </h2>
          <p className="text-slate-600">
            If you need more than{" "}
            <Link href="/services/carpet-cleaning" className="text-accent-dark font-semibold hover:underline">
              carpet cleaning
            </Link>
            , Fresh Loom also provides:
          </p>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.href}>
              <Link href={service.href} className="block h-full group">
                <div className="h-full bg-white rounded-2xl border border-black/5 shadow-sm p-6 transition-shadow group-hover:shadow-md">
                  <div className="w-11 h-11 rounded-full bg-navy/10 text-navy flex items-center justify-center mb-4">
                    <service.icon size={20} />
                  </div>
                  <h3 className="font-bold text-navy-dark mb-1.5">{service.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-dark">
                    View Service{" "}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
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

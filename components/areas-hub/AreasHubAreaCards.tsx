import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";
import ImagePlaceholder from "./ImagePlaceholder";

const areas = [
  {
    name: "Glasgow",
    description:
      "Fresh Loom is based in Glasgow and provides carpet and specialist cleaning services for homes and properties across the city.",
    href: "/",
    cta: "View Glasgow Services",
  },
  {
    name: "Edinburgh",
    description:
      "Professional carpet and specialist cleaning services for customers in Edinburgh and the surrounding area.",
    href: "/areas/edinburgh",
    cta: "View Edinburgh Services",
  },
  {
    name: "Stirling",
    description:
      "Cleaning services for carpets, furnishings and other suitable surfaces for customers in Stirling.",
    href: "/areas/stirling",
    cta: "View Stirling Services",
  },
  {
    name: "Perth",
    description:
      "Fresh Loom provides carpet and specialist cleaning services for customers looking for professional cleaning in Perth.",
    href: "/areas/perth",
    cta: "View Perth Services",
  },
  {
    name: "Dundee",
    description:
      "Professional carpet cleaning and related cleaning services for homes and properties in Dundee.",
    href: "/areas/dundee",
    cta: "View Dundee Services",
  },
  {
    name: "Dunfermline",
    description:
      "Cleaning services for customers in Dunfermline, including carpet cleaning and other specialist cleaning requirements.",
    href: "/areas/dunfermline",
    cta: "View Dunfermline Services",
  },
];

export default function AreasHubAreaCards() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Our Service Areas
          </h2>
          <p className="text-slate-600">
            Explore our current service areas below, or visit our{" "}
            <Link href="/services" className="text-accent-dark font-semibold hover:underline">
              cleaning services
            </Link>{" "}
            page to see everything we offer.
          </p>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <StaggerItem key={area.name}>
              <div className="h-full flex flex-col rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-white">
                <ImagePlaceholder
                  label={`${area.name} image`}
                  className="relative w-full aspect-[4/3]"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-navy-dark mb-2">{area.name}</h3>
                  <p className="text-sm text-slate-600 mb-5 flex-1">{area.description}</p>
                  <Link
                    href={area.href}
                    className="inline-flex items-center justify-center gap-1.5 text-sm font-heading font-bold uppercase tracking-wide text-accent-dark hover:text-navy-dark transition-colors"
                  >
                    {area.cta} <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

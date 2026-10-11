import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

const otherAreas = [
  { name: "Edinburgh", href: "/areas/edinburgh" },
  { name: "Stirling", href: "/areas/stirling" },
  { name: "Perth", href: "/areas/perth" },
  { name: "Dunfermline", href: "/areas/dunfermline" },
];

export default function DundeeAreasCovered() {
  return (
    <section className="py-16 lg:py-24 bg-navy-dark">
      <Reveal className="container-page max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Carpet Cleaning Across Dundee
        </h2>
        <div className="space-y-4 text-white/70 mb-8">
          <p>Fresh Loom serves customers in Dundee and selected surrounding areas.</p>
          <p>
            For customers looking for carpet cleaning in Dundee, our service is available for
            residential cleaning requirements across the city.
          </p>
          <p>If you are outside Dundee, you can also explore our other service areas:</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {otherAreas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/90 hover:bg-white/10 hover:border-white/20 transition-colors"
            >
              {area.name} <ArrowUpRight size={14} />
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

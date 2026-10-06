import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";
import ConsentGatedMap from "../cookies/ConsentGatedMap";

export default function VisitContact() {
  return (
    <section className="py-16 lg:py-24 bg-navy-dark">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Visit or Contact Fresh Loom
          </h2>

          <div className="text-white/80 mb-8 space-y-1">
            <p className="font-heading font-bold text-white text-lg">{siteInfo.name}</p>
            <p className="flex items-start gap-2">
              <MapPin size={16} className="shrink-0 mt-1" />
              <span>{siteInfo.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <a href={siteInfo.phoneHref} className="hover:text-accent transition-colors">
                {siteInfo.phone}
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact-us" className="btn-accent">
              Request a Quote <ArrowUpRight size={18} />
            </Link>
            <a
              href={siteInfo.phoneHref}
              className="inline-flex items-center gap-2 border-2 border-white text-white font-heading font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded-full hover:bg-white hover:text-navy-dark transition-colors"
            >
              Call Fresh Loom <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1} className="rounded-2xl overflow-hidden shadow-xl">
          <ConsentGatedMap title={`${siteInfo.name} location`} className="h-[320px] lg:h-[380px]" />
        </Reveal>
      </div>
    </section>
  );
}

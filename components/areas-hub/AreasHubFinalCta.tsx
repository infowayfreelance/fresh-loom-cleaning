import { ArrowUpRight, Phone } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Link from "next/link";
import Reveal from "../Reveal";

export default function AreasHubFinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-20 lg:py-28">
      <Reveal className="container-page relative text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Need Cleaning Services in Your Area?
        </h2>
        <p className="text-white/80 mb-8">
          Whether you need carpet cleaning in Glasgow or a specialist cleaning service in one of
          our surrounding areas, Fresh Loom Carpet Cleaning is here to help. Tell us what you need
          cleaned and get in touch to discuss your requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link href="/contact-us" className="btn-accent">
            Request a Quote <ArrowUpRight size={18} />
          </Link>
          <a
            href={siteInfo.phoneHref}
            className="inline-flex items-center gap-2 border-2 border-white text-white font-heading font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded-full hover:bg-white hover:text-navy-dark transition-colors"
          >
            <Phone size={18} /> Call {siteInfo.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

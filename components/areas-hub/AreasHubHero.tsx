import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, MapPin, Phone } from "lucide-react";
import { siteInfo } from "@/lib/data";

export default function AreasHubHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-24 right-1/4 w-72 h-72 rounded-full bg-navy/10 blur-3xl" />

      <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-4 animate-fade-up">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-accent">Areas We Serve</span>
          </div>

          <span className="eyebrow mb-4 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <MapPin size={16} /> Our Service Areas
          </span>

          <h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Carpet Cleaning Areas We Serve
          </h1>

          <p
            className="text-slate-600 text-lg mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Fresh Loom Carpet Cleaning provides professional carpet and{" "}
            <Link href="/services" className="text-accent-dark font-semibold hover:underline">
              specialist cleaning services
            </Link>{" "}
            across Glasgow and selected surrounding areas. Explore our service areas below to
            find information about the cleaning services available in your location.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link href="/contact-us" className="btn-navy">
              Request a Quote <ArrowUpRight size={18} />
            </Link>
            <a href={siteInfo.phoneHref} className="btn-navy-outline">
              <Phone size={16} /> Call Fresh Loom
            </a>
          </div>
        </div>

        <div
          className="hidden lg:block relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl animate-fade-scale"
          style={{ animationDelay: "0.15s" }}
        >
          <Image
            src="/images/areas-hub/service-areas-map-planning.webp"
            alt="A map of Fresh Loom's Scotland service areas with carpet sample swatches on a table"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

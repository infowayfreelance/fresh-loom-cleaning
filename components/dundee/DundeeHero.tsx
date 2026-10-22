import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, MapPin, Phone } from "lucide-react";
import { siteInfo } from "@/lib/data";

export default function DundeeHero() {
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
            <Link href="/areas" className="hover:text-accent transition-colors">
              Areas
            </Link>
            <ChevronRight size={14} />
            <span className="text-accent">Dundee</span>
          </div>

          <span className="eyebrow mb-4 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <MapPin size={16} /> Carpet Cleaning Dundee
          </span>

          <h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Carpet Cleaning Dundee
          </h1>

          <p
            className="text-slate-600 text-lg mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            {siteInfo.name} provides professional carpet cleaning in Dundee for homes and
            properties that need a cleaner, fresher finish. Whether your carpets have everyday
            dirt, visible marks or built-up soil, our service is designed around the condition of
            your carpets and your cleaning requirements.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link href="/contact-us" className="btn-navy">
              Request a Quote <ArrowUpRight size={18} />
            </Link>
            <a href={siteInfo.phoneHref} className="btn-navy-outline">
              <Phone size={16} /> Call Us
            </a>
          </div>
        </div>

        <div className="hidden lg:block animate-fade-scale" style={{ animationDelay: "0.15s" }}>
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/carpet-cleaning-dundee-waterfront-view.webp"
              alt="Carpet cleaning in a Dundee home overlooking the Tay"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

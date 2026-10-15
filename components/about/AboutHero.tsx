import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Tag } from "lucide-react";
import { siteInfo } from "@/lib/data";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-24 right-1/3 w-72 h-72 rounded-full bg-navy/10 blur-3xl" />

      <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-4 animate-fade-up">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-accent">About Us</span>
          </div>

          <span className="eyebrow mb-4 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <Tag size={16} /> Who We Are
          </span>

          <h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-5 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            About Fresh Loom Carpet Cleaning
          </h1>

          <p
            className="text-slate-600 text-lg mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Fresh Loom Carpet Cleaning provides{" "}
            <Link href="/services" className="text-accent-dark font-semibold hover:underline">
              professional cleaning services
            </Link>{" "}
            for homes and properties, with a focus on careful service, practical cleaning
            solutions and customer satisfaction.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link href="/services" className="btn-navy">
              Our Services <ArrowUpRight size={18} />
            </Link>
            <a href={siteInfo.phoneHref} className="btn-navy-outline">
              Call Us <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="hidden lg:block animate-fade-scale" style={{ animationDelay: "0.15s" }}>
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/professional-cleaner-arriving-glasgow-property.webp"
              alt="Fresh Loom Carpet Cleaning technician arriving at a Glasgow property"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <svg
        className="block w-full h-10 sm:h-16 text-white"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"
        />
      </svg>
    </section>
  );
}

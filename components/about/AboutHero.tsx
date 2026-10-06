"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Tag } from "lucide-react";
import { siteInfo } from "@/lib/data";
import PhotoPlaceholder from "./PhotoPlaceholder";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-24 right-1/3 w-72 h-72 rounded-full bg-navy/10 blur-3xl" />

      <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <motion.div
            className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-accent">About Us</span>
          </motion.div>

          <motion.span
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Tag size={16} /> Who We Are
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          >
            About Fresh Loom Carpet Cleaning
          </motion.h1>

          <motion.p
            className="text-slate-600 text-lg mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          >
            Fresh Loom Carpet Cleaning provides professional cleaning services for homes and
            properties, with a focus on careful service, practical cleaning solutions and
            customer satisfaction.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Link href="/services" className="btn-navy">
              Our Services <ArrowUpRight size={18} />
            </Link>
            <a href={siteInfo.phoneHref} className="btn-navy-outline">
              Call Us <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <PhotoPlaceholder
            label="Fresh Loom team or work photograph"
            className="aspect-[4/3] w-full"
          />
        </motion.div>
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

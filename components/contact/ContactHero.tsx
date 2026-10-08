"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Phone, Tag } from "lucide-react";
import { siteInfo } from "@/lib/data";
import ImagePlaceholder from "../ImagePlaceholder";

export default function ContactHero() {
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
            <span className="text-accent">Contact Us</span>
          </motion.div>

          <motion.span
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Tag size={16} /> Get In Touch
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          >
            Contact Fresh Loom Carpet Cleaning
          </motion.h1>

          <motion.p
            className="text-slate-600 text-lg mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          >
            Have a carpet, sofa, upholstery or other furnishing that needs professional cleaning?
            Get in touch with {siteInfo.name} to discuss your requirements, ask a question or
            request a quote.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Link href="#quote-form" className="btn-navy">
              Request a Quote <ArrowUpRight size={18} />
            </Link>
            <a href={siteInfo.phoneHref} className="btn-navy-outline">
              <Phone size={16} /> Call Us
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <ImagePlaceholder label="Fresh Loom photograph" />
        </motion.div>
      </div>
    </section>
  );
}

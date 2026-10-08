"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Phone, Tag } from "lucide-react";
import { siteInfo } from "@/lib/data";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-navy-dark">
      <Image
        src="/images/contact-office-phone-call-glasgow.webp"
        alt="Fresh Loom team member taking a booking call in the office"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/50" />

      <div className="container-page relative py-20 lg:py-28">
        <motion.div
          className="flex items-center gap-2 text-sm font-medium text-white/60 mb-4"
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
          className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
        >
          Contact Fresh Loom Carpet Cleaning
        </motion.h1>

        <motion.p
          className="text-white/80 text-lg mb-8 max-w-xl"
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
          <Link href="#quote-form" className="btn-accent">
            Request a Quote <ArrowUpRight size={18} />
          </Link>
          <a
            href={siteInfo.phoneHref}
            className="inline-flex items-center gap-2 border-2 border-white text-white font-heading font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded-full hover:bg-white hover:text-navy-dark transition-colors"
          >
            <Phone size={16} /> Call Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

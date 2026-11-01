"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Star, Tag } from "lucide-react";
import { siteInfo, stats } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

const statColors = ["text-navy-dark", "text-accent", "text-navy-dark"];

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" />
      <path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z" />
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" />
    </svg>
  );
}

function GoogleReviewsBadge() {
  const { rating, count, url } = siteInfo.googleReviews;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${siteInfo.name} rated ${rating} out of 5 on Google, from ${count} reviews — opens Google in a new tab`}
      className="animate-fade-up mb-4 flex w-fit flex-col gap-1 rounded-2xl border border-navy/10 bg-white/95 px-3 py-2 shadow-sm transition-colors hover:border-accent/30 hover:shadow-md"
    >
      <span className="text-xs font-bold text-navy-dark sm:text-sm">{siteInfo.name}</span>
      <span className="flex items-center gap-1.5">
        <GoogleIcon className="h-4 w-4 shrink-0" />
        <span className="font-bold text-navy-dark text-xs sm:text-sm">{rating}</span>
        <span className="flex items-center text-amber-400" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
          ))}
        </span>
        <span className="whitespace-nowrap text-xs text-slate-500 sm:text-sm">
          {count} Google reviews
        </span>
      </span>
    </a>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <GoogleReviewsBadge />
          <span className="eyebrow mb-4 animate-fade-up">
            <Tag size={16} /> Glasgow&apos;s Cleaning Specialists
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Professional Carpet Cleaning in Glasgow
          </h1>
          <p
            className="text-slate-600 text-lg mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {siteInfo.name} provides professional carpet cleaning in Glasgow, along with
            upholstery, sofa and rug cleaning for homes and businesses across the city. We remove
            everyday dirt, stains, odours and built-up grime, helping your carpets and
            furnishings look and feel fresh again.
          </p>
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <motion.a
              href="/contact-us"
              className="btn-navy"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a Free Quote <ArrowUpRight size={18} />
            </motion.a>
            <motion.a
              href={siteInfo.phoneHref}
              className="btn-navy-outline"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={18} /> Call Us
            </motion.a>
          </div>

          <div className="flex gap-6 sm:gap-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((s, i) => (
              <div key={s.label}>
                <div className={`text-2xl sm:text-3xl font-bold font-heading ${statColors[i % statColors.length]}`}>
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative z-0 w-[280px] sm:w-[340px] lg:w-[380px] aspect-[414/602]">
            <motion.div
              className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[125%] h-[70%] rounded-full bg-accent/15 -z-10"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[95%] h-[53%] rounded-full bg-accent -z-10"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <Image
              src="/images/hero-cleaner.png"
              alt="Professional cleaner at work"
              width={414}
              height={602}
              className="drop-shadow-2xl w-full h-full object-contain"
              priority
            />
            <motion.div
              className="hidden sm:block absolute -bottom-10 -right-6 w-[150px] h-[150px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/hero-tools.png"
                alt="Cleaning tools"
                width={284}
                height={300}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

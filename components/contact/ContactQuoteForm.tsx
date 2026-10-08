"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { allServices, siteInfo } from "@/lib/data";
import Reveal from "../Reveal";

export default function ContactQuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const service = data.get("service") as string;
    const message = data.get("message") as string;

    const lines = [
      `Hi ${siteInfo.name}! I'd like a quote.`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      service ? `Service Required: ${service}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);

    const waNumber = siteInfo.phoneHref.replace("tel:+", "");
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  }

  return (
    <section id="quote-form" className="py-16 lg:py-24 bg-light scroll-mt-20">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Request a Cleaning Quote
          </h2>
          <p className="text-slate-600 max-w-md">
            Tell us a little about the cleaning you need and our team can review your enquiry and
            get back to you.
          </p>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          {submitted ? (
            <div className="rounded-2xl bg-navy/5 border border-navy/10 p-8 text-center">
              <h3 className="text-xl font-bold text-navy-dark mb-2">Thank you!</h3>
              <p className="text-slate-600">
                We&apos;ve opened WhatsApp with your quote request. Send the message and our team
                will get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid gap-4 bg-white rounded-2xl shadow-sm border border-black/5 p-6 sm:p-8"
            >
              <input
                required
                name="name"
                type="text"
                placeholder="Name"
                className="rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <select
                name="service"
                defaultValue=""
                className="rounded-xl border border-black/10 px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="" disabled>
                  Service Required
                </option>
                {allServices.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Not sure / Other">Not sure / Other</option>
              </select>

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
              />

              <button type="submit" className="btn-accent justify-center">
                Request a Quote <ArrowUpRight size={18} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

import { Phone, Mail, MapPin } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";
import ContactQuoteForm from "./ContactQuoteForm";

const cards = [
  {
    icon: Phone,
    title: "Call Us",
    content: (
      <a href={siteInfo.phoneHref} className="text-slate-600 hover:text-accent-dark transition-colors">
        {siteInfo.phone}
      </a>
    ),
  },
  {
    icon: Mail,
    title: "Email Us",
    content: (
      <a
        href={`mailto:${siteInfo.email}`}
        className="text-slate-600 hover:text-accent-dark transition-colors break-all"
      >
        {siteInfo.email}
      </a>
    ),
  },
  {
    icon: MapPin,
    title: "Our Location",
    content: (
      <p className="text-slate-600">
        {siteInfo.name}
        <br />
        2/2, 156 Charles St
        <br />
        Glasgow G21 2QH
        <br />
        United Kingdom
      </p>
    ),
  },
];

export default function ContactDetails() {
  return (
    <section id="quote-form" className="py-16 lg:py-24 scroll-mt-20">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-10">
            Get in Touch
          </h2>

          <StaggerGroup className="grid gap-6">
            {cards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="flex items-start gap-4 bg-white rounded-2xl border border-black/5 shadow-sm p-6">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-navy/10 text-navy flex items-center justify-center">
                    <card.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-dark mb-1">{card.title}</h3>
                    {card.content}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Request a Cleaning Quote
          </h2>
          <p className="text-slate-600 mb-6">
            Tell us a little about the cleaning you need and our team can review your enquiry and
            get back to you.
          </p>
          <ContactQuoteForm />
        </Reveal>
      </div>
    </section>
  );
}

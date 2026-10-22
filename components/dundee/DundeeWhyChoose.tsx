import Link from "next/link";
import { CalendarCheck, Layers3, MapPin, MessageCircle } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const reasons = [
  { icon: CalendarCheck, text: "Over a decade of cleaning experience" },
  { icon: Layers3, text: "Carpet and specialist cleaning services" },
  { icon: MapPin, text: "Glasgow-based business serving selected surrounding areas" },
  { icon: MessageCircle, text: "Clear and straightforward contact process" },
];

export default function DundeeWhyChoose() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page max-w-3xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Why Choose Fresh Loom?
          </h2>
          <div className="space-y-4 text-slate-600 mb-10">
            <p>{siteInfo.name} has been providing cleaning services for over a decade.</p>
            <p>
              We offer a range of specialist cleaning services rather than focusing only on{" "}
              <Link href="/services/carpet-cleaning" className="text-accent-dark font-semibold hover:underline">
                carpets
              </Link>
              , allowing customers to find suitable cleaning options for carpets,{" "}
              <Link href="/services/upholstery-cleaning" className="text-accent-dark font-semibold hover:underline">
                upholstery
              </Link>{" "}
              and other furnishings.
            </p>
            <p>
              Our approach is simple: understand what needs cleaning, provide the appropriate
              service and keep communication clear throughout the process. Read more about our
              approach on our{" "}
              <Link href="/about-us" className="text-accent-dark font-semibold hover:underline">
                About Us
              </Link>{" "}
              page.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 gap-4">
          {reasons.map((reason) => (
            <StaggerItem key={reason.text}>
              <div className="flex items-center gap-3 bg-light rounded-xl p-4">
                <span className="w-9 h-9 shrink-0 rounded-full bg-navy/10 text-navy flex items-center justify-center">
                  <reason.icon size={18} />
                </span>
                <span className="text-sm font-medium text-navy-dark">{reason.text}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

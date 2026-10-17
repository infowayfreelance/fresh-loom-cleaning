import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "../Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

const reasons = [
  "Over a decade of cleaning experience",
  "Glasgow-based business",
  "Range of carpet and specialist cleaning services",
  "Established service areas across Glasgow and surrounding locations",
];

export default function AreasHubWhyChoose() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <ImagePlaceholder
            label="Why choose Fresh Loom image"
            className="relative w-full aspect-[4/3] rounded-3xl shadow-xl"
          />
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Why Choose Fresh Loom?
          </h2>
          <div className="space-y-4 text-slate-600 mb-6">
            <p>
              Fresh Loom Carpet Cleaning has been providing cleaning services for over a decade. We
              offer{" "}
              <Link href="/services/carpet-cleaning" className="text-accent-dark font-semibold hover:underline">
                carpet cleaning
              </Link>{" "}
              alongside a range of specialist cleaning services for carpets,{" "}
              <Link href="/services/upholstery-cleaning" className="text-accent-dark font-semibold hover:underline">
                upholstery
              </Link>{" "}
              and other furnishings.
            </p>
            <p>
              Our focus is on providing a straightforward service based on the customer&apos;s
              requirements, with clear information about the services we provide and the areas we
              cover.
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-2 text-sm text-slate-600">
                <Check size={16} className="text-accent shrink-0 mt-0.5" />
                {reason}
              </li>
            ))}
          </ul>

          <Link href="/about-us" className="btn-accent">
            Learn More About Fresh Loom <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

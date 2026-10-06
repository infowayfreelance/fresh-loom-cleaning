import Image from "next/image";
import { BookOpen } from "lucide-react";
import Reveal from "../Reveal";

export default function OurStory() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <span className="eyebrow mb-4">
            <BookOpen size={16} /> Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">Our Story</h2>
          <div className="space-y-4 text-slate-600">
            <p>
              For over a decade, Fresh Loom Carpet Cleaning has helped customers keep their
              carpets and furnishings cleaner, fresher and more comfortable. What started as a
              focus on professional cleaning has grown into a wider service covering carpets,
              upholstery, sofas, rugs, stains, odours and other specialist cleaning needs.
            </p>
            <p>
              Based in Glasgow, Fresh Loom now serves customers across Glasgow and surrounding
              areas, while continuing to focus on straightforward service, clear communication
              and attention to the condition of each property.
            </p>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/fresh-loom-cleaning-van-glasgow-street.webp"
              alt="Fresh Loom Carpet Cleaning van loaded with equipment on a Glasgow street"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

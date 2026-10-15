import Image from "next/image";
import Link from "next/link";
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
              focus on professional cleaning has grown into a wider service covering{" "}
              <Link
                href="/services/carpet-cleaning"
                prefetch={false}
                className="text-accent-dark font-semibold hover:underline"
              >
                carpets
              </Link>
              ,{" "}
              <Link
                href="/services/upholstery-cleaning"
                prefetch={false}
                className="text-accent-dark font-semibold hover:underline"
              >
                upholstery
              </Link>
              ,{" "}
              <Link
                href="/services/sofa-cleaning"
                prefetch={false}
                className="text-accent-dark font-semibold hover:underline"
              >
                sofas
              </Link>
              ,{" "}
              <Link
                href="/services/rug-cleaning"
                prefetch={false}
                className="text-accent-dark font-semibold hover:underline"
              >
                rugs
              </Link>
              ,{" "}
              <Link
                href="/services/stain-removal"
                prefetch={false}
                className="text-accent-dark font-semibold hover:underline"
              >
                stains
              </Link>
              ,{" "}
              <Link
                href="/services/odour-removal"
                prefetch={false}
                className="text-accent-dark font-semibold hover:underline"
              >
                odours
              </Link>{" "}
              and other specialist cleaning needs.
            </p>
            <p>
              Based in Glasgow, Fresh Loom now serves customers across Glasgow and surrounding
              areas, while continuing to focus on straightforward service, clear communication
              and attention to the condition of each property. Read more about{" "}
              <Link
                href="/services"
                prefetch={false}
                className="text-accent-dark font-semibold hover:underline"
              >
                our cleaning services
              </Link>{" "}
              or{" "}
              <Link
                href="/contact-us"
                prefetch={false}
                className="text-accent-dark font-semibold hover:underline"
              >
                get in touch
              </Link>{" "}
              to discuss your requirements.
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

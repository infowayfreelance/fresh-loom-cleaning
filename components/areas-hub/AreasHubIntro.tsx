import Link from "next/link";
import { MapPin } from "lucide-react";
import { siteInfo } from "@/lib/data";
import Reveal from "../Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

export default function AreasHubIntro() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Based in Glasgow, Serving Surrounding Areas
          </h2>
          <div className="space-y-4 text-slate-600 mb-8">
            <p>
              Fresh Loom Carpet Cleaning is based in{" "}
              <Link href="/" className="text-accent-dark font-semibold hover:underline">
                Glasgow
              </Link>{" "}
              and provides cleaning services to customers across Glasgow and our established
              surrounding service areas, including{" "}
              <Link href="/areas/edinburgh" className="text-accent-dark font-semibold hover:underline">
                Edinburgh
              </Link>
              ,{" "}
              <Link href="/areas/stirling" className="text-accent-dark font-semibold hover:underline">
                Stirling
              </Link>
              ,{" "}
              <Link href="/areas/perth" className="text-accent-dark font-semibold hover:underline">
                Perth
              </Link>
              ,{" "}
              <Link href="/areas/dundee" className="text-accent-dark font-semibold hover:underline">
                Dundee
              </Link>{" "}
              and{" "}
              <Link href="/areas/dunfermline" className="text-accent-dark font-semibold hover:underline">
                Dunfermline
              </Link>
              .
            </p>
            <p>
              Our local service coverage allows customers to find the cleaning services they need
              without having to search through a general list of locations. Select your area below
              to explore the services and information available in your location.
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-light border border-black/5 p-6 max-w-sm">
            <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
            <div className="text-sm text-slate-600">
              <p className="font-heading font-bold text-navy-dark mb-1">{siteInfo.name}</p>
              <p>{siteInfo.address}</p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <ImagePlaceholder
            label="Glasgow base image"
            className="relative w-full aspect-[4/3] rounded-3xl shadow-xl"
          />
        </Reveal>
      </div>
    </section>
  );
}

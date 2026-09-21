import Image from "next/image";
import { Hand, Droplet, Wind } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const points = [
  {
    icon: Hand,
    title: "What Caused It?",
    description:
      "Food, drinks, oils, dyes and other substances can behave differently once they reach fibres.",
  },
  {
    icon: Droplet,
    title: "What Is the Material?",
    description:
      "Carpet, wool, upholstery and rug fibres do not necessarily respond to treatment in the same way.",
  },
  {
    icon: Wind,
    title: "Has It Been Treated Already?",
    description: "Previous DIY products or cleaning attempts can affect both the stain and the material around it.",
  },
];

export default function StainDifferences() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <Reveal direction="left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
              Why Different Stains Need Different Treatment
            </h2>
            <div className="space-y-4 text-slate-600">
              <p>
                A stain is more than a coloured mark on a surface.
              </p>
              <p>
                What caused it matters. So does the material it landed on, how long it has been there and what has already been used to clean it.
              </p>
              <p>
                An oily mark can behave differently from a drink spill. Pigments from food or wine may interact with fibres differently from mud or everyday dirt. A household cleaning product can sometimes change the stain before a professional sees it.
              </p>
              <p>
                That is why professional stain removal starts with understanding the problem rather than reaching for one universal solution.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/different-household-stain-types.webp"
                alt="Different household stains on carpet and upholstery samples"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="grid md:grid-cols-3 gap-6">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div className="h-full bg-white rounded-2xl border border-black/5 shadow-sm p-7">
                <div className="w-12 h-12 rounded-full bg-navy/10 text-navy flex items-center justify-center mb-5">
                  <point.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy-dark mb-2">{point.title}</h3>
                <p className="text-sm text-slate-600">{point.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

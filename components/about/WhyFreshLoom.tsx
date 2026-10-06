import { MapPin, CalendarCheck, Layers3, MessageCircle } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const points = [
  {
    icon: MapPin,
    title: "Local Glasgow Business",
    description: "Fresh Loom is based in Glasgow and serves customers across Glasgow and surrounding areas.",
  },
  {
    icon: CalendarCheck,
    title: "Over a Decade of Experience",
    description: "Fresh Loom has been providing cleaning services for over a decade.",
  },
  {
    icon: Layers3,
    title: "A Wide Range of Cleaning Services",
    description:
      "From carpets and upholstery to sofas, rugs, stains, odours and other specialist cleaning needs.",
  },
  {
    icon: MessageCircle,
    title: "Customer-Focused Service",
    description:
      "Keep communication clear and focus on providing a practical service based on the customer's cleaning needs.",
  },
];

export default function WhyFreshLoom() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Why Customers Choose Fresh Loom
          </h2>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div className="h-full rounded-2xl bg-white border border-black/5 shadow-sm p-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent-dark flex items-center justify-center mb-5">
                  <point.icon size={22} />
                </div>
                <h3 className="font-bold text-navy-dark mb-2">{point.title}</h3>
                <p className="text-sm text-slate-600">{point.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

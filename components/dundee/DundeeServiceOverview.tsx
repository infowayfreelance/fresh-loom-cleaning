import { Check } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const points = [
  "Everyday dirt and soil",
  "Foot traffic and general wear",
  "Food and drink marks",
  "Visible stains",
  "Pet-related marks and odours",
  "Areas that have become dull or heavily used",
];

export default function DundeeServiceOverview() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page max-w-3xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            Our Carpet Cleaning Service
          </h2>
          <p className="text-slate-600 mb-8">
            Our carpet cleaning service is suitable for homes and properties where carpets need a
            deeper clean than normal household maintenance can provide.
          </p>
          <p className="text-slate-600 mb-4">We can help with carpets affected by:</p>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 gap-3 mb-8">
          {points.map((point) => (
            <StaggerItem key={point}>
              <div className="flex items-start gap-3 bg-white rounded-xl border border-black/5 p-4">
                <span className="w-6 h-6 shrink-0 rounded-full bg-accent/15 text-accent-dark flex items-center justify-center mt-0.5">
                  <Check size={14} />
                </span>
                <span className="text-slate-700">{point}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal>
          <p className="text-sm text-slate-500">
            Results can vary depending on the carpet material, condition, type of stain and how
            long the problem has been present. We do not promise that every stain can be
            completely removed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import { Search, ClipboardCheck, SprayCan, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand the Cleaning Need",
    description: "We first identify what needs attention and what the customer wants to improve.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Assess the Surface",
    description: "The condition and material are considered before the cleaning approach is chosen.",
  },
  {
    number: "03",
    icon: SprayCan,
    title: "Carry Out the Service",
    description:
      "The appropriate cleaning service is completed with care and attention to the property.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Check the Finished Result",
    description: "The cleaned area is checked before the job is completed.",
  },
];

export default function OurApproach() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            How We Approach Every Job
          </h2>
          <p className="text-slate-600">
            Every cleaning job is different. The condition of the surface, the type of material
            and the problem being treated can all affect the right approach.
          </p>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="h-full bg-white rounded-2xl border border-black/5 shadow-sm p-6 relative">
                <span className="text-4xl font-extrabold text-navy/10 block mb-1">
                  {step.number}
                </span>
                <div className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center mb-4 -mt-2">
                  <step.icon size={20} />
                </div>
                <h3 className="font-bold text-navy-dark mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

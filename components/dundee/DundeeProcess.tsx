import { MessageCircle, ClipboardCheck, SprayCan, CheckCircle2 } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const steps = [
  {
    icon: MessageCircle,
    title: "Discuss Your Cleaning Requirements",
    description:
      "Tell us what needs cleaning and whether there are particular stains, marks or areas that need attention.",
  },
  {
    icon: ClipboardCheck,
    title: "Assess the Carpet",
    description:
      "The carpet and its condition should be considered before the appropriate cleaning approach is carried out.",
  },
  {
    icon: SprayCan,
    title: "Clean the Carpet",
    description:
      "The selected cleaning service is carried out carefully, with attention given to areas that need additional treatment.",
  },
  {
    icon: CheckCircle2,
    title: "Check the Finished Result",
    description: "The cleaned areas are checked before the job is completed.",
  },
];

export default function DundeeProcess() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            How Our Carpet Cleaning Works
          </h2>
          <p className="text-slate-600">
            We keep the process simple and focused on the condition of your carpets.
          </p>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="h-full bg-white rounded-2xl border border-black/5 shadow-sm p-6 relative">
                <span className="text-4xl font-extrabold text-navy/10 block mb-1">
                  {String(i + 1).padStart(2, "0")}
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

import { ClipboardCheck, MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const steps = [
  {
    icon: MapPin,
    title: "Choose Your Area",
    description: "Select your location from our service areas to find relevant local information.",
  },
  {
    icon: ClipboardCheck,
    title: "Choose Your Service",
    description: "Explore the cleaning service that matches what you need.",
  },
  {
    icon: MessageCircle,
    title: "Tell Us What You Need",
    description: "Contact Fresh Loom with details about your cleaning requirements.",
  },
  {
    icon: Phone,
    title: "Request a Quote",
    description: "Discuss your requirements with our team and arrange the appropriate service.",
  },
];

export default function AreasHubProcess() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            How Our Local Service Works
          </h2>
          <p className="text-slate-600">
            Finding the right cleaning service should be straightforward. Our area pages provide
            information about the services available in each location so you can choose the option
            that best matches your requirements.
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

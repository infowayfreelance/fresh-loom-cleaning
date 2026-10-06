import { Users, CalendarCheck, UsersRound } from "lucide-react";
import { stats } from "@/lib/data";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";
import AnimatedCounter from "../AnimatedCounter";

const icons = [Users, CalendarCheck, UsersRound];

export default function BusinessStats() {
  return (
    <section className="py-16 lg:py-24 bg-navy-dark">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow justify-center mb-4">An Established Business</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Fresh Loom in Numbers
          </h2>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-3 gap-6">
          {stats.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={s.label}>
                <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent/15 text-accent flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <div className="text-4xl font-extrabold font-heading text-white mb-2">
                    <AnimatedCounter value={s.value} />
                  </div>
                  <div className="text-sm text-white/70">{s.label}</div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

import { MessageSquareText } from "lucide-react";
import Reveal from "../Reveal";

export default function CustomerReviews() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="container-page">
        <Reveal className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-6">
            What Our Customers Say
          </h2>
          <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-10 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-navy/10 text-navy flex items-center justify-center">
              <MessageSquareText size={22} />
            </div>
            <p className="text-slate-600 max-w-sm">
              Customer reviews for Fresh Loom Carpet Cleaning will be added to this section soon.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

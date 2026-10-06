import Image from "next/image";
import { Camera } from "lucide-react";
import Reveal from "../Reveal";
import { StaggerGroup, StaggerItem } from "../Stagger";

const photos = [
  {
    src: "/images/booking-a-cleaning-appointment.webp",
    alt: "Fresh Loom Carpet Cleaning taking a booking over the phone",
    caption: "Taking the details of a job before it's booked in",
  },
  {
    src: "/images/discussing-a-carpet-stain-with-customer.webp",
    alt: "Fresh Loom Carpet Cleaning technician discussing a carpet stain with a customer",
    caption: "Discussing a mark on the carpet before treatment begins",
  },
  {
    src: "/images/close-inspection-of-rug-before-cleaning.webp",
    alt: "Close inspection of a rug edge before cleaning",
    caption: "A close look at the material before cleaning starts",
  },
  {
    src: "/images/preparing-upholstery-and-rug-for-cleaning.webp",
    alt: "Fresh Loom Carpet Cleaning preparing upholstery and a rug for cleaning",
    caption: "Preparing upholstery and a rug ahead of cleaning",
  },
];

export default function FreshLoomAtWork() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow mb-4">
            <Camera size={16} /> Fresh Loom at Work
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            A Look at How We Work
          </h2>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 gap-6">
          {photos.map((photo) => (
            <StaggerItem key={photo.src}>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-white h-full">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="py-4 px-5 text-sm text-slate-600">{photo.caption}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

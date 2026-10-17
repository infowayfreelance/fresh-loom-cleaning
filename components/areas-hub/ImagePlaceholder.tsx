import { ImageIcon } from "lucide-react";

// Reserves the visual space for a photo that will be added later, styled to
// match the surrounding card/hero chrome so the page still looks finished.
export default function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed border-navy/15 bg-light text-navy/35 ${className}`}
    >
      <ImageIcon size={28} strokeWidth={1.5} />
      <span className="text-xs font-semibold uppercase tracking-wide text-center px-4">
        {label}
      </span>
    </div>
  );
}

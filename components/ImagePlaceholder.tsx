import { Camera } from "lucide-react";

export default function ImagePlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full ${aspect} rounded-3xl overflow-hidden border-2 border-dashed border-navy/20 bg-navy/5 flex flex-col items-center justify-center text-center p-6 ${className}`}
    >
      <Camera size={28} className="text-navy/40 mb-3" />
      <p className="text-sm font-medium text-navy/50 max-w-xs">{label}</p>
    </div>
  );
}

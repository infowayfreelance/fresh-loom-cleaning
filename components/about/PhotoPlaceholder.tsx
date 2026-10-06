import { Camera } from "lucide-react";

export default function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-navy/15 bg-light text-center p-8 ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-navy/10 text-navy flex items-center justify-center">
        <Camera size={22} />
      </div>
      <p className="text-sm font-medium text-slate-500 max-w-[220px]">{label}</p>
    </div>
  );
}

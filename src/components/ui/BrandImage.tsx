/* eslint-disable @next/next/no-img-element */

const PLACEHOLDER_LABELS: Record<string, string> = {
  hero: "Storefront",
  interior: "Store Interior",
  exterior: "Visit Us",
  repair: "Clipper Repair",
  gallery: "In Store",
};

export function BrandImage({
  src,
  alt,
  aspect = "video",
  label,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  aspect?: "video" | "portrait" | "square" | "wide";
  label?: string;
  className?: string;
  priority?: boolean;
}) {
  const aspectClass = {
    video: "aspect-video",
    portrait: "aspect-[4/5]",
    square: "aspect-square",
    wide: "aspect-[16/10]",
  }[aspect];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F8F9FA] shadow-sm ${aspectClass} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        loading={priority ? "eager" : "lazy"}
      />
      {label && (
        <span className="sr-only">{label}</span>
      )}
    </div>
  );
}

export function BrandImagePlaceholder({
  variant = "hero",
  aspect = "video",
  className = "",
}: {
  variant?: keyof typeof PLACEHOLDER_LABELS | "hero" | "interior" | "exterior" | "repair" | "gallery";
  aspect?: "video" | "portrait" | "square" | "wide";
  className?: string;
}) {
  const aspectClass = {
    video: "aspect-video",
    portrait: "aspect-[4/5]",
    square: "aspect-square",
    wide: "aspect-[16/10]",
  }[aspect];

  const label = PLACEHOLDER_LABELS[variant] ?? "BBS Supply";

  return (
    <div
      className={`relative flex items-end overflow-hidden rounded-2xl border border-[#E5E7EB] bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA] p-8 shadow-sm ${aspectClass} ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/5 via-transparent to-[#D4A017]/10" />
      <div className="absolute top-8 right-8 h-24 w-24 rounded-full bg-[#D4A017]/10 blur-2xl" />
      <div className="absolute bottom-12 left-12 h-32 w-32 rounded-full bg-[#2563EB]/10 blur-3xl" />
      <p className="relative text-xs font-medium tracking-[0.2em] text-[#6B7280] uppercase">
        {label}
      </p>
    </div>
  );
}

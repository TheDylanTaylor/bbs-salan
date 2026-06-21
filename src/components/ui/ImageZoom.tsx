import type { ReactNode } from "react";

type ImageZoomProps = {
  children: ReactNode;
  className?: string;
  aspect?: string;
};

export function ImageZoom({
  children,
  className = "",
  aspect = "aspect-[4/5]",
}: ImageZoomProps) {
  return (
    <div
      className={`image-zoom relative overflow-hidden bg-[#F8F9FA] ${aspect} ${className}`}
    >
      {children}
    </div>
  );
}

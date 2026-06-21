"use client";

import { AnimateOnScroll } from "./AnimateOnScroll";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
  triggerOnMount?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  className = "",
  triggerOnMount = false,
}: SectionHeadingProps) {
  return (
    <AnimateOnScroll triggerOnMount={triggerOnMount} className={className}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-lead">{subtitle}</p>}
    </AnimateOnScroll>
  );
}

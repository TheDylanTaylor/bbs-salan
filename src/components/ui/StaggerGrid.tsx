"use client";

import { Children, isValidElement, type ReactNode } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";

type StaggerGridProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay between items in ms */
  staggerMs?: number;
  as?: "div" | "section" | "ul";
};

export function StaggerGrid({
  children,
  className = "",
  staggerMs = 100,
  as: Tag = "div",
}: StaggerGridProps) {
  const items = Children.toArray(children);

  return (
    <Tag className={className}>
      {items.map((child, index) => {
        const key =
          isValidElement(child) && child.key != null ? child.key : index;

        return (
          <AnimateOnScroll key={key} delay={index * staggerMs}>
            {child}
          </AnimateOnScroll>
        );
      })}
    </Tag>
  );
}

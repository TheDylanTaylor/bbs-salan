"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Delay in ms before animation starts */
  delay?: number;
  /** Animate immediately on mount (for hero / above-fold content) */
  triggerOnMount?: boolean;
  once?: boolean;
};

export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  triggerOnMount = false,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (triggerOnMount) {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnMount, once]);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--animate-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

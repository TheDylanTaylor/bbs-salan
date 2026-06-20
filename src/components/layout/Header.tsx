"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { business } from "@/lib/business";

const NAV_LINKS = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/visit", label: "Visit" },
  { href: "/contact", label: "Contact" },
];

export function DirectionsButton({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  const sizeClasses = size === "large" ? "px-6 py-3" : "px-5 py-2.5";

  return (
    <a
      href={business.directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary gap-2 ${sizeClasses} ${className}`}
    >
      Get Directions
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="page-container flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-[0.15em] text-[#111111] uppercase">
            BBS
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" aria-hidden="true" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#6B7280] transition-colors duration-200 hover:text-[#111111]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <DirectionsButton className="hidden sm:inline-flex" />
          <MobileNav links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}

function MobileNav({ links }: { links: typeof NAV_LINKS }) {
  return (
    <details className="relative md:hidden">
      <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center text-[#111111] [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Open menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </summary>
      <nav
        className="absolute right-0 top-full mt-3 w-48 rounded-xl border border-[#E5E7EB] bg-white py-2 shadow-lg"
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-5 py-3 text-sm text-[#6B7280] transition-colors hover:text-[#111111]"
          >
            {link.label}
          </Link>
        ))}
        <div className="border-t border-[#E5E7EB] px-5 py-3">
          <DirectionsButton className="w-full text-center" />
        </div>
      </nav>
    </details>
  );
}

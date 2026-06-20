import Link from "next/link";
import { business, HOURS_LABELS, HOURS_ORDER } from "@/lib/business";

export function StoreInfoBar() {
  return (
    <section className="border-b border-[#E5E7EB]" aria-label="Store information">
      <div className="page-container flex flex-col gap-2 py-4 text-sm text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#2563EB]"
        >
          {business.address.full}
        </a>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <a href={`tel:${business.phoneTel}`} className="transition-colors hover:text-[#2563EB]">
            {business.phone}
          </a>
          <span>{business.hoursSummary}</span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#E5E7EB] bg-[#F8F9FA]">
      <div className="page-container py-28 sm:py-32">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold tracking-[0.15em] text-[#111111] uppercase">
              BBS Barber &amp; Salon Supply
              <span className="h-1 w-1 rounded-full bg-[#D4A017]" aria-hidden="true" />
            </p>
            <p className="mt-6 max-w-sm body-text">
              {business.tagline}
            </p>
            <div className="mt-8 space-y-2 text-sm text-[#6B7280]">
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-[#2563EB]"
              >
                {business.address.full}
              </a>
              <a
                href={`tel:${business.phoneTel}`}
                className="block transition-colors hover:text-[#2563EB]"
              >
                {business.phone}
              </a>
              <p>{business.hoursSummary}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="mb-4 text-xs font-medium tracking-widest text-[#6B7280] uppercase">
                Pages
              </p>
              <ul className="space-y-3">
                <li><Link href="/products" className="link-subtle">Products</Link></li>
                <li><Link href="/services" className="link-subtle">Services</Link></li>
                <li><Link href="/about" className="link-subtle">About</Link></li>
                <li><Link href="/reviews" className="link-subtle">Reviews</Link></li>
                <li><Link href="/visit" className="link-subtle">Visit</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-medium tracking-widest text-[#6B7280] uppercase">
                Social
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href={business.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-subtle"
                  >
                    {business.social.instagram.handle}
                  </a>
                </li>
                <li>
                  <a
                    href={business.social.tiktok.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-subtle"
                  >
                    {business.social.tiktok.handle}
                  </a>
                </li>
              </ul>
              <p className="mt-8 mb-3 text-xs font-medium tracking-widest text-[#6B7280] uppercase">
                Hours
              </p>
              <ul className="space-y-1 text-[#6B7280]">
                {HOURS_ORDER.map((day) => (
                  <li key={day} className="flex justify-between gap-4">
                    <span>{HOURS_LABELS[day]}</span>
                    <span>{business.hours[day]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-16 text-xs text-[#6B7280]">
          &copy; {new Date().getFullYear()} BBS Barber &amp; Salon Supply
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { business, HOURS_LABELS, HOURS_ORDER } from "@/lib/business";

export function StoreInfoBar() {
  return (
    <section className="border-b border-neutral-800/80" aria-label="Store information">
      <div className="page-container flex flex-col gap-2 py-4 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-white"
        >
          {business.address.full}
        </a>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <a href={`tel:${business.phoneTel}`} className="transition-colors hover:text-white">
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
    <footer className="mt-auto border-t border-neutral-800">
      <div className="page-container section-spacing !py-16">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-white">
              BBS Barber &amp; Salon Supply
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
              {business.tagline}
            </p>
            <div className="mt-8 space-y-2 text-sm text-neutral-400">
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-white"
              >
                {business.address.full}
              </a>
              <a
                href={`tel:${business.phoneTel}`}
                className="block transition-colors hover:text-white"
              >
                {business.phone}
              </a>
              <p>{business.hoursSummary}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="mb-4 text-xs tracking-widest text-neutral-600 uppercase">Pages</p>
              <ul className="space-y-3">
                <li><Link href="/products" className="link-subtle">Products</Link></li>
                <li><Link href="/services" className="link-subtle">Services</Link></li>
                <li><Link href="/about" className="link-subtle">About</Link></li>
                <li><Link href="/reviews" className="link-subtle">Reviews</Link></li>
                <li><Link href="/visit" className="link-subtle">Visit</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs tracking-widest text-neutral-600 uppercase">Social</p>
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
              <p className="mt-8 mb-3 text-xs tracking-widest text-neutral-600 uppercase">Hours</p>
              <ul className="space-y-1 text-neutral-500">
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

        <p className="mt-16 text-xs text-neutral-600">
          &copy; {new Date().getFullYear()} BBS Barber &amp; Salon Supply
        </p>
      </div>
    </footer>
  );
}

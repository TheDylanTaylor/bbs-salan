import Link from "next/link";
import { business, HOURS_LABELS, HOURS_ORDER } from "@/lib/business";
import { DirectionsButton } from "@/components/layout/Header";

export function GoogleMapEmbed() {
  const { lat, lng } = business.coordinates;
  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`;

  return (
    <div className="aspect-video w-full overflow-hidden border border-neutral-800">
      <iframe
        title="BBS Barber & Salon Supply location on Google Maps"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full"
      />
    </div>
  );
}

export function ContactBlock() {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs tracking-widest text-neutral-600 uppercase">Address</p>
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-neutral-300 transition-colors hover:text-white"
        >
          {business.address.full}
        </a>
      </div>

      <div>
        <p className="text-xs tracking-widest text-neutral-600 uppercase">Phone</p>
        <a
          href={`tel:${business.phoneTel}`}
          className="mt-3 block text-white transition-opacity hover:opacity-80"
        >
          {business.phone}
        </a>
      </div>

      <div>
        <p className="text-xs tracking-widest text-neutral-600 uppercase">Hours</p>
        <ul className="mt-3 space-y-2">
          {HOURS_ORDER.map((day) => (
            <li
              key={day}
              className="flex justify-between gap-8 text-sm text-neutral-400"
            >
              <span>{HOURS_LABELS[day]}</span>
              <span>{business.hours[day]}</span>
            </li>
          ))}
        </ul>
      </div>

      <DirectionsButton />
    </div>
  );
}

export function VisitCTA() {
  return (
    <section className="mt-16 border border-neutral-800 px-8 py-12 text-center">
      <h2 className="text-xl font-light text-white">Visit the store</h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-neutral-500">
        Browse the full selection and talk to our team in person.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <DirectionsButton />
        <Link href="/products" className="btn-secondary">
          Browse products
        </Link>
      </div>
    </section>
  );
}

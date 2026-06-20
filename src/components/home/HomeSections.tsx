import Link from "next/link";
import { business } from "@/lib/business";
import { DirectionsButton } from "@/components/layout/Header";

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="divider">
      <div className="page-container section-spacing !pb-12 !pt-16 sm:!pt-20">
        <h1 className="section-title">{title}</h1>
        {subtitle && <p className="section-lead">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="section-spacing">
      <div className="page-container">
        <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase">
          Los Angeles
        </p>
        <h1 className="mt-6 max-w-2xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Barber &amp; salon supply, in person.
        </h1>
        <p className="mt-8 max-w-lg text-base leading-relaxed text-neutral-400">
          {business.tagline}
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <DirectionsButton size="large" />
          <a href={`tel:${business.phoneTel}`} className="btn-secondary">
            {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function ClipperRepairBanner() {
  return (
    <section className="divider">
      <div className="page-container section-spacing !py-16">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase">
            Services
          </p>
          <h2 className="mt-4 text-2xl font-light tracking-tight text-white sm:text-3xl">
            On-site clipper repair
          </h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Sharpening, zero-gap adjustments, and repairs — done while you shop.
            Walk in during store hours.
          </p>
          <Link href="/services" className="link-subtle mt-8 inline-block">
            Learn more →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CategoryPreview() {
  const previewCategories = [
    { name: "Clippers", slug: "Clippers & Trimmers" },
    { name: "Shears", slug: "Shears & Razors" },
    { name: "Styling", slug: "Styling Products" },
    { name: "Color", slug: "Hair Color & Chemical Products" },
  ];

  return (
    <section className="divider">
      <div className="page-container section-spacing !py-16">
        <h2 className="section-title">Categories</h2>
        <p className="section-lead">
          Visit the store to browse the full catalog.
        </p>
        <ul className="mt-12 space-y-0 divide-y divide-neutral-800 border-y border-neutral-800">
          {previewCategories.map((cat) => (
            <li key={cat.name}>
              <Link
                href={`/products?category=${encodeURIComponent(cat.slug)}`}
                className="flex items-center justify-between py-5 text-neutral-300 transition-colors hover:text-white"
              >
                <span>{cat.name}</span>
                <span className="text-neutral-600">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/products" className="link-subtle mt-8 inline-block">
          View all products →
        </Link>
      </div>
    </section>
  );
}

export function ReviewsTeaser() {
  const teaserReviews = business.reviews.slice(0, 2);

  return (
    <section className="divider">
      <div className="page-container section-spacing !py-16">
        <h2 className="section-title">Reviews</h2>
        <div className="mt-12 space-y-12">
          {teaserReviews.map((review) => (
            <blockquote key={review.id} className="max-w-2xl">
              <p className="text-lg font-light leading-relaxed text-neutral-300">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-4 text-sm text-neutral-500">
                {review.author}
              </footer>
            </blockquote>
          ))}
        </div>
        <Link href="/reviews" className="link-subtle mt-10 inline-block">
          All reviews →
        </Link>
      </div>
    </section>
  );
}

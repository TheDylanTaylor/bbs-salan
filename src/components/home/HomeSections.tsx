import Link from "next/link";
import { business } from "@/lib/business";
import { products } from "@/lib/products";
import { siteImages } from "@/lib/site-images";
import { DirectionsButton } from "@/components/layout/Header";
import { BrandImage } from "@/components/ui/BrandImage";

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="section-white border-b border-[#E5E7EB]">
      <div className="page-container py-28 sm:py-36">
        <h1 className="section-title animate-fade-in">{title}</h1>
        {subtitle && <p className="section-lead">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="section-white">
      <div className="page-container py-28 sm:py-36 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in">
            <span className="badge-gold">Los Angeles · Est. 25+ Years</span>
            <h1 className="hero-title mt-8">
              Barber &amp; salon supply, in person.
            </h1>
            <p className="mt-8 max-w-lg body-text">
              {business.tagline}
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <DirectionsButton size="large" />
              <a href={`tel:${business.phoneTel}`} className="btn-secondary">
                {business.phone}
              </a>
            </div>
          </div>
          <div className="group animate-fade-in">
            <BrandImage
              src={siteImages.hero}
              alt="BBS Barber and Salon Supply storefront"
              aspect="wide"
              priority
              className="shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClipperRepairBanner() {
  return (
    <section className="section-muted">
      <div className="page-container section-spacing">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="card">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A017]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 accent-gold"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.641l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.414c-.44-.179-.82-.37-1.13-.595-.31.225-.69.416-1.13.595a5.25 5.25 0 01-5.472-6.414.75.75 0 01.313-1.248l3.318 3.319a.765.765 0 001.302.621c.4-.285.784-.575 1.13-.595C11.18 6.475 11.64 6.688 12 6.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="mt-6 text-xs font-medium tracking-[0.25em] text-[#6B7280] uppercase">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              On-site clipper repair
            </h2>
            <p className="mt-4 body-text">
              Sharpening, zero-gap adjustments, and repairs — done while you shop.
              Walk in during store hours.
            </p>
            <Link href="/services" className="link-subtle mt-8 inline-block font-medium">
              Learn more →
            </Link>
          </div>
          <div className="group">
            <BrandImage
              src={siteImages.servicesRepair}
              alt="Professional clipper repair service"
              aspect="portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CategoryPreview() {
  return (
    <section className="section-white">
      <div className="page-container section-spacing">
        <h2 className="section-title">Featured clippers</h2>
        <p className="section-lead">
          In stock now — visit the store to see them in person.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href="/products"
              className="card group overflow-hidden !p-0"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#F8F9FA]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-6 sm:p-8">
                <div>
                  <p className="font-semibold text-[#111111]">{product.name}</p>
                  {product.priceRange && (
                    <p className="mt-1 text-sm text-[#6B7280]">{product.priceRange}</p>
                  )}
                </div>
                <span className="text-[#6B7280] transition-colors group-hover:text-[#2563EB]">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/products" className="link-subtle mt-12 inline-block font-medium">
          View all products →
        </Link>
      </div>
    </section>
  );
}

export function ReviewsTeaser() {
  const teaserReviews = business.reviews.slice(0, 2);

  return (
    <section className="section-muted">
      <div className="page-container section-spacing">
        <h2 className="section-title">Reviews</h2>
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {teaserReviews.map((review) => (
            <blockquote key={review.id} className="card">
              <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`h-4 w-4 ${i < review.rating ? "text-[#2563EB]" : "text-[#E5E7EB]"}`}
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-[#111111] sm:text-lg">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-[#6B7280]">
                {review.author}
              </footer>
            </blockquote>
          ))}
        </div>
        <Link href="/reviews" className="link-subtle mt-12 inline-block font-medium">
          All reviews →
        </Link>
      </div>
    </section>
  );
}

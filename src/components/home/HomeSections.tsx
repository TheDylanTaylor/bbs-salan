import Link from "next/link";
import { products } from "@/lib/products";
import { siteImages } from "@/lib/site-images";
import { BrandImage } from "@/components/ui/BrandImage";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import { ProductCardLink } from "@/components/products/ProductCard";

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
        <AnimateOnScroll triggerOnMount>
          <h1 className="section-title">{title}</h1>
          {subtitle && <p className="section-lead">{subtitle}</p>}
        </AnimateOnScroll>
      </div>
    </section>
  );
}

export { AnimatedHero as Hero } from "@/components/home/AnimatedHero";

export function ClipperRepairBanner() {
  return (
    <section className="section-muted">
      <div className="page-container section-spacing">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll className="card">
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
          </AnimateOnScroll>
          <AnimateOnScroll delay={120} className="group">
            <BrandImage
              src={siteImages.servicesRepair}
              alt="Professional clipper repair service"
              aspect="portrait"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

export function CategoryPreview() {
  return (
    <section className="section-white">
      <div className="page-container section-spacing">
        <SectionHeading
          title="Featured clippers"
          subtitle="In stock now — visit the store to see them in person."
        />
        <StaggerGrid
          className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
          staggerMs={100}
        >
          {products.map((product) => (
            <ProductCardLink key={product.id} product={product} />
          ))}
        </StaggerGrid>
        <AnimateOnScroll className="mt-12">
          <Link href="/products" className="link-subtle inline-block font-medium">
            View all products →
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

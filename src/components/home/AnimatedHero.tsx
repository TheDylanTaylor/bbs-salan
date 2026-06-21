"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { business } from "@/lib/business";
import { siteImages } from "@/lib/site-images";
import { DirectionsButton } from "@/components/layout/Header";
import { BrandImage } from "@/components/ui/BrandImage";

export function AnimatedHero() {
  return (
    <section className="section-white">
      <div className="page-container py-28 sm:py-36 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <AnimateOnScroll triggerOnMount delay={0}>
              <span className="badge-gold">Los Angeles · Est. 25+ Years</span>
            </AnimateOnScroll>
            <AnimateOnScroll triggerOnMount delay={80}>
              <h1 className="hero-title mt-8">
                Barber &amp; salon supply, in person.
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll triggerOnMount delay={160}>
              <p className="mt-8 max-w-lg body-text">{business.tagline}</p>
            </AnimateOnScroll>
            <AnimateOnScroll triggerOnMount delay={240}>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <DirectionsButton size="large" />
                <a href={`tel:${business.phoneTel}`} className="btn-secondary">
                  {business.phone}
                </a>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll triggerOnMount delay={120} className="group">
            <BrandImage
              src={siteImages.hero}
              alt="BBS Barber and Salon Supply storefront"
              aspect="wide"
              priority
              className="shadow-md [&_img]:object-[center_35%]"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

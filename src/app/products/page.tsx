import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/home/HomeSections";
import { ProductGallery } from "@/components/products/ProductGallery";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse barber and salon supply products at BBS — clippers, shears, styling products, color supplies, and more. Visit our Los Angeles store to see the full catalog.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        subtitle="In-store selection. Visit us to see the full catalog."
      />
      <section className="pb-28 sm:pb-36">
        <Suspense fallback={<p className="page-container py-12 text-[#6B7280]">Loading...</p>}>
          <ProductGallery />
        </Suspense>
      </section>
    </>
  );
}

import { ProductCard } from "./ProductCard";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import type { Product } from "@/lib/types";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="mt-16 text-center text-[#6B7280]">
        No products in this category.
      </p>
    );
  }

  return (
    <StaggerGrid
      className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
      staggerMs={100}
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          featured={index < 3}
        />
      ))}
    </StaggerGrid>
  );
}

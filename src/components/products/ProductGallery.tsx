"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories, products } from "@/lib/products";
import { CategoryFilter } from "./CategoryFilter";
import { ProductGrid } from "./ProductGrid";

function resolveCategory(categoryParam: string | null): string {
  return categoryParam && categories.includes(categoryParam)
    ? categoryParam
    : "All";
}

export function ProductGallery() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const initialCategory = resolveCategory(categoryParam);

  return (
    <ProductGalleryInner
      key={initialCategory}
      initialCategory={initialCategory}
    />
  );
}

function ProductGalleryInner({
  initialCategory,
}: {
  initialCategory: string;
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      <div className="border-b border-[#E5E7EB] bg-[#F8F9FA]">
        <div className="page-container py-10 sm:py-12">
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
        </div>
      </div>
      <div className="page-container bg-white py-12 sm:py-16">
        <ProductGrid key={selectedCategory} products={filtered} />
      </div>
    </>
  );
}

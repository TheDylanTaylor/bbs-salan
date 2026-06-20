import Link from "next/link";
import type { Product } from "@/lib/types";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="mt-16 text-center text-neutral-500">
        No products in this category.
      </p>
    );
  }

  return (
    <div className="mt-16 divide-y divide-neutral-800 border-t border-neutral-800">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="grid gap-6 py-10 sm:grid-cols-[140px_1fr] sm:items-start">
      <div className="aspect-square overflow-hidden bg-neutral-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover opacity-80 grayscale"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-xs tracking-widest text-neutral-600 uppercase">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-light text-white">{product.name}</h3>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-neutral-500">
          {product.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-6">
          {product.priceRange && (
            <span className="text-xs text-neutral-600">{product.priceRange}</span>
          )}
          <Link href="/visit" className="link-subtle">
            {product.cta} →
          </Link>
        </div>
      </div>
    </article>
  );
}

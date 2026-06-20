import Link from "next/link";
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
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} featured={index < 3} />
      ))}
    </div>
  );
}

function ProductCard({
  product,
  featured,
}: {
  product: Product;
  featured: boolean;
}) {
  return (
    <article className="card group overflow-hidden !p-0">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F8F9FA]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        {featured && (
          <span className="badge-gold absolute top-4 left-4">Featured</span>
        )}
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <p className="text-xs font-medium tracking-widest text-[#6B7280] uppercase">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-[#111111]">{product.name}</h3>
        <p className="mt-3 flex-1 body-text text-base sm:text-base">
          {product.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          {product.priceRange && (
            <span className="text-lg font-semibold text-[#111111]">{product.priceRange}</span>
          )}
          <Link href="/visit" className="btn-secondary text-xs">
            {product.cta}
          </Link>
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";
import type { Product } from "@/lib/types";
import { ImageZoom } from "@/components/ui/ImageZoom";

type ProductCardProps = {
  product: Product;
  featured?: boolean;
};

export function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <article className="product-card group">
      <ImageZoom>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="image-zoom-target h-full w-full object-cover"
        />
        {featured && (
          <span className="badge-gold absolute top-4 left-4 z-10">Featured</span>
        )}
      </ImageZoom>
      <div className="product-card-body">
        <p className="text-xs font-medium tracking-widest text-[#6B7280] uppercase">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-[#111111]">{product.name}</h3>
        <p className="mt-3 flex-1 body-text text-base">{product.description}</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          {product.priceRange && (
            <span className="text-lg font-semibold text-[#111111]">
              {product.priceRange}
            </span>
          )}
          <Link href="/visit" className="product-card-cta btn-secondary text-xs">
            {product.cta}
          </Link>
        </div>
      </div>
    </article>
  );
}

type ProductCardLinkProps = {
  product: Product;
};

export function ProductCardLink({ product }: ProductCardLinkProps) {
  return (
    <Link href="/products" className="product-card group">
      <ImageZoom>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="image-zoom-target h-full w-full object-cover"
        />
      </ImageZoom>
      <div className="flex items-center justify-between gap-4 p-6 sm:p-8">
        <div>
          <p className="font-semibold text-[#111111]">{product.name}</p>
          {product.priceRange && (
            <p className="mt-1 text-sm text-[#6B7280]">{product.priceRange}</p>
          )}
        </div>
        <span className="text-[#6B7280] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#2563EB]">
          →
        </span>
      </div>
    </Link>
  );
}

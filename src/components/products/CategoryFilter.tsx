"use client";

import { categories } from "@/lib/products";

export function CategoryFilter({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (category: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-3">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={`text-sm transition-colors ${
            selected === category
              ? "text-white"
              : "text-neutral-500 hover:text-neutral-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

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
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={`min-h-11 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
            selected === category
              ? "bg-[#2563EB] text-white"
              : "text-[#6B7280] hover:bg-white hover:text-[#111111]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

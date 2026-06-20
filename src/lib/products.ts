import productsData from "../../data/products.json";
import type { Product, ProductsData } from "./types";

const data = productsData as ProductsData;

export const categories = data.categories;
export const products = data.products;

export function getProductsByCategory(category: string | null): Product[] {
  if (!category || category === "All") return data.products;
  return data.products.filter((p) => p.category === category);
}

export function getProductCountByCategory(category: string): number {
  return data.products.filter((p) => p.category === category).length;
}

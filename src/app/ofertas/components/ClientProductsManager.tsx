"use client";

import { useState, useMemo, useCallback } from "react";
import { Product, PriceRange } from "../types";
import { applyFilters } from "../utils/filters";
import ClientFilters from "./ClientFilters";
import ClientLazyLoad from "./ClientLazyLoad";
import EmptyProducts from "./EmptyProducts";

interface ClientProductsManagerProps {
  products: Product[];
  categories: string[];
}

export default function ClientProductsManager({
  products,
  categories,
}: ClientProductsManagerProps) {
  const [filters, setFilters] = useState({
    selectedCategory: "",
    priceRange: { min: 0, max: 0 } as PriceRange,
  });

  const filteredProducts = useMemo(() => {
    return applyFilters(products, filters.selectedCategory, filters.priceRange);
  }, [products, filters.selectedCategory, filters.priceRange]);

  const handleFiltersChange = useCallback(
    (newFilters: { selectedCategory: string; priceRange: PriceRange }) => {
      setFilters(newFilters);
    },
    []
  );

  const handleLoadMore = useCallback(() => {
    console.log("Loading more products...");
  }, []);

  return (
    <>
      <ClientFilters
        categories={categories}
        onFiltersChange={handleFiltersChange}
      />

      {filteredProducts.length > 0 ? (
        <ClientLazyLoad
          products={filteredProducts}
          onLoadMore={handleLoadMore}
          hasMoreProducts={filteredProducts.length > 6}
        />
      ) : (
        <EmptyProducts />
      )}
    </>
  );
}

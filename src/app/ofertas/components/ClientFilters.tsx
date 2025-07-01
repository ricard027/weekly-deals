"use client";

import { useState, useCallback } from "react";
import ProductFilters from "@/components/ProductFilters";
import { PriceRange } from "../types";

interface ClientFiltersProps {
  categories: string[];
  onFiltersChange: (filters: {
    selectedCategory: string;
    priceRange: PriceRange;
  }) => void;
}

export default function ClientFilters({
  categories,
  onFiltersChange,
}: ClientFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 0 });

  const handleCategoryChange = useCallback(
    (category: string) => {
      setSelectedCategory(category);
      onFiltersChange({ selectedCategory: category, priceRange });
    },
    [onFiltersChange, priceRange]
  );

  const handlePriceRangeChange = useCallback(
    (range: PriceRange) => {
      setPriceRange(range);
      onFiltersChange({ selectedCategory, priceRange: range });
    },
    [onFiltersChange, selectedCategory]
  );

  const handleClearFilters = useCallback(() => {
    setSelectedCategory("");
    setPriceRange({ min: 0, max: 0 });
    onFiltersChange({ selectedCategory: "", priceRange: { min: 0, max: 0 } });
  }, [onFiltersChange]);

  return (
    <ProductFilters
      categories={categories}
      selectedCategory={selectedCategory}
      priceRange={priceRange}
      onCategoryChange={handleCategoryChange}
      onPriceRangeChange={handlePriceRangeChange}
      onClearFilters={handleClearFilters}
    />
  );
}

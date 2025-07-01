"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Product } from "../types";
import ProductsGrid from "./ProductsGrid";
import LoadingSpinner from "./LoadingSpinner";
import LazyLoadTrigger from "./LazyLoadTrigger";

interface ClientLazyLoadProps {
  products: Product[];
  onLoadMore: () => void;
  hasMoreProducts: boolean;
}

export default function ClientLazyLoad({
  products,
  onLoadMore,
  hasMoreProducts,
}: ClientLazyLoadProps) {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  const displayedProducts = products.slice(0, visibleProducts);

  const loadMoreProducts = useCallback(() => {
    if (visibleProducts < products.length && !isLoadingMore) {
      setIsLoadingMore(true);
      setTimeout(() => {
        setVisibleProducts((prev) => Math.min(prev + 6, products.length));
        setIsLoadingMore(false);
        onLoadMore();
      }, 500);
    }
  }, [visibleProducts, products.length, isLoadingMore, onLoadMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasMoreProducts) {
            loadMoreProducts();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loadMoreProducts, hasMoreProducts]);

  return (
    <>
      <ProductsGrid products={displayedProducts} />

      {isLoadingMore && (
        <div className="flex justify-center mb-8">
          <LoadingSpinner message="Carregando mais produtos..." size="sm" />
        </div>
      )}

      <LazyLoadTrigger
        observerRef={observerRef}
        hasMoreProducts={visibleProducts < products.length}
        isLoadingMore={isLoadingMore}
      />
    </>
  );
}

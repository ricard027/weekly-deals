import { useState, useEffect, useMemo, useCallback } from 'react';
import { Product, ProductsState, FiltersState } from '../types';
import { fetchProducts } from '../actions/products';

/**
 * Custom hook for managing products state and business logic
 * Handles fetching, filtering, and lazy loading of products
 * 
 * @returns Object containing products state and management functions
 */
export function useProducts() {
    const [state, setState] = useState<ProductsState>({
        products: [],
        loading: true,
        error: null,
        visibleProducts: 6,
        isLoadingMore: false,
    });

    const [filters, setFilters] = useState<FiltersState>({
        selectedCategory: '',
        priceRange: { min: 0, max: 0 },
    });

    // Fetch products on mount
    useEffect(() => {
        const loadProducts = async () => {
            try {
                setState(prev => ({ ...prev, loading: true, error: null }));
                const { products, source } = await fetchProducts();

                setState(prev => ({
                    ...prev,
                    products,
                    loading: false,
                    error: null,
                }));

                // Log source for debugging
                console.log(`Products loaded from ${source}`);
            } catch (error) {
                setState(prev => ({
                    ...prev,
                    loading: false,
                    error: error instanceof Error ? error.message : 'Erro desconhecido',
                }));
            }
        };

        loadProducts();
    }, []);

    // Filter products based on current filters
    const filteredProducts = useMemo(() => {
        let filtered = state.products;

        if (filters.selectedCategory) {
            filtered = filtered.filter(
                (product) => product.category === filters.selectedCategory
            );
        }

        if (filters.priceRange.min || filters.priceRange.max) {
            filtered = filtered.filter((product) => {
                const min = filters.priceRange.min || 0;
                const max = filters.priceRange.max || Number.MAX_SAFE_INTEGER;
                return product.price >= min && product.price <= max;
            });
        }

        return filtered;
    }, [state.products, filters]);

    // Get displayed products (for lazy loading)
    const displayedProducts = useMemo(() => {
        return filteredProducts.slice(0, state.visibleProducts);
    }, [filteredProducts, state.visibleProducts]);

    // Get unique categories for filter options
    const categories = useMemo(
        () => Array.from(new Set(state.products.map((product) => product.category))),
        [state.products]
    );

    // Load more products function
    const loadMoreProducts = useCallback(() => {
        if (state.visibleProducts < filteredProducts.length && !state.isLoadingMore) {
            setState(prev => ({ ...prev, isLoadingMore: true }));

            setTimeout(() => {
                setState(prev => ({
                    ...prev,
                    visibleProducts: Math.min(prev.visibleProducts + 6, filteredProducts.length),
                    isLoadingMore: false,
                }));
            }, 500);
        }
    }, [state.visibleProducts, state.isLoadingMore, filteredProducts.length]);

    // Filter management functions
    const handleCategoryChange = useCallback((category: string) => {
        setFilters(prev => ({ ...prev, selectedCategory: category }));
        setState(prev => ({ ...prev, visibleProducts: 6 }));
    }, []);

    const handlePriceRangeChange = useCallback((range: { min: number; max: number }) => {
        setFilters(prev => ({ ...prev, priceRange: range }));
        setState(prev => ({ ...prev, visibleProducts: 6 }));
    }, []);

    const handleClearFilters = useCallback(() => {
        setFilters({
            selectedCategory: '',
            priceRange: { min: 0, max: 0 },
        });
        setState(prev => ({ ...prev, visibleProducts: 6 }));
    }, []);

    return {
        products: displayedProducts,
        loading: state.loading,
        error: state.error,
        isLoadingMore: state.isLoadingMore,
        hasMoreProducts: state.visibleProducts < filteredProducts.length,
        totalFilteredProducts: filteredProducts.length,

        filters,
        categories,

        loadMoreProducts,
        handleCategoryChange,
        handlePriceRangeChange,
        handleClearFilters,
    };
} 
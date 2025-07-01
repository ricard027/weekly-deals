import { Product, PriceRange } from '../types';

/**
 * Filters products by category
 * @param products - Array of products to filter
 * @param category - Category to filter by (empty string for all)
 * @returns Filtered products array
 */
export function filterByCategory(products: Product[], category: string): Product[] {
    if (!category) return products;
    return products.filter(product => product.category === category);
}

/**
 * Filters products by price range
 * @param products - Array of products to filter
 * @param priceRange - Price range object with min and max values
 * @returns Filtered products array
 */
export function filterByPriceRange(products: Product[], priceRange: PriceRange): Product[] {
    const { min, max } = priceRange;

    if (!min && !max) return products;

    return products.filter(product => {
        const minPrice = min || 0;
        const maxPrice = max || Number.MAX_SAFE_INTEGER;
        return product.price >= minPrice && product.price <= maxPrice;
    });
}

/**
 * Applies all filters to products
 * @param products - Array of products to filter
 * @param category - Category filter
 * @param priceRange - Price range filter
 * @returns Filtered products array
 */
export function applyFilters(
    products: Product[],
    category: string,
    priceRange: PriceRange
): Product[] {
    let filtered = products;

    filtered = filterByCategory(filtered, category);
    filtered = filterByPriceRange(filtered, priceRange);

    return filtered;
}

/**
 * Gets unique categories from products array
 * @param products - Array of products
 * @returns Array of unique category names
 */
export function getUniqueCategories(products: Product[]): string[] {
    return Array.from(new Set(products.map(product => product.category)));
} 
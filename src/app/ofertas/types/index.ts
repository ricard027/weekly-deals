export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
}

export interface PriceRange {
    min: number;
    max: number;
}

export interface FiltersState {
    selectedCategory: string;
    priceRange: PriceRange;
}

export interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
    visibleProducts: number;
    isLoadingMore: boolean;
} 
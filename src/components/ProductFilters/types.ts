export interface PriceRange {
    min: number;
    max: number;
}

export interface ProductFiltersProps {
    categories: string[];
    selectedCategory: string;
    priceRange: PriceRange;
    onCategoryChange: (category: string) => void;
    onPriceRangeChange: (range: PriceRange) => void;
    onClearFilters: () => void;
}

export interface CustomInputProps {
    inputRef: React.Ref<HTMLInputElement>;
    [key: string]: any;
} 
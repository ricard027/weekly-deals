'use server';

import { Product } from '../types';

/**
 * Mock products data for fallback when API fails
 */
const MOCK_PRODUCTS: Product[] = [
    {
        id: 1,
        title: "Smartphone Galaxy S23",
        price: 2999.99,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        category: "eletrônicos",
    },
    {
        id: 2,
        title: "Notebook Dell Inspiron",
        price: 4599.99,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
        category: "eletrônicos",
    },
    {
        id: 3,
        title: "Fones de Ouvido Sem Fio",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        category: "eletrônicos",
    },
    {
        id: 4,
        title: 'Smart TV 55" 4K',
        price: 3299.99,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
        category: "eletrônicos",
    },
    {
        id: 5,
        title: "Câmera DSLR Canon",
        price: 1899.99,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
        category: "eletrônicos",
    },
    {
        id: 6,
        title: "Tablet iPad Pro",
        price: 5999.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
        category: "eletrônicos",
    },
    {
        id: 7,
        title: "Smartwatch Apple Watch",
        price: 2499.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        category: "eletrônicos",
    },
    {
        id: 8,
        title: "Console PlayStation 5",
        price: 3999.99,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
        category: "eletrônicos",
    },
    {
        id: 9,
        title: "Drone DJI Mini 3",
        price: 1899.99,
        image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=400&h=400&fit=crop",
        category: "eletrônicos",
    },
    {
        id: 10,
        title: 'Monitor Gaming 27"',
        price: 1299.99,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
        category: "eletrônicos",
    },
    {
        id: 11,
        title: "Teclado Mecânico RGB",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
        category: "eletrônicos",
    },
    {
        id: 12,
        title: "Mouse Gamer Wireless",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
        category: "eletrônicos",
    },
];

/**
 * Fetches products from the external API
 * @returns Promise<Product[]> - Array of products from the API
 * @throws Error when API request fails
 */
async function fetchProductsFromAPI(): Promise<Product[]> {
    const response = await fetch("https://fakestoreapi.com/products", {
        next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

/**
 * Fetches products with fallback to mock data
 * Attempts to fetch from external API first, falls back to mock data if API fails
 * 
 * @returns Promise<{ products: Product[], source: 'api' | 'mock' }> - Products and their source
 * 
 * @example
 * ```typescript
 * const { products, source } = await fetchProducts();
 * console.log(`Loaded ${products.length} products from ${source}`);
 * ```
 */
export async function fetchProducts(): Promise<{ products: Product[]; source: 'api' | 'mock' }> {
    try {
        const products = await fetchProductsFromAPI();
        return { products, source: 'api' as const };
    } catch (error) {
        console.warn('Failed to fetch from API, using mock data:', error);
        return { products: MOCK_PRODUCTS, source: 'mock' as const };
    }
} 
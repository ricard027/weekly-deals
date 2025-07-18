export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
}

export interface ProductCardProps {
    product: Product;
} 
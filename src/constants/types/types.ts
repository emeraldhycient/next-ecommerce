export interface Product {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    price: number;
    discountPercentage?: number;
    images: string[]
}

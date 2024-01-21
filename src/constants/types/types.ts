export interface Product {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    price: number;
    discountPercentage?: number;
    images: string[]
}


export interface IPost {
    id: number;
    imageUrl: string;
    tags: string[];
    title: string;
    description: string;
    date: string;
    commentCount: number;
}

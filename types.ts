export type TListing = {
    _id: string;
    title: string;
    category: string;
    imageUrl: string;
    price: number;
    description: string;
    creatorId: string;
    createdAt: string;
};

export enum Categories {
    Electronics = 'electronics',
    Furniture = 'furniture',
    Clothing = 'clothing',
    Books = 'books',
}

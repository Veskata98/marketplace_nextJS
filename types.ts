export type TListing = {
    _id: string;
    title: string;
    category: string;
    image: string;
    price: number;
    description: string;
};

export enum Categories {
    Electronics = 'electronics',
    Furniture = 'furniture',
    Clothing = 'clothing',
    Books = 'books',
}

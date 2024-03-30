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
    Beauty = 'beauty',
    Sports = 'sports',
}

export const CATEGORIES = {
    Electronics: {
        computers: 'Computers',
        phones: 'Phones and accessories',
        'audio-and-video': 'Audio and Video',
        gaming: 'Gaming',
    },
    Vehicles: {
        cars: 'Cars',
        motorcycles: 'Motorcycles',
        trucks: 'Trucks',
        boats: 'Boats',
        'other-vehicles': 'Other vehicles',
    },
    Clothing_and_Accessories: {
        'clothing-men': "Men's clothing",
        'clothing-women': "Women's clothing",
        'clothing-kids': "Kid's clothing",
        shoes: 'Shoes',
        accessories: 'Accessories',
    },
    Home_and_Garden: {
        furniture: 'Furniture',
        decor: 'Decor',
        appliances: 'Appliances',
        tools: 'Tools',
    },
    Beauty_and_Personal_Care: {
        makeup: 'Makeup',
        skincare: 'Skincare',
        haircare: 'Haircare',
        grooming: 'Grooming',
    },
    Sports_and_Outdoors: {
        'exercise-equipment': 'Exercise equipment',
        'sports-gear': 'Sports gear',
        'camping-gear': 'Camping gear',
        'hiking-gear': 'Hiking gear',
    },
    Toys_and_Games: {
        'board-games': 'Board games',
        'video-games': 'Video games',
        'toys-children': 'Toys for children',
    },
    Books_and_Media: {
        books: 'Books',
        music: 'Music',
        movies: 'Movies',
    },
};

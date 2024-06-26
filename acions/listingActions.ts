'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { z } from 'zod';

import { getUserServerComponent } from '@/lib/user';
import { dbConnect } from '@/lib/db';
import Listing from '@/models/Listing';

import { TListing } from '@/types';

const listingSchema = z.object({
    title: z.string(),
    price: z.number().gt(0),
    description: z.string(),
    category: z.string(),
});

const getLatestListings = async () => {
    await dbConnect();

    const listings = (await Listing.find().lean()).map((x: any) => ({ ...x, _id: x._id.toString() }));
    return listings as TListing[];
};

const createListing = async (data: FormData, imageId: string) => {
    const user = await getUserServerComponent();

    if (!user) {
        return redirect('/api/auth/login?post_login_redirect_url=%2F');
    }

    try {
        const { title, price, description, category } = Object.fromEntries(data);
        const result = listingSchema.parse({ title, price: Number(price), description, category });

        const imageUrl = imageId !== '' ? `https://ucarecdn.com/${imageId}/` : '';

        await dbConnect();
        await Listing.create({ ...result, creatorId: user.id, imageUrl });

        revalidatePath('/');

        return {
            message: 'success',
        };
    } catch (error) {
        console.log(error);
    }
};

const getMyListings = async (userId: string) => {
    const user = await getUserServerComponent();

    if (!user) {
        return redirect('/api/auth/login?post_login_redirect_url=%2F');
    }

    if (user.id !== userId) {
        return redirect('/');
    }

    try {
        await dbConnect();
        const listings = (await Listing.find({ creatorId: userId }).lean()).map((x: any) => ({
            ...x,
            _id: x._id.toString(),
        }));

        return {
            message: 'success',
            data: listings as TListing[],
        };
    } catch (error) {
        console.log(error);
        return {
            message: 'error',
            data: [],
        };
    }
};

export { createListing, getLatestListings, getMyListings };

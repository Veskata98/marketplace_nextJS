'use server';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import { dbConnect } from '@/lib/db';
import Listing from '@/models/Listing';

import { TListing } from '@/types';

const listingSchema = z.object({
    title: z.string(),
    price: z.number().gt(0),
    description: z.string(),
    category: z.string(),
    image: z.instanceof(File),
});

const getLatestListings = async () => {
    await dbConnect();

    const listings = await Listing.find().lean();
    return listings as TListing[];
};

const createListing = async (data: FormData) => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect('/api/auth/login?post_login_redirect_url=%2F');
    }

    try {
        const { image, title, price, description, category } = Object.fromEntries(data);
        const result = listingSchema.parse({ image, title, price: Number(price), description, category });

        await dbConnect();
        await Listing.create({ ...result, creatorId: user.id });

        return {
            message: 'success',
        };
    } catch (error) {
        console.log(error);
    }
};

export { createListing, getLatestListings };

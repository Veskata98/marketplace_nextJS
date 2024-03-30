import Listing from '@/models/Listing';

import { ListingCard } from '@/components/Listings/ListingCard';

import { CATEGORIES, TListing } from '@/types';

import { capitalizeString } from '@/lib/utils';
import { dbConnect } from '@/lib/db';
import { redirect } from 'next/navigation';

export default async function CategoryPage({ params }: { params: { category: string } }) {
    if (!Object.values(CATEGORIES).some((x) => Object.keys(x).includes(params.category))) {
        return redirect('/');
    }

    await dbConnect();
    const listings = (await Listing.find({ category: params.category }).lean()).map((x: any) => ({
        ...x,
        _id: x._id.toString(),
    })) as TListing[];

    return (
        <div className="p-4">
            <h3 className="text-xl font-semibold p-2 pt-0">{capitalizeString(params.category.replaceAll('-', ' '))}</h3>
            <div className="p-4 flex flex-wrap gap-4">
                {listings.length === 0 ? (
                    <p className="w-full flex justify-center items-center font-semibold text-lg">No listings found</p>
                ) : (
                    listings.map((x) => <ListingCard key={x._id} listing={x} />)
                )}
            </div>
        </div>
    );
}

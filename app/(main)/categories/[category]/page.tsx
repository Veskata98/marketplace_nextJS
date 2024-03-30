import Listing from '@/models/Listing';

import { ListingCard } from '@/components/Listings/ListingCard';

import { TListing } from '@/types';

import { capitalizeString } from '@/lib/utils';
import { dbConnect } from '@/lib/db';

export default async function CategoryPage({ params }: { params: { category: string } }) {
    await dbConnect();
    const listings = (await Listing.find({ category: params.category }).lean()) as TListing[];

    return (
        <div className="p-4">
            <h3 className="text-xl font-semibold p-2 pt-0">{capitalizeString(params.category)}</h3>
            <div className="p-4 flex flex-wrap gap-4">
                {listings.map((x) => (
                    <ListingCard key={x._id} listing={x} />
                ))}
            </div>
        </div>
    );
}

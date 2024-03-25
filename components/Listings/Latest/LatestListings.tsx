import { getLatestListings } from '@/acions/listingActions';

import { ListingCard } from '@/components/Listings/ListingCard';
import { TListing } from '@/types';

export const LatestListings = async () => {
    const listings: TListing[] = await getLatestListings();

    return (
        <div className="p-4 flex flex-wrap gap-4">
            {listings.map((x) => (
                <ListingCard key={x._id} listing={x} />
            ))}
        </div>
    );
};

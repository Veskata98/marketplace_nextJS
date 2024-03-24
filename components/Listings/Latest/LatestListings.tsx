import { getLatestListings } from '@/acions/listingActions';

import { ListingCard } from '@/components/Listings/ListingCard';
import { TListing } from '@/types';

export const LatestListings = async () => {
    const listings: TListing[] = await getLatestListings();

    return (
        <div>
            {listings.map((x) => (
                <ListingCard key={x._id} />
            ))}
        </div>
    );
};

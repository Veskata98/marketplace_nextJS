import { TListing } from '@/types';

import { dbConnect } from '@/lib/db';
import Listing from '@/models/Listing';

import { OpenListingInfoSection } from '@/components/Listings/OpenListing/OpenListingInfoSection';
import { OpenListingContactSection } from '@/components/Listings/OpenListing/OpenListingContactSection';

export default async function ListingIdPage({ params }: { params: { listingId: string } }) {
    await dbConnect();
    const listing: TListing = (await Listing.findById(params.listingId).lean()) as TListing;

    return (
        <div className="flex justify-center my-10 relative gap-2">
            <OpenListingInfoSection listing={listing} />
            <OpenListingContactSection listing={listing} />
        </div>
    );
}

import { getMyListings } from '@/acions/listingActions';
import { ListingCard } from '../Listings/ListingCard';

type MyListingSectionProps = {
    userId: string;
};

const MyListingSection = async ({ userId }: MyListingSectionProps) => {
    const { data } = await getMyListings(userId);

    return (
        <div className="justify-center p-8 w-full">
            <h2 className="pb-4 text-2xl text-center font-semibold">My Listings</h2>
            {data?.length ? (
                <div className="flex flex-wrap gap-2">
                    {data.map((x) => (
                        <ListingCard key={x._id} listing={x} />
                    ))}
                </div>
            ) : (
                <h2 className="text-2xl font-medium flex items-center">You have no listings yet</h2>
            )}
        </div>
    );
};

export default MyListingSection;

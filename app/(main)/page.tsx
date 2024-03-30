import { LatestListings } from '@/components/Listings/Latest/LatestListings';

export default async function Home() {
    return (
        <div className="p-4">
            <h3 className="text-xl font-semibold p-2 pt-0">Latest listings</h3>
            <LatestListings />
        </div>
    );
}

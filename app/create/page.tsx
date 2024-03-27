import { CreateListing } from '@/components/Listings/Create/CreateListing';

export default async function CreateListingPage() {
    return (
        <section className="w-full h-full flex items-center flex-wrap">
            <CreateListing />
        </section>
    );
}

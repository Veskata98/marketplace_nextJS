import { CreateListing } from '@/components/Listings/Create/CreateListing';

export default async function CreateListingPage() {
    return (
        <section className="w-full flex justify-center items-center my-6">
            <CreateListing />
        </section>
    );
}

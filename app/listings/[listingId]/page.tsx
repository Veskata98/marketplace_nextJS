import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import { TListing } from '@/types';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowLeft, Edit, Trash } from 'lucide-react';
import brokenImg from '@/assets/images/broken-img.png';

import { dbConnect } from '@/lib/db';
import Listing from '@/models/Listing';

import { capitalizeString } from '@/lib/utils';

export default async function page({ params }: { params: { listingId: string } }) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    await dbConnect();
    const listing: TListing = (await Listing.findById(params.listingId).lean()) as TListing;

    return (
        <div className="w-2/5 mx-auto pt-10 p-4 rounded-lg overflow-hidden relative">
            <Link href={`/${listing.category}`} className="absolute top-2 left-0 hover:underline flex gap-x-2">
                <ArrowLeft />
                Return to {capitalizeString(listing.category)}
            </Link>
            <div className="w-full bg-zinc-700">
                <Image
                    src={listing.imageUrl || brokenImg}
                    alt={listing.title}
                    className="object-cover object-center rounded mx-auto"
                    width={600}
                    height={300}
                />
            </div>
            <div className="w-full m-auto mt-2">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">{listing.title}</h1>
                    {user && user.id === listing.creatorId && (
                        <div className="flex gap-x-4 items-center justify-center">
                            <button name="Edit">
                                <Edit className="w-5 h-5" />
                            </button>
                            <button>
                                <Trash className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
                <div className="text-zinc-300 text-sm mb-4 italic">
                    {listing.category && typeof listing.category === 'string' && (
                        <Link href={`/${listing.category}`} className="hover:text-orange-400 transition-colors">
                            {listing.category}
                        </Link>
                    )}
                </div>

                <p className="shadow-inner bg-zinc-500 min-h-[150px] rounded px-4 py-2 mb-4">{listing.description}</p>
                {/* <p className="text-gray-600 text-sm text-right">{formatTimeToHourAndDateOnly(listing.createdAt!)}</p> */}
            </div>
        </div>
    );
}

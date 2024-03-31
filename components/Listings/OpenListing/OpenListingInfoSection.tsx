import { ReturnButton } from '@/components/ReturnButton';
import { formatTimeToHourAndDateOnly } from '@/lib/moment';
import { capitalizeString } from '@/lib/utils';
import { Edit, Trash } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import brokenImg from '@/assets/images/broken-img.png';
import { TListing } from '@/types';
import { getUserServerComponent } from '@/lib/user';

interface InfoSectionProps {
    listing: TListing;
}

export const OpenListingInfoSection = async ({ listing }: InfoSectionProps) => {
    const user = await getUserServerComponent();

    return (
        <div className="rounded-lg relative w-1/2">
            <ReturnButton className="absolute -top-8 left-0 hover:underline flex gap-x-2" />
            <div className="w-full bg-zinc-700/20">
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
                <div className="text-zinc-300 text-sm mb-4 flex justify-between mt-1">
                    <Link href={`/categories/${listing.category}`} className="hover:text-orange-400 transition-colors">
                        {capitalizeString(listing.category)}
                    </Link>
                    <p className="text-zinc-400 text-sm text-right">{formatTimeToHourAndDateOnly(listing.createdAt)}</p>
                </div>

                <p className="shadow-inner bg-zinc-500 min-h-[150px] rounded px-4 py-2">{listing.description}</p>
            </div>
        </div>
    );
};

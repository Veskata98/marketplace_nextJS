'use client';

import Link from 'next/link';
import Image from 'next/image';

import { TListing } from '@/types';
import { useState } from 'react';

import brokenImg from '@/assets/images/broken-img.png';

type ListingCardProps = {
    listing: TListing;
};

export const ListingCard = ({ listing }: ListingCardProps) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <Link href={`/listings/${listing._id}`}>
            <div className="rounded shadow-md overflow-hidden w-72 cursor-pointer">
                <div className="relative h-48">
                    {imageError ? (
                        <Image src={brokenImg} alt={listing.title} className="w-full h-full object-cover" />
                    ) : (
                        <Image
                            src={listing.imageUrl}
                            alt={listing.title}
                            className="w-full h-full object-contain object-center"
                            width={288}
                            height={192}
                            onError={handleImageError}
                        />
                    )}
                </div>
                <div className="p-4 bg-zinc-600 shadow-md">
                    <h3 className="text-xl font-semibold text-zinc-200 mb-2 truncate">{listing.title}</h3>
                    <p className="text-zinc-300 text-lg mb-2">${listing.price.toFixed(2)}</p>
                    {listing.category && <p className="text-zinc-400 text-sm mb-2 capitalize">{listing.category}</p>}
                </div>
            </div>
        </Link>
    );
};

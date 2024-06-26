'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { createListing } from '@/acions/listingActions';

import { CATEGORIES, Categories } from '@/types';

import { SubmitButton } from '@/components/SubmitButton';
import { ImageUpload } from '@/components/ImageUpload';

export const CreateListing = () => {
    const [imageId, setImageId] = useState<string>('');
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();

    const handleImageUpload = (imageId: string) => {
        setImageId(imageId);
    };

    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-2xl font-bold my-2 text-center">Create a New Listing</h1>
            <ImageUpload handleImageUpload={handleImageUpload} />
            <form
                ref={formRef}
                className="w-full max-w-lg p-8 pt-0 rounded-lg"
                action={async (formData: FormData) => {
                    await createListing(formData, imageId);
                    formRef?.current?.reset();
                    router.push('/');
                }}
            >
                <div className="mb-8 flex flex-col gap-4 text-white">
                    <div>
                        <label className="block font-bold mb-1" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="text-zinc-700 shadow appearance-none border rounded w-full p-2 leading-tight focus:outline-none focus:shadow-outline"
                            name="title"
                        />
                    </div>
                    <div>
                        <label className="block font-bold mb-1" htmlFor="category">
                            Category
                        </label>
                        <select
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline
                            text-zinc-700"
                            name="category"
                        >
                            {/* {Object.entries(Categories).map((category) => (
                                <option className="font-sans" key={category[0]} value={category[1]}>
                                    {category[0]}
                                </option>
                            ))} */}
                            {Object.entries(CATEGORIES).map(([category, subcategories]) => (
                                <optgroup label={category.replaceAll('_', ' ')} key={category}>
                                    {Object.entries(subcategories).map(([label, value]) => (
                                        <option value={label} key={label} className="font-sans">
                                            {value}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block font-bold mb-1" htmlFor="price">
                            Price
                        </label>
                        <input
                            className="text-zinc-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="price"
                        />
                    </div>
                    <div>
                        <label className="block font-bold mb-1" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="text-zinc-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            name="description"
                        />
                    </div>
                </div>
                <SubmitButton
                    className="cursor-pointer text-zinc-800 font-semibold 
                    disabled:text-zinc-600 disabled:cursor-default 
                    disabled:bg-slate-300 w-full bg-amber-300 hover:bg-amber-300/90 p-2 rounded"
                >
                    Create listing
                </SubmitButton>
            </form>
        </div>
    );
};

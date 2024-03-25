'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import { createListing } from '@/acions/listingActions';

import { SubmitButton } from '@/components/SubmitButton';
import { Categories } from '@/types';
import { useRouter } from 'next/navigation';

export const CreateListing = () => {
    const [imagePreview, setImagePreview] = useState<File | null>();
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();

    return (
        <form
            ref={formRef}
            className="w-full max-w-lg  p-8 rounded-lg"
            action={async (formData: FormData) => {
                await createListing(formData);
                formRef?.current?.reset();
                router.push('/');
            }}
        >
            <h1 className="text-2xl font-bold mb-4 text-center">Create a New Listing</h1>
            <div className="mb-8 flex flex-col gap-4 text-white">
                <div>
                    <label className="block font-bold mb-1" htmlFor="image">
                        Image
                    </label>
                    {imagePreview && (
                        <div className="flex justify-center items-center mb-4 py-6 h-72">
                            <Image
                                src={URL.createObjectURL(imagePreview)}
                                alt="Preview"
                                width={256}
                                height={256}
                                className="rounded"
                            />
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        name="image"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        onChange={(e) => setImagePreview(e.target.files?.[0])}
                    />
                </div>
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
                        {Object.entries(Categories).map((category) => (
                            <option key={category[0]} value={category[1]}>
                                {category[0]}
                            </option>
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
    );
};

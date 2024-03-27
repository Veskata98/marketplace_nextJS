import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import * as LR from '@uploadcare/blocks';

interface ImageUploadProps {
    handleImageUpload: (imageId: string) => void;
}

LR.registerBlocks(LR);

export const ImageUpload = ({ handleImageUpload }: ImageUploadProps) => {
    const [imagePreview, setImagePreview] = useState<File | null>();
    const ctxProviderRef = useRef<typeof LR.UploadCtxProvider.prototype & UploadCtxProvider>(null);

    useEffect(() => {
        const currentRef = ctxProviderRef.current;
        const handleUpload = (event: CustomEvent<LR.OutputFileEntry>) => {
            setImagePreview(event.detail.file as File);
        };

        currentRef.addEventListener('file-upload-success', handleUpload);

        return () => {
            currentRef.removeEventListener('file-upload-success', handleUpload);
        };
    }, []);

    useEffect(() => {
        const currentRef = ctxProviderRef.current;
        const handleUpload = (event: CustomEvent<LR.OutputCollectionState>) => {
            handleImageUpload(event.detail.allEntries[0].uuid || '');
        };

        currentRef.addEventListener('done-click', handleUpload);

        return () => {
            currentRef.removeEventListener('done-click', handleUpload);
        };
    }, [handleImageUpload]);

    return (
        <>
            {imagePreview && (
                <div className="flex justify-center items-center py-4 h-72">
                    <Image
                        src={URL.createObjectURL(imagePreview)}
                        alt="Preview"
                        width={256}
                        height={256}
                        className="rounded"
                    />
                </div>
            )}
            <lr-config
                ctx-name="my-uploader"
                pubkey="b592af6caffa872aa07b"
                maxLocalFileSizeBytes={10000000}
                multiple={false}
                imgOnly={true}
                sourceList="local, url"
            ></lr-config>
            <lr-file-uploader-regular
                css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css"
                ctx-name="my-uploader"
                class="my-config"
            ></lr-file-uploader-regular>

            <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />
        </>
    );
};

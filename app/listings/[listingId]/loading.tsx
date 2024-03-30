import { Loader2 } from 'lucide-react';

export default function loading() {
    return (
        <div className="w-full h-full flex justify-center items-center flex-col gap-2">
            <Loader2 className="animate-spin" />
            <p className="text-sm text-zinc-300">Loading...</p>
        </div>
    );
}

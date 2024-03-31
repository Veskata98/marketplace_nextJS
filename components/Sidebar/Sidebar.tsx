'use client';

import Link from 'next/link';

import { CATEGORIES } from '@/types';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const Sidebar = () => {
    const url = usePathname();
    const activeCategory = url.split('/').pop();

    return (
        <ul className="p-2 py-4 w-80">
            {Object.entries(CATEGORIES).map(([category, subcategories]) => (
                <li key={category}>
                    <p className="text-lg font-semibold bg-zinc-600 p-2">{category.replaceAll('_', ' ')}</p>
                    <ul>
                        {Object.entries(subcategories).map(([key, value]) => (
                            <Link
                                key={key}
                                href={`/categories/${key}`}
                                className={cn(
                                    'hover:text-zinc-400',
                                    activeCategory === key ? 'pointer-events-none bg-amber-200' : ''
                                )}
                            >
                                <li className="p-2">
                                    {value}
                                    {activeCategory === key && (
                                        <span className="pl-3 text-lg font-bold text-[#fcd34d]">{'->'}</span>
                                    )}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
};

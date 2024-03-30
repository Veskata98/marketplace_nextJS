import Link from 'next/link';

import { CATEGORIES } from '@/types';

export const Sidebar = () => {
    return (
        <ul className="p-2 py-4">
            {Object.entries(CATEGORIES).map(([category, subcategories]) => (
                <li key={category}>
                    <p className="text-lg font-semibold bg-zinc-600 p-2">{category.replaceAll('_', ' ')}</p>
                    <ul>
                        {Object.entries(subcategories).map(([key, value]) => (
                            <li key={key} className="p-2">
                                <Link href={`/categories/${key}`}>{value}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
};

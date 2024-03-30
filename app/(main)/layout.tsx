import { Sidebar } from '@/components/Sidebar/Sidebar';

export default async function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="p-4">{children}</div>
        </div>
    );
}

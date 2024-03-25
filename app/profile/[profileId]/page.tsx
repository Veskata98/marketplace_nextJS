import MyListingSection from '@/components/Profile/MyListingSection';
import ProfileMainSection from '@/components/Profile/ProfileMainSection';
import { profile } from 'console';

export default async function Profile({ params }: { params: { profileId: string } }) {
    return (
        <div className="w-4/6 m-auto flex ">
            <ProfileMainSection />
            <MyListingSection userId={params.profileId} />
        </div>
    );
}

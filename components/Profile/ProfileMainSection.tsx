import { useState, FormEvent } from 'react';

import defaultAvatar from '@/assets/images/defaultAvatar.png';
import Image from 'next/image';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const ProfileMainSection = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect('/api/auth/login?post_login_redirect_url=%2F');
    }

    // const [imageFile, setImageFile] = useState<File | null>();
    // const [preview, setPreview] = useState(() => user?.photoURL || '');
    // const [message, setMessage] = useState('');
    // const [isMessageVisible, setIsMessageVisible] = useState(false);

    // const changeAvatarSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     if (imageFile) {
    //         await changeAvatar(imageFile);

    //         setMessage('Profile picture successfully changed!');

    //         setIsMessageVisible(true);

    //         setTimeout(() => {
    //             setIsMessageVisible(false);
    //             setMessage('');
    //             setImageFile(null);
    //         }, 2000);
    //     }
    // };

    return (
        <>
            {/* {isMessageVisible && (
                <p className="bg-green-400 text-white absolute rounded text-xl right-10 top-10 shadow px-4 py-2">
                    {message}
                </p>
            )} */}
            <div className="flex flex-col align-middle my-8 px-8 relative items-center border-r border-orange-500 w-2/5">
                <h2 className="text-2xl  mb-4">{user?.given_name}</h2>
                <Image
                    className="rounded-full object-cover object-center mb-4"
                    src={user?.picture || defaultAvatar}
                    width={192}
                    height={192}
                    alt="user_avatar"
                />
                <form className="mb-10">
                    <input className="mb-2 w-full" type="file" accept=".jpeg,.jpg,.png,.gif" />
                    <button className="bg-orange-500 w-full text-white py-2 px-4 rounded transition duration-200 ease-in-out hover:bg-orange-600">
                        Save
                    </button>
                </form>
                <form className="mb-10 flex flex-col w-full">
                    <input
                        className="mb-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-orange-500"
                        placeholder="Old Password"
                        type="password"
                        autoComplete="new-password"
                        name="oldPassword"
                    />
                    <input
                        className="mb-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-orange-500"
                        placeholder="New Password"
                        type="password"
                        name="newPassword"
                    />
                    <input
                        className="mb-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-orange-500"
                        placeholder="Repeat New Password"
                        type="password"
                        name="repass"
                    />
                    <button className="bg-orange-500 text-white py-2 px-4 rounded transition duration-200 ease-in-out hover:bg-orange-600">
                        Change password
                    </button>
                </form>
                <button className="bg-red-500 w-full text-white py-2 px-4 rounded transition duration-200 ease-out hover:bg-red-600">
                    Delete account
                </button>
            </div>
        </>
    );
};

export default ProfileMainSection;

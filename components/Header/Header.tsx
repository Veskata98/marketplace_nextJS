import Image from 'next/image';
import Link from 'next/link';

import { LoginLink, LogoutLink, RegisterLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import defaultAvatar from '@/assets/images/defaultAvatar.png';

export const Header = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="bg-amber-300 w-full h-16 flex items-center justify-between px-8">
            <Link href="/" className="text-2xl font-semibold text-zinc-800">
                Let&apos;Sell
            </Link>
            <ul className="flex items-center justify-end space-x-4 font-semibold">
                {!user ? (
                    <>
                        <li>
                            <LoginLink className="text-zinc-800 hover:text-zinc-600" postLoginRedirectURL="/">
                                Sign In
                            </LoginLink>
                        </li>
                        <li>
                            <RegisterLink
                                postLoginRedirectURL="/"
                                className="text-white bg-amber-500 px-4 py-2 rounded-md hover:bg-amber-500/50 transition-colors duration-200 ease-in-out "
                            >
                                Sign Up
                            </RegisterLink>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link className="text-zinc-800 hover:text-zinc-600" href="/create">
                                Add Listing
                            </Link>
                        </li>
                        <li>
                            <Link className="text-zinc-800 hover:text-zinc-600 flex items-center" href="/messages">
                                {/* {notifications !== 0 && (
                                    <span className="bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full mr-1">
                                        {notifications}
                                    </span>
                                )} */}
                                Inbox
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/profile/${user?.id}`}
                                className="flex gap-2 items-center justify-center
                                text-zinc-800 hover:text-zinc-600"
                                title="My Profile"
                            >
                                <Image
                                    src={user.picture || defaultAvatar}
                                    alt={user.given_name || ''}
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                />
                                <span>{user.given_name}</span>
                            </Link>
                        </li>
                        <li>
                            <LogoutLink className="text-zinc-800 hover:text-zinc-600" postLogoutRedirectURL="/">
                                Log Out
                            </LogoutLink>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

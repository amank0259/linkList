import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Header() {
    const session = await getServerSession(authOptions);
    console.log(session)
    return (
        <>
            <header className="bg-white border-b py-4">
                <div className='flex justify-between max-w-4xl mx-auto px-6'>
                    <div className="flex gap-6">
                        <Link href={'/'}>LinkStash</Link>
                        <nav className="flex items-center gap-4 text-zinc-500 text-sm">
                            <Link href={'/about'}>About</Link>
                            <Link href={'/pricing'}>Pricing</Link>
                            <Link href={'/contact'}>Contact</Link>
                        </nav>
                    </div>
                    <div className="flex gap-4 text-slate-500 text-sm">
                        <Link href={'/login'}>Sign In</Link>
                        <Link href={'/login'}>Create Account</Link>
                    </div>
                </div>
            </header>
        </>
    )
};

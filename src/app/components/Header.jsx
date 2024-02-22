import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <header className="bg-white border-b py-4">
                <div className='flex justify-between max-w-4xl mx-auto'>
                    <div className="flex gap-6 px-8">
                        <Link href={'/'}>LinkStash</Link>
                        <nav className="flex items-center gap-4 text-zinc-500 text-sm">
                            <Link href={'/about'}>About</Link>
                            <Link href={'/pricing'}>Pricing</Link>
                            <Link href={'/contact'}>Contact</Link>
                        </nav>
                    </div>
                    <div className="flex gap-4 text-slate-500 text-sm">
                        <Link href={'/login'}>Sign In</Link>
                        <Link href={'/register'}>Create Account</Link>
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header;
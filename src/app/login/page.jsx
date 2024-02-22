'use client'
import React from 'react/';
import LoginWithGoogle from '../components/buttons/LoginWithGoogle';

export default function LoginPage() {
    return (
        <>
            <div className='p-4 max-w-xs mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-6'>Sign In</h1>
                <p className='text-center mb-6 text-gray-500'>Log in to your account using any of the methods provided below.
                </p>
                <LoginWithGoogle />
            </div>
        </>
    )
};
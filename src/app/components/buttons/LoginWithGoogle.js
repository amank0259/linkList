import React from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn } from "next-auth/react";

const LoginWithGoogle = () => {
    return (
        <>
            <button
                onClick={() => signIn('google')}
                className='bg-blue-500 text-white text-center w-full py-4 flex items-center gap-3 justify-center'>
                <FontAwesomeIcon icon={faGoogle} className='w-6' />
                <span>Sign In using Google</span>
            </button >
        </>
    )
}

export default LoginWithGoogle
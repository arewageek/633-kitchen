
import React from 'react'
import Cart from '../cart'
import { UserButton } from '@clerk/nextjs'
import { SignedIn } from '@clerk/clerk-react'

const Header = () => {
    return (
        <div className='w-full flex items-center justify-between bg-white p-4 shadow-lg px-10 fixed top-0 left-0 z-40'>
            <div className='font-extrabold text-2xl text-gradient'>
                633 Kitchen
            </div>

            <div className='flex items-center gap-2'>
                <UserButton />
                <Cart />
            </div>
        </div>
    )
}

export default Header
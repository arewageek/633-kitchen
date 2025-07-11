
import React from 'react'
import Cart from '../cart'

const Header = () => {
    return (
        <div className='w-full flex items-center justify-between bg-white p-4 shadow-lg px-10'>
            <div className='font-extrabold text-2xl text-gradient'>
                633 Kitchen
            </div>

            <Cart />
        </div>
    )
}

export default Header
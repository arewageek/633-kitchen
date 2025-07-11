"use client"

import React from 'react'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import Cart from '../cart'
import useCart from '@/store/cart'

const Header = () => {
    const { open } = useCart()

    return (
        <div className='w-full flex items-center justify-between bg-white p-4 shadow-lg px-10'>
            <div className='font-bold text-xl'>
                633 Kitchen
            </div>

            <Cart />
        </div>
    )
}

export default Header
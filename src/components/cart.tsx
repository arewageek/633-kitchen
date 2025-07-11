"use client"

import useCart from '@/store/cart'
import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'

const Cart = () => {
    const { count, items } = useCart()

    return (
        <Sheet>
            <SheetTrigger className='relative border shadow p-3 rounded-lg cursor-pointer hover:shadow-md transiion duration-300'>
                <ShoppingCart size={25} />
                <div className='absolute bg-orange-500 text-white w-[18pt] h-[18pt] rounded-full flex items-center justify-center text-[10pt] font-bold -top-2.5 -right-2.5'>
                    {count}
                </div>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                    <SheetTitle className='text-lg'>Cart</SheetTitle>
                    <div className='h-[100vh] flex items-center justify-center'>
                        <div className='flex items-center justify-center gap-3 flex-col'>
                            <ShoppingCart size={30} />
                            <span className='text-sm font-medium'>
                                Nothing in cart
                            </span>
                        </div>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default Cart
"use client"

import useCart from '@/store/cart'
import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'

const Cart = () => {
    const { cartCount, cartItems, reduceItem, addToCart, totalCost } = useCart()

    const items = Object.values(cartItems)

    return (
        <Sheet>
            <SheetTrigger className='relative border shadow p-3 rounded-lg cursor-pointer hover:shadow-md transiion duration-300'>
                <ShoppingCart size={25} />
                <div className='absolute bg-orange-500 text-white w-[18pt] h-[18pt] rounded-full flex items-center justify-center text-[10pt] font-bold -top-2.5 -right-2.5'>
                    {cartCount}
                </div>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] bg-gray-100">
                <SheetHeader>
                    <SheetTitle className='text-lg'>Cart</SheetTitle>
                </SheetHeader>
                <div className={`h-[100vh] flex items-center ${cartCount > 0 ? "flex-col justify-between" : "justify-center"}`}>
                    {
                        cartCount > 0 ? (
                            <>
                                <div className='w-full p-3'>
                                    {items.map(item => (
                                        <div key={item.id} className='w-full p-4 px-6 shadow-md bg-gradient from-white/50 to-white/10 rounded-xl my-2 flex items-center justify-between'>
                                            <div>
                                                <h2 className='text-md font-bold'>
                                                    {item.name}
                                                </h2>
                                                <span className='text-gradient font-bold text-xl'>
                                                    ₦{item.cost.toLocaleString()}
                                                </span>
                                            </div>
                                            <div className='flex items-center gap-x-2'>
                                                <Button onClick={() => reduceItem(item.id)} disabled={item.quantity == 0} variant="outline" className='rounded-full text-xl h-8 w-8 shadow-inner'>
                                                    -
                                                </Button>

                                                <span className='font-bold text-md'>
                                                    {item.quantity}
                                                </span>

                                                <Button onClick={() => addToCart(item)} variant="outline" className='rounded-full text-xl h-8 w-8 shadow-inner'>
                                                    +
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className='p-2 w-full'>

                                    <div className='flex items-center justify-between p-4'>
                                        <h4 className='text-lg font-semibold'>Total:</h4>
                                        <p className='text-2xl font-extrabold text-gradient'>
                                            ₦{totalCost.toLocaleString()}
                                        </p>
                                    </div>
                                    <Button className='btn-gradient w-full transition-all'>
                                        Procced to Payment
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div className='flex items-center justify-center gap-3 flex-col'>
                                <ShoppingCart size={30} />
                                <span className='text-sm font-medium'>
                                    Nothing in cart
                                </span>
                            </div>)
                    }
                </div>
            </SheetContent>
        </Sheet >
    )
}

export default Cart
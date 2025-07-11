"use client"

import React from 'react'
import { Button } from './ui/button'
import useCart from '@/store/cart'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useClerk } from "@clerk/nextjs"

const PaystackButton = dynamic(
    () => import('react-paystack').then(mod => mod.PaystackButton),
    { ssr: false }
)


const CheckoutButton = ({ click }: { click: () => void }) => {
    const { totalCost, cartItems, clearCart } = useCart()
    const router = useRouter()

    const { user } = useClerk()

    const paystackPublicKey = process.env.NEXT_PUBLIC_PAYSTACK_TEST_PUBLIC_KEY as string

    const onSuccess = (res: any) => {
        const order = {
            ...res,
            items: cartItems,
            total: totalCost,
        }

        console.log({ order })

        localStorage.setItem("currentOrder", JSON.stringify(order))

        if (res.status == "success") {
            clearCart()
        }

        router.push("/receipt")
    }

    const onClose = () => { }

    return (
        <PaystackButton
            amount={totalCost * 100}
            email={user?.primaryEmailAddress?.emailAddress || "demo@gmail.com"}
            firstname={user?.firstName as string}
            lastname={user?.lastName as string}
            publicKey={paystackPublicKey}
            className='w-full'
            currency='NGN'
            onSuccess={onSuccess}
            onClose={onClose}
        >
            <Button onClick={click} suppressHydrationWarning className='btn-gradient w-full transition-all py-5'>
                Procced to Payment
            </Button>
        </PaystackButton >
    )
}

export default CheckoutButton
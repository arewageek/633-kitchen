"use client"

import React from 'react'
import { Button } from './ui/button'
import useCart from '@/store/cart'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

const PaystackButton = dynamic(
    () => import('react-paystack').then(mod => mod.PaystackButton),
    { ssr: false }
)


const CheckoutButton = () => {
    const { totalCost } = useCart()
    const router = useRouter()

    const paystackPublicKey = process.env.NEXT_PUBLIC_PAYSTACK_TEST_PUBLIC_KEY as string

    const handleSuccess = async (res: any) => {
        router.push('/receipt')
    }
    const handleClose = () => { }

    return (
        <PaystackButton
            amount={totalCost * 100}
            email='arewa@gmail.com'
            publicKey={paystackPublicKey}
            className='w-full'
            currency='ngn'
            onSuccess={handleSuccess}
            onClose={handleClose}
        >
            <Button suppressHydrationWarning className='btn-gradient w-full transition-all py-5'>
                Procced to Payment
            </Button>
        </PaystackButton >
    )
}

export default CheckoutButton
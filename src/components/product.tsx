"use client"

import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Plus } from 'lucide-react'
import { MenuItem } from '@/lib/data'
import useCart from '@/store/cart'
import { CatalogItem } from '@/actions/catalog'

const Product = (props: CatalogItem) => {

    const { addToCart } = useCart()

    return (
        <Card className='pt-0 text-gray-600 rounded-xl'>
            <CardHeader className='p-0 overflow-hidden rounded-t-xl'>
                <img src={props.image} alt={props.name} className='w-full h-[150pt] object-cover' />
            </CardHeader>
            <CardContent>
                <h3 className='font-bold text-lg text-gray-800'>
                    {props.name}
                </h3>
                <p className='text-sm tracking-wide '>
                    {props.description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate doloremque, consectetur molestiae"}
                </p>
                <div className='flex items-center justify-between mt-4'>
                    <h4 className='font-bold text-xl text-gradient'>
                        ₦{props.price.toLocaleString()}
                    </h4>

                    <button onClick={() => addToCart({
                        id: props.name,
                        name: props.name,
                        cost: props.price
                    })} className='flex items-center gap-2 text-xs btn-gradient'>
                        <Plus /> Add
                    </button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Product
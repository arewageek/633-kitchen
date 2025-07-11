"use client"

import React from 'react'
import Product from './product'
import { menu } from '@/lib/data'
import { useTabStore } from '@/store/tabs'

const Catalog = () => {
    const { active } = useTabStore();

    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-4 gap-5'>
            {
                menu.filter(item => {
                    if (active == "all") return true;
                    return item.category == active
                }).map(item => (
                    <Product key={item.name} {...item} />
                ))
            }
        </div>
    )
}

export default Catalog
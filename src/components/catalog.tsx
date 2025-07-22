"use client"

import { useState, useEffect } from 'react'
import Product from './product'
import { useTabStore } from '@/store/tabs'
import { allProducts, CatalogItem } from '@/actions/catalog'

const Catalog = () => {
    const { active } = useTabStore();
    const [products, setProducts] = useState<CatalogItem[]>([])

    const getAllProducts = async () => {
        const response = await allProducts()
        if (response.status == 'success') {
            setProducts(response.data || [])
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-4 gap-5'>
            {
                products.filter(item => {
                    if (active == "all") return true;
                    return item.category?.name.toLowerCase() == active
                }).map(item => (
                    <Product key={item.name} {...item} />
                ))
            }
        </div>
    )
}

export default Catalog
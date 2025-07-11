"use client"

import { useTabStore } from '@/store/tabs'
import React from 'react'

const Tabs = () => {
    const { items, active, setActive } = useTabStore()

    return (
        <div className="hidden md:flex items-center justify-around px-2 py-2 bg-white rounded-2xl">
            {
                items.map(({ name, icon: Icon }, id) => (
                    <button key={id}
                        onClick={() => setActive(name)}
                        className={`flex items-center gap-3 justify-center p-3 rounded-2xl transition-all duration-300 min-w-0 flex-1 cursor-pointer ${active == name
                            ? "btn-gradient shadow-lg scale-105"
                            : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                            }`}
                    >
                        <Icon className="h-5 w-5 mb-1" />
                        <span className="text-md font-medium truncate capitalize">{name}</span>
                    </button>

                ))
            }
        </div>
    )
}

export default Tabs
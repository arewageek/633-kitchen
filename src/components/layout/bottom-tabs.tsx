"use client"

import { useTabStore } from "@/store/tabs"

export function BottomTabs() {
    const { items, active, setActive } = useTabStore()

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl z-40">
            <div className="flex items-center justify-around px-2 py-3">
                {
                    items.map(({ name, icon: Icon }, id) => (
                        <button key={id}
                            onClick={() => setActive(name)}
                            className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 min-w-0 flex-1 cursor-pointer ${active == name
                                ? "bg-orange-500 text-white shadow-lg scale-105"
                                : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                                }`}
                        >
                            <Icon className="h-5 w-5 mb-1" />
                            <span className="text-[8pt] font-medium truncate capitalize">{name}</span>
                        </button>

                    ))
                }
            </div>
        </div>
    )
}

import { create } from "zustand"

interface CartItem {
    name: string,
    quantity: number,
    id: string
}

interface CartStore {
    items: CartItem[] | [],
    isOpen: boolean,
    count: number,
    add: (item: CartItem) => void,
    remove: (id: string) => void,
    clear: () => void,
    open: () => void,
    close: () => void
}

const useCart = create<CartStore>((set, get) => ({
    items: [],
    isOpen: false,
    count: 0,
    add: (item: CartItem) => {
        const items = get().items
        set({ items: [...items, item], count: get().count++ })
    },
    remove: (id: string) => {
        const items = get().items

        set({
            items: items.filter(item => {
                if (item.id == id) return item
            }), count: get().count--
        })
    },
    clear: () => set({ items: [], count: 0 }),
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}))

export default useCart
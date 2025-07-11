import { create } from "zustand"

interface CartItem {
    name: string,
    quantity: number,
    id: string
}

interface CartStore {
    items: CartItem[] | [],
    count: number,
    add: (item: CartItem) => void,
    remove: (id: string) => void,
    clear: () => void,
}

const useCart = create<CartStore>((set, get) => ({
    items: [],
    isOpen: false,
    count: 0,
    add: (item: CartItem) => {
        const items = get().items
        const count = get().count
        if (count >= 99) return;

        set({ items: [...items, item], count: count + 1 })
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
}))

export default useCart
import { create } from "zustand"

interface CartItem {
    name: string,
    quantity: number,
    id: string
    cost: number
}

interface CartStore {
    cartItems: Record<string, CartItem>,
    cartCount: number,
    totalCost: number,
    addToCart: (item: Omit<CartItem, "quantity" | "unitCost">) => void,
    reduceItem: (id: string) => void,
    removeFromCart: (id: string) => void,
    clearCart: () => void,
}

const useCart = create<CartStore>((set, get) => ({
    cartItems: {},
    cartCount: 0,
    totalCost: 0,
    addToCart: (item) => {
        const items = get().cartItems
        const existing = items[item.id]

        const updatedList = existing ? {
            ...existing, quantity: existing.quantity + 1
        } : { ...item, quantity: 1, unitCost: item.cost, cost: item.cost }

        set({ cartItems: { ...items, [item.id]: updatedList }, cartCount: get().cartCount + 1, totalCost: get().totalCost + item.cost })
    },
    reduceItem: (id: string) => {
        const items = get().cartItems
        const item = items[id]

        if (!item) return;

        if (item.quantity <= 1) {
            get().removeFromCart(id)
            return;
        }

        set({ cartItems: { ...items, [item.id]: { ...item, quantity: item.quantity - 1 } }, cartCount: get().cartCount - 1, totalCost: get().totalCost - item.cost })
    },
    removeFromCart: (id: string) => {
        const items = get().cartItems
        const item = items[id]

        const { [id]: _, ...filtered } = items

        set({ cartItems: filtered, cartCount: get().cartCount - item.quantity, totalCost: get().totalCost - (item.cost * item.quantity) })
    },
    clearCart: () => set({ cartItems: {}, cartCount: 0, totalCost: 0 }),
}))

export default useCart
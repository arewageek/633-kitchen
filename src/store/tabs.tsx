import { ElementType } from "react"
import { create } from "zustand"
import { UtensilsCrossed, Cookie, Grid3X3, ForkKnifeCrossed, CupSoda } from "lucide-react"

interface TabItem {
    name: string,
    icon: ElementType,
}

interface TabsStore {
    items: TabItem[],
    active: string,
    setActive: (name: string) => void,
}

const items: TabItem[] = [
    {
        name: "all",
        icon: Grid3X3,
    },
    {
        name: "meals",
        icon: UtensilsCrossed,
    },
    {
        name: "drinks",
        icon: CupSoda,
    },
    {
        name: "snacks",
        icon: Cookie,
    },
]

export const useTabStore = create<TabsStore>((set, get) => ({
    items,
    active: "all",
    setActive: (name: string) => {
        const item = get().items.find(item => item.name == name)

        set({ active: item?.name || "all" })
    }
}))
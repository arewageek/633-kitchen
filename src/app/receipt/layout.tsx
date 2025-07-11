"use client"

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

const ReceiptLayout = ({ children }: { children: ReactNode }) => {

    const router = useRouter()

    const handleBackToMenu = () => {
        router.push("/")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
            {/* Header */}
            <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
                <div className="px-4 py-4">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" onClick={handleBackToMenu} className="rounded-full hover:bg-orange-50">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">Order Confirmation</h1>
                            <p className="text-sm text-gray-600">Thank you for your order!</p>
                        </div>
                    </div>
                </div>
            </header>

            {children}
        </div>
    )
}

export default ReceiptLayout
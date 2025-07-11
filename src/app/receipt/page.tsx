"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle, Clock, MapPin, Phone, ArrowLeft, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import useCart from "@/store/cart"

const ReceiptPage = () => {

    const { cartItems, totalCost } = useCart()

    const items = Object.values(cartItems)

    const orderData = {
        id: "ORD-XYZ123",
        items: [
            {
                id: "item1",
                name: "Jollof Rice with Chicken",
                quantity: 2,
                price: 1500,
                dietary: ["Spicy", "Gluten-Free"]
            },
            {
                id: "item2",
                name: "Chapman Drink",
                quantity: 1,
                price: 800,
                dietary: []
            }
        ],
        total: 3800,
        timestamp: new Date().toISOString(),
        estimatedTime: 25,
    }

    const handleDownloadReceipt = () => {
        alert("Receipt download feature would be implemented here")
    }

    const handleShareReceipt = () => {
        if (navigator.share) {
            navigator.share({
                title: "633 Kitchen Order Receipt",
                text: `Order ${orderData.id} - Total: ₦${orderData.total.toFixed(2)}`,
                url: window.location.href,
            })
        } else {
            alert("Share feature would be implemented here")
        }
    }

    return (


        <main className="px-4 py-6 max-w-2xl mx-auto space-y-6" suppressHydrationWarning>
            {/* Success Message */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 shadow-lg">
                <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-green-500 rounded-full p-3 shadow-lg">
                            <CheckCircle className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-green-800">Order Confirmed!</h2>
                            <p className="text-green-700">Your delicious meal is being prepared</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Order Details */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-bold text-gray-900">Order Details</CardTitle>
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">{orderData.id}</Badge>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-3">
                        {items.map(item => (
                            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50/80 rounded-xl">
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>

                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-gray-900">₦{(item.cost * item.quantity).toLocaleString()}</p>
                                    <p className="text-sm text-gray-600">₦{item.cost.toLocaleString()} each</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                        <span className="text-lg font-bold text-gray-900">Total Amount</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                            ₦{totalCost.toLocaleString()}
                        </span>
                    </div>
                </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid gap-3 sm:grid-cols-2">
                <Button onClick={handleDownloadReceipt} variant="outline" className="bg-white/80 backdrop-blur-sm hover:bg-blue-50">
                    <Download className="h-4 w-4 mr-2" /> Download
                </Button>
                <Button onClick={handleShareReceipt} variant="outline" className="bg-white/80 backdrop-blur-sm hover:bg-green-50">
                    <Share2 className="h-4 w-4 mr-2" /> Share
                </Button>
            </div>

        </main>
    )
}

export default ReceiptPage

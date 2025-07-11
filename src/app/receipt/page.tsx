"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle, Clock, MapPin, Phone, ArrowLeft, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import useCart, { CartItem } from "@/store/cart"
import { SignedIn, useClerk, useUser } from "@clerk/nextjs"

const ReceiptPage = () => {
    const [order, setOrder] = useState<any | null>(null)
    const [success, setSuccess] = useState(false)
    const [items, setItems] = useState<CartItem[]>()
    const [name, setName] = useState("")

    const { isLoaded, user } = useUser()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('currentOrder') as string);

        if (data) setOrder(data)

        setSuccess(() => data?.status === "success")
    }, [])

    useEffect(() => {
        if (!order?.items) {
            setItems([])
            return;
        }

        setItems(Object.values(order?.items))
        console.log({ pairs: Object.values(order?.items) })
    }, [order, success])

    useEffect(() => {
        if (isLoaded) {
            if (user?.fullName) {
                setName(user.fullName)
            }
            else {
                setName(user?.primaryEmailAddress?.emailAddress!)
            }
        }

    }, [isLoaded, user])

    useEffect(() => {
        console.log("isLoaded:", isLoaded)
        console.log("user:", user)
    }, [isLoaded, user])


    const handleDownloadReceipt = () => {
        alert("Receipt download feature would be implemented here")
    }

    return (


        <main className="px-4 py-6 max-w-2xl mx-auto space-y-6" suppressHydrationWarning>
            {/* Success Message */}
            <Card className={`bg-gradient-to-r shadow-lg ${success ? " from-green-50 to-emerald-50 border-green-200" : " from-red-50 to-orange-50 border-red-200"}`}>
                <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                        <div className={`${success ? "bg-green-500" : "bg-red-500"} rounded-full p-3 shadow-lg`}>
                            <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h2 className={`text-xl font-bold ${success}`}>
                                {success ? "Order Confirmed" : "Payment Failed"}!
                            </h2>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Customer Meta Section */}
            <SignedIn>
                <Card className="bg-white/90 backdrop-blur-md shadow border-0">
                    <CardContent className="px-6 flex gap-1 flex-col">
                        <p className="text-gray-800 text-xl font-bold">
                            {name || "Guest"}
                        </p>
                        <span className="font-medium text-xs text-gray-500">Customer Name/Email</span>
                    </CardContent>
                </Card>
            </SignedIn>


            {/* Order Details */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-bold text-gray-900">Order Details</CardTitle>
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold p-1.5">{order?.reference}</Badge>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-3">
                        {items?.map((item: CartItem) => (
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
                        <span className="text-2xl font-bold text-gradient">
                            ₦{order?.total.toLocaleString()}
                        </span>
                    </div>
                </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid gap-3 sm:grid-cols-1">
                <Button onClick={handleDownloadReceipt} variant="outline" className="bg-white/80 backdrop-blur-sm hover:bg-blue-50">
                    <Download className="h-4 w-4 mr-2" /> Download
                </Button>
            </div>

        </main>
    )
}

export default ReceiptPage

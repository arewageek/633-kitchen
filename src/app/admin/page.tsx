"use client"

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createProduct } from "@/actions/catalog";
import { toast } from "react-toastify";
import { getCategories } from "@/actions/category";

export default function CreateProductForm() {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState<any[]>([])

    const [form, setForm] = useState({
        name: "",
        description: "",
        image: "",
        category: undefined,
        price: 0
    });

    const handleChange = (key: string, value: string) => {
        setForm({ ...form, [key]: value });
    };

    const handleSubmit = async () => {
        setLoading(true)
        const created = await createProduct(form);
        if (created.status == "success") {
            toast.success(created.message)
        }
        else {
            toast.error(created.message)
        }
        setTimeout(() => setLoading(false), 1000)
    };

    const fetchCategories = async () => {
        const cats = await getCategories();
        if (cats.status == "success") {
            setCategories(cats.data || [])
            setForm({ name: '', description: '', image: '', category: undefined, price: 0 })
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center p-5">
            <Card className="w-full md:w-1/3 mx-auto mt-10 shadow-xl border-0 text-gray-700">
                <CardContent className="space-y-4 p-6">
                    <h2 className="text-2xl font-semibold text-orange-600">Create Product</h2>

                    <div className="flex flex-col gap-2">
                        <Label className="text-orange-600">Name</Label>
                        <Input
                            placeholder="e.g. Margherita Pizza"
                            value={form.name}
                            onChange={e => handleChange("name", e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label className="text-orange-600">Description</Label>
                        <Textarea
                            placeholder="Short description..."
                            value={form.description}
                            onChange={e => handleChange("description", e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label className="text-orange-600">Image URL</Label>
                        <Input
                            placeholder="https://example.com/image.jpg"
                            value={form.image}
                            onChange={e => handleChange("image", e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label className="text-orange-600">Category</Label>
                        <Select value={form.category} onValueChange={value => handleChange("category", value)}>
                            <SelectTrigger>
                                <SelectValue placeholder={categories.length < 1 ? "No Category found" : "Select category"} />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map(category => (
                                    <SelectItem key={category.id} value={category}>{category.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label className="text-orange-600">Cost</Label>
                        <Input
                            type="number"
                            placeholder="e.g. 2500"
                            value={form.price}
                            onChange={e => handleChange("price", e.target.value)}
                        />
                    </div>

                    <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full" onClick={handleSubmit}>
                        Create Product
                        {loading && <div className="w-4 h h-4 rounded-full border-white border-t-transparent animate-spin border-2" />}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

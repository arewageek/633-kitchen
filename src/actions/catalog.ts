"use server";

import { prisma } from "@/lib/prisma";

export interface CatalogItem {
  name: string;
  description: string;
  price: number;
  image: string;
  category?: {
    id: string;
    name: string;
  };
}

export interface Response {
  status: "success" | "failed" | "error";
  message?: string;
  data?: any;
}

export const createProduct = async (item: CatalogItem): Promise<Response> => {
  try {
    await prisma.product.create({
      data: {
        name: item.name,
        description: item.description,
        price: parseInt(item.price.toString()),
        image: item.image,
        category_id: item.category?.id!,
      },
    });

    return {
      status: "success",
      message: "Product creation successful",
    };
  } catch (error: any) {
    console.log({ error: error.message });

    return {
      status: "error",
      message: "Failed to create product",
    };
  }
};

export const allProducts = async (): Promise<Response> => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
    });
    return {
      status: "success",
      data: products,
    };
  } catch (error: any) {
    console.log({ error: error.message });
    return {
      status: "error",
      message: "Failed to get all products",
    };
  }
};

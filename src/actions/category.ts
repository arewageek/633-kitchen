"use server";

import { prisma } from "@/lib/prisma";
import { Response } from "./catalog";

export async function createCategory(
  name: string,
  description?: string
): Promise<Response> {
  try {
    await prisma.category.create({
      data: {
        name,
        description: description || null,
      },
    });
    return {
      status: "success",
      message: "Created category successfully",
    };
  } catch (error: any) {
    console.error("Error creating category:", error.message);
    return {
      status: "error",
      message: "Failed to create category",
    };
  }
}

export async function getCategories(): Promise<Response> {
  try {
    const response = await prisma.category.findMany();

    return {
      status: "success",
      data: response,
    };
  } catch (error: any) {
    console.error(error.message);
    return {
      status: "error",
      message: "Failed to get categories",
    };
  }
}

export async function deleteCategory(id: string): Promise<Response> {
  try {
    await prisma.category.delete({
      where: {
        id,
      },
    });
    return {
      status: "success",
      message: "Deleted category successfully",
    };
  } catch (error: any) {
    console.error("Error deleting category:", error.message);
    return {
      status: "error",
      message: "Failed to delete category",
    };
  }
}

export async function updateCategory(
  id: string,
  name: string,
  description?: string
): Promise<Response> {
  try {
    await prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
        description: description || null,
      },
    });

    return {
      status: "success",
      message: "Updated category successfully",
    };
  } catch (error: any) {
    console.error("Error updating category:", error.message);
    return {
      status: "error",
      message: "Failed to update category",
    };
  }
}

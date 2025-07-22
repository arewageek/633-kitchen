"use server";

import { prisma } from "@/lib/prisma";

export async function createCategory(name: string, description?: string) {
  try {
    const response = await prisma.category.create({
      data: {
        name,
        description: description || null,
      },
    });
    return response;
  } catch (error: any) {
    console.error("Error creating category:", error.message);
    throw new Error("Failed to create category");
  }
}

export async function getCategories() {
  try {
    const response = await prisma.category.findMany();
    return response;
  } catch (error: any) {
    console.error(error.message);
    throw new Error("Failed to fetch categories");
  }
}

export async function deleteCategory(id: string) {
  try {
    const response = await prisma.category.delete({
      where: {
        id,
      },
    });
    return response;
  } catch (error: any) {
    console.error("Error deleting category:", error.message);
    throw new Error("Failed to delete category");
  }
}

export async function updateCategory(
  id: string,
  name: string,
  description?: string
) {
  try {
    const response = await prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
        description: description || null,
      },
    });
    return response;
  } catch (error: any) {
    console.error("Error updating category:", error.message);
    throw new Error("Failed to update category");
  }
}

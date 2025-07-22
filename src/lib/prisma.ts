import { PrismaClient } from "@/generated/prisma";

declare global {
  // Prevent multiple instances in dev
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"], // optional
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

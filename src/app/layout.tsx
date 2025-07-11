import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "633 Kitchen",
  description: "Food ordering app for Ignition 633",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
      <html lang="en">
        <body suppressHydrationWarning
          className={`${geistMono.variable} antialiased bg-gray-100`}
        >
          {children}
          <ToastContainer />
          <GoogleOneTap />
        </body>
      </html>
    </ClerkProvider>
  );
}

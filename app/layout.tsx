import Navbar from "@/components/Navbar";
import {
  ClerkProvider,
} from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body
          className={cn(
            "relative h-full font-sans antialiased",
            inter.className
          )}
        >
          <main className="relative flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

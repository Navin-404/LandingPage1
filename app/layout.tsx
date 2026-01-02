import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll"; // Import it here

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kasparro - AI Search Optimization",
  description: "Dominate the AI Search Era.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={inter.className}>
        {/* Wrap everything inside SmoothScroll */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
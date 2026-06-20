import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  LocalBusinessSchema,
  siteMetadata,
} from "@/components/seo/LocalBusinessSchema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...siteMetadata,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://bbs-barber-supply.vercel.app"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="flex min-h-full flex-col bg-white text-[#111111]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce", // Replace with your website name
  description: "This is an e-commerce website which basically sell all kind of products such as beauty, electronics, Fragrances, Furnitures, etc. ", 
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}

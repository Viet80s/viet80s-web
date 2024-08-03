import type { Metadata } from "next";
import { Baumans, EB_Garamond } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import Providers from "@/components/Providers";
import localFont from "next/font/local";

const baumans = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Special Offers | Viet80s",
  description: "Authentic Vietnamese Cuisine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={baumans.className}>
      <body>{children}</body>
    </html>
  );
}

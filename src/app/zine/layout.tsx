import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import Providers from "@/components/Providers";

const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Viet80s Zine | Viet80s",
  description: "Zine about Vietnamese culture, food, and lifestyle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={garamond.className}>
      <body>{children}</body>
    </html>
  );
}

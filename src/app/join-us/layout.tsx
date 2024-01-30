import type { Metadata } from "next";
import { Baumans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import Providers from "@/components/Providers";
import localFont from "next/font/local";

const baumans = Baumans({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Join us | Viet80s",
  description: "Join our team today",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" className={baumans.className}>
        <body>
          {children}
          <Analytics />
        </body>
        <Toaster />
      </html>
    </Providers>
  );
}

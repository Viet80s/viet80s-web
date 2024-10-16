import type { Metadata } from "next";
import { Baumans, EB_Garamond } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Providers";

const baumans = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Contact Us | Viet80s",
  description: "Contact Viet80s",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" className={baumans.className}>
        <body>{children}</body>
        <Toaster />
      </html>
    </Providers>
  );
}

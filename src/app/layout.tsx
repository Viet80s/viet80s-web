import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import Providers from "@/components/Providers";

const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Authentic Vietnamese Food in Nottingham | Viet80s",
  description:
    "Viet80s is a Vietnamese restaurant in Nottingham. We serve authentic Vietnamese food, street food and coffee.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" className={garamond.className}>
        <body>
          {children}
          <Analytics />
        </body>
        <Toaster />
      </html>
    </Providers>
  );
}

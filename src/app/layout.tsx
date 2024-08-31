import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title:
    "Fresh & Authentic Vietnamese cuisines, streetfood and coffee - Viet80s Nottingham",
  keywords: [
    "vietnamese restaurant",
    "vietnamese food",
    "vietnam food restaurant",
    "viet nam restaurants",
    "viet food restaurant",
    "vietnamese food restaurants near me",
    "vnam restaurant",
    "viet nam food",
    "pho vietnamese food near me",
    "vietnamese meal",
    "vietnamese food cuisine",
    "pho number",
    "pho viet",
    "banh mi near me",
    "pho nottingham",
    "pho vietnam",
    "pho menu",
    "pho cafe",
    "pho restaurant",
    "pho street",
    "viet bistro",
    "vietnam street food",
    "pho vietnamese restaurant near me",
    "hue vietnamese",
    "vietnamese cuisine restaurant",
    "pho viet nam",
    "pho food restaurant",
    "viet cuisine restaurant",
    "street food in viet nam",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
  description:
    "Casual and cozy traditional Vietnamese restaurant in Nottingham City Center. Serving authentic fine cuisines, street food and Robusta coffee",
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

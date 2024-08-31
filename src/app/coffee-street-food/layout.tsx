import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title:
    "Vietnamese specialty coffee & bursting streetfood in Nottingham - Viet80s CF&SF",
  keywords: [
    "vietnam cafe",
    "pho street menu",
    "vietnamese street",
    "vietnamese street food near me",
    "vietnam house cafe",
    "vietnamese takeaway food near me",
    "pho viet street food",
    "best vietnamese meals",
    "uk pho",
    "pho viet thai",
    "banh mi viet",
    "banh mi shop",
    "viet thai restaurant",
    "viet 80s menu",
    "viet 80s nottingham menu",
    "order banh mi online",
    "authentic vietnamese restaurant",
    "vietnamese cafe restaurant",
    "home vietnamese",
    "vietnamese authentic",
    "pho street food",
    "pho viet locations",
    "pho cafe nottingham",
    "vietnamese lunch",
    "cafe vietnamese",
    "cafe viet menu",
  ],
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
  description:
    "Real Vietnamese Robusta coffee with condensed milk that instantly lifts you up. Authentic Vietnamese coffee shop.",
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

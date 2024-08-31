import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title:
    "Traditional Vietnamese Restaurant in Nottingham City Center - Viet80s",
  keywords: [
    "best vietnamese restaurant near me",
    "best vietnamese food near me",
    "pho food vietnam",
    "menu for pho",
    "pho viet restaurant near me",
    "vietnamese cuisine",
    "vietnamese takeaway",
    "pho uk",
    "viet restaurant",
    "viet cuisine",
    "pho vietnamese restaurant",
    "best vietnamese food",
    "viet nam restaurants near me",
    "viet street",
    "pho street menu",
    "vietnamese food nottingham",
    "vietnamese restaurant nottingham",
    "vietnamese restaurant in nottingham",
    "restaurant vietnamese",
    "best vietnamese restaurant",
    "pho restaurant menu",
    "pho vietnamese street food",
    "vietnamese take out",
    "pho restaurant nottingham",
    "vietnamese city restaurant",
    "vietnam cuisine menu",
    "vietnamese street",
    "vietnamese street food near me",
    "recommended vietnamese food",
    "vietnamese takeaway food near me",
    "vietnamese pho restaurant menu",
    "vietnamese halal food",
    "viet cuisine menu",
    "pho nottingham menu",
    "viet food photos",
    "vietnamese home",
    "vietnamese shop",
    "vietnamese cookery book",
    "vietnamese food delivery",
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
    "A uniquely crafted Vietnamese restaurant in the heart of Nottingham. Serving higher-end Vietnamese cuisines, drinks and coffee.",
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

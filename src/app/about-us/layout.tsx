import type { Metadata } from "next";
import { Baumans, EB_Garamond } from "next/font/google";

const baumans = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "About Us | Viet80s",
  description: "Something about Viet80s",
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

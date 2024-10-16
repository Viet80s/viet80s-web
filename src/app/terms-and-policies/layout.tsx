import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";

const baumans = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Terms of use and Policies | Viet80s",
  description: "Viet80s Terms of use and Policies",
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

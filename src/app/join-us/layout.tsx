import type { Metadata } from "next";
import { Baumans, EB_Garamond } from "next/font/google";

const baumans = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

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
    <html lang="en" className={baumans.className}>
      <body>{children}</body>
    </html>
  );
}

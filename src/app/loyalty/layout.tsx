import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { Toaster } from "react-hot-toast";

const baumans = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Loyalty | Viet80s",
  description: "Viet80s",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className={baumans.className}>{children}</section>
      <Toaster />
    </>
  );
}

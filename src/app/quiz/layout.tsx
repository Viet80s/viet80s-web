import type { Metadata } from "next";
import { Baumans, EB_Garamond } from "next/font/google";
import { Toaster } from "react-hot-toast";

const baumans = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Quiz | Viet80s",
  description: "Fun Quiz from Viet80s",
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

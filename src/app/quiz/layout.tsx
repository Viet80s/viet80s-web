import type { Metadata } from "next";
import { Baumans, EB_Garamond } from "next/font/google";
import { Toaster } from "react-hot-toast";

const baumans = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "What Vietnamese cuisines are for you | Viet80s",
    description:
      "Take this 2-minute quiz to find your inner Vietnamese spirit and what dishes you would absolutely love!",
    keywords: [
      "zine",
      "blog",
      "blog about Vietnam",
      "Vietnam",
      "Vietnamese",
      "Vietnamese culture",
      "Vietnamese food",
      "Vietnamese history",
      "Vietnamese people",
      "Vietnamese travel",
      "Vietnamese zine",
      "Vietnamese zine about Vietnam",
    ],
    openGraph: {
      images: ["/pictures/quiz/quizLayout.webp"],
    },
  };
}

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

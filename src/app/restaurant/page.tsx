"use client";
import Link from "next/link";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/SideBar";
import { useMediaQuery } from "react-responsive";
import AutoPlayMobile from "@/components/CarouselMobile";
import AutoPlayLaptop from "@/components/CarouselLaptop";
import Footer from "@/components/Footer";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Sidebar />
      <div className="bg-black">
        <div className="sticky top-0 z-50 flex flex-col items-center justify-center bg-black">
          <Link href="/" className="mb-5 mt-5">
            <Image
              src="/pictures/logo.png"
              alt="Viet80s Logo"
              width={100}
              height={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
        <div>{isMobile ? <AutoPlayMobile /> : <AutoPlayLaptop />}</div>
        <div className="yellow-border-paragraph">
          <p>
            Welcome to Viet80s, a proud representation of Vietnam’s rich
            culinary culture and the ultimate Vietnamese dining experience in
            the heart of Nottingham.
          </p>

          <p>
            At Viet80s, we believe that food is not just about nourishment but
            also about connecting people and cultures. Come and experience the
            real feeling of Vietnam with authentic Pho and the flavours of
            Vietnamese traditional recipes today.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

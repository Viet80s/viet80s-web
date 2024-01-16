"use client";
import Link from "next/link";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/SideBar";
import AutoPlay from "@/components/Carousel";
import SimpleSlider from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="sticky top-0 z-50 flex flex-col items-center justify-center bg-black">
        <Link href="/" className="mb-5 mt-5">
          <Image
            src="/pictures/logo.png"
            alt="Viet80s Logo"
            width={150}
            height={150}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </div>
      <div>
        <AutoPlay />
      </div>
    </>
  );
}

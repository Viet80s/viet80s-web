"use client";
import Link from "next/link";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col items-center justify-center bg-black">
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
        <h1>Hello</h1>
      </div>
    </>
  );
}

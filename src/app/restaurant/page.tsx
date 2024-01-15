"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/localHome.module.css";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/SideBar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 flex flex-col items-center justify-center w-full bg-black">
        <Link href="/" className="mb-5 mt-5">
          <Image
            src="/pictures/logo.png"
            alt="Viet80s Logo"
            width={200}
            height={200}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <Sidebar />
      </div>
      <div>
        <h1>Hello</h1>
      </div>
    </>
  );
}

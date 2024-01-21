"use client";
import Link from "next/link";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/SideBar";
import { useMediaQuery } from "react-responsive";
import Footer from "@/components/Footer";
import styles from "@/app/localHome.module.css";
import DetailsFooter from "@/components/DetailsFooter";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Sidebar />
      {/* Nav bar*/}
      <div className="sticky top-0 z-50 flex flex-col items-center justify-center bg-black">
        <Link href="/" className="mt-5">
          <Image
            src="/pictures/logo.png"
            alt="Viet80s Logo"
            width={100}
            height={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <p style={{ color: "#F8C983", fontSize: "x-large", zIndex: 1 }}>
          A Culinary Journey to Vietnamese Soul
        </p>
      </div>

      <div className={"w-full bg-black"}>
        <ContactForm />
      </div>
      <DetailsFooter />
      <Footer />
    </>
  );
}

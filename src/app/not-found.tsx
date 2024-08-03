"use client";

import Footer from "@/components/Footer";
import styles from "@/app/localHome.module.css";
import DetailsFooter from "@/components/DetailsFooter";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="bg-black">
        <NavBar />
        <div className="bg-black flex justify-center items-center">
          <div className={styles.paragraph}>
            <p className="bg-black">Oops! Sorry, the page is not found.</p>
            <Image
              src="/pictures/404.png"
              alt="Viet80s Logo"
              width={600}
              height={450}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
      <DetailsFooter location="restaurant" />
      <Footer />
    </>
  );
}

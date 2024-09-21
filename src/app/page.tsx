"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/home.module.css";
import Footer from "@/components/Footer";
import { FatherDay } from "@/components/FatherDay";
import { PopUp } from "@/components/PopUp";
import { PopUpMain } from "@/components/PopUpMain";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        {/* <PopUpMain /> */}
        {/* <FatherDay /> */}
        <div className={styles.container}>
          <Link href="/restaurant">
            <div className={styles.imageContainer}>
              <Image
                src="/pictures/1.webp"
                alt="Viet80s Restaurant"
                fill
                style={{ objectFit: "cover" }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className={styles.imageText}>RESTAURANT</p>
            </div>
          </Link>
          <Link href="/coffee-street-food">
            <div className={styles.imageContainer1}>
              <Image
                src="/pictures/2.webp"
                alt="Viet80s Street Food"
                fill
                style={{ objectFit: "cover" }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={styles.imageTextContainer}>
                <p>COFFEE</p>
                <p>&</p>
                <p>STREET FOOD</p>
              </div>
            </div>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

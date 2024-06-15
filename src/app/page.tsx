"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/home.module.css";
import Footer from "@/components/Footer";
import { FatherDay } from "@/components/FatherDay";
import { PopUp } from "@/components/PopUp";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <PopUp />
        {/* <FatherDay /> */}
        <div className={styles.container}>
          <Link href="/restaurant">
            <div className={styles.imageContainer}>
              <Image
                src="/pictures/1.png"
                alt="Viet80s Restaurant"
                fill
                style={{ objectFit: "cover" }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className={styles.imageText}>RESTAURANT</p>
            </div>
          </Link>
          <Link href="/street-food">
            <div className={styles.imageContainer1}>
              <Image
                src="/pictures/2.png"
                alt="Viet80s Street Food"
                fill
                style={{ objectFit: "cover" }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className={styles.imageText}>STREET FOOD</p>
            </div>
          </Link>
          <Link href="/coffee">
            <div className={styles.imageContainer2}>
              <Image
                src="/pictures/3.png"
                alt="Viet80s Coffee"
                fill
                style={{ objectFit: "cover" }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className={styles.imageText}>COFFEE</p>
            </div>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}

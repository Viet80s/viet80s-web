"use client";

import { useMediaQuery } from "react-responsive";
import AutoPlayMobile from "@/components/AutoPlayMobile";
import AutoPlayLaptop from "@/components/AutoPlayLaptop";
import Footer from "@/components/Footer";
import styles from "@/app/localHome.module.css";
import DetailsFooter from "@/components/DetailsFooter";
import NavBar from "@/components/NavBar";
import FoodGalleryResto from "@/components/FoodGalleryResto";
import Image from "next/image";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const link = isMobile ? "/pictures/promote1.png" : "/pictures/promote2.png";
  return (
    <>
      <div className={"bg-black"}>
        <NavBar />
        <div className={styles.paragraph}>
          <p>Happy Women&apos;s month! Special offers are coming.</p>
         
        </div>
      </div>
      <DetailsFooter location="restaurant" />
      <Footer />
    </>
  );
}

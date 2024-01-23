"use client";

import { useMediaQuery } from "react-responsive";
import AutoPlayMobile from "@/components/CarouselMobile";
import AutoPlayLaptop from "@/components/CarouselLaptop";
import Footer from "@/components/Footer";
import styles from "@/app/localHome.module.css";
import DetailsFooter from "@/components/DetailsFooter";
import NavBar from "@/components/NavBar";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <NavBar />
      <div className={"w-full bg-white"}>
        <div className={styles.paragraphPolicy}>
          <PrivacyPolicy />
        </div>
      </div>
      <DetailsFooter location="restaurant" />
      <Footer />
    </>
  );
}

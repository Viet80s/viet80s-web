"use client";

import { useMediaQuery } from "react-responsive";
import AutoPlayMobile from "@/components/AutoPlayMobile";
import AutoPlayLaptop from "@/components/AutoPlayLaptop";
import Footer from "@/components/Footer";
import styles from "@/app/localHome.module.css";
import DetailsFooter from "@/components/DetailsFooter";
import NavBar from "@/components/NavBar";
import FoodGalleryStreetFood from "@/components/FoodGalleryStreetFood";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <NavBar />
      <div className={"w-full bg-black"}>
        <div>
          {isMobile ? (
            <AutoPlayMobile location="street-food" />
          ) : (
            <AutoPlayLaptop location="street-food" />
          )}
        </div>
        <div className={styles.paragraph}>
          <p>
            Welcome to Viet80s Street Food, your passport to the vibrant and
            tantalizing flavours of Vietnam, right in the heart of Nottingham!
            Step into our world, where the bustling streets of Vietnam come
            alive through the aromas, tastes, and traditions of authentic
            Vietnamese street food.
          </p>

          <p>
            At Viet80s Street Food, we take you on a culinary journey back to
            the bustling streets of 1980s Vietnam, where the food culture was
            born and thrived. Our mission is simple yet profound: to transport
            you to the very essence of Vietnam, one mouthwatering bite at a
            time.
          </p>
        </div>
        <div className="mr-10 ml-10 mt-10 bg-black">
          <FoodGalleryStreetFood />
        </div>
      </div>
      <DetailsFooter location="street-food" />
      <Footer />
    </>
  );
}

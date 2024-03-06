"use client";

import { useMediaQuery } from "react-responsive";
import AutoPlayMobile from "@/components/AutoPlayMobile";
import AutoPlayLaptop from "@/components/AutoPlayLaptop";
import Footer from "@/components/Footer";
import styles from "@/app/localHome.module.css";
import DetailsFooter from "@/components/DetailsFooter";
import NavBar from "@/components/NavBar";
import FoodGalleryResto from "@/components/FoodGalleryResto";
import ButtonList from "@/components/ButtonList";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <NavBar />
      <div className={"bg-black"}>
        <div>
          {isMobile ? (
            <AutoPlayMobile location="restaurant" />
          ) : (
            <AutoPlayLaptop location="restaurant" />
          )}
        </div>
        <div className="mr-10">
          <ButtonList location="restaurant" />
        </div>
        <div className={styles.paragraph}>
          <p>
            Welcome to Viet80s, a proud representation of Vietnam’s rich
            culinary culture and the ultimate Vietnamese dining experience in
            the heart of Nottingham.
          </p>

          <p>
            At Viet80s, we believe that food is not just about nourishment but
            also about connecting people and cultures. Come and experience the
            real feeling of Vietnam with authentic Pho and the flavours of
            Vietnamese traditional recipes today.
          </p>
        </div>
        {isMobile ? (
          <div className="mx-10 mt-10 bg-black">
            {" "}
            <FoodGalleryResto />
          </div>
        ) : (
          <div className="mx-40 mt-10 bg-black">
            {" "}
            <FoodGalleryResto />
          </div>
        )}

        <div className="mr-10">
          <ButtonList location="restaurant" />
        </div>
      </div>
      <DetailsFooter location="restaurant" />
      <Footer />
    </>
  );
}

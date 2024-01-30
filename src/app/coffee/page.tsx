"use client";

import { useMediaQuery } from "react-responsive";
import AutoPlayMobile from "@/components/AutoPlayMobile";
import AutoPlayLaptop from "@/components/AutoPlayLaptop";
import Footer from "@/components/Footer";
import styles from "@/app/localHome.module.css";
import DetailsFooter from "@/components/DetailsFooter";
import NavBar from "@/components/NavBar";
import FoodGalleryCoffee from "@/components/FoodGalleryCoffee";
import ButtonList from "@/components/ButtonList";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <NavBar />
      <div className={"w-full bg-black"}>
        <div>
          {isMobile ? (
            <AutoPlayMobile location="coffee" />
          ) : (
            <AutoPlayLaptop location="coffee" />
          )}
        </div>
        <div className={styles.paragraph}>
          <p>
            Welcome to Viet80s Coffee, where the heart of Vietnam’s coffee
            culture meets the vibrant pulse of Nottingham! Step into our cozy
            oasis, where the artistry of authentic Vietnamese coffee takes
            center stage, offering you an exquisite and invigorating experience.
          </p>
          <p></p>
          <p>
            At Viet80s Coffee, we take immense pride in serving you the finest
            Vietnamese coffee, prepared with meticulous care and a commitment to
            tradition. Our beans are carefully sourced from the highlands of
            Vietnam, where the perfect blend of climate and soil gives birth to
            the bold and robust flavors that have made Vietnamese coffee famous
            worldwide.
          </p>
        </div>
        <div className="mr-10 ml-10 mt-10 bg-black">
          <FoodGalleryCoffee />
        </div>
        <ButtonList location="coffee" />
      </div>
      <DetailsFooter location="coffee" />
      <Footer />
    </>
  );
}

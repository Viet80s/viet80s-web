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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gallery from "@/components/Gallery";
import { faStar, faImages } from "@fortawesome/free-regular-svg-icons";
import { PopUp } from "@/components/PopUp";
import { FatherDay } from "@/components/FatherDay";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const fontSizeTitle = isMobile ? "x-large" : "xx-large";

  return (
    <>
      <NavBar />

      <div className={"w-full bg-black"}>
        <div>
          <FatherDay disable={true} />
        </div>
        <div>
          {isMobile ? (
            <AutoPlayMobile location="coffee" />
          ) : (
            <AutoPlayLaptop location="coffee" />
          )}
        </div>
        <div className="mr-10">
          <ButtonList location="coffee" />
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
        {isMobile ? (
          <div className="mx-10 mt-10 bg-black">
            {" "}
            <FoodGalleryCoffee />
          </div>
        ) : (
          <div className="mx-40 mt-10 bg-black">
            {" "}
            <FoodGalleryCoffee />
          </div>
        )}
        <div className="mr-10">
          <ButtonList location="coffee" />
        </div>
        <div>
          <div className="flex justify-center">
            <div
              className="flex items-center text-center mt-5 gap-3"
              style={{ color: "#F8C983", fontSize: fontSizeTitle }}
            >
              <h3>Viet80s Gallery</h3>
              <FontAwesomeIcon icon={faImages} />
            </div>
          </div>
          <Gallery />
        </div>
      </div>
      <DetailsFooter location="coffee" />
      <Footer />
    </>
  );
}

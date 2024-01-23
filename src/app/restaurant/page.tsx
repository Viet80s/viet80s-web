"use client";

import { useMediaQuery } from "react-responsive";
import AutoPlayMobile from "@/components/CarouselMobile";
import AutoPlayLaptop from "@/components/CarouselLaptop";
import Footer from "@/components/Footer";
import styles from "@/app/localHome.module.css";
import DetailsFooter from "@/components/DetailsFooter";
import NavBar from "@/components/NavBar";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <NavBar />
      <div className={"w-full bg-black"}>
        <div>{isMobile ? <AutoPlayMobile /> : <AutoPlayLaptop />}</div>
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
      </div>
      <DetailsFooter location="restaurant" />
      <Footer />
    </>
  );
}

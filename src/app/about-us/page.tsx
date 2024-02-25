"use client";

import { useMediaQuery } from "react-responsive";
import AutoPlayMobile from "@/components/AutoPlayMobile";
import AutoPlayLaptop from "@/components/AutoPlayLaptop";
import Footer from "@/components/Footer";
import styles from "@/app/about.module.css";
import DetailsFooter from "@/components/DetailsFooter";
import NavBar from "@/components/NavBar";
import FoodGalleryResto from "@/components/FoodGalleryResto";
import Image from "next/image";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const videoHeight = isMobile ? "100" : "50";
  const videoWidth = isMobile ? "1000" : "800";
  return (
    <>
      <div className={"bg-black"}>
        <NavBar />
        <div
          className={styles.paragraph}
          style={{
            backgroundImage: "url(" + "/pictures/aboutUs.png" + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p>About</p>
          <p>Viet80s</p>
        </div>

        <div className={"flex " + styles.paragraphPolicy}>
          <div className="mx-2">
            <div className="mb-5">
              {" "}
              <p>
                We are Viet80s, the restaurant that has been serving authentic
                Vietnamese cuisine in the heart of Nottingham for many years.
              </p>
              <p>
                Our mission is to provide our guests with a truly authentic
                dining experience, using traditional recipes and the freshest
                ingredients to create dishes that are bursting with flavor and
                aroma.
              </p>
              <p>
                Also, providing excellent service and a warm, welcoming
                atmosphere that makes everyone feel at home is our continuing
                commitment for you.
              </p>
              <p>Come and celebrate authentic Vietnamese food with us today!</p>
            </div>
            <div>
              {!isMobile && (
                <Image
                  src="/pictures/about2.jpg"
                  alt="Viet80s Logo"
                  width={1000}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
                />
              )}
            </div>
          </div>
          <div>
            <video
              src="/video/video.mov"
              width={videoWidth}
              height={videoHeight}
              controls
              autoPlay
              playsInline
              loop
              muted
            />
          </div>
        </div>
      </div>
      <DetailsFooter location="restaurant" />
      <Footer />
    </>
  );
}

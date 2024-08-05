"use client";

import { useMediaQuery } from "react-responsive";
import AutoPlayMobile from "@/components/AutoPlayMobile";
import AutoPlayLaptop from "@/components/AutoPlayLaptop";
import Footer from "@/components/Footer";
import DetailsFooter from "@/components/DetailsFooter";
import NavBar from "@/components/NavBar";
import ButtonList from "@/components/ButtonList";
import Image from "next/image";
import GalleryLaptop from "@/components/GalleryLaptop";
import GalleryMobile from "@/components/GalleryMobile";
import FoodGalleryCoffee from "@/components/FoodGalleryCoffee";
import { PopUp } from "@/components/PopUp";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <NavBar />
      <PopUp />
      <div className="bg-[url('/pictures/bg2.svg')] bg-center bg-cover">
        <div>
          {isMobile ? (
            <AutoPlayMobile location="coffee" />
          ) : (
            <AutoPlayLaptop location="coffee" />
          )}
        </div>

        <div>
          <ButtonList location="coffee" />
        </div>
        <div className="rounded-lg border-solid border-[#493717] border-4 text-center justify-center font-bold p-[10px] mx-[10px] text-md my-[10px] sm:p-[20px] sm:mx-[200px] sm:text-xl sm:my-[20px]">
          <div className="sm:flex sm:flex-row sm:items-center sm:justify-center grid-cols-2 grid gap-4 sm:text-lg text-sm">
            <div className="flex flex-col items-center justify-center text-center text-xanh">
              <div>
                {" "}
                <Image
                  src="/pictures/homepage/icon-05.webp"
                  width="300"
                  height="300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="USP 1"
                  priority={true}
                />
              </div>
              <div>
                <h3>100% Coffee </h3>
                <h3>from Vietnam</h3>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center text-xanh">
              <div>
                {" "}
                <Image
                  src="/pictures/homepage/icon-06.webp"
                  width="300"
                  height="300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="USP 2"
                  priority={true}
                />
              </div>
              <div>
                <h3>Live Music</h3>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center text-xanh">
              <div>
                {" "}
                <Image
                  src="/pictures/homepage/icon-07.webp"
                  width="300"
                  height="300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="USP 3"
                  priority={true}
                />
              </div>
              <div>
                <h3>#1 Breakfast</h3>
                <h3>in the world</h3>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center text-xanh">
              <div>
                {" "}
                <Image
                  src="/pictures/homepage/icon-08.webp"
                  width="300"
                  height="300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="USP 4"
                  priority={true}
                />
              </div>
              <div>
                <h3>Mon-Fri: 8:30-6:00</h3>
                <h3>Sat & Sun: 9:00-6:00</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <FoodGalleryCoffee />
        </div>
        <div className="sm:mb-5">
          <ButtonList location="coffee" />
        </div>
        <div>
          {/* <GalleryLaptop /> */}
          <GalleryMobile />
        </div>
        <div>
          <DetailsFooter location="coffee" />
          <Footer />
        </div>
      </div>
    </>
  );
}

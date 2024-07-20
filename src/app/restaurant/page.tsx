"use client";

import { useMediaQuery } from "react-responsive";
import AutoPlayMobile from "@/components/AutoPlayMobile";
import AutoPlayLaptop from "@/components/AutoPlayLaptop";
import Footer from "@/components/Footer";
import DetailsFooter from "@/components/DetailsFooter";
import NavBar from "@/components/NavBar";
import FoodGalleryResto from "@/components/FoodGalleryResto";
import ButtonList from "@/components/ButtonList";
import Image from "next/image";
import GalleryLaptop from "@/components/GalleryLaptop";
import GalleryMobile from "@/components/GalleryMobile";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const fontSizeTitle = isMobile ? "x-large" : "xx-large";
  return (
    <>
      <NavBar />

      <div className="bg-[url('/pictures/bg1.svg')] bg-center bg-cover">
        <div>
          {isMobile ? (
            <AutoPlayMobile location="restaurant" />
          ) : (
            <AutoPlayLaptop location="restaurant" />
          )}
        </div>

        <div>
          <ButtonList location="restaurant" />
        </div>
        <div className="rounded-lg border-solid border-xanh border-4 text-center justify-center font-bold p-[10px] mx-[10px] text-md my-[10px] sm:p-[20px] sm:mx-[200px] sm:text-xl sm:my-[20px]">
          <div className="sm:flex sm:flex-row sm:items-center sm:justify-center grid-cols-2 grid gap-4 sm:text-lg text-sm">
            <div className="flex flex-col items-center justify-center text-center text-xanh">
              <div>
                {" "}
                <Image
                  src="/pictures/homepage/icon-01.svg"
                  width="300"
                  height="300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="USP 1"
                  priority={true}
                />
              </div>
              <div>
                <h3>100% Vietnamese </h3>
                <h3>from the Kitchen to the Table</h3>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center text-xanh">
              <div>
                {" "}
                <Image
                  src="/pictures/homepage/icon-02.svg"
                  width="300"
                  height="300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="USP 2"
                  priority={true}
                />
              </div>
              <div>
                <h3>Next to</h3>
                <h3>Nottingham Castle</h3>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center text-xanh">
              <div>
                {" "}
                <Image
                  src="/pictures/homepage/icon-03.svg"
                  width="300"
                  height="300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="USP 3"
                  priority={true}
                />
              </div>
              <div>
                <h3>Open Everyday</h3>
                <h3>11:30am - 10:30pm</h3>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center text-xanh">
              <div>
                {" "}
                <Image
                  src="/pictures/homepage/icon-04.svg"
                  width="300"
                  height="300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="USP 4"
                  priority={true}
                />
              </div>
              <div>
                <h3>Exceptional Service</h3>
                <h3>like nowhere else</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <FoodGalleryResto />
        </div>
        <div className="sm:mb-5">
          <ButtonList location="restaurant" />
        </div>
        <div>
          {/* <GalleryLaptop /> */}
          <GalleryMobile />
        </div>
        <div>
          <DetailsFooter location="restaurant" />
          <Footer />
        </div>
      </div>
    </>
  );
}

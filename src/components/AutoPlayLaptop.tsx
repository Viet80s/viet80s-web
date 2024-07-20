import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { FatherDay } from "./FatherDay";

type Props = { location: string };

const AutoPlayLaptop = ({ location }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <div>
      {location === "restaurant" && (
        <>
          <Slider {...settings}>
            {/* <div>
              <FatherDay />
            </div> */}
            <div>
              <Image
                src="/pictures/homepage/bannerweb1.png"
                alt="Viet80s Logo"
                width={1920}
                height={750}
              />
            </div>
            {/* <div>
              <Image
                src="/pictures/resto.png"
                alt="Viet80s Logo"
                width={1920}
                height={750}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
              />
            </div> */}
          </Slider>
        </>
      )}
      {location === "street-food" && (
        <>
          <Slider {...settings}>
            {/* <div>
              <FatherDay />
            </div> */}
            <div>
              <Image
                src="/pictures/sf2.png"
                alt="Viet80s Logo"
                width={1920}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
              />
            </div>
            <div>
              <Image
                src="/pictures/sf1.png"
                alt="Viet80s Logo"
                width={1920}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
              />
            </div>
          </Slider>
        </>
      )}
      {location === "coffee" && (
        <>
          <Slider {...settings}>
            {/* <div>
              <FatherDay />
            </div> */}
            <div>
              <Image
                src="/pictures/cf1.png"
                alt="Viet80s Logo"
                width={1920}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
              />
            </div>
            <div>
              <Image
                src="/pictures/cf2.png"
                alt="Viet80s Logo"
                width={1920}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
              />
            </div>
          </Slider>
        </>
      )}
    </div>
  );
};

export default AutoPlayLaptop;

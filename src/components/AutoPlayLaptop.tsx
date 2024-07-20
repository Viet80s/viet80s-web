import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { FatherDay } from "./FatherDay";

type Props = { location: string };

const AutoPlayLaptop = ({ location }: Props) => {
  const images = [
    {
      original: "/pictures/homepage/banner1.png",
      thumbnail: "/pictures/gallery/1.png",
      // description: "This is a description",
    },
    {
      original: "/pictures/homepage/banner2.png",
      thumbnail: "/pictures/gallery/2.png",
      // description: "This is a description",
    },
    {
      original: "/pictures/homepage/banner3.png",
      thumbnail: "/pictures/gallery/3.png",
      // description: "This is a description",
    },
    {
      original: "/pictures/homepage/banner4.png",
      thumbnail: "/pictures/gallery/4.png",
      // description: "This is a description",
    },
  ];
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
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  src={image.original}
                  alt="Viet80s Logo"
                  width={1920}
                  height={750}
                />
              </div>
            ))}
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
                src="/pictures/homepage/banner5.png"
                alt="Viet80s Logo"
                width={1920}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
              />
            </div>
            <div>
              <Image
                src="/pictures/homepage/banner6.png"
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

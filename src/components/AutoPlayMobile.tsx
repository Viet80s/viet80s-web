import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

type Props = { location: string };

const AutoPlayMobile = ({ location }: Props) => {
  const restaurantImages = [
    {
      original: "/pictures/homepage/mo1.webp",
      blurDataURL: "/pictures/homepage/mo1.webp",
    },
    {
      original: "/pictures/homepage/mo2.webp",
      blurDataURL: "/pictures/homepage/mo2.webp",
    },
    {
      original: "/pictures/homepage/mo3.webp",
      blurDataURL: "/pictures/homepage/mo3.webp",
    },
    {
      original: "/pictures/homepage/mo4.webp",
      blurDataURL: "/pictures/homepage/mo4.webp",
    },
  ];

  const coffeeImages = [
    {
      original: "/pictures/homepage/mocf1.webp",
      blurDataURL: "/pictures/homepage/mocf1.webp",
    },
    {
      original: "/pictures/homepage/mocf2.webp",
      blurDataURL: "/pictures/homepage/mocf2.webp",
    },
    {
      original: "/pictures/homepage/mocf3.webp",
      blurDataURL: "/pictures/homepage/mocf3.webp",
    },
    {
      original: "/pictures/homepage/mocf4.webp",
      blurDataURL: "/pictures/homepage/mocf4.webp",
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

  const images = location === "restaurant" ? restaurantImages : coffeeImages;

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.original}
              alt={`Slide ${index + 1}`}
              width={1920}
              height={750}
              placeholder="blur"
              priority
              fetchPriority="high"
              blurDataURL={image.blurDataURL}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlayMobile;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

type Props = { location: string };

const AutoPlayLaptop = ({ location }: Props) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const restaurantImages = [
    {
      original: "/pictures/homepage/banner1.webp",
      blurDataURL: "/pictures/homepage/banner1-small.webp",
    },
    {
      original: "/pictures/homepage/banner2.webp",
      blurDataURL: "/pictures/homepage/banner2-small.webp",
    },
    {
      original: "/pictures/homepage/banner3.webp",
      blurDataURL: "/pictures/homepage/banner3-small.webp",
    },
    {
      original: "/pictures/homepage/banner4.webp",
      blurDataURL: "/pictures/homepage/banner4-small.webp",
    },
  ];

  const coffeeImages = [
    {
      original: "/pictures/homepage/banner5.webp",
      blurDataURL: "/pictures/homepage/banner5-small.webp",
    },
    {
      original: "/pictures/homepage/banner6.webp",
      blurDataURL: "/pictures/homepage/banner6-small.webp",
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

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = image.original;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to load images", error);
      }
    };

    loadImages();
  }, [images]);

  if (!imagesLoaded) {
    return (
      <div className="w-full aspect-[1920/750]">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.original}
              alt={`Slide ${index + 1}`}
              width={1920}
              height={location === "restaurant" ? 750 : 400}
              placeholder="blur"
              blurDataURL={image.blurDataURL}
              fetchPriority="high"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlayLaptop;

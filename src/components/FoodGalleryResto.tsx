import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const FoodGalleryResto = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const imageSize = isMobile ? 200 : 310;
  const numberSlide = isMobile ? 2 : 3;
  const fontSize = isMobile ? "small" : "large";

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: numberSlide,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    gap: "30px",
    cssEase: "linear",
    pauseOnHover: false,
  };
  return (
    <div className="mt-10">
      <div>
        <h3 className="text-center mb-5 bg-primary-foreground text-primary sm:text-3xl text-xl font-bold sm:p-4 p-2">
          Our Signatures
        </h3>
      </div>
      <div className="mx-10 sm:mx-60">
        <Slider {...settings}>
          <div>
            <Image
              src="/pictures/food/1.webp"
              alt="food 1"
              width={imageSize}
              height={imageSize}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            />
            <p className="text-center" style={{ fontSize: fontSize }}>
              Bún thịt nướng/Charcoal Grilled pork with Bún
            </p>
          </div>
          <div>
            <Image
              src="/pictures/food/2.webp"
              alt="food 1"
              width={imageSize}
              height={imageSize}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            />
            <p className="text-center" style={{ fontSize: fontSize }}>
              Chả nem chiên giòn/ Springs Rolls
            </p>
          </div>
          <div>
            <Image
              src="/pictures/food/3.webp"
              alt="food 1"
              width={imageSize}
              height={imageSize}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            />
            <p className="text-center" style={{ fontSize: fontSize }}>
              Cơm chiên thập cẩm/ House Special Fried Rice
            </p>
          </div>
          <div>
            <Image
              src="/pictures/food/4.webp"
              alt="food 1"
              width={imageSize}
              height={imageSize}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            />
            <p className="text-center" style={{ fontSize: fontSize }}>
              Gà chiên mắc khén/ Special Fried Chicken with Mắc khén seeds
            </p>
          </div>
          <div>
            <Image
              src="/pictures/food/5.webp"
              alt="food 1"
              width={imageSize}
              height={imageSize}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            />
            <p className="text-center" style={{ fontSize: fontSize }}>
              Gà nướng mật ong/ Grilled Chicken with honey
            </p>
          </div>
          <div>
            <Image
              src="/pictures/food/6.webp"
              alt="food 1"
              width={imageSize}
              height={imageSize}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            />
            <p className="text-center" style={{ fontSize: fontSize }}>
              Phở bò tái lõi/ Beef Shin Phở
            </p>
          </div>
          <div>
            <Image
              src="/pictures/food/7.webp"
              alt="food 1"
              width={imageSize}
              height={imageSize}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            />
            <p className="text-center" style={{ fontSize: fontSize }}>
              Mì xào tôm/ Stir-fired noodles with prawn
            </p>
          </div>
          <div>
            <Image
              src="/pictures/food/8.webp"
              alt="food 1"
              width={imageSize}
              height={imageSize}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            />
            <p className="text-center" style={{ fontSize: fontSize }}>
              Nem chua rán/ Fermented pork rolls
            </p>
          </div>
          <div>
            <Image
              src="/pictures/food/9.webp"
              alt="food 1"
              width={imageSize}
              height={imageSize}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            />
            <p className="text-center" style={{ fontSize: fontSize }}>
              Đậu phụ chiên giòn/ Fried tofu with Viet80s recipe
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FoodGalleryResto;

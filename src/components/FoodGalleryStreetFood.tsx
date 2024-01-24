import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faHeart } from "@fortawesome/free-regular-svg-icons";

const FoodGalleryStreetFood = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const imageSize = isMobile ? 200 : 250;
  const numberSlide = isMobile ? 2 : 3;
  const fontSize = isMobile ? "small" : "large";
  const fontSizeTitle = isMobile ? "x-large" : "xx-large";

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: numberSlide,
    slidesToScroll: numberSlide,
    autoplay: true,
    autoplaySpeed: 3000,
    gap: "30px",
    cssEase: "linear",
    pauseOnHover: false,
  };
  return (
    <div>
      <div>
        <h3
          className="text-center"
          style={{ color: "#F8C983", fontSize: fontSizeTitle }}
        >
          Have a look on our signatures <FontAwesomeIcon icon={faHeart} beat />
        </h3>
      </div>

      <Slider {...settings}>
        <div className="justify-center items-center">
          <Image
            src="/pictures/food/1.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Charcoal Grilled pork with Bún
          </p>
        </div>
        <div>
          <Image
            src="/pictures/food/2.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Springs Rolls
          </p>
        </div>
        <div>
          <Image
            src="/pictures/food/3.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            House Special Fried Rice
          </p>
        </div>
        <div>
          <Image
            src="/pictures/food/4.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Special Fried Chicken with Mắc khén seeds
          </p>
        </div>
        <div>
          <Image
            src="/pictures/food/5.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Grilled Chicken with honey
          </p>
        </div>
        <div>
          <Image
            src="/pictures/food/6.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Beef Shin Phở
          </p>
        </div>
        <div>
          <Image
            src="/pictures/food/7.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Stir-fired noodles with prawn
          </p>
        </div>
        <div>
          <Image
            src="/pictures/food/8.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Fermented pork rolls
          </p>
        </div>
        <div>
          <Image
            src="/pictures/food/9.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Fried tofu ưith Viet80s recipe
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default FoodGalleryStreetFood;

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
            src="/pictures/streetfood/1.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Bánh Mì Việt/ Traditional Banh Mi
          </p>
        </div>
        <div>
          <Image
            src="/pictures/streetfood/2.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Bánh Giò Nóng/ Rice Pyramid Dumpling
          </p>
        </div>
        <div>
          <Image
            src="/pictures/streetfood/3.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Bò sốt vang/ Bordelaise Beef served with Banh Mi
          </p>
        </div>
        <div>
          <Image
            src="/pictures/streetfood/4.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Chả Ốc/ Apple Snail Meatballs
          </p>
        </div>
        <div>
          <Image
            src="/pictures/streetfood/5.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Chả nem Miền Nam/ Southern Spring Rolls
          </p>
        </div>
        <div>
          <Image
            src="/pictures/streetfood/6.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Gà chiên giòn/ Crispy Fried Chicken
          </p>
        </div>
        <div>
          <Image
            src="/pictures/streetfood/7.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Sườn Nướng/ Grilled Pork Ribs
          </p>
        </div>
        <div>
          <Image
            src="/pictures/streetfood/8.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Xôi mặn/ Sticky Rice with pork
          </p>
        </div>
        <div>
          <Image
            src="/pictures/streetfood/9.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Giò đủ loại/ Vietnamese Hams and Sausages
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default FoodGalleryStreetFood;

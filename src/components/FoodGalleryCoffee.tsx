import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faHeart } from "@fortawesome/free-regular-svg-icons";

const FoodGalleryCoffee = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const imageSize = isMobile ? 200 : 310;
  const numberSlide = isMobile ? 2 : 3;
  const fontSize = isMobile ? "small" : "large";
  const fontSizeTitle = isMobile ? "x-large" : "xx-large";

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
    <div>
      <div>
        <h3
          className="text-center mb-5"
          style={{ color: "#F8C983", fontSize: fontSizeTitle }}
        >
          Have a look on our signatures <FontAwesomeIcon icon={faHeart} beat />
        </h3>
      </div>

      <Slider {...settings}>
        <div className="justify-center items-center">
          <Image
            src="/pictures/coffee/1.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Trà Chanh Dây/ Passionfruit Tea
          </p>
        </div>
        <div>
          <Image
            src="/pictures/coffee/1a.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Cà phê truyền thống/ Traditional Vietnamese Coffee
          </p>
        </div>
        <div>
          <Image
            src="/pictures/coffee/2.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Bánh chanh dây/ Passionfruit Chesse Cake
          </p>
        </div>
        <div>
          <Image
            src="/pictures/coffee/2a.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Trà Đào/ Peach Tea
          </p>
        </div>
        <div>
          <Image
            src="/pictures/coffee/3.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Bánh sữa chua/ Yogurt Cake
          </p>
        </div>
        <div>
          <Image
            src="/pictures/coffee/3a.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Chè Bưởi/ Viet80s Pomelo Sweetsoup
          </p>
        </div>
        <div>
          <Image
            src="/pictures/coffee/4.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Bánh Matcha/ Matcha Cake
          </p>
        </div>
        <div>
          <Image
            src="/pictures/coffee/4a.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Sô-cô-la nóng/ Hot Chocolate
          </p>
        </div>
        <div>
          <Image
            src="/pictures/coffee/5.png"
            alt="food 1"
            width={imageSize}
            height={imageSize}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
          <p
            className="text-center"
            style={{ color: "#F8C983", fontSize: fontSize }}
          >
            Bánh Flan/ Flan de Leche
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default FoodGalleryCoffee;

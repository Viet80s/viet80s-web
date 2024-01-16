import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

export default class AutoPlayMobile extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      cssEase: "linear",
      pauseOnHover: false,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image
              src="/pictures/1.png"
              alt="Viet80s Logo"
              width={1920}
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <Image
              src="/pictures/2.png"
              alt="Viet80s Logo"
              width={1920}
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <Image
              src="/pictures/3.png"
              alt="Viet80s Logo"
              width={1920}
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <Image
              src="/pictures/1.png"
              alt="Viet80s Logo"
              width={1920}
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

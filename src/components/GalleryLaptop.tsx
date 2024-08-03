// import React from "react";
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";

const images = [
  {
    original: "/pictures/gallery/1.webp",
    thumbnail: "/pictures/gallery/1.webp",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/2.webp",
    thumbnail: "/pictures/gallery/2.webp",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/3.webp",
    thumbnail: "/pictures/gallery/3.webp",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/4.webp",
    thumbnail: "/pictures/gallery/4.webp",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/5.webp",
    thumbnail: "/pictures/gallery/5.webp",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/6.webp",
    thumbnail: "/pictures/gallery/6.webp",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/7.webp",
    thumbnail: "/pictures/gallery/7.webp",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/8.webp",
    thumbnail: "/pictures/gallery/8.webp",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/9.webp",
    thumbnail: "/pictures/gallery/9.webp",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/10.webp",
    thumbnail: "/pictures/gallery/10.webp",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/11.webp",
    thumbnail: "/pictures/gallery/11.webp",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/12.webp",
    thumbnail: "/pictures/gallery/12.webp",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/13.webp",
    thumbnail: "/pictures/gallery/13.webp",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/14.webp",
    thumbnail: "/pictures/gallery/14.webp",
    // description: "This is a description",
  },
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
};

const GalleryLaptop = () => {
  return (
    <div>
      <div className="bg-[url('/pictures/nen2.svg')] bg-primary bg-cover bg-center">
        <h3 className="text-center bg-xanh text-primary sm:text-3xl text-xl font-bold sm:p-4 p-2">
          Viet80s Gallery
        </h3>
        <div className="sm:hidden m-6 items-center justify-center">
          <iframe
            width="350"
            height="400"
            src="https://www.youtube-nocookie.com/embed/3vmvJyzr2GQ?si=tn0XNYY4mk42Lkxz&amp;start=3"
            title="Viet80s in a glance"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="hidden sm:flex sm:m-6 sm:items-center sm:justify-center sm:pb-7">
          <iframe
            width="1000"
            height="600"
            src="https://www.youtube-nocookie.com/embed/3vmvJyzr2GQ?si=tn0XNYY4mk42Lkxz&amp;start=3"
            title="Viet80s in a glance"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="sm:items-center sm:justify-center"
          ></iframe>
        </div>
        {/* <div className="sm:hidden mx-5 mt-5 pb-7">
          <ImageGallery
            items={images}
            thumbnailPosition="left"
            lazyLoad={true}
            autoPlay={true}
            showThumbnails={true}
            showNav={false}
            showFullscreenButton={false}
          />
        </div> */}
        {/* <div className="sm:flex hidden">
          <div>
            <Slider {...settings}>
              {images.map((item, index) => (
                <div key={index}>
                  <Image
                    src={item.original}
                    alt={`Gallery image ${index + 1}`}
                    width={100}
                    height={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default GalleryLaptop;

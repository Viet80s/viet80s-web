import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/pictures/gallery/1.png",
    thumbnail: "/pictures/gallery/1.png",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/2.png",
    thumbnail: "/pictures/gallery/2.png",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/3.png",
    thumbnail: "/pictures/gallery/3.png",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/4.png",
    thumbnail: "/pictures/gallery/4.png",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/5.png",
    thumbnail: "/pictures/gallery/5.png",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/6.png",
    thumbnail: "/pictures/gallery/6.png",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/7.png",
    thumbnail: "/pictures/gallery/7.png",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/8.png",
    thumbnail: "/pictures/gallery/8.png",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/9.png",
    thumbnail: "/pictures/gallery/9.png",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/10.png",
    thumbnail: "/pictures/gallery/10.png",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/11.png",
    thumbnail: "/pictures/gallery/11.png",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/12.png",
    thumbnail: "/pictures/gallery/12.png",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/13.png",
    thumbnail: "/pictures/gallery/13.png",
    // description: "This is a description",
  },
  {
    original: "/pictures/gallery/14.png",
    thumbnail: "/pictures/gallery/14.png",
    // description: "This is a description",
  },
];

export default class Gallery extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-[url('/pictures/nen2.svg')] bg-primary bg-cover bg-center">
          <h3 className="text-center bg-xanh text-primary sm:text-3xl text-xl font-bold sm:p-4 p-2">
            Viet80s Gallery
          </h3>
          <div className=" m-6 items-center justify-center">
            <iframe
              width="350"
              height="400"
              src="https://www.youtube-nocookie.com/embed/3vmvJyzr2GQ?si=tn0XNYY4mk42Lkxz&amp;start=3"
              title="Viet80s in a glance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* <div className="sm:hidden m-5">
            <video
              src="/video/video.mov"
              controls
              autoPlay
              playsInline
              loop
              muted
            />
          </div> */}
          <div className="sm:hidden mx-5 mt-5 pb-7">
            <ImageGallery
              items={images}
              thumbnailPosition="left"
              lazyLoad={true}
              autoPlay={true}
              showThumbnails={true}
              showNav={false}
              showFullscreenButton={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

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
      <ImageGallery
        items={images}
        thumbnailPosition="bottom"
        lazyLoad={true}
        autoPlay={true}
      />
    );
  }
}

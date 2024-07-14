"use client";

import Card from "./Card";
import styles from "./Gallery.module.scss";
import { fetchImages } from "./fetchImages";

const images = [
  {
    id: 1,
    imageUrl: "/images/image1.jpg",
    title: "Image 1",
    description: "Description for Image 1",
  },
  {
    id: 2,
    imageUrl: "/images/image2.jpg",
    title: "Image 2",
    description: "Description for Image 2",
  },
  // 추가 이미지 객체들...
];

function ImageGallery() {
  const imageUrls = fetchImages();
  console.log(imageUrls);

  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <Card
          key={image.id}
          imageUrl={image.imageUrl}
          title={image.title}
          description={image.description}
        />
      ))}
    </div>
  );
}

export default ImageGallery;

//third section
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import styles from './ThirdSection.module.css';
import styles from './thirdsection.module.css';


// Array of image paths used for background images in the slider
const images = [
  "/image/image2.svg",
  "/image/image2.svg",
  "/image/image2.svg",
  "/image/image2.svg"
];

export default function ThirdSection() {
  // useState hook to manage the current image index in the slider
  const [currentImage, setCurrentImage] = useState(0);
  // Function to handle image slide change by setting the current image index
  const handleSlide = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <section
      className={styles.imageContainer}
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      {/* Container for text and button */}
      <div className={styles.textContainer}>
        <p>
           Receive guaranteed{' '}
          <Link href="#" target="_blank">
            <button className={styles.greenButton}>GIFT VOUCHER</button>
          </Link>
          <br />
          on a monthly hire or lease
        </p>
      </div>

      <div className={styles.circleContainer}>
        {images.map((_, index) => (
           // Button for each image in the slider, changes the current image when clicked
          <button
            key={index}
            className={`${styles.circle} ${
              currentImage === index ? styles.active : ''
            }`}
            onClick={() => handleSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}

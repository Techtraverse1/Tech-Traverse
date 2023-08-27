"use client";
import { React, useState, useEffect } from "react";
import styles from "../componenet.module.css";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.carouselSlide} ${
            index === currentSlide ? styles.active : ""
          }`}
        >
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;

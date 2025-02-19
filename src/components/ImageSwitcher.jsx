import React, { useState, useEffect } from "react";
import image1 from "../assets/Arduino3.png";
import image2 from "../assets/Router3.png";
import image3 from "../assets/Laser3.png";
import image4 from "../assets/Ultimaker3.png";

const ImageSwitcher = () => {
  const images = [image1, image2, image3, image4];

  const names = [
    "Arduino UNO",
    "HMT CNC Router Machine",
    "Epilog Laser Engraver",
    "Ultimaker 2+",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <div className="image-container">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="carousel-image"
        />
        <p className="image-label">{names[currentImageIndex]}</p>
      </div>
    </>
  );
};

export default ImageSwitcher;

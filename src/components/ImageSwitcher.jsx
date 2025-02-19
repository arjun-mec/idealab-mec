import React, { useState, useEffect } from "react";

const ImageSwitcher = () => {
  const images = [
    "src/assets/Arduino3.png",
    "src/assets/Router3.png",
    "src/assets/Laser3.png",
    "src/assets/Ultimaker3.png",
  ];

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

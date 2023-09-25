import React from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              currentIndex === index ? "active" : ""
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div className="carousel-indicators">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-indicator ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

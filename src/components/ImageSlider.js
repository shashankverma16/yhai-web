import React, { useState } from 'react';
import './ImageSlider.css'; // Make sure to add your styles here

const images = [
  {src: 'https://img.veenaworld.com/wp-content/uploads/2021/08/Hiking-vs-Trekking-Heres-What-You-Need-to-Know.jpg',  description: 'Description for Image 1' },
  {src: 'https://cdn.forevervacation.com/uploads/blog/what-a-trip-trekking-the-himalayas-actually-looks-like-the-vacationer-by-forevervacation-3451.jpeg',  description: 'Description for Image 2' },
  {src: 'https://www.kreedon.in/wp-content/uploads/2023/10/1507736679_0Ebd6BFOVclq82L.jpeg', description: 'Description for Image 3' }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler to go to the previous slide
  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Handler to go to the next slide
  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Handler to go to a specific slide (when clicking on dots)
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      {/* Previous Button */}
      <div className="prev-arrow" onClick={prevSlide}>
        &#10094;
      </div>

      {/* Image Slider */}
      <div className="slide" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
        <div className="description">{images[currentIndex].description}</div>
      </div>

      {/* Next Button */}
      <div className="next-arrow" onClick={nextSlide}>
        &#10095;
      </div>

      {/* Navigation Dots */}
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

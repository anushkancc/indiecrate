import React, { useState } from "react";
import "../css/AboutPage.css";

const images = [
  "https://plus.unsplash.com/premium_photo-1679811675652-2302bf23c9f2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171",
  "https://plus.unsplash.com/premium_photo-1732834279627-aae8309bb37a?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  "https://plus.unsplash.com/premium_photo-1679811673491-18b886de424c?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  "https://plus.unsplash.com/premium_photo-1679852311462-733ae167dbc3?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
];

const AboutGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="about-gallery-section">
      <h2 className="gallery-heading">✨ A Glimpse of Our Creations</h2>
      <div className="about-gallery">
        <button className="gallery-btn left" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Artisan work" />
        <button className="gallery-btn right" onClick={nextImage}>❯</button>
      </div>
    </section>
  );
};

export default AboutGallery;

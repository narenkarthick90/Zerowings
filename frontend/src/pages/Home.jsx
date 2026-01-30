import { useState } from "react";
import droneImage from "../assets/images/drone1.png";
import background1 from "../assets/images/background1.png";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "DJI Mini 3 Pro",
      description:
        "Lightweight and powerful, perfect for beginners and professionals",
      image: droneImage,
      background: background1,
    },
    {
      id: 2,
      name: "DJI Air 2S",
      description: "Advanced features for demanding creative projects",
      image: droneImage,
      background: background1,
    },
    {
      id: 3,
      name: "DJI Mavic 3",
      description: "Ultimate cinematic drone with exceptional capabilities",
      image: droneImage,
      background: background1,
    },
    {
      id: 4,
      name: "DJI Avata 2",
      description: "Immersive FPV racing experience with low-light vision",
      image: droneImage,
      background: background1,
    },
    {
      id: 5,
      name: "DJI Phantom 4 Pro V2",
      description: "Enterprise-grade drone for commercial applications",
      image: droneImage,
      background: background1,
    },
    {
      id: 6,
      name: "DJI Neo",
      description: "Ultra-compact entry-level drone for everyone",
      image: droneImage,
      background: background1,
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="home-container">
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${currentProduct.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-background">DRONE</div>
        <div className="hero-content">
          <div className="drone-image">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="drone-placeholder"
            />
          </div>
          <h1 className="product-title">{currentProduct.name.toUpperCase()}</h1>
          <p className="product-description">{currentProduct.description}</p>
          <button className="buy-button">BUY NOW</button>
        </div>

        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={goToPrevious}
        >
          ❮
        </button>
        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={goToNext}
        >
          ❯
        </button>

        <div className="carousel-indicators">
          {products.map((_, index) => (
            <div
              key={index}
              className={`indicator-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

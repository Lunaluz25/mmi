import React, { useEffect, useState } from "react";
import "../CSS/Carrousel.css";

const images = [
  new URL("../assets/001.jpg", import.meta.url).href,
  new URL("../assets/002.jpg", import.meta.url).href,
  new URL("../assets/003.jpeg", import.meta.url).href,
  new URL("../assets/004.jpeg", import.meta.url).href,
  new URL("../assets/005.jpeg", import.meta.url).href,

];

const Carrousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []); // <- cerrar useEffect con el array de dependencias

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        {images.map((src, i) => (
          <div key={i} className={`carousel-slide ${i === index ? "active" : ""}`}>
            <img src={src} alt={`logo-${i}`} />
          </div>
        ))}
      </div>
    </section>
  );
}; // <- cerrar la función Carrousel

export default Carrousel;
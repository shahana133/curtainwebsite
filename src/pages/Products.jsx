import React, { useState, useEffect } from "react";
import "../styles/products.css";

// CURTAINS
import venetian from "../assets/curtains/venetian.jpg";
import pvc from "../assets/curtains/pvc.jpg";
import modernCloth from "../assets/curtains/modern.jpg";
import roman from "../assets/curtains/roman.jpg";
import zebra from "../assets/curtains/zebra.jpg";
import blackout from "../assets/curtains/blackout.jpg";
import vertical from "../assets/curtains/vertical.jpg";
import triple from "../assets/curtains/triple.jpg";

// SLIDES
import slide4 from "../assets/slides/slide4.jpg";
import slide5 from "../assets/slides/slide5.jpg";
import slide6 from "../assets/slides/slide6.jpg";
import slide7 from "../assets/slides/slide7.jpg";
import slide8 from "../assets/slides/slide8.jpg";

function Products() {
  const slides = [slide4, slide5, slide6, slide7, slide8];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const productList = [
    { name: "Triple Curtains", image: triple, description: "Luxury layered curtain design." },
    { name: "Venetian Blinds", image: venetian, description: "Perfect light control blinds." },
    { name: "PVC Blinds", image: pvc, description: "Durable & waterproof blinds." },
    { name: "Modern Cloth Curtains", image: modernCloth, description: "Elegant fabric style." },
    { name: "Roman Blinds", image: roman, description: "Classic fold design curtains." },
    { name: "Zebra Blinds", image: zebra, description: "Dual-layer modern blinds." },
    { name: "Blackout Curtains", image: blackout, description: "Full privacy & darkness." },
    { name: "Vertical Blinds", image: vertical, description: "Perfect for large windows." },
  ];

  return (
    <div>

      {/* HERO SLIDER */}
      <section className="products-hero">

        <div className="slider-wrapper">
          {slides.map((img, index) => (
            <div
              key={index}
              className={`slide-img ${index === current ? "active" : ""}`}
            >
              <img src={img} alt="slide" />
            </div>
          ))}
        </div>

        <div className="hero-overlay">
          <h1 className="hero-title">Premium Curtain Collection</h1>
          <p className="hero-subtitle">Elegant • Modern • Luxury</p>
        </div>

      </section>

      {/* PRODUCTS GRID */}
      <section className="products">

        <h2 className="section-title">Our Products</h2>

        <div className="products-grid">
          {productList.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}

export default Products;
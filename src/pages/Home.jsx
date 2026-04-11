import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

// Hero slides
import slide1 from "../assets/slides/slide1.jpg";
import slide2 from "../assets/slides/slide2.jpg";
import slide3 from "../assets/slides/slide3.jpg";

// Curtain images
import venetian from "../assets/curtains/venetian.jpg";
import pvc from "../assets/curtains/pvc.jpg";
import modern from "../assets/curtains/modern.jpg";
import zebra from "../assets/curtains/zebra.jpg";
import blackout from "../assets/curtains/blackout.jpg";
import roman from "../assets/curtains/roman.jpg";
import vertical from "../assets/curtains/vertical.jpg";
import triple from "../assets/curtains/triple.jpg";

function Home() {
  const slides = [slide1, slide2, slide3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Main content wrapped in flex-grow container */}
      <div className="main-content">
        {/* HERO SECTION */}
        <section className="hero">
          <img src={slides[current]} alt="Curtains" className="hero-slide" />
          <div className="hero-text">
            <h1>Curtain World</h1>
            <p>"a world of beauty inside the window"</p>
            <p>Premium Curtains & Blinds for Modern Interiors</p>
            <Link to="/products">
              <button className="hero-btn">Explore Collection</button>
            </Link>
          </div>
        </section>

        {/* CURTAIN COLLECTIONS */}
        <section className="categories">
          <h2>Our Curtain Collections</h2>
          <div className="category-grid">
            <div className="category-card">
              <img src={venetian} alt="Venetian Blinds" />
              <h3>Venetian Blinds</h3>
              <p>Classic horizontal slats for perfect light control.</p>
            </div>
            <div className="category-card">
              <img src={pvc} alt="PVC Blinds" />
              <h3>PVC Blinds</h3>
              <p>Durable waterproof blinds ideal for kitchens.</p>
            </div>
            <div className="category-card">
              <img src={modern} alt="Modern Curtains" />
              <h3>Modern Cloth Curtains</h3>
              <p>Stylish fabric curtains for elegant interiors.</p>
            </div>
            <div className="category-card">
              <img src={zebra} alt="Zebra Blinds" />
              <h3>Zebra Blinds</h3>
              <p>Dual layer blinds combining style and function.</p>
            </div>
             <div className="category-card">
              <img src={triple} alt="Triple Curtains" />
              <h3> Triple Curtains</h3>
              <p>Stylish fabric curtains for elegant interiors.</p>
            </div>
            <div className="category-card">
              <img src={blackout} alt="Blackout Curtains" />
              <h3>Blackout Curtains</h3>
              <p>Perfect sunlight blocking and privacy.</p>
            </div>
            <div className="category-card">
              <img src={roman} alt="Roman Curtains" />
              <h3>Roman Curtains</h3>
              <p>Luxury folded fabric curtains for modern homes.</p>
            </div>
            <div className="category-card">
              <img src={vertical} alt="Vertical Blinds" />
              <h3>Vertical Blinds</h3>
              <p>premium folded fabric curtains for modern homes.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why">
          <h2>Why Choose Curtain World</h2>
          <div className="why-grid">
            <div className="why-card">
              <h3>Premium Quality</h3>
              <p>High quality fabrics and durable materials.</p>
            </div>
            <div className="why-card">
              <h3>Modern Designs</h3>
              <p>Latest curtain trends for stylish homes.</p>
            </div>
            <div className="why-card">
              <h3>Expert Installation</h3>
              <p>Professional installation services available.</p>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="gallery">
          <h2>Our Curtain Designs</h2>
          <div className="gallery-grid">
            <img src={venetian} />
            <img src={pvc} />
            <img src={modern} />
            <img src={zebra} />
            <img src={blackout} />
            <img src={roman} />
            <img src={vertical} />
            <img src={triple} />
          </div>
        </section>
      </div>

      {/* Footer */}
      {/* <Footer /> */}

      {/* WhatsApp Floating Button */}
      <WhatsappButton />
    </div>
  );
}

export default Home;
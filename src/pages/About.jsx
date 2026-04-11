// src/pages/About.jsx
import React from "react";
import "../styles/home.css";
import founderImg from "../assets/curtains/founder.jpeg";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>Curtain World</h1>
        <p className="since-text">Serving with excellence since 1986</p>
        <p>Transforming spaces with elegance and premium curtain solutions</p>
      </section>

      {/* ABOUT INTRO */}
      <section className="about-intro">
        <div className="about-intro-text">
          <h2>Who We Are</h2>
          <p>
            Curtain World is a trusted name in premium curtains and blinds,
            delivering elegant interior solutions for homes and offices.
          </p>
          <p>
            With decades of experience, we combine quality craftsmanship with
            modern designs to create spaces that reflect comfort and style.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="about-founder">
        <div className="founder-content">
          <img src={founderImg} alt="Muhammad Iqbal" />
          <div className="founder-text">
            <h2>Muhammad Iqbal</h2>
            <h4>Founder & Visionary</h4>
            <p>
              Founded in 1986, Curtain World began with a vision to provide
              high-quality and stylish curtain solutions.
            </p>
            <p>
              With over 40 years of experience, Muhammad Iqbal has built a
              trusted brand known for quality, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="stats-grid">
          <div className="stat-card">
            <h2>1000+</h2>
            <p>Happy Customers</p>
          </div>
          <div className="stat-card">
            <h2>500+</h2>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h2>40+</h2>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="mission-grid">
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>
              To deliver premium curtains that enhance comfort, beauty,
              and functionality in every space.
            </p>
          </div>
          <div className="mission-card">
            <h3>Our Vision</h3>
            <p>
              To be a leading brand recognized for excellence,
              innovation, and long-lasting quality.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
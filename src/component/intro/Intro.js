import React from 'react';
import './Intro.css';
 
 const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="intro-text">Hi, my name is</p>
        <h1 className="hero-title">
          Ashutosh Kumar Singh
        </h1>
        <h2 className="hero-subtitle">
          I craft clean, responsive, and user-friendly websites.
        </h2>
        <p className="hero-description">
          I'm a Frontend Developer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently, I'm focused on building responsive web applications using <strong>React.js</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>.
          Explore my projects below to see my work!
        </p>
        <a href="https://www.linkedin.com/in/ashutosh-kumar-singh-089091239/" className="hero-button">View My Profile 🚀</a>
      </div>
    </section>
  );
};

export default HeroSection;

// src/HeroSection.js
import React from 'react';
import './HeroSection.scss';
import Header from './Header';


const HeroSection = () => {
  return (
    <div className="hero-section">
     
     <Header/>

      {/* Hero Content */}
      <section className="hero-content">
        <h1 className="hero-title">Buy and sell domains with no capital!</h1>
        <p className="hero-subtitle">
          Resellme allows you to buy and sell domains keeping the profits, all in under 5 minutes.
        </p>
        <div className="hero-buttons">
          <button className="btn primary">Sign Up For Free</button>
          <button className="btn secondary">Read About Us</button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

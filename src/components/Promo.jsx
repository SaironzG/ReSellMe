import React from 'react';
import './Promo.scss';
import girl from '../assets/imgs/girl.png'; // Ensure you have the correct path to your image

const Promo = () => {
  return (
    <div className="promo-container">
      <div className="promo-image">
        <img src={girl} alt="Promotional" />
      </div>
      <div className="promo-content">
        <h2>Wait, What?</h2>
        <p>
          Resellme allows you to purchase domains through our platform without paying money upfront. All you need to do is have a client who will pay for the domain, and you get to keep the profit deducted from the domain purchase price!
        </p>
        <p>
          Buying domains through the platform is <strong>SUPER CHEAP</strong>.
        </p>
        <button className="promo-button">Read More</button>
      </div>
    </div>
  );
};

export default Promo;

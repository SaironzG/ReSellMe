import React, { useState } from 'react';
import './Featured.scss';
import techzim from "../assets/imgs/techzim.png";
import techmac from "../assets/imgs/techmac.png";
import econet from "../assets/imgs/econet.png";
import netone from "../assets/imgs/netone.png";
import cassava from "../assets/imgs/cassava.png";
import eightfive from "../assets/imgs/eightfive.png";
import chat from "../assets/imgs/263chat.png";
import scopic from "../assets/imgs/scopic.png";


const Featured = () => {
  const logos = [
    { id: 1, name: 'TechZim', image: techzim },
    { id: 2, name: 'TechnoMag', image: techmac },
    { id: 3, name: 'Econet', image: econet },
    { id: 4, name: 'NetOne', image: netone},
    { id: 5, name: 'cassava', image: cassava },
    { id: 6, name: 'scopic', image: scopic },
    { id: 7, name: 'eightfive', image: eightfive },
    { id: 8, name: '263chat', image: chat},
 
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? logos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex === logos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="featured">
      <h2>We've Been Featured In</h2>
      <div className="carousel">
              <div className="carousel-logos">
          {logos.slice(startIndex, startIndex + 3).map(logo => (
            <div key={logo.id} className="logo">
              <img src={logo.image} alt={logo.name} />
            </div>
          ))}
        </div>

      </div>
      <button onClick={handlePrev} className="arrow-btn left">←</button>
      <button onClick={handleNext} className="arrow-btn right">→</button>
    </div>
  );
}

export default Featured;
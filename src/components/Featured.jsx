import React, { useState } from 'react';
import './Featured.scss';

const Featured = () => {
  const logos = [
    { id: 1, name: 'TechZim', image: 'https://via.placeholder.com/150?text=TechZim' },
    { id: 2, name: 'TechnoMag', image: 'https://via.placeholder.com/150?text=TechnoMag' },
    { id: 3, name: 'Econet', image: 'https://via.placeholder.com/150?text=Econet' },
    { id: 4, name: 'NetOne', image: 'https://via.placeholder.com/150?text=NetOne' },
    { id: 5, name: 'ZOL', image: 'https://via.placeholder.com/150?text=ZOL' },
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
        <button onClick={handlePrev} className="arrow-btn">←</button>
        <div className="carousel-logos">
          {logos.slice(startIndex, startIndex + 3).map(logo => (
            <div key={logo.id} className="logo">
              <img src={logo.image} alt={logo.name} />
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="arrow-btn">→</button>
      </div>
    </div>
  );
}

export default Featured;
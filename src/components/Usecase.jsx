import React, { useState } from 'react';
import './UseCases.scss';
import freelancer from '../assets/imgs/freelancer.png';
import house from '../assets/imgs/house.png';
import register from '../assets/imgs/compnay-registry.png';
import agencies from '../assets/imgs/agencies.png';

const UseCases = () => {
  const useCases = [
    {
      id: 1,
      title: 'Web Development Freelancers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: freelancer,
    },
    {
      id: 2,
      title: 'Small Housing & Domain Registration Companies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: house,
    },
    {
      id: 3,
      title: 'Company Registries',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: register,
    },
    {
      id: 4,
      title: 'Small Digital Agencies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: agencies,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % useCases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + useCases.length) % useCases.length);
  };

  return (
    <div className="use-cases">
      <h2>Resellme's Use Cases</h2>
      <div className="carousel">
        <button onClick={prevSlide} className="carousel-control left">❮</button>
        <div className="cases" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
          {useCases.map((useCase, index) => (
            <div key={useCase.id} className={`case ${index === currentIndex ? 'active' : ''}`}>
              <div className="pic">
                <img src={useCase.image} alt={useCase.title} className="case-image" />
              </div>
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="carousel-control right">❯</button>

      </div>
    </div>
  );
}

export default UseCases;
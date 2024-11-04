import React from 'react';
import './UseCases.scss';
import freelancer from '../assets/imgs/Web Development Freelancers.png';
import house from '../assets/imgs/house.png';
import register from '../assets/imgs/Register.png';
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

  return (
    <div className="use-cases">
      <h2>Resellme's Use Cases</h2>
      <div className="cases">
        {useCases.map(useCase => (
          <div key={useCase.id} className="case">
            <div className="pic">         <img src={useCase.image} alt={useCase.title} className="case-image" /></div>

            <h3>{useCase.title}</h3>
            <p>{useCase.description}</p>
            <button className="read-more-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseCases;
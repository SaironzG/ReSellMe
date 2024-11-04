import React from 'react';
import './HowToGetStarted.scss';
import client from '../assets/imgs/person-svgrepo-com (1) 1.png';
import register from '../assets/imgs/register (2).png';
import money from '../assets/imgs/money.png';

const HowToGetStarted = () => {
  const steps = [
    {
      id: 1,
      title: 'Register',
      description: 'To get started with buying domains for clients, all you need to do is create an account on our platform using your email, phone number & preferred payment method.',
      image: register, // Directly assign the image
    },
    {
      id: 2,
      title: 'Find Client',
      description: 'Find a client who can be a business owner or a freelancer who wants a website but does not have a domain. You take lead to buy the desired domain via ReSellMe for the client upfront.',
      image: client, // Directly assign the image
    },
    {
      id: 3,
      title: 'Get Money!',
      description: 'You only pay when you get a client to sell the service to. Your client pays for the service and you keep the profit. Our payment methods include Paypal, Visa, MasterCard, Bitcoin & Mukuru.',
      image: money, // Directly assign the image
    },
  ];

  return (
    <div className="how-to-get-started">
      <h2>How To Get Started</h2>
      <div className="steps">
        {steps.map(step => (
          <div key={step.id} className="step">
            <div className="icon">
              <img src={step.image} alt={step.title} /> {/* Display the image */}
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      <button className="get-started-btn">Get Started</button>
    </div>
  );
}

export default HowToGetStarted;
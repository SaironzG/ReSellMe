import React from 'react';
import './Feature.scss';
import purchase from '../assets/imgs/purchase.png'; 
import payout from '../assets/imgs/payout.png'; 
import commitment from '../assets/imgs/commitment.png'; 
import automation from '../assets/imgs/automation.png'; 

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Best Purchase Rates',
      description: 'You might think, with the service type, we would charge a lot for domain purchase. But no, our domains are actually quite cheap as compared to our competitors.',
      image: purchase,
    },
    {
      id: 2,
      title: 'Instant Payouts',
      description: 'USD payout for every client you get to purchase a domain. We don’t ask you to get to 50 clients to get a payout, it’s 2022 after all, who has all the time right?',
      image: payout,
    },
    {
      id: 3,
      title: 'No Monthly Commitments',
      description: 'As long as you have an account, you only can use the platform when you get a client to sell the service to. Your client pays for the service and you keep the profit.',
      image: commitment,
    },
    {
      id: 4,
      title: 'Business Automation',
      description: 'Place your business on autopilot by making use of our plugins. Head over to our plugins & integrations panel to get started.',
      image: automation,
    },
  ];

  return (
    <div className="features">
      <div className="intro">
        <h2>Resellme's Features</h2>
        <p>The Resellme platform has a wide range of features which make it stand out from all competitors. Here we have just a few of those.</p>
      </div>
      <div className="feature-list">
        {features.map(feature => (
          <div key={feature.id} className="feature">

            <div className="icon">
              <img src={feature.image} alt={feature.title} /> {/* Render the image */}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
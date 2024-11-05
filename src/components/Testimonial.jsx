import React, { useState } from 'react';
import './Testimonials.scss';
import jane from "../assets/imgs/jane.png";
import mike from "../assets/imgs/mike.png";
import john from "../assets/imgs/john.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jane Doe',
      company: 'Company Name',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: jane,
    },
    {
      id: 2,
      name: 'John Doe',
      company: 'Company Name',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: john,
    },
    {
      id: 3,
      name: 'Mike Doe',
      company: 'Company Name',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: mike,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="testimonials">
      <div className="intro">
        <h2>Client Testimonials</h2>
        <p>We value client feedback to help keep making revisions to our product to give more value to the end user. These are some of the awesome reviews we got from some of our clients.</p>
        <div className="navigation">
          <button onClick={handlePrev}>&larr;</button>
          <button onClick={handleNext}>&rarr;</button>
        </div>
      </div>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={testimonial.image} alt={testimonial.name} />
            <div className="testimonial-content">
              <blockquote>{testimonial.feedback}</blockquote>
              <p><strong>{testimonial.name}</strong><br />{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
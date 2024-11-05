import React, { useState } from 'react';
import './FAQ.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const questions = [
    {
      id: 1,
      question: 'What Do I Need To Get Started?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: 2,
      question: 'How Do I Get Paid After Referring A Client?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: 3,
      question: 'How Many People Can I Refer In A Day?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: 4,
      question: 'Do I Need A Visa Card To Get Paid?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: 5,
      question: 'Can I Refer People To Resellme For Commission?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="intro">
        <h2>Frequently Asked Questions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className="questions">
        {questions.map((item, index) => (
          <div key={item.id} className="question">
            <div className="question-title" onClick={() => toggleAccordion(index)}>
              {item.question}
              <span>
  <FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown} />
</span>
            </div>
            {openIndex === index && <div className="question-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
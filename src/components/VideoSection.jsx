// src/VideoSection.js
import React, { useState } from 'react';
import './VideoSection.scss';
import { FaPlay } from 'react-icons/fa';
import laptop from "../assets/imgs/laptop.png"

const VideoSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-frame" onClick={toggleModal}>
          <img 
            src={laptop}
            alt="MacBook frame with video" 
            className="video-thumbnail" 
          />
          <button className="play-button">
            <FaPlay />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example URL
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;

import React, { useEffect, useState } from 'react';

import image from '../../../assets/coder.png';
import SocialContact from '../../common/social-contact';
import './about.css';

const About = () => {
  const [text, setText] = useState('');
  const fullText = 'Hello there 👋, I am a';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="about">
      <div className="about-background">
        <div className="about-gradient"></div>
      </div>
      <div className="about-content">
        <div className="about-top">
          <div className="about-info">
            <div className="about-greeting">
              <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </div>
            <div className="about-name-container">
              <span className="about-name">Builder</span>
              <div className="name-underline"></div>
            </div>
            <div className="about-description">
              who love building solutions & working with tech.
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
          <div className="about-photo">
            <div className="photo-container">
              <img src={image} alt="coder" className="abt-pic" />
              <div className="photo-overlay"></div>
              <div className="photo-border"></div>
            </div>
          </div>
        </div>
        <div className="about-bottom">
          <SocialContact />
        </div>
      </div>
    </div>
  );
};

export default About;

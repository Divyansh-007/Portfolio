import React from 'react';
import './web.css';

const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#work">
          <i className="fas fa-briefcase option-icon"></i>Work
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i className="fas fa-laptop-code option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#packages">
          <i className="fab fa-npm option-icon"></i>Packages
        </a>
      </div>
      <div className="web-option">
        <a href="#certificates">
          <i className="fas fa-check-double option-icon"></i>Certificates
        </a>
      </div>
      {/* <div className="web-option">
        <a href="#projects">
          <i class="fas fa-pencil-ruler option-icon"></i>Projects
        </a>
      </div> */}
      <div className="web-option">
        <a href="#contact">
          <i className="fas fa-envelope option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
};

export default Web;

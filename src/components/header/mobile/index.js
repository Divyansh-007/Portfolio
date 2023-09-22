import React from "react";
import "./mobile.css";

const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div
        className="close-icon"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <i class="far fa-times-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mob-option">
          <a href="#work">
            <i class="fas fa-briefcase option-icon"></i>Work
          </a>
        </div>
        <div className="mob-option">
          <a href="#skills">
            <i class="fas fa-laptop-code option-icon"></i>Skills
          </a>
        </div>
        <div className="mob-option">
          <a href="#certificates">
            <i class="fas fa-check-double option-icon"></i>Certificates
          </a>
        </div>
        <div className="mob-option">
          <a href="#projects">
            <i class="fas fa-pencil-ruler option-icon"></i>Projects
          </a>
        </div>
        <div className="mob-option">
          <a href="#contact">
            <i class="fas fa-envelope option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;

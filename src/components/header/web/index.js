import React from "react";
import "./web.css";

const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#work">
          <i class="fas fa-briefcase option-icon"></i>Work
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fas fa-laptop-code option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#certificates">
          <i class="fas fa-check-double option-icon"></i>Certificates
        </a>
      </div>
      <div className="web-option">
        <a href="#projects">
          <i class="fas fa-pencil-ruler option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fas fa-envelope option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
};

export default Web;

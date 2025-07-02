import React, { useState } from "react";
import "./skill-card.css";

const SkillCard = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  // Use proficiency from skill (1-10), convert to percent
  const proficiency = skill.proficiency ? skill.proficiency * 10 : 0;

  return (
    <div
      className={`skill-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="skill-card-content">
        <div className="skill-icon-container">
          <div className="skill-icon">{skill.icon}</div>
          <div className="skill-glow"></div>
        </div>
        <div className="skill-info">
          <label className="skill-name">{skill.name}</label>
          <div className="skill-progress">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${proficiency}%` }}
              ></div>
            </div>
            <span className="proficiency-text">{proficiency}%</span>
          </div>
        </div>
        <div className="skill-overlay">
          <div className="overlay-content">
            <span className="overlay-text">Proficiency Level</span>
            <span className="overlay-percentage">{proficiency}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

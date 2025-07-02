import React from "react";
import "./work-card.css";

const WorkCard = ({ work, location }) => {
  return (
    <div className="work-card">
      <div className="work-card-header">
        <div className="work-title-section">
          <h3 className="work-title">{work.designation}</h3>
          <div className="work-badge">
            <i className="fas fa-briefcase"></i>
            <span>Full-time</span>
          </div>
        </div>
        <div className="work-meta">
          <div className="work-dates">
            <i className="fas fa-calendar-alt"></i>
            <span>
              {work.joinDate} - {work.endDate ? work.endDate : "Present"}
            </span>
          </div>
          <div className="work-location">
            <i className="fas fa-map-marker-alt"></i>
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="work-content">
        <div className="work-desc">
          <ul>
            {work.description.map((point, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>
      </div>
      <div className="work-card-footer">
        <div className="work-tags">
          <span className="tag">Development</span>
          <span className="tag">Team Lead</span>
          <span className="tag">Agile</span>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

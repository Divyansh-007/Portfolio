import React from "react";
import "./work-card.css";

const WorkCard = ({ work, location }) => {
  return (
    <div className="work-card">
      <div className="work-info">
        <label className="company-name">
          <b>{work.designation}</b>
        </label>
        <div className="work-dates">
          {work.joinDate} - {work.endDate ? work.endDate : "Present"} |{" "}
          {location}
        </div>
        <div className="work-desc">
          <ul>
            {work.description.map((point, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

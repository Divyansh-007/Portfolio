import React from "react";
import "./work-card.css";

const WorkCard = ({ work }) => {
  return (
    <div className="work-card">
      <img src={work.companyLogo} alt={work.company} className="work-logo" />
      <div className="work-info">
        <label className="company-name">
          <b>{work.designation}</b>, {work.company}
        </label>
        <div className="work-dates">
          {work.joinDate} - {work.endDate ? work.endDate : "Present"} |{" "}
          {work.location}
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

import React from "react";
import "./work-card.css";

const WorkCard = ({ work }) => {
  return (
    <div className="work-card">
      <img src={work.companyLogo} className="work-logo" />
      <div className="work-info">
        <label className="company-name"><b>{work.designation}</b>, {work.company}</label>
        <div className="work-dates">
          {work.joinDate} - {work.endDate} | {work.location}
        </div>
        <div className="work-desc">
          <p>{work.work}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

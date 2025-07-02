import React from "react";
import LicenseCard from "./license-card";
import "./license-group.css";

const LicenseGroup = ({ group }) => {
  return (
    <div className="license-group">
      <div className="group-header">
        <h3 className="group-title">{group.groupTitle}</h3>
        <p className="group-description">{group.groupDescription}</p>
      </div>
      <div className="group-licenses">
        {group.licenses.map((license) => {
          return <LicenseCard license={license} key={license.id} />;
        })}
      </div>
    </div>
  );
};

export default LicenseGroup;

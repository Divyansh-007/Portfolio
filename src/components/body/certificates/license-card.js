import React from "react";
import "./license-card.css";

const LicenseCard = ({ license }) => {
  return (
    <div className="license-card">
      <div className="license-info">
        <label className="license-title">{license.title}</label>
        <div className="license-links">
          {license.credentialUrl && (
            <a
              href={license.credentialUrl}
              target="_blank"
              className="license-link"
              key={`$license.id$_credential`}
            >
              <div className="link-button">
                <i class="fas fa-globe"></i>See Credential
              </div>
            </a>
          )}
        </div>
        <p className="license-about">{license.about}</p>
        <div className="license-tags">
          {license.tags.map((tag, index) => {
            return (
              <label className="tag" key={index}>
                {tag}
              </label>
            );
          })}
        </div>
      </div>
      <img src={license.image} className="license-image" />
    </div>
  );
};

export default LicenseCard;

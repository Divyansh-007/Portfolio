import React, { useState } from 'react';
import './license-card.css';

const LicenseCard = ({ license }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`license-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="license-card-content">
        <div className="license-header">
          <div className="license-image-container">
            <img
              src={license.image}
              className="license-image"
              alt={license.title}
            />
            <div className="image-overlay"></div>
          </div>
          <div className="license-badge">
            <i className="fas fa-certificate"></i>
            <span>Certified</span>
          </div>
        </div>

        <div className="license-body">
          <div className="license-title-section">
            <h3 className="license-title-name">{license.title}</h3>
            <p className="license-title-provider">{license.provider}</p>
          </div>

          <p className="license-about">{license.about}</p>

          <div className="license-tags">
            {license.tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="license-footer">
          {license.credentialUrl && (
            <a
              href={license.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="license-link"
            >
              <div className="link-button">
                <i className="fas fa-external-link-alt"></i>
                <span>View Credential</span>
              </div>
            </a>
          )}
        </div>
      </div>

      <div className="license-card-background">
        <div className="background-gradient"></div>
      </div>
    </div>
  );
};

export default LicenseCard;

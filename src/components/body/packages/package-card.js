import React from "react";
import "./package-card.css";

const PackageCard = ({ package: pkg }) => {
  const formatDate = (dateString) => {
    if (dateString === "Unknown") return "Unknown";
    return new Date(dateString).toLocaleDateString();
  };

  const getNpmUrl = (packageName) => {
    return `https://www.npmjs.com/package/${packageName}`;
  };

  const getGitHubUrl = (repositoryUrl) => {
    if (!repositoryUrl) return null;
    // Convert git+https://github.com/user/repo.git to https://github.com/user/repo
    return repositoryUrl.replace(/^git\+/, "").replace(/\.git$/, "");
  };

  return (
    <div className="package-card">
      <div className="package-header">
        <div className="package-title-section">
          <h3 className="package-name">{pkg.name}</h3>
          <span className="package-version">v{pkg.version}</span>
        </div>
        <div className="package-stats">
          <div className="stat">
            <i className="fas fa-download"></i>
            <span>{pkg.downloads.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <p className="package-description">{pkg.description}</p>

      <div className="package-meta">
        <div className="meta-item">
          <i className="fas fa-balance-scale"></i>
          <span>{pkg.license}</span>
        </div>
        <div className="meta-item">
          <i className="fas fa-calendar-alt"></i>
          <span>{formatDate(pkg.lastModified)}</span>
        </div>
      </div>

      {pkg.keywords && pkg.keywords.length > 0 && (
        <div className="package-keywords">
          {pkg.keywords.slice(0, 5).map((keyword, index) => (
            <span className="keyword" key={index}>
              {keyword}
            </span>
          ))}
        </div>
      )}

      <div className="package-links">
        <a
          href={getNpmUrl(pkg.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="package-link npm-link"
        >
          <i className="fab fa-npm"></i>
          View on NPM
        </a>

        {pkg.homepage && (
          <a
            href={pkg.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="package-link"
          >
            <i className="fas fa-globe"></i>
            Homepage
          </a>
        )}

        {getGitHubUrl(pkg.repository) && (
          <a
            href={getGitHubUrl(pkg.repository)}
            target="_blank"
            rel="noopener noreferrer"
            className="package-link"
          >
            <i className="fab fa-github"></i>
            Repository
          </a>
        )}
      </div>
    </div>
  );
};

export default PackageCard;

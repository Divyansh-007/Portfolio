import './license-card.css';

const LicenseCard = ({ license }) => {
  return (
    <div className="cert-entry">
      <div className="cert-entry-header">
        <span className="cert-prefix">{'[cert] '}</span>
        <span className="cert-title">{license.title}</span>
        <span className="cert-provider">
          {' — '}
          {license.provider}
        </span>
      </div>
      <div className="cert-about">
        {'       '}
        {license.about}
      </div>
      <div className="cert-tags">
        {'       tags: '}
        {license.tags.map((tag, index) => (
          <span key={index} className="cert-tag">
            [{tag}]
          </span>
        ))}
      </div>
      {license.credentialUrl && (
        <div className="cert-link">
          {'       → '}
          <a
            href={license.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Credential
          </a>
        </div>
      )}
    </div>
  );
};

export default LicenseCard;

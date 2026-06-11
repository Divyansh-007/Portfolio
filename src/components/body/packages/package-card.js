import './package-card.css';

const PackageCard = ({ package: pkg, isLast }) => {
  const branch = isLast ? '└──' : '├──';
  const continuation = isLast ? '    ' : '│   ';

  const getNpmUrl = packageName => {
    return `https://www.npmjs.com/package/${packageName}`;
  };

  const getGitHubUrl = repositoryUrl => {
    if (!repositoryUrl) return null;
    return repositoryUrl.replace(/^git\+/, '').replace(/\.git$/, '');
  };

  return (
    <div className="package-tree-item">
      <div className="package-tree-name">
        <span className="tree-branch">{branch} </span>
        <span className="package-name">{pkg.name}</span>
        <span className="package-version">@{pkg.version}</span>
      </div>
      <div className="package-tree-detail">
        <span className="tree-continuation">{continuation}</span>
        <span className="package-meta">
          downloads: {pkg.downloads.toLocaleString()} | license: {pkg.license}
        </span>
      </div>
      <div className="package-tree-detail">
        <span className="tree-continuation">{continuation}</span>
        <span className="package-desc">"{pkg.description}"</span>
      </div>
      <div className="package-tree-detail">
        <span className="tree-continuation">{continuation}</span>
        <span className="package-links">
          {'→ '}
          <a
            href={getNpmUrl(pkg.name)}
            target="_blank"
            rel="noopener noreferrer"
          >
            npm
          </a>
          {pkg.homepage && (
            <>
              {' | '}
              <a href={pkg.homepage} target="_blank" rel="noopener noreferrer">
                homepage
              </a>
            </>
          )}
          {getGitHubUrl(pkg.repository) && (
            <>
              {' | '}
              <a
                href={getGitHubUrl(pkg.repository)}
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </>
          )}
        </span>
      </div>
      {!isLast && (
        <div className="package-tree-spacer">
          <span className="tree-continuation">{'│'}</span>
        </div>
      )}
    </div>
  );
};

export default PackageCard;

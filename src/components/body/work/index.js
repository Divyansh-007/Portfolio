import './work.css';
import { WorkData } from '../../data/workData';

import WorkCard from './work-card';

const Work = () => {
  // Calculate the duration between two dates in years and months
  const getDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months = Math.floor(
      (end.getFullYear() - start.getFullYear()) * 12 +
        end.getMonth() -
        start.getMonth() +
        1
    );
    const years = Math.floor(months / 12);
    return `${years > 0 ? `${years} years ` : ''}${months % 12} months`;
  };

  return (
    <div className="work">
      <label className="section-title">Work Experience</label>
      <div className="work-list">
        {WorkData.map((companyData, index) => {
          // Determine the earliest joinDate and latest endDate across all roles
          const startDate = companyData.roles.reduce(
            (earliest, role) =>
              new Date(role.joinDate) < new Date(earliest)
                ? role.joinDate
                : earliest,
            companyData.roles[0].joinDate
          );
          const endDate = companyData.roles.reduce(
            (latest, role) =>
              role.endDate && new Date(role.endDate) > new Date(latest)
                ? role.endDate
                : latest,
            companyData.roles[0].endDate || new Date()
          );

          const totalDuration = getDuration(startDate, endDate);

          return (
            <div key={index} className="work-group">
              {/* Company Name and Logo */}
              <div className="work-group-company">
                <img src={companyData.companyLogo} alt={companyData.company} />
                <span>{companyData.company}</span>
              </div>
              <div className="work-group-duration">
                Total Duration: {totalDuration}
              </div>

              {/* Role-specific details */}
              {companyData.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="work-entry">
                  <div className="work-entry-timeline">
                    {roleIndex > 0 && (
                      <div className="work-entry-transition">
                        <div className="work-entry-transition-line"></div>
                        <div className="work-entry-transition-dot"></div>
                      </div>
                    )}
                  </div>
                  <WorkCard work={role} location={companyData.location} />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;

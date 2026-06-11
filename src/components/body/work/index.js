import './work.css';
import { WorkData } from '../../data/workData';
import WorkCard from './work-card';

const Work = () => {
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
    return `${years > 0 ? `${years}y ` : ''}${months % 12}m`;
  };

  return (
    <div className="work">
      {WorkData.map((companyData, index) => {
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
          <div key={index} className="work-company">
            <div className="work-company-header">
              {'═══ '}
              <span className="work-company-name">{companyData.company}</span>
              {' ═══'}
              <span className="work-company-duration"> [{totalDuration}]</span>
            </div>
            {companyData.roles.map((role, roleIndex) => (
              <WorkCard
                key={roleIndex}
                work={role}
                location={companyData.location}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Work;

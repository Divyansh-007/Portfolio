import LicenseCard from './license-card';
import './license-group.css';

const LicenseGroup = ({ group }) => {
  return (
    <div className="cert-group">
      <div className="cert-group-header">
        {'# '}
        {group.groupTitle}
      </div>
      <div className="cert-group-desc">{group.groupDescription}</div>
      <div className="cert-group-list">
        {group.licenses.map(license => (
          <LicenseCard license={license} key={license.id} />
        ))}
      </div>
    </div>
  );
};

export default LicenseGroup;

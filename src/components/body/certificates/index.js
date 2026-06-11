import { GroupedLicenseData } from '../../data/certificates';
import LicenseGroup from './license-group';
import './license.css';

const Licenses = () => {
  return (
    <div className="certificates">
      {GroupedLicenseData.map(group => (
        <LicenseGroup group={group} key={group.groupTitle} />
      ))}
    </div>
  );
};

export default Licenses;

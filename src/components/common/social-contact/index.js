import { SocialData } from '../../data/socialData';
import './social-contact.css';

const SocialContact = () => {
  return (
    <div className="social-contact">
      {SocialData.map(item => (
        <a
          href={item.link}
          key={item.platform}
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          [{item.platform}]
        </a>
      ))}
    </div>
  );
};

export default SocialContact;

import React from 'react';

import { SocialData } from '../../data/socialData';
import './social-contact.css';

const SocialContact = () => {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map(item => {
        return (
          <a
            href={item.link}
            key={item.platform}
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-icon-div">
              <img
                src={item.icon}
                className="social-icon"
                alt={item.platform}
              />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialContact;

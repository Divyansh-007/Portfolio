import React, { useState } from 'react';

import ThemeToggle from '../common/theme-toggle';
import './header.css';
import Mobile from './mobile';
import Web from './web';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">Divyansh Jaiswal</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <ThemeToggle />
        <div className="mob-menu">
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <i className="fas fa-bars menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;

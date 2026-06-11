import React, { useState } from 'react';
import ThemeToggle from '../common/theme-toggle';
import './header.css';

const tabs = [
  { label: 'about', href: '#about' },
  { label: 'work', href: '#work' },
  { label: 'skills', href: '#skills' },
  { label: 'packages', href: '#packages' },
  { label: 'certs', href: '#certificates' },
  { label: 'contact', href: '#contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="terminal-nav">
      <div className="nav-tabs">
        {tabs.map(tab => (
          <a key={tab.label} href={tab.href} className="nav-tab">
            {tab.label}
          </a>
        ))}
      </div>
      <div className="nav-right">
        <ThemeToggle />
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '[x]' : '[=]'}
        </button>
      </div>
      {mobileOpen && (
        <div className="nav-mobile">
          {tabs.map(tab => (
            <a
              key={tab.label}
              href={tab.href}
              className="nav-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {'> '}
              {tab.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;

import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import './theme-toggle.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '[☀]' : '[☾]'}
    </button>
  );
};

export default ThemeToggle;

import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkMode = ({ theme, toggleTheme }) => {
  return (
    <div className='dark-mode'>
    <button className="dark-mode-toggle" onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon size='1.8rem' /> : <FaSun size='1.8rem' />}
      </button>
    </div>
  );
};

export default DarkMode;
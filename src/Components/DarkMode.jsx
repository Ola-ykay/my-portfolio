import React from 'react';
import { FaSun } from 'react-icons/fa';
import { BsMoon } from 'react-icons/bs';
const DarkMode = ({ theme, toggleTheme }) => {
  return (
    <div className='dark-mode'>
    <button className="dark-mode-toggle" onClick={toggleTheme}>
      {theme === 'light' ? <BsMoon size='1.8rem' /> : <FaSun size='1.8rem' />}
      </button>
    </div>
  );
};

export default DarkMode;
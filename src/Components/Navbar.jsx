import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { FaBars, FaTimes, FaSun } from 'react-icons/fa';
import { BsMoon } from 'react-icons/bs';
import DarkMode from '../Components/DarkMode';

const Navbar = ({theme, toggleTheme}) => {
const [navClick, setNavClick] = useState(true);

const handleToggle = () => setNavClick(!navClick);

  const closeNav = () => {
    setNavClick(true)
  }
  
  return (

    <header className={`navbar ${theme === 'dark' ? 'dark' : ''}`}>
      <div className='logo'>
        <a href='#' alt=''>
          <img src='/portf.png' alt='logo' height='40px' width='' loading='lazy' />
        </a>
      </div>




      <ul className={`nav-menu ${navClick ? "" : "click"}`}>
        <li className='nav-item'>
          <a href='#about'
            className="nav-links"
            onClick={closeNav} >
            About
          </a>
        </li>

        <li className='nav-item'>
          <a href='#skills'

            className="nav-links"
            onClick={closeNav}>
            Skills
          </a>
        </li>

        <li className='nav-item'>
          <a href='#projects'

            className="nav-links"
            onClick={closeNav}>
            Projects
          </a>
        </li>

        <li className='nav-item'>
          <a href='#contact'

            className="nav-links"
            onClick={closeNav}>
            Contact
          </a>
        </li>

      </ul>

      <div className="nav-mobile" onClick={handleToggle}>
        {navClick ? <FaBars size='1.9rem' /> : <FaTimes size='1.9rem' />}
      </div>
     <DarkMode theme={theme} toggleTheme={toggleTheme} />

    </header>


  )

}

export default Navbar;
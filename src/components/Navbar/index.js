import React, { useState } from 'react';

import { CiLight, CiDark, CiMenuBurger } from "react-icons/ci";

import './index.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <nav className={`navbar ${theme}`} style={{ position: 'sticky', top: 0, width: '100%', zIndex: 1000 }}>
      <a href="./home" className="logo">
        <img 
        src='https://clipart-library.com/newhp/kissclipart-full-funny-jokes-clipart-joke-humour-hindi-8d8ee18cee7d9ce9.png'
        alt='logo'
        />
      </a>
      <ul className={`main-nav ${isActive ? 'active' : ''}`} id="menu">
        <li>
          <a href="./" className="nav-links">Home</a>
        </li>
        <li>
          <a href="./" className="nav-links">About Us</a>
        </li>
        <li>
          <a href="./" className="nav-links">Services</a>
        </li>
        <li>
          <a href="./" className="nav-links">Contact Us</a>
        </li>
      </ul>
      <span className="nav-items">
        <span className="nav-item" id="themeButton" onClick={toggleTheme}>
          {theme === 'dark' ? <CiLight/> : <CiDark/>}
        </span>
        <span className="navbar-toggle" id="navbar-toggle" onClick={toggleMenu}>
          <CiMenuBurger/>
        </span>
      </span>
    </nav>
  );
}

export default Navbar;

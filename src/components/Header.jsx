// src/Header.js
import React, { useState } from 'react';
import './Header.scss';
import { FaQuestionCircle, FaUserPlus, FaUser, FaSearch, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/imgs/navlogo.png';
import { useDarkMode } from '../DarkModeContext';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      <div className="first">
        <div className="logo">
          <img src={logo} alt="Company Logo" className="responsive-logo" />
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#docs">Docs</a>
          <a href="#blog" >Blog</a>
          <a href="#about" >About Us</a>
        </div>
      </div>

      <div className={`header-icons ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <a href="#support"  className="icon-link"><FaQuestionCircle /> Support</a>
        <a href="#portal" className="icon-link"><FaUser /> Portal</a>
        <a href="#register" className="icon-link"><FaUserPlus /> Register</a>
        
        <div className={`search-container ${isSearchOpen ? 'open' : ''}`}>
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-btn" onClick={toggleSearch}>
            <FaSearch />
          </button>
        </div>

        <button className="theme-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        
     
      </div>
      <button className="menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
    </header>
  );
};

export default Header;

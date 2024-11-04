// src/Header.js
import React, { useState } from 'react';
import './Header.scss';
import { FaQuestionCircle, FaUserPlus, FaUser, FaSearch, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/imgs/navlogo.png';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
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
      
      <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <a href="#docs" onClick={toggleMobileMenu}>Docs</a>
        <a href="#blog" onClick={toggleMobileMenu}>Blog</a>
        <a href="#about" onClick={toggleMobileMenu}>About Us</a>
      </nav>
      </div>
      
      <div className="header-icons">
        <a href="#support" className="icon-link"><FaQuestionCircle /> Support</a>
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
        
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;

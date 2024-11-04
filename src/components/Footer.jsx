import React from 'react';
import './Footer.scss';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Libraries & Plugins</h3>
          <ul>
            <motion.li whileHover={{ x: 5 }}><a href="#">SDKs</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="#">WHMCS Plugin</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="#">WordPress Plugin</a></motion.li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Community</h3>
          <ul>
            <motion.li whileHover={{ x: 5 }}><a href="#">Facebook</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="#">Developer Forums</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="#">Twitter</a></motion.li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>More</h3>
          <ul>
            <motion.li whileHover={{ x: 5 }}><a href="#">Blog</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="#">Docs</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="#">About Us</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="#">Terms of Service</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="#">Privacy Policy</a></motion.li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2022 Resellme.</p>
      </div>
    </footer>
  );
};

export default Footer;

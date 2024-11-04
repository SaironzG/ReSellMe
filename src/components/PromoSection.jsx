import React from 'react';
import './PromoSection.scss';
import { motion } from 'framer-motion';

const PromoSection = () => {
  return (
    <div className="promo-section">
      <motion.div
        className="promo-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>You Don't Need Any Credit To Get Started</h1>
        <p>Resellme allows you to buy and sell domains keeping the profits, all in under 5 minutes.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="signup-button"
        >
          SIGN UP FOR FREE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PromoSection;

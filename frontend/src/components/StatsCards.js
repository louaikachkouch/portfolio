import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

function StatsCards() {
  return (
    <motion.div variants={itemVariants} className="stats-container">
      <div className="card stat-card stat-dark">
        <span className="stat-number">5+</span>
        <span className="stat-label">Years Experience</span>
      </div>
      <div className="card stat-card stat-primary">
        <span className="stat-number">50+</span>
        <span className="stat-label">Projects Done</span>
      </div>
    </motion.div>
  );
}

export default StatsCards;

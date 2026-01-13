import React from 'react';
import { motion } from 'framer-motion';
import { SkillsCard, DesignCard, StatsCards } from '../components';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function SkillsPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 md-p-8">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Skills & Expertise</h1>
        <p className="page-subtitle">Technologies and tools I work with</p>
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <StatsCards />
        <SkillsCard />
        <DesignCard />
      </motion.div>
    </div>
  );
}

export default SkillsPage;

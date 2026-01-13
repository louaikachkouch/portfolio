import React from 'react';
import { motion } from 'framer-motion';
import { ProjectsGrid } from '../components';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 md-p-8">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">My Projects</h1>
        <p className="page-subtitle">A showcase of my recent work and creations</p>
      </motion.div>

      <motion.div
        className="projects-page-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ProjectsGrid />
      </motion.div>
    </div>
  );
}

export default ProjectsPage;

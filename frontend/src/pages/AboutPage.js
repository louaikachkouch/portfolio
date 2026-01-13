import React from 'react';
import { motion } from 'framer-motion';
import { ProfileCard, ExperienceCard } from '../components';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 md-p-8">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">Learn more about my background and experience</p>
      </motion.div>

      <motion.div
        className="about-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ProfileCard />
        <ExperienceCard />
        
        <motion.div 
          className="about-content card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2>My Story</h2>
          <p>
            I'm a passionate developer with a love for creating beautiful and functional 
            digital experiences. My journey in technology started with curiosity and has 
            evolved into a career focused on innovation and excellence.
          </p>
          <p>
            I believe in continuous learning and staying up-to-date with the latest 
            technologies and best practices. Every project is an opportunity to grow 
            and deliver value.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutPage;

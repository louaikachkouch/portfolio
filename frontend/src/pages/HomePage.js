import React from 'react';
import { motion } from 'framer-motion';
import {
  ProfileCard,
  HeroCard,
  StatsCards,
  SkillsCard,
  DesignCard,
  ProjectsGrid,
  ExperienceCard,
  ContactCard
} from '../components';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto p-4 md-p-8">
      <motion.div
        className="grid-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ProfileCard />
        <HeroCard />
        <StatsCards />
        <SkillsCard />
        <DesignCard />
        <ProjectsGrid />
        <ExperienceCard />
        <ContactCard />
      </motion.div>
    </div>
  );
}

export default HomePage;

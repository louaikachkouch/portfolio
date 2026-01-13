import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const SKILLS = [
  "React", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "Next.js", "PHP", "MySQL", "Python", "C", "C++", "Unity C#"
];

function SkillsCard() {
  return (
    <motion.div variants={itemVariants} className="card skills-card">
      <div className="section-header">
        <div className="section-icon purple">
          <Terminal className="icon" />
        </div>
        <h3 className="section-title">Tech Stack</h3>
      </div>
      <div className="skills-grid">
        {SKILLS.map(skill => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillsCard;

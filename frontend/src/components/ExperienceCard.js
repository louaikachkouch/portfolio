import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "Free Lancer",
    period: "2020 - Present",
    description: "Leading the core product team, migrating legacy code to React 18."
  },
  {
    role: "Game Developer",
    company: "Arabian YouTubers || Gamers",
    period: "2023 - 2025",
    description: "Lead in the base mechanics and physics of the game, like movement and interaction."
  }
];

const EDUCATION = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Higher Institute of Computer Science - Kef',
    period: '2025 - Present',
    description: 'Focused on software engineering, algorithms, and web development.'
  }
];

function ExperienceCard() {
  return (
    <motion.div variants={itemVariants} className="card experience-card">
      <h3 className="section-title mb-6">Experience</h3>
      <div className="timeline">
        <div className="timeline-line"></div>
        {EXPERIENCE.map((job, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-period">{job.period}</span>
              <h4 className="timeline-company">{job.company}</h4>
              <span className="timeline-role">{job.role}</span>
              <p className="timeline-description">{job.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="education-divider"></div>

      <div className="education-section-inline">
        <div className="education-header">
          <GraduationCap className="education-icon" />
          <h3 className="section-title">Education</h3>
        </div>
        <div className="timeline">
          <div className="timeline-line"></div>
          {EDUCATION.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot education-dot"></div>
              <div className="timeline-content">
                <span className="timeline-period">
                  <Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  {item.period}
                </span>
                <h4 className="timeline-company">{item.school}</h4>
                <span className="timeline-role">{item.degree}</span>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;

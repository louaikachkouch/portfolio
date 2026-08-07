import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Store, Sparkles, Heart, TrendingUp, Car, ShoppingBag, BookOpen} from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const PROJECTS = [
  {
    title: "E-Commerce Dashboard",
    description: "Analytics and management platform for online stores.",
    tags: ["React", "Tailwind"],
    color: "blue",
    link: "https://hydrolify.vercel.app/stores",
    icon: Store
  },
  {
    title: "QR code Generator",
    description: "SaaS application for automated QR code generation.",
    tags: [ "React"],
    color: "purple",
    link: "https://louaikachkouch.github.io/hydrolicQR/",
    icon: Sparkles
  },
  {
    title: "Health Tracker App",
    description: "Mobile-first wellness tracking PWA.",
    tags: ["React", "Tailwind"],
    color: "green",
    link: "https://hydrolife-black.vercel.app",
    icon: Heart
  },
  {
    title: "VIN Car History Checker",
    description: "checks the history of a car using its VIN number.",
    tags: ["React"],
    color: "orange",
    link: "https://truecar.vercel.app",
    icon: Car
  },
  {
    title: "Minimalist E-Commerce Store",
    description: "A clean and simple online store interface.",
    tags: ["React"],
    color: "blue",
    link: "https://lampify.vercel.app",
    icon: ShoppingBag
  },
  {
    title: "Coury Startup",
    description: "Real-time stock and crypto tracking dashboard.",
    tags: ["React"],
    color: "orange",
    link: "https://truecar.vercel.app",
    icon: BookOpen
  }
];

function ProjectsGrid() {
  return (
    <motion.div variants={itemVariants} className="projects-container">
      {PROJECTS.map((project, i) => {
        const IconComponent = project.icon;
        return (
          <div key={i} className="card project-card">
            <div className="project-header">
              <div className={`project-icon ${project.color}`}>
                <IconComponent className="icon" />
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-ghost"
              >
                <ArrowUpRight className="icon" />
              </a>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default ProjectsGrid;

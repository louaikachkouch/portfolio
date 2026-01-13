import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, MapPin, Mail, Download } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

function ProfileCard() {
  return (
    <motion.div variants={itemVariants} className="card profile-card">
      <div className="card-content profile-content">
        <div className="avatar">
          <img src="/my-profile-img.jpg" alt="Louai Kachkouch" className="avatar-img" />
        </div>
        <h1 className="profile-name">Louai Kachkouch</h1>
        <p className="profile-role">Full Stack Developer</p>
        
        <div className="location">
          <MapPin className="icon-sm" />
          <span>Tunisia, Ariana</span>
        </div>

        <div className="social-links">
          <a href="https://github.com/louaikachkouch" target="_blank" rel="noopener noreferrer" className="btn-icon">
            <Github className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/louai-kachkouch-528325305/" target="_blank" rel="noopener noreferrer" className="btn-icon">
            <Linkedin className="icon" />
          </a>
          <a href="https://www.instagram.com/louai_kachkouch/" target="_blank" rel="noopener noreferrer" className="btn-icon">
            <Instagram className="icon" />
          </a>
        </div>

        <div className="profile-actions">
          <a href="mailto:louaikachkouch@gmail.com" className="btn btn-primary">
            <Mail className="icon-sm" /> Contact Me
          </a>
          <a href="/louaikachkouch.pdf" download className="btn btn-secondary">
            <Download className="icon-sm" /> Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProfileCard;

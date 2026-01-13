import React from 'react';
import { motion } from 'framer-motion';
import { ContactCard } from '../components';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 md-p-8">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">Let's connect and discuss your next project</p>
      </motion.div>

      <motion.div
        className="contact-page-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ContactCard />
        
        <motion.div 
          className="contact-info card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Let's Work Together</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Feel free to reach out through any of the channels above.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Response Time:</span>
              <span className="contact-value">Within 24 hours</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Availability:</span>
              <span className="contact-value">Open to opportunities</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ContactPage;

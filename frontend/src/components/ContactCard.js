import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

function ContactCard() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/louaikachkouch@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Contact Form Submission'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div variants={itemVariants} className="card contact-card">
      <div className="contact-grid">
        <div className="contact-info">
          <div className="section-icon green">
            <Send className="icon-lg" />
          </div>
          <h2 className="contact-title">Let's work together!</h2>
          <p className="contact-description">
            I'm currently available for freelance projects and open to new opportunities.
            Have a project in mind? Let's talk.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <Mail className="icon-sm" />
              <span>louaikachkouch@gmail.com</span>
            </div>
            <div className="contact-item">
              <MapPin className="icon-sm" />
              <span>Tunisia, Ariana (Remote)</span>
            </div>
          </div>
        </div>
        {isSubmitted ? (
          <motion.div 
            className="success-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <CheckCircle className="icon-lg" style={{ color: 'var(--accent-green)', marginBottom: '1rem' }} />
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. I'll get back to you soon!</p>
            <button 
              className="btn btn-secondary" 
              onClick={() => setIsSubmitted(false)}
              style={{ marginTop: '1rem' }}
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="name here" 
                  className="form-input" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="mail@example.com" 
                  className="form-input" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea 
                name="message" 
                placeholder="Tell me about your project..." 
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}

export default ContactCard;

import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

function HeroCard() {
  return (
    <motion.div variants={itemVariants} className="card hero-card">
      <div className="hero-icon">
        <Code2 className="icon-xl" />
      </div>
      <div className="badge">Available for hire</div>
      <h2 className="hero-title">
        Building digital products,<br />brands, and businneses.
      </h2>
      <p className="hero-description">
        I specialize in building accessible, pixel-perfect, and performant web applications that users love.
      </p>
    </motion.div>
  );
}

export default HeroCard;

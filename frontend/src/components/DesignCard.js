import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

function DesignCard() {
  return (
    <motion.div variants={itemVariants} className="card design-card">
      <div className="section-icon orange">
        <Gamepad className="icon" />
      </div>
      <div className="design-content">
        <h3 className="section-title">Game Developer</h3>
        <p className="design-description">
          Dedicated Game Developer with 4+ years of experience in game development using Unity. Proficient in C# and experienced in implementing game physics, artificial intelligence, and multiplayer features. Driven to create high-quality and immersive gaming experiences.
        </p>
      </div>
    </motion.div>
  );
}

export default DesignCard;

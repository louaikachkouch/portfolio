import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { Home, User, Briefcase, Code2, Mail } from 'lucide-react';

function Navbar() {
  const navItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: User, label: 'About', to: '/about' },
    { icon: Code2, label: 'Skills', to: '/skills' },
    { icon: Briefcase, label: 'Projects', to: '/projects' },
    { icon: Mail, label: 'Contact', to: '/contact' },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          LK
        </Link>
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink 
                to={item.to} 
                className={({ isActive }) => 
                  `navbar-link ${isActive ? 'active' : ''}`
                }
              >
                <item.icon className="navbar-icon" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;

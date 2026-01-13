import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import { ThemeToggle, Navbar } from './components';
import { ThemeProvider } from './context/ThemeContext';

// Import pages
import {
  HomePage,
  AboutPage,
  SkillsPage,
  ProjectsPage,
  ContactPage
} from './pages';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Navbar />
          <ThemeToggle />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          <footer className="footer">
            <p>© 2026 Louai Kachkouch. Built By Hydrolic Station.</p>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

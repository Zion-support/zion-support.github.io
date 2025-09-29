import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AIMicroSAAS from './pages/AIMicroSAAS';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ai-micro-saas" element={<AIMicroSAAS />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  );
};
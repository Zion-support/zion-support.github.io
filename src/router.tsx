import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Insights from './pages/Insights';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';
import Pricing from './pages/Pricing';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
};
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/services" element={<Home />} />
      <Route path="/blog" element={<Home />} />
      <Route path="/case-studies" element={<Home />} />
      <Route path="/tools" element={<Home />} />
      <Route path="/ai-micro-saas" element={<Home />} />
      <Route path="/enterprise-ai-solutions" element={<Home />} />
      
      {/* Catch all route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Resources from './pages/Resources';
import Post from './pages/Post';
import AIAutonomousOperations from './pages/services/AIAutonomousOperations';
import AIPlatformArchitecture from './pages/services/AI-Platform-Architecture';
import AIIncidentResponsePlaybooks2025 from './pages/blog/ai-incident-response-playbooks-2025/page';
import CaseStudies from './pages/CaseStudies';
import Services from './pages/Services';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<Post />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/blog/ai-incident-response-playbooks-2025" element={<AIIncidentResponsePlaybooks2025 />} />
      <Route path="/services/ai-autonomous-operations" element={<AIAutonomousOperations />} />
      <Route path="/services/AI-Platform-Architecture" element={<AIPlatformArchitecture />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

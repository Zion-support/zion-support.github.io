import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AIMicroSAAS from './pages/AIMicroSAAS';
import Blog from './pages/Blog';
import Resources from './pages/Resources';
import Tools from './pages/Tools';
import EnterpriseAISolutions from './pages/EnterpriseAISolutions';
import AIWorkflowAutomation from './pages/services/AIWorkflowAutomation';
import AIVirtualAssistant from './pages/services/AIVirtualAssistant';
import AIDataAnalytics from './pages/services/AIDataAnalytics';
import CaseStudies from './pages/CaseStudies';

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
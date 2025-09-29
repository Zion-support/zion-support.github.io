import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Post from './pages/Post';
import Services from './pages/Services';
import AIDataAnalytics from './pages/services/AIDataAnalytics';
import AIVirtualAssistant from './pages/services/AIVirtualAssistant';
import AIWorkflowAutomation from './pages/services/AIWorkflowAutomation';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
      <Route path="/services/ai-virtual-assistant" element={<AIVirtualAssistant />} />
      <Route path="/services/ai-data-analytics" element={<AIDataAnalytics />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<Post />} />
    </Routes>
  );
};
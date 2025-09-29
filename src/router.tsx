import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// Removed missing routes for this branch
const About = () => null;
const Services = () => null;
import Contact from './pages/Contact';
const AIMicroSAAS = () => null;
import Blog from './pages/Blog';
import Resources from './pages/Resources';
const Tools = () => null;
const EnterpriseAISolutions = () => null;
const Post = () => null;
const CaseStudies = () => null;
const AIWorkflowAutomation = () => null;
const AIVirtualAssistant = () => null;
const AIDataAnalytics = () => null;
import AIAutonomousOperations from './pages/services/AIAutonomousOperations';
import AIPlatformArchitecture from './pages/services/AI-Platform-Architecture';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      {/* Limited routes for current branch */}
      <Route path="/services/ai-autonomous-operations" element={<AIAutonomousOperations />} />
      <Route path="/services/AI-Platform-Architecture" element={<AIPlatformArchitecture />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/ai-micro-saas" element={<AIMicroSAAS />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<Post />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/enterprise-ai-solutions" element={<EnterpriseAISolutions />} />
    </Routes>
  );
};

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// Optional pages may be absent; route to Home as placeholder
const About = () => <Home />;
const Services = () => <Home />;
import Contact from './pages/Contact';
const AIMicroSAAS = () => <Home />;
import Blog from './pages/Blog';
import Resources from './pages/Resources';
const Tools = () => <Home />;
const EnterpriseAISolutions = () => <Home />;
const Post = () => <Blog />;
const CaseStudies = () => <Home />;
const AIWorkflowAutomation = () => <Home />;
const AIVirtualAssistant = () => <Home />;
const AIDataAnalytics = () => <Home />;
import AIAutonomousOperations from './pages/services/AIAutonomousOperations';
import AIPlatformArchitecture from './pages/services/AI-Platform-Architecture';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
      <Route path="/services/ai-virtual-assistant" element={<AIVirtualAssistant />} />
      <Route path="/services/ai-data-analytics" element={<AIDataAnalytics />} />
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

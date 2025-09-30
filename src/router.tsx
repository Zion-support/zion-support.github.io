import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
const About = React.lazy(() => Promise.resolve({ default: () => null }));
const Services = React.lazy(() => Promise.resolve({ default: () => null }));
import Contact from './pages/Contact';
const AIMicroSAAS = React.lazy(() => Promise.resolve({ default: () => null }));
import Blog from './pages/Blog';
const Resources = React.lazy(() => Promise.resolve({ default: () => null }));
const Tools = React.lazy(() => Promise.resolve({ default: () => null }));
const EnterpriseAISolutions = React.lazy(() => Promise.resolve({ default: () => null }));
const Post = React.lazy(() => Promise.resolve({ default: () => null }));
const CaseStudies = React.lazy(() => Promise.resolve({ default: () => null }));
const AIWorkflowAutomation = React.lazy(() => Promise.resolve({ default: () => null }));
const AIVirtualAssistant = React.lazy(() => Promise.resolve({ default: () => null }));
const AIDataAnalytics = React.lazy(() => Promise.resolve({ default: () => null }));
const AIAutonomousOperations = React.lazy(() => Promise.resolve({ default: () => null }));
const AIPlatformArchitecture = React.lazy(() => Promise.resolve({ default: () => null }));

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

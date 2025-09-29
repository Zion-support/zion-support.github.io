import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
// Only import service pages that exist in the repo
import AIAutonomousOperations from './pages/services/AIAutonomousOperations';
import AIPlatformArchitecture from './pages/services/AI-Platform-Architecture';

const NotImplemented: React.FC<{ name: string }> = ({ name }) => <div role="note">{name} page coming soon</div>;

const About = () => <NotImplemented name="About" />;
const Services = () => <NotImplemented name="Services" />;
const Tools = () => <NotImplemented name="Tools" />;
const EnterpriseAISolutions = () => <NotImplemented name="Enterprise AI Solutions" />;
const AIMicroSAAS = () => <NotImplemented name="AI Micro SAAS" />;
const Post = () => <NotImplemented name="Blog Post" />;

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      {/* Removed routes for non-existent service pages to fix build */}
      <Route path="/services/ai-autonomous-operations" element={<AIAutonomousOperations />} />
      <Route path="/services/AI-Platform-Architecture" element={<AIPlatformArchitecture />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/case-studies" element={<NotImplemented name="Case Studies" />} />
      <Route path="/ai-micro-saas" element={<AIMicroSAAS />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<Post />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/enterprise-ai-solutions" element={<EnterpriseAISolutions />} />
    </Routes>
  );
};

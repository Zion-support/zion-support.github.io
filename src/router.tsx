import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// Temporarily remove routes for pages that do not exist
// import About from './pages/About';
// import Services from './pages/Services';
import Contact from './pages/Contact';
// import AIMicroSAAS from './pages/AIMicroSAAS';
import Blog from './pages/Blog';
// import Resources from './pages/Resources';
// import Tools from './pages/Tools';
// import EnterpriseAISolutions from './pages/EnterpriseAISolutions';
import Post from './pages/Post';
// import CaseStudies from './pages/CaseStudies';
// import AIWorkflowAutomation from './pages/services/AIWorkflowAutomation';
// import AIVirtualAssistant from './pages/services/AIVirtualAssistant';
// import AIDataAnalytics from './pages/services/AIDataAnalytics';
// import AIAutonomousOperations from './pages/services/AIAutonomousOperations';
// import AIPlatformArchitecture from './pages/services/AI-Platform-Architecture';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      { /* Removed missing routes for now */ }
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<Post />} />
      { /* Removed dynamic and extra routes */ }
    </Routes>
  );
};

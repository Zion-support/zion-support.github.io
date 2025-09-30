import React from 'react';
import AIAutonomousOperations from './pages/services/AIAutonomousOperations';
import AIIncidentResponsePlaybooks2025 from './pages/blog/ai-incident-response-playbooks-2025/page';
import AIPlatformArchitecture from './pages/services/AI-Platform-Architecture';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resources from './pages/Resources';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/blog/ai-incident-response-playbooks-2025" element={<AIIncidentResponsePlaybooks2025 />} />
      <Route path="/services/ai-autonomous-operations" element={<AIAutonomousOperations />} />
      <Route path="/services/AI-Platform-Architecture" element={<AIPlatformArchitecture />} />
    </Routes>
  );
};

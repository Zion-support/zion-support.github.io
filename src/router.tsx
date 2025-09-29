import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Resources from './pages/Resources';
import AIAutonomousOperations from './pages/services/AIAutonomousOperations';
import AIPlatformArchitecture from './pages/services/AI-Platform-Architecture';
import AIIncidentResponsePlaybooks2025 from './pages/blog/ai-incident-response-playbooks-2025/page';
import EdgeRateLimiterBlueprint2026 from './pages/blog/edge-rate-limiter-blueprint-2026/page';
import AgentRedTeaming2026 from './pages/blog/agent-red-teaming-2026/page';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/blog/ai-incident-response-playbooks-2025" element={<AIIncidentResponsePlaybooks2025 />} />
      <Route path="/blog/edge-rate-limiter-blueprint-2026" element={<EdgeRateLimiterBlueprint2026 />} />
      <Route path="/blog/agent-red-teaming-2026" element={<AgentRedTeaming2026 />} />
      <Route path="/services/ai-autonomous-operations" element={<AIAutonomousOperations />} />
      <Route path="/services/AI-Platform-Architecture" element={<AIPlatformArchitecture />} />
    </Routes>
  );
};

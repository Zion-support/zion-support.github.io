import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Resources from './pages/Resources';
import AIAutonomousOperations from './pages/services/AIAutonomousOperations';
import AIPlatformArchitecture from './pages/services/AI-Platform-Architecture';
import AIIncidentResponsePlaybooks2025 from './pages/blog/ai-incident-response-playbooks-2025/page';
import AIBreachDrills2026 from './pages/blog/ai-breach-drills-2026/page';
import PrivacyFirstInsightsTelemetry2026 from './pages/blog/privacy-first-insights-telemetry-2026/page';
import Post from './pages/Post';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<Post />} />
      <Route path="/blog/ai-breach-drills-2026" element={<AIBreachDrills2026 />} />
      <Route path="/blog/privacy-first-insights-telemetry-2026" element={<PrivacyFirstInsightsTelemetry2026 />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/blog/ai-incident-response-playbooks-2025" element={<AIIncidentResponsePlaybooks2025 />} />
      <Route path="/services/ai-autonomous-operations" element={<AIAutonomousOperations />} />
      <Route path="/services/AI-Platform-Architecture" element={<AIPlatformArchitecture />} />
    </Routes>
  );
};

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PostBySlug from './pages/blog/PostBySlug';
import Resources from './pages/Resources';
import Post from './pages/Post';
import AIAutonomousOperations from './pages/services/AIAutonomousOperations';
import AIPlatformArchitecture from './pages/services/AI-Platform-Architecture';
import AIAutonomousInfrastructure from './pages/services/AIAutonomousInfrastructure';
import QuantumAIHybridComputing from './pages/services/QuantumAIHybridComputing';
import AIIncidentResponsePlaybooks2025 from './pages/blog/ai-incident-response-playbooks-2025/page';
import AIAutonomousInfrastructure2026 from './pages/blog/ai-autonomous-infrastructure-2026/page';
import QuantumAIHybridComputing2026 from './pages/blog/quantum-ai-hybrid-computing-2026/page';
import EdgeAIDeployment2026 from './pages/blog/edge-ai-deployment-2026/page';
import ZeroTrustSecurity2026 from './pages/blog/zero-trust-security-2026/page';
import CaseStudies from './pages/CaseStudies';
import Services from './pages/Services';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<PostBySlug />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/blog/:slug" element={<Post />} />
      <Route path="/blog/ai-incident-response-playbooks-2025" element={<AIIncidentResponsePlaybooks2025 />} />
      <Route path="/blog/ai-autonomous-infrastructure-2026" element={<AIAutonomousInfrastructure2026 />} />
      <Route path="/blog/quantum-ai-hybrid-computing-2026" element={<QuantumAIHybridComputing2026 />} />
      <Route path="/blog/edge-ai-deployment-2026" element={<EdgeAIDeployment2026 />} />
      <Route path="/blog/zero-trust-security-2026" element={<ZeroTrustSecurity2026 />} />
      <Route path="/services/ai-autonomous-operations" element={<AIAutonomousOperations />} />
      <Route path="/services/AI-Platform-Architecture" element={<AIPlatformArchitecture />} />
      <Route path="/services/ai-autonomous-infrastructure" element={<AIAutonomousInfrastructure />} />
      <Route path="/services/quantum-ai-hybrid-computing" element={<QuantumAIHybridComputing />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

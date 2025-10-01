import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
const About = React.lazy(() => Promise.resolve({ default: () => null }));
const Services = React.lazy(() => Promise.resolve({ default: () => null }));
import Contact from './pages/Contact';
const AIMicroSAAS = React.lazy(() => Promise.resolve({ default: () => null }));
import Blog from './pages/Blog';
import Resources from './pages/Resources';
const Tools = React.lazy(() => Promise.resolve({ default: () => null }));
const EnterpriseAISolutions = React.lazy(() => Promise.resolve({ default: () => null }));
const Post = React.lazy(() => Promise.resolve({ default: () => null }));
const CaseStudies = React.lazy(() => Promise.resolve({ default: () => null }));
const AIWorkflowAutomation = React.lazy(() => Promise.resolve({ default: () => null }));
const AIVirtualAssistant = React.lazy(() => Promise.resolve({ default: () => null }));
const AIDataAnalytics = React.lazy(() => Promise.resolve({ default: () => null }));
import AIAutonomousOperations from './pages/services/AIAutonomousOperations';
import AIPlatformArchitecture from './pages/services/AIPlatformArchitecture';

// NEW October 1, 2025 Blog Posts
import AIEdgeComputing5GNetworks2025 from '../blog/ai-edge-computing-5g-networks-2025';
import QuantumSafeCryptographyImplementation2025 from '../blog/quantum-safe-cryptography-implementation-2025';
import AISelfHealingInfrastructure2025 from '../blog/ai-self-healing-infrastructure-2025';
import GenerativeAICodeAssistants2025 from '../blog/generative-ai-code-assistants-2025';
import EdgeAIPrivacyPreservingAnalytics2025 from '../blog/edge-ai-privacy-preserving-analytics-2025';
import AIDrivenSupplyChainOptimization2025 from '../blog/ai-driven-supply-chain-optimization-2025';

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
      <Route path="/services/ai-platform-architecture" element={<AIPlatformArchitecture />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/ai-micro-saas" element={<AIMicroSAAS />} />
      <Route path="/blog" element={<Blog />} />
      {/* NEW October 1, 2025 Blog Posts */}
      <Route path="/blog/ai-edge-computing-5g-networks-2025" element={<AIEdgeComputing5GNetworks2025 />} />
      <Route path="/blog/quantum-safe-cryptography-implementation-2025" element={<QuantumSafeCryptographyImplementation2025 />} />
      <Route path="/blog/ai-self-healing-infrastructure-2025" element={<AISelfHealingInfrastructure2025 />} />
      <Route path="/blog/generative-ai-code-assistants-2025" element={<GenerativeAICodeAssistants2025 />} />
      <Route path="/blog/edge-ai-privacy-preserving-analytics-2025" element={<EdgeAIPrivacyPreservingAnalytics2025 />} />
      <Route path="/blog/ai-driven-supply-chain-optimization-2025" element={<AIDrivenSupplyChainOptimization2025 />} />
      <Route path="/blog/:slug" element={<Post />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/enterprise-ai-solutions" element={<EnterpriseAISolutions />} />
    </Routes>
  );
};

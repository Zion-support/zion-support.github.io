import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AIDataAnalytics from './pages/services/AIDataAnalytics';
import AIIntelligentDocumentProcessing from './pages/services/AIIntelligentDocumentProcessing';
import AIVirtualAssistant from './pages/services/AIVirtualAssistant';
import AIWorkflowAutomation from './pages/services/AIWorkflowAutomation';
import AIContentGenerator from './pages/services/AIContentGenerator';
import SmartAppointmentScheduler from './pages/services/SmartAppointmentScheduler';
import About from './pages/About';
import AdaptiveLearningPlatforms from './pages/blog/ai-2025-oct-adaptive-learning-platforms';
import AdvancedCybersecurityAI from './pages/services/AdvancedCybersecurityAI';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import CognitiveAutomationEnterpriseRevolution from './pages/blog/ai-2025-oct-cognitive-automation-enterprise-revolution';
import CognitiveComputingTransformation from './pages/blog/ai-2025-cognitive-computing-enterprise-transformation';
import Contact from './pages/Contact';
import EnterpriseAITransformationSuccessStrategies from './pages/blog/ai-2025-oct-enterprise-ai-transformation-success-strategies';
import GlobalFinTechAITransformation from './pages/case-studies/global-fintech-ai-transformation-2025';
import GlobalRetailAITransformation from './pages/case-studies/global-retail-ai-transformation-2025';
import GlobalTelecomCognitiveTransformation from './pages/case-studies/global-telecom-cognitive-transformation-4-7-billion';
import HealthcareAITransformation from './pages/case-studies/healthcare-ai-transformation-2025';
import Home from './pages/Home';
import MultiAgentEnterpriseOrchestration from './pages/blog/ai-2025-multiagent-enterprise-orchestration-revolution';
import MultimodalEnterpriseIntelligence from './pages/blog/ai-2025-oct-multimodal-enterprise-intelligence';
import NextGenIntelligentAutomationBreakthrough from './pages/blog/ai-2025-oct-next-gen-intelligent-automation-breakthrough';
import PostBySlug from './pages/blog/PostBySlug';
import RealTimeCognitiveAutomation from './pages/services/RealTimeCognitiveAutomation';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import AISolutions from './pages/AISolutions';
import Pricing from './pages/Pricing';
import Demo from './pages/Demo';
import Support from './pages/Support';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/ai-solutions" element={<AISolutions />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/support" element={<Support />} />
      <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
      <Route path="/services/ai-virtual-assistant" element={<AIVirtualAssistant />} />
      <Route path="/services/ai-data-analytics" element={<AIDataAnalytics />} />
      <Route path="/services/ai-intelligent-document-processing" element={<AIIntelligentDocumentProcessing />} />
      <Route path="/services/real-time-cognitive-automation" element={<RealTimeCognitiveAutomation />} />
      <Route path="/services/advanced-cybersecurity-ai" element={<AdvancedCybersecurityAI />} />
      <Route path="/services/ai-content-generator" element={<AIContentGenerator />} />
      <Route path="/services/smart-appointment-scheduler" element={<SmartAppointmentScheduler />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/global-retail-ai-transformation-2025" element={<GlobalRetailAITransformation />} />
      <Route path="/case-studies/healthcare-ai-transformation-2025" element={<HealthcareAITransformation />} />
      <Route path="/case-studies/global-fintech-ai-transformation-2025" element={<GlobalFinTechAITransformation />} />
      <Route path="/case-studies/global-telecom-cognitive-transformation-4-7-billion" element={<GlobalTelecomCognitiveTransformation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<PostBySlug />} />
      <Route path="/blog/ai-2025-oct-multimodal-enterprise-intelligence" element={<MultimodalEnterpriseIntelligence />} />
      <Route path="/blog/ai-2025-oct-adaptive-learning-platforms" element={<AdaptiveLearningPlatforms />} />
      <Route path="/blog/ai-2025-oct-cognitive-automation-enterprise-revolution" element={<CognitiveAutomationEnterpriseRevolution />} />
      <Route path="/blog/ai-2025-oct-enterprise-ai-transformation-success-strategies" element={<EnterpriseAITransformationSuccessStrategies />} />
      <Route path="/blog/ai-2025-oct-next-gen-intelligent-automation-breakthrough" element={<NextGenIntelligentAutomationBreakthrough />} />
      <Route path="/blog/ai-2025-multiagent-enterprise-orchestration-revolution" element={<MultiAgentEnterpriseOrchestration />} />
      <Route path="/blog/ai-2025-cognitive-computing-enterprise-transformation" element={<CognitiveComputingTransformation />} />
    </Routes>
  );
};
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home'; // Temporarily disabled
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import PostBySlug from './pages/blog/PostBySlug';
import AIWorkflowAutomation from './pages/services/AIWorkflowAutomation';
import AIVirtualAssistant from './pages/services/AIVirtualAssistant';
import AIDataAnalytics from './pages/services/AIDataAnalytics';
import AIIntelligentDocumentProcessing from './pages/services/AIIntelligentDocumentProcessing';
import RealTimeCognitiveAutomation from './pages/services/RealTimeCognitiveAutomation';
import AdvancedCybersecurityAI from './pages/services/AdvancedCybersecurityAI';
import MultimodalEnterpriseIntelligence from './pages/blog/ai-2025-oct-multimodal-enterprise-intelligence';
import AdaptiveLearningPlatforms from './pages/blog/ai-2025-oct-adaptive-learning-platforms';
import CognitiveAutomationEnterpriseRevolution from './pages/blog/ai-2025-oct-cognitive-automation-enterprise-revolution';
import EnterpriseAITransformationSuccessStrategies from './pages/blog/ai-2025-oct-enterprise-ai-transformation-success-strategies';
import NextGenIntelligentAutomationBreakthrough from './pages/blog/ai-2025-oct-next-gen-intelligent-automation-breakthrough';
import GlobalRetailAITransformation from './pages/case-studies/global-retail-ai-transformation-2025';
import HealthcareAITransformation from './pages/case-studies/healthcare-ai-transformation-2025';
import GlobalFinTechAITransformation from './pages/case-studies/global-fintech-ai-transformation-2025';
import MultiAgentEnterpriseOrchestration from './pages/blog/ai-2025-multiagent-enterprise-orchestration-revolution';
import CognitiveComputingTransformation from './pages/blog/ai-2025-cognitive-computing-enterprise-transformation';
import GlobalTelecomCognitiveTransformation from './pages/case-studies/global-telecom-cognitive-transformation-4-7-billion';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home page temporarily disabled</div>} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
      <Route path="/services/ai-virtual-assistant" element={<AIVirtualAssistant />} />
      <Route path="/services/ai-data-analytics" element={<AIDataAnalytics />} />
      <Route path="/services/ai-intelligent-document-processing" element={<AIIntelligentDocumentProcessing />} />
      <Route path="/services/real-time-cognitive-automation" element={<RealTimeCognitiveAutomation />} />
      <Route path="/services/advanced-cybersecurity-ai" element={<AdvancedCybersecurityAI />} />
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
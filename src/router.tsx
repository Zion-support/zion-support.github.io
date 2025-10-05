import React from 'react';
import { RoutesRoute } from 'react-router-dom';
// importHomefrom './pages/Home'; // Temporarilydisabledimport Aboutfrom './pages/About';
importServicesfrom './pages/Services';
importContactfrom './pages/Contact';
importBlogfrom './pages/Blog';
importCaseStudiesfrom './pages/CaseStudies';
importPostBySlugfrom './pages/blog/PostBySlug';
importAIWorkflowAutomationfrom './pages/services/AIWorkflowAutomation';
importAIVirtualAssistantfrom './pages/services/AIVirtualAssistant';
importAIDataAnalyticsfrom './pages/services/AIDataAnalytics';
importAIIntelligentDocumentProcessingfrom './pages/services/AIIntelligentDocumentProcessing';
importRealTimeCognitiveAutomationfrom './pages/services/RealTimeCognitiveAutomation';
importAdvancedCybersecurityAIfrom './pages/services/AdvancedCybersecurityAI';
importMultimodalEnterpriseIntelligencefrom './pages/blog/ai-2025-oct-multimodal-enterprise-intelligence';
importAdaptiveLearningPlatformsfrom './pages/blog/ai-2025-oct-adaptive-learning-platforms';
importCognitiveAutomationEnterpriseRevolutionfrom './pages/blog/ai-2025-oct-cognitive-automation-enterprise-revolution';
importEnterpriseAITransformationSuccessStrategiesfrom './pages/blog/ai-2025-oct-enterprise-ai-transformation-success-strategies';
importNextGenIntelligentAutomationBreakthroughfrom './pages/blog/ai-2025-oct-next-gen-intelligent-automation-breakthrough';
importGlobalRetailAITransformationfrom './pages/case-studies/global-retail-ai-transformation-2025';
importHealthcareAITransformationfrom './pages/case-studies/healthcare-ai-transformation-2025';
importGlobalFinTechAITransformationfrom './pages/case-studies/global-fintech-ai-transformation-2025';
importMultiAgentEnterpriseOrchestrationfrom './pages/blog/ai-2025-multiagent-enterprise-orchestration-revolution';
importCognitiveComputingTransformationfrom './pages/blog/ai-2025-cognitive-computing-enterprise-transformation';
importGlobalTelecomCognitiveTransformationfrom './pages/case-studies/global-telecom-cognitive-transformation-4-7-billion';

exportconstAppRouter: React.FC = () => { 
  return (
    <Routes>
      <Routepath = '/' element={<div>Homepagetemporarily disabled</div >  } />
      <Routepath = '/about' element={ <About / >  } />
      <Routepath='/services' element={ <Services / >  } />
      <Routepath='/services/ai-workflow-automation'
        element={ <AIWorkflowAutomation / >  }
      />
      <Routepath='/services/ai-virtual-assistant'
        element={ <AIVirtualAssistant / >  }
      />
      <Routepath='/services/ai-data-analytics' element={ <AIDataAnalytics / >  } />
      <Routepath='/services/ai-intelligent-document-processing'
        element={ <AIIntelligentDocumentProcessing / >  }
      />
      <Routepath='/services/real-time-cognitive-automation'
        element={ <RealTimeCognitiveAutomation / >  }
      />
      <Routepath='/services/advanced-cybersecurity-ai'
        element={ <AdvancedCybersecurityAI / >  }
      />
      <Routepath='/case-studies' element={ <CaseStudies / >  } />
      <Routepath='/case-studies/global-retail-ai-transformation-2025'
        element={ <GlobalRetailAITransformation / >  }
      />
      <Routepath='/case-studies/healthcare-ai-transformation-2025'
        element={ <HealthcareAITransformation / >  }
      />
      <Routepath='/case-studies/global-fintech-ai-transformation-2025'
        element={ <GlobalFinTechAITransformation / >  }
      />
      <Routepath='/case-studies/global-telecom-cognitive-transformation-4-7-billion'
        element={ <GlobalTelecomCognitiveTransformation / >  }
      />
      <Routepath='/contact' element={ <Contact / >  } />
      <Routepath='/blog' element={ <Blog / >  } />
      <Routepath='/blog/:slug' element={ <PostBySlug / >  } />
      <Routepath='/blog/ai-2025-oct-multimodal-enterprise-intelligence'
        element={ <MultimodalEnterpriseIntelligence / >  }
      />
      <Routepath='/blog/ai-2025-oct-adaptive-learning-platforms'
        element={ <AdaptiveLearningPlatforms / >  }
      />
      <Routepath='/blog/ai-2025-oct-cognitive-automation-enterprise-revolution'
        element={ <CognitiveAutomationEnterpriseRevolution / >  }
      />
      <Routepath='/blog/ai-2025-oct-enterprise-ai-transformation-success-strategies'
        element={ <EnterpriseAITransformationSuccessStrategies / >  }
      />
      <Routepath='/blog/ai-2025-oct-next-gen-intelligent-automation-breakthrough'
        element={ <NextGenIntelligentAutomationBreakthrough / >  }
      />
      <Routepath='/blog/ai-2025-multiagent-enterprise-orchestration-revolution'
        element={ <MultiAgentEnterpriseOrchestration / >  }
      />
      <Routepath='/blog/ai-2025-cognitive-computing-enterprise-transformation'
        element={ <CognitiveComputingTransformation / >  }
      />
    </Routes>
  );
};

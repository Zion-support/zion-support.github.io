<<<<<<< HEAD
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Building, Target, Cpu, Shield, 
  Check, Phone, Mail, MapPin,
  TrendingUp, Zap, Globe
} from 'lucide-react';

// Import our new service data
import { advancedAIMLServices } from '../data/2025-advanced-ai-ml-services';
import { advancedCybersecurityServices } from '../data/2025-advanced-cybersecurity-services';
import { advancedCloudDevOpsServices2025 } from '../data/2025-advanced-cloud-devops-services';
import { industrySpecificSolutions } from '../data/2025-industry-specific-solutions';
import { emergingTechnologyServices } from '../data/2025-emerging-technology-services';

const ComprehensiveServicesShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('all');

// Helper function to get service pricing
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  if (typeof service.price === 'string') return service.price;
  return 'Contact for pricing';
};

// Helper function to get service features
const getServiceFeatures = (service: any) => {
  return service.keyFeatures || service.features || [];
};

// Helper function to get service setup time
const getServiceSetupTime = (service: any) => {
  if (service.setupTime) return service.setupTime;
  if (service.pricing?.setupTime) return service.pricing.setupTime;
  if (service.price?.setupTime) return service.price.setupTime;
  return 'N/A';
};

// Helper function to get service trial days
const getServiceTrialDays = (service: any) => {
  if (service.trialDays) return service.trialDays;
  if (service.pricing?.trialDays) return service.pricing.trialDays;
  if (service.price?.trialDays) return service.price.trialDays;
  return 'N/A';
};

// All services combined
const allServices = [
  ...advancedAIMLServices,
  ...advancedCybersecurityServices,
      ...advancedCloudDevOpsServices2025,
  ...industrySpecificSolutions,
  ...emergingTechnologyServices
];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Target className="w-5 h-5" /> },
    { id: 'business-intelligence', name: 'Business Intelligence', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'ai-automation', name: 'AI Automation', icon: <Brain className="w-5 h-5" /> },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: <Building className="w-5 h-5" /> },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Zap className="w-5 h-5" /> },
    { id: 'ai-services', name: 'AI Services', icon: <Cpu className="w-5 h-5" /> }
  ];

  const filteredServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(service => {
        if (activeTab === 'business-intelligence') return service.category?.includes('Business Intelligence') || service.category?.includes('Analytics');
        if (activeTab === 'ai-automation') return service.category?.includes('AI Automation');
        if (activeTab === 'it-infrastructure') return service.category?.includes('IT Infrastructure');
        if (activeTab === 'micro-saas') return service.category?.includes('Micro SAAS');
        if (activeTab === 'ai-services') return service.category?.includes('AI Services');
        return true;
      });
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const 2025-comprehensive-services-showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2025-comprehensive-services-showcase | Zion Tech Group</title>
        <meta name="description" content="2025-comprehensive-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2025-comprehensive-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2025-comprehensive-services-showcase;

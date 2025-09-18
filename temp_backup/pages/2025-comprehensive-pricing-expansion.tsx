import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, Phone, Mail, MapPin, ArrowRight,
  Brain, Building, Target, Zap, Shield, Globe, Grid
} from 'lucide-react';

// Import our new service data
import { innovativeMicroSaasExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITInfrastructureExpansion } from '../data/2025-innovative-it-infrastructure-expansion';
import { innovativeAIServicesExpansion } from '../data/2025-innovative-ai-services-expansion';

// Create unified services array
const allNewServices = [
  ...innovativeMicroSaasExpansionV2,
  ...innovativeITInfrastructureExpansion,
  ...innovativeAIServicesExpansion
];

const serviceCategories = [
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    icon: <Target className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    services: innovativeMicroSaasExpansionV2
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: <Building className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    services: innovativeITInfrastructureExpansion
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    services: innovativeAIServicesExpansion
  }
];

export default function ComprehensivePricingExpansion2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const filteredServices = selectedCategory === 'all' 
    ? allNewServices 
    : serviceCategories.find(cat => cat.id === selectedCategory)?.services || [];

const 2025-comprehensive-pricing-expansion: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2025-comprehensive-pricing-expansion | Zion Tech Group</title>
        <meta name="description" content="2025-comprehensive-pricing-expansion - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2025-comprehensive-pricing-expansion</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};


export default ConsciousnessComputingRevolution2035;

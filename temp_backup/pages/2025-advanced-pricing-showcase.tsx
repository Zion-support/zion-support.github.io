<<<<<<< HEAD
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Star, Users, TrendingUp, Zap, Globe, Shield,
  Brain, Target, Heart, Building, Rocket, Atom, Palette,
  GraduationCap, Truck, Phone, Mail, MapPin, ArrowRight
} from 'lucide-react';

// Import our new advanced service data
import { advancedCybersecurityMicroSaasServices } from '../data/2025-advanced-cybersecurity-micro-saas';
import { advancedAIMLMicroSaasServices } from '../data/2025-advanced-ai-ml-micro-saas';
import { fintechBlockchainMicroSaasServices } from '../data/2025-fintech-blockchain-micro-saas';
import { healthcareBiotechMicroSaasServices } from '../data/2025-healthcare-biotech-micro-saas';

// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Service categories with icons and colors
const serviceCategories = [
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Threat Intelligence',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-red-500 to-orange-600',
    services: advancedCybersecurityMicroSaasServices
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-600',
    services: advancedAIMLMicroSaasServices
  },
  {
    id: 'fintech-blockchain',
    name: 'Fintech & Blockchain',
    icon: <Target className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-600',
    services: fintechBlockchainMicroSaasServices
  },
  {
    id: 'healthcare-biotech',
    name: 'Healthcare & Biotech',
    icon: <Heart className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-600',
    services: healthcareBiotechMicroSaasServices
  }
];

export default function AdvancedPricingShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const allServices = [
    ...advancedCybersecurityMicroSaasServices,
    ...advancedAIMLMicroSaasServices,
    ...fintechBlockchainMicroSaasServices,
    ...healthcareBiotechMicroSaasServices
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : serviceCategories.find(cat => cat.id === selectedCategory)?.services || [];

  const getPrice = (service: any) => {
    if (billingCycle === 'yearly') {
      return service.price?.yearly || service.price?.monthly * 12;
    }
    return service.price?.monthly || 0;
  };

  const getSavings = (service: any) => {
    if (billingCycle === 'yearly' && service.price?.yearly && service.price?.monthly) {
      const monthlyTotal = service.price.monthly * 12;
      const yearlyPrice = service.price.yearly;
      return Math.round(((monthlyTotal - yearlyPrice) / monthlyTotal) * 100);
    }
    return 0;
  };
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const 2025-advanced-pricing-showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2025-advanced-pricing-showcase | Zion Tech Group</title>
        <meta name="description" content="2025-advanced-pricing-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2025-advanced-pricing-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2025-advanced-pricing-showcase;

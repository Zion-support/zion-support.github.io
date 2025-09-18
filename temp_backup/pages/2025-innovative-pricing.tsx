import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, TrendingUp, Zap, Shield, Globe,
  Brain, Building, Target, Rocket, ArrowRight
} from 'lucide-react';

// Import our new 2025 services
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { emergingTechnologyServices } from '../data/2025-emerging-technology-services';

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Service categories with pricing tiers
const serviceCategories = [
  {
    id: 'enterprise-ai',
    name: 'Enterprise AI Services',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    services: advancedAIAutomationServices2025
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure Services',
    icon: <Building className="w-8 h-8" />,
    color: 'from-blue-500 to-indigo-500',
    services: innovativeITInfrastructureServices2025
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    icon: <Target className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    services: innovativeMicroSaasSolutions2025
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Technology Services',
    icon: <Rocket className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    services: emergingTechnologyServices
  }
];

// Pricing tiers
const pricingTiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Basic service features',
      'Email support',
      'Standard integrations',
      'Community documentation',
      'Basic analytics'
    ],
    color: 'from-gray-500 to-slate-500'
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses and teams',
    features: [
      'All Starter features',
      'Priority support',
      'Advanced integrations',
      'Custom configurations',
      'Advanced analytics',
      'Team collaboration'
    ],
    color: 'from-blue-500 to-indigo-500',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$799',
    period: '/month',
    description: 'For large organizations with complex needs',
    features: [
      'All Professional features',
      '24/7 dedicated support',
      'Custom integrations',
      'White-label options',
      'Advanced security',
      'SLA guarantees',
      'Custom training',
      'On-premise options'
    ],
    color: 'from-purple-500 to-pink-500'
  }
];

// Helper function to get service pricing
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  return 'Contact for pricing';
};

// Helper function to get service pricing display
const getServicePricingDisplay = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}`;
  if (service.price?.monthly) return `$${service.price.monthly}`;
  return 'Contact';
};

// Helper function to get service period
const getServicePeriod = (service: any) => {
  if (service.pricing?.starter || service.pricing?.monthly || service.price?.monthly) return '/month';
  return '';
};

export default function InnovativePricing2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Normalize services to unified format
  const normalizeService = (service: any): UnifiedService => {
    if (service.pricing) {
      // IT Infrastructure service format
      return {
        id: service.id,
        name: service.name,
        tagline: service.description || '',
        description: service.description || '',
        category: service.category || service.type || '',
        icon: '⚡',
        popular: false,
        link: service.website || `https://ziontechgroup.com${service.slug}`,
        pricing: service.pricing,
        price_monthly: 0, // Will be calculated from pricing
        price_yearly: 0,
        trialDays: 14,
        setupTime: '1-2 weeks'
      };
    } else if (service.price && typeof service.price === 'object') {
      // Emerging technology service format
      return {
        id: service.id,
        name: service.name,
        tagline: service.tagline || '',
        description: service.description || '',
        category: service.category || '',
        icon: service.icon || '🚀',
        popular: service.popular || false,
        link: service.link || `https://ziontechgroup.com/${service.id}`,
        price_monthly: service.price.monthly,
        price_yearly: service.price.yearly,
        trialDays: service.price.trialDays || 14,
        setupTime: service.price.setupTime || '1-2 weeks'
      };
    } else {
      // AI Automation and Micro SAAS format
      return {
        id: service.id,
        name: service.name,
        tagline: service.tagline || '',
        description: service.description || '',
        category: service.category || '',
        icon: service.icon || '🤖',
        popular: service.popular || false,
        link: service.link || `https://ziontechgroup.com/${service.id}`,
        price: service.price,
        price_monthly: typeof service.price === 'string' ? 0 : 0,
        price_yearly: typeof service.price === 'string' ? 0 : 0,
        trialDays: service.trialDays || 14,
        setupTime: service.setupTime || '1-2 weeks'
      };
    }
  };

  const getFilteredServices = () => {
    let allServices: UnifiedService[] = [];
    
    if (selectedCategory === 'all') {
      return [
        ...advancedAIAutomationServices2025,
        ...innovativeITInfrastructureServices2025,
        ...innovativeMicroSaasSolutions2025,
        ...emergingTechnologyServices
      ];
    }
    
    return allServices;
  };

const 2025-innovative-pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2025-innovative-pricing | Zion Tech Group</title>
        <meta name="description" content="2025-innovative-pricing - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2025-innovative-pricing</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2025-innovative-pricing;

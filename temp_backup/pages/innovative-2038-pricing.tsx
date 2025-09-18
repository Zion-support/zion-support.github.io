<<<<<<< HEAD
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, TrendingUp, Zap, Users, Award,
  Brain, Atom, Shield, Target, Rocket, Building,
  Cpu, Globe, ArrowRight, Phone, Mail, MapPin, Grid
} from 'lucide-react';

// Import our innovative 2038 services
import { innovative2038MicroSaasExpansions } from '../data/innovative-2038-micro-saas-expansions';
import { innovative2038ITServicesExpansions } from '../data/innovative-2038-it-services-expansions';
import { innovative2038AIServicesExpansions } from '../data/innovative-2038-ai-services-expansions';

// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Create service categories for pricing
const serviceCategories = [
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    icon: <Target className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    description: 'Innovative business solutions and automation',
    services: innovative2038MicroSaasExpansions
  },
  {
    id: 'it-services',
    name: 'IT Infrastructure',
    icon: <Building className="w-8 h-8" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Advanced IT solutions and infrastructure',
    services: innovative2038ITServicesExpansions
  },
  {
    id: 'ai-services',
    name: 'AI & Consciousness',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI and consciousness technology',
    services: innovative2038AIServicesExpansions
  }
];

export default function Innovative2038Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const allServices = [
    ...innovative2038MicroSaasExpansions,
    ...innovative2038ITServicesExpansions,
    ...innovative2038AIServicesExpansions
  ];

  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allServices;
    const category = serviceCategories.find(cat => cat.id === selectedCategory);
    return category ? category.services : allServices;
  };

  const getPrice = (service: any) => {
    return billingCycle === 'monthly' ? service.price.monthly : service.price.yearly;
  };

  const getSavings = (service: any) => {
    if (billingCycle === 'yearly') {
      const monthlyTotal = service.price.monthly * 12;
      const yearlyPrice = service.price.yearly;
      return monthlyTotal - yearlyPrice;
    }
    return 0;
  };
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const innovative-2038-pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>innovative-2038-pricing | Zion Tech Group</title>
        <meta name="description" content="innovative-2038-pricing - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">innovative-2038-pricing</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default innovative-2038-pricing;

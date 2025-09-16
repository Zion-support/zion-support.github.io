<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';

import {
  Search, Grid, List, Star, CheckCircle, ArrowRight, Check,
  Brain, Atom, Shield, Building, Globe,
  Users, TrendingUp, Award, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new service data
import { advancedEnterpriseServices2025 } from '../data/2025-advanced-enterprise-services-expansion';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const allServices = [
  ...advancedEnterpriseServices2025,
      ...innovativeMicroSaasExpansion2025,
  ...cuttingEdgeITInfrastructureServices
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of advanced services'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Enterprise-grade AI and IT solutions'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Innovative micro SAAS solutions'
  },
  {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Cutting-edge infrastructure services'
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Advanced AI and ML platforms'
  },
  {
    id: 'quantum',
    name: 'Quantum Computing',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-violet-500 to-indigo-500',
    description: 'Quantum computing solutions'
  }
];

const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  return 'Other';
};

const getServicePricing = (service: any) => {
  if (service.price) return `${service.price}${service.period}`;
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  return 'Contact for pricing';
};

const getServiceFeatures = (service: any) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
};



export default function AdvancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState(allServices);

  useEffect(() => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        const category = getServiceCategory(service).toLowerCase();
        if (selectedCategory === 'enterprise') return category.includes('enterprise') || category.includes('legal') || category.includes('financial');
        if (selectedCategory === 'micro-saas') return category.includes('marketing') || category.includes('social') || category.includes('customer') || category.includes('project');
        if (selectedCategory === 'infrastructure') return category.includes('infrastructure') || category.includes('network') || category.includes('data center') || category.includes('edge');
        if (selectedCategory === 'ai-ml') return category.includes('ai') || category.includes('machine learning') || category.includes('nlp') || category.includes('ml');
        if (selectedCategory === 'quantum') return category.includes('quantum') || category.includes('quantum-resistant');
        return false;
      });
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 ${
        service.popular ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      {service.popular && (
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Star className="w-4 h-4" />
          Popular
        </div>
      )}
      
      <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
        <span className="text-4xl">{service.icon}</span>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {service.name}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {service.tagline}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {getServicePricing(service)}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {service.trialDays} day trial
          </span>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {service.setupTime} setup
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {service.customers ? service.customers.toLocaleString() : '1000'}+ customers
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {service.rating}/5 ({service.reviews} reviews)
            </span>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
          <div className="space-y-1">
            {getServiceFeatures(service).slice(0, 3).map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-3 h-3 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
              </div>
            ))}
            {getServiceFeatures(service).length > 3 && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                +{getServiceFeatures(service).length - 3} more features
              </span>
            )}
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ROI & Benefits:</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {service.roi}
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {service.marketPosition}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <a
            href={service.link}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <a
            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
            className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.div>
  );

  const ServiceList = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
        service.popular ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      <div className="p-6">
        <div className="flex items-start gap-6">
          <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <span className="text-3xl">{service.icon}</span>
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.name}
                  {service.popular && (
                    <span className="ml-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {service.tagline}
                </p>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {getServicePricing(service)}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {service.trialDays} day trial
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {service.setupTime} setup
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {service.customers ? service.customers.toLocaleString() : '1000'}+ customers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {service.rating}/5 ({service.reviews} reviews)
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                <div className="space-y-1">
                  {getServiceFeatures(service).slice(0, 4).map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ROI & Benefits:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {service.roi}
                </p>
                
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.marketPosition}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href={service.link}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a
                href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const 2025-advanced-services-showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2025-advanced-services-showcase | Zion Tech Group</title>
        <meta name="description" content="2025-advanced-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2025-advanced-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2025-advanced-services-showcase;
<<<<<<< HEAD
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  ArrowRight, Check,
  Star, Users, Award, Clock, DollarSign
} from 'lucide-react';

// Import all our new 2025 advanced services
import { advancedEdgeComputingServices } from '../data/2025-advanced-edge-computing-services';
import { advancedIoTSmartCityServices } from '../data/2025-advanced-iot-smart-city-services';
import { advancedFintechBlockchainServicesExpanded } from '../data/2025-advanced-fintech-blockchain-services-expanded';
import { advancedHealthcareBiotechServices } from '../data/2025-advanced-healthcare-biotech-services';
import { advancedSpaceAerospaceServices } from '../data/2025-advanced-space-aerospace-services';

// Import existing services
import { advancedAIMLServices } from '../data/2025-advanced-ai-ml-services';
import { advancedCybersecurityServices } from '../data/2025-advanced-cybersecurity-services';
import { advancedCloudDevOpsServices } from '../data/2025-advanced-cloud-devops-services';

const UltimateInnovativeServicesShowcaseExpanded: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popular' | 'price' | 'rating' | 'newest'>('popular');

  // Combine all services
  const allServices = [
    ...advancedEdgeComputingServices,
    ...advancedIoTSmartCityServices,
    ...advancedFintechBlockchainServicesExpanded,
    ...advancedHealthcareBiotechServices,
    ...advancedSpaceAerospaceServices,
    ...advancedAIMLServices,
    ...advancedCybersecurityServices,
    ...advancedCloudDevOpsServices
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Helper function to get service benefits/features
  const getServiceBenefits = (service: any) => {
    if (service.benefits) return service.benefits;
    if (service.features) return service.features;
    if (service.keyFeatures) return service.keyFeatures;
    return [];
  };

  // Helper function to get service pricing
  const getServicePricing = (service: any) => {
    if (typeof service.price === 'string') return service.price;
    if (service.price?.monthly) return `$${service.price.monthly.toLocaleString()}/month`;
    return 'Contact for pricing';
  };

  // Helper function to get service setup time
  const getServiceSetupTime = (service: any) => {
    if (service.setupTime) return service.setupTime;
    if (service.period) return service.period;
    return 'Contact for details';
  };

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.customers - a.customers;
        case 'price': {
          const aPrice = typeof a.price === 'string' ? 0 : a.price.monthly || 0;
          const bPrice = typeof b.price === 'string' ? 0 : b.price.monthly || 0;
          return aPrice - bPrice;
        }
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const 2025-ultimate-innovative-services-showcase-expanded: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2025-ultimate-innovative-services-showcase-expanded | Zion Tech Group</title>
        <meta name="description" content="2025-ultimate-innovative-services-showcase-expanded - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2025-ultimate-innovative-services-showcase-expanded</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2025-ultimate-innovative-services-showcase-expanded;

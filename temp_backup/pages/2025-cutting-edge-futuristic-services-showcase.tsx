<<<<<<< HEAD
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, ArrowRight, Check,
  Star, TrendingUp, Zap, Globe
} from 'lucide-react';
import { cuttingEdgeFuturisticServices } from '../data/2025-cutting-edge-futuristic-services';

// Helper function to get service category
const getServiceCategory = (service: { category?: string; type?: string }) => {
  if (service.category) return service.category;
  if (service.type) return service.type;
  return 'Other';
};



// Helper function to get service features
const getServiceFeatures = (service: { features?: string[]; keyFeatures?: string[] }) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
};

// Helper function to get service description
const getServiceDescription = (service: { description?: string; tagline?: string }) => {
  if (service.description) return service.description;
  if (service.tagline) return service.tagline;
  return 'No description available';
};

const CuttingEdgeFuturisticServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(cuttingEdgeFuturisticServices.map(service => getServiceCategory(service))))];

  // Filter and sort services
  const filteredServices = cuttingEdgeFuturisticServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || getServiceCategory(service) === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price': {
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          return priceA - priceB;
        }
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'popularity':
        default:
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
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

const 2025-cutting-edge-futuristic-services-showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2025-cutting-edge-futuristic-services-showcase | Zion Tech Group</title>
        <meta name="description" content="2025-cutting-edge-futuristic-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2025-cutting-edge-futuristic-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2025-cutting-edge-futuristic-services-showcase;

<<<<<<< HEAD
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, TrendingUp, DollarSign,
  Crown, Award, Zap
} from 'lucide-react';
import Link from 'next/link';

// Import our new service data
import { innovative2025Q4Services } from '../data/innovative-2025-q4-new-services';
import { emergingTech2025Q4Services } from '../data/emerging-tech-2025-q4-services';

// Combine all services
const allServices = [...innovative2025Q4Services, ...emergingTech2025Q4Services];

const ComprehensivePricing2025Q4: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'price' | 'popularity' | 'rating' | 'newest'>('price');

  // Filter services by category
  const filteredServices = allServices.filter(service => {
    if (selectedCategory === 'all') return true;
    return service.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''));
      case 'popularity':
        return b.customers - a.customers;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return 0;
    }
  });

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', count: allServices.filter(s => s.category.toLowerCase().includes('ai')).length },
    { id: 'quantum', name: 'Quantum Computing', count: allServices.filter(s => s.category.toLowerCase().includes('quantum')).length },
    { id: 'emerging', name: 'Emerging Technology', count: allServices.filter(s => s.category.toLowerCase().includes('emerging')).length },
    { id: 'space', name: 'Space Technology', count: allServices.filter(s => s.category.toLowerCase().includes('space')).length },
    { id: 'security', name: 'Security & Privacy', count: allServices.filter(s => s.category.toLowerCase().includes('security')).length }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };


=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const comprehensive-pricing-2025-q4: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-pricing-2025-q4 | Zion Tech Group</title>
        <meta name="description" content="comprehensive-pricing-2025-q4 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-pricing-2025-q4</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};


export default QuantumRealityEngineering2025;

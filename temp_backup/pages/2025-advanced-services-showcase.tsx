import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

// Mock data for demonstration
const allServices = [
  {
    id: 1,
    name: 'AI-Powered Analytics',
    description: 'Advanced analytics powered by artificial intelligence',
    category: 'AI',
    price: 500,
    popular: true,
    rating: 4.8,
    createdAt: '2025-01-01'
  },
  {
    id: 2,
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure solutions',
    category: 'Cloud',
    price: 800,
    popular: false,
    rating: 4.6,
    createdAt: '2025-01-15'
  }
];

export default function AdvancedServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('popularity');

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'popularity': 
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'price': 
        return a.price - b.price;
      case 'rating': 
        return b.rating - a.rating;
      case 'newest': 
        return new Date(b.createdAt) - new Date(a.createdAt);
      default: 
        return 0;
    }
  });

  const containerVariants = {
    hidden: {
      opacity: 0 
    },
    visible: {
      opacity: 1, 
      transition: {
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1, 
      y: 0, 
      transition: {
        duration: 0.5 
      }
    }
  };

  return (
    <>
      <Head>
        <title>Advanced Services Showcase 2025 - Zion Tech Group</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1, 
            y: 0 
          }}
          transition={{
            duration: 0.8 
          }}
          className="container mx-auto px-4 py-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent text-center">
            2025 Advanced Services Showcase
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-white/70">Technology Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-white/70">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-white/70">Expert Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
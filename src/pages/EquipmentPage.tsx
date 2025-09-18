import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, ShoppingCart, Package, Zap, Shield, Cpu, HardDrive, Network, Power, Snowflake } from 'lucide-react';

export default function EquipmentPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'All Equipment', icon: Package, count: 156 },
    { id: 'servers', name: 'Servers', icon: Cpu, count: 23 },
    { id: 'networking', name: 'Networking', icon: Network, count: 34 },
    { id: 'storage', name: 'Storage', icon: HardDrive, count: 28 },
    { id: 'power', name: 'Power Systems', icon: Power, count: 19 },
    { id: 'cooling', name: 'Cooling', icon: Snowflake, count: 15 },
    { id: 'security', name: 'Security', icon: Shield, count: 22 },
    { id: 'ai', name: 'AI Hardware', icon: Zap, count: 15 }
  ];

  const equipment = [
    {
      id: 1,
      name: 'Enterprise Server Rack',
      category: 'servers',
      brand: 'Dell',
      price: 2499,
      rating: 4.8,
      reviews: 127,
      inStock: true,
      image: '/api/placeholder/300/200',
      description: 'High-performance enterprise server rack with advanced cooling and power management.'
    },
    {
      id: 2,
      name: 'Network Switch 48-Port',
      category: 'networking',
      brand: 'Cisco',
      price: 899,
      rating: 4.6,
      reviews: 89,
      inStock: true,
      image: '/api/placeholder/300/200',
      description: 'Professional-grade network switch with PoE support and advanced management features.'
    },
    {
      id: 3,
      name: 'SSD Storage Array',
      category: 'storage',
      brand: 'Samsung',
      price: 1599,
      rating: 4.9,
      reviews: 203,
      inStock: false,
      image: '/api/placeholder/300/200',
      description: 'High-speed SSD storage array with enterprise-grade reliability and performance.'
    },
    {
      id: 4,
      name: 'UPS Power System',
      category: 'power',
      brand: 'APC',
      price: 599,
      rating: 4.7,
      reviews: 156,
      inStock: true,
      image: '/api/placeholder/300/200',
      description: 'Uninterruptible power supply system with extended runtime and monitoring capabilities.'
    },
    {
      id: 5,
      name: 'AI Training Server',
      category: 'ai',
      brand: 'NVIDIA',
      price: 8999,
      rating: 4.9,
      reviews: 67,
      inStock: true,
      image: '/api/placeholder/300/200',
      description: 'Dedicated AI training server with multiple GPUs and optimized for machine learning workloads.'
    },
    {
      id: 6,
      name: 'Data Center Cooling Unit',
      category: 'cooling',
      brand: 'Carrier',
      price: 3499,
      rating: 4.5,
      reviews: 42,
      inStock: true,
      image: '/api/placeholder/300/200',
      description: 'Industrial-grade cooling system designed for data center environments with precise temperature control.'
    }
  ];

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedEquipment = [...filteredEquipment].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            Enterprise Equipment Marketplace
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto"
          >
            Discover premium IT infrastructure, networking equipment, and AI hardware from leading manufacturers
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for equipment, brands, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                    : 'border-zion-slate-light text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                <span className="bg-zion-slate-light/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Sort Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-between items-center mb-8"
        >
          <div className="flex items-center gap-4">
            <span className="text-zion-slate-light">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-zion-slate-dark border border-zion-slate-light text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div className="text-zion-slate-light">
            {filteredEquipment.length} equipment found
          </div>
        </motion.div>

        {/* Equipment Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedEquipment.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-zion-slate-dark border border-zion-slate-light rounded-xl overflow-hidden hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              <div className="aspect-video bg-zion-slate-light/20 flex items-center justify-center">
                <Package className="w-16 h-16 text-zion-slate-light" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                    <p className="text-zion-slate-light text-sm mb-2">{item.brand}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">${item.price.toLocaleString()}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-zion-slate-light">{item.rating}</span>
                      <span className="text-xs text-zion-slate-light">({item.reviews})</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zion-slate-light uppercase tracking-wide">
                    {categories.find(c => c.id === item.category)?.name}
                  </span>
                  <button className="px-4 py-2 bg-zion-cyan text-futuristic font-medium rounded-lg hover:bg-zion-cyan/90 transition-colors">
                    View Details
                  </button>
                </div>
                
                {!item.inStock && (
                  <div className="mt-3 text-center">
                    <span className="text-red-400 text-sm font-medium">Out of Stock</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Need Custom Equipment Solutions?</h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our team can help you design and source custom IT infrastructure solutions tailored to your specific requirements.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-futuristic font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105">
            Contact Sales Team
          </button>
        </motion.div>
      </div>
    </div>
  );
}

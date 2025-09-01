import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { innovativeITInfrastructure2026 } from '../data/innovativeITInfrastructure2026';

const ITInfrastructure2026: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getFilteredServices = () => {
    let services = innovativeITInfrastructure2026;

    // Filter by search query
    if (searchQuery) {
      services = services.filter(service => 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      services = services.filter(service => service.category === selectedCategory);
    }

    return services;
  };

  const getCategories = () => {
    const categories = [...new Set(innovativeITInfrastructure2026.map(service => service.category))];
    return categories;
  };

  const renderServiceCard = (service: any) => (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      <div className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
          <span className="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full">
            {service.pricing}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Price:</span>
            <span className="text-lg font-bold text-gray-900">${service.price.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Model:</span>
            <span className="text-sm text-gray-700">{service.pricingModel}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Users:</span>
            <span className="text-sm text-gray-700">{service.userLimit}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
          <div className="grid grid-cols-1 gap-1">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
          <div className="grid grid-cols-1 gap-1">
            {service.benefits.slice(0, 3).map((benefit: string, index: number) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Market Price:</span>
            <span className="text-sm font-semibold text-gray-700">{service.marketPrice}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">ROI:</span>
            <span className="text-sm font-semibold text-green-600">{service.roi}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Setup:</span>
            <span className="text-sm text-gray-700">{service.setupTime}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Target Audience:</h4>
          <div className="flex flex-wrap gap-1">
            {service.targetAudience.slice(0, 3).map((audience: string, index: number) => (
              <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                {audience}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {service.technologies.slice(0, 4).map((tech: string, index: number) => (
              <span key={index} className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500">Free Tier:</span>
            <span className={`text-sm font-semibold ${service.freeTier ? 'text-green-600' : 'text-red-600'}`}>
              {service.freeTier ? 'Available' : 'Not Available'}
            </span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500">Trial Period:</span>
            <span className="text-sm text-gray-700">{service.trialPeriod}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Innovation Level:</span>
            <span className="text-sm font-semibold text-blue-600">{service.innovationLevel}</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Contact Zion Tech Group</p>
            <div className="space-y-1 text-xs text-gray-600">
              <p>📞 {service.contactInfo.phone}</p>
              <p>✉️ {service.contactInfo.email}</p>
              <p>🌐 {service.contactInfo.website}</p>
              <p>📍 {service.contactInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <SEO 
        title="IT Infrastructure Services 2026 - Zion Tech Group"
        description="Discover our modern IT infrastructure solutions for 2026. From cloud optimization to edge computing, we deliver scalable, secure, and efficient infrastructure services."
        keywords="IT infrastructure 2026, cloud computing, edge computing, data center, Zion Tech Group, infrastructure solutions"
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            IT Infrastructure Services 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Build the foundation for your digital future with our modern IT infrastructure services. From cloud optimization to edge computing, 
            we deliver scalable, secure, and efficient solutions that power your business transformation.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
            <div className="text-gray-600">Infrastructure Services</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-cyan-600 mb-2">$400B+</div>
            <div className="text-gray-600">Total Market Size</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">350%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">2-8</div>
            <div className="text-gray-600">Weeks Setup</div>
          </div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-lg mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search IT infrastructure services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {getCategories().map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {getFilteredServices().map((service) => renderServiceCard(service))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-center text-white mt-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Digital Foundation?</h2>
          <p className="text-xl mb-6 opacity-90">
            Contact Zion Tech Group today to discuss how our modern IT infrastructure services can power your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
            </a>
            <a
              href="/comprehensive-pricing-guide-2026"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ITInfrastructure2026;
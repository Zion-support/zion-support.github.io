import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Rocket, 
  Cloud, 
  Globe, 
  Code, 
  Database, 
  Network, 
  Lock, 
  Cpu, 
  BarChart3, 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Server, 
  Search, 
  Filter, 
  Grid, 
  List 
} from 'lucide-react';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'quantum', name: 'Quantum Tech', icon: Zap },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'data', name: 'Data & Analytics', icon: Database },
    { id: 'iot', name: 'IoT & Edge', icon: Network },
    { id: 'blockchain', name: 'Blockchain', icon: Lock }
  ];

  const services = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      category: 'ai',
      icon: Brain,
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
      link: '/services/ai-solutions'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problem-solving and optimization.',
      category: 'quantum',
      icon: Zap,
      features: ['Quantum Algorithms', 'Optimization', 'Simulation', 'Cryptography'],
      link: '/services/quantum-computing'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and ensure compliance.',
      category: 'security',
      icon: Shield,
      features: ['Threat Detection', 'Identity Management', 'Compliance', 'Incident Response'],
      link: '/services/cybersecurity'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and DevOps automation for modern applications.',
      category: 'cloud',
      icon: Cloud,
      features: ['Cloud Migration', 'DevOps Automation', 'Containerization', 'Monitoring'],
      link: '/services/cloud-devops'
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
      category: 'data',
      icon: Database,
      features: ['Data Processing', 'Business Intelligence', 'Predictive Analytics', 'Visualization'],
      link: '/services/data-analytics'
    },
    {
      id: 'iot-edge',
      title: 'IoT & Edge Computing',
      description: 'Internet of Things solutions with edge computing for real-time data processing.',
      category: 'iot',
      icon: Network,
      features: ['IoT Platforms', 'Edge Computing', 'Real-time Processing', 'Device Management'],
      link: '/services/iot-edge-computing'
    },
    {
      id: 'blockchain',
      title: 'Blockchain Solutions',
      description: 'Secure and transparent blockchain technology for various industry applications.',
      category: 'blockchain',
      icon: Lock,
      features: ['Smart Contracts', 'DeFi', 'Supply Chain', 'Digital Identity'],
      link: '/services/blockchain-enterprise-solutions'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business operations.',
      category: 'transformation',
      icon: TrendingUp,
      features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Technology Integration'],
      link: '/services/digital-transformation'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <Rocket className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of cutting-edge technology solutions designed to transform your business and drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {service.description}
                          </p>
                          
                          {/* Features */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {service.features.map((feature, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <Link
                            to={service.link}
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
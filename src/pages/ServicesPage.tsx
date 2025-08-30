import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Search,
  Filter,
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  DollarSign,
  Target,
  TrendingUp,
  Globe,
  Award
} from 'lucide-react';
import { revolutionaryMicroSaasServices2030, revolutionaryITServices2030, revolutionaryAIServices2030 } from '../data/revolutionaryServices2030';

export function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const allServices = [
    ...revolutionaryMicroSaasServices2030.map(service => ({ ...service, type: 'Micro SaaS' })),
    ...revolutionaryITServices2030.map(service => ({ ...service, type: 'IT Services' })),
    ...revolutionaryAIServices2030.map(service => ({ ...service, type: 'AI Services' }))
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: Zap },
    { id: 'IT Services', name: 'IT Services', icon: Cpu },
    { id: 'AI Services', name: 'AI Services', icon: Brain }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const stats = [
    { label: 'Total Services', value: allServices.length.toString(), icon: Target },
    { label: 'Categories', value: categories.length.toString(), icon: Globe },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '4.9/5', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI, IT, & Micro SaaS Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of AI services, IT solutions, and micro SaaS platforms. Find the perfect technology solution for your business needs." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, technology solutions, digital transformation, cybersecurity, cloud services" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-futuristic-enhanced">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Comprehensive
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Service Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our cutting-edge technology solutions designed to transform your business 
              and drive innovation across all industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 border-cyan-500 text-white'
                        : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-cyan-500'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={`${service.type}-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Service Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs rounded-full border ${
                    service.type === 'Micro SaaS' 
                      ? 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                      : service.type === 'AI Services'
                      ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                      : 'bg-green-500/20 text-green-400 border-green-500/30'
                  }`}>
                    {service.type}
                  </span>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                    {service.category}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-cyan-400" />
                    <span className="text-2xl font-bold text-white">
                      ${service.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-sm">/{service.pricingModel}</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-cyan-400 text-sm">+{service.features.length - 3} more features</span>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Info */}
                <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Market Price:</span>
                      <div className="text-cyan-400 font-medium">{service.marketPrice}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">ROI:</span>
                      <div className="text-emerald-400 font-medium">{service.roi}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert team can develop tailored technology solutions to meet your specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Request Custom Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

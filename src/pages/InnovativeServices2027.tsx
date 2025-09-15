import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  Star, 
  Target, 
  TrendingUp, 
  Award,
  Zap,
  Eye,
  BarChart3,
  Smartphone,
  Building2,
  Car,
  Leaf,
  Satellite,
  Banknote,
  Building,
  Phone
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from '../data/innovativeMicroSaasServices2027';
import SEO from '../components/SEO';

const categoryIcons: { [key: string]: React.ComponentType<any> } = {
  'AI & Customer Success': Brain,
  'Blockchain & DeFi': Lock,
  'Quantum Computing': Zap,
  'AI & Healthcare': Heart,
  'Metaverse & AR/VR': Eye,
  'Autonomous Systems': Car,
  'Green Tech': Leaf,
  'Space Tech': Satellite,
  'FinTech': Banknote,
  'IoT & Smart Cities': Building
};

const categoryColors: { [key: string]: string } = {
  'AI & Customer Success': 'from-cyan-500 to-blue-600',
  'Blockchain & DeFi': 'from-purple-500 to-indigo-600',
  'Quantum Computing': 'from-violet-500 to-purple-600',
  'AI & Healthcare': 'from-emerald-500 to-green-600',
  'Metaverse & AR/VR': 'from-pink-500 to-rose-600',
  'Autonomous Systems': 'from-orange-500 to-red-600',
  'Green Tech': 'from-green-500 to-emerald-600',
  'Space Tech': 'from-slate-500 to-gray-600',
  'FinTech': 'from-yellow-500 to-amber-600',
  'IoT & Smart Cities': 'from-blue-500 to-cyan-600'
};

export default function InnovativeServices2027() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'innovation' | 'roi'>('innovation');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_MICRO_SAAS_SERVICES_2027.map(service => service.category)))];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
      case 'innovation':
        return a.innovationLevel === 'revolutionary' ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="2027 Innovative Services - Zion Tech Group"
        description="Discover our revolutionary 2027 services portfolio featuring cutting-edge AI, Quantum Computing, Blockchain, and emerging technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              2027 Innovative Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI, Quantum Computing, Blockchain, and emerging technology solutions 
              that are transforming industries worldwide. Experience the future of technology today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold shadow-lg"
              >
                🚀 Cutting-Edge Innovation
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white font-semibold shadow-lg"
              >
                💎 Premium Quality
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white font-semibold shadow-lg"
              >
                🌟 Market Leading ROI
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-gray-700/50">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </motion.button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="innovation">Sort by Innovation</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-responsive">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchQuery}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Service Header */}
                  <div className={`p-6 bg-gradient-to-br ${categoryColors[service.category] || 'from-gray-600 to-gray-700'}`}>
                    <div className="flex items-center justify-between mb-4">
                      {React.createElement(categoryIcons[service.category] || Star, {
                        className: "w-8 h-8 text-white",
                        size: 32
                      })}
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-white">
                        {service.innovationLevel}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm">{service.description}</p>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    {/* Pricing and ROI */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-cyan-400">
                          ${service.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-400">per month</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-green-400">
                          {service.roi}
                        </p>
                        <p className="text-sm text-gray-400">ROI</p>
                      </div>
                    </div>

                    {/* Market Price */}
                    <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
                      <p className="text-sm text-gray-400">Market Price Range</p>
                      <p className="text-lg font-semibold text-white">{service.marketPrice}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-center">
                            <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-center">
                            <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 4).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-800/50 text-xs text-gray-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Get Started - Contact Us
                    </motion.button>

                    {/* Contact Info */}
                    <div className="mt-4 text-center">
                      <p className="text-xs text-gray-500">
                        Contact: {service.contactInfo.phone} | {service.contactInfo.email}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-center">
                        <p className="text-white font-semibold mb-2">Ready to Transform Your Business?</p>
                        <p className="text-white/80 text-sm">
                          Our team of experts is ready to help you implement this revolutionary solution.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                View All Services
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Lead the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the elite group of forward-thinking companies that are already leveraging our 
              revolutionary 2027 services to gain competitive advantages and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg text-lg"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800/50 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-lg"
                onClick={() => window.location.href = '/pricing'}
              >
                View Pricing Plans
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900/30">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Building className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
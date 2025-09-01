import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Database, 
  TrendingUp, 
  Rocket, 
  Globe,
  Zap,
  Cpu,
  Network,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  DollarSign,
  Clock,
  Users,
  Target,
  BarChart3,
  Lock,
  Sparkles,
  Atom,
  Satellite,
  Palette,
  Building2
} from 'lucide-react';
import ULTIMATE_INNOVATIVE_SERVICES_2028 from '../data/ultimateInnovativeServices2028';

const UltimateInnovativeServicesShowcase2028: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('innovation');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Business Automation', name: 'AI & Business Automation', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'Cybersecurity & Quantum Computing', name: 'Cybersecurity & Quantum', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'Healthcare & AI', name: 'Healthcare & AI', icon: Database, color: 'from-green-500 to-emerald-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: Network, color: 'from-yellow-500 to-orange-500' },
    { id: 'Financial Services & AI', name: 'Financial Services & AI', icon: TrendingUp, color: 'from-emerald-500 to-teal-500' },
    { id: 'Quantum Computing & Edge', name: 'Quantum & Edge', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'Supply Chain & AI', name: 'Supply Chain & AI', icon: Globe, color: 'from-blue-500 to-indigo-500' },
    { id: 'Space Technology & AI', name: 'Space Technology', icon: Satellite, color: 'from-gray-500 to-slate-500' },
    { id: 'Content Creation & AI', name: 'Content Creation & AI', icon: Palette, color: 'from-pink-500 to-rose-500' },
    { id: 'Micro-SaaS & Business', name: 'Micro-SaaS & Business', icon: Building2, color: 'from-violet-500 to-purple-500' }
  ];

  const filteredServices = ULTIMATE_INNOVATIVE_SERVICES_2028.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'innovation':
        return b.price - a.price; // Higher price = more innovative
      case 'roi':
        return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ultimate Innovative Services
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                2028
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of technology with our cutting-edge AI, Quantum Computing, 
              Blockchain, and Space Technology solutions. Transform your business with 
              revolutionary innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us: +1 302 464 0950
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                kleber@ziontechgroup.com
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6 text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-red-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white font-semibold">364 E Main St STE 1008</p>
                <p className="text-white font-semibold">Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Search and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="innovation">Sort by Innovation</option>
              <option value="price">Sort by Price</option>
              <option value="roi">Sort by ROI</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {sortedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group"
            >
              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {service.innovationLevel === 'Revolutionary' && (
                      <Star className="w-5 h-5 text-yellow-400" />
                    )}
                    {service.innovationLevel === 'Cutting-Edge' && (
                      <Award className="w-5 h-5 text-purple-400" />
                    )}
                    {service.innovationLevel === 'Advanced' && (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    )}
                  </div>
                </div>

                {/* Innovation Level Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30">
                  <Sparkles className="w-3 h-3" />
                  {service.innovationLevel}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                  Benefits
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <TrendingUp className="w-3 h-3 text-blue-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing and ROI */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Monthly Price</p>
                    <p className="text-2xl font-bold text-white">
                      ${(service.price / 1000).toFixed(1)}K
                    </p>
                    <p className="text-xs text-gray-400">Market: {service.marketPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">ROI</p>
                    <p className="text-lg font-bold text-green-400">{service.roi}</p>
                    <p className="text-xs text-gray-400">Delivery: {service.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              {/* Contact and Action */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Get Started
                </motion.button>
                
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-2">Ready to transform your business?</p>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <a
                      href={`tel:${service.contactInfo.phone}`}
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <Phone className="w-3 h-3" />
                      Call Now
                    </a>
                    <a
                      href={`mailto:${service.contactInfo.email}`}
                      className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors duration-300"
                    >
                      <Mail className="w-3 h-3" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-md border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-xl mb-4">No services found</div>
            <p className="text-gray-500">Try adjusting your search criteria or category selection</p>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the future of technology with our cutting-edge solutions. 
              Our team of experts is ready to help you implement these revolutionary services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-blue-400 font-semibold">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm">24/7 Support Available</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-green-400 font-semibold">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">Quick Response Guaranteed</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-purple-400 font-semibold">364 E Main St STE 1008</p>
                <p className="text-gray-400 text-sm">Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href={`tel:+13024640950`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </motion.a>
              
              <motion.a
                href={`mailto:kleber@ziontechgroup.com`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email: kleber@ziontechgroup.com
              </motion.a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Visit our website for more information</p>
              <motion.a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
              >
                ziontechgroup.com
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateInnovativeServicesShowcase2028;
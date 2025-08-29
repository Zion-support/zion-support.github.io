import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Rocket, 
  Heart, 
  Atom,
  Cpu,
  Globe,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { COMPREHENSIVE_SERVICES_INDEX_2030 } from '../data/comprehensiveServicesIndex2030';

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const categories = [
    { id: 'all', name: 'All Services', count: COMPREHENSIVE_SERVICES_INDEX_2030.length },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Business Intelligence').length },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Healthcare').length },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Legal Tech').length },
    { id: 'AI & Operations', name: 'AI & Operations', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Operations').length },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Green Tech').length },
    { id: 'AI & Autonomous Systems', name: 'AI & Autonomous Systems', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Autonomous Systems').length },
    { id: 'AI & FinTech', name: 'AI & FinTech', count: COMPREHENSIVE_SERVICES_2030.filter(s => s.category === 'AI & FinTech').length },
    { id: 'AI & Content', name: 'AI & Content', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Content').length },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Customer Support').length },
    { id: 'AI & HR', name: 'AI & HR', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & HR').length },
    { id: 'AI & Research', name: 'AI & Research', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Research').length },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Metaverse').length },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Space Tech').length },
    { id: 'AI & Development', name: 'AI & Development', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Development').length },
    { id: 'AI & Education', name: 'AI & Education', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Education').length },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'AI & Entertainment').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Cloud & DevOps').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Quantum Computing').length },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'IoT & Edge Computing').length },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Blockchain & Web3').length },
    { id: 'Digital Twin', name: 'Digital Twin', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Digital Twin').length },
    { id: 'Space Technology', name: 'Space Technology', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Space Technology').length },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Sustainable Technology').length },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'IT Infrastructure').length },
    { id: 'Emerging Technology', name: 'Emerging Technology', count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === 'Emerging Technology').length }
  ];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Business Intelligence': Brain,
      'AI & Healthcare': Heart,
      'AI & Legal Tech': Shield,
      'AI & Operations': TrendingUp,
      'AI & Green Tech': Globe,
      'AI & Autonomous Systems': Rocket,
      'AI & FinTech': TrendingUp,
      'AI & Content': Award,
      'AI & Customer Support': Users,
      'AI & HR': Users,
      'AI & Research': Brain,
      'AI & Metaverse': Globe,
      'AI & Space Tech': Rocket,
      'AI & Development': Cpu,
      'AI & Education': Award,
      'AI & Entertainment': Award,
      'Cybersecurity': Shield,
      'Cloud & DevOps': Cpu,
      'Quantum Computing': Atom,
      'IoT & Edge Computing': Cpu,
      'Blockchain & Web3': Globe,
      'Digital Twin': Cpu,
      'Space Technology': Rocket,
      'Sustainable Technology': Globe,
      'IT Infrastructure': Cpu,
      'Emerging Technology': Rocket
    };
    return iconMap[category] || Rocket;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Business Intelligence': 'from-purple-500 to-pink-500',
      'AI & Healthcare': 'from-pink-500 to-red-500',
      'AI & Legal Tech': 'from-blue-500 to-indigo-500',
      'AI & Operations': 'from-gray-500 to-slate-500',
      'AI & Green Tech': 'from-green-500 to-emerald-500',
      'AI & Autonomous Systems': 'from-cyan-500 to-blue-500',
      'AI & FinTech': 'from-emerald-500 to-green-500',
      'AI & Content': 'from-orange-500 to-red-500',
      'AI & Customer Support': 'from-blue-500 to-purple-500',
      'AI & HR': 'from-indigo-500 to-blue-500',
      'AI & Research': 'from-purple-500 to-violet-500',
      'AI & Metaverse': 'from-purple-500 to-indigo-500',
      'AI & Space Tech': 'from-indigo-500 to-purple-500',
      'AI & Development': 'from-cyan-500 to-blue-500',
      'AI & Education': 'from-blue-500 to-indigo-500',
      'AI & Entertainment': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud & DevOps': 'from-blue-500 to-cyan-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'IoT & Edge Computing': 'from-teal-500 to-cyan-500',
      'Blockchain & Web3': 'from-yellow-500 to-orange-500',
      'Digital Twin': 'from-blue-500 to-indigo-500',
      'Space Technology': 'from-purple-500 to-pink-500',
      'Sustainable Technology': 'from-green-500 to-teal-500',
      'IT Infrastructure': 'from-slate-500 to-gray-500',
      'Emerging Technology': 'from-violet-500 to-purple-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };

  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'aiScore') return b.aiScore - a.aiScore;
    return 0;
  });

  const priceRanges = [
    { min: 0, max: 5000, label: 'Under $5,000', count: sortedServices.filter(s => s.price < 5000).length },
    { min: 5000, max: 10000, label: '$5,000 - $10,000', count: sortedServices.filter(s => s.price >= 5000 && s.price < 10000).length },
    { min: 10000, max: 20000, label: '$10,000 - $20,000', count: sortedServices.filter(s => s.price >= 10000 && s.price < 20000).length },
    { min: 20000, max: Infinity, label: 'Over $20,000', count: sortedServices.filter(s => s.price >= 20000).length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="Comprehensive Pricing Guide - Zion Tech Group Services | Zion Tech Group"
        description="Explore our comprehensive pricing guide for all AI, IT, and technology services. Find the perfect solution for your business needs with transparent pricing and detailed features."
        keywords="Pricing, AI Services, IT Services, Technology Services, Micro SaaS, Zion Tech Group"
        canonical="https://ziontechgroup.com/pricing"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Pricing Guide
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
              Explore our complete portfolio of AI, IT, and technology services with transparent pricing, 
              detailed features, and ROI projections. Find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{COMPREHENSIVE_SERVICES_INDEX_2030.length}+</div>
              <div className="text-gray-600">Total Services</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{categories.length}</div>
              <div className="text-gray-600">Service Categories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">$2,999</div>
              <div className="text-gray-600">Starting Price</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">500%+</div>
              <div className="text-gray-600">Average ROI</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 8).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="aiScore">AI Score</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Price Ranges Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Price Range Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services are designed to fit various budgets and business needs, from startups to enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {priceRanges.map((range, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">{range.count}</div>
                <div className="text-gray-700 font-medium">{range.label}</div>
                <div className="text-sm text-gray-500 mt-2">Services Available</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our comprehensive collection of AI, IT, and technology services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`h-2 bg-gradient-to-r ${categoryColor}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${categoryColor} rounded-lg flex items-center justify-center mr-3`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-500">{service.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-700">{service.rating}</span>
                        <span className="text-xs text-gray-500 ml-1">({service.reviewCount})</span>
                      </div>
                      <div className="text-sm text-gray-500">AI Score: {service.aiScore}</div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-blue-600">${service.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-500">{service.availability}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span>Market: {service.marketPrice}</span>
                        <span>ROI: {service.roi}</span>
                      </div>
                      
                      <Link
                        to={`/services/${service.id}`}
                        className="w-full inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a custom quote tailored to your specific needs and start your digital transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

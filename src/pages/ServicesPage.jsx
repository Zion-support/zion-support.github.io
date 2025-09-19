import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Zap, 
  Shield, 
  Code, 
  BarChart3, 
  Bot, 
  Building, 
  CheckCircle, 
  Sparkles, 
  Brain, 
  Database, 
  Cloud, 
  Smartphone, 
  FileText, 
  Settings, 
  DollarSign, 
  Clock, 
  Target, 
  Cpu, 
  Heart, 
  Eye, 
  ExternalLink, 
  Play, 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin,
  Atom,
  Globe,
  Lock,
  Rocket,
  Leaf,
  Car,
  Home,
  Activity,
  ShoppingBag
} from 'lucide-react';

// Import our 2026 services
import { INNOVATIVE_MICRO_SAAS_SERVICES_2026 } from '../data/innovativeMicroSaasServices2026';
import { ALL_INDUSTRY_SOLUTIONS_2026 } from '../data/specializedIndustrySolutions2026';
import { ALL_BLOCKCHAIN_WEB3_SERVICES_2026 } from '../data/blockchainWeb3Services2026';
import { ALL_IOT_EDGE_SERVICES_2026 } from '../data/iotEdgeComputingServices2026';

// Combine all services
const ALL_SERVICES = [
  ...INNOVATIVE_MICRO_SAAS_SERVICES_2026,
  ...ALL_INDUSTRY_SOLUTIONS_2026,
  ...ALL_BLOCKCHAIN_WEB3_SERVICES_2026,
  ...ALL_IOT_EDGE_SERVICES_2026
];

const categoryIcons = {
  'Quantum Computing': Atom,
  'AI & Machine Learning': Brain,
  'Blockchain & Web3': Globe,
  'Cybersecurity': Shield,
  'IoT & Edge Computing': Activity,
  'Healthcare': Heart,
  'Financial Services': DollarSign,
  'Manufacturing': Building,
  'Energy': Zap,
  'Education': BookOpen,
  'Agriculture': Leaf,
  'Transportation': Car,
  'Smart Home': Home,
  'Environmental': Leaf,
  'Space Technology': Rocket,
  'Biotechnology': Heart,
  'Legal Tech': FileText,
  'Real Estate': Building,
  'Supply Chain': Building,
  'Retail': ShoppingBag,
  'Entertainment': Play,
  'Research': Brain
};

const categoryColors = {
  'Quantum Computing': 'from-purple-500 to-pink-500',
  'AI & Machine Learning': 'from-blue-500 to-cyan-500',
  'Blockchain & Web3': 'from-green-500 to-emerald-500',
  'Cybersecurity': 'from-red-500 to-pink-500',
  'IoT & Edge Computing': 'from-orange-500 to-red-500',
  'Healthcare': 'from-red-500 to-pink-500',
  'Financial Services': 'from-green-500 to-emerald-500',
  'Manufacturing': 'from-blue-500 to-indigo-500',
  'Energy': 'from-yellow-500 to-orange-500',
  'Education': 'from-indigo-500 to-purple-500',
  'Agriculture': 'from-green-500 to-teal-500',
  'Transportation': 'from-blue-500 to-cyan-500',
  'Smart Home': 'from-purple-500 to-pink-500',
  'Environmental': 'from-green-500 to-emerald-500',
  'Space Technology': 'from-purple-500 to-violet-500',
  'Biotechnology': 'from-red-500 to-pink-500',
  'Legal Tech': 'from-indigo-500 to-purple-500',
  'Real Estate': 'from-blue-500 to-indigo-500',
  'Supply Chain': 'from-orange-500 to-red-500',
  'Retail': 'from-pink-500 to-rose-500',
  'Entertainment': 'from-purple-500 to-pink-500',
  'Research': 'from-cyan-500 to-blue-500'
};

const getCategoryIcon = (category) => {
  return categoryIcons[category] || Settings;
};

const getCategoryColor = (category) => {
  return categoryColors[category] || 'from-gray-500 to-gray-600';
};

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredServices = useMemo(() => {
    let filtered = ALL_SERVICES;

    // Search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        (service.tags && service.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Price range filter
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'low':
          filtered = filtered.filter(service => service.price <= 1000);
          break;
        case 'medium':
          filtered = filtered.filter(service => service.price > 1000 && service.price <= 10000);
          break;
        case 'high':
          filtered = filtered.filter(service => service.price > 10000);
          break;
        default:
          break;
      }
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const categories = [...new Set(ALL_SERVICES.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Group
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
              Services 2026
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover our cutting-edge micro SAAS, IT, and AI services designed to transform your business 
            with innovative solutions for the future.
          </p>
        </motion.div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              <option value="all">All Prices</option>
              <option value="low">Under $1,000</option>
              <option value="medium">$1,000 - $10,000</option>
              <option value="high">Over $10,000</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20"
              >
                {/* Service Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center`}>
                    <getCategoryIcon(service.category) className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{service.name}</h3>
                    <p className="text-sm text-zion-slate-light">{service.category}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                  {service.description.substring(0, 120)}...
                </p>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-zion-slate-light mb-2">Key Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-zion-slate-light/10 text-zion-slate-light px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing & Details */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-zion-cyan font-bold">
                    ${service.price.toLocaleString()}
                  </div>
                  <div className="text-zion-slate-light text-sm">
                    {service.pricingModel || 'Professional'}
                  </div>
                </div>

                {/* ROI & Setup Time */}
                <div className="flex items-center justify-between text-xs text-zion-slate-light mb-4">
                  <span>ROI: {service.roi || '300%+ within 12 months'}</span>
                  <span>Setup: {service.setupTime || '2-4 weeks'}</span>
                </div>

                {/* Contact Button */}
                <div className="flex gap-2">
                  <a
                    href={`mailto:${service.contactInfo?.email || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name}`}
                    className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-center py-2 px-4 rounded-lg hover:from-zion-blue to-zion-cyan transition-all duration-300 text-sm font-medium"
                  >
                    Contact Us
                  </a>
                  <a
                    href={service.contactInfo?.website || 'https://ziontechgroup.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-zion-slate-light/20 text-zion-slate-light rounded-lg hover:border-zion-cyan/50 hover:text-zion-cyan transition-all duration-300 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-zion-slate-light text-lg">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="mt-4 text-zion-cyan hover:text-zion-blue transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Contact us to learn more about our innovative services and how they can help your organization thrive in 2026 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-lg hover:from-zion-blue to-zion-cyan transition-all duration-300 font-medium"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center gap-2 border border-zion-cyan text-zion-cyan px-6 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium"
              >
                <Mail className="w-5 h-5" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <p className="text-zion-slate-light text-sm mt-6">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
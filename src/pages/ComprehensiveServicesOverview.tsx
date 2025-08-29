import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Shield,
  Server,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Sparkles,
  DollarSign,
  Building,
  Target,
  Bot,
  Eye,
  Smartphone
} from 'lucide-react';

// Mock data for services (replace with actual imports when available)
const ALL_SERVICES = [
  {
    id: 'ai-legal-tech',
    title: 'AI-Powered Legal Tech Solutions',
    description: 'Advanced legal technology powered by artificial intelligence for document analysis, contract review, and legal research.',
    category: 'AI & Legal Tech',
    price: '$299',
    supportLevel: 'premium',
    tags: ['Legal Tech', 'AI', 'Document Analysis', 'Contract Review'],
    features: ['Automated document review', 'Contract analysis', 'Legal research assistance', 'Compliance monitoring'],
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: 'ai-fintech',
    title: 'AI-Driven Financial Technology',
    description: 'Intelligent financial solutions including fraud detection, risk assessment, and automated trading systems.',
    category: 'AI & FinTech',
    price: '$499',
    supportLevel: 'enterprise',
    tags: ['FinTech', 'AI', 'Fraud Detection', 'Risk Assessment'],
    features: ['Fraud detection', 'Risk assessment', 'Automated trading', 'Financial analytics'],
    rating: 4.9,
    reviewCount: 234
  },
  {
    id: 'ai-healthcare',
    title: 'AI Healthcare Solutions',
    description: 'Healthcare technology powered by AI for diagnosis, patient monitoring, and medical research.',
    category: 'AI & Healthcare',
    price: '$399',
    supportLevel: 'premium',
    tags: ['Healthcare', 'AI', 'Diagnosis', 'Patient Monitoring'],
    features: ['Medical diagnosis', 'Patient monitoring', 'Drug discovery', 'Health analytics'],
    rating: 4.7,
    reviewCount: 189
  }
];

const categoryIcons = {
  'AI & Legal Tech': FileText,
  'AI & FinTech': DollarSign,
  'AI & Healthcare': Heart,
  'Cybersecurity & Quantum': Shield,
  'AI & Supply Chain': Building,
  'AI & Energy': Zap,
  'AI & Customer Experience': Users,
  'Quantum & AI': Cpu,
  'AI & Data Governance': Database,
  'AI & HR Tech': Users,
  'AI & Machine Learning': Brain,
  'AI & Business Intelligence': BarChart3,
  'AI & Marketing Automation': Target,
  'AI & CRM': Users,
  'AI & ERP': Building,
  'AI & Project Management': Code,
  'AI & Autonomous Systems': Bot,
  'AI & Research': Brain,
  'AI & Content Generation': FileText,
  'AI & Voice Technology': Smartphone,
  'AI & Video Generation': Eye,
  'AI & Threat Intelligence': Shield,
  'AI & Cloud Management': Cloud,
  'AI & DevOps': Code
};

const categoryColors = {
  'AI & Legal Tech': 'from-blue-500 to-indigo-500',
  'AI & FinTech': 'from-green-500 to-emerald-500',
  'AI & Healthcare': 'from-red-500 to-pink-500',
  'Cybersecurity & Quantum': 'from-purple-500 to-violet-500',
  'AI & Supply Chain': 'from-orange-500 to-red-500',
  'AI & Energy': 'from-yellow-500 to-orange-500',
  'AI & Customer Experience': 'from-pink-500 to-rose-500',
  'Quantum & AI': 'from-cyan-500 to-blue-500',
  'AI & Data Governance': 'from-indigo-500 to-purple-500',
  'AI & HR Tech': 'from-teal-500 to-green-500',
  'AI & Machine Learning': 'from-purple-500 to-pink-500',
  'AI & Business Intelligence': 'from-indigo-500 to-purple-500',
  'AI & Marketing Automation': 'from-pink-500 to-rose-500',
  'AI & CRM': 'from-blue-500 to-cyan-500',
  'AI & ERP': 'from-green-500 to-emerald-500',
  'AI & Project Management': 'from-orange-500 to-red-500',
  'AI & Autonomous Systems': 'from-purple-500 to-violet-500',
  'AI & Research': 'from-cyan-500 to-blue-500',
  'AI & Content Generation': 'from-indigo-500 to-purple-500',
  'AI & Voice Technology': 'from-teal-500 to-green-500',
  'AI & Video Generation': 'from-pink-500 to-rose-500',
  'AI & Threat Intelligence': 'from-red-500 to-pink-500',
  'AI & Cloud Management': 'from-blue-500 to-cyan-500',
  'AI & DevOps': 'from-orange-500 to-red-500'
};

const supportLevelColors = {
  'premium': 'bg-gradient-to-r from-blue-500 to-cyan-500',
  'enterprise': 'bg-gradient-to-r from-purple-500 to-pink-500',
  'basic': 'bg-gradient-to-r from-green-500 to-emerald-500'
};

export default function ComprehensiveServicesOverview() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = useMemo(() => {
    let filtered = ALL_SERVICES;
    
    // Search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        (service.tags && service.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
      );
    }
    
    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    // Price filter
    if (priceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = service.pricing?.basic || 0;
        switch (priceRange) {
          case 'under-100':
            return price < 100;
          case '100-500':
            return price >= 100 && price < 500;
          case '500-1000':
            return price >= 500 && price < 1000;
          case 'over-1000':
            return price >= 1000;
          default:
            return true;
        }
      });
    }
    // Support level filter
    if (selectedSupportLevel !== 'all') {
      filtered = filtered.filter(service => service.supportLevel === selectedSupportLevel);
    }
    
    return filtered;
  }, [searchQuery, selectedCategory, priceRange, selectedSupportLevel]);

  const getPriceValue = (service: any) => {
    return service.pricing?.basic || 0;
  };

  const categories = Array.from(new Set(ALL_SERVICES.map(service => service.category)));
  const supportLevels = Array.from(new Set(ALL_SERVICES.map(service => service.supportLevel)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Overview
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our complete portfolio of cutting-edge AI, IT, and micro SAAS solutions designed to transform your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-400 text-gray-300 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Get Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Support Level Filter */}
            <select
              value={selectedSupportLevel}
              onChange={(e) => setSelectedSupportLevel(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Support Levels</option>
              {supportLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-800/50 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColors[service.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600'}`}>
                  {React.createElement(categoryIcons[service.category as keyof typeof categoryIcons] || Code, { className: 'w-6 h-6 text-white' })}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${supportLevelColors[service.supportLevel as keyof typeof supportLevelColors] || 'bg-gray-500'} text-white`}>
                  {service.supportLevel}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {service.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm">{service.rating}</span>
                  <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                </div>
                <span className="text-2xl font-bold text-blue-400">{service.price}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags?.slice(0, 3).map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                {service.features?.slice(0, 3).map(feature => (
                  <div key={feature} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group-hover:scale-105"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

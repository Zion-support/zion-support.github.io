import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, 
  ShoppingCart, BookOpen, MessageCircle, DollarSign, Gauge, 
  Workflow, Atom, Star, Target, TrendingUp, Award, Code, Truck, 
  Building, BarChart3, PenTool, Eye, Server, Smartphone, Database, 
  Network, Clock, ArrowRight, PanelLeft, Sparkles, Phone, Mail, MapPin,
  Search, Filter, Grid, List, ExternalLink
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { INNOVATIVE_IT_SERVICES_2025 } from '../data/innovativeITServices2025';
import { INNOVATIVE_AI_SERVICES_2025 } from '../data/innovativeAIServices2025';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
}

export default function ComprehensiveServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices: Service[] = useMemo(() => [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...INNOVATIVE_IT_SERVICES_2025,
    ...INNOVATIVE_AI_SERVICES_2025
  ], []);

  // Filter services based on search and filters
  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesInnovationLevel = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
      
      return matchesSearch && matchesCategory && matchesInnovationLevel;
    });
  }, [allServices, searchQuery, selectedCategory, selectedInnovationLevel]);

  // Get unique categories and innovation levels
  const categories = useMemo(() => ['all', ...Array.from(new Set(allServices.map(s => s.category)))], [allServices]);
  const innovationLevels = useMemo(() => ['all', ...Array.from(new Set(allServices.map(s => s.innovationLevel)))], [allServices]);

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

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'from-purple-500 to-pink-500';
      case 'Advanced': return 'from-blue-500 to-indigo-500';
      case 'Professional': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & ML': return Brain;
      case 'Cloud & DevOps': return Cloud;
      case 'Cybersecurity': return Shield;
      case 'Digital Transformation': return Zap;
      case 'Emerging Tech': return Atom;
      case 'Data & Analytics': return BarChart3;
      case 'Micro SaaS': return ShoppingCart;
      case 'AI & Quantum Computing': return Atom;
      case 'AI & Language': return MessageCircle;
      case 'AI & Vision': return Eye;
      case 'AI & Analytics': return TrendingUp;
      case 'AI & Robotics': return Rocket;
      case 'AI & Healthcare': return Heart;
      case 'AI & Fintech': return DollarSign;
      case 'AI & Creativity': return PenTool;
      case 'AI & Energy': return Zap;
      case 'Blockchain': return Lock;
      case 'Edge Computing': return Network;
      case 'DevOps': return Workflow;
      case 'Infrastructure': return Server;
      case 'Networking': return Network;
      case 'Integration': return Code;
      case 'Simulation': return Eye;
      default: return Star;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-cyan-dark via-zion-cyan to-zion-cyan-light py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-white to-zion-cyan-light bg-clip-text text-transparent">
              2025 Innovation Showcase
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our revolutionary portfolio of AI, IT, and Micro SaaS services that are reshaping industries and driving the future of technology.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
              {allServices.length}+ Services
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
              Revolutionary AI
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
              Quantum Computing
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
              Future-Ready Solutions
            </span>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-slate-dark text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                {innovationLevels.map(level => (
                  <option key={level} value={level} className="bg-zion-slate-dark text-white">
                    {level === 'all' ? 'All Levels' : level}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-white/20 backdrop-blur-sm rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white/30 text-white' : 'text-zion-slate-light hover:text-white'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white/30 text-white' : 'text-zion-slate-light hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
        >
          {filteredServices.map((service) => {
            const CategoryIcon = getCategoryIcon(service.category);
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Service Header */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)}`}>
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-zion-cyan/20 text-zion-cyan rounded-full">
                          {service.innovationLevel}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        per {service.pricingModel}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-white/10 text-zion-cyan-light rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2 mb-4">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* Market Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="text-zion-slate-light">Market Price</div>
                      <div className="text-white font-medium">{service.marketPrice}</div>
                    </div>
                    <div>
                      <div className="text-zion-slate-light">ROI</div>
                      <div className="text-white font-medium">{service.roi}</div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-white/5 rounded-xl p-4 mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan-light mb-2">Contact Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Phone className="w-4 h-4" />
                        <span className="text-white">{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Mail className="w-4 h-4" />
                        <span className="text-white">{service.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <ExternalLink className="w-4 h-4" />
                        <a 
                          href={service.contactInfo.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                        >
                          {service.contactInfo.website}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-white px-4 py-2 rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-cyan transition-all duration-300">
                      Get Quote
                    </button>
                    <button className="px-4 py-2 border border-zion-cyan/50 text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-zion-cyan-dark to-zion-cyan py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8">
            Let's discuss how our innovative services can drive your success in 2025 and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
              <Phone className="w-6 h-6 text-zion-cyan-light" />
              <div className="text-left">
                <div className="text-sm text-zion-slate-light">Call Us</div>
                <div className="text-white font-semibold">+1 302 464 0950</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
              <Mail className="w-6 h-6 text-zion-cyan-light" />
              <div className="text-left">
                <div className="text-sm text-zion-slate-light">Email Us</div>
                <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
              <MapPin className="w-6 h-6 text-zion-cyan-light" />
              <div className="text-left">
                <div className="text-sm text-zion-slate-light">Visit Us</div>
                <div className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

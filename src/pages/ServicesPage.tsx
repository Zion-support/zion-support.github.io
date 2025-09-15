<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Heart
} from 'lucide-react';
import SEO from "@/components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, SPECIALIZED_SERVICES } from "@/data/innovativeMicroSaasServices2025";
import { ADVANCED_ENTERPRISE_SOLUTIONS_2025 } from "@/data/advancedEnterpriseSolutions2025";
import { NEXT_GEN_AI_SERVICES_2025 } from "@/data/nextGenAIServices2025";
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from "@/data/specializedIndustrySolutions2025";
import { IOT_EDGE_COMPUTING_SERVICES_2025 } from "@/data/iotEdgeComputingServices2025";
export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'ai-finance', name: 'AI & Finance', icon: TrendingUp, color: 'from-zion-purple to-zion-blue' },
    { id: 'ai-legal', name: 'AI & Legal', icon: Shield, color: 'from-zion-blue to-zion-cyan' },
    { id: 'ai-healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-zion-cyan to-zion-green' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan' },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-purple to-zion-blue' },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'autonomous-systems', name: 'Autonomous Systems', icon: Rocket, color: 'from-zion-blue to-zion-purple' },
    { id: 'content-creation', name: 'Content Creation', icon: Code, color: 'from-zion-orange to-zion-purple' },
    { id: 'hr-talent', name: 'HR & Talent', icon: Users, color: 'from-zion-pink to-zion-purple' },
    { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'digital-twin', name: 'Digital Twin', icon: Server, color: 'from-zion-blue to-zion-purple' },
    { id: 'finance', name: 'Finance', icon: DollarSign, color: 'from-zion-green to-zion-cyan' },
    { id: 'healthcare', name: 'Healthcare', icon: Shield, color: 'from-zion-blue to-zion-purple' },
    { id: 'logistics', name: 'Logistics', icon: Truck, color: 'from-zion-orange to-zion-blue' },
    { id: 'legal', name: 'Legal Tech', icon: Scale, color: 'from-zion-purple to-zion-cyan' },
    { id: 'education', name: 'Education', icon: BookOpen, color: 'from-zion-cyan to-zion-green' },
    { id: 'manufacturing', name: 'Manufacturing', icon: CpuIcon, color: 'from-zion-blue to-zion-orange' },
    { id: 'real-estate', name: 'Real Estate', icon: Building, color: 'from-zion-purple to-zion-green' }
  ];
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$100 - $1,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$1,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$5,000+' }
  ];
  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' }
  ];
  // Combine all services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...ADVANCED_ENTERPRISE_SOLUTIONS_2025,
    ...NEXT_GEN_AI_SERVICES_2025,
    ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025,
    ...IOT_EDGE_COMPUTING_SERVICES_2025
  ];
  // Filter and sort services
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
                           service.subcategory.toLowerCase().includes(selectedCategory.replace('-', ' '));
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 5000);
    return matchesSearch && matchesCategory && matchesPrice;
  });
  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.createdAt || '2025-01-01').getTime() - new Date(a.createdAt || '2025-01-01').getTime();
      default:
        return 0;
    }
  });
  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Sparkles;
  };
  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };
  // Get category statistics
  const getCategoryStats = () => {
    const stats: { [key: string]: number } = {};
    INNOVATIVE_MICRO_SAAS_SERVICES_2025.forEach(service => {
      const category = service.category.toLowerCase().replace(' ', '-');
      stats[category] = (stats[category] || 0) + 1;
    });
    return stats;
  };
  const categoryStats = getCategoryStats();
  return (
    <>
      <SEO
        title="Innovative Micro SAAS Services - Zion Tech Group"
        description="Discover cutting-edge micro SAAS solutions including AI, Quantum Computing, Blockchain, IoT, and more. Transform your business with our innovative technology services."
        canonical="/services"
        url="https://ziontechgroup.com/services"
      />
      {/* Hero Section */}
      <section className="bg-futuristic min-h-[70vh] flex items-center relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000 float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000 float-slow"></div>
          <div className="absolute top-40 right-40 w-16 h-16 border border-zion-cyan rounded-full animate-pulse delay-3000 float-fast"></div>
        </div>
        <div className="container-responsive relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                <span>2025 Innovation Hub</span>
              </div>
            </motion.div>

            <h1 className="heading-responsive font-bold mb-6">
              <span className="text-gradient">Next-Generation</span>
              <br />
              <span className="text-white">Micro SAAS Platform</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with cutting-edge technology solutions. From AI-powered analytics to quantum computing,
              discover the future of business technology with our comprehensive micro SAAS platform.
            </p>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5 group-hover:text-zion-cyan transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-futuristic w-full pl-12 pr-4 py-4 text-lg placeholder-zion-slate-light"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
            </div>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
                <div className="text-zion-slate-light">Innovative Services</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-zion-purple mb-2">{categories.length - 1}</div>
                <div className="text-zion-slate-light">Technology Categories</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-zion-blue mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime Guarantee</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Filters and Categories */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container-responsive">
          {/* Category Pills */}
          <motion.div
            className="flex flex-wrap gap-3 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                {category.name}
              </button>
            ))}
          </motion.div>
          {/* Advanced Filters */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-4">
              {/* Price Range Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-zion-cyan" />
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>{range.name}</option>
                  ))}
                </select>
              </div>
              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-zion-cyan" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-zion-slate-light">
              Showing {sortedServices.length} of {allServices.length} services
            </div>
          </motion.div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container-responsive">
          <AnimatePresence mode="wait">
            {sortedServices.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="card-neon group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Service Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                          {(() => {
                            const IconComponent = getCategoryIcon(service.category);
                            return IconComponent ? <IconComponent className="w-6 h-6 text-white" /> : null;
                          })()}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                          <div className="text-sm text-zion-slate-light">per month</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-zion-slate-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    {/* Service Details */}
                    <div className="space-y-4 mb-6">
                      {/* Category & Innovation Level */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-cyan font-medium">{service.category}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          service.innovationLevel === 'Cutting-edge'
                            ? 'bg-zion-cyan/20 text-zion-cyan'
                            : 'bg-zion-purple/20 text-zion-purple'
                        }`}>
                          {service.innovationLevel}
                        </span>
                      </div>
                      {/* ROI & Market Price */}
                      <div className="flex items-center justify-between text-sm">
                        {service.roi && (
                          <div className="flex items-center gap-1 text-zion-green">
                            <TrendingUp className="w-4 h-4" />
                            <span>ROI: {service.roi}</span>
                          </div>
                        )}
                        <div className="text-zion-slate-light">
                          Market: {service.marketPrice}
                        </div>
                      </div>
                      {/* Key Features */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-zion-cyan" />
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-1 gap-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <CheckCircle className="w-3 h-3 text-zion-cyan" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Service Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                      <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.estimatedDelivery}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-zion-cyan" />
                          <span>{service.supportLevel}</span>
                        </div>
                      </div>
                      <Link
                        to={`/services/${service.id}`}
                        className="btn-cyber px-4 py-2 text-sm"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your search criteria or browse all categories
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="btn-futuristic px-6 py-3"
                >
                  View All Services
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      {/* Service Categories Overview */}
      <section className="py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-bold mb-4">
              <span className="text-gradient">Comprehensive Service Portfolio</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our complete range of innovative technology solutions across multiple domains
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Micro SAAS Services */}
            <motion.div
              className="card-futuristic text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                Micro SAAS Services
              </h3>
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {INNOVATIVE_MICRO_SAAS_SERVICES_2025.length} innovative micro SAAS solutions for modern businesses
              </p>
              <div className="text-zion-cyan font-bold mb-4">
                Starting from $99/month
              </div>
            </motion.div>
            {/* Advanced Enterprise Solutions */}
            <motion.div
              className="card-futuristic text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-purple to-zion-red rounded-xl flex items-center justify-center mx-auto mb-6">
                <Server className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-purple transition-colors">
                Enterprise Solutions
              </h3>
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {ADVANCED_ENTERPRISE_SOLUTIONS_2025.length} advanced enterprise-grade solutions for large organizations
              </p>
              <div className="text-zion-purple font-bold mb-4">
                Starting from $5,000/month
              </div>
            </motion.div>
            {/* Next-Gen AI Services */}
            <motion.div
              className="card-futuristic text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-green to-zion-cyan rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-green transition-colors">
                Next-Gen AI Services
              </h3>
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {NEXT_GEN_AI_SERVICES_2025.length} cutting-edge AI and machine learning solutions
              </p>
              <div className="text-zion-green font-bold mb-4">
                Starting from $2,500/month
              </div>
            </motion.div>
            {/* Specialized Industry Solutions */}
            <motion.div
              className="card-futuristic text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-orange to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-orange transition-colors">
                Industry Solutions
              </h3>
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {SPECIALIZED_INDUSTRY_SOLUTIONS_2025.length} specialized solutions for healthcare, finance, manufacturing, and retail
              </p>
              <div className="text-zion-orange font-bold mb-4">
                Starting from $3,000/month
              </div>
            </motion.div>
            {/* IoT & Edge Computing */}
            <motion.div
              className="card-futuristic text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-blue transition-colors">
                IoT & Edge Computing
              </h3>
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {IOT_EDGE_COMPUTING_SERVICES_2025.length} IoT platforms and edge computing solutions for smart infrastructure
              </p>
              <div className="text-zion-blue font-bold mb-4">
                Starting from $1,500/month
              </div>
            </motion.div>
            {/* Specialized Services */}
            <motion.div
              className="card-futuristic text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-pink to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-pink transition-colors">
                Specialized Services
              </h3>
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {SPECIALIZED_SERVICES.length} specialized technology solutions for unique business needs
              </p>
              <div className="text-zion-pink font-bold mb-4">
                Starting from $2,000/month
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Specialized Services Section */}
      <section className="py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="container-responsive">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-bold mb-4">
              <span className="text-gradient">Specialized Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our specialized technology solutions designed for specific industries and use cases
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALIZED_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                className="card-futuristic text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-zion-cyan font-bold mb-4">
                  {service.marketPrice}
                </div>
                <Link
                  to={`/services/${service.id}`}
                  className="btn-neon w-full"
                >
                  Explore Solution
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-responsive font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Get in touch with our technology experts to discuss your specific needs and discover
              how our innovative solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Get Free Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="btn-neon px-8 py-4 text-lg group"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Call Now: +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p className="mb-2">📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a></p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
=======
import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ArrowUp, Filter, SortAsc, Zap, TrendingUp, Star, ShoppingCart, Clock, Award } from 'lucide-react'
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import { generateITServices, getServicesMarketStats, getRecommendedServices } from '@/utils/servicesAutoFeedAlgorithm';
import { ProductListing } from '@/types/listings';
import { SkeletonCard } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
import { SERVICES } from '@/data/servicesData';
import { useCurrency } from '@/hooks/useCurrency';

// Initial services from existing data
const INITIAL_SERVICES: ProductListing[] = SERVICES;

// Market insights component
const ServicesMarketInsights = ({ stats }: { stats: any }) => (
  <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-700/30 mb-6">
    <CardContent className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">${(stats.averagePrice / 1000).toFixed(1)}k</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">{stats.averageRating}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.totalServices}</div>
          <div className="text-sm text-muted-foreground">Total Services</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{stats.availableServices}</div>
          <div className="text-sm text-muted-foreground">Available Now</div>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Premium Services ({stats.premiumServices}) • AI Score Avg: {stats.averageAIScore}
      </div>
    </CardContent>
  </Card>
);

// Filter controls
const ServiceFilterControls = ({
  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
  categories,
  showRecommended,
  setShowRecommended,
  loading
}: any) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="">All Categories</option>
        {categories.map((cat: string) => <option key={cat} value={cat}>{cat}</option>)}
      </select>
    </div>
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="ai-score">AI Score</option>
      </select>
    </div>
    <Button variant={showRecommended ? "default" : "outline"} size="sm" onClick={() => setShowRecommended(!showRecommended)}>
      <Star className="h-4 w-4 mr-1" />
      {showRecommended ? "All Services" : "Recommended"}
    </Button>
  </div>
);

// Service card
const ServiceCard = ({ service, onViewDetails }: { service: ProductListing; onViewDetails: () => void }) => {
  const { formatPrice } = useCurrency();
  return (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{service.title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{service.rating}</span>
              <span className="text-xs text-muted-foreground">({service.reviewCount})</span>
            </div>
            {service.aiScore && service.aiScore > 85 && (
              <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">
                AI Score: {service.aiScore}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary" className="text-xs">{service.author.name}</Badge>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-green-600">{formatPrice(service.price ?? 0)}</div>
          <Badge variant={service.availability === "Available" ? "default" : "outline"} className="text-xs">
            {service.availability}
          </Badge>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{service.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{service.category}</span>
        <Button size="sm" onClick={onViewDetails}>
          <ShoppingCart className="h-4 w-4 mr-1" />
          Contact
        </Button>
      </div>
    </CardHeader>
  </Card>
);
};

// Loading grid
const ServicesLoadingGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
  </div>
);

// Main component
export default function ServicesPage() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);
  const [totalGenerated, setTotalGenerated] = useState(0);

  const fetchServices = useCallback(async (page: number, limit: number) => {
    await new Promise(resolve => setTimeout(resolve, 400));

    let allServices: ProductListing[] = [];
    
    if (page === 1) {
      allServices = [...INITIAL_SERVICES];
    }
    
    const startId = INITIAL_SERVICES.length + (page - 1) * limit + totalGenerated;
    const newServices = generateITServices(limit, startId);
    setTotalGenerated(prev => prev + newServices.length);
    allServices = [...allServices, ...newServices];
    
    let filteredServices = allServices;
    
    if (filterCategory) {
      filteredServices = filteredServices.filter(s => s.category === filterCategory);
    }
    
    if (showRecommended) {
      filteredServices = getRecommendedServices(filteredServices);
    }
    
    filteredServices.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.price || 0) - (b.price || 0);
        case 'price-high':
          return (b.price || 0) - (a.price || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'ai-score':
          return (b.aiScore || 0) - (a.aiScore || 0);
        default:
          return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
      }
    });
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const items = filteredServices.slice(startIndex, endIndex);
    
    return {
      items,
      hasMore: endIndex < filteredServices.length || page < 10,
      total: filteredServices.length
    };
  }, [sortBy, filterCategory, showRecommended, totalGenerated]);

  const {
    items: services,
    loading,
    error,
    hasMore,
    isFetching,
    lastElementRef,
    scrollToTop,
    refresh,
    total
  } = useInfiniteScrollPagination(fetchServices, 12);

  useEffect(() => {
    refresh();
    setTotalGenerated(0);
  }, [sortBy, filterCategory, showRecommended]);

  const marketStats = useMemo(() => {
    if (services.length === 0) return null;
    return getServicesMarketStats(services);
  }, [services]);

  const categories = useMemo(() => {
    return Array.from(new Set(services.map(s => s.category).filter(Boolean)));
  }, [services]);

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading && services.length === 0) {
    return (
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            IT & AI Services
          </h1>
          <p className="text-muted-foreground text-lg">Professional services for modern businesses and enterprises</p>
        </motion.div>
        <ServicesLoadingGrid />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Error Loading Services</h2>
        <p className="text-muted-foreground mb-4">Failed to load services. Please try again.</p>
        <Button onClick={refresh}>Retry</Button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          IT & AI Services
        </h1>
        <p className="text-muted-foreground text-lg">Professional services for digital transformation and technology innovation</p>
      </motion.div>

      {marketStats && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <ServicesMarketInsights stats={marketStats} />
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <ServiceFilterControls
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          categories={categories}
          showRecommended={showRecommended}
          setShowRecommended={setShowRecommended}
          loading={isFetching}
        />
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <AnimatePresence mode="popLayout">
          {services.map((item, index) => (
            <motion.div
              key={item.id} ref={index === services.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }} whileHover={{ scale: 1.02 }}
            >
              <ServiceCard service={item} onViewDetails={() => router.push(`/services/${item.id}`)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {(isFetching || loading) && (
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <ServicesLoadingGrid count={4} />
        </motion.div>
      )}

      {!hasMore && services.length > 0 && (
        <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available services!</div>
          <div className="text-sm text-muted-foreground">Showing {services.length} IT & AI services</div>
        </motion.div>
      )}

      <AnimatePresence>
        {showScrollTop && (
          <motion.button onClick={scrollToTop} className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
>>>>>>> origin/auto/autonomy-17186719616
  );
}

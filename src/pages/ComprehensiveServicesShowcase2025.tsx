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
  Sparkles,
  Target,
  Award,
  BarChart3,
  FileText,
  Bot,
  Workflow,
  Eye,
  Activity,
  Palette,
  Smartphone,
  Wifi,
  ShieldCheck,
  Gamepad2,
  Coins,
  Satellite,
  Leaf,
  Atom,
  Chip,
  HardDrive,
  Building2,
  Handshake,
  Lightbulb,
  BarChart,
  Users2,
  Settings,
  ExternalLink
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2025 } from "@/data/comprehensiveInnovativeServices2025";

export default function ComprehensiveServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'Micro SAAS', name: 'Micro SAAS', icon: Rocket, color: 'from-zion-blue to-zion-cyan' },
    { id: 'IT Services', name: 'IT Services', icon: Server, color: 'from-zion-purple to-zion-blue' },
    { id: 'AI Services', name: 'AI Services', icon: Brain, color: 'from-zion-cyan to-zion-purple' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$100 - $500' },
    { id: 'mid-range', name: 'Mid-Range', range: '$500 - $2,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$2,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' }
  ];

  // Filter and sort services
  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2025.filter(service => {
    const title = service.title || '';
    const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 500) ||
                        (selectedPriceRange === 'mid-range' && service.price > 500 && service.price <= 2000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 2000);
    
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
        return new Date(b.id).getTime() - new Date(a.id).getTime();
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SAAS':
        return Rocket;
      case 'IT Services':
        return Server;
      case 'AI Services':
        return Brain;
      default:
        return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SAAS':
        return 'from-zion-blue to-zion-cyan';
      case 'IT Services':
        return 'from-zion-purple to-zion-blue';
      case 'AI Services':
        return 'from-zion-cyan to-zion-purple';
      default:
        return 'from-zion-cyan to-zion-blue';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SEO 
        title="Comprehensive Innovative Services 2025 - Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative Micro SAAS, IT, and AI services designed to transform your business. Real solutions with proven ROI."
        keywords="innovative services, micro SAAS, IT services, AI services, business transformation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Comprehensive Innovative Services 2025
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
                Real, Useful, Intelligent, and Diversified Solutions for Modern Businesses
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Sparkles className="w-5 h-5 text-white mr-2" />
                  <span className="text-white font-medium">10+ New Services</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Target className="w-5 h-5 text-white mr-2" />
                  <span className="text-white font-medium">Proven ROI</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Award className="w-5 h-5 text-white mr-2" />
                  <span className="text-white font-medium">Enterprise Grade</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-zion-blue to-zion-cyan rounded-2xl p-8"
            >
              <Rocket className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Micro SAAS Solutions</h3>
              <p className="text-white/80 mb-4">
                Scalable software-as-a-service solutions designed for modern businesses. 
                From content creation to project management, we've got you covered.
              </p>
              <div className="text-white/60 text-sm">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  AI-Powered Content Creation
                </div>
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Intelligent Project Management
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Smart Customer Support
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-zion-purple to-zion-blue rounded-2xl p-8"
            >
              <Server className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">IT Infrastructure Services</h3>
              <p className="text-white/80 mb-4">
                Enterprise-grade IT services including cloud migration, cybersecurity, 
                and DevOps implementation for optimal performance and security.
              </p>
              <div className="text-white/60 text-sm">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Cloud Migration & Optimization
                </div>
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Cybersecurity Assessment
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  DevOps & CI/CD Implementation
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl p-8"
            >
              <Brain className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
              <p className="text-white/80 mb-4">
                Cutting-edge AI services including custom model development, 
                business intelligence, and intelligent document processing.
              </p>
              <div className="text-white/60 text-sm">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Custom AI Model Development
                </div>
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  AI Business Intelligence
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Intelligent Document Processing
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${categoryColor} p-6`}>
                    <div className="flex items-center justify-between mb-4">
                      <CategoryIcon className="w-8 h-8 text-white" />
                      <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-white">
                        <span className="text-2xl font-bold">${service.price.toLocaleString()}</span>
                        <span className="text-sm opacity-80">/{service.pricingModel}</span>
                      </div>
                      <div className="text-white/80 text-sm">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          {service.innovationLevel}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-zion-cyan" />
                        Key Features
                      </h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-zion-cyan text-sm">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2 text-zion-cyan" />
                        Benefits
                      </h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-start">
                            <ArrowRight className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ROI and Market Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-700 rounded-lg p-3">
                        <div className="text-zion-cyan text-sm font-medium">ROI</div>
                        <div className="text-white font-bold">{service.roi}</div>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-3">
                        <div className="text-zion-cyan text-sm font-medium">Market Price</div>
                        <div className="text-white font-bold text-sm">{service.marketPrice}</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 4).map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-zion-cyan/20 text-zion-cyan text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="border-t border-gray-700 pt-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">
                          <div className="flex items-center mb-1">
                            <Phone className="w-3 h-3 mr-1" />
                            {service.contactInfo.phone}
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-3 h-3 mr-1" />
                            {service.contactInfo.email}
                          </div>
                        </div>
                        <Link
                          to={`/services/${service.id}`}
                          className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Get in touch with our team to discuss how our innovative services can help 
              you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
            <div className="mt-8 text-white/80">
              <p className="mb-2">
                <strong>Zion Tech Group</strong> | 364 E Main St STE 1008 Middletown DE 19709
              </p>
              <p>Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

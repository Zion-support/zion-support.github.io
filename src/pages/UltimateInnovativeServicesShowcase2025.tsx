import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Smartphone, 
  Rocket,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Users,
  Target,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  TrendingUp,
  DollarSign,
  Clock,
  Shield as ShieldIcon
} from 'lucide-react';
import { ULTIMATE_INNOVATIVE_SERVICES_2025, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from '../data/ultimateInnovativeServices2025';
export default function UltimateInnovativeServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('innovation');
  const filteredServices = useMemo(() => {
    let filtered = ULTIMATE_INNOVATIVE_SERVICES_2025.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSubcategory && matchesSearch;
    });
    // Sort services
    switch (sortBy) {
      case 'price':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'roi':
        filtered.sort((a, b) => {
          const aROI = parseInt(a.roi.split('-')[0]);
          const bROI = parseInt(b.roi.split('-')[0]);
          return bROI - aROI;
        });
        break;
      case 'innovation':
        const innovationOrder = { 'Revolutionary': 3, 'Cutting-edge': 2, 'Advanced': 1 };
        filtered.sort((a, b) => innovationOrder[b.innovationLevel] - innovationOrder[a.innovationLevel]);
        break;
      default:
        break;
    }
    return filtered;
  }, [selectedCategory, selectedSubcategory, searchTerm, sortBy]);
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory('all');
  };
  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation': return Brain;
      case 'Quantum Computing': return Cpu;
      case 'Blockchain & AI': return Globe;
      case 'Cybersecurity': return Shield;
      case 'DevOps & Automation': return Zap;
      case 'AI & Content': return Database;
      case 'AI & Healthcare': return Users;
      case 'AI & Manufacturing': return Network;
      case 'AI & Legal': return Lock;
      default: return Rocket;
    }
  };
  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-red-400';
      case 'Cutting-edge': return 'text-purple-400';
      case 'Advanced': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };
  const getPricingColor = (price: number) => {
    if (price >= 20000) return 'text-red-400';
    if (price >= 10000) return 'text-yellow-400';
    return 'text-green-400';
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ultimate Innovative Services 2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our revolutionary micro SAAS services, AI solutions, and cutting-edge technology platforms. 
              Transform your business with next-generation solutions designed for the future of innovation.
            </p>
            
            {/* Contact Information */}
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 max-w-2xl mx-auto border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Get Started Today</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center text-cyan-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center text-blue-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center text-green-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Filters Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            {/* Search and Sort */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="innovation">Sort by Innovation</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
              </select>
            </div>
            {/* Category Filters */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              <button
                onClick={() => handleCategorySelect('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                All Categories
              </button>
              {SERVICE_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {/* Subcategory Filters */}
            {selectedCategory !== 'all' && (
              <div className="mt-4 pt-4 border-t border-slate-600">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  <button
                    onClick={() => handleSubcategorySelect('all')}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedSubcategory === 'all'
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-600 text-gray-300 hover:bg-slate-500'
                    }`}
                  >
                    All
                  </button>
                  {SERVICE_SUBCATEGORIES.filter(sub => 
                    ULTIMATE_INNOVATIVE_SERVICES_2025.some(service => 
                      service.category === selectedCategory && service.subcategory === sub
                    )
                  ).map((subcategory) => (
                    <button
                      key={subcategory}
                      onClick={() => handleSubcategorySelect(subcategory)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedSubcategory === subcategory
                          ? 'bg-blue-500 text-white'
                          : 'bg-slate-600 text-gray-300 hover:bg-slate-500'
                      }`}
                    >
                      {subcategory}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                      {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getPricingColor(service.price)}`}>
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>
                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                {/* Innovation Level */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium ${getInnovationColor(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400 font-medium">{service.roi} ROI</span>
                  </div>
                </div>
                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-cyan-400 mt-1">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>
                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Technical Specs */}
                {service.technicalSpecs && (
                  <div className="mb-4 p-3 bg-slate-700/50 rounded-lg">
                    <h4 className="text-sm font-semibold text-white mb-2">Technical Specs</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                      <div>
                        <span className="text-gray-400">Uptime:</span> {service.technicalSpecs.uptime}
                      </div>
                      <div>
                        <span className="text-gray-400">APIs:</span> {service.technicalSpecs.apiEndpoints}
                      </div>
                    </div>
                  </div>
                )}
                {/* Market Info */}
                <div className="mb-4 p-3 bg-slate-700/50 rounded-lg">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Market Size:</span>
                      <div className="text-cyan-400 font-medium">{service.marketSize}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Delivery:</span>
                      <div className="text-green-400 font-medium">{service.estimatedDelivery}</div>
                    </div>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                    Get Quote
                  </button>
                  <button className="px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                    Learn More
                  </button>
                </div>
                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-slate-600">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-3 h-3" />
                      <span>{service.contactInfo.phone}</span>
                    </div>
                    <a 
                      href={`mailto:${service.contactInfo.email}`}
                      className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
                    >
                      <Mail className="w-3 h-3" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                  setSearchTerm('');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our innovative services are designed to give you a competitive edge in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center justify-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
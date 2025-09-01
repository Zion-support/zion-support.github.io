import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Atom,
  Leaf,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  Play,
  MailIcon,
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import INNOVATIVE_MICRO_SAAS_SERVICES_2030 from '../data/innovativeMicroSaasServices2030';

export default function ComprehensiveServicesShowcase2030() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'price' | 'name' | 'innovation'>('name');

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(INNOVATIVE_MICRO_SAAS_SERVICES_2030.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2030
    .filter(service => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'innovation':
          return a.innovationLevel === 'Revolutionary' ? -1 : 1;
        default:
          return a.title.localeCompare(b.title);
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum Computing & AI': return Atom;
      case 'Space Technology': return Rocket;
      case 'Sustainability & Climate Tech': return Leaf;
      case 'Healthcare AI': return Heart;
      case 'Financial AI': return DollarSign;
      case 'Legal Tech': return Scale;
      case 'Supply Chain AI': return Truck;
      case 'HR Tech': return Users;
      case 'EdTech': return BookOpen;
      case 'Marketing AI': return TrendingUp;
      case 'Project Management': return Building2;
      default: return Lightbulb;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Quantum Computing & AI': return 'from-purple-600 to-indigo-600';
      case 'Space Technology': return 'from-blue-600 to-cyan-600';
      case 'Sustainability & Climate Tech': return 'from-green-600 to-emerald-600';
      case 'Healthcare AI': return 'from-red-600 to-pink-600';
      case 'Financial AI': return 'from-amber-600 to-orange-600';
      case 'Legal Tech': return 'from-gray-600 to-slate-600';
      case 'Supply Chain AI': return 'from-blue-600 to-indigo-600';
      case 'HR Tech': return 'from-purple-600 to-pink-600';
      case 'EdTech': return 'from-green-600 to-blue-600';
      case 'Marketing AI': return 'from-orange-600 to-red-600';
      case 'Project Management': return 'from-indigo-600 to-purple-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="Comprehensive Services Showcase 2030 - Zion Tech Group"
        description="Explore our cutting-edge AI-powered micro SAAS services, quantum computing solutions, space technology platforms, and innovative business solutions for 2030."
        keywords="AI services, quantum computing, space technology, micro SAAS, business intelligence, healthcare AI, financial AI, legal tech, supply chain optimization, HR tech, edtech, marketing automation, project management, Zion Tech Group"
        url="https://ziontechgroup.com/comprehensive-services-showcase-2030"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Services 2030
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Discover the future of technology with our cutting-edge AI-powered micro SAAS services, 
              quantum computing solutions, and innovative business platforms designed for the next decade.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-blue-200">🚀</span>
                <span className="ml-2">Space Technology</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-purple-200">⚛️</span>
                <span className="ml-2">Quantum Computing</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-green-200">🌱</span>
                <span className="ml-2">Sustainability</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-red-200">🏥</span>
                <span className="ml-2">Healthcare AI</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
              >
                <MessageCircle className="mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center"
              >
                <DollarSign className="mr-2" />
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 mb-2" />
              <span className="text-sm text-blue-100">Phone</span>
              <a href={`tel:${contactInfo.phone}`} className="font-semibold hover:text-blue-200 transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 mb-2" />
              <span className="text-sm text-blue-100">Email</span>
              <a href={`mailto:${contactInfo.email}`} className="font-semibold hover:text-blue-200 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 mb-2" />
              <span className="text-sm text-blue-100">Address</span>
              <span className="font-semibold">{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'name' | 'innovation')}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="innovation">Sort by Innovation</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-3 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-3 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                }`}
              >
                {/* Service Header */}
                <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center mb-4`}>
                    {React.createElement(getCategoryIcon(service.category), { className: 'w-8 h-8 text-white' })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  
                  {/* Innovation Level Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4">
                    {service.innovationLevel === 'Revolutionary' && (
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full">
                        ⚡ Revolutionary
                      </span>
                    )}
                    {service.innovationLevel === 'Advanced' && (
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full">
                        🚀 Advanced
                      </span>
                    )}
                  </div>

                  {/* Category and Subcategory */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-gray-500">{service.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{service.subcategory}</span>
                  </div>
                </div>

                {/* Service Details */}
                <div className={`p-6 bg-gray-50 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-gray-900">
                        {service.currency}{service.price.toLocaleString()}
                      </span>
                      <span className="text-gray-500">/{service.pricingModel}</span>
                    </div>
                    <p className="text-sm text-gray-600">Market Price: {service.marketPrice}</p>
                    <p className="text-sm text-green-600 font-medium">ROI: {service.ROI}</p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-blue-600 font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specs */}
                  {service.technicalSpecs && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technical Specifications</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Uptime:</span>
                          <span className="ml-2 font-medium text-gray-900">{service.technicalSpecs.uptime}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">API Endpoints:</span>
                          <span className="ml-2 font-medium text-gray-900">{service.technicalSpecs.apiEndpoints}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Get Quote
                    </Link>
                  </div>

                  {/* Delivery and Support */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Delivery: {service.estimatedDelivery}</span>
                      <span>Support: {service.supportLevel}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the future of technology with our revolutionary AI-powered services. 
            Get started today and experience the power of innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
            >
              <MessageCircle className="mr-2" />
              Start Your Journey
            </Link>
            <Link
              to="/schedule-demo"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center"
            >
              <Play className="mr-2" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to explore our revolutionary services? Contact our team of experts 
              to discuss your needs and discover how we can transform your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700 font-medium">
                {contactInfo.phone}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700 font-medium">
                {contactInfo.email}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
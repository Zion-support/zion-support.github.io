import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain,
  Cloud,
  Shield,
  Code,
  Database,
  Network,
  BarChart3,
  Zap,
  Rocket,
  Cpu,
  Lock,
  Globe,
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Search,
  Filter,
  Grid,
  List,
  ExternalLink
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { ADDITIONAL_INNOVATIVE_SERVICES_2025 } from '../data/additionalInnovativeServices2025';
import { SPECIALIZED_IT_SERVICES_2025 } from '../data/specializedITServices2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'price' | 'name' | 'popularity'>('name');

  // Combine all services
  const allServices = [...ADDITIONAL_INNOVATIVE_SERVICES_2025, ...SPECIALIZED_IT_SERVICES_2025];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'popularity':
          return b.price - a.price; // Higher price = more popular
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
    <>
      <SEOHead
        title="Comprehensive AI & IT Services 2025 | Zion Tech Group"
        description="Explore our comprehensive portfolio of AI-powered solutions, specialized IT services, and innovative micro-SaaS platforms. Transform your business with cutting-edge technology."
        keywords="AI services, IT solutions, micro-SaaS, cybersecurity, cloud development, data analytics, blockchain, IoT, digital transformation"
        canonical="https://ziontechgroup.com/comprehensive-services-showcase-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Innovation 2025
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Comprehensive AI & IT Services
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Discover our cutting-edge portfolio of AI-powered solutions, specialized IT services, and innovative micro-SaaS platforms designed to transform your business and drive digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>50+ Innovative Services</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Enterprise-Grade Solutions</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>24/7 Expert Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                  >
                    {category === 'all' ? 'All Services' : category}
                  </button>
                ))}
              </div>

              {/* View Mode and Sort */}
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'price' | 'name' | 'popularity')}
                  className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="popularity">Sort by Popularity</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' 
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
              }
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={viewMode === 'grid' 
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                    : "bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                  }
                >
                  {/* Service Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-400">
                          ${service.price.toLocaleString()}
                        </div>
                        <div className="text-gray-500 text-sm">per month</div>
                      </div>
                    </div>
                    
                    {/* Category and Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">
                        {service.category}
                      </span>
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Lightbulb className="w-4 h-4 mr-2 text-yellow-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <ArrowRight className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Details */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Code className="w-4 h-4 mr-2 text-purple-400" />
                      Technical Details
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Delivery:</span>
                        <div className="text-white">{service.estimatedDelivery}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Support:</span>
                        <div className="text-white capitalize">{service.supportLevel}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">API Access:</span>
                        <div className="text-white">{service.apiAccess ? 'Yes' : 'No'}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Mobile App:</span>
                        <div className="text-white">{service.mobileApp ? 'Yes' : 'No'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Market Price Comparison */}
                  <div className="mb-6 p-4 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-400 text-sm">Market Price Range:</span>
                        <div className="text-white font-semibold">{service.marketPrice}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-green-400 text-sm">Save up to</span>
                        <div className="text-green-400 font-bold">
                          {Math.round(((parseInt(service.marketPrice.split('-')[1].replace(/[^0-9]/g, '')) - service.price) / parseInt(service.marketPrice.split('-')[1].replace(/[^0-9]/g, ''))) * 100)}%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Get Quote
                    </button>
                    <button className="flex-1 bg-gray-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or browse all services.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Our team of experts is ready to help you implement the perfect solution for your business needs. Get in touch today for a personalized consultation.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                  <p className="text-gray-400 text-sm">Available 24/7</p>
                </div>
                <div className="text-center">
                  <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400 text-sm">Response within 2 hours</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008</p>
                  <p className="text-gray-300">Middletown DE 19709</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </button>
                <button className="bg-gray-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-600 transition-all duration-300 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Custom Quote
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;
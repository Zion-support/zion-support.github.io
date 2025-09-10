import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Atom,
  Heart,
  Scale,
  Factory,
  Satellite,
  ShoppingCart,
  Building,
  Truck,
  Eye,
  Download,
  ExternalLink,
  Award,
  Target,
  Lightbulb,
  BarChart3,
  PieChart,
  Activity,
  Gauge,
  ShieldCheck
} from 'lucide-react';
import zion2026ComprehensiveServices from '../data/zion2026ComprehensiveServices';

const Zion2026ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', ...Array.from(new Set(zion2026ComprehensiveServices.map(service => service.category)))];
  const priceRanges = ['All', 'Under $1,000', '$1,000 - $2,999', '$3,000 - $4,999', '$5,000+'];

  const filteredServices = zion2026ComprehensiveServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesPrice = selectedPriceRange === 'All' || 
        (selectedPriceRange === 'Under $1,000' && service.price.starter < 1000) ||
        (selectedPriceRange === '$1,000 - $2,999' && service.price.starter >= 1000 && service.price.starter <= 2999) ||
        (selectedPriceRange === '$3,000 - $4,999' && service.price.starter >= 3000 && service.price.starter <= 4999) ||
        (selectedPriceRange === '$5,000+' && service.price.starter >= 5000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.price.starter - b.price.starter;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'launchDate':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Artificial Intelligence':
        return <Brain className="w-6 h-6" />;
      case 'Quantum Computing':
        return <Atom className="w-6 h-6" />;
      case 'Neuromorphic Computing':
        return <Cpu className="w-6 h-6" />;
      case 'Synthetic Biology':
        return <Heart className="w-6 h-6" />;
      case 'Blockchain':
        return <Code className="w-6 h-6" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'Internet of Things':
        return <Network className="w-6 h-6" />;
      case 'Metaverse':
        return <Globe className="w-6 h-6" />;
      case 'Robotics':
        return <Factory className="w-6 h-6" />;
      case 'Space Technology':
        return <Satellite className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Beta':
        return 'bg-yellow-100 text-yellow-800';
      case 'Coming Soon':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Zion Tech Group 2026
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
              Comprehensive Innovative Services Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge portfolio of revolutionary micro SAAS services, 
              spanning AI, quantum computing, blockchain, cybersecurity, IoT, and beyond. 
              Transform your business with next-generation technology solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+1 302 464 0950</span>
              <Mail className="w-5 h-5" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
                <option value="launchDate">Sort by Launch Date</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            {filteredServices.length} Services Found
          </h3>
          <p className="text-gray-600">
            Discover cutting-edge solutions designed to transform your business operations
          </p>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                {/* Service Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{service.rating}</span>
                      <span className="text-sm text-gray-500">({service.reviewCount})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Service Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Starting Price:</span>
                      <span className="text-lg font-bold text-blue-600">
                        ${service.price.starter.toLocaleString()}/month
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Professional: ${service.price.professional.toLocaleString()}/month | 
                      Enterprise: ${service.price.enterprise.toLocaleString()}/month
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-gray-600">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-blue-600 font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">ROI:</h4>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold text-green-600">{service.roi}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Implementation:</h4>
                    <span className="text-xs text-gray-600">{service.implementation}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                      Get Quote
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          {getCategoryIcon(service.category)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                              {service.status}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{service.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">Starting Price</h4>
                              <span className="text-lg font-bold text-blue-600">
                                ${service.price.starter.toLocaleString()}/month
                              </span>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">ROI</h4>
                              <span className="text-sm font-semibold text-green-600">{service.roi}</span>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">Rating</h4>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm font-medium">{service.rating}</span>
                                <span className="text-sm text-gray-500">({service.reviewCount})</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.technology.slice(0, 4).map((tech, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                {tech}
                              </span>
                            ))}
                            {service.technology.length > 4 && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                +{service.technology.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:ml-6 lg:flex-shrink-0">
                      <div className="flex flex-col space-y-2">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                          Get Quote
                        </button>
                        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                          Learn More
                        </button>
                        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                          Contact Sales
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join the future of technology with Zion Tech Group's innovative solutions. 
              Our expert team is ready to help you implement cutting-edge technologies 
              that will drive growth and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading provider of innovative technology solutions for the future.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>AI & Machine Learning</div>
                <div>Quantum Computing</div>
                <div>Blockchain Solutions</div>
                <div>Cybersecurity</div>
                <div>IoT & Edge Computing</div>
              </div>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Website: ziontechgroup.com</div>
                <div>LinkedIn</div>
                <div>Twitter</div>
                <div>Blog</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Zion2026ComprehensiveServicesShowcase;
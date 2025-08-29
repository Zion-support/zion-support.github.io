import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search as SearchIcon, 
  Grid as GridIcon, 
  List as ListIcon,
  Clock,
  Target,
  ExternalLink,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

// Mock data - replace with actual data
const COMPREHENSIVE_INNOVATIVE_SERVICES_2030 = [
  {
    id: 'ai-autonomous-business',
    title: 'AI Autonomous Business Operations Platform',
    description: 'Complete automation of business processes with AI-driven decision making',
    category: 'AI & Autonomous Systems',
    price: '$2,999',
    rating: 4.9,
    reviews: 156,
    marketSize: '$45B',
    estimatedDelivery: '2-4 weeks',
    supportLevel: 'Enterprise'
  },
  // Add more services as needed
];

const categories = [
  { id: 'all', name: 'All Services', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length, color: 'from-blue-500 to-cyan-500', icon: '🚀' },
  { id: 'ai', name: 'AI Services', count: 45, color: 'from-purple-500 to-pink-500', icon: '🤖' },
  { id: 'quantum', name: 'Quantum Computing', count: 12, color: 'from-cyan-500 to-blue-500', icon: '⚛️' },
  { id: 'cybersecurity', name: 'Cybersecurity', count: 28, color: 'from-red-500 to-pink-500', icon: '🔒' }
];

export default function ComprehensiveServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = useMemo(() => {
    let filtered = COMPREHENSIVE_INNOVATIVE_SERVICES_2030;
    
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(service => service.category.toLowerCase().includes(activeCategory));
    }
    
    return filtered;
  }, [searchTerm, activeCategory]);

  const sortedServices = useMemo(() => {
    return [...filteredServices].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''));
        case 'reviews':
          return b.reviews - a.reviews;
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [filteredServices, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Pioneering the future with cutting-edge AI, Quantum Computing, and innovative technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Services
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length}+</div>
              <div className="text-gray-400">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">98%</div>
              <div className="text-gray-400">AI Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">500+</div>
              <div className="text-gray-400">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="reviews">Sort by Reviews</option>
                <option value="name">Sort by Name</option>
              </select>

              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <GridIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <ListIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${searchTerm}-${sortBy}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {sortedServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                  viewMode === 'list' ? 'flex items-center space-x-6' : ''
                }`}
              >
                <div className={viewMode === 'list' ? 'flex-1' : ''}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400">★</span>
                      <span className="text-white">{service.rating}</span>
                      <span className="text-gray-400">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {service.category}
                    </span>
                  </div>

                  {service.marketSize && (
                    <div className="text-sm text-gray-400 mb-4">
                      <span className="text-gray-400">Market Size:</span> {service.marketSize}
                    </div>
                  )}

                  {/* Contact and CTA */}
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.estimatedDelivery}
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center">
                          <Target className="w-4 h-4 mr-1" />
                          {service.supportLevel}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                        Get Quote
                      </button>
                      <button className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-200">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is ready to help you implement these innovative solutions
            and drive your business forward with cutting-edge technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Website</h3>
              <p className="text-gray-300">Explore our full range of services</p>
              <a
                href="https://ziontechgroup.com"
                className="mt-2 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                ziontechgroup.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </a>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

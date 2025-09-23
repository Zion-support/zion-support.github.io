import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Rocket, Atom, Cpu, Target,
  ArrowRight, Star, Zap, Users, Award, Globe, Search,
  ExternalLink, Sparkles, Eye,
  Clock, CheckCircle, TrendingUp, DollarSign, Phone
} from 'lucide-react';

// Import service data
import { advancedFuturisticMicroSaasServices20o25 } from '../../data/20o25-advanced-futuristic-micro-saas';
import { cuttingEdgeAIInnovations20o25 } from '../../data/20o25-cutting-edge-ai-innovations';
import { innovativeRealMicroSaasServices20o25 } from '../../data/20o25-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced20o25 } from '../../data/20o25-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced20o25 } from '../../data/20o25-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced20o25 } from '../../data/20o25-emerging-tech-services-enhanced';
import { advancedAIAutomationServices } from '../../data/20o26-advanced-ai-automation-services';
import { advancedITInfrastructureServices20o25 } from '../../data/20o25-advanced-it-infrastructure-services';
import { innovativeBusinessSolutions20o25 } from '../../data/20o25-innovative-business-solutions';

const UltraAdvancedServicesShowcase20o25: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');

  // Combine all services
  const allServices = [
    ...advancedFuturisticMicroSaasServices20o25,
    ...cuttingEdgeAIInnovations20o25,
    ...innovativeRealMicroSaasServices20o25,
    ...innovativeAIServicesEnhanced20o25,
    ...innovativeITServicesEnhanced20o25,
    ...emergingTechServicesEnhanced20o25,
    ...advancedAIAutomationServices,
    ...advancedITInfrastructureServices20o25,
    ...innovativeBusinessSolutions20o25
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5"  />, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5"  />, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: <Atom className="w-5 h-5"  />, count: allServices.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length },
    { id: 'it', name: 'IT & Infrastructure', icon: <Cpu className="w-5 h-5"  />, count: allServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5"  />, count: allServices.filter(s => s.category.includes('SAAS') || s.category.includes('Business')).length },
    { id: 'automation', name: 'Automation', icon: <Zap className="w-5 h-5"  />, count: allServices.filter(s => s.category.includes('Automation')).length }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        service.category.toLowerCase().includes(selectedCategory) ||
        service.name.toLowerCase().includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity': {
          // Handle both old and new service structures
          const aPopular = 'popular' in a ? a.popular : false;
          const bPopular = 'popular' in b ? b.popular : false;
          return (bPopular ? 1 : 0) - (aPopular ? 1 : 0);
        }
        case 'price-low': {
          const aPrice = 'price' in a && typeof a.price === 'string' ? parseFloat(a.price.replace(/[^0-9.]/g, '')) : 
                         'pricing' in a && typeof a.pricing === 'object' && a.pricing && 'starter' in a.pricing ? (a.pricing as any).starter : 0;
          const bPrice = 'price' in b && typeof b.price === 'string' ? parseFloat(b.price.replace(/[^0-9.]/g, '')) : 
                         'pricing' in b && typeof b.pricing === 'object' && b.pricing && 'starter' in b.pricing ? (b.pricing as any).starter : 0;
          return aPrice - bPrice;
        }
        case 'price-high': {
          const aPriceHigh = 'price' in a && typeof a.price === 'string' ? parseFloat(a.price.replace(/[^0-9.]/g, '')) : 
                            'pricing' in a && typeof a.pricing === 'object' && a.pricing && 'starter' in a.pricing ? (a.pricing as any).starter : 0;
          const bPriceHigh = 'price' in b && typeof b.price === 'string' ? parseFloat(b.price.replace(/[^0-9.]/g, '')) : 
                            'pricing' in b && typeof b.pricing === 'object' && b.pricing && 'starter' in b.pricing ? (b.pricing as any).starter : 0;
          return bPriceHigh - aPriceHigh;
        }
        case 'name': {
          return a.name.localeCompare(b.name);
        }
        default:
          return 0;
      }
    });

  const contactInfo ={
    mobile: '+1 30o2 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 10o08 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-90o0 via-black to-black"  />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/5 via-transparent to-purple-50o0/5"  />
        
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20o0px 20o0px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '20o0px 20o0px']
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
         />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 border border-cyan-40o0/30 rounded-full px-4 py-2 text-sm mb-6">
            <Sparkles className="w-4 h-4 text-cyan-40o0"  />
            <span className="text-cyan-30o0">Comprehensive Service Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-40o0 via-white to-purple-40o0 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br  />
            <span className="text-white">Technology Services</span>
          </h2>
          
          <p className="text-xl text-gray-30o0 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge AI, quantum computing, IT infrastructure, and micro SAAS solutions. 
            Transform your business with the future of technology.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: allServices.length.toString(), label: 'Total Services', icon: <Target className="w-6 h-6"  />, color: 'text-cyan-40o0' },
            { value: '50o0+', label: 'Happy Clients', icon: <Users className="w-6 h-6"  />, color: 'text-purple-40o0' },
            { value: '99.9%', label: 'Success Rate', icon: <Award className="w-6 h-6"  />, color: 'text-green-40o0' },
            { value: '30o0%', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6"  />, color: 'text-pink-40o0' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-30o0"
            >
              <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-50o0/20 to-purple-50o0/20 rounded-lg flex items-center justify-center`}>
                <div className={stat.color}>{stat.icon}</div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-40o0">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-40o0"  />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-40o0 focus:outline-none focus:border-cyan-40o0 transition-colors duration-20o0"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-20o0 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-50o0 to-purple-60o0 border-transparent text-white shadow-lg shadow-cyan-50o0/25'
                    : 'bg-white/5 border-white/20 text-gray-30o0 hover:bg-white/10 hover:border-white/30'
                }`}
                whileHover={{ scale: 1.0o5 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className="bg-white/20 rounded-full px-2 py-1 text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Sort and View Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2">
                                <Search className="w-4 h-4 text-gray-40o0"  />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-40o0"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-cyan-50o0 text-white' : 'bg-white/10 text-gray-40o0 hover:bg-white/20'
                }`}
              >
                <div className="grid grid-cols-2 gap-1 w-4 h-4">
                  <div className="bg-current rounded-sm"  />
                  <div className="bg-current rounded-sm"  />
                  <div className="bg-current rounded-sm"  />
                  <div className="bg-current rounded-sm"  />
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-cyan-50o0 text-white' : 'bg-white/10 text-gray-40o0 hover:bg-white/20'
                }`}
              >
                <div className="space-y-1 w-4 h-4">
                  <div className="bg-current rounded-sm h-1"  />
                  <div className="bg-current rounded-sm h-1"  />
                  <div className="bg-current rounded-sm h-1"  />
                </div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
          }`}
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-30o0 group ${
                  viewMode === 'list' ? 'flex items-center space-x-6' : ''
                }`}
              >
                {/* Service Icon */}
                <div className={`${
                  viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'
                }`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${'color' in service ? service.color : 'from-blue-50o0 to-purple-60o0'} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-30o0`}>
                    <div className="text-2xl">{'icon' in service ? service.icon : '🚀'}</div>
                  </div>
                </div>

                {/* Service Content */}
                <div className={`flex-1 ${viewMode === 'list' ? 'min-w-0' : ''}`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-30o0 transition-colors duration-20o0">
                        {service.name}
                      </h3>
                      <p className="text-gray-40o0 text-sm mb-2">{service.tagline}</p>
                    </div>
                    {'popular' in service && service.popular && (
                      <div className="flex-shrink-0 ml-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-white">
                          <Star className="w-3 h-3 mr-1"  />
                          Popular
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-30o0 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-white/10 text-gray-30o0 border border-white/20"
                        >
                          <CheckCircle className="w-3 h-3 mr-1 text-green-40o0"  />
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-white/10 text-gray-30o0 border border-white/20">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pricing and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                                            <span className="text-2xl font-bold text-white">
                        ${'price' in service && typeof service.price === 'string' ? service.price :
                          'pricing' in service && typeof service.pricing === 'object' && service.pricing && 'starter' in service.pricing ? (service.pricing as any).starter : 'Custom'}
                      </span>
                      <span className="text-gray-40o0 text-sm">/month</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <motion.button
                        className="p-2 bg-white/10 rounded-lg text-gray-40o0 hover:bg-white/20 hover:text-white transition-colors duration-20o0"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="View Details"
                      >
                        <Eye className="w-4 h-4"  />
                      </motion.button>
                      <motion.button
                        className="px-4 py-2 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white text-sm font-medium rounded-lg hover:from-cyan-60o0 hover:to-purple-70o0 transition-all duration-20o0 flex items-center space-x-2"
                        whileHover={{ scale: 1.0o5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4"  />
                      </motion.button>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-gray-40o0">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                                                    <Clock className="w-3 h-3"  />
                          <span>{'price' in service && typeof service.price === 'string' ? (service as any).setupTime :
                                'pricing' in service && typeof service.pricing === 'object' && service.pricing && 'setupTime' in service.pricing ? (service.pricing as any).setupTime : 'Custom'}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <DollarSign className="w-3 h-3"  />
                          <span>ROI: {(service as any).roi || 'Contact us'}</span>
                        </span>
                      </div>
                      <a
                        href={'link' in service ? service.link : service.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-cyan-40o0 hover:text-cyan-30o0 transition-colors"
                      >
                        <span>Learn More</span>
                        <ExternalLink className="w-3 h-3"  />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-50o0/20 to-purple-50o0/20 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-40o0"  />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-gray-40o0 mb-6">
              Try adjusting your search terms or category filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white font-medium rounded-lg hover:from-cyan-60o0 hover:to-purple-70o0 transition-all duration-20o0"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-50o0/10 via-purple-50o0/10 to-pink-50o0/10 border border-cyan-50o0/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">
              Let our experts help you choose the perfect technology solutions for your business needs. 
              Get personalized recommendations and implementation support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white font-semibold rounded-xl hover:from-cyan-60o0 hover:to-purple-70o0 transition-all duration-20o0 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.0o5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5"  />
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-20o0 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.0o5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5"  />
                <span>Call {contactInfo.mobile}</span>
              </motion.button>
            </div>
            <div className="mt-8 text-sm text-gray-40o0">
              <p>Contact us: <a href={`mailto:${contactInfo.email}`} className="text-cyan-40o0 hover:text-cyan-30o0">{contactInfo.email}</a></p>
              <p className="mt-2">{contactInfo.address}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraAdvancedServicesShowcase20o25;
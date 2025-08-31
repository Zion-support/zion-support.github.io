import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Check, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Rocket, 
  Brain, 
  TrendingUp,
  DollarSign,
  Clock,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Search,
  Filter,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

export const Pricing: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price');

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' },
    { id: 'AI Development', name: 'AI Development', count: allServices.filter(s => s.category === 'AI Development').length, icon: '💻' },
    { id: 'Digital Marketing', name: 'Digital Marketing', count: allServices.filter(s => s.category === 'Digital Marketing').length, icon: '📱' },
    { id: 'Customer Service', name: 'Customer Service', count: allServices.filter(s => s.category === 'Customer Service').length, icon: '🎧' },
    { id: 'Financial Technology', name: 'Financial Technology', count: allServices.filter(s => s.category === 'Financial Technology').length, icon: '💰' },
    { id: 'Project Management', name: 'Project Management', count: allServices.filter(s => s.category === 'Project Management').length, icon: '📊' },
    { id: 'Supply Chain', name: 'Supply Chain', count: allServices.filter(s => s.category === 'Supply Chain').length, icon: '🔗' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️' },
    { id: 'Healthcare Technology', name: 'Healthcare Technology', count: allServices.filter(s => s.category === 'Healthcare Technology').length, icon: '🏥' },
    { id: 'Business Intelligence', name: 'Business Intelligence', count: allServices.filter(s => s.category === 'Business Intelligence').length, icon: '📈' },
    { id: 'Research & Development', name: 'Research & Development', count: allServices.filter(s => s.category === 'Research & Development').length, icon: '🔬' },
    { id: 'Legal Technology', name: 'Legal Technology', count: allServices.filter(s => s.category === 'Legal Technology').length, icon: '⚖️' },
    { id: 'Real Estate Technology', name: 'Real Estate Technology', count: allServices.filter(s => s.category === 'Real Estate Technology').length, icon: '🏠' },
    { id: 'Educational Technology', name: 'Educational Technology', count: allServices.filter(s => s.category === 'Educational Technology').length, icon: '🎓' },
    { id: 'Logistics & Transportation', name: 'Logistics & Transportation', count: allServices.filter(s => s.category === 'Logistics & Transportation').length, icon: '🚚' },
    { id: 'Energy & Sustainability', name: 'Energy & Sustainability', count: allServices.filter(s => s.category === 'Energy & Sustainability').length, icon: '🌱' },
    { id: 'Manufacturing Technology', name: 'Manufacturing Technology', count: allServices.filter(s => s.category === 'Manufacturing Technology').length, icon: '🏭' },
    { id: 'Retail Technology', name: 'Retail Technology', count: allServices.filter(s => s.category === 'Retail Technology').length, icon: '🛍️' },
    { id: 'Human Resources', name: 'Human Resources', count: allServices.filter(s => s.category === 'Human Resources').length, icon: '👥' },
    { id: 'Customer Success', name: 'Customer Success', count: allServices.filter(s => s.category === 'Customer Success').length, icon: '❤️' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getPriceTier = (price: number) => {
    if (price < 2000) return 'Starter';
    if (price < 4000) return 'Professional';
    if (price < 6000) return 'Enterprise';
    return 'Premium';
  };

  const getPriceTierColor = (tier: string) => {
    switch (tier) {
      case 'Starter': return 'from-green-500 to-emerald-500';
      case 'Professional': return 'from-blue-500 to-cyan-500';
      case 'Enterprise': return 'from-purple-500 to-pink-500';
      case 'Premium': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <>
      <Helmet>
        <title>Comprehensive Pricing Guide 2025 | Zion Tech Group Micro SAAS Services</title>
        <meta name="description" content="Explore our comprehensive pricing guide for innovative micro SAAS services, AI solutions, and IT services. Find the perfect solution for your business needs and budget." />
        <meta name="keywords" content="micro SAAS pricing, AI services cost, IT solutions pricing, business automation pricing, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Comprehensive Pricing Guide
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Micro SAAS Services 2025
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Transparent pricing for {allServices.length}+ innovative micro SAAS services. 
              Find the perfect solution that fits your business needs and budget.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold text-green-400">$1,999</span>
                <span className="ml-2">Starting Price</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold text-blue-400">$3,999</span>
                <span className="ml-2">Average Price</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold text-purple-400">500%+</span>
                <span className="ml-2">Average ROI</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6" />
                <span className="text-lg font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6" />
                <span className="text-lg font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="grid md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none cursor-pointer"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* Sort By */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none cursor-pointer"
                  >
                    <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                    <option value="rating" className="bg-gray-800 text-white">Sort by Rating</option>
                    <option value="reviews" className="bg-gray-800 text-white">Sort by Reviews</option>
                    <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Overview */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            >
              Pricing Tiers Overview
            </motion.h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {['Starter', 'Professional', 'Enterprise', 'Premium'].map((tier, index) => {
                const color = getPriceTierColor(tier);
                const services = allServices.filter(service => getPriceTier(service.price) === tier);
                const avgPrice = services.length > 0 ? Math.round(services.reduce((sum, s) => sum + s.price, 0) / services.length) : 0;
                
                return (
                  <motion.div
                    key={tier}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white text-2xl font-bold">{tier[0]}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{tier}</h3>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">${avgPrice.toLocaleString()}</div>
                    <div className="text-sm text-gray-400 mb-4">Average Price</div>
                    <div className="text-sm text-white mb-4">{services.length} Services</div>
                    <div className="space-y-2 text-sm text-gray-300">
                      {tier === 'Starter' && (
                        <>
                          <div className="flex items-center justify-center space-x-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>Essential Features</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>Basic Support</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>Standard Setup</span>
                          </div>
                        </>
                      )}
                      {tier === 'Professional' && (
                        <>
                          <div className="flex items-center justify-center space-x-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>Advanced Features</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>Priority Support</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>Custom Integration</span>
                          </div>
                        </>
                      )}
                      {tier === 'Enterprise' && (
                        <>
                          <div className="flex items-center justify-center space-x-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>Full Feature Set</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>24/7 Support</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>Dedicated Manager</span>
                          </div>
                        </>
                      )}
                      {tier === 'Premium' && (
                        <>
                          <div className="flex items-center justify-center space-x-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>All Features + Custom</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>White-Glove Service</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>Custom Development</span>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Pricing Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            >
              Detailed Service Pricing
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => {
                const priceTier = getPriceTier(service.price);
                const tierColor = getPriceTierColor(priceTier);
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Price Tier Badge */}
                    <div className={`bg-gradient-to-r ${tierColor} px-4 py-2 text-center`}>
                      <span className="text-white text-sm font-semibold">{priceTier} Tier</span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-lg">🚀</span>
                          </div>
                          <div>
                            <div className="text-sm text-cyan-400 font-semibold">{service.category}</div>
                            <div className="text-xs text-gray-400">{service.subcategory}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm font-semibold">{service.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{service.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                      {/* Pricing Information */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">Our Price:</span>
                          <span className="text-2xl font-bold text-cyan-400">${service.price.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Market Price:</span>
                          <span className="text-gray-300 line-through">{service.marketPrice}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">ROI:</span>
                          <span className="text-green-400 font-semibold">{service.roi}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Setup Time:</span>
                          <span className="text-gray-300">{service.setupTime}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.slice(0, 4).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-white/10 text-xs text-cyan-300 rounded-full border border-cyan-500/30"
                            >
                              {tag}
                            </span>
                          ))}
                          {service.tags.length > 4 && (
                            <span className="px-2 py-1 bg-white/10 text-xs text-gray-400 rounded-full">
                              +{service.tags.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                          <span>Get Started</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="w-full px-4 py-2 bg-transparent border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                          Schedule Demo
                        </button>
                      </div>

                      {/* Additional Info */}
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{service.reviewCount} reviews</span>
                          <span>AI Score: {service.aiScore}%</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {sortedServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
                  <p className="text-cyan-100">Average 500%+ return on investment within 6-8 months</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                  <p className="text-cyan-100">Bank-level security and compliance for all solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Rapid Implementation</h3>
                  <p className="text-cyan-100">Most solutions deployed in 2-6 weeks</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call +1 302 464 0950</span>
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-cyan-600 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Email kleber@ziontechgroup.com</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;

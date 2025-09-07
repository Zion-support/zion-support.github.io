import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Lock, 
  Globe, 
  Heart, 
  DollarSign,
  Settings,
  Cpu,
  Zap,
  Crown,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { innovativeMicroSaasServices2029 } from '@/data/innovativeMicroSaasServices2029';
import { comprehensiveITServices2029 } from '@/data/comprehensiveITServices2029';
import { comprehensiveAIServices2029 } from '@/data/comprehensiveAIServices2029';

export default function ComprehensiveServicesOverview2029() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const allServices = [
    ...innovativeMicroSaasServices2029.map(service => ({ ...service, type: 'Micro SaaS' })),
    ...comprehensiveITServices2029.map(service => ({ ...service, type: 'IT Services' })),
    ...comprehensiveAIServices2029.map(service => ({ ...service, type: 'AI Services' }))
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.type === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'all') {
      const price = parseInt(service.price.replace('$', '').replace(',', ''));
      switch (selectedPriceRange) {
        case 'under-500':
          matchesPrice = price < 500;
          break;
        case '500-1000':
          matchesPrice = price >= 500 && price < 1000;
          break;
        case '1000-2000':
          matchesPrice = price >= 1000 && price < 2000;
          break;
        case 'over-2000':
          matchesPrice = price >= 2000;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: allServices.length },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: ShoppingCart, count: innovativeMicroSaasServices2029.length },
    { id: 'IT Services', name: 'IT Services', icon: Settings, count: comprehensiveITServices2029.length },
    { id: 'AI Services', name: 'AI Services', icon: Brain, count: comprehensiveAIServices2029.length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', count: allServices.length },
    { id: 'under-500', name: 'Under $500', count: allServices.filter(s => parseInt(s.price.replace('$', '').replace(',', '')) < 500).length },
    { id: '500-1000', name: '$500 - $1,000', count: allServices.filter(s => { const p = parseInt(s.price.replace('$', '').replace(',', '')); return p >= 500 && p < 1000; }).length },
    { id: '1000-2000', name: '$1,000 - $2,000', count: allServices.filter(s => { const p = parseInt(s.price.replace('$', '').replace(',', '')); return p >= 1000 && p < 2000; }).length },
    { id: 'over-2000', name: 'Over $2,000', count: allServices.filter(s => parseInt(s.price.replace('$', '').replace(',', '')) >= 2000).length }
  ];

  return (
    <>
      <SEO 
        title="Comprehensive Services Overview 2029 - Zion Tech Group"
        description="Explore our complete portfolio of AI services, IT solutions, and micro SaaS platforms. Transform your business with cutting-edge technology solutions."
        canonical="/comprehensive-services-overview-2029"
        url="https://ziontechgroup.com/comprehensive-services-overview-2029"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Services Overview 2029
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our complete portfolio of innovative AI services, enterprise IT solutions, and cutting-edge micro SaaS platforms designed to transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/pricing-guide" 
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                  >
                    {priceRanges.map(range => (
                      <option key={range.id} value={range.id}>
                        {range.name} ({range.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-gray-400">
                Discover the perfect solution for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Category:</span>
                      <span className="text-cyan-400 text-sm font-medium">{service.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Type:</span>
                      <span className="text-purple-400 text-sm font-medium">{service.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Price:</span>
                      <span className="text-green-400 text-lg font-bold">{service.price}</span>
                    </div>
                    {service.billing && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Billing:</span>
                        <span className="text-blue-400 text-sm font-medium capitalize">{service.billing}</span>
                      </div>
                    )}
                  </div>

                  {/* Features Preview */}
                  {service.features && service.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-cyan-400 text-sm">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    to={service.href}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our team of experts is ready to help you implement the perfect solution for your business needs. Get in touch today for a personalized consultation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <Phone className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-400">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  to="/request-quote" 
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
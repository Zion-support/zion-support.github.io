import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Star, Users, TrendingUp, DollarSign, Clock, 
  CheckCircle, ArrowRight, Rocket, Brain, Atom, Globe, 
  Zap, Sparkles, Shield, Target, Cpu, Database, Cloud, 
  Lock, ShieldCheck, Eye, Heart, Share2, Download, Phone, Mail, MapPin
} from 'lucide-react';
import { cuttingEdge2027Innovations } from '../data/2027-cutting-edge-innovations';
import { practicalMicroSaas2027 } from '../data/2027-practical-micro-saas';
import UltraFuturisticNavigation2027 from '../components/layout/UltraFuturisticNavigation2027';
import UltraFuturisticMatrixBackground2027 from '../components/ui/UltraFuturisticMatrixBackground2027';

export default function ServicesShowcase2027() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  // Sort options
  const sortOptions = [
    { value: 'name', label: 'Sort by Name' },
    { value: 'price', label: 'Sort by Price' },
    { value: 'roi', label: 'Sort by ROI' }
  ];

  const allServices = [
    ...cuttingEdge2027Innovations,
    ...practicalMicroSaas2027
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 1000) ||
                        (selectedPriceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(service.price.replace(/[^0-9]/g, '')) < 10000) ||
                        (selectedPriceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 10000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'roi':
        return parseInt(a.roi.replace(/[^0-9]/g, '')) - parseInt(b.roi.replace(/[^0-9]/g, ''));
      default:
        return 0;
    }
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'AI Consciousness Evolution', name: 'AI Consciousness', icon: '🧠', count: allServices.filter(s => s.category.includes('AI Consciousness')).length },
    { id: 'Quantum Consciousness', name: 'Quantum Consciousness', icon: '⚛️', count: allServices.filter(s => s.category.includes('Quantum Consciousness')).length },
    { id: 'AI Civilization', name: 'AI Civilization', icon: '🏛️', count: allServices.filter(s => s.category.includes('AI Civilization')).length },
    { id: 'Quantum Time', name: 'Quantum Time', icon: '⏰', count: allServices.filter(s => s.category.includes('Quantum Time')).length },
    { id: 'AI Multiverse', name: 'AI Multiverse', icon: '🌌', count: allServices.filter(s => s.category.includes('AI Multiverse')).length },
    { id: 'Customer Success Automation', name: 'Customer Success', icon: '🎯', count: allServices.filter(s => s.category.includes('Customer Success')).length },
    { id: 'Content Marketing Automation', name: 'Content Marketing', icon: '📝', count: allServices.filter(s => s.category.includes('Content Marketing')).length },
    { id: 'Inventory Management', name: 'Inventory Management', icon: '📦', count: allServices.filter(s => s.category.includes('Inventory Management')).length },
    { id: 'HR Automation', name: 'HR Automation', icon: '👥', count: allServices.filter(s => s.category.includes('HR Automation')).length },
    { id: 'Financial Automation', name: 'Financial Automation', icon: '💰', count: allServices.filter(s => s.category.includes('Financial Automation')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', count: allServices.length },
    { id: 'low', name: 'Under $1K/month', count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) < 1000).length },
    { id: 'medium', name: '$1K - $10K/month', count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(s.price.replace(/[^0-9]/g, '')) < 10000).length },
    { id: 'high', name: '$10K+/month', count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) >= 10000).length }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraFuturisticMatrixBackground2027>
      <Head>
        <title>2027 Services Showcase - Zion Tech Group | Cutting-Edge Innovations & Micro SAAS</title>
        <meta name=&quot;description&quot; content=&quot;Explore Zion Tech Group's revolutionary 2027 services showcase featuring cutting-edge AI consciousness evolution, quantum computing, autonomous AI civilizations, and practical micro SAAS solutions for businesses.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;2027 services, AI consciousness evolution, quantum computing, autonomous AI civilizations, micro SAAS, business automation, Zion Tech Group&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/2027-services-showcase/&quot; />
        
        {/* Open Graph */}
        <meta property=&quot;og:title&quot; content=&quot;2027 Services Showcase - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Revolutionary 2027 services featuring AI consciousness evolution, quantum computing, and practical micro SAAS solutions.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/2027-services-showcase&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        
        {/* Twitter */}
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
        <meta name=&quot;twitter:title&quot; content=&quot;2027 Services Showcase - Zion Tech Group&quot; />
        <meta name=&quot;twitter:description&quot; content=&quot;Revolutionary 2027 services featuring AI consciousness evolution, quantum computing, and practical micro SAAS solutions.&quot; />
      </Head>

      <UltraFuturisticNavigation2027 />

      {/* Hero Section */}
      <section className=&quot;pt-32 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                2027 Services Showcase
              </span>
            </h1>
            <p className=&quot;text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto&quot;>
              Experience the future of technology with our revolutionary 2027 services. From AI consciousness evolution to practical micro SAAS solutions.
            </p>
            
            {/* Stats */}
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-12&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-cyan-400 mb-2&quot;>
                  {allServices.length}+
                </div>
                <div className=&quot;text-cyan-300&quot;>Services</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-purple-400 mb-2&quot;>
                  15+
                </div>
                <div className=&quot;text-purple-300&quot;>Categories</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-pink-400 mb-2&quot;>
                  1000+
                </div>
                <div className=&quot;text-pink-300&quot;>Customers</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-green-400 mb-2&quot;>
                  4.9★
                </div>
                <div className=&quot;text-green-300&quot;>Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link
                href=&quot;/contact&quot; className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2&quot;>
                <Rocket className=&quot;w-5 h-5&quot; />
                <span>Get Started</span>
              </Link>
              <Link
                href=&quot;/pricing&quot; className=&quot;px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2&quot;>
                <DollarSign className=&quot;w-5 h-5&quot; />
                <span>View Pricing</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className=&quot;px-4 sm:px-6 lg:px-8 mb-16&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20&quot;>
            {/* Search Bar */}
            <div className=&quot;mb-6&quot;>
              <div className=&quot;relative&quot;>
                <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} className=&quot;w-full pl-12 pr-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20&quot;
                />
              </div>
            </div>

            {/* Filters */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
              {/* Category Filter */}
              <div>
                <label className=&quot;block text-cyan-400 font-medium mb-2&quot;>Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)} className=&quot;w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400&quot;>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className=&quot;block text-cyan-400 font-medium mb-2&quot;>Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)} className=&quot;w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400&quot;>
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name} ({range.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className=&quot;block text-cyan-400 font-medium mb-2&quot;>Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)} className=&quot;w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400&quot;>
                  <option value=&quot;name&quot;>Name</option>
                  <option value=&quot;price&quot;>Price</option>
                  <option value=&quot;rating&quot;>Rating</option>
                  <option value=&quot;popularity&quot;>Popularity</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=&quot;px-4 sm:px-6 lg:px-8 mb-20&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <AnimatePresence>
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }} className=&quot;group&quot;>
                  <div className=&quot;bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/20&quot;>
                    {/* Service Header */}
                    <div className=&quot;flex items-start justify-between mb-4&quot;>
                      <div className=&quot;text-4xl&quot;>{service.icon}</div>
                      {service.popular && (
                        <div className=&quot;bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full&quot;>
                          Popular
                        </div>
                      )}
                    </div>

                    {/* Service Info */}
                    <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300&quot;>
                      {service.name}
                    </h3>
                    <p className=&quot;text-cyan-300 text-sm mb-4 line-clamp-3&quot;>
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className=&quot;mb-4&quot;>
                      <div className=&quot;text-2xl font-bold text-white&quot;>
                        {service.price}
                        <span className=&quot;text-cyan-400 text-lg&quot;>{service.period}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className=&quot;mb-6&quot;>
                      <h4 className=&quot;text-cyan-400 font-semibold mb-3&quot;>Key Features:</h4>
                      <div className=&quot;space-y-2&quot;>
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className=&quot;flex items-center space-x-2&quot;>
                            <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                            <span className=&quot;text-gray-300 text-sm&quot;>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className=&quot;text-cyan-400 text-sm&quot;>
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className=&quot;grid grid-cols-3 gap-4 mb-6 text-center&quot;>
                      <div>
                        <div className=&quot;text-cyan-400 font-semibold&quot;>{service.rating}★</div>
                        <div className=&quot;text-gray-400 text-xs&quot;>Rating</div>
                      </div>
                      <div>
                        <div className=&quot;text-purple-400 font-semibold&quot;>{service.customers}+</div>
                        <div className=&quot;text-gray-400 text-xs&quot;>Customers</div>
                      </div>
                      <div>
                        <div className=&quot;text-pink-400 font-semibold&quot;>{service.trialDays}d</div>
                        <div className=&quot;text-gray-400 text-xs&quot;>Trial</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className=&quot;flex space-x-3&quot;>
                      <Link
                        href={service.link} className=&quot;flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm&quot;>
                        Learn More
                      </Link>
                      <Link
                        href=&quot;/contact&quot; className=&quot;px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm&quot;>
                        Contact
                      </Link>
                    </div>

                    {/* Category Badge */}
                    <div className=&quot;mt-4&quot;>
                      <span className=&quot;inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30&quot;>
                        {service.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} className=&quot;text-center py-20&quot;>
              <div className=&quot;text-6xl mb-4&quot;>🔍</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
              <p className=&quot;text-cyan-300 mb-6&quot;>Try adjusting your search criteria or browse all services.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }} className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300&quot;>
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className=&quot;px-4 sm:px-6 lg:px-8 mb-20&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <div className=&quot;bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center shadow-2xl shadow-cyan-500/20&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-cyan-300 mb-8 text-lg&quot;>
              Contact our team to discuss how our 2027 services can revolutionize your operations and drive unprecedented growth.
            </p>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-8&quot;>
              <div className=&quot;flex items-center justify-center space-x-3&quot;>
                <Phone className=&quot;w-5 h-5 text-cyan-400&quot; />
                <span className=&quot;text-white&quot;>{contactInfo.mobile}</span>
              </div>
              <div className=&quot;flex items-center justify-center space-x-3&quot;>
                <Mail className=&quot;w-5 h-5 text-purple-400&quot; />
                <span className=&quot;text-white&quot;>{contactInfo.email}</span>
              </div>
              <div className=&quot;flex items-center justify-center space-x-3&quot;>
                <MapPin className=&quot;w-5 h-5 text-pink-400&quot; />
                <span className=&quot;text-white&quot;>{contactInfo.address}</span>
              </div>
            </div>

            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link
                href=&quot;/contact&quot; className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25&quot;>
                Get Started Today
              </Link>
              <Link
                href=&quot;/pricing&quot; className=&quot;px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300&quot;>
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=&quot;px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/30&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <div className=&quot;mb-8&quot;>
            <div className=&quot;w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-2xl shadow-cyan-500/50&quot;>
              Z
            </div>
            <h3 className=&quot;text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2&quot;>
              Zion Tech Group
            </h3>
            <p className=&quot;text-cyan-300&quot;>2027 Innovation Hub</p>
          </div>
          
          <div className=&quot;text-cyan-300 text-sm&quot;>
            <p>&copy; 2027 Zion Tech Group. All rights reserved.</p>
            <p className=&quot;mt-2&quot;>
              <Link href=&quot;/privacy&quot; className=&quot;hover:text-cyan-400 transition-colors duration-300&quot;>Privacy Policy</Link>
              {' • '}
              <Link href=&quot;/terms&quot; className=&quot;hover:text-cyan-400 transition-colors duration-300&quot;>Terms of Service</Link>
              {' • '}
              <Link href=&quot;/contact&quot; className=&quot;hover:text-cyan-400 transition-colors duration-300&quot;>Contact Us</Link>
            </p>
          </div>
        </div>
      </footer>
    </UltraFuturisticMatrixBackground2027>
  );
}
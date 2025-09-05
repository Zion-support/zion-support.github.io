import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Search, Filter, Star, TrendingUp, Zap, Brain, Cpu, Shield, Rocket, Globe, Database, Lock, Cloud, Atom, Sparkles, Target } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { revolutionary2026Services } from '../data/revolutionary-2026-services';
import { emergingTech2026Services } from '../data/emerging-tech-2026-services';
import { comprehensiveIT2026Services } from '../data/comprehensive-it-2026-services';

export default function ServicesShowcase2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Combine all 2026 services
  const allServices = [
    ...revolutionary2026Services,
    ...emergingTech2026Services,
    ...comprehensiveIT2026Services
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'AI', name: 'AI & Machine Learning', icon: Brain, count: allServices.filter(s => s.category.includes('AI')).length },
    { id: 'Quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'Emerging', name: 'Emerging Technology', icon: Sparkles, count: allServices.filter(s => s.category.includes('Emerging')).length },
    { id: 'IT', name: 'IT & Infrastructure', icon: Shield, count: allServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'Autonomous', name: 'Autonomous Systems', icon: Target, count: allServices.filter(s => s.category.includes('Autonomous')).length },
    { id: 'Cloud', name: 'Cloud & DevOps', icon: Cloud, count: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('DevOps')).length }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraAdvancedFuturisticBackground 
      intensity=&quot;extreme&quot; 
      colorScheme=&quot;quantum-fusion&quot;
      particleCount={600}
      animationSpeed={2.5}
      enableHolographic={true}
      enableQuantumEffects={true}
    >
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Zion Tech Group - 2026 Revolutionary Services Showcase | 1500+ Solutions</title>
          <meta name=&quot;description&quot; content=&quot;Explore Zion Tech Group's revolutionary 2026 services including AI, quantum computing, emerging technologies, and comprehensive IT solutions. Contact: +1 302 464 0950&quot; />
          <meta name=&quot;keywords&quot; content=&quot;2026 services, AI services, quantum computing, emerging technology, IT solutions, cybersecurity, cloud computing, autonomous systems, neuromorphic computing, DNA computing, photonic computing, holographic display, swarm robotics, zero trust architecture, edge computing, 5G networks&quot; />
          <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
          <meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
          <meta property=&quot;og:title&quot; content=&quot;Zion Tech Group - 2026 Revolutionary Services Showcase&quot; />
          <meta property=&quot;og:description&quot; content=&quot;1500+ cutting-edge services with 1000% ROI guarantee. Contact: +1 302 464 0950&quot; />
          <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/2026-services-showcase&quot; />
          <meta property=&quot;og:type&quot; content=&quot;website&quot; />
          <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/2026-services-showcase&quot; />
        </Head>

        {/* Navigation */}
        <UltraAdvancedNavigation />

        {/* Hero Section */}
        <section className=&quot;relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent&quot;>
                  2026 Revolutionary Services
                </span>
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
                Discover the future of technology with our revolutionary AI, quantum computing, 
                emerging technologies, and comprehensive IT solutions
              </p>
              
              {/* Service Statistics */}
              <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-12&quot;>
                <div className=&quot;text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm&quot;>
                  <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>{allServices.length}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Total Services</div>
                </div>
                <div className=&quot;text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm&quot;>
                  <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>{allServices.filter(s => s.category.includes('AI')).length}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>AI Services</div>
                </div>
                <div className=&quot;text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm&quot;>
                  <div className=&quot;text-3xl font-bold text-pink-400 mb-2&quot;>{allServices.filter(s => s.category.includes('Quantum')).length}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Quantum Services</div>
                </div>
                <div className=&quot;text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm&quot;>
                  <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>{allServices.filter(s => s.category.includes('Emerging')).length}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Emerging Tech</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className=&quot;relative z-10 py-8 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <div className=&quot;bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4&quot;>
                {/* Search */}
                <div className=&quot;relative&quot;>
                  <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                  <input
                    type=&quot;text&quot;
                    placeholder=&quot;Search services...&quot;
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className=&quot;w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
                  />
                </div>

                {/* Category Filter */}
                <div className=&quot;relative&quot;>
                  <Filter className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=&quot;w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none&quot;
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div className=&quot;relative&quot;>
                  <TrendingUp className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className=&quot;w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none&quot;
                  >
                    <option value=&quot;name&quot;>Sort by Name</option>
                    <option value=&quot;price&quot;>Sort by Price</option>
                    <option value=&quot;rating&quot;>Sort by Rating</option>
                    <option value=&quot;customers&quot;>Sort by Customers</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className=&quot;relative z-10 py-16 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className=&quot;group&quot;
                >
                  <div className=&quot;bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105&quot;>
                    {/* Service Header */}
                    <div className=&quot;flex items-start justify-between mb-4&quot;>
                      <div className=&quot;text-4xl&quot;>{service.icon}</div>
                      {service.popular && (
                        <span className=&quot;bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full&quot;>
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Service Title */}
                    <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300&quot;>
                      {service.name}
                    </h3>

                    {/* Tagline */}
                    <p className=&quot;text-gray-300 text-sm mb-4&quot;>
                      {service.tagline}
                    </p>

                    {/* Price */}
                    <div className=&quot;flex items-center justify-between mb-4&quot;>
                      <div className=&quot;text-2xl font-bold text-cyan-400&quot;>
                        {service.price}
                        <span className=&quot;text-gray-400 text-lg font-normal&quot;>{service.period}</span>
                      </div>
                      <div className=&quot;flex items-center space-x-1&quot;>
                        <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                        <span className=&quot;text-white text-sm&quot;>{service.rating}</span>
                        <span className=&quot;text-gray-400 text-sm&quot;>({service.reviews})</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className=&quot;text-gray-400 text-sm mb-4 line-clamp-3&quot;>
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-white font-semibold mb-2 text-sm&quot;>Key Features:</h4>
                      <ul className=&quot;space-y-1&quot;>
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className=&quot;text-gray-400 text-xs flex items-center&quot;>
                            <Zap className=&quot;w-3 h-3 text-cyan-400 mr-2 flex-shrink-0&quot; />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Category and Technology */}
                    <div className=&quot;flex items-center justify-between mb-4&quot;>
                      <span className=&quot;text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded&quot;>
                        {service.category}
                      </span>
                      <span className=&quot;text-xs text-gray-500&quot;>
                        {service.customers}+ customers
                      </span>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={service.link}
                      className=&quot;w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block&quot;
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className=&quot;text-center py-16&quot;
              >
                <div className=&quot;text-6xl mb-4&quot;>🔍</div>
                <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
                <p className=&quot;text-gray-400&quot;>Try adjusting your search terms or filters</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className=&quot;relative z-10 py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className=&quot;bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm&quot;
            >
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join thousands of companies already leveraging our revolutionary 2026 AI, quantum, and IT solutions
              </p>
              
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-8&quot;>
                <div className=&quot;flex items-center justify-center space-x-3 text-cyan-300&quot;>
                  <span className=&quot;text-2xl&quot;>📱</span>
                  <span className=&quot;font-semibold&quot;>{contactInfo.mobile}</span>
                </div>
                <div className=&quot;flex items-center justify-center space-x-3 text-purple-300&quot;>
                  <span className=&quot;text-2xl&quot;>✉️</span>
                  <span className=&quot;font-semibold&quot;>{contactInfo.email}</span>
                </div>
                <div className=&quot;flex items-center justify-center space-x-3 text-pink-300&quot;>
                  <span className=&quot;text-2xl&quot;>📍</span>
                  <span className=&quot;font-semibold text-sm&quot;>{contactInfo.address}</span>
                </div>
              </div>

              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Contact Us Now
                </Link>
                <a
                  href=&quot;/pricing&quot;
                  className=&quot;px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300&quot;
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
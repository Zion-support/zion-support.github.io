import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Target, Crown, Star, TrendingUp, ArrowRight,
  CheckCircle, DollarSign, Users, Clock, Award, Zap as ZapIcon,
  Search, Phone, Mail, MapPin, Heart, Leaf, Car, GraduationCap, Scale,
  Building, Factory, Camera, Video, Music, Gamepad2, Eye,
  Globe2, Satellite, Dna, Battery, Gamepad, Cpu as CpuIcon
} from 'lucide-react';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';
import { cuttingEdge2028MicroSaas } from '../data/2028-cutting-edge-micro-saas';
import { practicalBusinessSolutions2028 } from '../data/2028-practical-business-solutions';
import { advancedAIAutonomousServices2028 } from '../data/2028-advanced-ai-autonomous-services';
import { quantumSpaceInnovations2028 } from '../data/2028-quantum-space-innovations';

export default function UltimateServicesShowcase2029() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const allServices = [
    ...cuttingEdge2028MicroSaas,
    ...practicalBusinessSolutions2028,
    ...advancedAIAutonomousServices2028,
    ...quantumSpaceInnovations2028
  ];

  const categories = [
    { id: 'all', name: '🚀 All Services', icon: Rocket, count: allServices.length, color: 'from-violet-600 to-purple-600' },
    { id: 'cutting-edge', name: '⚡ Cutting-Edge', icon: Zap, count: cuttingEdge2028MicroSaas.length, color: 'from-cyan-600 to-blue-600' },
    { id: 'business', name: '🎯 Business Solutions', icon: Target, count: practicalBusinessSolutions2028.length, color: 'from-green-600 to-emerald-600' },
    { id: 'ai-autonomous', name: '🤖 AI & Autonomous', icon: Brain, count: advancedAIAutonomousServices2028.length, color: 'from-emerald-600 to-teal-600' },
    { id: 'quantum-space', name: '⚛️ Quantum & Space', icon: Atom, count: quantumSpaceInnovations2028.length, color: 'from-indigo-600 to-blue-600' },
    { id: 'ai', name: '🧠 AI & ML', icon: Brain, count: allServices.filter(s => s.category.some(c => c.includes('AI') || c.includes('Machine Learning'))).length, color: 'from-pink-600 to-rose-600' },
    { id: 'quantum', name: '🔮 Quantum Tech', icon: Atom, count: allServices.filter(s => s.category.some(c => c.includes('Quantum'))).length, color: 'from-purple-600 to-violet-600' },
    { id: 'enterprise', name: '🏢 Enterprise', icon: Shield, count: allServices.filter(s => s.category.some(c => c.includes('Enterprise'))).length, color: 'from-blue-600 to-cyan-600' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $5K', range: 'Under $5,000' },
    { id: 'medium', name: '$5K - $15K', range: '$5,000 - $15,000' },
    { id: 'high', name: '$15K - $30K', range: '$15,000 - $30,000' },
    { id: 'premium', name: 'Over $30K', range: 'Over $30,000' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'cutting-edge' && cuttingEdge2028MicroSaas.includes(service)) ||
      (selectedCategory === 'business' && practicalBusinessSolutions2028.includes(service)) ||
      (selectedCategory === 'ai-autonomous' && advancedAIAutonomousServices2028.includes(service)) ||
      (selectedCategory === 'quantum-space' && quantumSpaceInnovations2028.includes(service)) ||
      (selectedCategory === 'ai' && service.category.some(c => c.includes('AI') || c.includes('Machine Learning'))) ||
      (selectedCategory === 'quantum' && service.category.some(c => c.includes('Quantum'))) ||
      (selectedCategory === 'enterprise' && service.category.some(c => c.includes('Enterprise')));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesPrice = selectedPriceRange === 'all' ||
      (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$]/g, '')) < 5000) ||
      (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$]/g, '')) >= 5000 && parseFloat(service.price.replace(/[$]/g, '')) < 15000) ||
      (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$]/g, '')) >= 15000 && parseFloat(service.price.replace(/[$]/g, '')) < 30000) ||
      (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$]/g, '')) >= 30000);
    
    return matchesCategory && matchesSearch && matchesPrice;
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>2029 Ultimate Services Showcase - Zion Tech Group | Revolutionary Technology Solutions</title>
        <meta name=&quot;description&quot; content=&quot;Explore our revolutionary 2029 services including AI Consciousness Evolution, Quantum Time Manipulation, Space Quantum Communication, and autonomous AI systems. Transform your business with future technology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;2029 technology, AI consciousness, quantum computing, space technology, autonomous AI, business automation, micro SAAS, Zion Tech Group&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/2029-ultimate-services-showcase&quot; />
        
        {/* Open Graph */}
        <meta property=&quot;og:title&quot; content=&quot;2029 Ultimate Services Showcase - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Revolutionary 2029 technology services including AI Consciousness Evolution, Quantum Time Manipulation, and autonomous AI systems.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/2029-ultimate-services-showcase&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        
        {/* Twitter */}
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
        <meta name=&quot;twitter:title&quot; content=&quot;2029 Ultimate Services Showcase - Zion Tech Group&quot; />
        <meta name=&quot;twitter:description&quot; content=&quot;Revolutionary 2029 technology services including AI Consciousness Evolution, Quantum Time Manipulation, and autonomous AI systems.&quot; />
      </Head>

      <UltraFuturisticNavigation2029 />

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black&quot;>
        {/* Animated Background */}
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.15),transparent_50%)] animate-spin-slow&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)] animate-pulse&quot; />
        </div>

        <div className=&quot;relative z-10 text-center px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;max-w-4xl mx-auto&quot;
          >
            <div className=&quot;flex items-center justify-center space-x-2 mb-6&quot;>
              <div className=&quot;w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl&quot;>
                <Rocket className=&quot;w-9 h-9 text-white&quot; />
              </div>
              <div className=&quot;w-16 h-16 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl&quot;>
                <Brain className=&quot;w-9 h-9 text-white&quot; />
              </div>
              <div className=&quot;w-16 h-16 bg-gradient-to-br from-indigo-400 via-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-2xl&quot;>
                <Atom className=&quot;w-9 h-9 text-white&quot; />
              </div>
            </div>
            
            <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;>
                2029 Ultimate
              </span>
              <br />
              <span className=&quot;bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent&quot;>
                Services Showcase
              </span>
            </h1>
            
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Experience the future of technology with our revolutionary AI consciousness, quantum computing, 
              space technology, and autonomous systems. Transform your business with innovations that define tomorrow.
            </p>

            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl hover:shadow-cyan-500/25 text-lg&quot;
              >
                Get Started Today
              </Link>
              <Link
                href=&quot;/pricing&quot;
                className=&quot;px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500/10 transition-all duration-200 text-lg&quot;
              >
                View Pricing
              </Link>
            </div>

            {/* Stats */}
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 mt-16&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-cyan-400 mb-2&quot;>{allServices.length}+</div>
                <div className=&quot;text-gray-400&quot;>Revolutionary Services</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-emerald-400 mb-2&quot;>$500M+</div>
                <div className=&quot;text-gray-400&quot;>Market Valuation</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-purple-400 mb-2&quot;>99.9%</div>
                <div className=&quot;text-gray-400&quot;>Success Rate</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-blue-400 mb-2&quot;>24/7</div>
                <div className=&quot;text-gray-400&quot;>Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className=&quot;py-16 bg-gray-900/50 border-b border-cyan-500/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0&quot;>
            {/* Search */}
            <div className=&quot;relative w-full lg:w-96&quot;>
              <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400&quot; />
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search services...&quot;
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=&quot;w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200&quot;
              />
            </div>

            {/* Category Filter */}
            <div className=&quot;flex flex-wrap items-center space-x-2&quot;>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <category.icon className=&quot;h-4 w-4&quot; />
                    <span>{category.name}</span>
                    <span className=&quot;text-xs opacity-75&quot;>({category.count})</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <div className=&quot;flex items-center space-x-2&quot;>
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setSelectedPriceRange(range.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedPriceRange === range.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=&quot;py-20 bg-gradient-to-br from-black via-gray-900 to-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            variants={containerVariants}
            initial=&quot;hidden&quot;
            animate=&quot;visible&quot;
            className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8&quot;
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className=&quot;group relative&quot;
              >
                <div className=&quot;relative p-6 rounded-2xl border border-gray-700/50 bg-gray-800/20 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 h-full&quot;>
                  {/* Service Header */}
                  <div className=&quot;mb-4&quot;>
                    <div className=&quot;flex items-center justify-between mb-3&quot;>
                      <div className=&quot;w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg&quot;>
                        <Rocket className=&quot;w-6 h-6 text-white&quot; />
                      </div>
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-lg font-bold text-cyan-400&quot;>{service.price}</div>
                        <div className=&quot;text-xs text-gray-400&quot;>per month</div>
                      </div>
                    </div>
                    
                    <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200&quot;>
                      {service.name}
                    </h3>
                    
                    <p className=&quot;text-gray-400 text-sm leading-relaxed mb-4&quot;>
                      {service.description}
                    </p>
                  </div>

                  {/* Categories */}
                  <div className=&quot;mb-4&quot;>
                    <div className=&quot;flex flex-wrap gap-2&quot;>
                      {service.category.slice(0, 3).map((cat) => (
                        <span
                          key={cat}
                          className=&quot;px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-lg border border-cyan-500/20&quot;
                        >
                          {cat}
                        </span>
                      ))}
                      {service.category.length > 3 && (
                        <span className=&quot;px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-lg&quot;>
                          +{service.category.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className=&quot;mb-6&quot;>
                    <h4 className=&quot;text-sm font-semibold text-white mb-2&quot;>Key Features:</h4>
                    <ul className=&quot;space-y-1&quot;>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                          <CheckCircle className=&quot;h-3 w-3 text-cyan-400 flex-shrink-0&quot; />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className=&quot;text-xs text-gray-500&quot;>
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Market Info */}
                  <div className=&quot;mb-6 space-y-2&quot;>
                    <div className=&quot;flex items-center justify-between text-sm&quot;>
                      <span className=&quot;text-gray-400&quot;>Market Size:</span>
                      <span className=&quot;text-emerald-400 font-medium&quot;>{service.marketSize}</span>
                    </div>
                    <div className=&quot;flex items-center justify-between text-sm&quot;>
                      <span className=&quot;text-gray-400&quot;>ROI:</span>
                      <span className=&quot;text-cyan-400 font-medium&quot;>{service.roi}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className=&quot;mt-auto&quot;>
                    <Link
                      href={`/services/${service.id}`}
                      className=&quot;w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 text-center block group-hover:scale-105 transform transition-transform duration-200&quot;
                    >
                      Learn More
                      <ArrowRight className=&quot;inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200&quot; />
                    </Link>
                  </div>

                  {/* Hover Effect */}
                  <div className=&quot;absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none&quot; />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className=&quot;text-center py-20&quot;>
              <div className=&quot;w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <Search className=&quot;w-12 h-12 text-gray-400&quot; />
              </div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>No services found</h3>
              <p className=&quot;text-gray-400 mb-8&quot;>Try adjusting your search criteria or browse all services</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                  setSelectedPriceRange('all');
                }}
                className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200&quot;
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className=&quot;py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 border-t border-cyan-500/20&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Join the future of technology with our revolutionary services. 
              Contact us today to discuss how we can help you achieve your goals.
            </p>
            
            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl hover:shadow-cyan-500/25 text-lg&quot;
              >
                Get Started Today
              </Link>
              <div className=&quot;flex items-center space-x-4 text-gray-300&quot;>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Phone className=&quot;h-5 w-5 text-cyan-400&quot; />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Mail className=&quot;h-5 w-5 text-cyan-400&quot; />
                  <span>{contactInfo.email}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2029 />
    </>
  );
}
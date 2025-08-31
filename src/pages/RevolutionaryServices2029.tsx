import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, Users, TrendingUp, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Target, Award, Code, Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, PanelLeft, CheckCircle, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { REVOLUTIONARY_2029_ADVANCED_MICRO_SAAS_SERVICES } from '../../data/revolutionary-2029-advanced-micro-saas-services';

export default function RevolutionaryServices2029() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const categories = ['All', 'AI & Automation', 'Quantum Computing & AI', 'AI & Security', 'AI & Marketing', 'AI & Sales', 'AI & Support', 'AI & Analytics', 'IT & Infrastructure', 'Quantum Computing & Finance', 'AI & Healthcare'];

  const filteredServices = REVOLUTIONARY_2029_ADVANCED_MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      default:
        return 0;
    }
  });

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setVolume(volume > 0 ? 0 : 0.5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <SEO 
          title="Revolutionary 2029 Advanced Micro SAAS Services | Zion Tech Group"
          description="Discover our cutting-edge 2029 micro SAAS services featuring AI automation, quantum computing, cybersecurity, and more. Transform your business with next-generation technology."
          keywords="2029 micro SAAS, AI automation, quantum computing, cybersecurity, business intelligence, Zion Tech Group"
        />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Revolutionary 2029
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Advanced Micro SAAS Services
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the future of business technology with our cutting-edge AI automation, 
                quantum computing, and next-generation micro SAAS solutions.
              </p>
            </motion.div>

            {/* Audio Controls */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center space-x-4 mb-8"
            >
              <button
                onClick={togglePlay}
                className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button
                onClick={toggleMute}
                className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
              >
                {volume > 0 ? <Volume2 size={24} /> : <VolumeX size={24} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-24 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: Users, value: '1,200+', label: 'Active Customers' },
                { icon: Star, value: '4.9/5', label: 'Average Rating' },
                { icon: TrendingUp, value: '45%', label: 'Cost Reduction' },
                { icon: Zap, value: '24/7', label: 'AI Operations' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search revolutionary services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex-shrink-0">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-slate-800 text-white">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="flex-shrink-0">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="popularity" className="bg-slate-800 text-white">Most Popular</option>
                    <option value="price-low" className="bg-slate-800 text-white">Price: Low to High</option>
                    <option value="price-high" className="bg-slate-800 text-white">Price: High to Low</option>
                    <option value="rating" className="bg-slate-800 text-white">Highest Rated</option>
                    <option value="customers" className="bg-slate-800 text-white">Most Customers</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                          POPULAR
                        </div>
                      )}

                      {/* Service Icon */}
                      <div className="text-6xl mb-4">{service.icon}</div>

                      {/* Service Info */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-purple-400">
                            {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm">{service.rating}</span>
                            <span className="text-gray-400 text-sm">({service.reviews})</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-purple-400 text-sm cursor-pointer hover:underline">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                        <div className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <div key={idx} className="flex items-center text-gray-300 text-sm">
                              <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Market Info */}
                      <div className="mb-6 p-3 bg-white/5 rounded-lg">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-gray-400">Market:</span>
                            <div className="text-white font-medium">{service.marketSize}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Growth:</span>
                            <div className="text-white font-medium">{service.growthRate}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Customers:</span>
                            <div className="text-white font-medium">{service.customers.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Setup:</span>
                            <div className="text-white font-medium">{service.setupTime}</div>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex space-x-3">
                        <a
                          href={service.link}
                          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </a>
                        <button className="px-4 py-3 border border-purple-500 text-purple-400 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300">
                          <MessageCircle className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Contact Info */}
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="text-xs text-gray-400">
                          <div>📞 {service.contactInfo.mobile}</div>
                          <div>✉️ {service.contactInfo.email}</div>
                          <div>📍 {service.contactInfo.address}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already leveraging our revolutionary 2029 technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/request-quote"
                  className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Request Custom Quote
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
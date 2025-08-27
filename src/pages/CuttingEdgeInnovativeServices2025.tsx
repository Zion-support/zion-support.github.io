import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Globe,
  Settings,
  Database,
  Network,
  Search,
  Filter,
  TrendingUp,
  DollarSign,
  Clock,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  cuttingEdgeInnovativeServices2025, 
  serviceCategories2025,
  getServicesByCategory2025,
  getPopularServices2025 
} from '../../data/2025-cutting-edge-innovative-services';
import { 
  specializedIndustrySolutions2025,
  industryCategories2025,
  getSolutionsByIndustry 
} from '../../data/2025-specialized-industry-solutions';
import { 
  comprehensivePricingAnalysis2025,
  getMarketInsights,
  getCompetitiveLandscape 
} from '../../data/2025-comprehensive-pricing-analysis';
export default function CuttingEdgeInnovativeServices2025() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const allServices = [...cuttingEdgeInnovativeServices2025, ...specializedIndustrySolutions2025];
  const marketInsights = getMarketInsights();
  const competitiveLandscape = getCompetitiveLandscape();
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'All' || (service as any).industry === selectedIndustry;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesIndustry && matchesSearch;
  });
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'price-low':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
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
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan">
      <SEO 
        title="Cutting-Edge Innovative Services 2025 - Zion Tech Group"
        description="Discover revolutionary AI, quantum computing, blockchain, and specialized industry solutions. Transform your business with Zion Tech Group's cutting-edge technology services."
        keywords="AI services, quantum computing, blockchain, cybersecurity, manufacturing, healthcare, financial services, innovative technology"
        canonical="https://ziontechgroup.com/cutting-edge-innovative-services-2025"
      />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Cutting-Edge <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Innovative Services</span> 2025
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8"
          >
            Revolutionary AI, quantum computing, blockchain, and specialized industry solutions designed to transform your business and drive unprecedented growth in the digital age.
          </motion.p>
          
          {/* Market Insights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-zion-cyan/30">
              <div className="text-zion-cyan text-2xl font-bold">{marketInsights.totalMarketSize}</div>
              <div className="text-zion-slate-light text-sm">Total Market Size</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-zion-purple/30">
              <div className="text-zion-purple text-2xl font-bold">{marketInsights.averageGrowthRate}</div>
              <div className="text-zion-slate-light text-sm">Average Growth</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-zion-cyan/30">
              <div className="text-zion-cyan text-2xl font-bold">{marketInsights.highestROI}</div>
              <div className="text-zion-slate-light text-sm">Highest ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-zion-purple/30">
              <div className="text-zion-purple text-2xl font-bold">{marketInsights.fastestPayback}</div>
              <div className="text-zion-slate-light text-sm">Fastest Payback</div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Request Quote
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                />
              </div>
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  <option value="All">All Categories</option>
                  {serviceCategories2025.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              {/* Industry Filter */}
              <div className="relative">
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  <option value="All">All Industries</option>
                  {industryCategories2025.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Sort by Rating</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  {service.popular && (
                    <div className="bg-zion-cyan text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </div>
                  )}
                </div>
                {/* Service Info */}
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-zion-slate-light text-sm mb-3">{service.tagline}</p>
                
                {/* Price */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                  <span className="text-zion-slate-light ml-1">{service.period}</span>
                </div>
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-light text-sm">
                        <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="text-center">
                    <div className="text-zion-cyan font-semibold">{service.rating || 'N/A'}</div>
                    <div className="text-zion-slate-light">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-zion-purple font-semibold">{service.customers || 'N/A'}</div>
                    <div className="text-zion-slate-light">Customers</div>
                  </div>
                </div>
                {/* CTA */}
                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Competitive Landscape */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Competitive Landscape
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(competitiveLandscape).map(([category, competitors]) => (
                <div key={category} className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-zion-cyan mb-3 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <ul className="space-y-2">
                    {competitors.map((competitor, idx) => (
                      <li key={idx} className="text-zion-slate-light text-sm flex items-center">
                        <Target className="h-3 w-3 text-zion-purple mr-2" />
                        {competitor}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Join the future of technology with Zion Tech Group's cutting-edge innovative services. 
              Get started today and experience unprecedented growth and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-white text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-slate-light transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/request-quote" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-zion-cyan text-2xl mb-2">📱</div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div>
                <div className="text-zion-cyan text-2xl mb-2">✉️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <div className="text-zion-cyan text-2xl mb-2">📍</div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
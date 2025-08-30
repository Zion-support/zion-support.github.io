import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Server, 
  Zap, 
  Shield, 
  Users, 
  Truck, 
  Workflow, 
  MessageSquare, 
  BarChart3, 
  Cloud, 
  Database, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Cpu,
  Lock,
  Monitor,
  Activity,
  Mail,
  Phone,
  ExternalLink,
  DollarSign,
  Award,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  Users as UsersIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  Search,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { newInnovativeMicroSaasServices } from '../data/innovativeMicroSaasServices2025.ts';
import { newAdvancedAIServices } from '../data/advancedAIServices2025.ts';
import { newInnovativeITInfrastructureServices } from '../data/innovativeITInfrastructure2025.ts';

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-500' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Zap, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain, color: 'from-green-500 to-emerald-500' },
    { id: 'it-services', name: 'IT Services', icon: Server, color: 'from-orange-500 to-red-500' }
  ];

  const allServices = [
    ...newInnovativeMicroSaasServices.map(service => ({ ...service, categoryId: 'micro-saas' })),
    ...newAdvancedAIServices.map(service => ({ ...service, categoryId: 'ai-solutions' })),
    ...newInnovativeITInfrastructureServices.map(service => ({ ...service, categoryId: 'it-services' }))
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.categoryId === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Explore our cutting-edge AI, IT, and Micro SaaS services. Discover innovative solutions that transform businesses with advanced technology."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Services Showcase 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary portfolio of AI-powered solutions, cutting-edge IT services, and innovative Micro SaaS platforms designed to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center text-cyan-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>50+ Innovative Services</span>
              </div>
              <div className="flex items-center text-blue-400">
                <Star className="w-5 h-5 mr-2" />
                <span>Industry-Leading Technology</span>
              </div>
              <div className="flex items-center text-green-400">
                <Award className="w-5 h-5 mr-2" />
                <span>Proven Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                    }`}
                  >
                    <category.icon className="inline-block w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Price and Market Comparison */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.price}
                      </div>
                      <div className="text-xs text-gray-400">
                        per {service.billing}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Market Price</div>
                      <div className="text-sm text-green-400 font-medium">
                        {service.marketPrice}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                {service.benefits && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-400">
                          <TrendingUpIcon className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contact Information */}
                <div className="mb-6 p-4 bg-slate-700/30 rounded-lg">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                    Contact Information
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                      <span>{service.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Mail className="w-4 h-4 text-cyan-400 mr-2" />
                      <span>{service.contactInfo.email}</span>
                    </div>
                    <div className="flex items-start text-gray-400">
                      <MapPin className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">{service.contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <a
                    href={service.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">
                No services found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                Clear filters and show all services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 border border-slate-600"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today for a personalized consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="https://ziontechgroup.com/request-quote"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200 border border-slate-600"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Request Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Add missing Search component
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

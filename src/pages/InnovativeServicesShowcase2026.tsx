import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Scale,
  Gauge,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Award,
  Globe2,
  Building2,
  Briefcase,
  Heart,
  ArrowUpRight
} from 'lucide-react';
import { allInnovativeServices2026 } from '../data/innovativeServices2026';

export default function InnovativeServicesShowcase2026() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const { microSaas, itInfrastructure, aiServices } = allInnovativeServices2026;
  const allServices = [...microSaas, ...itInfrastructure, ...aiServices];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'micro-saas') return service.category && matchesSearch;
    if (activeTab === 'it-infrastructure') return service.hourlyRate && matchesSearch;
    if (activeTab === 'ai-services') return service.aiModel && matchesSearch;
    
    return matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return (a.price || a.hourlyRate || 0) - (b.price || b.hourlyRate || 0);
      case 'innovation':
        return b.innovationLevel.localeCompare(a.innovationLevel);
      case 'market-size':
        return parseFloat(b.marketSize.replace(/[^0-9.]/g, '')) - parseFloat(a.marketSize.replace(/[^0-9.]/g, ''));
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
    <>
      <Helmet>
        <title>Innovative Services Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's revolutionary micro SAAS, IT infrastructure, and AI services for 2026. Cutting-edge solutions with real market prices and ROI guarantees." />
        <meta name="keywords" content="AI services, micro SAAS, IT infrastructure, quantum computing, blockchain, edge computing, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2026" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary Services
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {" "}2026
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover Zion Tech Group's cutting-edge micro SAAS, IT infrastructure, and AI services. 
                Real solutions with proven ROI, market-leading prices, and innovation that transforms businesses.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center space-x-2 bg-zinc-800/50 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-white">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2 bg-zinc-800/50 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-white">500+ Clients</span>
                </div>
                <div className="flex items-center space-x-2 bg-zinc-800/50 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="text-white">99.9% Uptime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Navigation */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'all', label: 'All Services', count: allServices.length, icon: Globe },
                { id: 'micro-saas', label: 'Micro SAAS', count: microSaas.length, icon: Zap },
                { id: 'it-infrastructure', label: 'IT Infrastructure', count: itInfrastructure.length, icon: Server },
                { id: 'ai-services', label: 'AI Services', count: aiServices.length, icon: Brain }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-zinc-800/50 text-gray-300 hover:bg-zinc-700/50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or benefits..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div className="flex gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="innovation">Sort by Innovation</option>
                  <option value="market-size">Sort by Market Size</option>
                </select>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white hover:bg-zinc-700/50 transition-colors"
                >
                  {showFilters ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 group"
                >
                  {/* Service Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-3">
                          {service.category}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {service.featured && (
                          <Star className="w-5 h-5 text-yellow-400" />
                        )}
                        {service.trending && (
                          <TrendingUp className="w-5 h-5 text-green-400" />
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing and Features */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.pricing || `$${service.hourlyRate}/hr`}
                      </div>
                      <div className="text-sm text-gray-400">
                        Market: {service.marketPrice}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">ROI: {service.roi}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-300">Setup: {service.setupTime}</span>
                      </div>
                      {service.freeTier && (
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-300">Free Trial Available</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-zinc-700/50 text-cyan-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg text-center font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                    </Link>
                    <button className="px-4 py-3 border border-zinc-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {sortedServices.length === 0 && (
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search terms or filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another tech company. We're innovators, problem-solvers, and your strategic technology partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI-First Approach",
                  description: "Every solution is built with artificial intelligence at its core, ensuring maximum efficiency and innovation."
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-level security with SOC 2, ISO 27001, and GDPR compliance built into every service."
                },
                {
                  icon: Zap,
                  title: "Proven ROI",
                  description: "Our clients see an average 300% ROI within 6-12 months of implementation."
                },
                {
                  icon: Globe2,
                  title: "Global Support",
                  description: "24/7 support across all time zones with dedicated account managers and technical experts."
                },
                {
                  icon: Rocket,
                  title: "Rapid Deployment",
                  description: "Most solutions are deployed in 2-8 weeks, not months or years."
                },
                {
                  icon: Heart,
                  title: "Customer Success",
                  description: "We don't just sell solutions; we ensure your success with comprehensive training and support."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies already leveraging our revolutionary services to gain competitive advantages and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                </Link>
                <Link
                  to="/pricing"
                  className="border border-zinc-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

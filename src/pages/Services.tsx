import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Infinity
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from '../data/comprehensiveInnovativeServices2030';
import { COMPREHENSIVE_PRICING_GUIDE_2030 } from '../data/comprehensivePricingGuide2030';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  // Get unique categories from services
  const categories = [
    { id: 'all', name: 'All Services', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Research', name: 'AI & Research', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Green Tech').length, icon: '🌿', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Space Tech').length, icon: '🛸', color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' },
    { id: 'AI & Development', name: 'AI & Development', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Development').length, icon: '💻', color: 'from-cyan-500 to-blue-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐', color: 'from-teal-500 to-cyan-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' },
    { id: 'Digital Twin', name: 'Digital Twin', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Digital Twin').length, icon: '🔄', color: 'from-blue-500 to-indigo-500' },
    { id: 'Space Technology', name: 'Space Technology', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Sustainable Technology').length, icon: '🌱', color: 'from-green-500 to-teal-500' },
    { id: 'AI & Content', name: 'AI & Content', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' },
    { id: 'AI & HR', name: 'AI & HR', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-indigo-500 to-blue-500' },
    { id: 'FinTech', name: 'FinTech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' }
  ];

  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.title.localeCompare(b.title);
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Innovative Micro SAAS, IT & AI Services | Zion Tech Group"
        description="Discover our comprehensive range of cutting-edge micro SAAS, IT, and AI services. From AI-powered business intelligence to quantum computing solutions."
        keywords="micro SAAS, IT services, AI services, business intelligence, cybersecurity, cloud computing, quantum computing, blockchain, fintech"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 md:mb-8"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Innovative Micro SAAS
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  IT & AI Services
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                Transform your business with our cutting-edge micro SAAS solutions, enterprise IT services, and AI-powered innovations. 
                Delivering real results with proven ROI and enterprise-grade security.
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8 text-slate-300 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                  <span className="hidden sm:inline">364 E Main St STE 1008, Middletown DE 19709</span>
                  <span className="sm:hidden">Middletown DE</span>
                </div>
              </div>
            </motion.div>

            {/* Search and Filter Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center max-w-4xl mx-auto">
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 md:w-5 md:h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 md:py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-full sm:w-80 text-sm md:text-base"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 md:px-4 py-2 md:py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm md:text-base w-full sm:w-auto"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-6xl mx-auto">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                    activeCategory === 'all'
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
                  }`}
                >
                  All Services ({COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length})
                </button>
                {categories.slice(1).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
                    }`}
                  >
                    <span className="hidden sm:inline">{category.icon} </span>
                    <span className="sm:hidden">{category.icon}</span>
                    <span className="hidden md:inline">{category.name}</span>
                    <span className="md:hidden">{category.name.split(' ')[0]}</span>
                    <span className="hidden sm:inline"> ({category.count})</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Service Category Anchors */}
            <div className="hidden">
              <div id="ai-business-intelligence"></div>
              <div id="ai-healthcare"></div>
              <div id="ai-legal-tech"></div>
              <div id="ai-research"></div>
              <div id="ai-green-tech"></div>
              <div id="ai-metaverse"></div>
              <div id="ai-space-tech"></div>
              <div id="ai-fintech"></div>
              <div id="ai-supply-chain"></div>
              <div id="ai-qa"></div>
              <div id="cybersecurity"></div>
              <div id="cloud-devops"></div>
              <div id="data-analytics"></div>
              <div id="it-infrastructure"></div>
              <div id="digital-twin"></div>
              <div id="iot-edge"></div>
              <div id="blockchain"></div>
              <div id="quantum-computing"></div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
            >
              <AnimatePresence>
                {sortedServices.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    layout
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4 md:p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
                  >
                    <div className="flex items-start justify-between mb-3 md:mb-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Brain className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                            {service.title}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-400 line-clamp-1">{service.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                        <span className="text-xs md:text-sm text-slate-300">{service.rating}</span>
                        <span className="text-xs text-slate-500 hidden sm:inline">({service.reviewCount})</span>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-3 md:mb-4 line-clamp-3 text-sm md:text-base">{service.description}</p>

                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className="text-slate-400">Price:</span>
                        <span className="text-white font-semibold">${service.price.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className="text-slate-400">Market Price:</span>
                        <span className="text-slate-300">${service.marketPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className="text-slate-400">ROI:</span>
                        <span className="text-green-400 font-semibold">{service.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className="text-slate-400">Setup Time:</span>
                        <span className="text-slate-300">{service.availability}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className="text-slate-400">AI Score:</span>
                        <span className="text-cyan-400 font-semibold">{service.aiScore}/100</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600 line-clamp-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                      <a
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more details about pricing, implementation timeline, and features.`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 px-3 md:px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 text-sm"
                      >
                        Get Started
                      </a>
                      <a
                        href={`tel:+13024640950`}
                        className="px-3 md:px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors text-sm text-center"
                      >
                        Call Now
                      </a>
                    </div>
                    
                    {/* Quick Contact Info */}
                    <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-slate-700">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="truncate">📧 kleber@ziontechgroup.com</span>
                        <span className="hidden sm:inline">📱 +1 302 464 0950</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {sortedServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 md:py-16"
              >
                <Search className="w-12 h-12 md:w-16 md:h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-lg md:text-xl text-slate-400 mb-2">No services found</h3>
                <p className="text-slate-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
                We deliver cutting-edge solutions with proven results, enterprise-grade security, and dedicated support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Proven ROI",
                  description: "Our solutions deliver measurable business value with clear ROI metrics and performance tracking."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Enterprise Security",
                  description: "Bank-level security protocols and compliance standards to protect your business data and operations."
                },
                {
                  icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Expert Support",
                  description: "24/7 technical support from certified professionals with deep industry expertise."
                },
                {
                  icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Innovation First",
                  description: "Stay ahead with cutting-edge technologies and forward-thinking solutions that drive growth."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-300 text-sm md:text-base">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                Competitive <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Advantages</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
                Discover what sets us apart from the competition and why leading businesses choose Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Lightning Fast Implementation",
                  description: "Get your solutions up and running in weeks, not months. Our streamlined processes ensure rapid deployment.",
                  stats: "3-8 weeks average"
                },
                {
                  icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Precision AI Solutions",
                  description: "Our AI models achieve 95%+ accuracy rates, delivering reliable results you can trust for critical business decisions.",
                  stats: "95%+ accuracy"
                },
                {
                  icon: <Globe2 className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Global Reach, Local Support",
                  description: "24/7 support available worldwide with local expertise and understanding of regional business requirements.",
                  stats: "24/7 global support"
                },
                {
                  icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Industry Recognition",
                  description: "Award-winning solutions recognized by leading technology publications and industry experts.",
                  stats: "15+ industry awards"
                },
                {
                  icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Customer Success Focus",
                  description: "Dedicated success managers ensure your implementation exceeds expectations and delivers measurable results.",
                  stats: "98% satisfaction rate"
                },
                {
                  icon: <Infinity className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Future-Proof Technology",
                  description: "Built on cutting-edge frameworks and architectures that scale with your business growth and evolving needs.",
                  stats: "99.9% uptime"
                }
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4 md:p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center">{advantage.title}</h3>
                  <p className="text-slate-300 mb-4 text-center text-sm md:text-base">{advantage.description}</p>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-semibold rounded-full border border-purple-500/30">
                      {advantage.stats}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 px-4">
                Join hundreds of businesses already leveraging our innovative solutions to drive growth and efficiency.
              </p>
              
              {/* Contact Methods */}
              <div className="mb-6 md:mb-8 p-4 md:p-6 bg-slate-800/50 rounded-xl border border-slate-600">
                <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Multiple Ways to Get Started</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-2 text-slate-300">
                    <Phone className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
                    <span>Call: +1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-300">
                    <MailIcon className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                    <span>Email: kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-300">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                    <span>Visit: Middletown DE</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 text-sm md:text-base"
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Link>
                <Link
                  to="/pricing-guide-2030"
                  className="inline-flex items-center px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-200 hover:scale-105 text-sm md:text-base"
                >
                  View Pricing Guide
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 md:px-8 py-2 md:py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200 text-sm md:text-base"
                >
                  Schedule Consultation
                </Link>
              </div>
              
              {/* Quick Contact Buttons */}
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-4 md:px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 text-sm"
                >
                  📞 Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry&body=Hi, I'm interested in your services. Please provide more information."
                  className="inline-flex items-center px-4 md:px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 text-sm"
                >
                  📧 Email Us
                </a>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 md:px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200 text-sm"
                >
                  🌐 Visit Website
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Footer */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MailIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

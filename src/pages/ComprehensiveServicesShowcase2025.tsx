import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  TrendingDown,
  Users2,
  Building2,
  Car,
  Leaf,
  Home,
  GraduationCap,
  Scale,
  Factory,
  Truck
} from 'lucide-react';
import { allAdvancedServices2025 } from '../data/2025-advanced-real-services-expansion';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = allAdvancedServices2025;
  
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI & Compliance', name: 'AI & Compliance', count: allServices.filter(s => s.category === 'AI & Compliance').length, icon: '🛡️', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: allServices.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-zion-orange to-zion-red' },
    { id: 'AI & Customer Service', name: 'AI & Customer Service', count: allServices.filter(s => s.category === 'AI & Customer Service').length, icon: '💬', color: 'from-zion-blue to-zion-cyan' },
    { id: 'AI & Fintech', name: 'AI & Fintech', count: allServices.filter(s => s.category === 'AI & Fintech').length, icon: '💰', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'AI & Manufacturing', name: 'AI & Manufacturing', count: allServices.filter(s => s.category === 'AI & Manufacturing').length, icon: '🏭', color: 'from-zion-blue to-zion-cyan' },
    { id: 'AI & Security', name: 'AI & Security', count: allServices.filter(s => s.category === 'AI & Security').length, icon: '🔒', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & Supply Chain', name: 'AI & Supply Chain', count: allServices.filter(s => s.category === 'AI & Supply Chain').length, icon: '📦', color: 'from-zion-orange to-zion-yellow' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI & Legal', name: 'AI & Legal', count: allServices.filter(s => s.category === 'AI & Legal').length, icon: '⚖️', color: 'from-zion-blue to-zion-indigo' },
    { id: 'AI & Education', name: 'AI & Education', count: allServices.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-zion-green to-zion-teal' },
    { id: 'AI & Real Estate', name: 'AI & Real Estate', count: allServices.filter(s => s.category === 'AI & Real Estate').length, icon: '🏠', color: 'from-zion-orange to-zion-red' },
    { id: 'AI & Energy', name: 'AI & Energy', count: allServices.filter(s => s.category === 'AI & Energy').length, icon: '⚡', color: 'from-zion-yellow to-zion-orange' },
    { id: 'AI & Transportation', name: 'AI & Transportation', count: allServices.filter(s => s.category === 'AI & Transportation').length, icon: '🚚', color: 'from-zion-blue to-zion-cyan' },
    { id: 'AI & Agriculture', name: 'AI & Agriculture', count: allServices.filter(s => s.category === 'AI & Agriculture').length, icon: '🌾', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Construction', name: 'AI & Construction', count: allServices.filter(s => s.category === 'AI & Construction').length, icon: '🏗️', color: 'from-zion-gray to-zion-slate' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'reviews':
        return (b.reviews || 0) - (a.reviews || 0);
      case 'name':
        return a.name.localeCompare(b.name);
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

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.icon || '🚀';
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.color || 'from-zion-cyan to-zion-blue';
  };

  return (
    <>
      <Helmet>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive portfolio of AI-powered micro SAAS services, IT solutions, and innovative technology services. Transform your business with cutting-edge solutions." />
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, technology consulting, digital transformation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
        <meta property="og:title" content="Comprehensive Services Showcase 2025 - Zion Tech Group" />
        <meta property="og:description" content="Explore Zion Tech Group's comprehensive portfolio of AI-powered micro SAAS services, IT solutions, and innovative technology services." />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Comprehensive Services Showcase 2025
              </h1>
              <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
                Discover Zion Tech Group's cutting-edge portfolio of AI-powered micro SAAS services, 
                IT solutions, and innovative technology services designed to transform your business
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-zion-cyan-light">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>25+ Advanced AI Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Industry-Leading ROI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>24/7 Expert Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-zion-slate-dark/50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl p-6 border border-zion-cyan/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-zion-cyan mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a 
                    href="tel:+13024640950" 
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-lg"
                  >
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-zion-cyan mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-lg"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-zion-cyan mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <a 
                    href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-lg text-center"
                  >
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-zion-slate-dark/50 rounded-2xl p-6 border border-zion-slate-light/20">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-cyan-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate border border-zion-slate-light/30 rounded-lg text-white placeholder-zion-cyan-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-zion-slate border border-zion-slate-light/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent appearance-none cursor-pointer"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-cyan-light w-5 h-5 pointer-events-none" />
                </div>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-zion-slate border border-zion-slate-light/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent appearance-none cursor-pointer"
                  >
                    <option value="rating">Sort by Rating</option>
                    <option value="price">Sort by Price</option>
                    <option value="reviews">Sort by Reviews</option>
                    <option value="name">Sort by Name</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-cyan-light w-5 h-5 pointer-events-none" />
                </div>

                {/* View Mode */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 px-4 py-3 rounded-lg border transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-zion-cyan border-zion-cyan text-white'
                        : 'bg-zion-slate border-zion-slate-light/30 text-zion-cyan-light hover:border-zion-cyan'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex-1 px-4 py-3 rounded-lg border transition-colors ${
                      viewMode === 'list'
                        ? 'bg-zion-cyan border-zion-cyan text-white'
                        : 'bg-zion-slate border-zion-slate-light/30 text-zion-cyan-light hover:border-zion-cyan'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}
            >
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`bg-zion-slate-dark/50 rounded-2xl border border-zion-slate-light/20 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{service.icon}</span>
                          <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                              {service.category}
                            </span>
                          </div>
                        </div>
                        {service.popular && (
                          <span className="bg-zion-cyan text-white text-xs px-2 py-1 rounded-full font-medium">
                            Popular
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-zion-cyan-light mb-4">{service.tagline}</p>
                      <p className="text-zion-cyan-light/80 text-sm mb-4 line-clamp-3">{service.description}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-zion-cyan-light">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-semibold text-white">{service.price}</span>
                          <span>{service.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zion-cyan-light">
                          <Clock className="w-4 h-4" />
                          <span>Setup: {service.setupTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zion-cyan-light">
                          <TrendingUp className="w-4 h-4" />
                          <span>ROI: {service.roi}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-medium">{service.rating}</span>
                          <span className="text-zion-cyan-light text-sm">({service.reviews} reviews)</span>
                        </div>
                        <div className="text-zion-cyan-light text-sm">
                          {service.trialDays && `${service.trialDays} day trial`}
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-white text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-zion-cyan-light">
                              <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-white text-sm">Market Position:</h4>
                        <div className="text-sm text-zion-cyan-light">
                          <p>Market Size: {service.marketSize}</p>
                          <p>Growth Rate: {service.growthRate}</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Link
                          to={service.link}
                          className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-4 rounded-lg font-medium text-center hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </Link>
                        <a
                          href="https://ziontechgroup.com/contact"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-zion-slate border border-zion-cyan text-zion-cyan py-3 px-4 rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
                        >
                          Contact
                        </a>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <div className="flex-1 p-6">
                      <div className="flex items-start gap-6">
                        <span className="text-4xl">{service.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                              <p className="text-zion-cyan-light text-lg mb-2">{service.tagline}</p>
                              <div className="flex items-center gap-4 mb-3">
                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                                  {service.category}
                                </span>
                                {service.popular && (
                                  <span className="bg-zion-cyan text-white text-sm px-3 py-1 rounded-full font-medium">
                                    Popular
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-white mb-1">{service.price}</div>
                              <div className="text-zion-cyan-light">{service.period}</div>
                            </div>
                          </div>

                          <p className="text-zion-cyan-light/80 mb-4">{service.description}</p>

                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">{service.rating}</div>
                              <div className="text-sm text-zion-cyan-light">Rating</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">{service.reviews}</div>
                              <div className="text-sm text-zion-cyan-light">Reviews</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-white">{service.setupTime}</div>
                              <div className="text-sm text-zion-cyan-light">Setup Time</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-white">{service.roi}</div>
                              <div className="text-sm text-zion-cyan-light">ROI</div>
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <Link
                              to={service.link}
                              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
                            >
                              Learn More
                            </Link>
                            <a
                              href="https://ziontechgroup.com/contact"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-zion-slate border border-zion-cyan text-zion-cyan py-3 px-6 rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
                            >
                              Contact Sales
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {sortedServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-cyan-light">Try adjusting your search or filter criteria</p>
              </div>
            )}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-cyan-light mb-8">
                Join hundreds of companies already leveraging Zion Tech Group's AI-powered solutions 
                to drive innovation, efficiency, and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ziontechgroup.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-4 px-8 rounded-lg font-medium text-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="bg-zion-slate border border-zion-cyan text-zion-cyan py-4 px-8 rounded-lg font-medium text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer Contact */}
        <section className="bg-zion-slate-dark/50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                  <a 
                    href="tel:+13024640950" 
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                  >
                    +1 302 464 0950
                  </a>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Address</h4>
                  <a 
                    href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                  >
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </a>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-zion-slate-light/20">
                <p className="text-zion-cyan-light">
                  Visit our website: <a 
                    href="https://ziontechgroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                  >
                    ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;

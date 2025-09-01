import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  BarChart,
  PieChart,
  Activity,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Cloud,
  Grid,
  List,
  Headphones,
  Atom,
  Link,
  Leaf,
  FlaskConical
} from 'lucide-react';
import { ENHANCED_MICRO_SAAS_SERVICES_2026 } from '../data/enhancedMicroSaasServices2026';

const UltimateZionServicesShowcase2026: React.FC = () => {

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = ENHANCED_MICRO_SAAS_SERVICES_2026;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: allServices.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'Customer Experience', name: 'Customer Experience', count: allServices.filter(s => s.category === 'Customer Experience').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Financial Technology', name: 'Financial Technology', count: allServices.filter(s => s.category === 'Financial Technology').length, icon: '💰', color: 'from-zion-green to-zion-emerald' },
    { id: 'Healthcare Technology', name: 'Healthcare Technology', count: allServices.filter(s => s.category === 'Healthcare Technology').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'Supply Chain', name: 'Supply Chain', count: allServices.filter(s => s.category === 'Supply Chain').length, icon: '📦', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Digital Marketing', name: 'Digital Marketing', count: allServices.filter(s => s.category === 'Digital Marketing').length, icon: '📢', color: 'from-zion-orange to-zion-red' },
    { id: 'Project Management', name: 'Project Management', count: allServices.filter(s => s.category === 'Project Management').length, icon: '📋', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Human Resources', name: 'Human Resources', count: allServices.filter(s => s.category === 'Human Resources').length, icon: '👨‍💼', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Content Creation', name: 'Content Creation', count: allServices.filter(s => s.category === 'Content Creation').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'Customer Service', name: 'Customer Service', count: allServices.filter(s => s.category === 'Customer Service').length, icon: '🎧', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Business Automation', name: 'Business Automation', count: allServices.filter(s => s.category === 'Business Automation').length, icon: '⚙️', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Industrial IoT', name: 'Industrial IoT', count: allServices.filter(s => s.category === 'Industrial IoT').length, icon: '🏭', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Software Development', name: 'Software Development', count: allServices.filter(s => s.category === 'Software Development').length, icon: '💻', color: 'from-zion-purple to-zion-cyan' },
    { id: 'DevOps', name: 'DevOps', count: allServices.filter(s => s.category === 'DevOps').length, icon: '🔧', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍', color: 'from-zion-purple to-zion-indigo' },
    { id: 'Space Technology', name: 'Space Technology', count: allServices.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-zion-purple to-zion-pink' },
    { id: 'Sustainability', name: 'Sustainability', count: allServices.filter(s => s.category === 'Sustainability').length, icon: '🌱', color: 'from-zion-green to-zion-emerald' },
    { id: 'Research & Development', name: 'Research & Development', count: allServices.filter(s => s.category === 'Research & Development').length, icon: '🔬', color: 'from-zion-purple to-zion-cyan' }
  ];

  const filteredServices = allServices.filter(service => {

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
      case 'reviewCount':
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

  const getCategoryIcon = (category: string) => {

    switch (category) {

      case 'AI & Business Intelligence': return <Brain className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Customer Experience': return <Users className="w-6 h-6" />;
      case 'Financial Technology': return <DollarSign className="w-6 h-6" />;
      case 'Healthcare Technology': return <Activity className="w-6 h-6" />;
      case 'Supply Chain': return <BarChart3 className="w-6 h-6" />;
      case 'Digital Marketing': return <TrendingUp className="w-6 h-6" />;
      case 'Project Management': return <Target className="w-6 h-6" />;
      case 'Human Resources': return <Users className="w-6 h-6" />;
      case 'Content Creation': return <Code className="w-6 h-6" />;
      case 'Customer Service': return <Headphones className="w-6 h-6" />;
      case 'Business Automation': return <Zap className="w-6 h-6" />;
      case 'Industrial IoT': return <Chip className="w-6 h-6" />;
      case 'Software Development': return <Code className="w-6 h-6" />;
      case 'DevOps': return <Server className="w-6 h-6" />;
      case 'Edge Computing': return <Globe className="w-6 h-6" />;
      case 'Quantum Computing': return <Atom className="w-6 h-6" />;
      case 'Blockchain': return <Link className="w-6 h-6" />;
      case 'Metaverse': return <Globe className="w-6 h-6" />;
      case 'Space Technology': return <Rocket className="w-6 h-6" />;
      case 'Sustainability': return <Leaf className="w-6 h-6" />;
      case 'Research & Development': return <FlaskConical className="w-6 h-6" />;
      default: return <Lightbulb className="w-6 h-6" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Ultimate AI & Micro SAAS Services Showcase 2026 | Premier Technology Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive suite of AI-powered micro SAAS services, IT solutions, and innovative technology platforms. Transform your business with cutting-edge AI, cybersecurity, and digital transformation solutions." />
        <meta name="keywords" content="AI services, micro SAAS, cybersecurity, business intelligence, digital transformation, Zion Tech Group, technology solutions, AI platforms" />
        <meta property="og:title" content="Zion Tech Group - Ultimate AI & Micro SAAS Services Showcase 2026" />
        <meta property="og:description" content="Premier technology solutions provider offering cutting-edge AI, cybersecurity, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-dark via-zion-darker to-zion-darkest">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-blue/20 to-zion-purple/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion Tech Group
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple">
                  Ultimate Services Showcase 2026
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-light max-w-4xl mx-auto mb-8">
                Premier provider of cutting-edge AI-powered micro SAAS services, IT solutions, and innovative technology platforms. 
                Transform your business with our comprehensive suite of intelligent solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-zion-cyan/10 via-zion-blue/10 to-zion-purple/10 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-cyan mb-2" />
                <h3 className="font-semibold text-white mb-1">Phone</h3>
                <a href="tel:+13024640950" className="text-zion-light hover:text-zion-cyan transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-cyan mb-2" />
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-light hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-zion-cyan mb-2" />
                <h3 className="font-semibold text-white mb-1">Address</h3>
                <p className="text-zion-light">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Comprehensive AI & Technology Solutions
              </h2>
              <p className="text-xl text-zion-light max-w-3xl mx-auto">
                Our portfolio includes {allServices.length} cutting-edge services across multiple domains, 
                each designed to deliver exceptional value and transformative results for your business.
              </p>
            </motion.div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl border border-zion-cyan/30"
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}</div>
                <div className="text-zion-light">Total Services</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-zion-purple/20 to-zion-pink/20 rounded-xl border border-zion-purple/30"
              >
                <div className="text-3xl font-bold text-zion-purple mb-2">25+</div>
                <div className="text-zion-light">Categories</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-zion-green/20 to-zion-emerald/20 rounded-xl border border-zion-green/30"
              >
                <div className="text-3xl font-bold text-zion-green mb-2">4.8+</div>
                <div className="text-zion-light">Average Rating</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-zion-orange/20 to-zion-red/20 rounded-xl border border-zion-orange/30"
              >
                <div className="text-3xl font-bold text-zion-orange mb-2">500%+</div>
                <div className="text-zion-light">Average ROI</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filters and Search */}
            <div className="mb-12 space-y-6">
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-darker border border-zion-cyan/30 rounded-lg text-white placeholder-zion-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${

                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg'
                        : 'bg-zion-darker text-zion-light hover:bg-zion-dark hover:text-white border border-zion-cyan/30'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Sort and View Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-zion-darker border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="rating">Sort by Rating</option>
                    <option value="price">Sort by Price</option>
                    <option value="reviewCount">Sort by Reviews</option>
                    <option value="name">Sort by Name</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${

                      viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'bg-zion-darker text-zion-light hover:bg-zion-dark'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${

                      viewMode === 'list' ? 'bg-zion-cyan text-white' : 'bg-zion-darker text-zion-light hover:bg-zion-dark'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Services Display */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`bg-gradient-to-br from-zion-darker to-zion-dark border border-zion-cyan/30 rounded-xl p-6 hover:border-zion-cyan/60 transition-all duration-300 transform hover:scale-105 ${

                    viewMode === 'list' ? 'flex flex-col lg:flex-row gap-6' : ''
                  }`}
                >
                  {/* Service Header */}
                  <div className={`${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-lg">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{service.title}</h3>
                        <p className="text-sm text-zion-cyan">{service.category}</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className={`${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                    <p className="text-zion-light mb-4 line-clamp-3">{service.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-zion-darker rounded-lg">
                        <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                        <div className="text-xs text-zion-light">Starting Price</div>
                      </div>
                      <div className="text-center p-3 bg-zion-darker rounded-lg">
                        <div className="text-2xl font-bold text-zion-purple">{service.rating}</div>
                        <div className="text-xs text-zion-light">Rating</div>
                      </div>
                    </div>

                    {/* Market Information */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-zion-light">Market Price:</span>
                        <span className="text-zion-cyan font-semibold">{service.marketPrice}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-zion-light">ROI:</span>
                        <span className="text-zion-green font-semibold">{service.roi}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-zion-light">Setup Time:</span>
                        <span className="text-zion-purple font-semibold">{service.setupTime}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn More
                      </a>
                      <a
                        href={`tel:${service.contactInfo.phone}`}
                        className="inline-flex items-center justify-center px-4 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results Message */}
            {sortedServices.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-zion-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-zion-light">Try adjusting your search criteria or category filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 via-zion-blue/10 to-zion-purple/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-light mb-8">
                Join thousands of businesses that have already transformed their operations with Zion Tech Group's 
                cutting-edge AI and technology solutions. Get started today and experience the future of business technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-zion-darkest py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-zion-light mb-4">
                  Premier provider of cutting-edge AI and technology solutions for modern businesses.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-zion-light hover:text-zion-cyan transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-zion-light hover:text-zion-cyan transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-zion-light hover:text-zion-cyan transition-colors">
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-zion-light">
                  <li><a href="#" className="hover:text-zion-cyan transition-colors">AI Solutions</a></li>
                  <li><a href="#" className="hover:text-zion-cyan transition-colors">Cybersecurity</a></li>
                  <li><a href="#" className="hover:text-zion-cyan transition-colors">Digital Transformation</a></li>
                  <li><a href="#" className="hover:text-zion-cyan transition-colors">Cloud Solutions</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-zion-light">
                  <li><a href="#" className="hover:text-zion-cyan transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-zion-cyan transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-zion-cyan transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-zion-cyan transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                <div className="space-y-2 text-zion-light">
                  <p>+1 302 464 0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
            <div className="border-t border-zion-dark mt-8 pt-8 text-center text-zion-light">
              <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default UltimateZionServicesShowcase2026;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Atom,
  Space,
  Heart,
  Leaf,
  Lock,
  Eye,
  Heart,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { REVOLUTIONARY_SERVICES_2025 } from '../data/revolutionaryServices2025';
import { SEO } from '../components/SEO';

const RevolutionaryServices: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('innovation');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = REVOLUTIONARY_SERVICES_2025;

  const categories = [
    { 
      id: 'all', 
      name: 'All Services', 
      count: allServices.length, 
      icon: '🚀', 
      color: 'from-zion-cyan to-zion-blue',
      description: 'Complete portfolio of revolutionary services'
    },
    { 
      id: 'AI & Automation', 
      name: 'AI & Automation', 
      count: allServices.filter(s => s.category === 'AI & Automation').length, 
      icon: '🤖', 
      color: 'from-zion-purple to-zion-cyan',
      description: 'Next-generation AI solutions'
    },
    { 
      id: 'Quantum Computing', 
      name: 'Quantum Computing', 
      count: allServices.filter(s => s.category === 'Quantum Computing').length, 
      icon: '⚛️', 
      color: 'from-zion-purple to-zion-pink',
      description: 'Quantum-powered solutions'
    },
    { 
      id: 'AI & Healthcare', 
      name: 'AI & Healthcare', 
      count: allServices.filter(s => s.category === 'AI & Healthcare').length, 
      icon: '🏥', 
      color: 'from-zion-red to-zion-pink',
      description: 'Revolutionary healthcare technology'
    },
    { 
      id: 'Green Technology', 
      name: 'Green Technology', 
      count: allServices.filter(s => s.category === 'Green Technology').length, 
      icon: '🌱', 
      color: 'from-zion-green to-zion-emerald',
      description: 'Sustainable technology solutions'
    },
    { 
      id: 'Space Technology', 
      name: 'Space Technology', 
      count: allServices.filter(s => s.category === 'Space Technology').length, 
      icon: '🚀', 
      color: 'from-zion-blue to-zion-indigo',
      description: 'Space exploration and satellite technology'
    },
    { 
      id: 'Cybersecurity', 
      name: 'Cybersecurity', 
      count: allServices.filter(s => s.category === 'Cybersecurity').length, 
      icon: '🛡️', 
      color: 'from-zion-green to-zion-blue',
      description: 'AI-powered security solutions'
    },
    { 
      id: 'AI & Content', 
      name: 'AI & Content', 
      count: allServices.filter(s => s.category === 'AI & Content').length, 
      icon: '✍️', 
      color: 'from-zion-orange to-zion-red',
      description: 'Intelligent content creation'
    },
    { 
      id: 'Edge Computing', 
      name: 'Edge Computing', 
      count: allServices.filter(s => s.category === 'Edge Computing').length, 
      icon: '🌐', 
      color: 'from-zion-blue to-zion-cyan',
      description: 'IoT and edge computing solutions'
    },
    { 
      id: 'Blockchain', 
      name: 'Blockchain', 
      count: allServices.filter(s => s.category === 'Blockchain').length, 
      icon: '🔗', 
      color: 'from-zion-green to-zion-emerald',
      description: 'Blockchain AI integration'
    }
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
      case 'innovation':
        return b.innovationLevel === 'Revolutionary' ? 1 : -1;
      case 'price':
        return a.price - b.price;
      case 'roi':
        return parseFloat(b.roi.replace('%', '')) - parseFloat(a.roi.replace('%', ''));
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
      case 'AI & Automation': return <Brain className="w-5 h-5" />;
      case 'Quantum Computing': return <Atom className="w-5 h-5" />;
      case 'AI & Healthcare': return <Heart className="w-5 h-5" />;
      case 'Green Technology': return <Leaf className="w-5 h-5" />;
      case 'Space Technology': return <Space className="w-5 h-5" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'AI & Content': return <Eye className="w-5 h-5" />;
      case 'Edge Computing': return <Cpu className="w-5 h-5" />;
      case 'Blockchain': return <Lock className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Revolutionary Services 2025 - Zion Tech Group"
        description="Discover our cutting-edge AI, Quantum Computing, Space Technology, and revolutionary micro SAAS solutions. Transform your business with next-generation technology."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Services 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our cutting-edge AI, Quantum Computing, 
              Space Technology, and revolutionary micro SAAS solutions that will transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
                <Atom className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Quantum-Ready</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
                <Space className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">Space Technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search revolutionary services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="innovation">Sort by Innovation</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
                <option value="name">Sort by Name</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-white/10 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-1 w-4 h-4">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="space-y-1 w-4 h-4">
                    <div className="bg-current rounded-sm h-1"></div>
                    <div className="bg-current rounded-sm h-1"></div>
                    <div className="bg-current rounded-sm h-1"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/20'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </div>
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
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
              className={`group ${
                viewMode === 'grid' 
                  ? 'bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20'
                  : 'bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300'
              }`}
            >
              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryIcon(service.category).type === Brain ? 'from-purple-500 to-cyan-500' : 'from-cyan-500 to-blue-500'}`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Innovation Level Badge */}
              <div className="mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  service.innovationLevel === 'Revolutionary' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                }`}>
                  <Sparkles className="w-3 h-3 mr-1" />
                  {service.innovationLevel}
                </span>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-cyan-400 text-sm font-medium">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits and ROI */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-cyan-400 font-bold text-lg">{service.roi}</div>
                    <div className="text-gray-400 text-xs">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-green-400 font-bold text-lg">{service.estimatedDelivery}</div>
                    <div className="text-gray-400 text-xs">Delivery</div>
                  </div>
                </div>
              </div>

              {/* Contact and CTA */}
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <div>Contact: {service.contactInfo.phone}</div>
                    <div>{service.contactInfo.email}</div>
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary services. 
              Get in touch to discuss how we can help you achieve unprecedented success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Request Custom Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryServices;
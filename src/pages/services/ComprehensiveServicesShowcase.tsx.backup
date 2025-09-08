<<<<<<< HEAD
import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Shield, 
  Heart, 
  Leaf, 
  Scale, 
  Truck, 
  TrendingUp, 
  Building, 
  GraduationCap, 
  Atom,
  Zap,
  Globe,
  Users,
  BarChart3,
  Target,
  Award,
  Search,
  Filter,
  Star,
  Clock,
  DollarSign,
  TrendingDown,
  Eye,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES } from '../../data/innovativeNewServices';

export default function ComprehensiveServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('innovation');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(INNOVATIVE_NEW_SERVICES.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = INNOVATIVE_NEW_SERVICES
    .filter(service => 
      (selectedCategory === 'All' || service.category === selectedCategory) &&
      (service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'roi':
          return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
        case 'innovation':
          return b.innovationLevel.includes('Revolutionary') ? 1 : -1;
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Digital Marketing': Brain,
      'Cybersecurity': Shield,
      'Healthcare': Heart,
      'Sustainability': Leaf,
      'Legal Tech': Scale,
      'Supply Chain': Truck,
      'FinTech': TrendingUp,
      'Smart Cities': Building,
      'Education': GraduationCap,
      'Quantum Computing': Atom,
      'AI & Customer Experience': Users,
      'Blockchain & Supply Chain': Globe,
      'AI & IoT': Zap,
      'Metaverse & Virtual Reality': Eye,
      'AI & Human Resources': Users,
      'Edge Computing & IoT': Zap
    };
    return iconMap[category] || Globe;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Digital Marketing': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Healthcare': 'from-green-500 to-teal-500',
      'Sustainability': 'from-emerald-500 to-green-500',
      'Legal Tech': 'from-blue-500 to-indigo-500',
      'Supply Chain': 'from-yellow-500 to-orange-500',
      'FinTech': 'from-green-500 to-blue-500',
      'Smart Cities': 'from-gray-500 to-blue-500',
      'Education': 'from-purple-500 to-blue-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'AI & Customer Experience': 'from-cyan-500 to-blue-500',
      'Blockchain & Supply Chain': 'from-yellow-500 to-green-500',
      'AI & IoT': 'from-blue-500 to-cyan-500',
      'Metaverse & Virtual Reality': 'from-purple-500 to-indigo-500',
      'AI & Human Resources': 'from-pink-500 to-red-500',
      'Edge Computing & IoT': 'from-indigo-500 to-cyan-500'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  const getInnovationLevel = (level: string) => {
    if (level.includes('Revolutionary')) return { color: 'text-yellow-400', bg: 'bg-yellow-400/20', icon: Sparkles };
    if (level.includes('Cutting-edge')) return { color: 'text-cyan-400', bg: 'bg-cyan-400/20', icon: Star };
    if (level.includes('Advanced')) return { color: 'text-blue-400', bg: 'bg-blue-400/20', icon: Award };
    return { color: 'text-green-400', bg: 'bg-green-400/20', icon: CheckCircle };
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

const ComprehensiveServicesShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud & Infrastructure',
    'Networking',
    'IT Management',
    'Quantum Technology',
    'Emerging Tech'
  ];

  const services = [
    {
      id: 'ai-autonomous-systems',
      title: "AI Autonomous Systems",
      description: "Next-generation AI systems that operate independently and learn continuously",
      category: "AI & Machine Learning",
      icon: Brain,
      features: ["Self-learning algorithms", "Autonomous decision making", "Continuous optimization"],
      path: "/services/ai-autonomous-systems",
      featured: true,
      rating: 5
    },
    {
      id: 'cybersecurity',
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive security solutions with AI-powered threat detection",
      category: "Cybersecurity",
      icon: Shield,
      features: ["Real-time monitoring", "AI threat analysis", "Automated response"],
      path: "/services/cybersecurity",
      featured: true,
      rating: 5
    },
    {
      id: 'quantum-technology',
      title: "Quantum Technology Solutions",
      description: "Revolutionary quantum computing and encryption services",
      category: "Quantum Technology",
      icon: Cpu,
      features: ["Quantum encryption", "Superior performance", "Future-proof architecture"],
      path: "/services/quantum-technology",
      featured: true,
      rating: 5
    },
    {
      id: 'it-infrastructure',
      title: "IT Infrastructure Services",
      description: "Comprehensive IT infrastructure management and optimization",
      category: "IT Management",
      icon: Database,
      features: ["Infrastructure design", "Performance optimization", "Scalability planning"],
      path: "/services/it-infrastructure",
      featured: false,
      rating: 4
    },
    {
      id: 'micro-saas',
      title: "Micro SAAS Solutions",
      description: "Custom software solutions for specific business needs",
      category: "Emerging Tech",
      icon: Globe,
      features: ["Custom development", "Rapid deployment", "Scalable solutions"],
      path: "/services/micro-saas-solutions",
      featured: false,
      rating: 4
    },
    {
      id: '5g-enterprise',
      title: "5G Enterprise Solutions",
      description: "Cutting-edge 5G networks optimized for enterprise needs",
      category: "Networking",
      icon: Zap,
      features: ["Ultra-low latency", "Massive connectivity", "Enterprise security"],
      path: "/5g-enterprise-solutions",
      featured: false,
      rating: 4
    },
    {
      id: 'ai-research-assistant',
      title: "AI Autonomous Research Assistant",
      description: "AI-powered research and analysis platform",
      category: "AI & Machine Learning",
      icon: Brain,
      features: ["Automated research", "Data analysis", "Insight generation"],
      path: "/ai-autonomous-research-assistant",
      featured: false,
      rating: 4
    },
    {
      id: 'quantum-neural-network',
      title: "Quantum Neural Network Platform",
      description: "Revolutionary neural networks leveraging quantum computing",
      category: "AI & Quantum",
      icon: Cpu,
      features: ["Quantum algorithms", "Enhanced learning", "Breakthrough performance"],
      path: "/quantum-neural-network-platform",
      featured: false,
      rating: 5
    },
    {
      id: 'autonomous-business',
      title: "Autonomous Business Operations Platform",
      description: "AI-powered business process automation and optimization",
      category: "AI & Machine Learning",
      icon: Brain,
      features: ["Process automation", "Business intelligence", "Performance optimization"],
      path: "/autonomous-business-operations-platform",
      featured: false,
      rating: 4
    },
    {
      id: 'ai-asset-management',
      title: "AI-Powered IT Asset Management",
      description: "Intelligent asset tracking and optimization for modern enterprises",
      category: "IT Management",
      icon: Database,
      features: ["Predictive maintenance", "Cost optimization", "Real-time insights"],
      path: "/ai-powered-it-asset-management",
      featured: false,
      rating: 4
    },
    {
      id: 'soc2-compliance',
      title: "SOC2 Compliance Automation",
      description: "Automated compliance management and reporting",
      category: "Cybersecurity",
      icon: Shield,
      features: ["Automated compliance", "Real-time monitoring", "Audit preparation"],
      path: "/soc2-compliance-automation",
      featured: false,
      rating: 4
    },
    {
      id: 'industry-solutions',
      title: "Industry-Specific Solutions",
      description: "Tailored solutions for healthcare, finance, and manufacturing",
      category: "Emerging Tech",
      icon: Globe,
      features: ["Industry expertise", "Custom solutions", "Compliance ready"],
      path: "/services/industry-solutions",
      featured: false,
      rating: 4
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
<<<<<<< HEAD
      <SEO 
        title="Comprehensive Services Showcase - Zion Tech Group" 
        description="Explore our complete portfolio of innovative micro SAAS services, AI solutions, and cutting-edge technology services designed to transform your business."
        keywords="micro SAAS, AI services, technology solutions, digital transformation, innovation, business automation"
        canonical="https://ziontechgroup.com/services/comprehensive-showcase"
      />

      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 via-zion-purple/80 to-zion-cyan/70"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-pulse">
              Comprehensive Services
              <span className="block text-4xl md:text-5xl text-zion-cyan mt-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Innovation Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our complete ecosystem of revolutionary micro SAAS services, AI solutions, and cutting-edge 
              technology services designed to accelerate your digital transformation and business growth.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-cyan">{INNOVATIVE_NEW_SERVICES.length}+</div>
                <div className="text-sm text-zion-slate-light">Innovative Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-purple">15+</div>
                <div className="text-sm text-zion-slate-light">Technology Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-green">500%+</div>
                <div className="text-sm text-zion-slate-light">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-orange">24/7</div>
                <div className="text-sm text-zion-slate-light">Global Support</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                <Sparkles className="w-5 h-5 inline mr-2" />
                Explore Services
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
=======
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Comprehensive Services
              </span>
              <br />
              <span className="text-white">Showcase</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our complete portfolio of cutting-edge technology services designed to transform 
              your business and drive innovation across all industries.
            </p>
          </motion.div>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        </div>
      </section>

      {/* Search and Filter Section */}
<<<<<<< HEAD
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
=======
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
=======
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                />
              </div>

              {/* Category Filter */}
<<<<<<< HEAD
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
=======
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                  ))}
                </select>
              </div>

<<<<<<< HEAD
=======
              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                      : 'bg-gray-800/50 text-gray-400 hover:text-cyan-400'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                      : 'bg-gray-800/50 text-gray-400 hover:text-cyan-400'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
              }
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="group relative"
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      {service.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                      
                      <div className="relative z-10 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <div className="relative z-10">
                        <div className="mb-2">
                          <span className="text-xs font-medium text-cyan-400 uppercase tracking-wide">
                            {service.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex mr-2">
                            {renderStars(service.rating)}
                          </div>
                          <span className="text-sm text-gray-400">({service.rating}/5)</span>
                        </div>

                        <ul className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <Link
                          to={service.path}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ) : (
                    // List View
                    <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <span className="text-xs font-medium text-cyan-400 uppercase tracking-wide">
                                {service.category}
                              </span>
                              {service.featured && (
                                <span className="ml-2 px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <div className="flex items-center">
                              {renderStars(service.rating)}
                              <span className="text-sm text-gray-400 ml-2">({service.rating}/5)</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <ul className="flex flex-wrap gap-4">
                              {service.features.slice(0, 3).map((feature) => (
                                <li key={feature} className="flex items-center text-sm text-gray-400">
                                  <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            
                            <Link
                              to={service.path}
                              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
=======
import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Server, 
  Atom, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Rocket,
  Cpu,
  Eye,
  Lock,
  Home
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../../data/innovativeMicroSaasServices';
import { ADVANCED_IT_INFRASTRUCTURE_SERVICES } from '../../data/advancedITInfrastructureServices';
import { EMERGING_TECHNOLOGY_SERVICES } from '../../data/emergingTechnologyServices';

export default function ComprehensiveServicesShowcase() {
  const serviceCategories = [
    {
      name: "Innovative Micro SAAS",
      icon: Brain,
      description: "Cutting-edge micro SAAS solutions featuring AI, blockchain, IoT, and emerging technologies",
      services: INNOVATIVE_MICRO_SAAS_SERVICES.slice(0, 4),
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Advanced IT Infrastructure",
      icon: Server,
      description: "Enterprise-grade infrastructure solutions including edge computing, quantum-ready systems, and zero-trust security",
      services: ADVANCED_IT_INFRASTRUCTURE_SERVICES.slice(0, 4),
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Emerging Technologies",
      icon: Atom,
      description: "Revolutionary technologies including neuromorphic computing, DNA storage, and quantum internet",
      services: EMERGING_TECHNOLOGY_SERVICES.slice(0, 4),
      color: "from-green-500 to-emerald-500"
    }
  ];

  const highlights = [
    {
      title: "300%+ Average ROI",
      description: "Our innovative services deliver exceptional return on investment within 6-12 months",
      icon: TrendingUp
    },
    {
      title: "Future-Ready Technology",
      description: "Built with cutting-edge technologies that will define the next decade of innovation",
      icon: Rocket
    },
    {
      title: "Enterprise-Grade Security",
      description: "Multi-layered security with compliance across SOC 2, ISO 27001, HIPAA, and more",
      icon: Shield
    },
    {
      title: "24/7 Expert Support",
      description: "Dedicated support team with deep expertise in emerging technologies and enterprise solutions",
      icon: Eye
    }
  ];

  const technologies = [
    "AI/ML", "Blockchain", "Quantum Computing", "IoT", "Edge Computing", "Cloud Native",
    "Neuromorphic", "DNA Storage", "Biocomputing", "Photonic Computing", "Swarm Robotics"
  ];
=======
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import {
  Bot,
  Shield,
  Cloud,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Settings,
  Users,
  Zap,
  Code,
  Building,
  ArrowRight,
  Brain,
  Lock,
  Network,
  Cpu,
  Target,
  TrendingUp,
  Rocket,
  Star,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['all', ...Array.from(new Set(COMPREHENSIVE_SERVICES.map(service => service.category)))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-1000', label: 'Under $1,000' },
    { value: '1000-3000', label: '$1,000 - $3,000' },
    { value: '3000-5000', label: '$3,000 - $5,000' },
    { value: '5000+', label: 'Over $5,000' }
  ];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Machine Learning': <Brain className="h-8 w-8 p-1.5 rounded-md bg-blue-100 text-blue-700" />,
      'Cybersecurity': <Shield className="h-8 w-8 p-1.5 rounded-md bg-red-100 text-red-700" />,
      'Cloud & Infrastructure': <Cloud className="h-8 w-8 p-1.5 rounded-md bg-cyan-100 text-cyan-700" />,
      'Data & Analytics': <Database className="h-8 w-8 p-1.5 rounded-md bg-green-100 text-green-700" />,
      'Blockchain & Web3': <Globe className="h-8 w-8 p-1.5 rounded-md bg-purple-100 text-purple-700" />,
      'Internet of Things': <Network className="h-8 w-8 p-1.5 rounded-md bg-orange-100 text-orange-700" />,
      'Digital Transformation': <Rocket className="h-8 w-8 p-1.5 rounded-md bg-indigo-100 text-indigo-700" />,
      'Web & Mobile Development': <Code className="h-8 w-8 p-1.5 rounded-md bg-gray-100 text-gray-700" />,
      'IT Support & Consulting': <Settings className="h-8 w-8 p-1.5 rounded-md bg-yellow-100 text-yellow-700" />
    };
    return iconMap[category] || <Building className="h-8 w-8 p-1.5 rounded-md bg-gray-100 text-gray-700" />;
  };

  const getSupportLevelColor = (level: string) => {
    const colorMap: { [key: string]: string } = {
      'basic': 'bg-green-100 text-green-800',
      'premium': 'bg-blue-100 text-blue-800',
      'enterprise': 'bg-purple-100 text-purple-800'
    };
    return colorMap[level] || 'bg-gray-100 text-gray-800';
  };

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || 
      (selectedPriceRange === '0-1000' && service.price <= 1000) ||
      (selectedPriceRange === '1000-3000' && service.price > 1000 && service.price <= 3000) ||
      (selectedPriceRange === '3000-5000' && service.price > 3000 && service.price <= 5000) ||
      (selectedPriceRange === '5000+' && service.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />
        <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our complete portfolio of AI-powered, quantum computing, cybersecurity, and enterprise solutions. 
              Transform your business with cutting-edge technology designed for the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-blue-100 text-blue-800">
                {COMPREHENSIVE_SERVICES.length}+ Services
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-green-100 text-green-800">
                AI-Powered Solutions
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-purple-100 text-purple-800">
                Quantum Computing
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-red-100 text-red-800">
                Enterprise Security
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">Ready to Transform Your Business?</h3>
              <p className="text-blue-100">Get in touch with our technology experts today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-white">
                <Phone className="h-5 w-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Mail className="h-5 w-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <Button asChild variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Search Services</label>
              <Input
                placeholder="Search by name, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
              <Select value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)}>
                {priceRanges.map(range => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
              <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="category">Category</SelectItem>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-300">
            Showing {filteredServices.length} of {COMPREHENSIVE_SERVICES.length} services
          </p>
          <div className="flex items-center gap-2 text-yellow-400">
            <Star className="h-5 w-5 fill-current" />
            <span className="text-sm">Premium Quality Solutions</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedServices.map((service) => (
            <Card key={service.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  {getCategoryIcon(service.category)}
                  <Badge className={getSupportLevelColor(service.supportLevel)}>
                    {service.supportLevel}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-white/30 text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>

>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              {/* Sort */}
              <div className="relative">
                <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 appearance-none"
                >
                  <option value="innovation" className="bg-gray-800 text-white">Sort by Innovation</option>
                  <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                  <option value="roi" className="bg-gray-800 text-white">Sort by ROI</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Revolutionary Services Portfolio
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              {filteredServices.length} innovative services found - each designed to give your business a competitive edge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              const innovation = getInnovationLevel(service.innovationLevel);
              
              return (
                <div key={service.id} className="group relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-zion-cyan/70">
                          per {service.pricingModel}
                        </div>
                      </div>
                    </div>

                    {/* Innovation Level Badge */}
                    <div className="mb-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${innovation.bg} ${innovation.color}`}>
                        <innovation.icon className="w-3 h-3 mr-1" />
                        {service.innovationLevel.split(' ')[0]}
                      </div>
                    </div>

                    {/* Service Title & Description */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-zion-cyan/80 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-white/80">
                            <Zap className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-4 p-3 bg-white/5 rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-zion-cyan/70">Market Price:</span>
                          <div className="text-white font-semibold">{service.marketPrice}</div>
                        </div>
                        <div>
                          <span className="text-zion-cyan/70">ROI:</span>
                          <div className="text-green-400 font-semibold">{service.roi}</div>
                        </div>
                        <div>
                          <span className="text-zion-cyan/70">Delivery:</span>
                          <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                        </div>
                        <div>
                          <span className="text-zion-cyan/70">Support:</span>
                          <div className="text-white font-semibold capitalize">{service.supportLevel}</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center group"
                      >
                        <Users className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 text-center">
                      <div className="text-xs text-zion-cyan/70">
                        📞 {service.contactInfo.phone}
                      </div>
                      <div className="text-xs text-zion-cyan/70">
                        ✉️ {service.contactInfo.email}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3676
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                      </div>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
              );
            })}
=======
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of technology experts is ready to help you implement the perfect solution for your needs.
            Get started today with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <a href="tel:+13024640950">
                <Phone className="mr-2 h-5 w-5" />
                Call +1 302 464 0950
              </a>
            </Button>
          </div>
          <div className="mt-8 text-gray-400">
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Email: kleber@ziontechgroup.com</p>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f87d
=======
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e4ee
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-cyan/80">Try adjusting your search criteria or browse all categories</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="bg-white/5 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver innovative solutions that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-First Approach</h3>
              <p className="text-zion-cyan/80">
                Leverage the latest AI technologies to gain competitive advantages and drive innovation
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-zion-purple to-zion-pink rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-zion-cyan/80">
                Built-in security and compliance features to protect your business and data
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-zion-green to-zion-teal rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-zion-cyan/80">
                Measurable business outcomes with rapid implementation and quick time-to-value
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-zion-orange to-zion-red rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Support</h3>
              <p className="text-zion-cyan/80">
                24/7 support and expertise from our global team of technology professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-zion-blue to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Contact our team of experts to discuss how our innovative services can drive your digital transformation and business growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="bg-zion-cyan rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Consultation</h3>
              <p className="text-zion-cyan/80 mb-4">
                Get personalized advice from our technology experts
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Expert Consultation Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Schedule Consultation →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="bg-zion-purple rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ROI Assessment</h3>
              <p className="text-zion-cyan/80 mb-4">
                Understand the potential return on your investment
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=ROI Assessment Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Get Assessment →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="bg-zion-green rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Quick Start</h3>
              <p className="text-zion-cyan/80 mb-4">
                Begin your transformation journey immediately
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Quick Start Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Start Now →
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">📞 Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">✉️ Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">🌐 Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">📍 Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3676
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

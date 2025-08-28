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
  Infinity,
  Atom,
  Eye,
  Scale,
  BookOpen,
  Settings,
  Target as TargetIcon,
  MessageCircle,
  Building,
  Factory,
  Car,
  Home,
  CheckCircle as CheckCircleIcon,
  ArrowUpRight,
  Play,
  Crown,
  Flame,
  Sun,
  Moon,
  Gauge,
  GitFork,
  Truck,
  PenTool,
  Server,
  Key,
  Building2
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from '../data/comprehensiveInnovativeServices2030';

export default function ComprehensiveServicesLanding2025() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  // Enhanced categories with icons and descriptions
  const enhancedCategories = [
    { 
      id: 'all', 
      name: 'All Services', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length, 
      icon: '🚀', 
      color: 'from-cyan-500 to-blue-500',
      description: 'Complete portfolio of AI-powered solutions'
    },
    { 
      id: 'AI & Business Intelligence', 
      name: 'AI & Business Intelligence', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Business Intelligence').length, 
      icon: '🤖', 
      color: 'from-purple-500 to-pink-500',
      description: 'Transform data into actionable insights'
    },
    { 
      id: 'Cybersecurity', 
      name: 'Cybersecurity', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cybersecurity').length, 
      icon: '🛡️', 
      color: 'from-red-500 to-orange-500',
      description: 'Advanced threat detection and protection'
    },
    { 
      id: 'Cloud & DevOps', 
      name: 'Cloud & DevOps', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cloud & DevOps').length, 
      icon: '☁️', 
      color: 'from-blue-500 to-cyan-500',
      description: 'Scalable infrastructure and automation'
    },
    { 
      id: 'AI & Marketing', 
      name: 'AI & Marketing', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Marketing').length, 
      icon: '📈', 
      color: 'from-green-500 to-emerald-500',
      description: 'Intelligent campaign optimization'
    },
    { 
      id: 'Quantum Computing', 
      name: 'Quantum Computing', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Quantum Computing').length, 
      icon: '⚛️', 
      color: 'from-indigo-500 to-purple-500',
      description: 'Next-generation computational power'
    },
    { 
      id: 'IoT & Edge Computing', 
      name: 'IoT & Edge Computing', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'IoT & Edge Computing').length, 
      icon: '🌐', 
      color: 'from-teal-500 to-cyan-500',
      description: 'Connected devices and real-time processing'
    },
    { 
      id: 'Blockchain & Web3', 
      name: 'Blockchain & Web3', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Blockchain & Web3').length, 
      icon: '🔗', 
      color: 'from-yellow-500 to-orange-500',
      description: 'Decentralized and secure solutions'
    },
    { 
      id: 'AI & Healthcare', 
      name: 'AI & Healthcare', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Healthcare').length, 
      icon: '🏥', 
      color: 'from-pink-500 to-red-500',
      description: 'Medical AI and diagnostic tools'
    },
    { 
      id: 'FinTech', 
      name: 'FinTech', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'FinTech').length, 
      icon: '💰', 
      color: 'from-emerald-500 to-green-500',
      description: 'Financial technology and risk management'
    },
    { 
      id: 'Digital Twin', 
      name: 'Digital Twin', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Digital Twin').length, 
      icon: '🔄', 
      color: 'from-blue-500 to-indigo-500',
      description: 'Virtual replicas and simulation'
    },
    { 
      id: 'Space Technology', 
      name: 'Space Technology', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Space Technology').length, 
      icon: '🚀', 
      color: 'from-purple-500 to-pink-500',
      description: 'Satellite and space operations'
    },
    { 
      id: 'Sustainable Technology', 
      name: 'Sustainable Technology', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Sustainable Technology').length, 
      icon: '🌱', 
      color: 'from-green-500 to-teal-500',
      description: 'Environmental and green solutions'
    },
    { 
      id: 'AI & Content', 
      name: 'AI & Content', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Content').length, 
      icon: '✍️', 
      color: 'from-orange-500 to-red-500',
      description: 'Content creation and management'
    },
    { 
      id: 'AI & Customer Support', 
      name: 'AI & Customer Support', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Customer Support').length, 
      icon: '💬', 
      color: 'from-blue-500 to-purple-500',
      description: 'Intelligent customer service'
    },
    { 
      id: 'AI & HR', 
      name: 'AI & HR', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & HR').length, 
      icon: '👥', 
      color: 'from-indigo-500 to-blue-500',
      description: 'Human resources optimization'
    },
    { 
      id: 'AI & Legal Tech', 
      name: 'AI & Legal Tech', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Legal Tech').length, 
      icon: '⚖️', 
      color: 'from-blue-500 to-indigo-500',
      description: 'Legal technology and compliance'
    },
    { 
      id: 'AI & Research', 
      name: 'AI & Research', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Research').length, 
      icon: '🔬', 
      color: 'from-purple-500 to-violet-500',
      description: 'Scientific research and discovery'
    },
    { 
      id: 'AI & Green Tech', 
      name: 'AI & Green Tech', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Green Tech').length, 
      icon: '🌿', 
      color: 'from-green-500 to-emerald-500',
      description: 'Green technology and sustainability'
    },
    { 
      id: 'AI & Metaverse', 
      name: 'AI & Metaverse', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Metaverse').length, 
      icon: '🌍', 
      color: 'from-purple-500 to-indigo-500',
      description: 'Virtual reality and metaverse'
    },
    { 
      id: 'AI & Space Tech', 
      name: 'AI & Space Tech', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Space Tech').length, 
      icon: '🛸', 
      color: 'from-indigo-500 to-purple-500',
      description: 'Space technology and operations'
    },
    { 
      id: 'AI & Operations', 
      name: 'AI & Operations', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Operations').length, 
      icon: '⚙️', 
      color: 'from-gray-500 to-slate-500',
      description: 'Operational efficiency and automation'
    },
    { 
      id: 'AI & Development', 
      name: 'AI & Development', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Development').length, 
      icon: '💻', 
      color: 'from-cyan-500 to-blue-500',
      description: 'Development tools and automation'
    },
    { 
      id: 'AI & Education', 
      name: 'AI & Education', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Education').length, 
      icon: '🎓', 
      color: 'from-blue-500 to-indigo-500',
      description: 'Educational technology and learning'
    },
    { 
      id: 'AI & Entertainment', 
      name: 'AI & Entertainment', 
      count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Entertainment').length, 
      icon: '🎮', 
      color: 'from-purple-500 to-pink-500',
      description: 'Entertainment and content creation'
    }
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
        return b.rating - a.rating;
    }
  });

  const getCategoryIcon = (categoryName) => {
    const category = enhancedCategories.find(cat => cat.id === categoryName);
    return category ? category.icon : '🚀';
  };

  const getCategoryColor = (categoryName) => {
    const category = enhancedCategories.find(cat => cat.id === categoryName);
    return category ? category.color : 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive AI Services 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of AI-powered services, from business intelligence to quantum computing, cybersecurity to space technology. Transform your business with cutting-edge AI solutions."
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
                Comprehensive AI Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary portfolio of AI-powered solutions designed to transform businesses 
              across industries. From quantum computing to space technology, we deliver cutting-edge 
              innovation with measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Star className="w-5 h-5 mr-2" />
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing-guide-2030"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
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
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, categories, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Sort */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of AI-powered services designed to address 
              every aspect of modern business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {enhancedCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/20 to-blue-500/20'
                    : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="text-sm font-semibold text-white mb-1">{category.name}</div>
                  <div className="text-xs text-gray-400 mb-2">{category.count} services</div>
                  <div className="text-xs text-gray-500 leading-tight">{category.description}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {activeCategory === 'all' ? 'All Services' : `${activeCategory} Services`}
            </h2>
            <p className="text-xl text-gray-300">
              {sortedServices.length} services found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl">{getCategoryIcon(service.category)}</div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-white">{service.rating}</span>
                    <span className="text-sm text-gray-400">({service.reviewCount})</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">
                    {service.currency}{service.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.availability}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-400">AI Score: {service.aiScore}%</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    ROI: {service.roi}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    to="/request-quote"
                    className="inline-flex items-center px-4 py-2 border border-cyan-500 text-cyan-400 text-sm font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or category selection.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already leveraging our AI-powered solutions 
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Crown className="w-5 h-5 mr-2" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Our Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import React, { useState, useMemo } from 'react';
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
  Grid3X3,
  List,
  Filter as FilterIcon,
  Atom,
  Link,
  Heart
} from 'lucide-react';

// Mock data for services - in a real app, this would come from an API
const mockServices = [
  {
    id: 1,
    name: "AI-Powered Business Intelligence Platform",
    category: "AI & Automation",
    description: "Advanced analytics and business intelligence powered by artificial intelligence for data-driven decision making.",
    price: "$2,999",
    rating: 4.9,
    reviews: 127,
    features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "API integration"],
    tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning"],
    icon: Brain,
    color: "from-purple-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Quantum Computing Solutions",
    category: "Quantum Computing",
    description: "Cutting-edge quantum computing services for complex problem solving and optimization.",
    price: "$15,000",
    rating: 4.8,
    reviews: 89,
    features: ["Quantum algorithms", "Optimization", "Simulation", "Research support"],
    tags: ["Quantum", "Computing", "Optimization", "Research"],
    icon: Atom,
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 3,
    name: "Blockchain Enterprise Solutions",
    category: "Blockchain",
    description: "Enterprise-grade blockchain solutions for secure, transparent, and efficient business operations.",
    price: "$8,500",
    rating: 4.7,
    reviews: 156,
    features: ["Smart contracts", "Supply chain tracking", "Digital identity", "DeFi solutions"],
    tags: ["Blockchain", "Smart Contracts", "Enterprise", "Security"],
    icon: Link,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    name: "AI Healthcare Analytics Platform",
    category: "AI & Healthcare",
    description: "Comprehensive healthcare analytics platform powered by AI for improved patient outcomes.",
    price: "$12,000",
    rating: 4.9,
    reviews: 203,
    features: ["Patient analytics", "Predictive diagnostics", "Clinical insights", "HIPAA compliant"],
    tags: ["AI", "Healthcare", "Analytics", "Medical"],
    icon: Heart,
    color: "from-red-500 to-pink-500"
  },
  {
    id: 5,
    name: "Edge Computing Infrastructure",
    category: "Edge Computing",
    description: "High-performance edge computing solutions for low-latency applications and IoT devices.",
    price: "$6,500",
    rating: 4.6,
    reviews: 94,
    features: ["Low latency", "IoT support", "Scalable infrastructure", "Real-time processing"],
    tags: ["Edge Computing", "IoT", "Infrastructure", "Performance"],
    icon: Globe,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 6,
    name: "Cybersecurity Suite",
    category: "Cybersecurity",
    description: "Comprehensive cybersecurity solutions protecting your digital assets and infrastructure.",
    price: "$4,500",
    rating: 4.8,
    reviews: 178,
    features: ["Threat detection", "Vulnerability assessment", "Incident response", "Compliance"],
    tags: ["Security", "Cybersecurity", "Threat Detection", "Compliance"],
    icon: Shield,
    color: "from-green-500 to-blue-500"
  }
];

const categories = [
  { id: 'all', name: 'All Services', count: mockServices.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
  { id: 'AI & Automation', name: 'AI & Automation', count: mockServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖', color: 'from-purple-500 to-cyan-500' },
  { id: 'Quantum Computing', name: 'Quantum Computing', count: mockServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' },
  { id: 'Blockchain', name: 'Blockchain', count: mockServices.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-green-500 to-emerald-500' },
  { id: 'AI & Healthcare', name: 'AI & Healthcare', count: mockServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-red-500 to-pink-500' },
  { id: 'Edge Computing', name: 'Edge Computing', count: mockServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐', color: 'from-blue-500 to-cyan-500' },
  { id: 'Cybersecurity', name: 'Cybersecurity', count: mockServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-green-500 to-blue-500' }
];

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredServices = useMemo(() => {
    return mockServices.filter(service => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const sortedServices = useMemo(() => {
    return [...filteredServices].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'reviews':
          return b.reviews - a.reviews;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [filteredServices, sortBy]);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Discover cutting-edge AI, quantum computing, blockchain, and cybersecurity solutions 
              designed to transform your business and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.slice(0, 4).map((category) => (
                <div
                  key={category.id}
                  className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50"
                >
                  <span className="text-2xl mr-2">{category.icon}</span>
                  <span className="text-slate-300">{category.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, categories, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-4">
              <div className="flex bg-slate-800/50 backdrop-blur-sm rounded-lg p-1 border border-slate-700/50">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="reviews">Sort by Reviews</option>
                <option value="name">Sort by Name</option>
              </select>

              {/* Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-white hover:bg-slate-700/50 transition-all duration-200 flex items-center gap-2"
              >
                <FilterIcon className="w-5 h-5" />
                Filters
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-slate-700/50"
              >
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-full transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                          : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50'
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                      <span className="ml-2 text-xs bg-slate-700/50 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
            }
          >
            {sortedServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group ${
                  viewMode === 'list' ? 'flex gap-6' : ''
                }`}
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                  viewMode === 'list' ? 'flex-shrink-0' : ''
                }`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <div className={viewMode === 'list' ? 'flex-1' : ''}>
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-700/50 text-xs font-medium text-slate-300 mb-3">
                    {service.category}
                  </div>

                  {/* Service Name */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-md bg-slate-700/50 text-xs text-slate-300"
                        >
                          <CheckCircle className="w-3 h-3 mr-1 text-cyan-400" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 rounded-md bg-slate-700/30 text-xs text-slate-400 border border-slate-600/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-slate-300">{service.rating}</span>
                        <span className="text-xs text-slate-500">({service.reviews})</span>
                      </div>

                      {/* Price */}
                      <div className="text-lg font-bold text-cyan-400">
                        {service.price}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={`/services/${service.id}`}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-slate-800/50 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-300 mb-2">No services found</h3>
              <p className="text-slate-400 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Let our team of experts help you implement cutting-edge solutions that drive innovation, 
              efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/schedule-demo"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

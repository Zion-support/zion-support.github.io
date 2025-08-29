import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail as MailIcon,
  MapPin,
  Phone,
  Rocket,
  Search,
  Star,
  Brain
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_INDEX_2030, SERVICE_CATEGORIES_2030, SERVICE_STATISTICS_2030 } from '../data/comprehensiveServicesIndex2030';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // Featured AI Services Section
  const featuredAIServices = [
    {
      name: "AI Legal Document Analysis",
      description: "99.2% accuracy in legal document analysis with 90% time savings",
      href: "/services/ai-legal-document-analysis",
      icon: "⚖️",
      color: "from-blue-500 to-indigo-500",
      price: "$299/month",
      rating: 4.9
    },
    {
      name: "AI Supply Chain Optimization",
      description: "95% forecast accuracy with 30% cost reduction and real-time visibility",
      href: "/services/ai-supply-chain-optimization",
      icon: "🚚",
      color: "from-green-500 to-emerald-500",
      price: "$399/month",
      rating: 4.8
    },
    {
      name: "AI Healthcare Analytics",
      description: "96% accuracy in disease prediction with 40% cost reduction",
      href: "/services/ai-healthcare-analytics",
      icon: "🏥",
      color: "from-red-500 to-pink-500",
      price: "$599/month",
      rating: 4.9
    },
    {
      name: "AI Financial Trading",
      description: "94% accuracy in market prediction with 35% ROI increase",
      href: "/services/ai-financial-trading",
      icon: "📈",
      color: "from-emerald-500 to-green-500",
      price: "$499/month",
      rating: 4.8
    }
  ];

  // Get unique categories from services with dynamic generation
  const generateCategories = () => {
    const categoryIcons: { [key: string]: string } = {
      'AI & Business Intelligence': '🤖',
      'AI & Marketing': '📈',
      'AI & Healthcare': '🏥',
      'AI & Legal Tech': '⚖️',
      'AI & Real Estate': '🏠',
      'AI & Operations': '⚙️',
      'AI & Green Tech': '🌿',
      'AI & Autonomous Systems': '🚗',
      'AI & FinTech': '💰',
      'AI & Environmental Tech': '🌍',
      'AI & Content': '✍️',
      'AI & Customer Support': '💬',
      'AI & HR': '👥',
      'AI & Research': '🔬',
      'AI & Metaverse': '🌍',
      'AI & Space Tech': '🛸',
      'AI & Development': '💻',
      'AI & Education': '🎓',
      'AI & Entertainment': '🎮',
      'Cybersecurity': '🛡️',
      'Cloud & DevOps': '☁️',
      'Quantum Computing': '⚛️',
      'IoT & Edge Computing': '🌐',
      'Blockchain & Web3': '🔗',
      'Digital Twin': '🔄',
      'Space Technology': '🚀',
      'Sustainable Technology': '🌱',
      'IT Infrastructure': '🏗️',
      'Emerging Technology': '🚀'
    };

    const categoryColors: { [key: string]: string } = {
      'AI & Business Intelligence': 'from-purple-500 to-pink-500',
      'AI & Marketing': 'from-green-500 to-emerald-500',
      'AI & Healthcare': 'from-pink-500 to-red-500',
      'AI & Legal Tech': 'from-blue-500 to-indigo-500',
      'AI & Real Estate': 'from-yellow-500 to-orange-500',
      'AI & Operations': 'from-gray-500 to-slate-500',
      'AI & Green Tech': 'from-green-500 to-emerald-500',
      'AI & Autonomous Systems': 'from-cyan-500 to-blue-500',
      'AI & FinTech': 'from-emerald-500 to-green-500',
      'AI & Environmental Tech': 'from-teal-500 to-green-500',
      'AI & Content': 'from-orange-500 to-red-500',
      'AI & Customer Support': 'from-blue-500 to-purple-500',
      'AI & HR': 'from-indigo-500 to-blue-500',
      'AI & Research': 'from-purple-500 to-violet-500',
      'AI & Metaverse': 'from-purple-500 to-indigo-500',
      'AI & Space Tech': 'from-indigo-500 to-purple-500',
      'AI & Development': 'from-cyan-500 to-blue-500',
      'AI & Education': 'from-blue-500 to-indigo-500',
      'AI & Entertainment': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud & DevOps': 'from-blue-500 to-cyan-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'IoT & Edge Computing': 'from-teal-500 to-cyan-500',
      'Blockchain & Web3': 'from-yellow-500 to-orange-500',
      'Digital Twin': 'from-blue-500 to-indigo-500',
      'Space Technology': 'from-purple-500 to-pink-500',
      'Sustainable Technology': 'from-green-500 to-teal-500',
      'IT Infrastructure': 'from-slate-500 to-gray-500',
      'Emerging Technology': 'from-violet-500 to-purple-500'
    };

    return [
      { id: 'all', name: 'All Services', count: COMPREHENSIVE_SERVICES_INDEX_2030.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
      ...SERVICE_CATEGORIES_2030.map(category => ({
        id: category,
        name: category,
        count: COMPREHENSIVE_SERVICES_INDEX_2030.filter(s => s.category === category).length,
        icon: categoryIcons[category] || '🔧',
        color: categoryColors[category] || 'from-gray-500 to-slate-500'
      }))
    ];
  };

  const categories = generateCategories();

  const filteredServices = COMPREHENSIVE_SERVICES_INDEX_2030.filter(service => {
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

  // Pagination logic
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = sortedServices.slice(startIndex, endIndex);

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
    visible: { y: 0, opacity: 1 }
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName);
    return category ? category.icon : '🚀';
  };

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName);
    return category ? category.color : 'from-cyan-500 to-blue-500';
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <>
      <SEO 
        title="AI & Technology Services | Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered micro SAAS services, cutting-edge technology solutions, and innovative platforms that transform businesses across industries."
        keywords="AI services, micro SAAS, technology solutions, business intelligence, cybersecurity, cloud computing, blockchain, IoT, quantum computing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Technology Solutions
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Revolutionary AI Services
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions. From legal document analysis 
                to financial trading, our AI platform delivers unprecedented accuracy and results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured AI Services Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Featured AI-Powered Services
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our most advanced AI services delivering industry-leading accuracy and results
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredAIServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <Link to={service.href} className="block">
                    <div className={`bg-gradient-to-br ${service.color} rounded-xl p-6 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-white/90 text-sm mb-4">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">{service.price}</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-300 fill-current" />
                          <span className="text-white text-sm ml-1">{service.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8"
        >
          <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-600">
            <div className="text-2xl font-bold text-cyan-400 mb-2">{SERVICE_STATISTICS_2030.totalServices}</div>
            <div className="text-sm text-slate-300">Total Services</div>
          </div>
          <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-600">
            <div className="text-2xl font-bold text-purple-400 mb-2">{SERVICE_STATISTICS_2030.totalCategories}</div>
            <div className="text-sm text-slate-300">Categories</div>
          </div>
          <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-600">
            <div className="text-2xl font-bold text-green-400 mb-2">{SERVICE_STATISTICS_2030.aiServices}</div>
            <div className="text-sm text-slate-300">AI Services</div>
          </div>
          <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-600">
            <div className="text-2xl font-bold text-yellow-400 mb-2">{SERVICE_STATISTICS_2030.emergingTechServices}</div>
            <div className="text-sm text-slate-300">Emerging Tech</div>
          </div>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-80"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
              }`}
            >
              All Services ({COMPREHENSIVE_SERVICES_INDEX_2030.length})
            </button>
            {categories.slice(1).map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
                }`}
              >
                {category.icon} {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-2">
                  Search Services
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="search"
                    type="text"
                    placeholder="Search by name, description, category, or tags..."
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={activeCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <label htmlFor="sort" className="block text-sm font-medium text-gray-300 mb-2">
                  Sort By
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="price">Lowest Price</option>
                  <option value="reviews">Most Reviews</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden group"
              >
                {/* Service Image */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
                  {service.images && service.images.length > 0 ? (
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center text-2xl`}>
                        {getCategoryIcon(service.category)}
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center text-white text-sm font-bold`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <span className="text-sm text-gray-400">{service.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {service.tags.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-full border border-white/20">
                        +{service.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-lg font-bold text-cyan-400">{service.aiScore}%</div>
                      <div className="text-xs text-gray-400">AI Score</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-lg font-bold text-emerald-400">{service.setupTime}</div>
                      <div className="text-xs text-gray-400">Setup Time</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link
                      to="/request-quote"
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                        page === currentPage
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* No Results */}
          {currentServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-8">
                Try adjusting your search criteria or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                  setCurrentPage(1);
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss your specific needs and discover
              how our AI-powered solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import React, { useState, useEffect } from 'react';
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
  Filter,
  Grid,
  List,
  Eye,
  BookOpen,
  Building,
  Car,
  Factory,
  City,
  Home,
  Building2,
  Truck,
  Scale,
  Key,
  Settings,
  GitFork,
  Atom,
  Gauge,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  GitCompare,
  GitBranchPlus,
  GitCommitPlus,
  GitMergePlus,
  GitPullRequestPlus,
  GitComparePlus,
  GitBranchMinus,
  GitCommitMinus,
  GitMergeMinus,
  GitPullRequestMinus,
  GitCompareMinus
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from '../data/innovativeMicroSAASServices2027';

export default function InnovativeServicesShowcase2027() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get unique categories from services
  const categories = [
    { id: 'all', name: 'All Services', count: INNOVATIVE_MICRO_SAAS_SERVICES_2027.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' },
    { id: 'FinTech', name: 'FinTech', count: INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Content', name: 'AI & Content', count: INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' },
    { id: 'AI & HR', name: 'AI & HR', count: INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Sales', name: 'AI & Sales', count: INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(s => s.category === 'AI & Sales').length, icon: '🎯', color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Research', name: 'AI & Research', count: INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' }
  ];

  // Get all unique tags
  const allTags = Array.from(new Set(INNOVATIVE_MICRO_SAAS_SERVICES_2027.flatMap(service => service.tags)));

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => service.tags.includes(tag));
    
    return matchesCategory && matchesSearch && matchesPrice && matchesTags;
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
      case 'aiScore':
        return b.aiScore - a.aiScore;
      default:
        return 0;
    }
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
    setSortBy('rating');
    setPriceRange([0, 5000]);
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Micro SAAS Services 2027 | Zion Tech Group"
        description="Discover cutting-edge AI-powered micro SAAS services for 2027. From predictive analytics to quantum computing, transform your business with our innovative solutions."
        keywords="AI services, micro SAAS, business intelligence, cybersecurity, quantum computing, healthcare AI, legal tech, fintech, 2027"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative Micro SAAS
              </span>
              <br />
              <span className="text-white">Services 2027</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI-powered solutions. From predictive analytics to quantum computing, 
              discover the future of business technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">25+ Services</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">Global Reach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            {/* Search and View Controls */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, categories, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white/10 text-gray-400 hover:bg-white/20'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white/10 text-gray-400 hover:bg-white/20'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="name">Sort by Name</option>
                  <option value="aiScore">Sort by AI Score</option>
                </select>
              </div>
            </div>

            {/* Category Filters */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Price Range</h3>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
                <span className="text-white font-medium">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
            </div>

            {/* Tag Filters */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.slice(0, 20).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedTags.includes(tag)
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <div className="flex justify-between items-center">
              <span className="text-gray-400">
                Showing {filteredServices.length} of {INNOVATIVE_MICRO_SAAS_SERVICES_2027.length} services
              </span>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    {/* Service Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">{service.category}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{service.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm line-clamp-3">{service.description}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing and Actions */}
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-2xl font-bold text-white">${service.price}</span>
                          <span className="text-gray-400 text-sm">/month</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">Market Price</div>
                          <div className="text-sm text-white">{service.marketPrice}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Brain className="w-4 h-4 text-purple-400" />
                          <span className="text-sm text-gray-400">AI Score: {service.aiScore}</span>
                        </div>
                        <Link
                          to={`/services/${service.id.replace('-platform', '')}`}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm font-medium"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Service Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-400 mb-3">{service.category}</p>
                            <p className="text-gray-300 mb-4">{service.description}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="text-white font-medium">{service.rating}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-white/10 text-sm text-gray-300 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="flex items-center text-sm text-gray-400">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-2">Integrations</h4>
                            <ul className="space-y-1">
                              {service.integrations.slice(0, 4).map((integration, idx) => (
                                <li key={idx} className="flex items-center text-sm text-gray-400">
                                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                                  {integration}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Pricing and Actions */}
                      <div className="lg:w-80 flex flex-col justify-between">
                        <div className="bg-white/10 rounded-xl p-4 mb-4">
                          <div className="text-center mb-4">
                            <span className="text-3xl font-bold text-white">${service.price}</span>
                            <span className="text-gray-400 text-lg">/month</span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Market Price:</span>
                              <span className="text-white">{service.marketPrice}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">ROI:</span>
                              <span className="text-green-400">{service.roi}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Setup Time:</span>
                              <span className="text-white">{service.setupTime}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">AI Score:</span>
                              <span className="text-purple-400">{service.aiScore}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Link
                            to={`/services/${service.id.replace('-platform', '')}`}
                            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-center font-medium"
                          >
                            Learn More
                          </Link>
                          <Link
                            to="/contact"
                            className="w-full px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-200 text-center font-medium border border-white/20"
                          >
                            Get Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
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
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions to drive growth, 
              increase efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-lg font-medium"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-200 text-lg font-medium border border-white/20"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

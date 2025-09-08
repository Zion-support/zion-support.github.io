import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search,
  Filter,
  X,
  Clock,
  TrendingUp,
  Star,
  Eye,
  ArrowRight,
  FileText,
  Users,
  Shield,
  Zap,
  Globe,
  Brain,
  Cloud,
  Lock,
  Building,
  Calendar,
  Tag,
  BookOpen,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeFilters, setActiveFilters] = React.useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('relevance');
  const [isSearching, setIsSearching] = React.useState(false);

  const searchCategories = [
    { id: 'all', name: 'All Results', count: 156 },
    { id: 'services', name: 'Services', count: 42 },
    { id: 'solutions', name: 'Solutions', count: 28 },
    { id: 'blog', name: 'Blog Posts', count: 35 },
    { id: 'case-studies', name: 'Case Studies', count: 18 },
    { id: 'documentation', name: 'Documentation', count: 33 }
  ];

  const filterOptions = [
    { id: 'ai', label: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', label: 'Cloud Computing', icon: Cloud },
    { id: 'security', label: 'Cybersecurity', icon: Shield },
    { id: 'transformation', label: 'Digital Transformation', icon: Zap },
    { id: 'consulting', label: 'Consulting', icon: Users },
    { id: 'iot', label: 'IoT & Edge', icon: Globe }
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'date', label: 'Newest First' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  // Mock search results - in a real app, this would come from an API
  const searchResults = [
    {
      id: 1,
      type: 'service',
      title: 'AI Business Intelligence Solutions',
      excerpt: 'Transform your business data into actionable insights with our advanced AI-powered business intelligence platform. Get real-time analytics, predictive modeling, and automated reporting.',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Business Intelligence', 'Analytics', 'Machine Learning'],
      url: '/services/ai-business-intelligence',
      rating: 4.8,
      views: 1247,
      date: '2024-01-15',
      icon: Brain
    },
    {
      id: 2,
      type: 'blog',
      title: 'The Future of Cloud Computing in 2024',
      excerpt: 'Discover the latest trends in cloud computing, from edge computing to serverless architectures. Learn how businesses are leveraging cloud technology for competitive advantage.',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Technology Trends', 'Digital Transformation'],
      url: '/blog/cloud-computing-2024',
      rating: 4.6,
      views: 892,
      date: '2024-01-10',
      icon: Cloud
    },
    {
      id: 3,
      type: 'case-study',
      title: 'Healthcare Provider Digital Transformation Success',
      excerpt: 'How a major healthcare provider achieved 40% operational efficiency improvement through our digital transformation services, including AI-powered patient care systems.',
      category: 'Digital Transformation',
      tags: ['Healthcare', 'Digital Transformation', 'AI', 'Case Study'],
      url: '/case-studies/healthcare-transformation',
      rating: 4.9,
      views: 1567,
      date: '2024-01-08',
      icon: Zap
    },
    {
      id: 4,
      type: 'service',
      title: 'Zero Trust Network Architecture',
      excerpt: 'Implement comprehensive cybersecurity with our Zero Trust Network Architecture services. Protect your organization from modern cyber threats with advanced security protocols.',
      category: 'Cybersecurity',
      tags: ['Security', 'Zero Trust', 'Network Security', 'Cybersecurity'],
      url: '/services/zero-trust-network',
      rating: 4.7,
      views: 1034,
      date: '2024-01-12',
      icon: Shield
    },
    {
      id: 5,
      type: 'documentation',
      title: 'API Integration Guide',
      excerpt: 'Complete guide to integrating with Zion Tech Group APIs. Includes authentication, endpoints, rate limiting, and best practices for developers.',
      category: 'Documentation',
      tags: ['API', 'Integration', 'Developer Guide', 'Technical'],
      url: '/docs/api-integration',
      rating: 4.5,
      views: 756,
      date: '2024-01-05',
      icon: FileText
    },
    {
      id: 6,
      type: 'blog',
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential cybersecurity practices that small businesses should implement to protect against cyber threats. Practical tips and actionable strategies.',
      category: 'Cybersecurity',
      tags: ['Security', 'Small Business', 'Best Practices', 'Cybersecurity'],
      url: '/blog/cybersecurity-small-business',
      rating: 4.4,
      views: 623,
      date: '2024-01-03',
      icon: Shield
    }
  ];

  const recentSearches = [
    'AI chatbot implementation',
    'cloud migration strategy',
    'cybersecurity audit',
    'digital transformation roadmap',
    'machine learning models'
  ];

  const popularSearches = [
    'AI solutions',
    'cloud computing',
    'cybersecurity services',
    'digital transformation',
    'IoT solutions',
    'blockchain technology'
  ];

  const handleSearch = (query: string) => {
    if (query.trim()) {
      setSearchQuery(query);
      setIsSearching(true);
      // In a real app, this would trigger an API call
      setTimeout(() => setIsSearching(false), 1000);
    }
  };

  const addFilter = (filterId: string) => {
    if (!activeFilters.includes(filterId)) {
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  const removeFilter = (filterId: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filterId));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setSelectedCategory('all');
    setSortBy('relevance');
  };

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'service':
        return Zap;
      case 'blog':
        return BookOpen;
      case 'case-study':
        return Building;
      case 'documentation':
        return FileText;
      default:
        return FileText;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Search - Zion Tech Group"
        description="Search through Zion Tech Group's comprehensive collection of services, solutions, blog posts, case studies, and documentation."
      />
      
      {/* Search Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Search
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Everything
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Find services, solutions, documentation, and insights across our entire platform
            </p>
            
            {/* Main Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for services, solutions, articles, or anything else..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                  className="w-full pl-14 pr-4 py-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-lg"
                />
                <button
                  onClick={() => handleSearch(searchQuery)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Search Filters and Results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Categories */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {searchCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'text-slate-300 hover:bg-slate-700/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.name}</span>
                        <span className="text-sm text-slate-400">{category.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Filters */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Filters</h3>
                <div className="space-y-3">
                  {filterOptions.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => addFilter(filter.id)}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-700/50 transition-colors"
                    >
                      <filter.icon className="w-4 h-4" />
                      <span className="text-sm">{filter.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Recent Searches */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Searches</h3>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-700/50 transition-colors flex items-center gap-2"
                    >
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-sm truncate">{search}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Searches */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-slate-600 transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Results */}
          <div className="lg:col-span-3">
            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-slate-300">Active Filters:</h3>
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Clear All
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeFilters.map((filterId) => {
                    const filter = filterOptions.find(f => f.id === filterId);
                    return filter ? (
                      <span
                        key={filterId}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                      >
                        <filter.icon className="w-3 h-3" />
                        {filter.label}
                        <button
                          onClick={() => removeFilter(filterId)}
                          className="ml-1 hover:text-cyan-300 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ) : null;
                  })}
                </div>
              </motion.div>
            )}

            {/* Search Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {isSearching ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-slate-400">Searching...</p>
                </div>
              ) : searchQuery ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">
                      Search Results for "{searchQuery}"
                    </h2>
                    <p className="text-slate-400">{searchResults.length} results found</p>
                  </div>

                  {searchResults.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <result.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                                  {result.type.replace('-', ' ').toUpperCase()}
                                </span>
                                <span className="text-slate-400 text-sm">{result.category}</span>
                              </div>
                              <h3 className="text-xl font-semibold text-white mb-2">
                                <Link
                                  to={result.url}
                                  className="hover:text-cyan-400 transition-colors"
                                >
                                  {result.title}
                                </Link>
                              </h3>
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                {result.rating}
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                {result.views}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-slate-300 mb-3 leading-relaxed">{result.excerpt}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {result.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center gap-4 text-sm text-slate-400">
                              <span>{formatDate(result.date)}</span>
                              <Link
                                to={result.url}
                                className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                              >
                                Read More
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </>
              ) : (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Start Your Search</h3>
                  <p className="text-slate-400 mb-6">
                    Enter a search term above to find services, solutions, and resources
                  </p>
                  
                  {/* Quick Search Suggestions */}
                  <div className="max-w-2xl mx-auto">
                    <h4 className="text-lg font-medium text-white mb-4">Popular Topics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {popularSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearch(search)}
                          className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 text-sm"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-6">Need Help Finding Something?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our team is here to help you find exactly what you're looking for
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-slate-400 text-sm mb-4">Get instant help from our support team</p>
              <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm">
                Start Chat
              </button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-400 text-sm mb-4">Speak directly with our experts</p>
              <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm">
                Call Now
              </button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-slate-400 text-sm mb-4">Send us a detailed message</p>
              <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm">
                Send Email
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
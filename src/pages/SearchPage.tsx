import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  X, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  BookOpen,
  FileText,
  Users,
  Zap,
  Brain,
  Cloud,
  Shield,
  Globe,
  Rocket,
  TrendingUp,
  Star,
  Calendar,
  Eye,
  Heart,
  Share2,
  Bookmark
} from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  type: 'service' | 'blog' | 'page' | 'documentation';
  category: string;
  tags: string[];
  author?: string;
  date?: string;
  readTime?: string;
  views?: number;
  rating?: number;
  url: string;
  icon: React.ReactNode;
  color: string;
}

interface SearchFilter {
  type: string[];
  category: string[];
  tags: string[];
  dateRange: string;
}

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilter>({
    type: [],
    category: [],
    tags: [],
    dateRange: 'all'
  });

  // Mock search results - in a real app, this would come from an API
  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI Business Intelligence Solutions',
      excerpt: 'Transform your business with cutting-edge AI-powered business intelligence solutions that provide real-time insights and predictive analytics.',
      content: 'Our AI Business Intelligence solutions leverage machine learning algorithms to analyze vast amounts of data and provide actionable insights...',
      type: 'service',
      category: 'AI & Analytics',
      tags: ['AI', 'Business Intelligence', 'Machine Learning', 'Analytics'],
      author: 'Zion Tech Team',
      date: '2024-12-15',
      readTime: '5 min read',
      views: 1247,
      rating: 4.8,
      url: '/services/ai-business-intelligence',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '2',
      title: 'Cloud DevOps Best Practices',
      excerpt: 'Learn the essential practices for implementing effective DevOps in cloud environments to accelerate development and deployment.',
      content: 'Cloud DevOps combines the power of cloud computing with DevOps practices to create a more efficient and scalable development process...',
      type: 'blog',
      category: 'Cloud & DevOps',
      tags: ['Cloud', 'DevOps', 'CI/CD', 'Automation'],
      author: 'Sarah Chen',
      date: '2024-12-10',
      readTime: '8 min read',
      views: 892,
      rating: 4.6,
      url: '/blog/cloud-devops-best-practices',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: '3',
      title: 'Cybersecurity Framework Implementation',
      excerpt: 'Comprehensive guide to implementing enterprise-grade cybersecurity frameworks to protect your organization from evolving threats.',
      content: 'Implementing a robust cybersecurity framework is essential for protecting sensitive data and maintaining business continuity...',
      type: 'documentation',
      category: 'Security',
      tags: ['Cybersecurity', 'Framework', 'Compliance', 'Risk Management'],
      author: 'Michael Rodriguez',
      date: '2024-12-08',
      readTime: '12 min read',
      views: 1563,
      rating: 4.9,
      url: '/docs/cybersecurity-framework',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: '4',
      title: 'Digital Transformation Strategy',
      excerpt: 'Strategic approach to digital transformation that aligns technology initiatives with business objectives for maximum impact.',
      content: 'Digital transformation is not just about technology—it\'s about fundamentally changing how your business operates and delivers value...',
      type: 'service',
      category: 'Digital Innovation',
      tags: ['Digital Transformation', 'Strategy', 'Innovation', 'Change Management'],
      author: 'Zion Tech Team',
      date: '2024-12-05',
      readTime: '10 min read',
      views: 2034,
      rating: 4.7,
      url: '/services/digital-transformation',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: '5',
      title: 'IoT Edge Computing Solutions',
      excerpt: 'Next-generation IoT edge computing solutions that bring processing power closer to data sources for real-time decision making.',
      content: 'Edge computing in IoT environments enables faster response times and reduced bandwidth usage by processing data locally...',
      type: 'service',
      category: 'IoT & Edge',
      tags: ['IoT', 'Edge Computing', 'Real-time', 'Processing'],
      author: 'Zion Tech Team',
      date: '2024-12-03',
      readTime: '7 min read',
      views: 1156,
      rating: 4.5,
      url: '/services/iot-edge',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: '6',
      title: 'Micro SaaS Development Guide',
      excerpt: 'Complete guide to building and launching successful micro SaaS applications with modern development practices.',
      content: 'Micro SaaS applications offer entrepreneurs the opportunity to build focused, profitable software businesses...',
      type: 'documentation',
      category: 'Micro SaaS',
      tags: ['SaaS', 'Development', 'Startup', 'Software'],
      author: 'Emily Watson',
      date: '2024-11-30',
      readTime: '15 min read',
      views: 987,
      rating: 4.4,
      url: '/docs/micro-saas-guide',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const categories = ['AI & Analytics', 'Cloud & DevOps', 'Security', 'Digital Innovation', 'IoT & Edge', 'Micro SaaS'];
  const types = ['service', 'blog', 'page', 'documentation'];
  const allTags = ['AI', 'Machine Learning', 'Cloud', 'DevOps', 'Cybersecurity', 'Digital Transformation', 'IoT', 'SaaS', 'Analytics', 'Automation'];

  useEffect(() => {
    if (query) {
      performSearch(query);
    } else {
      setResults([]);
      setFilteredResults([]);
    }
  }, [query]);

  useEffect(() => {
    applyFilters();
  }, [filters, results]);

  const performSearch = async (searchQuery: string) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Filter mock results based on search query
    const searchResults = mockResults.filter(result => 
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      result.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(searchResults);
    setIsLoading(false);
  };

  const applyFilters = () => {
    let filtered = [...results];

    if (filters.type.length > 0) {
      filtered = filtered.filter(result => filters.type.includes(result.type));
    }

    if (filters.category.length > 0) {
      filtered = filtered.filter(result => filters.category.includes(result.category));
    }

    if (filters.tags.length > 0) {
      filtered = filtered.filter(result => 
        result.tags.some(tag => filters.tags.includes(tag))
      );
    }

    if (filters.dateRange !== 'all') {
      const now = new Date();
      const cutoffDate = new Date();
      
      switch (filters.dateRange) {
        case 'week':
          cutoffDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          cutoffDate.setMonth(now.getMonth() - 1);
          break;
        case 'year':
          cutoffDate.setFullYear(now.getFullYear() - 1);
          break;
      }
      
      filtered = filtered.filter(result => 
        result.date && new Date(result.date) >= cutoffDate
      );
    }

    setFilteredResults(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  const toggleFilter = (filterType: keyof SearchFilter, value: string) => {
    setFilters(prev => {
      const currentValues = prev[filterType] as string[];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [filterType]: currentValues.filter(v => v !== value)
        };
      } else {
        return {
          ...prev,
          [filterType]: [...currentValues, value]
        };
      }
    });
  };

  const clearFilters = () => {
    setFilters({
      type: [],
      category: [],
      tags: [],
      dateRange: 'all'
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return <Zap className="w-4 h-4" />;
      case 'blog':
        return <BookOpen className="w-4 h-4" />;
      case 'documentation':
        return <FileText className="w-4 h-4" />;
      case 'page':
        return <Users className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
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
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Search Zion Tech Group
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Find services, documentation, blog posts, and resources to help transform your business with cutting-edge technology.
            </p>
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for services, articles, documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-slate-600/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-md text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Search Results */}
      {query && (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col lg:flex-row gap-6 mb-8"
            >
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Search Results for "{query}"
                </h2>
                <p className="text-slate-400">
                  {isLoading ? 'Searching...' : `${filteredResults.length} results found`}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                    showFilters
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-slate-600/30 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
                
                {(filters.type.length > 0 || filters.category.length > 0 || filters.tags.length > 0 || filters.dateRange !== 'all') && (
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 rounded-lg border border-slate-600/30 bg-white/5 text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Clear
                  </button>
                )}
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, x: -20, width: 0 }}
                    animate={{ opacity: 1, x: 0, width: 'auto' }}
                    exit={{ opacity: 0, x: -20, width: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:w-80 space-y-6"
                  >
                    <div className="bg-white/5 border border-slate-600/30 rounded-xl p-6 backdrop-blur-md">
                      <h3 className="text-lg font-semibold text-white mb-4">Content Type</h3>
                      <div className="space-y-3">
                        {types.map((type) => (
                          <label key={type} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={filters.type.includes(type)}
                              onChange={() => toggleFilter('type', type)}
                              className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                            />
                            <span className="text-slate-300 capitalize">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/5 border border-slate-600/30 rounded-xl p-6 backdrop-blur-md">
                      <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                      <div className="space-y-3">
                        {categories.map((category) => (
                          <label key={category} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={filters.category.includes(category)}
                              onChange={() => toggleFilter('category', category)}
                              className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                            />
                            <span className="text-slate-300">{category}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/5 border border-slate-600/30 rounded-xl p-6 backdrop-blur-md">
                      <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                      <div className="space-y-3 max-h-48 overflow-y-auto">
                        {allTags.map((tag) => (
                          <label key={tag} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={filters.tags.includes(tag)}
                              onChange={() => toggleFilter('tags', tag)}
                              className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                            />
                            <span className="text-slate-300">{tag}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/5 border border-slate-600/30 rounded-xl p-6 backdrop-blur-md">
                      <h3 className="text-lg font-semibold text-white mb-4">Date Range</h3>
                      <div className="space-y-3">
                        {[
                          { value: 'all', label: 'All Time' },
                          { value: 'week', label: 'Past Week' },
                          { value: 'month', label: 'Past Month' },
                          { value: 'year', label: 'Past Year' }
                        ].map((option) => (
                          <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name="dateRange"
                              value={option.value}
                              checked={filters.dateRange === option.value}
                              onChange={(e) => setFilters(prev => ({ ...prev, dateRange: e.target.value }))}
                              className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 focus:ring-cyan-500 focus:ring-2"
                            />
                            <span className="text-slate-300">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Results List */}
              <div className="flex-1">
                {isLoading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
                    <p className="text-slate-400">Searching...</p>
                  </div>
                ) : filteredResults.length > 0 ? (
                  <div className="space-y-6">
                    {filteredResults.map((result, index) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white/5 border border-slate-600/30 rounded-xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${result.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            {result.icon}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full capitalize">
                                {result.type}
                              </span>
                              <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                                {result.category}
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-semibold text-white mb-2 hover:text-cyan-400 transition-colors duration-200">
                              <a href={result.url} className="hover:underline">
                                {result.title}
                              </a>
                            </h3>
                            
                            <p className="text-slate-300 mb-4 leading-relaxed">
                              {result.excerpt}
                            </p>
                            
                            <div className="flex items-center gap-6 text-sm text-slate-400 mb-4">
                              {result.author && (
                                <div className="flex items-center gap-2">
                                  <User className="w-4 h-4" />
                                  {result.author}
                                </div>
                              )}
                              {result.date && (
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  {formatDate(result.date)}
                                </div>
                              )}
                              {result.readTime && (
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4" />
                                  {result.readTime}
                                </div>
                              )}
                              {result.views && (
                                <div className="flex items-center gap-2">
                                  <Eye className="w-4 h-4" />
                                  {result.views.toLocaleString()} views
                                </div>
                              )}
                              {result.rating && (
                                <div className="flex items-center gap-2">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  {result.rating}
                                </div>
                              )}
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {result.tags.slice(0, 4).map((tag) => (
                                  <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <button className="p-2 text-slate-400 hover:text-white transition-colors duration-200">
                                  <Heart className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-white transition-colors duration-200">
                                  <Bookmark className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-white transition-colors duration-200">
                                  <Share2 className="w-4 h-4" />
                                </button>
                                <a
                                  href={result.url}
                                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                                >
                                  View
                                  <ArrowRight className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Search className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      No results found
                    </h3>
                    <p className="text-slate-400 mb-6">
                      Try adjusting your search terms or filters to find what you're looking for.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No Search Query State */}
      {!query && (
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
              <h2 className="text-3xl font-bold text-white mb-4">
                What are you looking for?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Search for our services, read our latest insights, or explore our comprehensive documentation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Services</h3>
                  <p className="text-slate-400 text-sm">
                    AI, Cloud, Security, and more
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
                  <p className="text-slate-400 text-sm">
                    Blog posts, case studies, guides
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
                  <p className="text-slate-400 text-sm">
                    Technical guides and tutorials
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
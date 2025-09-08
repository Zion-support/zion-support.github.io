import React, { useState, useEffect } from 'react';
import { useSearchParams, Link   } from 'react-router-dom';
import { motion, AnimatePresence   } from 'framer-motion';
import { Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Code,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Zap,
  Heart,
  Building,
  Cpu,
  Lock,
  Globe,
  TrendingUp,
  Award,
  CheckCircle,
  X,
  SlidersHorizontal
  } from 'lucide-react';

interface SearchResult {


  id: string;
  type: 'service' | 'talent' | 'equipment' | 'comp';
  title: string;
  description: string;
  url: string;
  type: 'service' | 'page' | 'blog' | 'documentation' | 'case-study';
  category: string;
  tags: string[];
  relevance: number;
  lastUpdated: string;
  icon: unknown;
  featured?: boolean;


}

const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    type: 'service',
    title: 'AI Business Intelligence Platform',
    description: 'Transform your data into actionable insights with our AI-powered analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.',
    category: 'AI & Analytics',
    rating: 4.9,
    reviewCount: 127,
    price: '$2,500/mo',
    location: 'Remote',
    tags['AI', 'Analytics', 'Machine Learning', 'Business Intelligence'],
    path: '/services/ai-analytics',
    featured: true
  },
  {
    id: '2',
    type: 'service',
    title: 'Cybersecurity Suite',
    description: 'Comprehensive security solution including threat detection, 24/7 monitoring, compliance management, and incident response.',
    category: 'Cybersecurity',
    rating: 4.8,
    reviewCount: 89,
    price: '$3,200/mo',
    location: 'Remote',
    tags['Security', 'Threat Detection', 'Compliance', 'Monitoring'],
    path: '/services/cybersecurity',
    featured: true
  },
  {
    id: '3',
    type: 'talent',
    title: 'Senior AI Engineer',
    description: 'Experienced AI engineer specializing in machine learning, deep learning, and natural language processing. Available for remote work.',
    category: 'AI & Machine Learning',
    rating: 4.9,
    reviewCount: 45,
    price: '$150/hr',
    location: 'San Francisco, CA',
    tags['AI', 'Machine Learning', 'Python', 'TensorFlow', 'Remote'],
    path: '/talent/ai-engineer'
  },
  {
    id: '4',
    type: 'equipment',
    title: 'Quantum Computing Workstation',
    description: 'High-performance quantum computing workstation for research and development. Includes latest quantum processors and development tools.',
    category: 'Hardware',
    price: '$25,000',
    location: 'New York, NY',
    tags['Quantum Computing', 'Hardware', 'Research', 'Development'],
    path: '/equipment/quantum-workstation'
  },
  {
    id: '5',
    type: 'service',
    title: 'Cloud Infrastructure Management',
    description: 'Scalable cloud solutions designed for enterprise performance and security. Optimize costs while maintaining high availability.',
    category: 'Cloud & DevOps',
    rating: 4.7,
    reviewCount: 156,
    price: '$1,800/mo',
    location: 'Remote',
    tags['Cloud', 'DevOps', 'Infrastructure', 'Scalability'],
    path: '/services/cloud-devops'
  },
  {
    id: '6',
    type: 'talent',
    title: 'DevOps Specialist',
    description: 'DevOps engineer with expertise in AWS, Docker, Kubernetes, and CI/CD pipelines. Available for contract work.',
    category: 'DevOps',
    rating: 4.8,
    reviewCount: 32,
    price: '$120/hr',
    location: 'Austin, TX',
    tags['DevOps', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    path: '/talent/devops-specialist'
  {/* Removed stray closing brace */}
];

const categories = [
  { id: 'all', name: 'All Categories', icon: Grid, count: 0 },
  { id: 'services', name: 'Services', icon: Code, count: 0 },
  { id: 'talent', name: 'Talent', icon: Users, count: 0 },
  { id: 'equipment', name: 'Equipment', icon: Cpu, count: 0 },
  { id: 'companies', name: 'Companies', icon: Building, count: 0 }
];

const filters = {
  type['service', 'talent', 'equipment', 'comp'],
  category['AI & Analytics', 'Cybersecurity', 'Cloud & DevOps', 'IoT & Edge', 'Quantum Computing', 'Blockchain'],
  location['Remote', 'On-site', 'Hybrid'],
  priceRange['$0-$100', '$100-$500', '$500-$1000', '$1000+'],
  rating['4.5+', '4.0+', '3.5+']
};

export default function SearchPage(...args: any[]): any {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<any>([]);
  const [filteredResults, setFilteredResults] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState<any>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    type: any[] as string[],
    category: [] as string[],
    location: [] as string[],
    priceRange: [] as string[],
    rating: [] as string[]
  });

  useEffect(()   => {
    if (query) {
      performSearch(query);
    }
  }, [searchQuery, selectedFilters, sortBy]);

  useEffect(() => {
    applyFilters();
  }, [activeFilters, results]);

  const performSearch = async (searchQuery: string)   => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const filtered = mockSearchResults.filter(result => {
      const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesFilters = selectedFilters.size === 0 || 
                           selectedFilters.has(result.category.toLowerCase().replace(/\s+/g, '-')) ||
                           selectedFilters.has(result.type);
      
      return matchesQuery && matchesFilters;
    });

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        case 'popularity':
          return b.relevance - a.relevance;
        default:
          return b.relevance - a.relevance;
      }
    });

    setSearchResults(filtered);
    setIsSearching(false);
  };

  const toggleFilter = (filterType: anykeyof typeof activeFilters, value: string)   => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearAllFilters = () => {
    setActiveFilters({
      type: [],
      category: [],
      location: [],
      priceRange: [],
      rating: []
    });
  };

  const handleSearch = (e: React.FormEvent)   => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };

  const getTypeIcon = (type: string)   => {
    switch (type) {
      case 'service': return Zap;
      case 'page': return FileText;
      case 'blog': return BookOpen;
      case 'case-study': return FileText;
      case 'documentation': return Code;
      default: return FileText;
    }
  };

  const getCategoryIcon = (category: string)   => {
    switch (category) {
      case 'AI & Analytics': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Cloud & DevOps': return Cloud;
      case 'IoT & Edge': return Zap;
      case 'Quantum Computing': return Rocket;
      case 'Blockchain': return Lock;
      default: return Code;
    }
  };

  // Calculate filter counts
  filterOptions.forEach(filter => {
    filter.count = mockSearchResults.filter(result => 
      result.category.toLowerCase().replace(/\s+/g, '-') === filter.id ||
      result.type === filter.id
    ).length;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Zion Tech Group</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find services, documentation, case studies, and insights across our comprehensive technology portfolio.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for services, solutions, documentation, or insights..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Search
              </button>
            </div>
          </form>
        </motion.div>

        {/* Filters and Results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear All
                </button>
              </div>

              {/* Sort Options */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as )}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="relevance">Relevance</option>
                  <option value="date">Date</option>
                  <option value="popularity">Popularity</option>
                </select>
              </div>

              {/* Filter Options */}
              <div className="space-y-3">
                {filterOptions.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => toggleFilter(filter.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      selectedFilters.has(filter.id)
                        ? 'bg-blue-50 border border-blue-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <filter.icon className="h-5 w-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{filter.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{filter.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <motion.div 
              className="flex items-center justify-between mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold text-white">
                  {loading ? 'Searching...' : `${filteredResults.length} results found`}
                </h3>
                {Object.values(activeFilters).some(filters => filters.length > 0) && (
                  <div className="flex gap-2">
                    {Object.entries(activeFilters).map(([key, values]) =>
                      values.map(value => (
                        <span
                          key={`${key}-${value}`}
                          className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full flex items-center gap-2"
                        >
                          {value}
                          <button
                            onClick={() => toggleFilter(key as keyof typeof activeFilters, value)}
                            className="hover:text-zion-cyan-light"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-zion-cyan/20 text-zion-cyan' 
                      : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-zion-cyan/20 text-zion-cyan' 
                      : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Loading State */}
            {loading && (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-16 h-16 border-4 border-zion-cyan/20 border-t-zion-cyan rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-zion-slate-light">Searching...</p>
              </motion.div>
            )}

            {/* Results Grid/List */}
            {!loading && (
              <AnimatePresence mode="wait">
                {viewMode === 'grid' ? (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid md: anygrid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    {filteredResults.map((result, index)   => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Link
                          to={result.path}
                          className="block bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/40 transition-all duration-300 group"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                              {result.type === 'service' ? 
                                getCategoryIcon(result.category)({ className: "h-6 w-6 text-white" }) : 
                                getTypeIcon(result.type)({ className: "h-6 w-6 text-white" })
                              }
                            </div>
                            {result.featured && (
                              <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                                Featured
                              </span>
                            )}
                          </div>

                          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-zion-cyan transition-colors">
                            {result.title}
                          </h3>
                          <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                            {result.description}
                          </p>

                          <div className="flex items-center justify-between mb-4">
                            <span className="text-zion-cyan text-sm font-medium">{result.category}</span>
                            {result.rating && (
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-white text-sm">{result.rating}</span>
                                <span className="text-zion-slate-light text-sm">({result.reviewCount})</span>
                              </div>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            {result.price && (
                              <span className="text-white font-semibold">{result.price}</span>
                            )}
                            {result.location && (
                              <div className="flex items-center gap-1 text-zion-slate-light text-sm">
                                <MapPin className="w-4 h-4" />
                                {result.location}
                              </div>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-2 mt-4">
                            {result.tags.slice(0, 3).map(tag => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {filteredResults.map((result, index) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Link
                          to={result.path}
                          className="block bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/40 transition-all duration-300 group"
                        >
                          <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0">
                              {result.type === 'service' ? 
                                getCategoryIcon(result.category)({ className: "h-8 w-8 text-white" }) : 
                                getTypeIcon(result.type)({ className: "h-8 w-8 text-white" })
                              }
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="text-white font-semibold text-xl group-hover:text-zion-cyan transition-colors">
                                  {result.title}
                                </h3>
                                {result.featured && (
                                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full ml-4">
                                    Featured
                                  </span>
                                )}
                              </div>

                              <p className="text-zion-slate-light mb-4">
                                {result.description}
                              </p>

                              <div className="flex items-center gap-6 mb-4">
                                <span className="text-zion-cyan font-medium">{result.category}</span>
                                {result.rating && (
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-white">{result.rating}</span>
                                    <span className="text-zion-slate-light">({result.reviewCount})</span>
                                  </div>
                                )}
                                {result.price && (
                                  <div className="flex items-center gap-1 text-white">
                                    <DollarSign className="w-4 h-4" />
                                    {result.price}
                                  </div>
                                )}
                                {result.location && (
                                  <div className="flex items-center gap-1 text-zion-slate-light">
                                    <MapPin className="w-4 h-4" />
                                    {result.location}
                                  </div>
                                )}
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {result.tags.map(tag => (
                                  <span
                                    key={tag}
                                    className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-sm rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            )}

            {/* No Results */}
            {!loading && filteredResults.length === 0 && (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-24 h-24 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-zion-slate-light mb-4">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
              
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </div>

            {/* Mobile Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden mb-6 bg-white rounded-xl shadow-sm border border-gray-200 p-4"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {filterOptions.map(filter => (
                      <button
                        key={filter.id}
                        onClick={() => toggleFilter(filter.id)}
                        className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                          selectedFilters.has(filter.id)
                            ? 'bg-blue-50 border border-blue-200'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <filter.icon className="h-4 w-4 text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">{filter.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{filter.count}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results List */}
            <div className="space-y-4">
              {isSearching ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Searching for results...</p>
                </div>
              ) : searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                                              {/* Icon */}
                        <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${getResultColor(result.type)} rounded-xl flex items-center justify-center`}>
                          {React.createElement(getResultIcon(result.type), { className: "h-6 w-6 text-white" })}
                        </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                <a href={result.url}>{result.title}</a>
                              </h3>
                              {result.featured && (
                                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3 leading-relaxed">{result.description}</p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {result.tags.slice(0, 5).map(tag => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Meta */}
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <TagIcon className="h-4 w-4 mr-1" />
                                {result.category}
                              </span>
                              <span className="flex items-center">
                                <CalendarIcon className="h-4 w-4 mr-1" />
                                {new Date(result.lastUpdated).toLocaleDateString()}
                              </span>
                              <span className="flex items-center">
                                <Eye className="h-4 w-4 mr-1" />
                                {Math.round(result.relevance * 100)}% relevant
                              </span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center space-x-2 ml-4">
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                              <Bookmark className="h-4 w-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                              <Share2 className="h-4 w-4" />
                            </button>
                            <a
                              href={result.url}
                              className="p-2 text-blue-600 hover:text-blue-700 transition-colors"
                            >
                              <ArrowRight className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : searchQuery ? (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Start your search</h3>
                  <p className="text-gray-600">
                    Enter a search term above to find services, documentation, and insights.
                  </p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {searchResults.length > 0 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
                    Previous
                  </button>
                  <span className="px-3 py-2 text-gray-700">Page 1 of 1</span>
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
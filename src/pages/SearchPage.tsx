import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  X, 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  Star, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Building, 
  Globe, 
  Server, 
  Database, 
  Network, 
  Lock, 
  Heart, 
  ShoppingCart, 
  MessageCircle, 
  HelpCircle, 
  FileText, 
  Video, 
  TestTube, 
  Code, 
  BookOpen, 
  Briefcase, 
  Newspaper, 
  Target, 
  DollarSign, 
  Settings, 
  Bell, 
  Download, 
  Edit, 
  Trash2, 
  Plus, 
  Calendar, 
  Truck, 
  BarChart3, 
  Atom, 
  Leaf, 
  Satellite, 
  Cpu, 
  Rocket, 
  TrendingUp as TrendingUpIcon, 
  Award, 
  Activity, 
  CheckCircle, 
  AlertCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  QuestionMark, 
  Lightbulb, 
  Info, 
  AlertTriangle, 
  Tag,
  Bookmark,
  Share2,
  Eye,
  Calendar as CalendarIcon,
  User,
  Tag as TagIcon
} from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'service' | 'page' | 'blog' | 'documentation' | 'case-study';
  category: string;
  tags: string[];
  relevance: number;
  lastUpdated: string;
  icon: any;
  featured?: boolean;
}

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'popularity'>('relevance');
  const [showFilters, setShowFilters] = useState(false);

  // Mock search results - in a real app, this would come from an API
  const mockSearchResults: SearchResult[] = [
    // AI Services
    {
      id: 'ai-bi',
      title: 'AI Business Intelligence',
      description: 'Advanced AI-powered business intelligence platform that provides real-time insights, predictive analytics, and automated reporting for data-driven decision making.',
      url: '/services/ai-business-intelligence',
      type: 'service',
      category: 'AI Services',
      tags: ['AI', 'Business Intelligence', 'Analytics', 'Machine Learning', 'Predictive'],
      relevance: 0.95,
      lastUpdated: '2024-12-01',
      icon: Brain,
      featured: true
    },
    {
      id: 'ai-compliance',
      title: 'AI Compliance Assistant',
      description: 'Automated regulatory compliance solution that helps businesses stay compliant with industry standards and regulations through intelligent monitoring and reporting.',
      url: '/services/ai-compliance-assistant',
      type: 'service',
      category: 'AI Services',
      tags: ['AI', 'Compliance', 'Regulatory', 'Automation', 'Risk Management'],
      relevance: 0.92,
      lastUpdated: '2024-11-28',
      icon: Shield
    },
    {
      id: 'ai-sales',
      title: 'AI Sales Copilot',
      description: 'Intelligent sales optimization platform that enhances sales performance through AI-driven insights, lead scoring, and automated follow-up sequences.',
      url: '/services/ai-sales-copilot',
      type: 'service',
      category: 'AI Services',
      tags: ['AI', 'Sales', 'CRM', 'Automation', 'Lead Generation'],
      relevance: 0.89,
      lastUpdated: '2024-11-25',
      icon: Users
    },

    // Cloud Services
    {
      id: 'cloud-devops',
      title: 'Cloud DevOps Platform',
      description: 'Comprehensive cloud DevOps solution that automates infrastructure deployment, scaling, and management across multiple cloud providers.',
      url: '/services/cloud-devops',
      type: 'service',
      category: 'Cloud & Infrastructure',
      tags: ['Cloud', 'DevOps', 'Automation', 'Infrastructure', 'AWS', 'Azure'],
      relevance: 0.87,
      lastUpdated: '2024-11-20',
      icon: Cloud
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure Management',
      description: 'Enterprise-grade IT infrastructure solutions including server management, network optimization, and disaster recovery planning.',
      url: '/services/it-infrastructure',
      type: 'service',
      category: 'Cloud & Infrastructure',
      tags: ['Infrastructure', 'IT', 'Enterprise', 'Networking', 'Security'],
      relevance: 0.84,
      lastUpdated: '2024-11-18',
      icon: Server
    },

    // Security Services
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Platform',
      description: 'Next-generation cybersecurity solution powered by artificial intelligence for advanced threat detection, prevention, and response.',
      url: '/services/ai-cybersecurity-platform',
      type: 'service',
      category: 'Security & Compliance',
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Security', 'Compliance'],
      relevance: 0.91,
      lastUpdated: '2024-11-22',
      icon: Shield,
      featured: true
    },
    {
      id: 'zero-trust',
      title: 'Zero Trust Network Access',
      description: 'Modern security architecture that implements zero-trust principles for enhanced network security and access control.',
      url: '/services/zero-trust-network-access',
      type: 'service',
      category: 'Security & Compliance',
      tags: ['Zero Trust', 'Security', 'Network', 'Access Control', 'Compliance'],
      relevance: 0.86,
      lastUpdated: '2024-11-15',
      icon: Lock
    },

    // Quantum Computing
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing services for optimization problems, cryptography, and scientific simulations.',
      url: '/services/quantum-computing',
      type: 'service',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Optimization', 'Cryptography', 'AI', 'Research'],
      relevance: 0.88,
      lastUpdated: '2024-11-10',
      icon: Atom
    },

    // Blog Posts
    {
      id: 'ai-trends-2024',
      title: 'AI Trends to Watch in 2024',
      description: 'Explore the latest artificial intelligence trends that will shape the technology landscape in 2024 and beyond.',
      url: '/blog/ai-trends-2024',
      type: 'blog',
      category: 'AI & Technology',
      tags: ['AI', 'Trends', 'Technology', '2024', 'Innovation'],
      relevance: 0.82,
      lastUpdated: '2024-12-01',
      icon: BookOpen
    },
    {
      id: 'cloud-migration-guide',
      title: 'Complete Guide to Cloud Migration',
      description: 'A comprehensive guide to migrating your infrastructure to the cloud, including best practices and common pitfalls.',
      url: '/blog/cloud-migration-guide',
      type: 'blog',
      category: 'Cloud & Infrastructure',
      tags: ['Cloud Migration', 'Guide', 'Best Practices', 'Infrastructure'],
      relevance: 0.79,
      lastUpdated: '2024-11-28',
      icon: Cloud
    },

    // Case Studies
    {
      id: 'healthcare-ai-case-study',
      title: 'AI Transformation in Healthcare',
      description: 'How a leading healthcare provider leveraged AI to improve patient outcomes and operational efficiency.',
      url: '/case-studies/healthcare-ai-transformation',
      type: 'case-study',
      category: 'Healthcare',
      tags: ['AI', 'Healthcare', 'Case Study', 'Transformation', 'Patient Care'],
      relevance: 0.85,
      lastUpdated: '2024-11-20',
      icon: FileText
    }
  ];

  const filterOptions = [
    { id: 'ai-services', name: 'AI Services', icon: Brain, count: 0 },
    { id: 'cloud-infrastructure', name: 'Cloud & Infrastructure', icon: Cloud, count: 0 },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 0 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Network, count: 0 },
    { id: 'blog', name: 'Blog Posts', icon: BookOpen, count: 0 },
    { id: 'case-studies', name: 'Case Studies', icon: FileText, count: 0 },
    { id: 'documentation', name: 'Documentation', icon: Code, count: 0 }
  ];

  useEffect(() => {
    if (searchQuery) {
      performSearch();
    }
  }, [searchQuery, selectedFilters, sortBy]);

  const performSearch = async () => {
    setIsSearching(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    let filtered = mockSearchResults.filter(result => {
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };

  const toggleFilter = (filterId: string) => {
    const newFilters = new Set(selectedFilters);
    if (newFilters.has(filterId)) {
      newFilters.delete(filterId);
    } else {
      newFilters.add(filterId);
    }
    setSelectedFilters(newFilters);
  };

  const clearFilters = () => {
    setSelectedFilters(new Set());
  };

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'service': return Zap;
      case 'page': return FileText;
      case 'blog': return BookOpen;
      case 'case-study': return FileText;
      case 'documentation': return Code;
      default: return FileText;
    }
  };

  const getResultColor = (type: string) => {
    switch (type) {
      case 'service': return 'from-blue-500 to-indigo-500';
      case 'blog': return 'from-green-500 to-emerald-500';
      case 'case-study': return 'from-purple-500 to-pink-500';
      case 'documentation': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';
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
                  onChange={(e) => setSortBy(e.target.value as any)}
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
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {searchQuery ? `Search Results for "${searchQuery}"` : 'Recent Content'}
                </h2>
                <p className="text-gray-600">
                  {isSearching ? 'Searching...' : `${searchResults.length} results found`}
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
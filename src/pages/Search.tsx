import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import {
  Search as SearchIcon,
  Filter,
  Grid,
  List,
  Star,
  Eye,
  ExternalLink,
  Clock,
  User,
  Tag,
  Calendar,
  FileText,
  Code,
  Cloud,
  Shield,
  Bot,
  Database,
  Server,
  Monitor,
  Smartphone,
  Package,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Zap,
  Globe,
  Target,
  BarChart3,
  Settings,
  Palette,
  Cpu,
  HardDrive,
  Network,
  Lightbulb,
  BookOpen,
  Video,
  Headphones,
  DollarSign,
  Percent,
  X,
  Plus,
  Minus,
  RefreshCw,
  RotateCcw,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Power,
  PowerOff,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryEmpty,
  Wifi,
  WifiOff,
  Signal,
  SignalOff,
  Bluetooth,
  BluetoothOff,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Camera,
  Image,
  File,
  Folder,
  Archive,
  Trash2,
  Edit,
  Copy,
  Share,
  Link as LinkIcon,
  Bookmark,
  BookmarkPlus,
  BookmarkMinus,
  Flag,
  Report,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  BarChart,
  PieChart,
  LineChart,
  Tool,
  Briefcase,
  Home,
  Building,
  Car,
  Truck,
  Plane,
  Ship,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  UserTrendingUp,
  UserTrendingDown,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserCheck3,
  UserClock2,
  UserStar2,
  UserHeart2,
  UserShield2,
  UserZap2,
  UserTrendingUp2,
  UserTrendingDown2
} from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'service' | 'product' | 'article' | 'api' | 'webinar' | 'training';
  category: string;
  tags: string[];
  rating?: number;
  reviewCount?: number;
  price?: number;
  currency?: string;
  featured: boolean;
  url: string;
  image?: string;
  author?: string;
  date?: string;
  readTime?: string;
}

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  const types = [
    { id: 'all', name: 'All Types', icon: SearchIcon, count: 0 },
    { id: 'service', name: 'Services', icon: Server, count: 0 },
    { id: 'product', name: 'Products', icon: Package, count: 0 },
    { id: 'article', name: 'Articles', icon: FileText, count: 0 },
    { id: 'api', name: 'APIs', icon: Code, count: 0 },
    { id: 'webinar', name: 'Webinars', icon: Video, count: 0 },
    { id: 'training', name: 'Training', icon: BookOpen, count: 0 }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 0 },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 0 },
    { id: 'security', name: 'Cybersecurity', count: 0 },
    { id: 'data', name: 'Data & Analytics', count: 0 },
    { id: 'iot', name: 'IoT & Edge', count: 0 },
    { id: 'emerging', name: 'Emerging Technologies', count: 0 }
  ];

  const sortOptions = [
    { id: 'relevance', name: 'Relevance' },
    { id: 'newest', name: 'Newest First' },
    { id: 'oldest', name: 'Oldest First' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' }
  ];

  // Mock search results
  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI Business Intelligence Platform',
      description: 'Advanced AI-powered business intelligence platform with real-time analytics and predictive insights.',
      type: 'service',
      category: 'ai-ml',
      tags: ['AI', 'Business Intelligence', 'Analytics', 'Predictive'],
      rating: 4.8,
      reviewCount: 156,
      price: 2499,
      currency: '$',
      featured: true,
      url: '/services/ai-business-intelligence',
      image: '/images/ai-business-intelligence.jpg',
      author: 'Zion Tech Group',
      date: '2024-01-15'
    },
    {
      id: '2',
      title: 'Cloud Security Best Practices Guide',
      description: 'Comprehensive guide to implementing cloud security best practices for enterprise organizations.',
      type: 'article',
      category: 'security',
      tags: ['Cloud Security', 'Best Practices', 'Enterprise', 'Guide'],
      featured: false,
      url: '/blog/cloud-security-best-practices',
      image: '/images/cloud-security.jpg',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '8 min read'
    },
    {
      id: '3',
      title: 'AI Text Analysis API',
      description: 'RESTful API for analyzing text sentiment, extracting entities, and performing language processing.',
      type: 'api',
      category: 'ai-ml',
      tags: ['API', 'Text Analysis', 'NLP', 'Sentiment'],
      rating: 4.9,
      reviewCount: 89,
      featured: true,
      url: '/api/ai-text-analysis',
      image: '/images/api-text-analysis.jpg',
      author: 'Zion Tech Group',
      date: '2024-01-12'
    },
    {
      id: '4',
      title: 'Cybersecurity Threat Detection Service',
      description: 'Real-time threat detection and analysis service for proactive cybersecurity defense.',
      type: 'service',
      category: 'security',
      tags: ['Cybersecurity', 'Threat Detection', 'Real-time', 'Defense'],
      rating: 4.7,
      reviewCount: 203,
      price: 1899,
      currency: '$',
      featured: false,
      url: '/services/cybersecurity-threat-detection',
      image: '/images/cybersecurity-threat.jpg',
      author: 'Zion Tech Group',
      date: '2024-01-08'
    },
    {
      id: '5',
      title: 'Data Analytics Fundamentals Training',
      description: 'Comprehensive training course on data analytics fundamentals and best practices.',
      type: 'training',
      category: 'data',
      tags: ['Training', 'Data Analytics', 'Fundamentals', 'Course'],
      rating: 4.6,
      reviewCount: 67,
      price: 299,
      currency: '$',
      featured: false,
      url: '/training/data-analytics-fundamentals',
      image: '/images/data-analytics-training.jpg',
      author: 'Emily Watson',
      date: '2024-01-05',
      readTime: '6 hours'
    }
  ];

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [searchParams]);

  const performSearch = async (query: string) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Filter mock results based on query
    const filtered = mockResults.filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase()) ||
      result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    setResults(filtered);
    setIsLoading(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
      performSearch(searchQuery.trim());
    }
  };

  const filteredResults = results.filter(result => {
    const matchesType = selectedType === 'all' || result.type === selectedType;
    const matchesCategory = selectedCategory === 'all' || result.category === selectedCategory;
    return matchesType && matchesCategory;
  });

  const sortedResults = [...filteredResults].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date || '').getTime() - new Date(a.date || '').getTime();
      case 'oldest':
        return new Date(a.date || '').getTime() - new Date(b.date || '').getTime();
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'price-low':
        return (a.price || 0) - (b.price || 0);
      case 'price-high':
        return (b.price || 0) - (a.price || 0);
      default:
        return 0;
    }
  });

  const getTypeIcon = (type: string) => {
    const typeInfo = types.find(t => t.id === type);
    return typeInfo ? typeInfo.icon : SearchIcon;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title={`Search Results${searchQuery ? ` for "${searchQuery}"` : ''} - Zion Tech Group`}
        description={`Search results for "${searchQuery}" across our comprehensive range of AI services, cloud solutions, cybersecurity tools, and technology resources.`}
        keywords={`search, ${searchQuery}, AI services, cloud computing, cybersecurity, Zion Tech Group`}
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Search Results
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find exactly what you're looking for across our comprehensive range of 
              AI services, cloud solutions, and technology resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for services, products, articles, APIs, webinars, training..."
                className="w-full pl-12 pr-4 py-4 bg-slate-800/80 backdrop-blur-sm border border-slate-600/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                Search
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Filters and Results */}
      {searchQuery && (
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {types.map(type => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {sortOptions.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">View</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'grid'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700/50 text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'list'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700/50 text-gray-400 hover:text-white'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {isLoading ? 'Searching...' : `${sortedResults.length} results found`}
                </h2>
                {searchQuery && (
                  <p className="text-gray-400">
                    Results for "<span className="text-white">{searchQuery}</span>"
                  </p>
                )}
              </div>

              {isLoading ? (
                <div className="text-center py-12">
                  <RefreshCw className="w-8 h-8 text-blue-400 animate-spin mx-auto mb-4" />
                  <p className="text-gray-300">Searching...</p>
                </div>
              ) : sortedResults.length === 0 ? (
                <div className="text-center py-12">
                  <SearchIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                  <p className="text-gray-300 mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedType('all');
                      setSelectedCategory('all');
                      setSortBy('relevance');
                    }}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
                  {sortedResults.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className={`bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-600/20 hover:border-slate-500/40 transition-all duration-300 overflow-hidden ${
                        viewMode === 'list' ? 'flex' : ''
                      }`}
                    >
                      {result.image && (
                        <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'} bg-gradient-to-br from-slate-700 to-slate-800 relative`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            {React.createElement(getTypeIcon(result.type), { className: "w-12 h-12 text-white" })}
                          </div>
                        </div>
                      )}

                      <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded">
                            {getCategoryName(result.category)}
                          </span>
                          <span className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs font-medium rounded">
                            {result.type}
                          </span>
                          {result.featured && (
                            <span className="px-2 py-1 bg-yellow-500 text-yellow-900 text-xs font-medium rounded">
                              Featured
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2">{result.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{result.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {result.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            {result.rating && (
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span>{result.rating}</span>
                                <span>({result.reviewCount})</span>
                              </div>
                            )}
                            {result.date && (
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(result.date).toLocaleDateString()}</span>
                              </div>
                            )}
                            {result.readTime && (
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{result.readTime}</span>
                              </div>
                            )}
                          </div>
                          {result.price && (
                            <div className="text-lg font-bold text-white">
                              {result.currency}{result.price}
                            </div>
                          )}
                        </div>

                        <div className="flex gap-3">
                          <Link
                            to={result.url}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                          >
                            <ArrowRight className="w-4 h-4" />
                            View Details
                          </Link>
                          <button className="p-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                            <Bookmark className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Contact us for custom solutions, consultations, 
              or to discuss your specific technology needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Users className="w-5 h-5 inline mr-2" />
                Contact Us
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Server className="w-5 h-5 inline mr-2" />
                Browse All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Search;

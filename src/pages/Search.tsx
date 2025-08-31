import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search as SearchIcon, 
  Filter, 
  MapPin, 
  Briefcase, 
  Server, 
  Users, 
  Building, 
  Star, 
  Clock, 
  ArrowRight,
  Grid,
  List,
  Eye,
  ExternalLink,
  User,
  Tag,
  Calendar,
  FileText,
  Code,
  Cloud,
  Shield,
  Bot,
  Database,
  Monitor,
  Smartphone,
  Package,
  TrendingUp,
  Award,
  CheckCircle,
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
  Heart,
  HeartOff,
  MessageCircle,
  MessageSquare,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Navigation,
  Compass,
  Home,
  ShoppingCart,
  CreditCard,
  Wallet,
  PiggyBank,
  Coins,
  DollarSign as DollarSignIcon,
  Euro,
  PoundSterling,
  Yen,
  Bitcoin,
  Ethereum,
  Activity,
  PieChart,
  BarChart,
  LineChart,
  TrendingDown,
  MinusCircle,
  PlusCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  CheckSquare,
  Square,
  Radio,
  ToggleLeft,
  ToggleRight,
  Sliders,
  SlidersHorizontal,
  Volume1,
  Volume3,
  Mic,
  MicOff,
  Headphones as HeadphonesIcon,
  Speaker,
  SpeakerOff,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle as ShuffleIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Rewind as RewindIcon,
  FastForward as FastForwardIcon,
  Repeat as RepeatIcon,
  Repeat1 as Repeat1Icon,
  Shuffle as ShuffleIcon2,
  SkipBack as SkipBackIcon2,
  SkipForward as SkipForwardIcon2,
  Rewind as RewindIcon2,
  FastForward as FastForwardIcon2,
  Repeat as RepeatIcon2,
  Repeat1 as Repeat1Icon2
} from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
  rating?: number;
  reviewCount?: number;
  lastUpdated: string;
  icon: React.ComponentType<any>;
}

const searchResults: SearchResult[] = [
  {
    id: 'ai-autonomous-research',
    title: 'AI Autonomous Research Assistant',
    description: 'Advanced AI-powered research tool that autonomously gathers, analyzes, and synthesizes information from multiple sources.',
    category: 'AI Services',
    url: '/services/ai-autonomous-research',
    tags: ['AI', 'Research', 'Automation', 'Machine Learning'],
    rating: 4.8,
    reviewCount: 127,
    lastUpdated: '2025-01-15',
    icon: Bot
  },
  {
    id: 'ai-supply-chain',
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and automated optimization.',
    category: 'Supply Chain',
    url: '/services/ai-supply-chain',
    tags: ['AI', 'Supply Chain', 'Optimization', 'Analytics'],
    rating: 4.6,
    reviewCount: 89,
    lastUpdated: '2025-01-10',
    icon: Package
  },
  {
    id: 'ai-content-marketing',
    title: 'AI Content Marketing Suite',
    description: 'Comprehensive AI-powered content creation and marketing automation platform.',
    category: 'Content Marketing',
    url: '/services/ai-content-marketing',
    tags: ['AI', 'Content', 'Marketing', 'Automation'],
    rating: 4.7,
    reviewCount: 156,
    lastUpdated: '2025-01-12',
    icon: FileText
  },
  {
    id: 'ai-workflow-orchestrator',
    title: 'AI Workflow Orchestrator',
    description: 'Intelligent workflow automation that learns and optimizes business processes.',
    category: 'AI Services',
    url: '/services/ai-workflow-orchestrator',
    tags: ['AI', 'Workflow', 'Automation', 'Process'],
    rating: 4.5,
    reviewCount: 73,
    lastUpdated: '2025-01-08',
    icon: Workflow
  },
  {
    id: 'ai-customer-experience',
    title: 'AI Customer Experience Analytics',
    description: 'Advanced analytics platform for understanding and improving customer experiences.',
    category: 'Customer Intelligence',
    url: '/services/ai-customer-experience',
    tags: ['AI', 'Analytics', 'Customer Experience', 'Insights'],
    rating: 4.9,
    reviewCount: 203,
    lastUpdated: '2025-01-14',
    icon: Users
  },
  {
    id: 'ai-financial-risk',
    title: 'AI Financial Risk Management',
    description: 'Intelligent risk assessment and management for financial institutions.',
    category: 'FinTech',
    url: '/services/ai-financial-risk',
    tags: ['AI', 'Finance', 'Risk Management', 'Compliance'],
    rating: 4.7,
    reviewCount: 94,
    lastUpdated: '2025-01-11',
    icon: Shield
  },
  {
    id: 'ai-cybersecurity',
    title: 'AI Cybersecurity Solutions',
    description: 'Next-generation cybersecurity powered by artificial intelligence and machine learning.',
    category: 'Cybersecurity',
    url: '/services/ai-cybersecurity',
    tags: ['AI', 'Cybersecurity', 'Machine Learning', 'Security'],
    rating: 4.8,
    reviewCount: 167,
    lastUpdated: '2025-01-13',
    icon: Lock
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Services',
    description: 'Comprehensive cloud infrastructure and DevOps automation solutions.',
    category: 'Cloud Services',
    url: '/services/cloud-devops',
    tags: ['Cloud', 'DevOps', 'Infrastructure', 'Automation'],
    rating: 4.6,
    reviewCount: 112,
    lastUpdated: '2025-01-09',
    icon: Cloud
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Consulting',
    description: 'Strategic guidance and implementation for digital transformation initiatives.',
    category: 'Consulting',
    url: '/services/digital-transformation',
    tags: ['Digital Transformation', 'Strategy', 'Consulting', 'Innovation'],
    rating: 4.7,
    reviewCount: 89,
    lastUpdated: '2025-01-07',
    icon: TrendingUp
  },
  {
    id: 'micro-saas',
    title: 'Micro SaaS Solutions',
    description: 'Custom micro SaaS applications tailored to specific business needs.',
    category: 'Software Development',
    url: '/services/micro-saas',
    tags: ['SaaS', 'Software', 'Custom Development', 'Business Apps'],
    rating: 4.5,
    reviewCount: 67,
    lastUpdated: '2025-01-06',
    icon: Code
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting Services',
    description: 'Expert IT consulting for technology strategy and implementation.',
    category: 'Consulting',
    url: '/services/it-consulting',
    tags: ['IT', 'Consulting', 'Strategy', 'Technology'],
    rating: 4.6,
    reviewCount: 134,
    lastUpdated: '2025-01-05',
    icon: Settings
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing Solutions',
    description: 'Cutting-edge quantum computing applications and research.',
    category: 'Emerging Tech',
    url: '/services/quantum-computing',
    tags: ['Quantum Computing', 'Research', 'Innovation', 'Technology'],
    rating: 4.9,
    reviewCount: 45,
    lastUpdated: '2025-01-04',
    icon: Atom
  },
  {
    id: 'iot-edge',
    title: 'IoT & Edge Computing',
    description: 'Internet of Things and edge computing solutions for smart systems.',
    category: 'IoT',
    url: '/services/iot-edge',
    tags: ['IoT', 'Edge Computing', 'Smart Systems', 'Connectivity'],
    rating: 4.4,
    reviewCount: 78,
    lastUpdated: '2025-01-03',
    icon: Network
  },
  {
    id: 'custom-development',
    title: 'Custom Development',
    description: 'Tailored software development solutions for unique business requirements.',
    category: 'Software Development',
    url: '/services/custom-development',
    tags: ['Custom Development', 'Software', 'Tailored Solutions', 'Business'],
    rating: 4.7,
    reviewCount: 156,
    lastUpdated: '2025-01-02',
    icon: Code
  }
];

const categories = [
  'All',
  'AI Services',
  'Supply Chain',
  'Content Marketing',
  'Customer Intelligence',
  'FinTech',
  'Cybersecurity',
  'Cloud Services',
  'Consulting',
  'Software Development',
  'Emerging Tech',
  'IoT'
];

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'relevance' | 'rating' | 'date' | 'name'>('relevance');
  const [filters, setFilters] = useState({
    rating: 0,
    tags: [] as string[],
    dateRange: 'all'
  });

  useEffect(() => {
    if (searchQuery) {
      setSearchParams({ q: searchQuery });
    }
  }, [searchQuery, setSearchParams]);

  const filteredResults = searchResults.filter(result => {
    const matchesSearch = !searchQuery || 
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || result.category === selectedCategory;
    
    const matchesRating = result.rating && result.rating >= filters.rating;
    
    const matchesTags = filters.tags.length === 0 || 
      filters.tags.some(filterTag => result.tags.includes(filterTag));
    
    return matchesSearch && matchesCategory && matchesRating && matchesTags;
  });

  const sortedResults = [...filteredResults].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'date':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const allTags = Array.from(new Set(searchResults.flatMap(result => result.tags)));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by useEffect
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setFilters({
      rating: 0,
      tags: [],
      dateRange: 'all'
    });
    setSortBy('relevance');
  };

  return (
    <>
      <SEO 
        title="Search - Zion Tech Group"
        description="Search our comprehensive range of AI and technology services. Find the perfect solution for your business needs."
        keywords="search, AI services, technology solutions, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Header Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Search Our{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Find the perfect AI and technology solutions for your business. 
                Search by keywords, categories, or browse our comprehensive service catalog.
              </p>
              
              {/* Search Form */}
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for services, technologies, or solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
                  >
                    Search
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Search Results */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filters and Controls */}
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              {/* Filters Sidebar */}
              <div className="lg:w-80 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Filters</h3>
                    <button
                      onClick={clearFilters}
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Clear All
                    </button>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <label className="block text-white font-medium mb-3">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      {categories.map(category => (
                        <option key={category} value={category} className="bg-slate-800 text-white">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Rating Filter */}
                  <div className="mb-6">
                    <label className="block text-white font-medium mb-3">Minimum Rating</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.5"
                        value={filters.rating}
                        onChange={(e) => setFilters(prev => ({ ...prev, rating: parseFloat(e.target.value) }))}
                        className="flex-1"
                      />
                      <span className="text-white text-sm w-12">{filters.rating}+</span>
                    </div>
                  </div>

                  {/* Tags Filter */}
                  <div className="mb-6">
                    <label className="block text-white font-medium mb-3">Popular Tags</label>
                    <div className="flex flex-wrap gap-2">
                      {allTags.slice(0, 12).map(tag => (
                        <button
                          key={tag}
                          onClick={() => {
                            const newTags = filters.tags.includes(tag)
                              ? filters.tags.filter(t => t !== tag)
                              : [...filters.tags, tag];
                            setFilters(prev => ({ ...prev, tags: newTags }));
                          }}
                          className={`px-3 py-1 rounded-full text-sm transition-colors ${
                            filters.tags.includes(tag)
                              ? 'bg-cyan-500 text-white'
                              : 'bg-white/10 text-gray-300 hover:bg-white/20'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Results Section */}
              <div className="flex-1">
                {/* Results Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="text-white">
                    <p className="text-lg">
                      {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
                    </p>
                    {searchQuery && (
                      <p className="text-gray-400">for "{searchQuery}"</p>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Sort By */}
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="relevance" className="bg-slate-800 text-white">Sort by Relevance</option>
                      <option value="rating" className="bg-slate-800 text-white">Sort by Rating</option>
                      <option value="date" className="bg-slate-800 text-white">Sort by Date</option>
                      <option value="name" className="bg-slate-800 text-white">Sort by Name</option>
                    </select>

                    {/* View Mode Toggle */}
                    <div className="flex bg-white/10 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded transition-colors ${
                          viewMode === 'grid' 
                            ? 'bg-cyan-500 text-white' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded transition-colors ${
                          viewMode === 'list' 
                            ? 'bg-cyan-500 text-white' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Results Grid/List */}
                {viewMode === 'grid' ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedResults.map((result, index) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <result.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                              {result.title}
                            </h3>
                            <p className="text-sm text-gray-400">{result.category}</p>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4 line-clamp-3">{result.description}</p>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            {result.rating && (
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-white">{result.rating}</span>
                                <span className="text-gray-400">({result.reviewCount})</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {result.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">
                            Updated {new Date(result.lastUpdated).toLocaleDateString()}
                          </span>
                          <Link
                            to={result.url}
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {sortedResults.map((result, index) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <result.icon className="w-8 h-8 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-xl font-semibold text-white mb-1">{result.title}</h3>
                                <p className="text-gray-400 mb-2">{result.category}</p>
                              </div>
                              {result.rating && (
                                <div className="flex items-center gap-1 text-sm">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="text-white">{result.rating}</span>
                                  <span className="text-gray-400">({result.reviewCount})</span>
                                </div>
                              )}
                            </div>
                            
                            <p className="text-gray-300 mb-3">{result.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                              {result.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-400">
                                Updated {new Date(result.lastUpdated).toLocaleDateString()}
                              </span>
                              <Link
                                to={result.url}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
                              >
                                Learn More
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {filteredResults.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center py-16"
                  >
                    <div className="text-gray-400 text-xl mb-4">No results found</div>
                    <p className="text-gray-500 mb-6">
                      Try adjusting your search terms or filters to find what you're looking for.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Clear all filters
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team of experts is here to help you find the perfect solution. 
                Contact us for personalized recommendations and custom solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Custom Quote
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  📞 Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

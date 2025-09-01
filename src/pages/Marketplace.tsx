import React, { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Store, 
=======
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Store, 
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Heart, 
<<<<<<< HEAD
  Eye,
  Zap,
  Shield,
  Cloud,
  Brain,
  Globe,
  TrendingUp,
  Award,
  Users,
  ArrowRight
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = [
    { id: 'all', name: 'All Solutions', count: 45, icon: Globe },
    { id: 'ai', name: 'AI & Machine Learning', count: 18, icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', count: 8, icon: Zap },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 12, icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', count: 15, icon: Cloud },
    { id: 'iot', name: 'IoT & Edge Computing', count: 10, icon: Zap },
    { id: 'blockchain', name: 'Blockchain', count: 6, icon: Globe },
    { id: 'healthcare', name: 'Healthcare Tech', count: 9, icon: Brain }
  ];

  const solutions = [
    {
      id: 1,
      name: "Quantum AI Optimization Platform",
      category: "quantum",
      description: "Revolutionary quantum-classical hybrid algorithms for real-time optimization solving. 1000x faster than classical computers.",
      price: "$15,000/month",
      rating: 4.9,
      reviews: 127,
      users: 45,
      features: ["Quantum algorithms", "Real-time optimization", "Hybrid computing", "Enterprise scaling"],
      image: "🔮",
      badge: "Most Popular",
      vendor: "QuantumTech Solutions",
      deployment: "Cloud & On-Premise",
      support: "24/7 Enterprise Support"
    },
    {
      id: 2,
      name: "AI Cybersecurity Suite",
      category: "cybersecurity",
      description: "Advanced AI-powered threat detection and response system with 99.9% accuracy and real-time protection.",
      price: "$8,500/month",
      rating: 4.8,
      reviews: 89,
      users: 67,
      features: ["AI threat detection", "Real-time response", "Zero-day protection", "Compliance ready"],
      image: "🛡️",
      badge: "Best Seller",
      vendor: "SecureAI Systems",
      deployment: "Cloud & Hybrid",
      support: "24/7 Security Support"
    },
    {
      id: 3,
      name: "Edge Computing Platform",
      category: "iot",
      description: "Ultra-low latency edge computing solution with 90% latency reduction and real-time data processing.",
      price: "$9,500/month",
      rating: 4.7,
      reviews: 156,
      users: 89,
      features: ["Edge processing", "Low latency", "Real-time analytics", "Scalable infrastructure"],
      image: "⚡",
      badge: "Trending",
      vendor: "EdgeFlow Technologies",
      deployment: "Edge & Cloud",
      support: "Business Hours Support"
    },
    {
      id: 4,
      name: "AI Healthcare Analytics",
      category: "healthcare",
      description: "Comprehensive AI-powered healthcare analytics platform for predictive diagnostics and patient care optimization.",
      price: "$12,000/month",
      rating: 4.9,
      reviews: 78,
      users: 34,
      features: ["Predictive analytics", "Patient monitoring", "Diagnostic support", "HIPAA compliant"],
      image: "🏥",
      badge: "New",
      vendor: "HealthAI Innovations",
      deployment: "Cloud & On-Premise",
      support: "24/7 Healthcare Support"
    },
    {
      id: 5,
      name: "Blockchain AI Platform",
      category: "blockchain",
      description: "Next-generation blockchain platform with AI optimization for smart contracts and decentralized applications.",
      price: "$6,500/month",
      rating: 4.6,
      reviews: 78,
      users: 23,
      features: ["Blockchain security", "AI optimization", "Supply chain tracking", "Smart contracts"],
      image: "🔗",
      badge: "Innovative",
      vendor: "ChainAI Solutions",
      deployment: "Cloud & Hybrid",
      support: "Business Hours Support"
    },
    {
      id: 6,
      name: "Cloud Cost Optimization",
      category: "cloud",
      description: "Intelligent cloud cost management platform with AI-driven optimization and automated resource scaling.",
      price: "$3,500/month",
      rating: 4.7,
      reviews: 156,
      users: 156,
      features: ["Cost optimization", "Resource management", "Budget tracking", "Automated scaling"],
      image: "☁️",
      badge: "Cost Effective",
      vendor: "CloudOpt Solutions",
      deployment: "Multi-Cloud",
      support: "24/7 Cloud Support"
    }
  ];

  const filteredSolutions = solutions.filter(solution => {
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedSolutions = [...filteredSolutions].sort((a, b) => {
=======
  ShoppingCart, 
  Eye, 
  Download, 
  Play, 
  BookOpen, 
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
  Settings as Cog,
  FileText,
  Video,
  Headphones,
  Calendar,
  Clock,
  DollarSign,
  Percent,
  Tag,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  HelpCircle,
  Info,
  AlertTriangle,
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
  Scissors,
  Printer,
  Share2,
  Bookmark,
  Flag,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  MessageSquare,
  Bell,
  AlertCircle,
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
  Play as PlayIcon,
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

interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  downloads: number;
  image: string;
  tags: string[];
  featured?: boolean;
  new?: boolean;
  trending?: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  count: number;
}

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const categories: Category[] = [
    { id: 'all', name: 'All Items', icon: Store, count: 156 },
    { id: 'ai-tools', name: 'AI Tools', icon: Bot, count: 23 },
    { id: 'cloud-services', name: 'Cloud Services', icon: Cloud, count: 18 },
    { id: 'security', name: 'Security', icon: Shield, count: 15 },
    { id: 'data-analytics', name: 'Data Analytics', icon: BarChart3, count: 12 },
    { id: 'mobile-apps', name: 'Mobile Apps', icon: Smartphone, count: 9 },
    { id: 'web-tools', name: 'Web Tools', icon: Globe, count: 14 },
    { id: 'automation', name: 'Automation', icon: Zap, count: 11 }
  ];

  const marketplaceItems: MarketplaceItem[] = [
    {
      id: '1',
      title: 'AI Business Intelligence Suite',
      description: 'Comprehensive AI-powered business intelligence platform with advanced analytics and reporting capabilities.',
      category: 'ai-tools',
      price: 299,
      rating: 4.8,
      reviews: 124,
      downloads: 2156,
      image: '/images/marketplace/ai-bi-suite.jpg',
      tags: ['AI', 'Business Intelligence', 'Analytics', 'Reporting'],
      featured: true,
      trending: true
    },
    {
      id: '2',
      title: 'Cloud Security Manager',
      description: 'Enterprise-grade cloud security management tool with real-time threat detection and compliance monitoring.',
      category: 'security',
      price: 199,
      rating: 4.9,
      reviews: 89,
      downloads: 1876,
      image: '/images/marketplace/cloud-security.jpg',
      tags: ['Security', 'Cloud', 'Compliance', 'Threat Detection'],
      featured: true
    },
    {
      id: '3',
      title: 'Data Pipeline Orchestrator',
      description: 'Advanced data pipeline management tool for ETL processes and real-time data streaming.',
      category: 'data-analytics',
      price: 149,
      rating: 4.7,
      reviews: 67,
      downloads: 1432,
      image: '/images/marketplace/data-pipeline.jpg',
      tags: ['Data', 'ETL', 'Streaming', 'Pipeline'],
      new: true
    },
    {
      id: '4',
      title: 'Mobile App Analytics Dashboard',
      description: 'Comprehensive mobile app analytics and user behavior tracking platform.',
      category: 'mobile-apps',
      price: 99,
      rating: 4.6,
      reviews: 45,
      downloads: 987,
      image: '/images/marketplace/mobile-analytics.jpg',
      tags: ['Mobile', 'Analytics', 'User Behavior', 'Tracking']
    },
    {
      id: '5',
      title: 'Web Performance Optimizer',
      description: 'AI-powered web performance optimization tool with automated testing and optimization recommendations.',
      category: 'web-tools',
      price: 179,
      rating: 4.8,
      reviews: 78,
      downloads: 1654,
      image: '/images/marketplace/web-performance.jpg',
      tags: ['Web', 'Performance', 'Optimization', 'AI'],
      trending: true
    },
    {
      id: '6',
      title: 'Workflow Automation Engine',
      description: 'Powerful workflow automation platform with drag-and-drop interface and extensive integration capabilities.',
      category: 'automation',
      price: 129,
      rating: 4.7,
      reviews: 56,
      downloads: 1234,
      image: '/images/marketplace/workflow-automation.jpg',
      tags: ['Automation', 'Workflow', 'Integration', 'Drag & Drop']
    }
  ];

  const allTags = Array.from(new Set(marketplaceItems.flatMap(item => item.tags)));

  const filteredItems = marketplaceItems.filter(item => {
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => item.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesPrice && matchesTags;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'downloads':
        return b.downloads - a.downloads;
      case 'newest':
        return a.id.localeCompare(b.id);
      default:
<<<<<<< HEAD
        return b.reviews - a.reviews; // popularity
    }
  });

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Most Popular':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Best Seller':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'Trending':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'New':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Innovative':
        return 'bg-gradient-to-r from-indigo-500 to-purple-500';
      case 'Cost Effective':
        return 'bg-gradient-to-r from-teal-500 to-green-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
=======
        return b.downloads - a.downloads; // popular
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
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange([0, 1000]);
    setSelectedTags([]);
    setSortBy('popular');
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  };

  return (
    <>
      <SEO 
        title="Marketplace - Zion Tech Group"
        description="Discover and download innovative tools, services, and solutions from Zion Tech Group's marketplace. AI tools, cloud services, security solutions, and more."
        keywords="marketplace, tools, services, AI, cloud, security, data analytics, mobile apps, Zion Tech Group"
      />
      
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Header Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                <Globe className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">Technology Marketplace</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technology Solutions Marketplace
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover cutting-edge AI, quantum computing, cybersecurity, and cloud solutions 
                from leading technology vendors. All solutions are vetted and enterprise-ready.
=======
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Marketplace{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Store
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Discover innovative tools, services, and solutions to accelerate your business growth. 
                From AI-powered applications to enterprise security solutions.
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </p>
              
              {/* Search Form */}
              <form className="max-w-2xl mx-auto">
                <div className="relative">
<<<<<<< HEAD
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search solutions, vendors, or technologies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
=======
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search tools, services, or solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                  />
                </div>
              </form>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Categories Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Sort Options */}
=======
        {/* Filters and Controls */}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-4">
                {/* View Mode Toggle */}
                <div className="flex bg-white/10 rounded-lg p-1 border border-white/20">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-300 ${
                      viewMode === 'grid'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-300 ${
                      viewMode === 'list'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
<<<<<<< HEAD
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
=======
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="downloads">Most Downloaded</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>

                {/* Clear Filters */}
                {(searchQuery || selectedCategory !== 'all' || selectedTags.length > 0 || priceRange[1] !== 1000) && (
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
<<<<<<< HEAD
              
              <div className="text-slate-300">
                {filteredSolutions.length} solutions found
=======
            </div>

            {/* Advanced Filters */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Price Range */}
                <div className="flex-1">
                  <label className="block text-white font-medium mb-2">Price Range</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-20 bg-white/10 border border-white/20 text-white rounded px-2 py-1 text-sm focus:outline-none focus:border-cyan-400"
                    />
                    <span className="text-gray-400">to</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                      className="w-20 bg-white/10 border border-white/20 text-white rounded px-2 py-1 text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                {/* Tags Filter */}
                <div className="flex-1">
                  <label className="block text-white font-medium mb-2">Tags</label>
                  <div className="flex flex-wrap gap-2">
                    {allTags.slice(0, 8).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                          selectedTags.includes(tag)
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                    {allTags.length > 8 && (
                      <span className="text-gray-400 text-xs px-3 py-1">
                        +{allTags.length - 8} more
                      </span>
                    )}
                  </div>
                </div>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredSolutions.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Globe className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No solutions found</h3>
                <p className="text-slate-400">
                  Try adjusting your search terms or category filter.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{solution.image}</div>
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getBadgeColor(solution.badge)}`}>
                            {solution.badge}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                            <span className="text-purple-400 text-sm font-medium">
                              {getCategoryName(solution.category)}
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {solution.name}
                        </h3>
                        
                        <p className="text-slate-300 leading-relaxed">
                          {solution.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-cyan-400">
                            {solution.price}
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="text-white font-medium">{solution.rating}</span>
                            <span className="text-slate-400 text-sm">({solution.reviews})</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {solution.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Vendor:</span>
                          <span className="text-white">{solution.vendor}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Deployment:</span>
                          <span className="text-white">{solution.deployment}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Support:</span>
                          <span className="text-white">{solution.support}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{solution.users} users</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </button>
                        <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 py-3 px-4 rounded-lg transition-all duration-300">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
=======
        {/* Results Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {filteredItems.length} {filteredItems.length === 1 ? 'Item' : 'Items'} Found
                </h2>
                {searchQuery && (
                  <p className="text-gray-400 mt-1">
                    Results for "{searchQuery}"
                  </p>
                )}
              </div>
              <div className="text-gray-400">
                Showing {sortedItems.length} of {marketplaceItems.length} total items
              </div>
            </div>

            {/* Items Grid/List */}
            {sortedItems.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-4'
              }>
                {sortedItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 ${
                      viewMode === 'list' ? 'p-6' : 'p-6'
                    }`}
                  >
                    {/* Item Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {item.featured && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                              Featured
                            </span>
                          )}
                          {item.new && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                              New
                            </span>
                          )}
                          {item.trending && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                              Trending
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Item Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{item.rating}</span>
                          <span>({item.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          <span>{item.downloads.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        ${item.price}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="text-gray-400 text-xs px-2 py-1">
                          +{item.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Get Now
                      </button>
                      <button className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No items found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Clear All Filters
                </button>
              </motion.div>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            )}
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
                Can't Find What You Need?
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Our technology experts can help you find the perfect solution or even 
                develop a custom solution tailored to your specific needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Get Custom Recommendation
                </button>
                
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Talk to Our Experts
                </button>
=======
              <p className="text-xl text-gray-300 mb-8">
                Looking for a custom solution or have specific requirements? 
                Our team can help you build exactly what you need.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Request Custom Solution
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  📞 Call Now
                </a>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

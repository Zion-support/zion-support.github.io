import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import {
  Store,
  Search,
  Filter,
  Grid,
  List,
  Star,
  Heart,
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
  BarChart,
  PieChart,
  LineChart,
  Settings as Cog,
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

interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  downloads: number;
  author: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  tags: string[];
  features: string[];
  compatibility: string[];
  lastUpdated: string;
  version: string;
  size: string;
  license: string;
  featured: boolean;
  trending: boolean;
  new: boolean;
  sale: boolean;
  salePercentage?: number;
  image: string;
  demoUrl?: string;
  documentationUrl?: string;
  supportUrl?: string;
}

const Marketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const categories = [
    {
      id: 'ai-tools',
      name: 'AI Tools',
      icon: Bot,
      subcategories: [
        { id: 'chatbots', name: 'Chatbots' },
        { id: 'content-generation', name: 'Content Generation' },
        { id: 'data-analysis', name: 'Data Analysis' },
        { id: 'image-generation', name: 'Image Generation' },
        { id: 'language-processing', name: 'Language Processing' }
      ]
    },
    {
      id: 'development',
      name: 'Development',
      icon: Code,
      subcategories: [
        { id: 'frameworks', name: 'Frameworks' },
        { id: 'libraries', name: 'Libraries' },
        { id: 'tools', name: 'Development Tools' },
        { id: 'apis', name: 'APIs' },
        { id: 'templates', name: 'Templates' }
      ]
    },
    {
      id: 'cloud-services',
      name: 'Cloud Services',
      icon: Cloud,
      subcategories: [
        { id: 'hosting', name: 'Hosting' },
        { id: 'storage', name: 'Storage' },
        { id: 'databases', name: 'Databases' },
        { id: 'monitoring', name: 'Monitoring' },
        { id: 'security', name: 'Security' }
      ]
    },
    {
      id: 'business-tools',
      name: 'Business Tools',
      icon: Briefcase,
      subcategories: [
        { id: 'analytics', name: 'Analytics' },
        { id: 'crm', name: 'CRM' },
        { id: 'marketing', name: 'Marketing' },
        { id: 'productivity', name: 'Productivity' },
        { id: 'communication', name: 'Communication' }
      ]
    }
  ];

  const marketplaceItems: MarketplaceItem[] = [
    {
      id: 'ai-chatbot-pro',
      title: 'AI Chatbot Pro',
      description: 'Advanced AI-powered chatbot with natural language processing and multi-platform integration.',
      category: 'ai-tools',
      subcategory: 'chatbots',
      price: 299,
      currency: '$',
      originalPrice: 399,
      rating: 4.8,
      reviewCount: 1247,
      downloads: 15420,
      author: {
        name: 'Zion Tech Group',
        avatar: '/avatars/zion-tech.png',
        verified: true
      },
      tags: ['AI', 'Chatbot', 'NLP', 'Multi-platform', 'Integration'],
      features: [
        'Natural language processing',
        'Multi-platform support',
        'Custom training',
        'Analytics dashboard',
        'API integration'
      ],
      compatibility: ['Web', 'Mobile', 'Desktop'],
      lastUpdated: '2024-01-15',
      version: '2.1.0',
      size: '45MB',
      license: 'Commercial',
      featured: true,
      trending: true,
      new: false,
      sale: true,
      salePercentage: 25,
      image: '/marketplace/ai-chatbot-pro.png',
      demoUrl: 'https://demo.ziontechgroup.com/ai-chatbot',
      documentationUrl: 'https://docs.ziontechgroup.com/ai-chatbot',
      supportUrl: 'https://support.ziontechgroup.com/ai-chatbot'
    },
    {
      id: 'cloud-analytics-suite',
      title: 'Cloud Analytics Suite',
      description: 'Comprehensive analytics platform for cloud infrastructure monitoring and optimization.',
      category: 'cloud-services',
      subcategory: 'analytics',
      price: 199,
      currency: '$',
      rating: 4.9,
      reviewCount: 892,
      downloads: 8765,
      author: {
        name: 'Zion Tech Group',
        avatar: '/avatars/zion-tech.png',
        verified: true
      },
      tags: ['Analytics', 'Cloud', 'Monitoring', 'Optimization', 'Real-time'],
      features: [
        'Real-time monitoring',
        'Performance analytics',
        'Cost optimization',
        'Alert system',
        'Custom dashboards'
      ],
      compatibility: ['AWS', 'Azure', 'Google Cloud'],
      lastUpdated: '2024-01-10',
      version: '1.8.2',
      size: '32MB',
      license: 'Commercial',
      featured: true,
      trending: false,
      new: false,
      sale: false,
      image: '/marketplace/cloud-analytics.png',
      demoUrl: 'https://demo.ziontechgroup.com/cloud-analytics',
      documentationUrl: 'https://docs.ziontechgroup.com/cloud-analytics'
    },
    {
      id: 'react-ui-kit',
      title: 'React UI Kit Pro',
      description: 'Premium React component library with 200+ customizable components and themes.',
      category: 'development',
      subcategory: 'libraries',
      price: 149,
      currency: '$',
      originalPrice: 199,
      rating: 4.7,
      reviewCount: 2156,
      downloads: 28940,
      author: {
        name: 'Zion Tech Group',
        avatar: '/avatars/zion-tech.png',
        verified: true
      },
      tags: ['React', 'UI Components', 'TypeScript', 'Responsive', 'Accessible'],
      features: [
        '200+ components',
        'TypeScript support',
        'Responsive design',
        'Accessibility compliant',
        'Custom themes'
      ],
      compatibility: ['React 18+', 'TypeScript', 'Next.js'],
      lastUpdated: '2024-01-12',
      version: '3.2.1',
      size: '28MB',
      license: 'Commercial',
      featured: false,
      trending: true,
      new: false,
      sale: true,
      salePercentage: 25,
      image: '/marketplace/react-ui-kit.png',
      demoUrl: 'https://demo.ziontechgroup.com/react-ui-kit',
      documentationUrl: 'https://docs.ziontechgroup.com/react-ui-kit'
    }
  ];

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : Store;
  };

  const getSubcategories = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.subcategories : [];
  };

  const filteredItems = marketplaceItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'all' || item.subcategory === selectedSubcategory;
    
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => item.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice && matchesTags;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const allTags = Array.from(new Set(marketplaceItems.flatMap(item => item.tags)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Marketplace - Zion Tech Group"
        description="Discover and download premium AI tools, development libraries, cloud services, and business solutions from Zion Tech Group."
        keywords="marketplace, AI tools, development libraries, cloud services, business tools, Zion Tech Group"
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
              Marketplace
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover premium AI tools, development libraries, cloud services, and business solutions 
              to accelerate your projects and drive innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search marketplace..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setSelectedSubcategory('all');
                  }}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subcategory</label>
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Subcategories</option>
                  {getSubcategories(selectedCategory).map(subcategory => (
                    <option key={subcategory.id} value={subcategory.id}>
                      {subcategory.name}
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
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* View Mode and Price Range */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2">
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

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-300 text-sm">Price Range:</span>
                <span className="text-white text-sm">${priceRange[0]} - ${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-32"
              />
            </div>
          </motion.div>

          {/* Tags Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <label className="block text-sm font-medium text-gray-300 mb-2">Filter by Tags</label>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 10).map(tag => (
                <button
                  key={tag}
                  onClick={() => {
                    if (selectedTags.includes(tag)) {
                      setSelectedTags(selectedTags.filter(t => t !== tag));
                    } else {
                      setSelectedTags([...selectedTags, tag]);
                    }
                  }}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marketplace Items */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and highly-rated products, carefully curated to help you 
              build better applications and grow your business.
            </p>
          </motion.div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-600/20 hover:border-slate-500/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                    <div className="absolute top-4 left-4">
                      {item.featured && (
                        <span className="px-2 py-1 bg-yellow-500 text-yellow-900 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                      {item.new && (
                        <span className="px-2 py-1 bg-green-500 text-green-900 text-xs font-medium rounded-full ml-2">
                          New
                        </span>
                      )}
                      {item.sale && (
                        <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full ml-2">
                          {item.salePercentage}% OFF
                        </span>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="p-2 bg-slate-800/50 rounded-full text-gray-400 hover:text-white transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{item.rating}</span>
                        <span className="text-gray-400 text-sm">({item.reviewCount})</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Download className="w-4 h-4" />
                        <span>{item.downloads.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded">
                          +{item.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.author.avatar}
                          alt={item.author.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-gray-300 text-sm">{item.author.name}</span>
                        {item.author.verified && (
                          <CheckCircle className="w-4 h-4 text-blue-400" />
                        )}
                      </div>
                      <div className="text-right">
                        {item.sale && item.originalPrice ? (
                          <div>
                            <span className="text-gray-400 text-sm line-through">${item.originalPrice}</span>
                            <span className="text-white font-bold ml-2">${item.price}</span>
                          </div>
                        ) : (
                          <span className="text-white font-bold">${item.price}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                        <ShoppingCart className="w-4 h-4 inline mr-2" />
                        Add to Cart
                      </button>
                      <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-600/20 hover:border-slate-500/40 transition-all duration-300 p-6"
                >
                  <div className="flex gap-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex-shrink-0" />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                          <p className="text-gray-300 mb-2">{item.description}</p>
                        </div>
                        <div className="text-right">
                          {item.sale && item.originalPrice ? (
                            <div>
                              <span className="text-gray-400 text-sm line-through">${item.originalPrice}</span>
                              <span className="text-white font-bold text-lg ml-2">${item.price}</span>
                            </div>
                          ) : (
                            <span className="text-white font-bold text-lg">${item.price}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{item.rating}</span>
                          <span className="text-gray-400 text-sm">({item.reviewCount})</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-sm">
                          <Download className="w-4 h-4" />
                          <span>{item.downloads.toLocaleString()} downloads</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>Updated {new Date(item.lastUpdated).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={item.author.avatar}
                            alt={item.author.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-gray-300 text-sm">{item.author.name}</span>
                          {item.author.verified && (
                            <CheckCircle className="w-4 h-4 text-blue-400" />
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                            <ShoppingCart className="w-4 h-4 inline mr-2" />
                            Add to Cart
                          </button>
                          <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {sortedItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center py-12"
            >
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-300 text-lg">No products found matching your criteria.</p>
              <p className="text-gray-400 text-sm">Try adjusting your search terms or filters.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're constantly adding new products to our marketplace. Contact us to request 
              custom solutions or suggest new products you'd like to see.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Request Custom Solution
              </Link>
              <a
                href="mailto:marketplace@ziontechgroup.com?subject=Product Request"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Suggest Product
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;

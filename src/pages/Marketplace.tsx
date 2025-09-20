import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
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
  Heart as HeartIcon,
  HeartOff,
  HeartHandshake,
  Gift,
  CreditCard,
  Wallet,
  Receipt,
  Calculator,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  ScatterChart,
  Radar,
  Gauge,
  Thermometer,
  Droplets,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Wind,
  Umbrella,
  Snowflake,
  Fire,
  Leaf,
  Tree,
  Flower,
  Seedling,
  Sprout,
  Plant,
  TreePine,
  Mountain,
  MountainSnow,
  Volcano,
  Island,
  Beach,
  Desert,
  Forest,
  Jungle,
  Ocean,
  River,
  Lake,
  Water,
  Fish,
  Bird,
  Cat,
  Dog,
  Horse,
  Cow,
  Pig,
  Sheep,
  Goat,
  Chicken,
  Duck,
  Turkey,
  Eagle,
  Hawk,
  Owl,
  Crow,
  Sparrow,
  Robin,
  Bluebird,
  Cardinal,
  Goldfinch,
  Hummingbird,
  Woodpecker,
  Seagull,
  Pelican,
  Flamingo,
  Penguin,
  Ostrich,
  Emu,
  Kiwi,
  Toucan,
  Parrot,
  Macaw,
  Cockatoo,
  Canary,
  Finch,
  Sparrow,
  Robin,
  Bluebird,
  Cardinal,
  Goldfinch,
  Hummingbird,
  Woodpecker,
  Seagull,
  Pelican,
  Flamingo,
  Penguin,
  Ostrich,
  Emu,
  Kiwi,
  Toucan,
  Parrot,
  Macaw,
  Cockatoo,
  Canary,
  Finch
} from 'lucide-react';

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Categories', count: 48 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 12 },
    { id: 'cloud', name: 'Cloud Solutions', count: 8 },
    { id: 'security', name: 'Security & Compliance', count: 6 },
    { id: 'data', name: 'Data & Analytics', count: 7 },
    { id: 'development', name: 'Development Tools', count: 9 },
    { id: 'hardware', name: 'Hardware & Equipment', count: 6 }
  ];

  const types = [
    { id: 'all', name: 'All Types', count: 48 },
    { id: 'software', name: 'Software', count: 25 },
    { id: 'service', name: 'Services', count: 15 },
    { id: 'hardware', name: 'Hardware', count: 8 }
  ];

  const marketplaceItems = [
    // AI & Machine Learning
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot Platform',
      category: 'ai-ml',
      type: 'software',
      icon: Bot,
      description: 'Intelligent chatbot platform with natural language processing',
      features: [
        'Natural language understanding',
        'Multi-language support',
        'Integration APIs',
        'Analytics dashboard',
        'Custom training models',
        '24/7 availability'
      ],
      pricing: '$299/month',
      rating: 4.8,
      reviews: 156,
      downloads: 1247,
      status: 'featured',
      tags: ['AI', 'Chatbot', 'NLP', 'Automation'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/ai-chatbot',
      documentation: 'https://docs.ziontechgroup.com/ai-chatbot'
    },
    {
      id: 'ml-pipeline',
      name: 'ML Pipeline Automation',
      category: 'ai-ml',
      type: 'software',
      icon: BarChart3,
      description: 'Automated machine learning pipeline for data scientists',
      features: [
        'AutoML capabilities',
        'Model versioning',
        'A/B testing',
        'Performance monitoring',
        'Scalable infrastructure',
        'Cloud deployment'
      ],
      pricing: '$499/month',
      rating: 4.9,
      reviews: 89,
      downloads: 567,
      status: 'popular',
      tags: ['Machine Learning', 'Automation', 'Data Science', 'MLOps'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/ml-pipeline',
      documentation: 'https://docs.ziontechgroup.com/ml-pipeline'
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision API',
      category: 'ai-ml',
      type: 'service',
      icon: Eye,
      description: 'Advanced computer vision services for image and video analysis',
      features: [
        'Object detection',
        'Face recognition',
        'Image classification',
        'Video analysis',
        'Real-time processing',
        'Custom model training'
      ],
      pricing: '$0.01 per image',
      rating: 4.7,
      reviews: 203,
      downloads: 892,
      status: 'trending',
      tags: ['Computer Vision', 'AI', 'Image Processing', 'Video Analysis'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/computer-vision',
      documentation: 'https://docs.ziontechgroup.com/computer-vision'
    },
    // Cloud Solutions
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Service',
      category: 'cloud',
      type: 'service',
      icon: Cloud,
      description: 'Professional cloud migration and optimization services',
      features: [
        'Infrastructure assessment',
        'Migration planning',
        'Data migration',
        'Performance optimization',
        'Cost optimization',
        'Ongoing support'
      ],
      pricing: 'Starting from $15,000',
      rating: 4.9,
      reviews: 67,
      downloads: 234,
      status: 'featured',
      tags: ['Cloud Migration', 'AWS', 'Azure', 'GCP', 'DevOps'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/cloud-migration',
      documentation: 'https://docs.ziontechgroup.com/cloud-migration'
    },
    {
      id: 'kubernetes-manager',
      name: 'Kubernetes Management Platform',
      category: 'cloud',
      type: 'software',
      icon: Server,
      description: 'Enterprise-grade Kubernetes cluster management solution',
      features: [
        'Multi-cluster management',
        'Auto-scaling',
        'Monitoring & alerting',
        'Security policies',
        'Backup & recovery',
        'Cost optimization'
      ],
      pricing: '$199/month',
      rating: 4.8,
      reviews: 134,
      downloads: 456,
      status: 'popular',
      tags: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Cloud Native'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/kubernetes-manager',
      documentation: 'https://docs.ziontechgroup.com/kubernetes-manager'
    },
    // Security & Compliance
    {
      id: 'threat-detection',
      name: 'Advanced Threat Detection',
      category: 'security',
      type: 'software',
      icon: Shield,
      description: 'AI-powered threat detection and response system',
      features: [
        'Real-time monitoring',
        'Behavioral analysis',
        'Threat intelligence',
        'Automated response',
        'Compliance reporting',
        '24/7 SOC support'
      ],
      pricing: '$399/month',
      rating: 4.9,
      reviews: 178,
      downloads: 678,
      status: 'featured',
      tags: ['Cybersecurity', 'Threat Detection', 'AI Security', 'SOC'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/threat-detection',
      documentation: 'https://docs.ziontechgroup.com/threat-detection'
    },
    {
      id: 'compliance-audit',
      name: 'Compliance Audit Service',
      category: 'security',
      type: 'service',
      icon: CheckCircle,
      description: 'Comprehensive compliance auditing and certification services',
      features: [
        'SOC 2 Type II',
        'ISO 27001',
        'GDPR compliance',
        'HIPAA assessment',
        'PCI DSS validation',
        'Ongoing monitoring'
      ],
      pricing: 'Starting from $25,000',
      rating: 4.8,
      reviews: 45,
      downloads: 123,
      status: 'popular',
      tags: ['Compliance', 'Security', 'Audit', 'Certification'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/compliance-audit',
      documentation: 'https://docs.ziontechgroup.com/compliance-audit'
    },
    // Data & Analytics
    {
      id: 'data-warehouse',
      name: 'Data Warehouse Solution',
      category: 'data',
      type: 'software',
      icon: Database,
      description: 'Scalable data warehouse with advanced analytics',
      features: [
        'Multi-cloud support',
        'Real-time processing',
        'Advanced analytics',
        'Data governance',
        'Security & encryption',
        'Auto-scaling'
      ],
      pricing: '$599/month',
      rating: 4.7,
      reviews: 92,
      downloads: 345,
      status: 'trending',
      tags: ['Data Warehouse', 'Big Data', 'Analytics', 'Business Intelligence'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/data-warehouse',
      documentation: 'https://docs.ziontechgroup.com/data-warehouse'
    },
    {
      id: 'bi-dashboard',
      name: 'Business Intelligence Dashboard',
      category: 'data',
      type: 'software',
      icon: BarChart3,
      description: 'Interactive BI dashboard for data visualization',
      features: [
        'Drag & drop interface',
        'Real-time data',
        'Custom widgets',
        'Mobile responsive',
        'Export capabilities',
        'Collaboration tools'
      ],
      pricing: '$149/month',
      rating: 4.6,
      reviews: 167,
      downloads: 789,
      status: 'popular',
      tags: ['Business Intelligence', 'Dashboard', 'Data Visualization', 'Analytics'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/bi-dashboard',
      documentation: 'https://docs.ziontechgroup.com/bi-dashboard'
    },
    // Development Tools
    {
      id: 'code-generator',
      name: 'AI Code Generator',
      category: 'development',
      type: 'software',
      icon: Code,
      description: 'AI-powered code generation and assistance tool',
      features: [
        'Multi-language support',
        'Code completion',
        'Bug detection',
        'Documentation generation',
        'Code review',
        'Integration with IDEs'
      ],
      pricing: '$99/month',
      rating: 4.8,
      reviews: 234,
      downloads: 1234,
      status: 'trending',
      tags: ['Code Generation', 'AI', 'Development', 'Productivity'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/code-generator',
      documentation: 'https://docs.ziontechgroup.com/code-generator'
    },
    {
      id: 'api-gateway',
      name: 'API Gateway Platform',
      category: 'development',
      type: 'software',
      icon: Network,
      description: 'Enterprise API gateway with advanced management features',
      features: [
        'Rate limiting',
        'Authentication',
        'Monitoring & analytics',
        'Version management',
        'Documentation',
        'Developer portal'
      ],
      pricing: '$299/month',
      rating: 4.7,
      reviews: 156,
      downloads: 567,
      status: 'featured',
      tags: ['API Gateway', 'Microservices', 'API Management', 'Developer Tools'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/api-gateway',
      documentation: 'https://docs.ziontechgroup.com/api-gateway'
    },
    // Hardware & Equipment
    {
      id: 'edge-computing',
      name: 'Edge Computing Device',
      category: 'hardware',
      type: 'hardware',
      icon: Cpu,
      description: 'High-performance edge computing device for IoT applications',
      features: [
        'Intel i7 processor',
        '16GB RAM',
        '512GB SSD',
        'Dual network ports',
        'Industrial grade',
        '5-year warranty'
      ],
      pricing: '$1,299',
      rating: 4.9,
      reviews: 78,
      downloads: 234,
      status: 'featured',
      tags: ['Edge Computing', 'IoT', 'Hardware', 'Industrial'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/edge-computing',
      documentation: 'https://docs.ziontechgroup.com/edge-computing'
    },
    {
      id: 'network-switch',
      name: 'Enterprise Network Switch',
      category: 'hardware',
      type: 'hardware',
      icon: Network,
      description: 'High-speed network switch for enterprise environments',
      features: [
        '48-port Gigabit',
        'PoE+ support',
        'VLAN management',
        'QoS features',
        'SNMP monitoring',
        'Lifetime warranty'
      ],
      pricing: '$899',
      rating: 4.8,
      reviews: 123,
      downloads: 456,
      status: 'popular',
      tags: ['Networking', 'Switch', 'Enterprise', 'PoE'],
      image: '/api/placeholder/400/300',
      demo: 'https://demo.ziontechgroup.com/network-switch',
      documentation: 'https://docs.ziontechgroup.com/network-switch'
    }
  ];

  const featuredItems = marketplaceItems.filter(item => item.status === 'featured');
  const popularItems = marketplaceItems.filter(item => item.status === 'popular');
  const trendingItems = marketplaceItems.filter(item => item.status === 'trending');

  const toggleItemExpansion = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const filteredItems = marketplaceItems.filter(item => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (selectedType !== 'all' && item.type !== selectedType) return false;
    if (searchQuery) {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return true;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai-ml': return 'bg-purple-500/20 text-purple-400';
      case 'cloud': return 'bg-blue-500/20 text-blue-400';
      case 'security': return 'bg-red-500/20 text-red-400';
      case 'data': return 'bg-green-500/20 text-green-400';
      case 'development': return 'bg-orange-500/20 text-orange-400';
      case 'hardware': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'software': return 'bg-blue-500/20 text-blue-400';
      case 'service': return 'bg-green-500/20 text-green-400';
      case 'hardware': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'featured': return 'bg-yellow-500/20 text-yellow-400';
      case 'popular': return 'bg-blue-500/20 text-blue-400';
      case 'trending': return 'bg-green-500/20 text-green-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-current" />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-400" />);
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Marketplace - Zion Tech Group"
        description="Discover innovative technology solutions, software, services, and hardware in our comprehensive marketplace. Find the perfect tools for your business needs."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">
              <Store className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Marketplace</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover innovative solutions, cutting-edge software, professional services, 
              and enterprise hardware to accelerate your digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search marketplace items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                >
                  {types.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name} ({type.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-green-400/20 text-green-400' 
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-green-400/20 text-green-400' 
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Solutions</h2>
            <p className="text-xl text-gray-300">Handpicked solutions for enterprise success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {categories.find(c => c.id === item.category)?.name}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {types.find(t => t.id === item.type)?.name}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                        <item.icon className="w-6 h-6 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-200">
                        {item.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        {renderStars(item.rating)}
                        <span className="text-gray-400 ml-1">({item.reviews})</span>
                      </div>
                      <div className="text-gray-400">•</div>
                      <div className="text-gray-400">{item.downloads} downloads</div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-green-400">{item.pricing}</div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => toggleItemExpansion(item.id)}
                      className="w-full px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                    >
                      {expandedItem === item.id ? 'Show Less' : 'Learn More'}
                    </button>
                    
                    {expandedItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-slate-600/50"
                      >
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {item.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2">
                          <a
                            href={item.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-3 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-500/30 transition-all duration-200 text-center"
                          >
                            <Play className="w-4 h-4 inline mr-1" />
                            Demo
                          </a>
                          <a
                            href={item.documentation}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-3 py-2 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-lg hover:bg-purple-500/30 transition-all duration-200 text-center"
                          >
                            <BookOpen className="w-4 h-4 inline mr-1" />
                            Docs
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Marketplace Items */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Marketplace Items</h2>
            <p className="text-xl text-gray-300">
              Browse our complete collection of technology solutions
            </p>
          </motion.div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                          {categories.find(c => c.id === item.category)?.name}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                          {types.find(t => t.id === item.type)?.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg">
                          <item.icon className="w-5 h-5 text-green-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-200">
                          {item.name}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center gap-2 mb-3 text-xs">
                        <div className="flex items-center gap-1">
                          {renderStars(item.rating)}
                          <span className="text-gray-400">({item.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-lg font-bold text-green-400">{item.pricing}</div>
                        <div className="flex items-center gap-1">
                          <button className="p-1 text-gray-400 hover:text-white transition-colors duration-200">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-white transition-colors duration-200">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="w-full px-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                          <item.icon className="w-8 h-8 text-green-400" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                            {categories.find(c => c.id === item.category)?.name}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                            {types.find(t => t.id === item.type)?.name}
                          </span>
                          {item.status !== 'regular' && (
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                              {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-200 mb-2">
                          {item.name}
                        </h3>
                        
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm mb-3">
                          <div className="flex items-center gap-1">
                            {renderStars(item.rating)}
                            <span className="text-gray-400 ml-1">({item.reviews})</span>
                          </div>
                          <div className="text-gray-400">•</div>
                          <div className="text-gray-400">{item.downloads} downloads</div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 text-right">
                        <div className="text-2xl font-bold text-green-400 mb-3">{item.pricing}</div>
                        <div className="flex items-center gap-2 mb-3">
                          <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                            <Heart className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                            <Eye className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                            <ShoppingCart className="w-5 h-5" />
                          </button>
                        </div>
                        <button className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can create custom solutions tailored to your specific needs. 
              Let's discuss your requirements and build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Request Custom Solution
              </button>
              <a
                href="mailto:marketplace@ziontechgroup.com"
                className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-200"
              >
                Contact Sales Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

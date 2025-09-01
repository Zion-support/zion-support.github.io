import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Search, 
=======
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search as SearchIcon, 
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
<<<<<<< HEAD
  ScatterChart,
  Radar,
  Gauge,
  Thermometer,
  Droplets,
  Sun,
  Moon,
  Cloud as CloudIcon,
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
  Finch
} from 'lucide-react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'All Categories', count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 0 },
    { id: 'cloud', name: 'Cloud Solutions', count: 0 },
    { id: 'security', name: 'Security & Compliance', count: 0 },
    { id: 'data', name: 'Data & Analytics', count: 0 },
    { id: 'development', name: 'Development Tools', count: 0 },
    { id: 'hardware', name: 'Hardware & Equipment', count: 0 },
    { id: 'services', name: 'Services', count: 0 },
    { id: 'blog', name: 'Blog Posts', count: 0 },
    { id: 'documentation', name: 'Documentation', count: 0 }
  ];

  const types = [
    { id: 'all', name: 'All Types', count: 0 },
    { id: 'software', name: 'Software', count: 0 },
    { id: 'service', name: 'Services', count: 0 },
    { id: 'hardware', name: 'Hardware', count: 0 },
    { id: 'article', name: 'Articles', count: 0 },
    { id: 'guide', name: 'Guides', count: 0 },
    { id: 'case-study', name: 'Case Studies', count: 0 }
  ];

  // Mock search data - in a real app, this would come from an API
  const mockSearchData = [
    // AI & Machine Learning
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Platform',
      category: 'ai-ml',
      type: 'software',
      icon: Bot,
      description: 'Intelligent chatbot platform with natural language processing capabilities for customer service automation.',
      content: 'Our AI chatbot platform leverages advanced natural language processing to provide human-like conversations. Features include multi-language support, sentiment analysis, and seamless integration with existing systems.',
      tags: ['AI', 'Chatbot', 'NLP', 'Automation', 'Customer Service'],
      url: '/marketplace/ai-chatbot',
      rating: 4.8,
      reviews: 156,
      date: '2024-01-15',
      author: 'Zion Tech Team',
      readTime: '5 min read'
    },
    {
      id: 'ml-pipeline',
      title: 'Machine Learning Pipeline Automation',
      category: 'ai-ml',
      type: 'software',
      icon: BarChart3,
      description: 'Automated machine learning pipeline for data scientists and ML engineers.',
      content: 'Streamline your machine learning workflows with our automated pipeline solution. Features include autoML capabilities, model versioning, A/B testing, and performance monitoring.',
      tags: ['Machine Learning', 'Automation', 'Data Science', 'MLOps', 'Pipeline'],
      url: '/marketplace/ml-pipeline',
      rating: 4.9,
      reviews: 89,
      date: '2024-01-10',
      author: 'AI Team',
      readTime: '8 min read'
    },
    // Cloud Solutions
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Service',
      category: 'cloud',
      type: 'service',
      icon: Cloud,
      description: 'Professional cloud migration and optimization services for enterprise organizations.',
      content: 'Our expert team provides comprehensive cloud migration services including infrastructure assessment, migration planning, data migration, and ongoing optimization.',
      tags: ['Cloud Migration', 'AWS', 'Azure', 'GCP', 'DevOps', 'Enterprise'],
      url: '/services/cloud-migration',
      rating: 4.9,
      reviews: 67,
      date: '2024-01-08',
      author: 'Cloud Team',
      readTime: '12 min read'
    },
    // Security & Compliance
    {
      id: 'threat-detection',
      title: 'Advanced Threat Detection System',
      category: 'security',
      type: 'software',
      icon: Shield,
      description: 'AI-powered threat detection and response system for enterprise security.',
      content: 'Protect your organization with our advanced threat detection system that uses machine learning to identify and respond to security threats in real-time.',
      tags: ['Cybersecurity', 'Threat Detection', 'AI Security', 'SOC', 'Enterprise'],
      url: '/marketplace/threat-detection',
      rating: 4.9,
      reviews: 178,
      date: '2024-01-12',
      author: 'Security Team',
      readTime: '10 min read'
    },
    // Data & Analytics
    {
      id: 'data-warehouse',
      title: 'Enterprise Data Warehouse Solution',
      category: 'data',
      type: 'software',
      icon: Database,
      description: 'Scalable data warehouse with advanced analytics and business intelligence capabilities.',
      content: 'Transform your data into actionable insights with our enterprise data warehouse solution. Features include real-time processing, advanced analytics, and multi-cloud support.',
      tags: ['Data Warehouse', 'Big Data', 'Analytics', 'Business Intelligence', 'Enterprise'],
      url: '/marketplace/data-warehouse',
      rating: 4.7,
      reviews: 92,
      date: '2024-01-05',
      author: 'Data Team',
      readTime: '15 min read'
    },
    // Development Tools
    {
      id: 'code-generator',
      title: 'AI-Powered Code Generator',
      category: 'development',
      type: 'software',
      icon: Code,
      description: 'Intelligent code generation and assistance tool for developers.',
      content: 'Boost your productivity with our AI-powered code generator that provides intelligent code completion, bug detection, and documentation generation.',
      tags: ['Code Generation', 'AI', 'Development', 'Productivity', 'IDE Integration'],
      url: '/marketplace/code-generator',
      rating: 4.8,
      reviews: 234,
      date: '2024-01-18',
      author: 'Dev Team',
      readTime: '6 min read'
    },
    // Blog Posts
    {
      id: 'ai-trends-2024',
      title: 'Top AI Trends to Watch in 2024',
      category: 'ai-ml',
      type: 'article',
      icon: TrendingUp,
      description: 'Explore the most significant artificial intelligence trends that will shape the technology landscape in 2024.',
      content: 'As we move into 2024, artificial intelligence continues to evolve at an unprecedented pace. From generative AI to autonomous systems, discover the key trends that will drive innovation and transformation across industries.',
      tags: ['AI Trends', '2024', 'Technology', 'Innovation', 'Future'],
      url: '/blog/ai-trends-2024',
      rating: 4.7,
      reviews: 45,
      date: '2024-01-20',
      author: 'AI Research Team',
      readTime: '12 min read'
    },
    {
      id: 'cloud-security-best-practices',
      title: 'Cloud Security Best Practices for 2024',
      category: 'security',
      type: 'guide',
      icon: Shield,
      description: 'Comprehensive guide to implementing robust cloud security measures in modern enterprise environments.',
      content: 'Learn the essential cloud security best practices that every organization should implement to protect their data and infrastructure in 2024.',
      tags: ['Cloud Security', 'Best Practices', 'Enterprise', 'Cybersecurity', 'Guide'],
      url: '/blog/cloud-security-best-practices-2024',
      rating: 4.8,
      reviews: 78,
      date: '2024-01-17',
      author: 'Security Team',
      readTime: '18 min read'
    }
  ];

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    }
  }, [searchQuery, setSearchParams]);

<<<<<<< HEAD
    // Set popular searches
    setPopularSearches([
      'AI solutions',
      'Cloud migration',
      'Cybersecurity',
      'Data analytics',
      'Machine learning',
      'DevOps services',
      'Green IT',
      'Digital transformation'
    ]);
  }, []);

  const performSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
=======
  const filteredResults = searchResults.filter(result => {
    const matchesSearch = !searchQuery || 
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    
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

<<<<<<< HEAD
    // Save to recent searches
    if (query.trim() && !recentSearches.includes(query.trim())) {
      const newRecent = [query.trim(), ...recentSearches.slice(0, 4)];
      setRecentSearches(newRecent);
      localStorage.setItem('recentSearches', JSON.stringify(newRecent));
    }
  };

=======
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by useEffect
  };

<<<<<<< HEAD
  const handleQuickSearch = (query: string) => {
    setSearchQuery(query);
    performSearch(query);
  };

  const toggleItemExpansion = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai-ml': return 'bg-purple-500/20 text-purple-400';
      case 'cloud': return 'bg-blue-500/20 text-blue-400';
      case 'security': return 'bg-red-500/20 text-red-400';
      case 'data': return 'bg-green-500/20 text-green-400';
      case 'development': return 'bg-orange-500/20 text-orange-400';
      case 'hardware': return 'bg-gray-500/20 text-gray-400';
      case 'services': return 'bg-cyan-500/20 text-cyan-400';
      case 'blog': return 'bg-pink-500/20 text-pink-400';
      case 'documentation': return 'bg-indigo-500/20 text-indigo-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'software': return 'bg-blue-500/20 text-blue-400';
      case 'service': return 'bg-green-500/20 text-green-400';
      case 'hardware': return 'bg-orange-500/20 text-orange-400';
      case 'article': return 'bg-purple-500/20 text-purple-400';
      case 'guide': return 'bg-cyan-500/20 text-cyan-400';
      case 'case-study': return 'bg-pink-500/20 text-pink-400';
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
=======
  const clearFilters = () => {
    setSelectedCategory('All');
    setFilters({
      rating: 0,
      tags: [],
      dateRange: 'all'
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
      
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
                <Search className="w-10 h-10 text-green-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Find What You <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Need</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Search our comprehensive collection of technology solutions, services, 
                articles, and resources to accelerate your digital transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Form */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for solutions, services, articles, or resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200 text-lg"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                  >
                    Search
                  </button>
                </div>
              </form>
<<<<<<< HEAD
            </div>
          </div>
        </section>

        {/* Quick Search Options */}
        {!searchQuery && searchResults.length === 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-xl font-bold text-white mb-6">Recent Searches</h3>
                    <div className="flex flex-wrap gap-3">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickSearch(search)}
                          className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 text-gray-300 rounded-lg hover:bg-slate-700/50 hover:text-white transition-all duration-200"
                        >
                          {search}
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                        </button>
                      ))}
                    </div>
                  </div>
<<<<<<< HEAD
                )}

                {/* Popular Searches */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-white mb-6">Popular Searches</h3>
                  <div className="flex flex-wrap gap-3">
                    {popularSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickSearch(search)}
                        className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 text-green-400 rounded-lg hover:from-green-500/30 hover:to-blue-500/30 hover:border-green-400/50 transition-all duration-200"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Search Categories */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Browse by Category</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.slice(1).map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setSearchQuery(category.name);
                          performSearch(category.name);
                        }}
                        className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-xl hover:border-green-400/50 transition-all duration-300 hover:scale-105 text-left"
                      >
                        <h4 className="text-lg font-bold text-white mb-2">{category.name}</h4>
                        <p className="text-gray-300 text-sm">Explore {category.name.toLowerCase()} solutions and resources</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Search Results */}
        {searchQuery && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                {/* Results Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Search Results for "{searchQuery}"
                    </h2>
                    <p className="text-gray-300">
                      {isSearching ? 'Searching...' : `${searchResults.length} results found`}
                    </p>
                  </div>

                  {/* Filters and View Mode */}
                  <div className="flex items-center gap-4 mt-4 lg:mt-0">
                    {/* Category Filter */}
                    <select
                      value={selectedCategory}
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        performSearch(searchQuery);
                      }}
                      className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>

                    {/* Type Filter */}
                    <select
                      value={selectedType}
                      onChange={(e) => {
                        setSelectedType(e.target.value);
                        performSearch(searchQuery);
                      }}
                      className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                    >
                      {types.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>

                    {/* View Mode Toggle */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                          viewMode === 'grid' 
                            ? 'bg-green-400/20 text-green-400' 
                            : 'bg-slate-800/50 text-gray-400 hover:text-white'
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                        }`}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
<<<<<<< HEAD
                        className={`p-2 rounded-lg transition-all duration-200 ${
                          viewMode === 'list' 
                            ? 'bg-green-400/20 text-green-400' 
                            : 'bg-slate-800/50 text-gray-400 hover:text-white'
=======
                        className={`p-2 rounded transition-colors ${
                          viewMode === 'list' 
                            ? 'bg-cyan-500 text-white' 
                            : 'text-gray-400 hover:text-white'
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                        }`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

<<<<<<< HEAD
                {/* Loading State */}
                {isSearching && (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full mb-4">
                      <RefreshCw className="w-8 h-8 text-green-400 animate-spin" />
                    </div>
                    <p className="text-gray-300">Searching for "{searchQuery}"...</p>
                  </div>
                )}

                {/* No Results */}
                {!isSearching && searchResults.length === 0 && (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-500/20 to-slate-500/20 rounded-full mb-4">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
                    <p className="text-gray-300 mb-6">
                      Try adjusting your search terms or browse our categories instead.
                    </p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                    >
                      Start New Search
                    </button>
                  </div>
                )}

                {/* Search Results */}
                {!isSearching && searchResults.length > 0 && (
                  <>
                    {viewMode === 'grid' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {searchResults.map((item, index) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                          >
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                              <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                                    {categories.find(c => c.id === item.category)?.name}
                                  </span>
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                                    {types.find(t => t.id === item.type)?.name}
                                  </span>
                                </div>
                                
                                <div className="flex items-center gap-3 mb-4">
                                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                                    <item.icon className="w-6 h-6 text-green-400" />
                                  </div>
                                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-200">
                                    {item.title}
                                  </h3>
                                </div>
                                
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                                  {item.description}
                                </p>
                                
                                {item.rating && (
                                  <div className="flex items-center gap-2 mb-4 text-sm">
                                    <div className="flex items-center gap-1">
                                      {renderStars(item.rating)}
                                      <span className="text-gray-400">({item.reviews})</span>
                                    </div>
                                  </div>
                                )}
                                
                                <div className="flex items-center justify-between mb-4">
                                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    {formatDate(item.date)}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                                      <Eye className="w-4 h-4" />
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
                                
                                <Link
                                  to={item.url}
                                  className="w-full px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 text-center block"
                                >
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {searchResults.map((item, index) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
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
                                  </div>
                                  
                                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-200 mb-2">
                                    {item.title}
                                  </h3>
                                  
                                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                                    {item.description}
                                  </p>
                                  
                                  {item.rating && (
                                    <div className="flex items-center gap-4 text-sm mb-3">
                                      <div className="flex items-center gap-1">
                                        {renderStars(item.rating)}
                                        <span className="text-gray-400 ml-1">({item.reviews})</span>
                                      </div>
                                      <div className="text-gray-400">•</div>
                                      <div className="text-gray-400">{item.readTime}</div>
                                    </div>
                                  )}
                                  
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    {item.tags.map((tag, tagIndex) => (
                                      <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="flex-shrink-0 text-right">
                                  <div className="flex items-center gap-2 mb-3">
                                    <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                                      <Eye className="w-5 h-5" />
                                    </button>
                                  </div>
                                  <Link
                                    to={item.url}
                                    className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                                  >
                                    View Details
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </section>
        )}
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      </div>
    </>
  );
}

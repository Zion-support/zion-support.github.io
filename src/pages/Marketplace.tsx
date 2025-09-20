import React, { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { Link } from "react-router-dom"
import { ;
  Store,;
  Search, ;
  Filter, ;
  Grid, ;
  List, ;
  Star, ;
  Heart, ;
  ShoppingCart, ;
  Eye, ;
  Download, ;
  Play, ;
  BookOpen, ;
  Code, ;
  Cloud, ;
  Shield, ;
  Bot, ;
  Database, ;
  Server, ;
  Monitor, ;
  Smartphone, ;
  Package, ;
  Users, ;
  TrendingUp, ;
  Award, ;
  CheckCircle, ;
  ArrowRight, ;
  ChevronDown, ;
  ChevronUp,;
  Zap,;
  Globe,;
  Target,;
  BarChart3,;
  Settings,;
  Palette,;
  Cpu,;
  HardDrive,;
  Network,;
  Lightbulb,;
  Settings as Cog,;
  FileText,;
  Video,;
  Headphones,;
  Calendar,;
  Clock,;
  DollarSign,;
  Percent,;
  Tag,;
  ExternalLink,;
  Mail,;
  Phone,;
  MapPin,;
  MessageCircle,;
  HelpCircle,;
  Info,;
  AlertTriangle,;
  X,;
  Plus,;
  Minus,;
  RefreshCw,;
  RotateCcw,;
  Maximize2,;
  Minimize2,;
  Volume2,;
  VolumeX,;
  Power,;
  PowerOff,;
  Battery,;
  BatteryCharging,;
  BatteryFull,;
  BatteryLow,;
  BatteryMedium,;
  BatteryEmpty,;
  Wifi,;
  WifiOff,;
  Signal,;
  SignalOff,;
  Bluetooth,;
  BluetoothOff,;
  Lock,;
  Unlock,;
  Key,;
  Fingerprint,;
  QrCode,;
  Barcode,;
  Camera,;
  Image,;
  File,;
  Folder,;
  Archive,;
  Trash2,;
  Edit,;
  Copy,;
  Share,;
  Link as LinkIcon,;
  Bookmark,;
  BookmarkPlus,;
  BookmarkMinus,;
  Flag,;
  Report,;
  ThumbsUp,;
  ThumbsDown,;
  Smile,;
  Frown,;
  Meh,;
  Heart as HeartIcon,;
  HeartOff,;
  HeartHandshake,;
  Gift,;
  CreditCard,;
  Wallet,;
  Receipt,;
  Calculator,;
  TrendingDown,;
  Activity,;
  PieChart,;
  LineChart,;
  BarChart,;
  ScatterChart,;
  Radar,;
  Gauge,;
  Thermometer,;
  Droplets,;
  Sun,;
  Moon,;
  Cloud,;
  CloudRain,;
  CloudLightning,;
  CloudSnow,;
  Wind,;
  Umbrella,;
  Snowflake,;
  Fire,;
  Leaf,;
  Tree,;
  Flower,;
  Seedling,;
  Sprout,;
  Plant,;
  TreePine,;
  Mountain,;
  MountainSnow,;
  Volcano,;
  Island,;
  Beach,;
  Desert,;
  Forest,;
  Jungle,;
  Ocean,;
  River,;
  Lake,;
  Water,;
  Fish,;
  Bird,;
  Cat,;
  Dog,;
  Horse,;
  Cow,;
  Pig,;
  Sheep,;
  Goat,;
  Chicken,;
  Duck,;
  Turkey,;
  Eagle,;
  Hawk,;
  Owl,;
  Crow,;
  Sparrow,;
  Robin,;
  Bluebird,;
  Cardinal,;
  Goldfinch,;
  Hummingbird,;
  Woodpecker,;
  Seagull,;
  Pelican,;
  Flamingo,;
  Penguin,;
  Ostrich,;
  Emu,;
  Kiwi,;
  Toucan,;
  Parrot,;
  Macaw,;
  Cockatoo,;
  Canary,;
  Finch,;
  Sparrow,;
  Robin,;
  Bluebird,;
  Cardinal,;
  Goldfinch,;
  Hummingbird,;
  Woodpecker,;
  Seagull,;
  Pelican,;
  Flamingo,;
  Penguin,;
  Ostrich,;
  Emu,;
  Kiwi,;
  Toucan,;
  Parrot,;
  Macaw,;
  Cockatoo,;
  Canary,;
  Finch;
} from "lucide-react"
export default function Marketplace() {;
  const [searchQuery, setSearchQuery] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [selectedType, setSelectedType] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const categories = [;
    { id: 'all', name: 'All Categories', count: 48 };
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 12 };
    { id: 'cloud', name: 'Cloud Solutions', count: 8 };
    { id: 'security', name: 'Security & Compliance', count: 6 };
    { id: 'data', name: 'Data & Analytics', count: 7 };
    { id: 'development', name: 'Development Tools', count: 9 };
    { id: 'hardware', name: 'Hardware & Equipment', count: 6 };
  ];
  const types = [;
    { id: 'all', name: 'All Types', count: 48 };
    { id: 'software', name: 'Software', count: 25 };
    { id: 'service', name: 'Services', count: 15 };
    { id: 'hardware', name: 'Hardware', count: 8 };
  ];
  const marketplaceItems = [;
    //[^;]*
    {;
      id: 'ai-chatbot',name: 'AI Chatbot Platform',category: 'ai-ml',type: 'software',icon: Bot,description: 'Intelligent chatbot platform with natural language processing',features: [;
        'Natural language understandingMulti-language support'
        'Integration APIsAnalytics dashboard',;
        'Custom training models24/7 availability'
      ],;
      pricing: '$299/month',rating: 4.8,reviews: 156,downloads: 1247,status: 'featured',tags: ['AIChatbot', 'NLPAutomation'],;
      image: '/api/placeholder/400/300',demo: 'https://demo.ziontechgroup.com/ai-chatbot',documentation: 'https://docs.ziontechgroup.com/ai-chatbot'
    };
    {;
      id: 'ml-pipeline',name: 'ML Pipeline Automation',category: 'ai-ml',type: 'software',icon: BarChart3,description: 'Automated machine learning pipeline for data scientists',features: [;
        'AutoML capabilitiesModel versioning'
        'A/B testingPerformance monitoring',;
        'Scalable infrastructureCloud deployment'
      ],;
      pricing: '$499/month',rating: 4.9,reviews: 89,downloads: 567,status: 'popular',tags: ['Machine LearningAutomation', 'Data ScienceMLOps'],;
      image: '/api/placeholder/400/300',demo: 'https://demo.ziontechgroup.com/ml-pipeline',documentation: 'https://docs.ziontechgroup.com/ml-pipeline'
    };
    {;
      id: 'computer-vision',name: 'Computer Vision API',category: 'ai-ml',type: 'service',icon: Eye,description: 'Advanced computer vision services for image and video analysis',features: [;
        'Object detectionFace recognition'
        'Image classificationVideo analysis',;
        'Real-time processingCustom model training'
      ],;
      pricing: '$0.01 per image',rating: 4.7,reviews: 203,downloads: 892,status: 'trending',tags: ['Computer VisionAI', 'Image ProcessingVideo Analysis'],;
      image: '/api/placeholder/400/300',demo: 'https://demo.ziontechgroup.com/computer-vision',documentation: 'https://docs.ziontechgroup.com/computer-vision'
    };
    //[^;]*
    {;
      id: 'cloud-migration',name: 'Cloud Migration Service',category: 'cloud',type: 'service',icon: Cloud,description: 'Professional cloud migration and optimization services',features: [;
        'Infrastructure assessmentMigration planning'
        'Data migrationPerformance optimization',;
        'Cost optimizationOngoing support'
      ],;
      pricing: 'Starting from $15,000',;
      rating: 4.9,reviews: 67,downloads: 234,status: 'featured',tags: ['Cloud MigrationAWS', 'AzureGCP', 'DevOps'],;
      image: '/api/placeholder/400/300',demo: 'https://demo.ziontechgroup.com/cloud-migration',documentation: 'https://docs.ziontechgroup.com/cloud-migration'
    };
    {;
      id: 'kubernetes-manager',name: 'Kubernetes Management Platform',category: 'cloud',type: 'software',icon: Server,description: 'Enterprise-grade Kubernetes cluster management solution',features: [;
        'Multi-cluster managementAuto-scaling'
        'Monitoring & alertingSecurity policies',;
        'Backup & recoveryCost optimization'
      ],;
      pricing: '$199/month',rating: 4.8,reviews: 134,downloads: 456,status: 'popular',tags: ['KubernetesContainer Orchestration', 'DevOpsCloud Native'],;
      image: '/api/placeholder/400/300',demo: 'https://demo.ziontechgroup.com/kubernetes-manager',documentation: 'https://docs.ziontechgroup.com/kubernetes-manager'
    };
    //[^;]*
    {;
      id: 'threat-detection',name: 'Advanced Threat Detection',category: 'security',type: 'software',icon: Shield,description: 'AI-powered threat detection and response system',features: [;
        'Real-time monitoringBehavioral analysis'
        'Threat intelligenceAutomated response',;
        'Compliance reporting24/7 SOC support'
      ],;
      pricing: '$399/month',rating: 4.9,reviews: 178,downloads: 678,status: 'featured',tags: ['CybersecurityThreat Detection', 'AI SecuritySOC'],;
      image: '/api/placeholder/400/300',demo: 'https://demo.ziontechgroup.com/threat-detection',documentation: 'https://docs.ziontechgroup.com/threat-detection'
    };
    {;
      id: 'compliance-audit',name: 'Compliance Audit Service',category: 'security',type: 'service',icon: CheckCircle,description: 'Comprehensive compliance auditing and certification services',features: [;
        'SOC 2 Type IIISO 27001'
        'GDPR complianceHIPAA assessment',;
        'PCI DSS validationOngoing monitoring'
      ],;
      pricing: 'Starting from $25,000',;
      rating: 4.8,reviews: 45,downloads: 123,status: 'popular',tags: ['ComplianceSecurity', 'AuditCertification'],;
      image: '/api/placeholder/400/300',demo: 'https://demo.ziontechgroup.com/compliance-audit',documentation: 'https://docs.ziontechgroup.com/compliance-audit'
    };
    //[^;]*
    {;
      id: 'data-warehouse',name: 'Data Warehouse Solution',category: 'data',type: 'software',icon: Database,description: 'Scalable data warehouse with advanced analytics',features: [;
        'Multi-cloud supportReal-time processing'
        'Advanced analyticsData governance',;
        'Security & encryptionAuto-scaling'
      ],;
      pricing: '$599/month',rating: 4.7,reviews: 92,downloads: 345,status: 'trending',tags: ['Data WarehouseBig Data', 'AnalyticsBusiness Intelligence'],;
      image: '/api/placeholder/400/300',demo: 'https://demo.ziontechgroup.com/data-warehouse',documentation: 'https://docs.ziontechgroup.com/data-warehouse'
    };
    {;
      id: 'bi-dashboard',name: 'Business Intelligence Dashboard',category: 'data',type: 'software',icon: BarChart3,description: 'Interactive BI dashboard for data visualization',features: [;
        'Drag & drop interfaceReal-time data'
        'Custom widgetsMobile responsive',;
        'Export capabilitiesCollaboration tools'
      ],;
      pricing: '$149/month',rating: 4.6,reviews: 167,downloads: 789,status: 'popular',tags: ['Business IntelligenceDashboard', 'Data VisualizationAnalytics'],;
      image: '/api/placeholder/400/300',demo: 'https://demo.ziontechgroup.com/bi-dashboard',documentation: 'https://docs.ziontechgroup.com/bi-dashboard'
    };
    //[^;]*
    {;
      id: 'code-generator',name: 'AI Code Generator',category: 'development',type: 'software',icon: Code,description: 'AI-powered code generation and assistance tool',features: [;
        'Multi-language supportCode completion'
        'Bug detectionDocumentation generation',;
        'Code reviewIntegration with IDEs'
      ],;
      pricing: '$99/month',rating: 4.8,reviews: 234,downloads: 1234,status: 'trending',tags: ['Code GenerationAI', 'DevelopmentProductivity'],;
      image: '/api/placeholder/400/300',demo: 'https://demo.ziontechgroup.com/code-generator',documentation: 'https://docs.ziontechgroup.com/code-generator'
    };
    {;
      id: 'api-gateway',name: 'API Gateway Platform',category: 'development',type: 'software',icon: Network,description: 'Enterprise API gateway with advanced management features',features: [;
        'Rate limitingAuthentication'
        'Monitoring & analyticsVersion management',;
        'DocumentationDeveloper portal'
      ],;
      pricing: '$299/month',rating: 4.7,reviews: 156,downloads: 567,status: 'featured',tags: ['API GatewayMicroservices', 'API ManagementDeveloper Tools'],;
      image: '/api/placeholder/400/300',demo: 'https://demo.ziontechgroup.com/api-gateway',documentation: 'https://docs.ziontechgroup.com/api-gateway'
    };
    //[^;]*
    {;
      id: 'edge-computing',name: 'Edge Computing Device',category: 'hardware',type: 'hardware',icon: Cpu,description: 'High-performance edge computing device for IoT applications',features: [;
        'Intel i7 processor16GB RAM'
        '512GB SSDDual network ports',;
        'Industrial grade5-year warranty'
      ],;
      pricing: '$1,299',;
      rating: 4.9,reviews: 78,downloads: 234,status: 'featured',tags: ['Edge ComputingIoT', 'HardwareIndustrial'],;
      image: '/api/placeholder/400/300',demo: 'https://demo.ziontechgroup.com/edge-computing',documentation: 'https://docs.ziontechgroup.com/edge-computing'
    };
    {;
      id: 'network-switch',name: 'Enterprise Network Switch',category: 'hardware',type: 'hardware',icon: Network,description: 'High-speed network switch for enterprise environments',features: [;
        '48-port GigabitPoE+ support'
        'VLAN managementQoS features',;
        'SNMP monitoringLifetime warranty'
      ],;
      pricing: '$899',rating: 4.8,reviews: 123,downloads: 456,status: 'popular',tags: ['NetworkingSwitch', 'EnterprisePoE'],;
      image: '/api/placeholder/400/300',demo: 'https://demo.ziontechgroup.com/network-switch',documentation: 'https://docs.ziontechgroup.com/network-switch'
    };
  ];
  const featuredItems = marketplaceItems.filter(item => item.status === 'featured')
  const popularItems = marketplaceItems.filter(item => item.status === 'popular')
  const trendingItems = marketplaceItems.filter(item => item.status === 'trending')

  const toggleItemExpansion = (itemId: string) => {;
    setExpandedItem(expandedItem === itemId ? null : itemId)
  };
  const filteredItems = marketplaceItems.filter(item => {;
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false,;&& item.category !== selectedCategory) return false,; item.category !== selectedCategory) return false,
    if (selectedType !== 'all' && item.type !== selectedType) return false,;&& item.type !== selectedType) return false,; item.type !== selectedType) return false,
    if (searchQuery) {;
      return item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
             item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
             item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())),;
    };
    return true,;
  }),;

  const getCategoryColor = (category: string) => {;
    switch (category) {;
      case 'ai-ml': return 'bg-purple-500/20 text-purple-400'
      case 'cloud': return 'bg-blue-500/20 text-blue-400',;
      case 'security': return 'bg-red-500/20 text-red-400',;
      case 'data': return 'bg-green-500/20 text-green-400',;
      case 'development': return 'bg-orange-500/20 text-orange-400',;
      case 'hardware': return 'bg-gray-500/20 text-gray-400',;
      default: return 'bg-slate-500/20 text-slate-400'
    };
  };
  const getTypeColor = (type: string) => {;
    switch (type) {;
      case 'software': return 'bg-blue-500/20 text-blue-400'
      case 'service': return 'bg-green-500/20 text-green-400',;
      case 'hardware': return 'bg-orange-500/20 text-orange-400',;
      default: return 'bg-slate-500/20 text-slate-400'
    };
  };
  const getStatusColor = (status: string) => {;
    switch (status) {;
      case 'featured': return 'bg-yellow-500/20 text-yellow-400'
      case 'popular': return 'bg-blue-500/20 text-blue-400',;
      case 'trending': return 'bg-green-500/20 text-green-400',;
      default: return 'bg-slate-500/20 text-slate-400'
    };
  };
  const renderStars = (rating: number) => {;
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0;
    ;
    for (let i = 0, i < fullStars, i++) {;
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />),;
    };
    ;
    if (hasHalfStar) {;
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-current" />),;
    };
    ;
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0, i < emptyStars, i++) {;
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-400" />),;
    };
    ;
    return stars,;
  },;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Marketplace - Zion Tech Group"
        description="Discover innovative technology solutions, software, services, and hardware in our comprehensive marketplace. Find the perfect tools for your business needs."
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></[^>]*>
        <div className="container mx-auto px-6 relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">;
              <[^>]*/>
            </[^>]*>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Technology <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Marketplace</[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
              Discover innovative solutions, cutting-edge software, professional services;
              and enterprise hardware to accelerate your digital transformation.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search and Filters */};
      <section className="py-12">;
        <div className="container mx-auto px-6">;
          <div className="max-w-6xl mx-auto">;
            <div className="flex flex-col lg:flex-row gap-6 mb-8">;
              {/* Search */};
              <div className="flex-1">;
                <div className="relative">;
                  <[^>]*/>
                  <input;
                    type="text"
                    placeholder="Search marketplace items..."
                    value={searchQuery};
                    onChange={(e) => setSearchQuery(e.target.value)};
                    className="[^"]*"
                  />;
                </[^>]*>
              </[^>]*>

              {/* Category Filter */};
              <div className="lg:w-48">;
                <select;
                  value={selectedCategory};
                  onChange={(e) => setSelectedCategory(e.target.value)};
                  className="[^"]*"
                >;
                  {categories.map((category) => (;
                    <option key={category.id} value={category.id}>;
                      {category.name} ({category.count});
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Type Filter */};
              <div className="lg:w-48">;
                <select;
                  value={selectedType};
                  onChange={(e) => setSelectedType(e.target.value)};
                  className="[^"]*"
                >;
                  {types.map((type) => (;
                    <option key={type.id} value={type.id}>;
                      {type.name} ({type.count});
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* View Mode Toggle */};
              <div className="flex items-center gap-2">;
                <button;
                  onClick={() => setViewMode('grid')};
                  className={`p-2 rounded-lg transition-all duration-200 ${;
                    viewMode === 'grid' ;
                      ? 'bg-green-400/20 text-green-400' ;
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`};
                >;
                  <[^>]*/>
                </[^>]*>
                <button;
                  onClick={() => setViewMode('list')};
                  className={`p-2 rounded-lg transition-all duration-200 ${;
                    viewMode === 'list' ;
                      ? 'bg-green-400/20 text-green-400' ;
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`};
                >;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Featured Items */};
      <section className="py-16">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Featured Solutions</[^>]*>
            <p className="text-xl text-gray-300">Handpicked solutions for enterprise success</[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {featuredItems.map((item, index) => (;
              <motion.div
                key={item.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">;
                  <div className="p-6">;
                    <div className="flex items-center gap-3 mb-4">;
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>;
                        {categories.find(c => c.id === item.category)?.name};
                      </[^>]*>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>;
                        {types.find(t => t.id === item.type)?.name};
                      </[^>]*>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>;
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)};
                      </[^>]*>
                    </[^>]*>
                    ;
                    <div className="flex items-center gap-3 mb-4">;
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">;
                        <[^>]*/>
                      </[^>]*>
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-200">;
                        {item.name};
                      </[^>]*>
                    </[^>]*>
                    ;
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">;
                      {item.description};
                    </[^>]*>
                    ;
                    <div className="flex items-center gap-4 mb-4 text-sm">;
                      <div className="flex items-center gap-1">;
                        {renderStars(item.rating)};
                        <span className="text-gray-400 ml-1">({item.reviews})</[^>]*>
                      </[^>]*>
                      <div className="text-gray-400">•</[^>]*>
                      <div className="text-gray-400">{item.downloads} downloads</[^>]*>
                    </[^>]*>
                    ;
                    <div className="flex items-center justify-between mb-4">;
                      <div className="text-2xl font-bold text-green-400">{item.pricing}</[^>]*>
                      <div className="flex items-center gap-2">;
                        <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">;
                          <[^>]*/>
                        </[^>]*>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">;
                          <[^>]*/>
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                    ;
                    <div className="flex flex-wrap gap-2 mb-4">;
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (;
                        <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">;
                          {tag};
                        </[^>]*>
                      ))};
                    </[^>]*>
                    ;
                    <button;
                      onClick={() => toggleItemExpansion(item.id)};
                      className="[^"]*"
                    >;
                      {expandedItem === item.id ? 'Show Less' : 'Learn More'}
                    </[^>]*>
                    ;
                    {expandedItem === item.id && (;&& (; (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }};
                        animate={{ opacity: 1, height: 'auto' }};
                        exit={{ opacity: 0, height: 0 }};
                        transition={{ duration: 0.3 }};
                        className="[^"]*"
                      >;
                        <div className="mb-4">;
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</[^>]*>
                          <ul className="space-y-1">;
                            {item.features.map((feature, featureIndex) => (;
                              <li key={featureIndex} className="flex items-center text-gray-300 text-sm">;
                                <[^>]*/>
                                {feature};
                              </[^>]*>
                            ))};
                          </[^>]*>
                        </[^>]*>
                        ;
                        <div className="flex flex-col sm:flex-row gap-2">;
                          <a;
                            href={item.demo};
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[^"]*"
                          >;
                            <[^>]*/>
                            Demo;
                          </[^>]*>
                          <a;
                            href={item.documentation};
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[^"]*"
                          >;
                            <[^>]*/>
                            Docs;
                          </[^>]*>
                        </[^>]*>
                      </[^>]*>
                    )};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* All Marketplace Items */};
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">All Marketplace Items</[^>]*>
            <p className="text-xl text-gray-300">;
              Browse our complete collection of technology solutions;
            </[^>]*>
          </[^>]*>

          {viewMode === 'grid' ? (;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">;
              {filteredItems.map((item, index) => (;
                <motion.div
                  key={item.id};
                  initial={{ opacity: 0, y: 20 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.8, delay: index * 0.05 }};
                  className="[^"]*"
                >;
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">;
                    <div className="p-4">;
                      <div className="flex items-center gap-2 mb-3">;
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>;
                          {categories.find(c => c.id === item.category)?.name};
                        </[^>]*>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>;
                          {types.find(t => t.id === item.type)?.name};
                        </[^>]*>
                      </[^>]*>
                      ;
                      <div className="flex items-center gap-2 mb-3">;
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg">;
                          <[^>]*/>
                        </[^>]*>
                        <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-200">;
                          {item.name};
                        </[^>]*>
                      </[^>]*>
                      ;
                      <p className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2">;
                        {item.description};
                      </[^>]*>
                      ;
                      <div className="flex items-center gap-2 mb-3 text-xs">;
                        <div className="flex items-center gap-1">;
                          {renderStars(item.rating)};
                          <span className="text-gray-400">({item.reviews})</[^>]*>
                        </[^>]*>
                      </[^>]*>
                      ;
                      <div className="flex items-center justify-between mb-3">;
                        <div className="text-lg font-bold text-green-400">{item.pricing}</[^>]*>
                        <div className="flex items-center gap-1">;
                          <button className="p-1 text-gray-400 hover:text-white transition-colors duration-200">;
                            <[^>]*/>
                          </[^>]*>
                          <button className="p-1 text-gray-400 hover:text-white transition-colors duration-200">;
                            <[^>]*/>
                          </[^>]*>
                        </[^>]*>
                      </[^>]*>
                      ;
                      <div className="flex flex-wrap gap-1 mb-3">;
                        {item.tags.slice(0, 2).map((tag, tagIndex) => (;
                          <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">;
                            {tag};
                          </[^>]*>
                        ))};
                      </[^>]*>
                      ;
                      <button className="w-full px-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 text-sm">;
                        View Details;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          ) : (;
            <div className="space-y-4">;
              {filteredItems.map((item, index) => (;
                <motion.div
                  key={item.id};
                  initial={{ opacity: 0, x: -20 }};
                  whileInView={{ opacity: 1, x: 0 }};
                  transition={{ duration: 0.8, delay: index * 0.05 }};
                  className="[^"]*"
                >;
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 p-6">;
                    <div className="flex items-center gap-6">;
                      <div className="flex-shrink-0">;
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">;
                          <[^>]*/>
                        </[^>]*>
                      </[^>]*>
                      ;
                      <div className="flex-1 min-w-0">;
                        <div className="flex items-center gap-3 mb-2">;
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>;
                            {categories.find(c => c.id === item.category)?.name};
                          </[^>]*>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>;
                            {types.find(t => t.id === item.type)?.name};
                          </[^>]*>
                          {item.status !== 'regular' && (;&& (; (
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>;
                              {item.status.charAt(0).toUpperCase() + item.status.slice(1)};
                            </[^>]*>
                          )};
                        </[^>]*>
                        ;
                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-200 mb-2">;
                          {item.name};
                        </[^>]*>
                        ;
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">;
                          {item.description};
                        </[^>]*>
                        ;
                        <div className="flex items-center gap-4 text-sm mb-3">;
                          <div className="flex items-center gap-1">;
                            {renderStars(item.rating)};
                            <span className="text-gray-400 ml-1">({item.reviews})</[^>]*>
                          </[^>]*>
                          <div className="text-gray-400">•</[^>]*>
                          <div className="text-gray-400">{item.downloads} downloads</[^>]*>
                        </[^>]*>
                        ;
                        <div className="flex flex-wrap gap-2 mb-3">;
                          {item.tags.map((tag, tagIndex) => (;
                            <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">;
                              {tag};
                            </[^>]*>
                          ))};
                        </[^>]*>
                      </[^>]*>
                      ;
                      <div className="flex-shrink-0 text-right">;
                        <div className="text-2xl font-bold text-green-400 mb-3">{item.pricing}</[^>]*>
                        <div className="flex items-center gap-2 mb-3">;
                          <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">;
                            <[^>]*/>
                          </[^>]*>
                          <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">;
                            <[^>]*/>
                          </[^>]*>
                          <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">;
                            <[^>]*/>
                          </[^>]*>
                        </[^>]*>
                        <button className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">;
                          View Details;
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>

      {/* Call to Action */};
      <section className="py-20">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Can't Find What You're Looking For?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Our team can create custom solutions tailored to your specific needs. ;
              Let's discuss your requirements and build something amazing together.;
            </[^>]*>
            ;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">;
                Request Custom Solution;
              </[^>]*>
              <a;
                href="mailto:marketplace@ziontechgroup.com"
                className="[^"]*"
              >;
                Contact Sales Team;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};

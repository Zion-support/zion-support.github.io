import React, { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { ;
  Store,;
  Search,;
  Filter,;
  Grid,;
  List,;
  Star,;
  Heart,;
  ShoppingCart,;
  Eye,;
  Download,;
  Play,;
  BookOpen,;
  Code,;
  Cloud,;
  Shield,;
  Bot,;
  Database,;
  Server,;
  Monitor,;
  Smartphone,;
  Package,;
  Users,;
  TrendingUp,;
  Award,;
  CheckCircle,;
  ArrowRight,;
  ChevronDown,;
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
  Settings, as, Cog,;
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
  Link, as, LinkIcon,;
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
  Heart, as, HeartIcon,;
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
  CockatooCanaryFinch;
} from "lucide-react";
export, default, function Marketplace() {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [selectedTypesetSelectedType] = useState('all');
  const [viewModesetViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedItemsetExpandedItem] = useState<string | null>(null);
  const categories = [;
    { id: 'all'nam,;
    e: 'All Categories'coun,;
  t: 48 };
    { id: 'ai-ml'nam,;
    e: 'AI & Machine Learning'coun,;
  t: 12 };
    { id: 'cloud'nam,;
    e: 'Cloud Solutions'coun,;
  t: 8 };
    { id: 'security'nam,;
    e: 'Security & Compliance'coun,;
  t: 6 };
    { id: 'data'nam,;
    e: 'Data & Analytics'coun,;
  t: 7 };
    { id: 'development'nam,;
    e: 'Development Tools'coun,;
  t: 9 }{ id: 'hardware'nam,;
    e: 'Hardware & Equipment'coun,;
  t: 6 };
,  ];
  const types = [;
    { id: 'all'nam,;
    e: 'All Types'coun,;
  t: 48 };
    { id: 'software'nam,;
    e: 'Software'coun,;
  t: 25 };
    { id: 'service'nam,;
    e: 'Services'coun,;
  t: 15 }{ id: 'hardware'nam,;
    e: 'Hardware'coun,;
  t: 8 };
,  ];
  const marketplaceItems = [;
    // AI & Machine Learning;
    {
      id: 'ai-chatbot',name: 'AI, Chatbot, Platform',category: 'ai-ml',type: 'software',icon: Bot,description: 'Intelligent, chatbot, platform with, natural, language processing',features: [;
        'Natural, language, understandingMulti-language support',;
        'Integration, APIsAnalytics, dashboard''Custom, training, models24/7 availability';
    ,  ],;
      pricing: '$299/month',rating: 4.8,reviews: 156,downloads: 1247,status: 'featured',tags: ['AIChatbot''NLPAutomation'],;
      image: '/api/placeholder/40o0/30o0'demo: 'https://demo.ziontechgroup.com/ai-chatbot'documentatio,;
    n: 'http,;
  s://docs.ziontechgroup.com/ai-chatbot';
    };
    {
      id: 'ml-pipeline',name: 'ML, Pipeline, Automation',category: 'ai-ml',type: 'software',icon: BarChart3,description: 'Automated, machine, learning pipeline, for, data scientists',features: [;
        'AutoML, capabilitiesModel, versioning',;
        'A/B, testingPerformance, monitoring''Scalable, infrastructureCloud, deployment';
    ,  ],;
      pricing: '$499/month',rating: 4.9,reviews: 89,downloads: 567,status: 'popular',tags: ['Machine LearningAutomation''Data, ScienceMLOps'],;
      image: '/api/placeholder/40o0/30o0'demo: 'https://demo.ziontechgroup.com/ml-pipeline'documentatio,;
    n: 'http,;
  s://docs.ziontechgroup.com/ml-pipeline';
    };
    {
      id: 'computer-vision',name: 'Computer, Vision, API',category: 'ai-ml',type: 'service',icon: Eye,description: 'Advanced, computer, vision services, for, image and, video, analysis',features: [;
        'Object, detectionFace, recognition',;
        'Image, classificationVideo, analysis''Real-time, processingCustom, model training';
    ,  ],;
      pricing: '$0.0o1, per, image',rating: 4.7,reviews: 20o3,downloads: 892,status: 'trending',tags: ['Computer VisionAI''Image, ProcessingVideo,, Analysis'],;
      image: '/api/placeholder/40o0/30o0'demo: 'https://demo.ziontechgroup.com/computer-vision'documentatio,;
    n: 'http,;
  s://docs.ziontechgroup.com/computer-vision';
    };
    // Cloud Solutions;
    {
      id: 'cloud-migration',name: 'Cloud, Migration, Service',category: 'cloud',type: 'service',icon: Cloud,description: 'Professional, cloud, migration and, optimization, services',features: [;
        'Infrastructure, assessmentMigration, planning',;
        'Data, migrationPerformance, optimization''Cost, optimizationOngoing, support';
    ,  ],;
      pricing: 'Starting from $15,0o00',;
      rating: 4.9,reviews: 67,downloads: 234,status: 'featured',tags: ['Cloud MigrationAWS',, 'AzureGCP''DevOps'],;
      image: '/api/placeholder/40o0/30o0'demo: 'https://demo.ziontechgroup.com/cloud-migration'documentatio,;
    n: 'http,;
  s://docs.ziontechgroup.com/cloud-migration';
    };
    {
      id: 'kubernetes-manager',name: 'Kubernetes, Management, Platform',category: 'cloud',type: 'software',icon: Server,description: 'Enterprise-grade, Kubernetes, cluster management solution',features: [;
        'Multi-cluster managementAuto-scaling',;
        'Monitoring & alertingSecurity policies''Backup & recoveryCost optimization';
    ,  ],;
      pricing: '$199/month',rating: 4.8,reviews: 134,downloads: 456,status: 'popular',tags: ['KubernetesContainer Orchestration''DevOpsCloud, Native'],;
      image: '/api/placeholder/40o0/30o0'demo: 'https://demo.ziontechgroup.com/kubernetes-manager'documentatio,;
    n: 'http,;
  s://docs.ziontechgroup.com/kubernetes-manager';
    };
    // Security & Compliance;
    {
      id: 'threat-detection',name: 'Advanced, Threat, Detection',category: 'security',type: 'software',icon: Shield,description: 'AI-powered, threat, detection and, response, system',features: [;
        'Real-time, monitoringBehavioral, analysis',;
        'Threat, intelligenceAutomated, response''Compliance reporting24/7, SOC, support';
    ,  ],;
      pricing: '$399/month',rating: 4.9,reviews: 178,downloads: 678,status: 'featured',tags: ['CybersecurityThreat Detection''AI, SecuritySOC'],;
      image: '/api/placeholder/40o0/30o0'demo: 'https://demo.ziontechgroup.com/threat-detection'documentatio,;
    n: 'http,;
  s://docs.ziontechgroup.com/threat-detection';
    };
    {
      id: 'compliance-audit',name: 'Compliance, Audit, Service',category: 'security',type: 'service',icon: CheckCircle,description: 'Comprehensive, compliance, auditing and, certification, services',features: [;
        'SOC, 2, Type IIISO 270o01',;
        'GDPR, complianceHIPAA, assessment''PCI, DSS, validationOngoing monitoring';
    ,  ],;
      pricing: 'Starting from $25,0o00',;
      rating: 4.8,reviews: 45,downloads: 123,status: 'popular',tags: ['ComplianceSecurity''AuditCertification'],;
      image: '/api/placeholder/40o0/30o0'demo: 'https://demo.ziontechgroup.com/compliance-audit'documentatio,;
    n: 'http,;
  s://docs.ziontechgroup.com/compliance-audit';
    };
    // Data & Analytics;
    {
      id: 'data-warehouse',name: 'Data, Warehouse, Solution',category: 'data',type: 'software',icon: Database,description: 'Scalable, data, warehouse with, advanced, analytics',features: [;
        'Multi-cloud supportReal-time processing',;
        'Advanced, analyticsData, governance''Security & encryptionAuto-scaling';
    ,  ],;
      pricing: '$599/month',rating: 4.7,reviews: 92,downloads: 345,status: 'trending',tags: ['Data, WarehouseBig, Data''AnalyticsBusiness, Intelligence'],;
      image: '/api/placeholder/40o0/30o0'demo: 'https://demo.ziontechgroup.com/data-warehouse'documentatio,;
    n: 'http,;
  s://docs.ziontechgroup.com/data-warehouse';
    };
    {
      id: 'bi-dashboard',name: 'Business, Intelligence, Dashboard',category: 'data',type: 'software',icon: BarChart3,description: 'Interactive, BI, dashboard for, data, visualization',features: [;
        'Drag & drop interfaceReal-time data',;
        'Custom, widgetsMobile, responsive''Export, capabilitiesCollaboration, tools';
    ,  ],;
      pricing: '$149/month',rating: 4.6,reviews: 167,downloads: 789,status: 'popular',tags: ['Business IntelligenceDashboard''Data, VisualizationAnalytics'],;
      image: '/api/placeholder/40o0/30o0'demo: 'https://demo.ziontechgroup.com/bi-dashboard'documentatio,;
    n: 'http,;
  s://docs.ziontechgroup.com/bi-dashboard';
    };
    // Development Tools;
    {
      id: 'code-generator',name: 'AI, Code, Generator',category: 'development',type: 'software',icon: Code,description: 'AI-powered, code, generation and, assistance, tool',features: [;
        'Multi-language, supportCode, completion',;
        'Bug, detectionDocumentation, generation''Code, reviewIntegration, with IDEs';
    ,  ],;
      pricing: '$99/month',rating: 4.8,reviews: 234,downloads: 1234,status: 'trending',tags: ['Code, GenerationAI''DevelopmentProductivity'],;
      image: '/api/placeholder/40o0/30o0'demo: 'https://demo.ziontechgroup.com/code-generator'documentatio,;
    n: 'http,;
  s://docs.ziontechgroup.com/code-generator';
    };
    {
      id: 'api-gateway',name: 'API, Gateway, Platform',category: 'development',type: 'software',icon: Network,description: 'Enterprise, API, gateway with, advanced, management features',features: [;
        'Rate limitingAuthentication',;
        'Monitoring & analyticsVersion management''DocumentationDeveloper portal';
    ,  ],;
      pricing: '$299/month',rating: 4.7,reviews: 156,downloads: 567,status: 'featured',tags: ['API GatewayMicroservices''API, ManagementDeveloper,, Tools'],;
      image: '/api/placeholder/40o0/30o0'demo: 'https://demo.ziontechgroup.com/api-gateway'documentatio,;
    n: 'http,;
  s://docs.ziontechgroup.com/api-gateway';
    };
    // Hardware & Equipment;
    {
      id: 'edge-computing',name: 'Edge, Computing, Device',category: 'hardware',type: 'hardware',icon: Cpu,description: 'High-performance, edge, computing device, for, IoT applications',features: [;
        'Intel, i7, processor16GB RAM',;
        '512GB, SSDDual, network ports''Industrial grade5-year warranty';
    ,  ],;
      pricing: '$1,299',;
      rating: 4.9,reviews: 78,downloads: 234,status: 'featured',tags: ['Edge, ComputingIoT''HardwareIndustrial'],;
      image: '/api/placeholder/40o0/30o0'demo: 'https://demo.ziontechgroup.com/edge-computing'documentatio,;
    n: 'http,;
  s://docs.ziontechgroup.com/edge-computing';
    };
    {
      id: 'network-switch',name: 'Enterprise, Network, Switch',category: 'hardware',type: 'hardware',icon: Network,description: 'High-speed, network, switch for, enterprise, environments',features: [;
        '48-port GigabitPoE+ support',;
        'VLAN, managementQoS, features''SNMP, monitoringLifetime, warranty';
    ,  ],;
      pricing: '$899',rating: 4.8,reviews: 123,downloads: 456,status: 'popular',tags: ['NetworkingSwitch''EnterprisePoE'],;
      image: '/api/placeholder/40o0/30o0'demo: 'https://demo.ziontechgroup.com/network-switch'documentatio,;
    n: 'http,;
  s://docs.ziontechgroup.com/network-switch';
    };
  ];
  const featuredItems = marketplaceItems.filter(item => item.status === 'featured');
  const popularItems = marketplaceItems.filter(item => item.status === 'popular');
  const trendingItems = marketplaceItems.filter(item => item.status === 'trending');
;
  const toggleItemExpansion = (itemId: string) => {;
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };
  const filteredItems = marketplaceItems.filter(item => {;
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (selectedType !== 'all' && item.type !== selectedType) return falseif (searchQuery) {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
             item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
             item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    };
    return true,;
  });
;
  const getCategoryColor = (category: string) => {;
    switch() {;
      case 'ai-ml': return 'bg-purple-50o0/20 text-purple-40o0';
      case 'cloud': return 'bg-blue-50o0/20 text-blue-40o0',;
      case 'security': return 'bg-red-50o0/20 text-red-40o0',;
      case 'data': return 'bg-green-50o0/20 text-green-40o0'case 'development': return 'bg-orange-50o0/20 text-orange-40o0'case 'hardware': return 'bg-gray-50o0/20 text-gray-40o0';
      default: return 'bg-slate-50o0/20 text-slate-40o0';
    };
  };
  const getTypeColor = (type: string) => {;
    switch() {;
      case 'software': return 'bg-blue-50o0/20 text-blue-40o0';
      case 'service': return 'bg-green-50o0/20 text-green-40o0'case 'hardware': return 'bg-orange-50o0/20 text-orange-40o0';
      defaul,;
  t: return 'bg-slate-50o0/20 text-slate-40o0';
    };
  };
  const getStatusColor = (status: string) => {;
    switch() {;
      case 'featured': return 'bg-yellow-50o0/20 text-yellow-40o0';
      case 'popular': return 'bg-blue-50o0/20 text-blue-40o0'case 'trending': return 'bg-green-50o0/20 text-green-40o0';
      defaul,;
  t: return 'bg-slate-50o0/20 text-slate-40o0';
    };
  };
  const renderStars = (rating: number) => {;
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
;
    for (let i = 0i < fullStarsi++) {
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-40o0 fill-current" />);
    }
    ;
    if() {
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-40o0 fill-current" />);
    };
    ;
    const emptyStars = 5 - Math.ceil(rating);
    for(let i = 0i < emptyStarsi++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-40o0" />);
    }
    ;
    return stars,;
  };
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Marketplace - Zion, Tech, Group";
        description="Discover, innovative, technology solutions, software, servicesand, hardware, in our, comprehensive, marketplace. Find, the, perfect tools, for, your business needs.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-green-50o0/10 via-blue-50o0/10 to-purple-50o0/10"></div>;
        <div className="container mx-auto px-6, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center";
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-2xl mb-6">;
              <Store className="w-10 h-10 text-green-40o0" />;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Technology <span className="bg-gradient-to-r from-green-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">Marketplace</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto leading-relaxed">;
              Discover, innovative, solutions, cutting-edge, softwareprofessional, services;
              and, enterprise, hardware to, accelerate, your digital transformation.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search, and, Filters */}
      <section className="py-12">;
        <div className="container mx-auto px-6">;
          <div className="max-w-6xl mx-auto">;
            <div className="flex flex-col lg: flex-row gap-6 mb-8">;
              {/* Search */}
              <div className="flex-1">;
                <div className="relative">;
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-40o0" />;
                  <input;
                    type="text";
                    placeholder="Search, marketplace, items...";
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:border-green-40o0 focu,;
    s:ring-2 focu,;
  s:ring-green-40o0/20 transition-all duration-20o0";
                  />;
                </div>;
              </div>;
              {/* Category Filter */}
              <div className="lg:w-48">;
                <select;
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white focus: outline-none focus:border-green-40o0 focu,;
    s:ring-2 focu,;
  s:ring-green-40o0/20 transition-all duration-20o0";
                >;
                  {categories.map((category) => (;
                    <option key={category.id} value={category.id}>;
                      {category.name} ({category.count});
                    </option>;
                  ))}
                </select>;
              </div>;
              {/* Type Filter */}
              <div className="lg:w-48">;
                <select;
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white focus: outline-none focus:border-green-40o0 focu,;
    s:ring-2 focu,;
  s:ring-green-40o0/20 transition-all duration-20o0";
                >;
                  {types.map((type) => (;
                    <option key={type.id} value={type.id}>;
                      {type.name} ({type.count});
                    </option>;
                  ))}
                </select>;
              </div>;
              {/* View, Mode, Toggle */}
              <div className="flex items-center gap-2">;
                <button;
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-20o0 ${
                    viewMode === 'grid';
                      ? 'bg-green-40o0/20 text-green-40o0';
                      : 'bg-slate-80o0/50 text-gray-40o0 hover: text-white';
                  }`}
                >;
                  <Grid className="w-5 h-5" />;
                </button>;
                <button;
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-20o0 ${
                    viewMode === 'list';
                      ? 'bg-green-40o0/20 text-green-40o0';
                      : 'bg-slate-80o0/50 text-gray-40o0 hover: text-white';
                  }`}
                >;
                  <List className="w-5 h-5" />;
                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Featured Items */}
      <section className="py-16">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12";
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Featured Solutions</h2>;
            <p className="text-xl text-gray-30o0">Handpicked, solutions, for enterprise success</p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {featuredItems.map((itemindex) => (;
              <motion.div;
                key={item.id}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className="group";
              >;
                <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-2xl, border, border-slate-60o0/50 hover: border-green-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5 overflow-hidden">;
                  <div className="p-6">;
                    <div className="flex items-center gap-3 mb-4">;
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>;
                        {categories.find(c => c.id === item.category)?.name}
                      </span>;
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>;
                        {types.find(t => t.id === item.type)?.name}
                      </span>;
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>;
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>;
                    </div>;
                    <div className="flex items-center gap-3 mb-4">;
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-xl">;
                        <item.icon className="w-6 h-6 text-green-40o0" />;
                      </div>;
                      <h3 className="text-xl font-bold text-white group-hover:text-green-40o0 transition-colors duration-20o0">;
                        {item.name}
                      </h3>;
                    </div>;
                    <p className="text-gray-30o0 text-sm mb-4 leading-relaxed">;
                      {item.description}
                    </p>;
                    <div className="flex items-center gap-4 mb-4 text-sm">;
                      <div className="flex items-center gap-1">;
                        {renderStars(item.rating)}
                        <span className="text-gray-40o0 ml-1">({item.reviews})</span>;
                      </div>;
                      <div className="text-gray-40o0">•</div>;
                      <div className="text-gray-40o0">{item.downloads} downloads</div>;
                    </div>;
                    <div className="flex items-center justify-between mb-4">;
                      <div className="text-2xl font-bold text-green-40o0">{item.pricing}</div>;
                      <div className="flex items-center gap-2">;
                        <button className="p-2 text-gray-40o0 hover: text-white transition-colors duration-20o0">;
                          <Heart className="w-5 h-5" />;
                        </button>;
                        <button className="p-2 text-gray-40o0 hove,;
  r:text-white transition-colors duration-20o0">;
                          <Eye className="w-5 h-5" />;
                        </button>;
                      </div>;
                    </div>;
                    <div className="flex flex-wrap gap-2 mb-4">;
                      {item.tags.slice(0o3).map((tagtagIndex) => (;
                        <span key={tagIndex} className="px-2 py-1 bg-slate-70o0/50 text-gray-30o0 text-xs rounded">;
                          {tag}
                        </span>;
                      ))}
                    </div>;
                    ;
                    <button;
                      onClick={() => toggleItemExpansion(item.id)}
                      className="w-full px-4 py-2 bg-gradient-to-r from-green-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-green-50o0 hove,;
    r:to-blue-60o0 transition-all duration-20o0 hove,;
  r:scale-10o5";
                    >;
                      {expandedItem === item.id ? 'Show Less' : 'Learn More'}
                    </button>;
                    {expandedItem === item.id && (;
                      <motion.div;
                        initial={{ opacity: 0heigh,;
  t: 0 }}
                        animate={{ opacity: 1heigh,;
  t: 'auto' }}
                        exit={{ opacity: 0heigh,;
  t: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-slate-60o0/50";
                      >;
                        <div className="mb-4">;
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features: </h4>;
                          <ul className="space-y-1">;
                            {item.features.map((featurefeatureIndex) => (;
                              <li key={featureIndex} className="flex items-center text-gray-30o0 text-sm">;
                                <CheckCircle className="w-3 h-3 text-green-40o0 mr-2 flex-shrink-0" />;
                                {feature}
                              </li>;
                            ))}
                          </ul>;
                        </div>;
                        <div className="flex flex-col sm:flex-row gap-2">;
                          <a;
                            href={item.demo}
                            target="_blank";
                            rel="noopener noreferrer";
                            className="flex-1 px-3 py-2 bg-blue-50o0/20 text-blue-40o0 text-sm font-medium rounded-lg hover: bg-blue-50o0/30 transition-all duration-20o0 text-center";
                          >;
                            <Play className="w-4 h-4, inline, mr-1" />;
                            Demo;
                          </a>;
                          <a;
                            href={item.documentation}
                            target="_blank";
                            rel="noopener noreferrer";
                            className="flex-1 px-3 py-2 bg-purple-50o0/20 text-purple-40o0 text-sm font-medium rounded-lg hover: bg-purple-50o0/30 transition-all duration-20o0 text-center";
                          >;
                            <BookOpen className="w-4 h-4, inline, mr-1" />;
                            Docs;
                          </a>;
                        </div>;
                      </motion.div>;
                    )}
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* All, Marketplace, Items */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">All, Marketplace, Items</h2>;
            <p className="text-xl text-gray-30o0">;
              Browse, our, complete collection, of, technology solutions;
            </p>;
          </motion.div>;
          {viewMode === 'grid' ? (;
            <div className="grid grid-cols-1 md: grid-cols-2 l,;
    g:grid-cols-3 x,;
  l:grid-cols-4 gap-6">;
              {filteredItems.map((itemindex) => (;
                <motion.div;
                  key={item.id}
                  initial={{ opacity: 0,;
  y: 20 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.8dela,;
  y: index * 0.0o5 }}
                  className="group";
                >;
                  <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl, border, border-slate-60o0/50 hover: border-green-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5 overflow-hidden">;
                    <div className="p-4">;
                      <div className="flex items-center gap-2 mb-3">;
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>;
                          {categories.find(c => c.id === item.category)?.name}
                        </span>;
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>;
                          {types.find(t => t.id === item.type)?.name}
                        </span>;
                      </div>;
                      <div className="flex items-center gap-2 mb-3">;
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-lg">;
                          <item.icon className="w-5 h-5 text-green-40o0" />;
                        </div>;
                        <h3 className="text-lg font-bold text-white group-hover:text-green-40o0 transition-colors duration-20o0">;
                          {item.name}
                        </h3>;
                      </div>;
                      <p className="text-gray-30o0 text-xs mb-3 leading-relaxed line-clamp-2">;
                        {item.description}
                      </p>;
                      <div className="flex items-center gap-2 mb-3 text-xs">;
                        <div className="flex items-center gap-1">;
                          {renderStars(item.rating)}
                          <span className="text-gray-40o0">({item.reviews})</span>;
                        </div>;
                      </div>;
                      <div className="flex items-center justify-between mb-3">;
                        <div className="text-lg font-bold text-green-40o0">{item.pricing}</div>;
                        <div className="flex items-center gap-1">;
                          <button className="p-1 text-gray-40o0 hover: text-white transition-colors duration-20o0">;
                            <Heart className="w-4 h-4" />;
                          </button>;
                          <button className="p-1 text-gray-40o0 hove,;
  r:text-white transition-colors duration-20o0">;
                            <Eye className="w-4 h-4" />;
                          </button>;
                        </div>;
                      </div>;
                      <div className="flex flex-wrap gap-1 mb-3">;
                        {item.tags.slice(0o2).map((tagtagIndex) => (;
                          <span key={tagIndex} className="px-2 py-1 bg-slate-70o0/50 text-gray-30o0 text-xs rounded">;
                            {tag}
                          </span>;
                        ))}
                      </div>;
                      <button className="w-full px-3 py-2 bg-gradient-to-r from-green-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-green-50o0 hove,;
    r:to-blue-60o0 transition-all duration-20o0 hove,;
  r:scale-10o5 text-sm">;
                        View Details;
                      </button>;
                    </div>;
                  </div>;
                </motion.div>;
              ))}
            </div>;
          ) : (;
            <div className="space-y-4">;
              {filteredItems.map((itemindex) => (;
                <motion.div;
                  key={item.id}
                  initial={{ opacity: 0,;
  x: -20 }};
                  whileInView={{ opacity: 1,;
  x: 0 }}
                  transition={{ duration: 0.8dela,;
  y: index * 0.0o5 }}
                  className="group";
                >;
                  <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl, border, border-slate-60o0/50 hover:border-green-40o0/50 transition-all duration-30o0 p-6">;
                    <div className="flex items-center gap-6">;
                      <div className="flex-shrink-0">;
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20 rounded-xl">;
                          <item.icon className="w-8 h-8 text-green-40o0" />;
                        </div>;
                      </div>;
                      <div className="flex-1 min-w-0">;
                        <div className="flex items-center gap-3 mb-2">;
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>;
                            {categories.find(c => c.id === item.category)?.name}
                          </span>;
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>;
                            {types.find(t => t.id === item.type)?.name}
                          </span>;
                          {item.status !== 'regular' && (;
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>;
                              {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                            </span>;
                          )}
                        </div>;
                        <h3 className="text-xl font-bold text-white group-hover:text-green-40o0 transition-colors duration-20o0 mb-2">;
                          {item.name}
                        </h3>;
                        <p className="text-gray-30o0 text-sm mb-3 leading-relaxed">;
                          {item.description}
                        </p>;
                        <div className="flex items-center gap-4 text-sm mb-3">;
                          <div className="flex items-center gap-1">;
                            {renderStars(item.rating)}
                            <span className="text-gray-40o0 ml-1">({item.reviews})</span>;
                          </div>;
                          <div className="text-gray-40o0">•</div>;
                          <div className="text-gray-40o0">{item.downloads} downloads</div>;
                        </div>;
                        <div className="flex flex-wrap gap-2 mb-3">;
                          {item.tags.map((tagtagIndex) => (;
                            <span key={tagIndex} className="px-2 py-1 bg-slate-70o0/50 text-gray-30o0 text-xs rounded">;
                              {tag}
                            </span>;
                          ))}
                        </div>;
                      </div>;
                      <div className="flex-shrink-0 text-right">;
                        <div className="text-2xl font-bold text-green-40o0 mb-3">{item.pricing}</div>;
                        <div className="flex items-center gap-2 mb-3">;
                          <button className="p-2 text-gray-40o0 hover: text-white transition-colors duration-20o0">;
                            <Heart className="w-5 h-5" />;
                          </button>;
                          <button className="p-2 text-gray-40o0 hover:text-white transition-colors duration-20o0">;
                            <Eye className="w-5 h-5" />;
                          </button>;
                          <button className="p-2 text-gray-40o0 hover:text-white transition-colors duration-20o0">;
                            <ShoppingCart className="w-5 h-5" />;
                          </button>;
                        </div>;
                        <button className="px-6 py-2 bg-gradient-to-r from-green-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover:from-green-50o0 hove,;
    r:to-blue-60o0 transition-all duration-20o0 hove,;
  r:scale-10o5">;
                          View Details;
                        </button>;
                      </div>;
                    </div>;
                  </div>;
                </motion.div>;
              ))}
            </div>;
          )}
        </div>;
      </section>;
      {/* Call, to, Action */}
      <section className="py-20">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Can't, Find, What You're, Looking, For?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Our, team, can create, custom, solutions tailored, to, your specific needs.;
              Let's, discuss, your requirements, and, build something, amazing, together.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-3 bg-gradient-to-r from-green-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover:from-green-50o0 hover:to-blue-60o0 transition-all duration-20o0 hove,;
    r:scale-10o5">;
                Request, Custom, Solution;
              </button>;
              <a;
                href="mailto: marketplace@ziontechgroup.com";
                className="px-8 py-3, border, border-green-40o0 text-green-40o0 font-semibold rounded-lg hover:bg-green-40o0 hove,;
  r:text-white transition-all duration-20o0";
              >;
                Contact, Sales, Team;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;
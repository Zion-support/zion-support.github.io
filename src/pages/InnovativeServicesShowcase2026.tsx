import React, { useState, useMemo } from 'react';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
=======
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search,
  Filter,
  Star,
  TrendingUp,
  Clock,
  Users,
  Target,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Atom,
  Heart,
  Satellite,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Award,
  Globe,
  Code,
  Lock,
  BarChart3,
  Workflow,
  Eye,
import React, { useState, useMemo } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Brain,
  Shield,
  Zap,
  Cloud,
  Lock,
  Globe,
  Shield,
  BarChart3,
=======
  Clock,
=======
  Server,
  Smartphone,
  Database,
  Network,
  PenTool,
  Building,
  Truck,
  DollarSign,
  BookOpen,
  MessageCircle,
=======
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ExternalLink
              } from 'lucide-react.ts';
import { INNOVATIVE_SERVICES               } from '../data/servicesData';
export default function InnovativeServicesShowcase2026(...args[]: any):  {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('innovation');
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'DevOps & Infrastructure', name: 'DevOps & Infrastructure', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-rose-500 to-pink-500' },;
    { id: 'AI & Edge Computing', name: 'AI & Edge Computing', icon: Zap, color: 'from-amber-500 to-yellow-500' };
  ];
  const filteredServices = INNOVATIVE_SERVICES.filter(service => {;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch});
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {;
      case 'price':;
        return a.price - b.price;
      case 'innovation':
        return a.innovationLevel === 'Cutting-edge' ? -1 : 1;
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
import React, { useState, useMemo } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Brain,
  Shield,
  Zap,
  Cloud,
  Lock,
  Globe,
  Shield,
  BarChart3,
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Scale,
  Gauge,
  Briefcase,
  Building,
  Car,
  Factory,
  Plane,
  Ship,
  Train,
  Truck,
  Warehouse,
  Store,
  ShoppingCart,
  CreditCard,
  ChartLine,
  Target,
  Award,
  Trophy,
  Crown,
  Diamond,
  Gem,
  Sparkle,
  Zap,
  Thunder,
  Lightning,
  Fire,
  Flame,
  Sun,
  Moon,
  Star,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Loop,
  Refresh,
  RotateCcw,
  RotateCw,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Stop,
  Record,
  Mic,
  Video,
  Camera,
  Image,
  Film,
  Music,
  Headphones,
  Speaker,
  Volume,
  Mute,
  Unmute,
  Maximize,
  Minimize,
  Fullscreen,
  ExitFullscreen,
  Expand,
  Compress,
  Move,
  Drag,
  Hand,
  Pointer,
  MousePointer,
  MousePointer2,
  MousePointerClick,
  MousePointerClick2,
  MousePointerOff,
  MousePointerOff2,
  MousePointerQuestion,
  MousePointerQuestion2,
  MousePointerX,
  MousePointerX2,
  MousePointerCheck,
  MousePointerCheck2,
  MousePointerMinus,
  MousePointerMinus2,
  MousePointerPlus,
  MousePointerPlus2,
  MousePointerSearch,
  MousePointerSearch2,
  MousePointerText,
  MousePointerText2,
  MousePointerCode,
  MousePointerCode2,
  MousePointerEdit,
  MousePointerEdit2,
  MousePointerMove,
  MousePointerMove2
} from 'lucide-react';
import { INNOVATIVE_SERVICES } from '../data/servicesData';

export default function InnovativeServicesShowcase2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: INNOVATIVE_SERVICES.length },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('AI')).length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Cybersecurity')).length },
    { id: 'DevOps', name: 'DevOps & Infrastructure', icon: Server, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('DevOps')).length },
    { id: 'Healthcare', name: 'Healthcare & AI', icon: Activity, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Healthcare')).length },
    { id: 'Edge Computing', name: 'Edge Computing', icon: Cpu, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Edge')).length },
    { id: 'Legal Tech', name: 'Legal Tech & AI', icon: Scale, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Legal')).length },
    { id: 'Customer Success', name: 'Customer Success & AI', icon: Users, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Customer')).length },
    { id: 'FinTech', name: 'FinTech & AI', icon: Coins, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('FinTech')).length },
    { id: 'Supply Chain', name: 'Supply Chain & AI', icon: Truck, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Supply Chain')).length },
    { id: 'Content', name: 'Content & AI', icon: FileText, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Content')).length },
    { id: 'SEO', name: 'SEO & AI', icon: Search, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('SEO')).length },
    { id: 'IoT', name: 'IoT & AI', icon: Wifi, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('IoT')).length },
    { id: 'HR', name: 'HR & AI', icon: Users2, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('HR')).length },
    { id: 'Sales', name: 'Sales & AI', icon: Target, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Sales')).length },
    { id: 'Compliance', name: 'Compliance & AI', icon: ShieldCheck, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Compliance')).length },
    { id: 'Cloud', name: 'Cloud & FinOps', icon: Cloud, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Cloud')).length },
    { id: 'Manufacturing', name: 'Manufacturing & AI', icon: Factory, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Manufacturing')).length },
    { id: 'Space Tech', name: 'Space Tech & AI', icon: Satellite, count: INNOVATIVE_SERVICES.filter(s => s.category.includes('Space')).length }
  ];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>;
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      );

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'innovation':
          return b.innovationLevel === 'Revolutionary' ? 1 : -1;
        case 'roi':
          return parseInt(b.roi.split('-')[0]) - parseInt(a.roi.split('-')[0]);
        default:
          return 0;

    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    switch (category) {;
      case 'AI & Automation':;
        return <Cpu className="w-5 h-5" />;
      case 'Quantum Computing':
        return <Zap className="w-5 h-5" />;
      case 'Blockchain':
        return <Database className="w-5 h-5" />;
      case 'Cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'IoT':
        return <Globe className="w-5 h-5" />;
      case 'AI & Content':
        return <Cpu className="w-5 h-5" />;
      case 'DevOps':
        return <Database className="w-5 h-5" />;
      case 'Finance':
        return <TrendingUp className="w-5 h-5" />;
      case 'Sustainability':
        return <Leaf className="w-5 h-5" />;
      default:
        return 0}
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      };
    };
  HelpCircle,
  FileText,
  Cpu,
  TrendingDown,
  Calendar,
  UserCheck,
  ShieldCheck,
  Zap as ZapIcon,
  ShoppingCart,
  Gauge,
  MessageCircle as MessageCircleIcon,
  Leaf,
  Wallet,
  GraduationCap,
  Factory,
  Car,
  Building2,
  Wifi,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon2,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Rocket as RocketIcon,
  Leaf as LeafIcon
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2026, InnovativeService2026 } from '../data/innovativeServices2026';

export default function InnovativeServicesShowcase2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get unique categories
  const categories = ['all', ...new Set(INNOVATIVE_SERVICES_2026.map(service => service.category))];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    return INNOVATIVE_SERVICES_2026
      .filter(service =>
        (selectedCategory === 'all' || service.category === selectedCategory) &&
        (service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      )
      .sort((a, b) => {
        switch (sortBy) {
          case 'featured':
            return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
          case 'popular':
            return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
          case 'new':
            return (b.new ? 1 : 0) - (a.new ? 1 : 0);
          case 'price-low':
            return a.price - b.price;
          case 'price-high':
            return b.price - a.price;
          case 'name':
            return a.name.localeCompare(b.name);
          case 'ai-score':
            return b.aiScore - a.aiScore;
          default:
            return 0;
        }
      });
  }, [searchTerm, selectedCategory, sortBy]);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      Brain: BrainIcon,
      TrendingUp: TrendingUp,
      Server: Server,
      Shield: ShieldIcon,
      Lock: Lock,
      Cpu: Cpu,
      Atom: AtomIcon,
      ShieldCheck: ShieldCheck,
      Heart: Heart,
      BookOpen: BookOpen,
      Leaf: LeafIcon,
      Rocket: RocketIcon,
      Zap: ZapIcon2,
      Database: DatabaseIcon,
      Network: Network,
      Workflow: Workflow,
      Globe: Globe,
      Users: Users,
      Target: Target,
      Star: Star
    };
    return iconMap[iconName] || BrainIcon;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI Services': 'from-purple-500 to-pink-500',
      'IT Services': 'from-blue-500 to-cyan-500',
      'Micro SAAS': 'from-green-500 to-emerald-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud Solutions': 'from-blue-500 to-indigo-500',
      'Blockchain': 'from-indigo-500 to-purple-500',
      'IoT': 'from-teal-500 to-green-500',
      'Quantum Computing': 'from-orange-500 to-red-500',
      'FinTech': 'from-green-500 to-blue-500',
      'HealthTech': 'from-red-500 to-pink-500',
      'EdTech': 'from-blue-500 to-indigo-500',
      'GreenTech': 'from-green-500 to-teal-500'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
=======
  };

  const getInnovationBadge = (level: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    const colors = {
  'Revolutionary': 'bg-gradient-to-r from-purple-600 to-pink-600',
      'Advanced': 'bg-gradient-to-r from-blue-600 to-cyan-600',;
  ;
  ;
  ;
  ;
  'Cutting-Edge': 'bg-gradient-to-r from-green-600 to-emerald-600';
    ;






};

    return (
      <span className = {`${colors[level as keyof typeof colors] || colors.Advanced} text-white text-xs px-2 py-1 rounded-full font-semibold`}>;
        {level};
      </span>;
    );
  };
  const pricingModels = [
    { id: 'all', name: 'All Pricing Models' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'annual', name: 'Annual' },
    { id: 'enterprise', name: 'Enterprise' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'price', label: 'Price' },
    { value: 'category', label: 'Category' },
    { value: 'type', label: 'Type' }
  ];
=======
  const filteredServices = INNOVATIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: '25+', label: 'Innovative Services', icon: Rocket },
    { number: '15+', label: 'Industry Categories', icon: Building },
    { number: '99.9%', label: 'Uptime Guarantee', icon: CheckCircle },
    { number: '24/7', label: 'Expert Support', icon: Users }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Innovative Services Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge AI-powered micro SAAS services, IT solutions, and innovative technology platforms. Transform your business with Zion Tech Group's revolutionary solutions." />
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, cybersecurity, cloud computing, digital transformation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2026" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
=======

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                2026 Innovative Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover cutting-edge AI, IT, and Micro SAAS solutions that transform businesses and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Info className="w-5 h-5 mr-2" />
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search innovative services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="popular">Popular</option>
                  <option value="new">New</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                  <option value="ai-score">AI Score</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex bg-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                    : 'border-white/20 text-white hover:border-cyan-500/50 hover:bg-cyan-500/10'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
                <span className="ml-2 px-2 py-1 bg-white/10 rounded-full text-sm">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                      {service.innovationLevel}
                    </span>
                    <span className="text-2xl font-bold text-cyan-400">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.estimatedDelivery}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI and Market Info */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-cyan-400 font-semibold">ROI</div>
                      <div className="text-white">{service.roi}</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-cyan-400 font-semibold">Market Size</div>
                      <div className="text-white text-xs">{service.marketSize}</div>
                    </div>
                  </div>
                </div>

                {/* Contact and CTA */}
                <div className="space-y-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Get Started
                  </a>
                  <div className="text-center text-xs text-gray-400">
                    Contact: {contactInfo.phone} | {contactInfo.email}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already leveraging our innovative AI-powered solutions to drive growth, efficiency, and competitive advantage.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-gray-300">{contactInfo.phone}</div>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-gray-300">{contactInfo.email}</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-gray-300 text-sm">{contactInfo.address}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Consultation
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=Innovative Services Inquiry`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Request Custom Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another technology company. We're your strategic partner in digital transformation, 
              delivering cutting-edge solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Innovation First",
                description: "We stay ahead of the curve with the latest AI, machine learning, and emerging technologies."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SOC 2, ISO 27001, and industry-leading security practices protect your data and operations."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Our certified professionals bring decades of combined experience in cutting-edge technologies."
              },
              {
                icon: CheckCircle,
                title: "Proven Results",
                description: "Track record of delivering 200-600% ROI for clients across diverse industries."
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Serving clients worldwide with localized support and 24/7 availability."
              },
              {
                icon: Sparkles,
                title: "Future-Ready",
                description: "Solutions designed to scale and evolve with your business needs and technology advances."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Digital Transformation Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for the future. Create it with Zion Tech Group's innovative AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=Innovative Services Showcase 2026`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <Mail className="w-6 h-6 mr-2" />
                Email {contactInfo.email}
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Visit us at: <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300">{contactInfo.website}</a></p>
              <p className="mt-2">{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>
      </section>
=======
      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative services can drive your success and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Today
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                {contactInfo.phone}
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>{contactInfo.email}</p>
              <p>{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Missing icon components
const Grid = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const List = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);

const Info = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

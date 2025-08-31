<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useMemo } from 'react';
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
<<<<<<< HEAD
<<<<<<< HEAD
  Scale, 
  Building2, 
  Truck, 
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react.ts';
import { motion               } from 'framer-motion.ts';
import { Brain, 
  Shield, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
  Cloud, 
=======
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8
  Shield, 
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
import React, { useState, useMemo } from 'react.ts';
import { motion              } from 'framer-motion.ts';
<<<<<<< HEAD
import { Search, Filter, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Cpu, Database, Lock, Leaf, Phone, Mail, MapPin import { SEO              } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2026              } from '../data/innovativeMicroSaasServices2026';

const InnovativeServicesShowcase2026: React.FC = (): JSX.Element => {
=======
import { Brain,
  Shield,
  Zap,
  Cloud,
  Lock,
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  Globe,
  Shield,
  BarChart3,
=======
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
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
<<<<<<< HEAD
  Filter,
<<<<<<< HEAD
=======
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Scale,
  Gauge,
<<<<<<< HEAD
  Microscope,
  Flask,
  TestTube,
  Beaker,
  Calculator,
  ChartBar,
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  PieChart,
  LineChart,
  AreaChart,
  ScatterChart,
  BarChart3Icon,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';

<<<<<<< HEAD
export default function InnovativeServicesShowcase2026() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
=======
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
             } from 'lucide-react.ts';
import { INNOVATIVE_SERVICES              } from '../data/servicesData';
export default function InnovativeServicesShowcase2026(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState('all');
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('innovation');
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
// Import our new service data
import { INNOVATIVE_MICRO_SAAS_SERVICES_2026 } from '../data/innovativeMicroSaasServices2026';
import { INNOVATIVE_IT_SERVICES_2026 } from '../data/innovativeITServices2026';
import { INNOVATIVE_AI_SERVICES_2026 } from '../data/innovativeAIServices2026';
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
=======
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
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8

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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);
=======
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
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      default:
<<<<<<< HEAD
        return <Star className="w-5 h-5" />;

=======
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
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
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
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
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8

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
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative Services
              </span>
              <br />
              <span className="text-white">Showcase 2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary AI-powered micro SAAS services, cutting-edge IT solutions, and innovative technology platforms that are transforming industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
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
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
            >
              {/* Service Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  service.type === 'Micro SAAS' ? 'bg-green-500/20 text-green-400' :
                  service.type === 'IT Services' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {service.type}
                </span>
                <span className="text-slate-400 text-sm">{service.innovationLevel}</span>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Innovative Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Showcase 2026</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover our latest AI-powered solutions designed to revolutionize industries and transform business operations. 
                Experience unprecedented efficiency, accuracy, and cost savings.
=======

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.description}
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-slate-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Pricing and Benefits */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl font-bold text-white">
                    {service.currency}{service.price.toLocaleString()}
                    <span className="text-sm text-slate-400 font-normal">/{service.pricingModel}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-400">Market Price</div>
                    <div className="text-sm text-slate-300">{service.marketPrice}</div>
                  </div>
                </div>
                <div className="text-sm text-slate-400 mb-2">ROI: {service.roi}</div>
                <div className="text-sm text-slate-400">Delivery: {service.estimatedDelivery}</div>
              </div>

              {/* Contact Button */}
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get Started
                </a>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-medium py-2 px-6 rounded-lg transition-all duration-300 text-center text-sm"
                >
<<<<<<< HEAD
                  Schedule Demo
                </motion.button>
=======
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
<<<<<<< HEAD
                  className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyborder-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"

                  {categories.map(category              => (
                    <option key={category} value={category}>{category}</option>
=======
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category               => (
                    <option key={category.id} value={category.id}>{category.name}</option>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                  ))}
                </select>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
                  Learn More
                </a>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-slate-400">Try adjusting your search criteria or filters.</p>
          </div>
<<<<<<< HEAD
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-zinc-800/50 text-gray-300 hover:bg-zinc-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
=======
      {/* Services Grid */}
      <motion.div
        className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index)              => (
              <motion.div
                key={service.id}
                initial = {
  { opacity: 0,
  y: 20 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-400/10"
<<<<<<< HEAD

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-400/10 rounded-lg text-cyan-400">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-cyan-300/70">
                        {service.category}
                      </div>
                      <div className="text-xs text-slate-400">
                        {service.subcategory}
                      </div>
                    </div>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-purple-400 font-semibold">{service.price}</div>
                    <Link
                      to={service.href}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of businesses already using our innovative solutions to drive growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Need Help Getting Started?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-3" />
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-3" />
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-400 mb-3" />
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
=======
        )}
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Our team of experts is ready to help you choose the right services and implement solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 hover:bg-slate-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2 text-slate-300">
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">
                  Home
                </a>
                <a href="https://ziontechgroup.com/services" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">
                  Services
                </a>
                <a href="https://ziontechgroup.com/about" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">
                  About
                </a>
                <a href="https://ziontechgroup.com/contact" target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Service Categories</h3>
              <div className="space-y-2 text-slate-300">
                <span className="block">AI Services</span>
                <span className="block">IT Services</span>
                <span className="block">Micro SAAS</span>
                <span className="block">Cloud Solutions</span>
                <span className="block">Cybersecurity</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Get Started</h3>
              <p className="text-slate-300 mb-4">
                Ready to transform your business with our innovative solutions?
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
=======
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
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8
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
    </div>
  );
}

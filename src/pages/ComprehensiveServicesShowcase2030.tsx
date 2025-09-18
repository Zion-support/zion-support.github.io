import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  MapPin,
  Infinity,
  Link as LinkIcon,
  Atom,
  Leaf as LeafIcon,
  Factory,
  Microscope,
  Gauge,
  Palette,
  BookOpen,
  Lightbulb,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
  Database as DatabaseIcon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Lock as LockIcon,
  Heart as HeartIcon,
  Star as StarIcon,
  ArrowRight as ArrowRightIcon,
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
  Code as CodeIcon,
  Network as NetworkIcon,
  Smartphone as SmartphoneIcon,
  BarChart3 as BarChart3Icon,
  MessageSquare as MessageSquareIcon,
  FileText as FileTextIcon,
  ShoppingCart as ShoppingCartIcon,
  Headphones as HeadphonesIcon,
  Mail as MailIcon2,
  Search as SearchIcon,
  HelpCircle as HelpCircleIcon,
  ShieldCheck as ShieldCheckIcon,
  Globe2 as Globe2Icon,
  Leaf as LeafIcon2,
  Sparkles as SparklesIcon,
  Target as TargetIcon,
  DollarSign as DollarSignIcon,
  Clock as ClockIcon,
  Award as AwardIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Infinity as InfinityIcon,
  Eye,
  BarChart,
  PieChart,
  Activity,
  Zap as ZapIcon2,
  Shield as ShieldIcon2,
  Users as UsersIcon2,
  Database as DatabaseIcon2,
  Globe as GlobeIcon2,
  Cpu as CpuIcon2,
  Lock as LockIcon2,
  Heart as HeartIcon2,
  Star as StarIcon2,
  ArrowRight as ArrowRightIcon2,
  CheckCircle as CheckCircleIcon2,
  TrendingUp as TrendingUpIcon2,
  Code as CodeIcon2,
  Network as NetworkIcon2,
  Smartphone as SmartphoneIcon2,
  BarChart3 as BarChart3Icon2,
  MessageSquare as MessageSquareIcon2,
  FileText as FileTextIcon2,
  ShoppingCart as ShoppingCartIcon2,
  Headphones as HeadphonesIcon2,
  Mail as MailIcon3,
  Search as SearchIcon2,
  HelpCircle as HelpCircleIcon2,
  ShieldCheck as ShieldCheckIcon2,
  Globe2 as Globe2Icon2,
  Leaf as LeafIcon3,
  Sparkles as SparklesIcon2,
  Target as TargetIcon2,
  DollarSign as DollarSignIcon2,
  Clock as ClockIcon2,
  Award as AwardIcon2,
  Phone as PhoneIcon2,
  MapPin as MapPinIcon2,
  Infinity as InfinityIcon2
} from 'lucide-react';
import SEO from '../components/SEO';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from '../data/comprehensiveInnovativeServices2030';

export default function ComprehensiveServicesShowcase2030() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState('grid');

  // Enhanced categories with new services
  const categories = [
    { id: 'all', name: 'All Services', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐', color: 'from-teal-500 to-cyan-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' },
    { id: 'FinTech', name: 'FinTech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' },
    { id: 'Digital Twin', name: 'Digital Twin', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Digital Twin').length, icon: '🔄', color: 'from-blue-500 to-indigo-500' },
    { id: 'Space Technology', name: 'Space Technology', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Sustainable Technology').length, icon: '🌱', color: 'from-green-500 to-teal-500' },
    { id: 'AI & Content', name: 'AI & Content', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' },
    { id: 'AI & HR', name: 'AI & HR', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Research', name: 'AI & Research', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Green Tech').length, icon: '🌿', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Space Tech').length, icon: '🛸', color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' },
    { id: 'AI & Development', name: 'AI & Development', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Development').length, icon: '💻', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Education', name: 'AI & Education', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Entertainment').length, icon: '🎮', color: 'from-purple-500 to-pink-500' }
  ];

  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return b.rating - a.rating;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Business Intelligence':
        return <Brain className="w-6 h-6" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'Cloud & DevOps':
        return <Cloud className="w-6 h-6" />;
      case 'AI & Marketing':
        return <TrendingUp className="w-6 h-6" />;
      case 'Quantum Computing':
        return <Atom className="w-6 h-6" />;
      case 'IoT & Edge Computing':
        return <Network className="w-6 h-6" />;
      case 'Blockchain & Web3':
        return <LinkIcon className="w-6 h-6" />;
      case 'AI & Healthcare':
        return <Heart className="w-6 h-6" />;
      case 'FinTech':
        return <DollarSign className="w-6 h-6" />;
      case 'Digital Twin':
        return <Globe className="w-6 h-6" />;
      case 'Space Technology':
        return <Rocket className="w-6 h-6" />;
      case 'Sustainable Technology':
        return <Leaf className="w-6 h-6" />;
      case 'AI & Content':
        return <FileText className="w-6 h-6" />;
      case 'AI & Customer Support':
        return <MessageSquare className="w-6 h-6" />;
      case 'AI & HR':
        return <Users className="w-6 h-6" />;
      case 'AI & Legal Tech':
        return <ShieldCheck className="w-6 h-6" />;
      case 'AI & Research':
        return <Microscope className="w-6 h-6" />;
      case 'AI & Green Tech':
        return <LeafIcon className="w-6 h-6" />;
      case 'AI & Metaverse':
        return <Globe2 className="w-6 h-6" />;
      case 'AI & Space Tech':
        return <Rocket className="w-6 h-6" />;
      case 'AI & Operations':
        return <Factory className="w-6 h-6" />;
      case 'AI & Development':
        return <Code className="w-6 h-6" />;
      case 'AI & Education':
        return <BookOpen className="w-6 h-6" />;
      case 'AI & Entertainment':
        return <Palette className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  const getServiceCard = (service: any, index: number) => (
    <divdiv
      key={service.id}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-500 shadow-xl hover:shadow-2xl"
    >
      {/* Service Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
            {getCategoryIcon(service.category)}
          </div>
          <div>
            <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
              {service.subcategory}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white font-bold">{service.rating}</span>
          </div>
          <span className="text-gray-400 text-sm">({service.reviewCount})</span>
        </div>
      </div>

      {/* Service Title and Description */}
      <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-700 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Price</span>
            <span className="text-white font-bold text-lg">{service.currency}{service.price.toLocaleString()}</span>
          </div>
          <div className="text-blue-400 text-sm">{service.marketPrice}</div>
        </div>
        <div className="bg-gray-700 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">ROI</span>
            <span className="text-green-400 font-bold text-lg">{service.roi}</span>
          </div>
          <div className="text-yellow-400 text-sm">{service.setupTime}</div>
        </div>
      </div>

      {/* AI Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm font-semibold">AI Intelligence Score</span>
          <span className="text-white font-bold">{service.aiScore}/100</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${service.aiScore}%` }}
          ></div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-6">
        <p className="text-gray-400 text-sm mb-3 font-semibold">Key Features:</p>
        <div className="flex flex-wrap gap-2">
          {service.tags.slice(0, 4).map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Link
          to={`/services/${service.id}`}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
        <a
          href={`https://ziontechgroup.com/services/${service.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full border-2 border-blue-500 text-blue-400 font-semibold py-3 px-4 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center"
        >
          <span>Visit Service Page</span>
          <Globe className="w-4 h-4 ml-2" />
        </a>
        <a
          href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
          className="w-full border-2 border-purple-500 text-purple-400 font-semibold py-3 px-4 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center"
        >
          <span>Get Quote</span>
          <Mail className="w-4 h-4 ml-2" />
        </a>
      </div>
    </divdiv>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2030 - Zion Tech Group"
        description="Explore our revolutionary portfolio of AI-powered, blockchain-enabled, and quantum computing services. Transform your business with cutting-edge technology solutions from Zion Tech Group."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <divdiv
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Future-Ready
              </span>
              <br />
              <span className="text-white">Technology Services</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-5xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of revolutionary AI, blockchain, quantum computing, and sustainable technology solutions. 
              Transform your business with autonomous operations and cutting-edge innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-2xl"
              >
                <Phone className="w-6 h-6 mr-3" />
                Start Your Transformation
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-10 py-5 border-3 border-blue-500 text-blue-400 font-bold text-xl rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call Now: +1 302 464 0950
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length}+</div>
                <div className="text-gray-300">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">500%+</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </divdiv>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-bold text-lg mb-2">Call Us</p>
              <a href="tel:+13024640950" className="text-blue-300 hover:text-white transition-colors text-lg">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-bold text-lg mb-2">Email Us</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:text-white transition-colors text-lg">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-bold text-lg mb-2">Visit Us</p>
              <p className="text-pink-300 text-lg">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <divdiv
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Revolutionary Service Portfolio
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our cutting-edge services span across AI, blockchain, quantum computing, and sustainable technology. 
            Each solution is designed to deliver measurable business value and competitive advantage in the digital age.
          </p>
        </divdiv>

        {/* Category Filter */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border-2 border-gray-700'
                }`}
              >
                <span className="mr-3 text-2xl">{category.icon}</span>
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Search, Sort, and View Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center items-center">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-6 py-3 bg-gray-800 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-96 text-lg"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-6 py-3 bg-gray-800 border-2 border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          >
            <option value="rating">Sort by Rating</option>
            <option value="price">Sort by Price</option>
            <option value="reviews">Sort by Reviews</option>
            <option value="name">Sort by Name</option>
          </select>
          <div className="flex bg-gray-800 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-lg transition-all duration-300 ${
                viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-6 h-6" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-lg transition-all duration-300 ${
                viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <FileText className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Services Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              {sortedServices.map((service, index) => getServiceCard(service, index))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              {sortedServices.map((service, index) => (
                <divdiv
                  key={service.id}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700 shadow-xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                          {getCategoryIcon(service.category)}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                          <span className="text-gray-400 bg-gray-700 px-4 py-2 rounded-full text-lg">
                            {service.subcategory}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">{service.description}</p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {service.tags.slice(0, 6).map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-gray-700 rounded-xl p-6">
                        <h4 className="text-white font-bold text-lg mb-4">Service Details</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Price:</span>
                            <span className="text-white font-bold">{service.currency}{service.price.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Market Price:</span>
                            <span className="text-blue-400">{service.marketPrice}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">ROI:</span>
                            <span className="text-green-400 font-bold">{service.roi}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Setup Time:</span>
                            <span className="text-yellow-400">{service.setupTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-700 rounded-xl p-6">
                        <h4 className="text-white font-bold text-lg mb-4">AI Score</h4>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-white mb-2">{service.aiScore}/100</div>
                          <div className="w-full bg-gray-600 rounded-full h-3">
                            <div 
                              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                              style={{ width: `${service.aiScore}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Link
                          to={`/services/${service.id}`}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <a
                          href={`https://ziontechgroup.com/services/${service.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full border-2 border-blue-500 text-blue-400 font-bold py-4 px-6 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                        >
                          <span>Visit Service Page</span>
                          <Globe className="w-5 h-5 ml-2" />
                        </a>
                        <a
                          href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                          className="w-full border-2 border-purple-500 text-purple-400 font-bold py-4 px-6 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                        >
                          <span>Get Quote</span>
                          <Mail className="w-5 h-5 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </divdiv>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <divdiv
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h3>
            <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses already leveraging our cutting-edge technology solutions. 
              Get started today and experience the future of business innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-2xl"
              >
                <Phone className="w-6 h-6 mr-3" />
                Schedule Consultation
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-12 py-6 border-3 border-blue-500 text-blue-400 font-bold text-xl rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-6 h-6 mr-3" />
                Get Quote
              </a>
            </div>
          </div>
        </divdiv>
      </div>

      {/* Footer Contact Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-bold text-white mb-8">
                Let's Build the Future Together
              </h3>
              <p className="text-gray-300 mb-10 text-xl leading-relaxed">
                Our team of technology experts is ready to help you implement cutting-edge solutions 
                that will transform your business operations and drive unprecedented growth.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white text-lg">24/7 Technical Support</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white text-lg">Custom Implementation</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white text-lg">Ongoing Optimization</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white text-lg">ROI Guarantee</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-10">
              <h4 className="text-3xl font-bold text-white mb-8">Contact Information</h4>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Phone</p>
                    <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 text-lg">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-lg">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Address</p>
                    <p className="text-pink-400 text-lg">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Website</p>
                    <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-lg">
                      ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
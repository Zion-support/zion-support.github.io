import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Crown,
  Sparkles,
  Flame,
  Heart,
  Building,
  ShoppingCart,
  Factory,
  Truck,
  PenTool,
  Eye,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Award,
  TrendingDown,
  Users as UsersIcon,
  Settings,
  Wrench,
  Palette,
  Camera,
  Video,
  Music,
  Headphones,
  Gamepad2,
  Monitor,
  Smartphone,
  Tablet,
  Watch,
  Printer,
  Scanner,
  Projector,
  Speaker,
  Keyboard,
  Mouse,
  HardDrive,
  MemoryStick,
  Power,
  Battery,
  Wifi,
  Signal,
  Bluetooth,
  Nfc,
  QrCode,
  Barcode,
  CreditCard,
  Wallet,
  PiggyBank,
  Coins,
  Banknote,
  Receipt,
  Ticket,
  Gift,
  Package,
  Box,
  Archive,
  Folder,
  File,
  Image,
  Film,
  Book,
  Newspaper,
  CalendarDays,
  Clock3,
  Timer,
  Stopwatch,
  AlarmClock,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarWeek,
  CalendarMonth,
  CalendarYear,
  CalendarHeart,
  CalendarStar,
  CalendarClock,
  CalendarUser,
  CalendarSearch,
  CalendarEdit,
  CalendarTrash,
  CalendarLock,
  CalendarUnlock,
  CalendarSettings,
  CalendarOff,
  CalendarRepeat,
  CalendarRepeat1,
  CalendarRepeat2,
  CalendarRepeat3,
  CalendarRepeat4,
  CalendarRepeat5,
  CalendarRepeat6,
  CalendarRepeat7,
  CalendarRepeat8,
  CalendarRepeat9,
  CalendarRepeat10,
  CalendarRepeat11,
  CalendarRepeat12,
  CalendarRepeat13,
  CalendarRepeat14,
  CalendarRepeat15,
  CalendarRepeat16,
  CalendarRepeat17,
  CalendarRepeat18,
  CalendarRepeat19,
  CalendarRepeat20,
  CalendarRepeat21,
  CalendarRepeat22,
  CalendarRepeat23,
  CalendarRepeat24,
  CalendarRepeat25,
  CalendarRepeat26,
  CalendarRepeat27,
  CalendarRepeat28,
  CalendarRepeat29,
  CalendarRepeat30,
  CalendarRepeat31,
  Handshake as HandshakeIcon,
  Pipeline,
  GraduationCap,
  Stethoscope,
  Calculator,
  ChartBar,
  PresentationChartLine,
  UserGroup,
  Cog,
  Hammer,
  Screwdriver,
  Palette as PaletteIcon,
  Camera as CameraIcon,
  Video as VideoIcon,
  Music as MusicIcon,
  Headphones as HeadphonesIcon,
  Gamepad2 as Gamepad2Icon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Tablet as TabletIcon,
  Watch as WatchIcon,
  Printer as PrinterIcon,
  Scanner as ScannerIcon,
  Projector as ProjectorIcon,
  Speaker as SpeakerIcon,
  Keyboard as KeyboardIcon,
  Mouse as MouseIcon,
  HardDrive as HardDriveIcon,
  MemoryStick as MemoryStickIcon,
  Power as PowerIcon,
  Battery as BatteryIcon,
  Wifi as WifiIcon,
  Signal as SignalIcon,
  Bluetooth as BluetoothIcon,
  Nfc as NfcIcon,
  QrCode as QrCodeIcon,
  Barcode as BarcodeIcon,
  CreditCard as CreditCardIcon,
  Wallet as WalletIcon,
  PiggyBank as PiggyBankIcon,
  Coins as CoinsIcon,
  Banknote as BanknoteIcon,
  Receipt as ReceiptIcon,
  Ticket as TicketIcon,
  Gift as GiftIcon,
  Package as PackageIcon,
  Box as BoxIcon,
  Archive as ArchiveIcon,
  Folder as FolderIcon,
  File as FileIcon,
  Image as ImageIcon,
  Film as FilmIcon,
  Book as BookIcon,
  Newspaper as NewspaperIcon,
  CalendarDays as CalendarDaysIcon,
  Clock3 as Clock3Icon,
  Timer as TimerIcon,
  Stopwatch as StopwatchIcon,
  AlarmClock as AlarmClockIcon,
  CalendarCheck as CalendarCheckIcon,
  CalendarX as CalendarXIcon,
  CalendarPlus as CalendarPlusIcon,
  CalendarMinus as CalendarMinusIcon,
  CalendarRange as CalendarRangeIcon,
  CalendarWeek as CalendarWeekIcon,
  CalendarMonth as CalendarMonthIcon,
  CalendarYear as CalendarYearIcon,
  CalendarHeart as CalendarHeartIcon,
  CalendarStar as CalendarStarIcon,
  CalendarClock as CalendarClockIcon,
  CalendarUser as CalendarUserIcon,
  CalendarSearch as CalendarSearchIcon,
  CalendarEdit as CalendarEditIcon,
  CalendarTrash as CalendarTrashIcon,
  CalendarLock as CalendarLockIcon,
  CalendarUnlock as CalendarUnlockIcon,
  CalendarSettings as CalendarSettingsIcon,
  CalendarOff as CalendarOffIcon,
  CalendarRepeat as CalendarRepeatIcon,
  CalendarRepeat1 as CalendarRepeat1Icon,
  CalendarRepeat2 as CalendarRepeat2Icon,
  CalendarRepeat3 as CalendarRepeat3Icon,
  CalendarRepeat4 as CalendarRepeat4Icon,
  CalendarRepeat5 as CalendarRepeat5Icon,
  CalendarRepeat6 as CalendarRepeat6Icon,
  CalendarRepeat7 as CalendarRepeat7Icon,
  CalendarRepeat8 as CalendarRepeat8Icon,
  CalendarRepeat9 as CalendarRepeat9Icon,
  CalendarRepeat10 as CalendarRepeat10Icon,
  CalendarRepeat11 as CalendarRepeat11Icon,
  CalendarRepeat12 as CalendarRepeat12Icon,
  CalendarRepeat13 as CalendarRepeat13Icon,
  CalendarRepeat14 as CalendarRepeat14Icon,
  CalendarRepeat15 as CalendarRepeat15Icon,
  CalendarRepeat16 as CalendarRepeat16Icon,
  CalendarRepeat17 as CalendarRepeat17Icon,
  CalendarRepeat18 as CalendarRepeat18Icon,
  CalendarRepeat19 as CalendarRepeat19Icon,
  CalendarRepeat20 as CalendarRepeat20Icon,
  CalendarRepeat21 as CalendarRepeat21Icon,
  CalendarRepeat22 as CalendarRepeat22Icon,
  CalendarRepeat23 as CalendarRepeat23Icon,
  CalendarRepeat24 as CalendarRepeat24Icon,
  CalendarRepeat25 as CalendarRepeat25Icon,
  CalendarRepeat26 as CalendarRepeat26Icon,
  CalendarRepeat27 as CalendarRepeat27Icon,
  CalendarRepeat28 as CalendarRepeat28Icon,
  CalendarRepeat29 as CalendarRepeat29Icon,
  CalendarRepeat30 as CalendarRepeat30Icon,
  CalendarRepeat31 as CalendarRepeat31Icon,
  Handshake as HandshakeIcon
} from 'lucide-react';
import { ENHANCED_INNOVATIVE_SERVICES_2030 } from '../data/enhancedInnovativeServices2030';
import { SPECIALIZED_MICRO_SAAS_SERVICES_2030 } from '../data/specializedMicroSaasServices2030';
import { COMPREHENSIVE_PRICING_GUIDE_2030 } from '../data/comprehensivePricingGuide2030';
import { SEO } from '../components/SEO';

const EnhancedServicesShowcase2030: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  // Combine all services
  const allServices = [...ENHANCED_INNOVATIVE_SERVICES_2030, ...SPECIALIZED_MICRO_SAAS_SERVICES_2030];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Autonomous Systems', name: 'AI & Autonomous Systems', count: allServices.filter(s => s.category === 'AI & Autonomous Systems').length, icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Sales', name: 'AI & Sales', count: allServices.filter(s => s.category === 'AI & Sales').length, icon: '📈', color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Customer Service', name: 'AI & Customer Service', count: allServices.filter(s => s.category === 'AI & Customer Service').length, icon: '💬', color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '📊', color: 'from-cyan-500 to-blue-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: allServices.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-blue-500 to-indigo-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: allServices.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐', color: 'from-indigo-500 to-purple-500' },
    { id: 'Digital Twin', name: 'Digital Twin', count: allServices.filter(s => s.category === 'Digital Twin').length, icon: '👁️', color: 'from-purple-500 to-pink-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: allServices.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' },
    { id: 'Healthcare AI', name: 'Healthcare AI', count: allServices.filter(s => s.category === 'Healthcare AI').length, icon: '🏥', color: 'from-red-500 to-pink-500' },
    { id: 'Financial AI', name: 'Financial AI', count: allServices.filter(s => s.category === 'Financial AI').length, icon: '💰', color: 'from-emerald-500 to-green-500' },
    { id: 'Education AI', name: 'Education AI', count: allServices.filter(s => s.category === 'Education AI').length, icon: '🎓', color: 'from-blue-500 to-indigo-500' },
    { id: 'Real Estate AI', name: 'Real Estate AI', count: allServices.filter(s => s.category === 'Real Estate AI').length, icon: '🏢', color: 'from-gray-500 to-slate-500' },
    { id: 'E-commerce AI', name: 'E-commerce AI', count: allServices.filter(s => s.category === 'E-commerce AI').length, icon: '🛒', color: 'from-purple-500 to-pink-500' },
    { id: 'Manufacturing AI', name: 'Manufacturing AI', count: allServices.filter(s => s.category === 'Manufacturing AI').length, icon: '🏭', color: 'from-orange-500 to-red-500' },
    { id: 'Logistics AI', name: 'Logistics AI', count: allServices.filter(s => s.category === 'Logistics AI').length, icon: '🚚', color: 'from-cyan-500 to-blue-500' }
  ];

  const filteredServices = allServices.filter(service => {
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
        return (b.rating || 0) - (a.rating || 0);
      case 'price':
        return a.price - b.price;
      case 'aiScore':
        return (b.aiScore || 0) - (a.aiScore || 0);
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeServiceModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Autonomous Systems': Brain,
      'Cybersecurity': Shield,
      'AI & Content': PenTool,
      'AI & Sales': TrendingUp,
      'AI & Customer Service': MessageCircle,
      'AI & Analytics': BarChart3,
      'Cloud & DevOps': Cloud,
      'IoT & Edge Computing': Cpu,
      'Digital Twin': Eye,
      'Blockchain & Web3': Lock,
      'Healthcare AI': Heart,
      'Financial AI': TrendingUp,
      'Education AI': GraduationCap,
      'Real Estate AI': Building,
      'E-commerce AI': ShoppingCart,
      'Manufacturing AI': Factory,
      'Logistics AI': Truck
    };
    return iconMap[category] || Rocket;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Autonomous Systems': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-green-500 to-emerald-500',
      'AI & Content': 'from-orange-500 to-red-500',
      'AI & Sales': 'from-blue-500 to-cyan-500',
      'AI & Customer Service': 'from-indigo-500 to-purple-500',
      'AI & Analytics': 'from-cyan-500 to-blue-500',
      'Cloud & DevOps': 'from-blue-500 to-indigo-500',
      'IoT & Edge Computing': 'from-indigo-500 to-purple-500',
      'Digital Twin': 'from-purple-500 to-pink-500',
      'Blockchain & Web3': 'from-yellow-500 to-orange-500',
      'Healthcare AI': 'from-red-500 to-pink-500',
      'Financial AI': 'from-emerald-500 to-green-500',
      'Education AI': 'from-blue-500 to-indigo-500',
      'Real Estate AI': 'from-gray-500 to-slate-500',
      'E-commerce AI': 'from-purple-500 to-pink-500',
      'Manufacturing AI': 'from-orange-500 to-red-500',
      'Logistics AI': 'from-cyan-500 to-blue-500'
    };
    return colorMap[category] || 'from-cyan-500 to-blue-500';
  };

  return (
    <>
      <SEO 
        title="Revolutionary 2030 Services Showcase - Zion Tech Group"
        description="Explore our comprehensive suite of revolutionary AI, quantum computing, and innovative technology services for 2030. Transform your business with cutting-edge solutions."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="relative container-responsive py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Revolutionary 2030
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Services Showcase
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Experience the future of technology with our comprehensive suite of AI-powered, quantum-ready, and innovative solutions. 
                Transform your business operations and achieve unprecedented growth in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/request-quote"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-xl transition-all duration-200"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="container-responsive py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From AI-powered business operations to quantum cybersecurity, discover how our innovative solutions can revolutionize your business.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
              <div className="text-slate-300">Innovative Services</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">18</div>
              <div className="text-slate-300">Technology Categories</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%+</div>
              <div className="text-slate-300">AI Intelligence Score</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">$2B+</div>
              <div className="text-slate-300">Market Opportunity</div>
            </div>
          </motion.div>

          {/* Filters and Search */}
          <div className="bg-slate-800/50 rounded-xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search services, features, or categories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-shrink-0">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="flex-shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="aiScore">Sort by AI Score</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>

              {/* View Mode */}
              <div className="flex-shrink-0">
                <div className="flex bg-slate-700/50 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 rounded-md transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 rounded-md transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}
          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center`}>
                        {React.createElement(getCategoryIcon(service.category), { className: 'w-6 h-6 text-white' })}
                      </div>
                      {service.featured && (
                        <div className="flex items-center space-x-1 text-cyan-400">
                          <Star className="w-4 h-4" />
                          <span className="text-xs font-medium">Featured</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-400">{service.aiScore || 'N/A'}</div>
                        <div className="text-xs text-slate-400">AI Score</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-400">{service.rating || 'N/A'}</div>
                        <div className="text-xs text-slate-400">Rating</div>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        ${service.price.toLocaleString()}
                        <span className="text-sm text-slate-400 font-normal">/year</span>
                      </div>
                      <button
                        onClick={() => openServiceModal(service)}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-200"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center flex-shrink-0`}>
                        {React.createElement(getCategoryIcon(service.category), { className: 'w-8 h-8 text-white' })}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-bold text-white">{service.title}</h3>
                          {service.featured && (
                            <div className="flex items-center space-x-1 text-cyan-400">
                              <Star className="w-4 h-4" />
                              <span className="text-xs font-medium">Featured</span>
                            </div>
                          )}
                        </div>
                        <p className="text-slate-300 text-sm mb-3">{service.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-slate-400">
                          <span>AI Score: {service.aiScore || 'N/A'}</span>
                          <span>Rating: {service.rating || 'N/A'}</span>
                          <span>Delivery: {service.estimatedDelivery}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white mb-2">
                          ${service.price.toLocaleString()}
                          <span className="text-sm text-slate-400 font-normal">/year</span>
                        </div>
                        <button
                          onClick={() => openServiceModal(service)}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-200"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Results Count */}
          <div className="text-center mt-8">
            <p className="text-slate-400">
              Showing {sortedServices.length} of {allServices.length} services
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-t border-slate-700/50">
          <div className="container-responsive py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Join the future of technology with our revolutionary 2030 services. 
                Get in touch to discuss how we can help you achieve unprecedented growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your Transformation
                </Link>
                <Link
                  to="/request-quote"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-xl transition-all duration-200"
                >
                  Get Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {showModal && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeServiceModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${getCategoryColor(selectedService.category)} flex items-center justify-center`}>
                      {React.createElement(getCategoryIcon(selectedService.category), { className: 'w-8 h-8 text-white' })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                      <p className="text-slate-400">{selectedService.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeServiceModal}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-lg mb-6">{selectedService.description}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400">{selectedService.aiScore || 'N/A'}</div>
                    <div className="text-sm text-slate-400">AI Score</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{selectedService.rating || 'N/A'}</div>
                    <div className="text-sm text-slate-400">Rating</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{selectedService.price.toLocaleString()}</div>
                    <div className="text-sm text-slate-400">Price/Year</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-400">{selectedService.estimatedDelivery}</div>
                    <div className="text-sm text-slate-400">Delivery</div>
                  </div>
                </div>

                {/* Features and Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center space-x-2 text-slate-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-center space-x-2 text-slate-300">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technical Specs */}
                {selectedService.technicalSpecs && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Technical Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-cyan-400 mb-2">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.technology.map((tech: string, index: number) => (
                            <span key={index} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-md">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-cyan-400 mb-2">Integrations</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.integrations.map((integration: string, index: number) => (
                            <span key={index} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-md">
                              {integration}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Info */}
                <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Get Started</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span className="text-slate-300">{selectedService.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span className="text-slate-300">{selectedService.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GlobeIcon className="w-5 h-5 text-cyan-400" />
                      <span className="text-slate-300">{selectedService.contactInfo.website}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                      <span className="text-slate-300">{selectedService.contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg text-center transition-all duration-200 hover:scale-105"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/request-quote"
                    className="flex-1 px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg text-center transition-all duration-200"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedServicesShowcase2030;
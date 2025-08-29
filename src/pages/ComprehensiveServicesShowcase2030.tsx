import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Mail as MailIcon,
  MapPin,
  Infinity,
  Eye,
  BarChart,
  PieChart,
  Activity,
  Target as TargetIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
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
  Leaf as LeafIcon,
  Sparkles as SparklesIcon,
  Target as TargetIcon2,
  DollarSign as DollarSignIcon,
  Clock as ClockIcon,
  Award as AwardIcon,
  Phone as PhoneIcon,
  Mail as MailIcon3,
  MapPin as MapPinIcon,
  Infinity as InfinityIcon,
  BarChart3 as BarChart3Icon2,
  Calculator,
  Scale,
  Users as UsersIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from '../data/comprehensiveInnovativeServices2030';
import { ADDITIONAL_INNOVATIVE_SERVICES_2030 } from '../data/additionalInnovativeServices2030';
import { SPECIALIZED_MICRO_SAAS_SERVICES_2030 } from '../data/specializedMicroSaasServices2030';
import { ServiceComparisonTool } from '../components/ServiceComparisonTool';
import { ROICalculator } from '../components/ROICalculator';
import { EnhancedContactIntegration } from '../components/EnhancedContactIntegration';

// Combine all services
const ALL_SERVICES = [
  ...COMPREHENSIVE_INNOVATIVE_SERVICES_2030,
  ...ADDITIONAL_INNOVATIVE_SERVICES_2030,
  ...SPECIALIZED_MICRO_SAAS_SERVICES_2030
];

export default function ComprehensiveServicesShowcase2030() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [showComparisonTool, setShowComparisonTool] = useState(false);
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [showContactIntegration, setShowContactIntegration] = useState(false);
  const [selectedServiceForROI, setSelectedServiceForROI] = useState<any>(null);

  // Get unique categories from all services
  const categories = [
    { id: 'all', name: 'All Services', count: ALL_SERVICES.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: ALL_SERVICES.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Research', name: 'AI & Research', count: ALL_SERVICES.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: ALL_SERVICES.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: ALL_SERVICES.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' },
    { id: 'AI & Development', name: 'AI & Development', count: ALL_SERVICES.filter(s => s.category === 'AI & Development').length, icon: '💻', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Education', name: 'AI & Education', count: ALL_SERVICES.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', count: ALL_SERVICES.filter(s => s.category === 'AI & Entertainment').length, icon: '🎮', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: ALL_SERVICES.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: ALL_SERVICES.filter(s => s.category === 'AI & Space Tech').length, icon: '🛸', color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: ALL_SERVICES.filter(s => s.category === 'AI & Green Tech').length, icon: '🌿', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Transportation', name: 'AI & Transportation', count: ALL_SERVICES.filter(s => s.category === 'AI & Transportation').length, icon: '🚗', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: ALL_SERVICES.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' },
    { id: 'AI & HR', name: 'AI & HR', count: ALL_SERVICES.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-indigo-500 to-blue-500' },
    { id: 'AI & Content', name: 'AI & Content', count: ALL_SERVICES.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: ALL_SERVICES.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & FinTech', name: 'AI & FinTech', count: ALL_SERVICES.filter(s => s.category === 'AI & FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: ALL_SERVICES.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' },
    { id: 'AI & Real Estate', name: 'AI & Real Estate', count: ALL_SERVICES.filter(s => s.category === 'AI & Real Estate').length, icon: '🏠', color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & E-commerce', name: 'AI & E-commerce', count: ALL_SERVICES.filter(s => s.category === 'AI & E-commerce').length, icon: '🛒', color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Logistics', name: 'AI & Logistics', count: ALL_SERVICES.filter(s => s.category === 'AI & Logistics').length, icon: '📦', color: 'from-teal-500 to-cyan-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: ALL_SERVICES.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: ALL_SERVICES.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-blue-500 to-cyan-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: ALL_SERVICES.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: ALL_SERVICES.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐', color: 'from-teal-500 to-cyan-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: ALL_SERVICES.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' },
    { id: 'Digital Twin', name: 'Digital Twin', count: ALL_SERVICES.filter(s => s.category === 'Digital Twin').length, icon: '🔄', color: 'from-blue-500 to-indigo-500' },
    { id: 'Space Technology', name: 'Space Technology', count: ALL_SERVICES.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: ALL_SERVICES.filter(s => s.category === 'Sustainable Technology').length, icon: '🌱', color: 'from-green-500 to-teal-500' }
  ];

  const filteredServices = ALL_SERVICES.filter(service => {
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

  return (
    <>
      <SEO 
        title="Comprehensive Micro SAAS, IT & AI Services Showcase 2030 | Zion Tech Group"
        description="Explore our complete portfolio of cutting-edge micro SAAS, IT, and AI services. From AI-powered business intelligence to quantum computing solutions, discover innovative services that drive business transformation."
        keywords="micro SAAS, IT services, AI services, business intelligence, cybersecurity, cloud computing, quantum computing, blockchain, fintech, healthcare AI, legal tech, education AI"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Comprehensive Services
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Showcase 2030
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
                Discover our complete portfolio of {ALL_SERVICES.length}+ innovative micro SAAS solutions, enterprise IT services, and AI-powered innovations. 
                Each service is designed to deliver measurable ROI and transform your business operations.
              </p>
              
              {/* Service Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{ALL_SERVICES.length}+</div>
                  <div className="text-sm text-slate-400">Total Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">{categories.length - 1}</div>
                  <div className="text-sm text-slate-400">Service Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">95%+</div>
                  <div className="text-sm text-slate-400">Average AI Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">500%+</div>
                  <div className="text-sm text-slate-400">Average ROI</div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              
              {/* Enhanced Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <button
                  onClick={() => setShowComparisonTool(true)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2"
                >
                  <Scale className="h-5 w-5" />
                  Compare Services
                </button>
                <button
                  onClick={() => setShowContactIntegration(true)}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Contact Us
                </button>
                <button
                  onClick={() => setShowContactIntegration(true)}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Schedule Demo
                </button>
              </div>
              
              {/* Website Link */}
              <div className="mt-8">
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Visit Zion Tech Group
                </a>
              </div>
            </motion.div>

            {/* Search and Filter Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-80"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <div className="flex flex-wrap justify-center gap-3 max-h-32 overflow-y-auto">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === 'all'
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
                  }`}
                >
                  All Services ({ALL_SERVICES.length})
                </button>
                {categories.slice(1).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
                    }`}
                  >
                    {category.icon} {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {sortedServices.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    layout
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-slate-400">{service.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-slate-300">{service.rating}</span>
                        <span className="text-xs text-slate-500">({service.reviewCount})</span>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4 line-clamp-3">{service.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Price:</span>
                        <span className="text-white font-semibold">${service.price.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Market Price:</span>
                        <span className="text-slate-300">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">ROI:</span>
                        <span className="text-green-400 font-semibold">{service.roi}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Setup Time:</span>
                        <span className="text-slate-300">{service.setupTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">AI Score:</span>
                        <span className="text-cyan-400 font-semibold">{service.aiScore}/100</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* ROI Calculator Button */}
                    <div className="mb-4">
                      <button
                        onClick={() => {
                          setSelectedServiceForROI(service);
                          setShowROICalculator(true);
                        }}
                        className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <Calculator className="h-4 w-4" />
                        Calculate ROI
                      </button>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more details about pricing, implementation timeline, and features.`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                      >
                        Get Started
                      </a>
                      <a
                        href={`tel:+13024640950`}
                        className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                      >
                        Call Now
                      </a>
                    </div>
                    
                    {/* Quick Contact Info */}
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>📧 kleber@ziontechgroup.com</span>
                        <span>📱 +1 302 464 0950</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {sortedServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl text-slate-400 mb-2">No services found</h3>
                <p className="text-slate-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Service <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our comprehensive service portfolio covers every aspect of modern business technology needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.slice(1, 13).map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                  <p className="text-slate-300 mb-4">{category.count} services available</p>
                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold"
                  >
                    View Services →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We deliver cutting-edge solutions with proven results, enterprise-grade security, and dedicated support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Proven ROI",
                  description: "Our solutions deliver measurable business value with clear ROI metrics and performance tracking."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8" />,
                  title: "Enterprise Security",
                  description: "Bank-level security protocols and compliance standards to protect your business data and operations."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Expert Support",
                  description: "24/7 technical support from certified professionals with deep industry expertise."
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Innovation First",
                  description: "Stay ahead with cutting-edge technologies and forward-thinking solutions that drive growth."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </motion.div>
              ))}
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Join hundreds of businesses already leveraging our innovative solutions to drive growth and efficiency.
              </p>
              
              {/* Contact Methods */}
              <div className="mb-8 p-6 bg-slate-800/50 rounded-xl border border-slate-600">
                <h3 className="text-lg font-semibold text-white mb-4">Multiple Ways to Get Started</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center gap-2 text-slate-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>Call: +1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-300">
                    <MailIcon className="w-4 h-4 text-purple-400" />
                    <span>Email: kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span>Visit: Middletown DE</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry&body=Hi, I'm interested in your services. Please provide more information."
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-200 hover:scale-105"
                >
                  Visit Website
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </a>
              </div>
              
              {/* Quick Contact Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200"
                >
                  📞 Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry&body=Hi, I'm interested in your services. Please provide more information."
                  className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200"
                >
                  📧 Email Us
                </a>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-200"
                >
                  🌐 Visit Website
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Footer */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MailIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Modal Components */}
        <AnimatePresence>
          {showComparisonTool && (
            <ServiceComparisonTool
              services={ALL_SERVICES}
              onClose={() => setShowComparisonTool(false)}
            />
          )}
          
          {showROICalculator && selectedServiceForROI && (
            <ROICalculator
              service={selectedServiceForROI}
              onClose={() => {
                setShowROICalculator(false);
                setSelectedServiceForROI(null);
              }}
            />
          )}
          
          {showContactIntegration && (
            <EnhancedContactIntegration
              onClose={() => setShowContactIntegration(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
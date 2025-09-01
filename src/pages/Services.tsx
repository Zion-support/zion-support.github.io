import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Rocket, 
  TrendingUp, 
  Zap, 
  Shield, 
  Target,
  Users,
  Globe,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  ExternalLink,
  CheckCircle,
  Star,
  ArrowRight,
  Sparkles,
  Clock,
  Award,
  Lock,
  Activity,
  AlertCircle,
  CheckSquare,
  FileText,
  Settings,
  Bell,
  Calendar,
  DollarSign,
  Percent,
  Building2,
  Truck,
  Ship,
  Heart,
  Stethoscope,
  Microscope,
  Building,
  Crown,
  Gem,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  BookOpen,
  Lightbulb,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  Plus,
  Minus,
  Cross,
  Check,
  X,
  Info,
  HelpCircle,
  Cloud,
  Database,
  Cpu,
  Network,
  Atom,
  Bot,
  Workflow,
  Palette,
  Camera,
  Video,
  Music,
  Code,
  Server,
  Smartphone,
  Wifi,
  Leaf,
  Sun,
  Wind,
  Battery,
  Gauge,
  BarChart3,
  PieChart,
  LineChart,
  ScatterChart,
  AreaChart,
  Table,
  List,
  Grid,
  Columns,
  Rows,
  CalendarDays,
  Clock3,
  Timer,
  Stopwatch,
  Hourglass,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarSearch,
  CalendarClock,
  CalendarEvent,
  CalendarHeart,
  CalendarStar,
  CalendarUser,
  CalendarSettings,
  CalendarEdit,
  CalendarTrash,
  CalendarLock,
  CalendarUnlock,
  CalendarKey,
  CalendarEye,
  CalendarEyeOff,
  CalendarDownload,
  CalendarUpload,
  CalendarShare,
  CalendarCopy,
  CalendarPaste,
  CalendarCut,
  CalendarMove,
  CalendarRotate,
  CalendarFlip,
  CalendarFlipHorizontal,
  CalendarFlipVertical,
  CalendarRotateCw,
  CalendarRotateCcw,
  CalendarZoomIn,
  CalendarZoomOut,
  CalendarMaximize,
  CalendarMinimize,
  CalendarFullscreen,
  CalendarFullscreenExit,
  CalendarRefresh,
  CalendarRefreshCw,
  CalendarRefreshCcw,
  CalendarRotateCw2,
  CalendarRotateCcw2,
  CalendarRotateCw3,
  CalendarRotateCcw3,
  CalendarRotateCw4,
  CalendarRotateCcw4,
  CalendarRotateCw5,
  CalendarRotateCcw5,
  CalendarRotateCw6,
  CalendarRotateCcw6,
  CalendarRotateCw7,
  CalendarRotateCcw7,
  CalendarRotateCw8,
  CalendarRotateCcw8,
  CalendarRotateCw9,
  CalendarRotateCcw9,
  CalendarRotateCw10,
  CalendarRotateCcw10
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2026 } from '../data/innovativeMicroSaasServices2026';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    {
      number: '50+',
      label: 'Innovative Services',
      description: 'Cutting-edge micro SAAS solutions'
    },
    {
      number: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable service delivery'
    },
    {
      number: '$2,499+',
      label: 'Starting Price',
      description: 'Competitive monthly pricing'
    },
    {
      number: '24/7',
      label: 'Expert Support',
      description: 'Round-the-clock assistance'
    }
  ];

  const highlights = [
    {
      icon: Brain,
      title: 'AI-First Approach',
      description: 'All services built with cutting-edge artificial intelligence and machine learning'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2, ISO 27001, and GDPR compliant solutions for enterprise-grade security'
    },
    {
      icon: Rocket,
      title: 'Rapid Deployment',
      description: 'Get up and running in weeks, not months with our streamlined implementation'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300-600% return on investment across all service categories'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: INNOVATIVE_MICRO_SAAS_SERVICES_2026.length, icon: Sparkles },
    { id: 'ai', name: 'AI & Machine Learning', count: INNOVATIVE_MICRO_SAAS_SERVICES_2026.filter(s => s.category.toLowerCase().includes('ai') || s.category.toLowerCase().includes('intelligence')).length, icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', count: INNOVATIVE_MICRO_SAAS_SERVICES_2026.filter(s => s.category.toLowerCase().includes('cyber') || s.category.toLowerCase().includes('security')).length, icon: Shield },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: INNOVATIVE_MICRO_SAAS_SERVICES_2026.filter(s => s.category.toLowerCase().includes('cloud') || s.category.toLowerCase().includes('infrastructure')).length, icon: Cloud },
    { id: 'data', name: 'Data & Analytics', count: INNOVATIVE_MICRO_SAAS_SERVICES_2026.filter(s => s.category.toLowerCase().includes('data') || s.category.toLowerCase().includes('analytics')).length, icon: Database },
    { id: 'emerging', name: 'Emerging Tech', count: INNOVATIVE_MICRO_SAAS_SERVICES_2026.filter(s => s.category.toLowerCase().includes('quantum') || s.category.toLowerCase().includes('blockchain') || s.category.toLowerCase().includes('edge')).length, icon: Atom }
  ];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2026.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory) ||
      service.subcategory.toLowerCase().includes(selectedCategory);
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'innovation':
        const innovationOrder = { 'Revolutionary': 3, 'Cutting-edge': 2, 'Advanced': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO
        title="Innovative Micro SAAS Services 2026 - Zion Tech Group"
        description="Discover our comprehensive portfolio of cutting-edge micro SAAS services including AI, cybersecurity, cloud infrastructure, and emerging technologies. Transform your business with proven ROI solutions."
        keywords="micro SAAS services, AI services, cybersecurity, cloud computing, quantum computing, blockchain, edge computing, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Innovative Micro SAAS Services 2026
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our cutting-edge portfolio of AI-powered micro SAAS solutions. 
              From cybersecurity to quantum computing, we deliver enterprise-grade innovation with proven ROI.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-gray-300 text-sm">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="category">Sort by Category</option>
                  <option value="innovation">Sort by Innovation Level</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full mb-2">
                          {service.innovationLevel}
                        </span>
                        <h3 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-cyan-400 text-sm font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Pricing and ROI */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl font-bold text-white">
                      {service.currency}{service.price.toLocaleString()}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-semibold">{service.roi}</div>
                      <div className="text-gray-400 text-xs">ROI</div>
                    </div>
                  </div>
                  
                  <div className="text-gray-400 text-sm">
                    Market Price: {service.marketPrice}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Key Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                {service.technicalSpecs && (
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Technical Specs</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">Uptime</div>
                        <div className="text-white">{service.technicalSpecs.uptime}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">API Endpoints</div>
                        <div className="text-white">{service.technicalSpecs.apiEndpoints}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-3 border border-slate-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Delivery Info */}
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>{service.supportLevel}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {sortedServices.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-white text-xl font-semibold mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs. 
              Get in touch today for a personalized consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center space-x-2 border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{contactInfo.phone}</div>
                <div className="text-gray-400">Phone</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-white mb-2">{contactInfo.email}</div>
                <div className="text-gray-400">Email</div>
              </div>
              <div>
                <div className="text-sm text-white mb-2">{contactInfo.address}</div>
                <div className="text-gray-400">Address</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
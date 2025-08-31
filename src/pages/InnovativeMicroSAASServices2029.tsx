import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  BarChart3, 
  Heart, 
  Eye, 
  Atom, 
  Activity, 
  Code, 
  Database, 
  Server, 
  Network, 
  Lock, 
  Cloud, 
  Target, 
  TrendingUp, 
  Briefcase, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Leaf,
  Sun,
  Wind,
  Zap as Lightning,
  Shield as Security,
  Globe as Web,
  Smartphone,
  Watch,
  Headphones,
  Printer,
  Wifi,
  Bluetooth,
  Satellite,
  Telescope,
  Microscope,
  FlaskConical as Flask,
  Pill,
  Stethoscope,
  Calculator,
  BookOpen,
  GraduationCap,
  DollarSign,
  CreditCard,
  ShoppingCart,
  Truck,
  Warehouse,
  Factory,
  Building2,
  Home,
  Store,
  Bank,
  Insurance,
  Law,
  Gavel,
  FileText,
  Calendar,
  Clock,
  Timer,
  Stopwatch,
  Thermometer,
  Gauge,
  Compass,
  Map,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  Upload,
  Share,
  Bookmark,
  MessageCircle,
  PhoneCall,
  VideoCall,
  MailOpen,
  Send,
  Plus,
  Minus,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Settings,
  HelpCircle,
  Info,
  AlertCircle,
  X,
  Menu,
  Search as SearchIcon,
  Bell,
  User,
  LogOut,
  LogIn,
  UserPlus,
  UserCheck,
  UserX,
  Users as UsersIcon,
  UserMinus,
  UserCog,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Key,
  EyeOff,
  Eye as EyeIcon,
  Camera as CameraIcon,
  Image,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FileText as FileTextIcon,
  FilePlus,
  FileMinus,
  FileX,
  FileCheck,
  FileSearch,
  FileCode,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileSpreadsheet,
  FilePresentation,
  FileWord,
  FilePdf,
  FileZip,
  FileCog,
  FileSettings,
  FileHeart,
  FileStar,
  FileDownload,
  FileUpload,
  FileShare,
  FileLock,
  FileUnlock,
  FileShield,
  FileAlert,
  FileWarning,
  FileInfo,
  FileQuestion,
  FileHelp,
  FileBookmark,
  FileBookmarkPlus,
  FileBookmarkMinus,
  FileBookmarkX,
  FileBookmarkCheck,
  FileBookmarkSearch,
  FileBookmarkCode,
  FileBookmarkImage,
  FileBookmarkVideo,
  FileBookmarkAudio,
  FileBookmarkArchive,
  FileBookmarkSpreadsheet,
  FileBookmarkPresentation,
  FileBookmarkWord,
  FileBookmarkPdf,
  FileBookmarkZip,
  FileBookmarkCog,
  FileBookmarkSettings,
  FileBookmarkHeart,
  FileBookmarkStar,
  FileBookmarkDownload,
  FileBookmarkUpload,
  FileBookmarkShare,
  FileBookmarkLock,
  FileBookmarkUnlock,
  FileBookmarkShield,
  FileBookmarkAlert,
  FileBookmarkWarning,
  FileBookmarkInfo,
  FileBookmarkQuestion,
  FileBookmarkHelp
} from 'lucide-react';

export default function InnovativeMicroSAASServices2029() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    // AI-Powered Business Intelligence
    {
      id: 'ai-business-intelligence',
      category: 'ai',
      name: 'AI Business Intelligence Suite',
      description: 'Advanced AI-powered analytics platform that transforms raw data into actionable business insights',
      features: [
        'Real-time data processing and analysis',
        'Predictive analytics and forecasting',
        'Custom dashboard creation',
        'Natural language query interface',
        'Automated report generation',
        'Multi-source data integration'
      ],
      pricing: {
        starter: '$299/month',
        professional: '$799/month',
        enterprise: '$1,999/month'
      },
      benefits: [
        'Increase decision-making speed by 300%',
        'Reduce manual reporting time by 80%',
        'Improve forecast accuracy by 40%',
        'Real-time business monitoring'
      ],
      useCases: [
        'Financial forecasting and budgeting',
        'Customer behavior analysis',
        'Market trend prediction',
        'Operational efficiency optimization'
      ],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },

    // Cybersecurity Automation Platform
    {
      id: 'cybersecurity-automation',
      category: 'security',
      name: 'Cybersecurity Automation Platform',
      description: 'Intelligent security automation that protects your business 24/7 with AI-driven threat detection',
      features: [
        'AI-powered threat detection',
        'Automated incident response',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Security analytics dashboard',
        'Integration with existing security tools'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$599/month',
        enterprise: '$1,499/month'
      },
      benefits: [
        'Reduce security incidents by 90%',
        'Automate 95% of security tasks',
        'Compliance with major standards',
        '24/7 security monitoring'
      ],
      useCases: [
        'Small business security',
        'Enterprise security operations',
        'Compliance management',
        'Incident response automation'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },

    // Customer Experience Analytics
    {
      id: 'customer-experience-analytics',
      category: 'analytics',
      name: 'Customer Experience Analytics Platform',
      description: 'Comprehensive customer journey mapping and sentiment analysis platform',
      features: [
        'Customer journey tracking',
        'Sentiment analysis',
        'Behavioral analytics',
        'A/B testing automation',
        'Customer feedback management',
        'ROI measurement tools'
      ],
      pricing: {
        starter: '$149/month',
        professional: '$449/month',
        enterprise: '$1,199/month'
      },
      benefits: [
        'Increase customer satisfaction by 35%',
        'Reduce customer churn by 25%',
        'Improve conversion rates by 40%',
        'Data-driven customer insights'
      ],
      useCases: [
        'E-commerce optimization',
        'Customer service improvement',
        'Product development insights',
        'Marketing campaign optimization'
      ],
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },

    // Supply Chain Optimization
    {
      id: 'supply-chain-optimization',
      category: 'operations',
      name: 'Supply Chain Optimization Suite',
      description: 'AI-driven supply chain management that optimizes inventory, logistics, and supplier relationships',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier performance tracking',
        'Cost analysis tools',
        'Risk assessment'
      ],
      pricing: {
        starter: '$399/month',
        professional: '$999/month',
        enterprise: '$2,499/month'
      },
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve delivery times by 25%',
        'Optimize supplier relationships',
        'Risk mitigation and compliance'
      ],
      useCases: [
        'Manufacturing optimization',
        'Retail inventory management',
        'Logistics optimization',
        'Supplier relationship management'
      ],
      icon: Truck,
      color: 'from-green-500 to-emerald-500'
    },

    // Financial Planning & Analysis
    {
      id: 'financial-planning-analysis',
      category: 'finance',
      name: 'Financial Planning & Analysis Platform',
      description: 'Comprehensive financial modeling, budgeting, and analysis platform for modern businesses',
      features: [
        'Financial modeling tools',
        'Budget planning and tracking',
        'Cash flow forecasting',
        'Scenario analysis',
        'KPI dashboard',
        'Integration with accounting systems'
      ],
      pricing: {
        starter: '$249/month',
        professional: '$699/month',
        enterprise: '$1,799/month'
      },
      benefits: [
        'Improve financial planning accuracy by 45%',
        'Reduce budget cycle time by 60%',
        'Better cash flow management',
        'Data-driven financial decisions'
      ],
      useCases: [
        'Business planning and budgeting',
        'Investment analysis',
        'Risk management',
        'Performance monitoring'
      ],
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500'
    },

    // HR Analytics & Automation
    {
      id: 'hr-analytics-automation',
      category: 'hr',
      name: 'HR Analytics & Automation Platform',
      description: 'AI-powered HR platform that streamlines recruitment, performance management, and employee engagement',
      features: [
        'AI-powered recruitment',
        'Performance analytics',
        'Employee engagement tracking',
        'Automated onboarding',
        'Talent management',
        'Compliance monitoring'
      ],
      pricing: {
        starter: '$179/month',
        professional: '$549/month',
        enterprise: '$1,399/month'
      },
      benefits: [
        'Reduce hiring time by 50%',
        'Improve employee retention by 30%',
        'Automate 80% of HR tasks',
        'Data-driven HR decisions'
      ],
      useCases: [
        'Recruitment optimization',
        'Performance management',
        'Employee engagement',
        'HR compliance management'
      ],
      icon: Users,
      color: 'from-purple-500 to-indigo-500'
    },

    // Marketing Automation Suite
    {
      id: 'marketing-automation-suite',
      category: 'marketing',
      name: 'Marketing Automation Suite',
      description: 'End-to-end marketing automation platform with AI-powered personalization and analytics',
      features: [
        'Email marketing automation',
        'Social media management',
        'Lead scoring and nurturing',
        'Campaign analytics',
        'A/B testing tools',
        'CRM integration'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$599/month',
        enterprise: '$1,499/month'
      },
      benefits: [
        'Increase lead generation by 50%',
        'Improve conversion rates by 35%',
        'Reduce marketing costs by 25%',
        'Personalized customer experiences'
      ],
      useCases: [
        'Lead generation campaigns',
        'Customer retention marketing',
        'Product launch campaigns',
        'Brand awareness building'
      ],
      icon: Target,
      color: 'from-indigo-500 to-blue-500'
    },

    // Project Management AI
    {
      id: 'project-management-ai',
      category: 'project',
      name: 'AI-Powered Project Management',
      description: 'Intelligent project management platform that predicts risks, optimizes resources, and ensures on-time delivery',
      features: [
        'AI risk prediction',
        'Resource optimization',
        'Automated scheduling',
        'Progress tracking',
        'Team collaboration tools',
        'Performance analytics'
      ],
      pricing: {
        starter: '$129/month',
        professional: '$399/month',
        enterprise: '$999/month'
      },
      benefits: [
        'Reduce project delays by 40%',
        'Improve resource utilization by 35%',
        'Increase project success rate by 25%',
        'Better team collaboration'
      ],
      useCases: [
        'Software development projects',
        'Construction project management',
        'Event planning and execution',
        'Product development cycles'
      ],
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'operations', name: 'Operations', icon: Settings },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'hr', name: 'HR & People', icon: Users },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'project', name: 'Project Management', icon: Rocket }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = activeTab === 'all' || service.category === activeTab;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Innovative
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Micro SAAS Services
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Transform your business with cutting-edge AI-powered micro SAAS solutions designed for the modern digital economy
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/comprehensive-pricing-guide-2029"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                View Pricing
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-12 h-12" />
                    <div className="text-right">
                      <div className="text-sm opacity-90">Starting at</div>
                      <div className="text-2xl font-bold">{service.pricing.starter}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                      Business Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Target className="w-5 h-5 text-purple-500 mr-2" />
                      Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.slice(0, 2).map((useCase, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <DollarSign className="w-5 h-5 text-yellow-500 mr-2" />
                      Pricing Tiers
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(service.pricing).map(([tier, price]) => (
                        <div key={tier} className="flex justify-between text-sm">
                          <span className="capitalize text-gray-600 dark:text-gray-400">{tier}</span>
                          <span className="font-semibold text-gray-900 dark:text-white">{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block"
                    >
                      Get Started
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <SearchIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No services found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search terms or category filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already leveraging our innovative micro SAAS solutions to drive growth and efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Our Team
              <Phone className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h4>
                <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Grid icon component
const Grid = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);
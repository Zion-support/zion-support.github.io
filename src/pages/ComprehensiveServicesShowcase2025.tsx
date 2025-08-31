import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Cpu,
  Cloud,
  Database,
  Network,
  Users,
  Zap,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Activity,
  BarChart3,
  TrendingUp,
  Globe,
  Smartphone,
  Code,
  Palette,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Share2,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Scissors,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code2,
  Link2,
  Image,
  Video,
  FileText,
  File,
  Folder,
  FolderOpen,
  Save,
  Edit,
  Trash2,
  Copy,
  Clipboard,
  Calendar,
  Clock as ClockIcon,
  User,
  UserCheck,
  UserX,
  Users2,
  UserPlus,
  UserMinus,
  Key,
  Lock,
  Unlock,
  EyeOff,
  Eye,
  KeyRound,
  Fingerprint,
  Scan,
  QrCode,
  CreditCard,
  Wallet,
  PiggyBank,
  TrendingDown,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  AreaChart,
  CandlestickChart,
  GanttChart,
  Kanban,
  Calendar as CalendarIcon,
  Timer,
  Stopwatch,
  Hourglass,
  Clock as ClockIcon2,
  Calendar as CalendarIcon2,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarWeek,
  CalendarMonth,
  CalendarYear,
  Calendar as CalendarIcon3,
  Clock as ClockIcon3,
  Timer as TimerIcon,
  Stopwatch as StopwatchIcon,
  Hourglass as HourglassIcon,
  Clock as ClockIcon4,
  Calendar as CalendarIcon4,
  CalendarDays as CalendarDaysIcon,
  CalendarCheck as CalendarCheckIcon,
  CalendarX as CalendarXIcon,
  CalendarPlus as CalendarPlusIcon,
  CalendarMinus as CalendarMinusIcon,
  CalendarRange as CalendarRangeIcon,
  CalendarWeek as CalendarWeekIcon,
  CalendarMonth as CalendarMonthIcon,
  CalendarYear as CalendarYearIcon
} from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'devops', name: 'DevOps', icon: Cpu },
    { id: 'business', name: 'Business Solutions', icon: BarChart3 },
    { id: 'infrastructure', name: 'Infrastructure', icon: Network },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom }
  ];

  const allServices = [
    // AI Services
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence Platform',
      description: 'Transform your data into actionable intelligence with AI-powered analytics, real-time dashboards, and predictive insights.',
      category: 'ai',
      icon: Brain,
      price: 'From $99/month',
      features: ['AI-Powered Analytics', 'Real-Time Dashboards', 'Predictive Analytics', 'User Behavior Analysis'],
      link: '/services/ai-business-intelligence-platform',
      popular: true
    },
    {
      id: 'ai-cybersecurity-threat-detection',
      title: 'AI Cybersecurity Threat Detection',
      description: 'Advanced threat detection powered by artificial intelligence that identifies and neutralizes security risks before they become breaches.',
      category: 'cybersecurity',
      icon: Shield,
      price: 'From $149/month',
      features: ['AI-Powered Threat Detection', 'Zero-Day Attack Prevention', '24/7 Security Monitoring', 'Automated Response'],
      link: '/services/ai-cybersecurity-threat-detection',
      popular: true
    },
    {
      id: 'ai-devops-automation',
      title: 'AI DevOps Automation Platform',
      description: 'Transform your development workflow with AI-powered automation that learns, adapts, and optimizes your entire DevOps pipeline.',
      category: 'devops',
      icon: Cpu,
      price: 'From $199/month',
      features: ['AI-Powered CI/CD', 'Infrastructure as Code', 'Smart Testing Automation', 'Auto-Scaling & Monitoring'],
      link: '/services/ai-devops-automation-platform',
      popular: true
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with predictive analytics, demand forecasting, and automated optimization.',
      category: 'ai',
      icon: Network,
      price: 'From $299/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Optimization', 'Supplier Management'],
      link: '/services/ai-supply-chain-optimization',
      popular: false
    },
    {
      id: 'ai-cybersecurity-platform',
      title: 'AI Cybersecurity Platform',
      description: 'Comprehensive cybersecurity solution with AI-powered threat detection, behavioral analysis, and automated response.',
      category: 'cybersecurity',
      icon: Shield,
      price: 'From $399/month',
      features: ['Threat Intelligence', 'Behavioral Analysis', 'Incident Response', 'Compliance Management'],
      link: '/services/ai-cybersecurity-platform',
      popular: false
    },
    {
      id: 'ai-healthcare-platform',
      title: 'AI Healthcare Platform',
      description: 'AI-powered healthcare solutions for patient care, diagnosis assistance, and medical data analysis.',
      category: 'ai',
      icon: Heart,
      price: 'From $599/month',
      features: ['Patient Care AI', 'Diagnosis Assistance', 'Medical Data Analysis', 'Healthcare Analytics'],
      link: '/services/ai-healthcare-platform',
      popular: false
    },
    {
      id: 'ai-quantum-hybrid-platform',
      title: 'AI Quantum Hybrid Platform',
      description: 'Next-generation computing platform combining AI and quantum computing for complex problem solving.',
      category: 'quantum',
      icon: Atom,
      price: 'From $1,299/month',
      features: ['Quantum AI Algorithms', 'Hybrid Computing', 'Complex Problem Solving', 'Research Tools'],
      link: '/services/ai-quantum-hybrid-platform',
      popular: false
    },
    // Business Solutions
    {
      id: 'finops-advisor',
      title: 'FinOps Advisor Platform',
      description: 'Cloud financial management platform that helps organizations optimize cloud spending and improve cost efficiency.',
      category: 'business',
      icon: DollarSign,
      price: 'From $199/month',
      features: ['Cost Optimization', 'Cloud Spending Analysis', 'Budget Management', 'ROI Tracking'],
      link: '/services/finops-advisor',
      popular: false
    },
    {
      id: 'micro-crm',
      title: 'Micro CRM Solution',
      description: 'Lightweight customer relationship management system designed for small businesses and startups.',
      category: 'business',
      icon: Users,
      price: 'From $49/month',
      features: ['Contact Management', 'Lead Tracking', 'Sales Pipeline', 'Customer Analytics'],
      link: '/services/micro-crm',
      popular: false
    },
    // Infrastructure Services
    {
      id: 'green-it',
      title: 'Green IT Solutions',
      description: 'Sustainable technology solutions that reduce environmental impact while improving efficiency.',
      category: 'infrastructure',
      icon: Leaf,
      price: 'From $299/month',
      features: ['Energy Optimization', 'Sustainable Infrastructure', 'Carbon Footprint Reduction', 'Green Computing'],
      link: '/services/green-it',
      popular: false
    },
    {
      id: 'iot-edge',
      title: 'IoT Edge Computing',
      description: 'Edge computing solutions for IoT devices with real-time processing and local intelligence.',
      category: 'infrastructure',
      icon: Smartphone,
      price: 'From $199/month',
      features: ['Edge Processing', 'IoT Integration', 'Real-time Analytics', 'Local Intelligence'],
      link: '/services/iot-edge',
      popular: false
    },
    // Additional Services
    {
      id: 'incident-response-platform',
      title: 'Incident Response Platform',
      description: 'Comprehensive incident management and response system for cybersecurity teams.',
      category: 'cybersecurity',
      icon: AlertTriangle,
      price: 'From $399/month',
      features: ['Incident Management', 'Response Automation', 'Team Collaboration', 'Post-Incident Analysis'],
      link: '/services/incident-response-platform',
      popular: false
    },
    {
      id: 'interview-assessment-ai',
      title: 'AI Interview Assessment',
      description: 'Intelligent interview and assessment platform that evaluates candidates using AI.',
      category: 'ai',
      icon: Users,
      price: 'From $99/month',
      features: ['AI Assessment', 'Candidate Evaluation', 'Interview Automation', 'Talent Analytics'],
      link: '/services/interview-assessment-ai',
      popular: false
    },
    {
      id: 'llm-content-studio',
      title: 'LLM Content Studio',
      description: 'AI-powered content creation and optimization platform using large language models.',
      category: 'ai',
      icon: FileText,
      price: 'From $149/month',
      features: ['Content Generation', 'AI Writing Assistant', 'Content Optimization', 'SEO Integration'],
      link: '/services/llm-content-studio',
      popular: false
    },
    {
      id: 'quantum-computing-solutions',
      title: 'Quantum Computing Solutions',
      description: 'Advanced quantum computing services for research, optimization, and complex problem solving.',
      category: 'quantum',
      icon: Atom,
      price: 'From $999/month',
      features: ['Quantum Algorithms', 'Research Support', 'Optimization Problems', 'Quantum Education'],
      link: '/services/quantum-computing-solutions',
      popular: false
    },
    {
      id: 'space-tech',
      title: 'Space Technology Solutions',
      description: 'Innovative space technology applications for satellite management and space data analysis.',
      category: 'infrastructure',
      icon: Satellite,
      price: 'From $799/month',
      features: ['Satellite Management', 'Space Data Analysis', 'Orbital Optimization', 'Space Analytics'],
      link: '/services/space-tech',
      popular: false
    },
    {
      id: 'sustainability',
      title: 'Sustainability Platform',
      description: 'Comprehensive sustainability management and reporting platform for organizations.',
      category: 'business',
      icon: Leaf,
      price: 'From $199/month',
      features: ['Sustainability Tracking', 'ESG Reporting', 'Carbon Management', 'Green Initiatives'],
      link: '/services/sustainability',
      popular: false
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Zion Tech Group 2025
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> AI & Tech Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our complete portfolio of innovative AI-powered services, cybersecurity solutions, and cutting-edge technology platforms designed to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-purple-500 border-purple-500 text-white'
                      : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-purple-500 hover:text-purple-400'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {activeCategory === 'all' ? 'All Services' : `${serviceCategories.find(c => c.id === activeCategory)?.name}`}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {filteredServices.length} services found. Explore our comprehensive portfolio of AI-powered solutions and innovative technology platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  service.popular 
                    ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
                    : 'border-gray-700 hover:border-purple-500/50'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}

                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
                className="mt-4 text-purple-400 hover:text-purple-300 underline"
              >
                View all services
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our comprehensive portfolio of AI-powered services and innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-gray-400 hover:text-purple-400">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-purple-400">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-400">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Atom,
  Shield,
  Cloud,
  Rocket,
  BarChart3,
  Heart,
  Users,
  Target,
  TrendingUp,
  Eye,
  Activity,
  Satellite,
  Leaf,
  Lock,
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Server,
  Smartphone,
  Watch,
  Camera,
  Video,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Building2,
  Factory,
  Warehouse,
  Truck,
  Bank,
  Insurance,
  Law,
  Gavel,
  GraduationCap,
  BookOpen,
  Flask,
  Pill,
  Stethoscope,
  Calculator,
  Microscope,
  Telescope,
  Camera as CameraIcon,
  Palette,
  Code,
  FileText,
  Calendar,
  Clock,
  Timer,
  Stopwatch,
  Thermometer,
  Gauge,
  Compass,
  Map,
  Navigation,
  Search,
  Filter,
  Sort,
  Download,
  Upload,
  Share,
  Link as LinkIcon,
  Copy,
  Edit,
  Trash,
  Save,
  Plus,
  Minus,
  X,
  Check,
  AlertTriangle,
  Info,
  HelpCircle,
  Settings,
  User,
  LogOut,
  LogIn,
  UserPlus,
  UserMinus,
  Key,
  Unlock,
  EyeOff,
  RefreshCw,
  RotateCcw,
  Power,
  PowerOff,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Volume,
  VolumeX,
  Volume1,
  Volume2,
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  Image,
  File,
  Folder,
  HardDrive,
  MemoryStick,
  Usb,
  Cable,
  Wifi,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  Plug,
  Charging,
  Flash,
  Thunder,
  Rain,
  Snow,
  Cloud,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Moon,
  Sunrise,
  Sunset,
  Star as StarIcon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Pi,
  Sigma,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Omega,
  Theta,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Rho,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export function NewServicesShowcase2025() {
  const newServices = [
    {
      id: 'ai-creative-studio',
      title: 'AI Creative Studio',
      description: 'Revolutionary AI-powered creative platform for design, content creation, and multimedia production',
      icon: Palette,
      color: 'from-pink-500 to-purple-600',
      price: '$299 - $1,999/month',
      category: 'Creative AI',
      features: [
        'AI-Generated Graphics & Illustrations',
        'Video Editing & Production',
        'Music Composition & Audio',
        '3D Modeling & Animation',
        'Content Personalization',
        'Brand Identity Generation',
        'Social Media Content',
        'Marketing Material Creation'
      ],
      benefits: [
        'Reduce creative production time by 80%',
        'Unlimited design variations',
        'Professional-quality output',
        'Cost-effective creative solutions',
        '24/7 creative assistance',
        'Scalable content production'
      ],
      useCases: [
        'Marketing Agencies',
        'Content Creators',
        'E-commerce Businesses',
        'Social Media Managers',
        'Design Studios',
        'Brand Managers',
        'Event Planners',
        'Educational Content'
      ],
      marketPrice: '$500 - $3,000/month',
      roi: '300-500%',
      launchDate: 'Q1 2025'
    },
    {
      id: 'ai-health-monitoring',
      title: 'AI Health Monitoring Platform',
      description: 'Comprehensive health monitoring with AI-powered diagnostics and predictive healthcare',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      price: '$199 - $1,299/month',
      category: 'Healthcare AI',
      features: [
        'Real-time Health Monitoring',
        'AI Disease Prediction',
        'Personalized Health Insights',
        'Medication Reminders',
        'Health Goal Tracking',
        'Telemedicine Integration',
        'Emergency Alerts',
        'Health Analytics Dashboard'
      ],
      benefits: [
        'Early disease detection',
        'Reduced healthcare costs',
        'Improved patient outcomes',
        '24/7 health monitoring',
        'Personalized care plans',
        'Preventive healthcare'
      ],
      useCases: [
        'Healthcare Providers',
        'Insurance Companies',
        'Corporate Wellness',
        'Senior Care',
        'Fitness Centers',
        'Pharmaceutical Companies',
        'Research Institutions',
        'Government Health'
      ],
      marketPrice: '$300 - $2,000/month',
      roi: '250-400%',
      launchDate: 'Q1 2025'
    },
    {
      id: 'ai-financial-advisor',
      title: 'AI Financial Advisor',
      description: 'Intelligent financial planning and investment management with AI-powered insights',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      price: '$99 - $799/month',
      category: 'Financial AI',
      features: [
        'Portfolio Optimization',
        'Risk Assessment',
        'Investment Recommendations',
        'Tax Planning',
        'Retirement Planning',
        'Budget Management',
        'Financial Goal Tracking',
        'Market Analysis'
      ],
      benefits: [
        'Optimized investment returns',
        'Reduced financial risk',
        'Automated financial planning',
        'Tax optimization',
        '24/7 financial guidance',
        'Personalized strategies'
      ],
      useCases: [
        'Individual Investors',
        'Financial Advisors',
        'Wealth Management',
        'Retirement Planning',
        'Tax Planning',
        'Estate Planning',
        'Business Finance',
        'Educational Finance'
      ],
      marketPrice: '$150 - $1,200/month',
      roi: '200-350%',
      launchDate: 'Q1 2025'
    },
    {
      id: 'ai-education-platform',
      title: 'AI Education Platform',
      description: 'Personalized learning experience with AI-powered curriculum and adaptive assessment',
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-600',
      price: '$149 - $999/month',
      category: 'Education AI',
      features: [
        'Personalized Learning Paths',
        'Adaptive Assessments',
        'AI Tutoring',
        'Content Generation',
        'Progress Tracking',
        'Skill Gap Analysis',
        'Interactive Simulations',
        'Multilingual Support'
      ],
      benefits: [
        'Improved learning outcomes',
        'Personalized education',
        'Reduced learning time',
        'Enhanced engagement',
        'Scalable education',
        'Cost-effective learning'
      ],
      useCases: [
        'K-12 Schools',
        'Universities',
        'Corporate Training',
        'Online Education',
        'Language Learning',
        'Professional Development',
        'Skills Training',
        'Special Education'
      ],
      marketPrice: '$200 - $1,500/month',
      roi: '180-300%',
      launchDate: 'Q1 2025'
    },
    {
      id: 'ai-legal-assistant',
      title: 'AI Legal Assistant',
      description: 'Intelligent legal research, document analysis, and contract management platform',
      icon: Gavel,
      color: 'from-amber-500 to-orange-600',
      price: '$399 - $2,499/month',
      category: 'Legal AI',
      features: [
        'Legal Document Analysis',
        'Contract Review',
        'Legal Research',
        'Case Law Analysis',
        'Compliance Monitoring',
        'Risk Assessment',
        'Document Generation',
        'Legal Analytics'
      ],
      benefits: [
        'Faster legal research',
        'Reduced legal costs',
        'Improved accuracy',
        '24/7 legal assistance',
        'Automated compliance',
        'Risk mitigation'
      ],
      useCases: [
        'Law Firms',
        'Corporate Legal',
        'Government Legal',
        'Compliance Officers',
        'Contract Managers',
        'Legal Researchers',
        'Risk Managers',
        'In-House Counsel'
      ],
      marketPrice: '$600 - $3,500/month',
      roi: '400-600%',
      launchDate: 'Q2 2025'
    },
    {
      id: 'ai-real-estate-platform',
      title: 'AI Real Estate Platform',
      description: 'Intelligent property valuation, market analysis, and investment insights',
      icon: Building2,
      color: 'from-indigo-500 to-purple-600',
      price: '$199 - $1,499/month',
      category: 'Real Estate AI',
      features: [
        'Property Valuation',
        'Market Analysis',
        'Investment Insights',
        'Property Search',
        'Rental Analysis',
        'ROI Calculations',
        'Market Trends',
        'Investment Portfolio'
      ],
      benefits: [
        'Accurate property valuation',
        'Data-driven decisions',
        'Market insights',
        'Investment optimization',
        'Risk assessment',
        'Portfolio management'
      ],
      useCases: [
        'Real Estate Agents',
        'Property Investors',
        'Property Managers',
        'Mortgage Lenders',
        'Appraisers',
        'Developers',
        'Insurance Companies',
        'Government Agencies'
      ],
      marketPrice: '$300 - $2,200/month',
      roi: '250-400%',
      launchDate: 'Q2 2025'
    },
    {
      id: 'ai-supply-chain-optimizer',
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with predictive analytics and optimization',
      icon: Truck,
      color: 'from-teal-500 to-cyan-600',
      price: '$599 - $3,999/month',
      category: 'Logistics AI',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Optimization',
        'Supplier Management',
        'Risk Assessment',
        'Cost Optimization',
        'Performance Analytics',
        'Real-time Tracking'
      ],
      benefits: [
        'Reduced inventory costs',
        'Improved efficiency',
        'Better customer service',
        'Risk mitigation',
        'Cost optimization',
        'Real-time visibility'
      ],
      useCases: [
        'Manufacturing',
        'Retail',
        'E-commerce',
        'Logistics',
        'Distribution',
        'Procurement',
        'Warehousing',
        'Transportation'
      ],
      marketPrice: '$800 - $5,000/month',
      roi: '300-500%',
      launchDate: 'Q2 2025'
    },
    {
      id: 'ai-energy-management',
      title: 'AI Energy Management',
      description: 'Smart energy optimization with AI-powered consumption analysis and renewable integration',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      price: '$299 - $1,999/month',
      category: 'Energy AI',
      features: [
        'Energy Consumption Analysis',
        'Predictive Maintenance',
        'Renewable Integration',
        'Cost Optimization',
        'Carbon Footprint Tracking',
        'Smart Grid Management',
        'Energy Storage',
        'Demand Response'
      ],
      benefits: [
        'Reduced energy costs',
        'Improved efficiency',
        'Sustainability goals',
        'Predictive maintenance',
        'Carbon reduction',
        'Grid optimization'
      ],
      useCases: [
        'Commercial Buildings',
        'Industrial Facilities',
        'Data Centers',
        'Smart Cities',
        'Utilities',
        'Renewable Energy',
        'Energy Storage',
        'Grid Operators'
      ],
      marketPrice: '$400 - $2,500/month',
      roi: '200-350%',
      launchDate: 'Q3 2025'
    },
    {
      id: 'ai-manufacturing-platform',
      title: 'AI Manufacturing Platform',
      description: 'Intelligent manufacturing with predictive maintenance, quality control, and process optimization',
      icon: Factory,
      color: 'from-gray-500 to-slate-600',
      price: '$799 - $4,999/month',
      category: 'Manufacturing AI',
      features: [
        'Predictive Maintenance',
        'Quality Control',
        'Process Optimization',
        'Production Planning',
        'Equipment Monitoring',
        'Performance Analytics',
        'Supply Chain Integration',
        'Digital Twin'
      ],
      benefits: [
        'Reduced downtime',
        'Improved quality',
        'Increased efficiency',
        'Cost optimization',
        'Predictive insights',
        'Process automation'
      ],
      useCases: [
        'Automotive',
        'Electronics',
        'Pharmaceuticals',
        'Food & Beverage',
        'Textiles',
        'Chemicals',
        'Aerospace',
        'Consumer Goods'
      ],
      marketPrice: '$1,000 - $6,000/month',
      roi: '350-550%',
      launchDate: 'Q3 2025'
    },
    {
      id: 'ai-customer-intelligence',
      title: 'AI Customer Intelligence',
      description: 'Deep customer insights with AI-powered behavior analysis and predictive modeling',
      icon: Users,
      color: 'from-purple-500 to-pink-600',
      price: '$199 - $1,299/month',
      category: 'Customer AI',
      features: [
        'Customer Behavior Analysis',
        'Predictive Modeling',
        'Sentiment Analysis',
        'Churn Prediction',
        'Lifetime Value',
        'Personalization',
        'Customer Segmentation',
        'Engagement Analytics'
      ],
      benefits: [
        'Improved customer retention',
        'Increased sales',
        'Better personalization',
        'Reduced churn',
        'Customer insights',
        'ROI optimization'
      ],
      useCases: [
        'E-commerce',
        'Retail',
        'SaaS',
        'Financial Services',
        'Telecommunications',
        'Healthcare',
        'Entertainment',
        'Travel'
      ],
      marketPrice: '$300 - $2,000/month',
      roi: '250-400%',
      launchDate: 'Q3 2025'
    },
    {
      id: 'ai-cybersecurity-suite',
      title: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and response with AI-powered security automation',
      icon: Shield,
      color: 'from-red-600 to-pink-600',
      price: '$499 - $2,999/month',
      category: 'Security AI',
      features: [
        'Threat Detection',
        'Behavioral Analysis',
        'Incident Response',
        'Vulnerability Management',
        'Compliance Monitoring',
        'Security Analytics',
        'Zero Trust',
        'Threat Intelligence'
      ],
      benefits: [
        'Real-time protection',
        'Reduced false positives',
        'Automated response',
        'Compliance assurance',
        'Risk mitigation',
        '24/7 monitoring'
      ],
      useCases: [
        'Enterprise Security',
        'Cloud Security',
        'IoT Security',
        'Critical Infrastructure',
        'Financial Services',
        'Healthcare',
        'Government',
        'Education'
      ],
      marketPrice: '$700 - $4,000/month',
      roi: '400-600%',
      launchDate: 'Q4 2025'
    },
    {
      id: 'ai-data-governance',
      title: 'AI Data Governance',
      description: 'Intelligent data management with automated compliance, quality control, and governance',
      icon: Database,
      color: 'from-blue-600 to-indigo-600',
      price: '$399 - $2,499/month',
      category: 'Data AI',
      features: [
        'Data Quality Management',
        'Compliance Automation',
        'Data Lineage',
        'Privacy Protection',
        'Access Control',
        'Data Classification',
        'Audit Trails',
        'Governance Analytics'
      ],
      benefits: [
        'Improved data quality',
        'Compliance automation',
        'Risk reduction',
        'Data transparency',
        'Operational efficiency',
        'Trust building'
      ],
      useCases: [
        'Financial Services',
        'Healthcare',
        'Government',
        'Retail',
        'Manufacturing',
        'Technology',
        'Education',
        'Legal'
      ],
      marketPrice: '$500 - $3,200/month',
      roi: '300-450%',
      launchDate: 'Q4 2025'
    }
  ];

  const categories = [...new Set(newServices.map(service => service.category))];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6">
              <Star className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">New in 2025</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Revolutionary AI Services
            </h1>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our cutting-edge micro SAAS services designed to transform industries and drive unprecedented growth. 
              Each service combines proven AI technology with innovative business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
              >
                <span>Request Pricing</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg font-medium hover:from-cyan-700 hover:to-blue-800 transition-all duration-200">
              All Services
            </button>
            {categories.map((category, index) => (
              <button
                key={category}
                className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg font-medium hover:bg-gray-700 hover:text-white transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-purple-500/30 group"
            >
              {/* Service Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <div className="text-sm text-gray-400">{service.category}</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
              
              {/* Pricing & ROI */}
              <div className="mb-4 space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg">
                  <DollarSign className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 font-semibold text-sm">{service.price}</span>
                </div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold text-sm">ROI: {service.roi}</span>
                </div>
              </div>
              
              {/* Launch Date */}
              <div className="mb-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm">Launch: {service.launchDate}</span>
                </div>
              </div>
              
              {/* Features Preview */}
              <div className="space-y-3 mb-6">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span>{feature}</span>
                  </div>
                ))}
                {service.features.length > 3 && (
                  <div className="text-sm text-gray-500">
                    +{service.features.length - 3} more features
                  </div>
                )}
              </div>

              {/* Market Comparison */}
              <div className="mb-6 p-4 bg-gray-700/50 rounded-lg">
                <div className="text-sm text-gray-400 mb-2">Market Price:</div>
                <div className="text-lg font-semibold text-white">{service.marketPrice}</div>
                <div className="text-sm text-green-400">You save up to 40%</div>
              </div>

              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors font-medium group-hover:translate-x-1 transition-transform"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Why Choose Our AI Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Technology</h3>
                <p className="text-purple-100">Built on years of AI research and real-world implementation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">High ROI</h3>
                <p className="text-purple-100">Average return on investment of 300-500% within 12 months</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-purple-100">Bank-level security with SOC 2 Type II compliance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-purple-100">Round-the-clock technical support and customer success</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Global Scale</h3>
                <p className="text-purple-100">Deployed across 50+ countries with multi-language support</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
                <p className="text-purple-100">Get up and running in as little as 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Join the AI revolution and gain a competitive edge with our cutting-edge services. 
              Get early access to our 2025 lineup and secure exclusive pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Our Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewServicesShowcase2025;
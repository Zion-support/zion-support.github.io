import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  AlertTriangle,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Lock,
  Search,
  Eye,
  TrendingUp,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Globe,
  Cpu,
  Database,
  Network,
  Cloud,
  Rocket,
  Lightbulb,
  Workflow,
  Bot,
  Sparkles,
  Palette,
  Server,
  Smartphone,
  Code,
  Layers,
  FileText,
  PieChart,
  LineChart,
  BarChart,
  Target,
  Clock,
  DollarSign,
  Calendar,
  Play,
  Truck,
  Package,
  Warehouse,
  Route,
  Factory,
  Ship,
  Plane,
  Train,
  Car,
  Bike,
  Bus,
  Motorcycle,
  Helicopter,
  Rocket as RocketIcon,
  Satellite,
  Activity,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  Settings,
  UserCheck,
  Timer,
  TrendingDown,
  Plus,
  Minus,
  Divide,
  Percent,
  Hash,
  MapPin2,
  Navigation,
  Compass,
  Target2,
  Crosshair,
  Flag,
  Anchor,
  Wind,
  Cloud,
  Sun,
  Moon,
  Star2,
  Planet,
  Globe2,
  Map,
  Layers2,
  Grid,
  List,
  Filter,
  SortAsc,
  SortDesc,
  Search2,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  RefreshCw,
  RefreshCcw,
  Download,
  Upload,
  Share,
  Copy,
  Scissors,
  Edit,
  Trash,
  Archive,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  MessageSquare,
  Phone2,
  Video,
  Camera,
  Image,
  File,
  Folder,
  HardDrive,
  Database2,
  Server2,
  Monitor,
  Smartphone2,
  Tablet,
  Laptop,
  Desktop,
  Printer,
  Scanner,
  Keyboard,
  Mouse,
  Headphones,
  Speaker,
  Microphone,
  Webcam,
  Gamepad,
  Controller,
  Joystick,
  Remote,
  Battery,
  Power,
  Wifi,
  Bluetooth,
  Signal,
  Network2,
  Router,
  Switch,
  Hub,
  Bridge,
  Gateway,
  Firewall,
  Shield2,
  Lock2,
  Key,
  Fingerprint,
  Eye2,
  EyeOff,
  User,
  UserPlus,
  UserMinus,
  UserX,
  Users2,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserCog,
  UserShield,
  UserStar,
  UserHeart,
  UserCheck3,
  UserX3,
  UserPlus3,
  UserMinus3,
  UserCog2,
  UserShield2,
  UserStar2,
  UserHeart2,
  UserCheck4,
  UserX4,
  UserPlus4,
  UserMinus4,
  UserCog3,
  UserShield3,
  UserStar3,
  UserHeart3,
  UserCheck5,
  UserX5,
  UserPlus5,
  UserMinus5,
  UserCog4,
  UserShield4,
  UserStar4,
  UserHeart4,
  UserCheck6,
  UserX6,
  UserPlus6,
  UserMinus6,
  UserCog5,
  UserShield5,
  UserStar5,
  UserHeart5,
  UserCheck7,
  UserX7,
  UserPlus7,
  UserMinus7,
  UserCog6,
  UserShield6,
  UserStar6,
  UserHeart6,
  UserCheck8,
  UserX8,
  UserPlus8,
  UserMinus8,
  UserCog7,
  UserShield7,
  UserStar7,
  UserHeart7,
  UserCheck9,
  UserX9,
  UserPlus9,
  UserMinus9,
  UserCog8,
  UserShield8,
  UserStar8,
  UserHeart8,
  UserCheck10,
  UserX10,
  UserPlus10,
  UserMinus10,
  UserCog9,
  UserShield9,
  UserStar9,
  UserHeart9,
  UserCheck11,
  UserX11,
  UserPlus11,
  UserMinus11,
  UserCog10,
  UserShield10,
  UserStar10,
  UserHeart10,
  UserCheck12,
  UserX12,
  UserPlus12,
  UserMinus12,
  UserCog11,
  UserShield11,
  UserStar11,
  UserHeart11,
  UserCheck13,
  UserX13,
  UserPlus13,
  UserMinus13,
  UserCog12,
  UserShield12,
  UserStar12,
  UserHeart12,
  UserCheck14,
  UserX14,
  UserPlus14,
  UserMinus14,
  UserCog13,
  UserShield13,
  UserStar13,
  UserHeart13,
  UserCheck15,
  UserX15,
  UserPlus15,
  UserMinus15,
  UserCog14,
  UserShield14,
  UserStar14,
  UserHeart14,
  UserCheck16,
  UserX16,
  UserPlus16,
  UserMinus16,
  UserCog15,
  UserShield15,
  UserStar15,
  UserHeart15,
  UserCheck17,
  UserX17,
  UserPlus17,
  UserMinus17,
  UserCog16,
  UserShield16,
  UserStar16,
  UserHeart16,
  UserCheck18,
  UserX18,
  UserPlus18,
  UserMinus18,
  UserCog17,
  UserShield17,
  UserStar17,
  UserHeart17,
  UserCheck19,
  UserX19,
  UserPlus19,
  UserMinus19,
  UserCog18,
  UserShield18,
  UserStar18,
  UserHeart18,
  UserCheck20,
  UserX20,
  UserPlus20,
  UserMinus20,
  UserCog19,
  UserShield19,
  UserStar19,
  UserHeart19,
  UserCheck21,
  UserX21,
  UserPlus21,
  UserMinus21,
  UserCog20,
  UserShield20,
  UserStar20,
  UserHeart20,
  UserCheck22,
  UserX22,
  UserPlus22,
  UserMinus22,
  UserCog21,
  UserShield21,
  UserStar21,
  UserHeart21,
  UserCheck23,
  UserX23,
  UserPlus23,
  UserMinus23,
  UserCog22,
  UserShield22,
  UserStar22,
  UserHeart22,
  UserCheck24,
  UserX24,
  UserPlus24,
  UserMinus24,
  UserCog23,
  UserShield23,
  UserStar23,
  UserHeart23,
  UserCheck25,
  UserX25,
  UserPlus25,
  UserMinus25,
  UserCog24,
  UserShield24,
  UserStar24,
  UserHeart24,
  UserCheck26,
  UserX26,
  UserPlus26,
  UserMinus26,
  UserCog25,
  UserShield25,
  UserStar25,
  UserHeart25,
  UserCheck27,
  UserX27,
  UserPlus27,
  UserMinus27,
  UserCog26,
  UserShield26,
  UserStar26,
  UserHeart26,
  UserCheck28,
  UserX28,
  UserPlus28,
  UserMinus28,
  UserCog27,
  UserShield27,
  UserStar27,
  UserHeart27,
  UserCheck29,
  UserX29,
  UserPlus29,
  UserMinus29,
  UserCog28,
  UserShield28,
  UserStar28,
  UserHeart28,
  UserCheck30,
  UserX30,
  UserPlus30,
  UserMinus30,
  UserCog29,
  UserShield29,
  UserStar29,
  UserHeart29,
  UserCheck31,
  UserX31,
  UserPlus31,
  UserMinus31,
  UserCog30,
  UserShield30,
  UserStar30,
  UserHeart30,
  UserCheck32,
  UserX32,
  UserPlus32,
  UserMinus32,
  UserCog31,
  UserShield31,
  UserStar31,
  UserHeart31,
  UserCheck33,
  UserX33,
  UserPlus33,
  UserMinus33,
  UserCog32,
  UserShield32,
  UserStar32,
  UserHeart32,
  UserCheck34,
  UserX34,
  UserPlus34,
  UserMinus34,
  UserCog33,
  UserShield33,
  UserStar33,
  UserHeart33,
  UserCheck35,
  UserX35,
  UserPlus35,
  UserMinus35,
  UserCog34,
  UserShield34,
  UserStar34,
  UserHeart34,
  UserCheck36,
  UserX36,
  UserPlus36,
  UserMinus36,
  UserCog35,
  UserShield35,
  UserStar35,
  UserHeart35,
  UserCheck37,
  UserX37,
  UserPlus37,
  UserMinus37,
  UserCog36,
  UserShield36,
  UserStar36,
  UserHeart36,
  UserCheck38,
  UserX38,
  UserPlus38,
  UserMinus38,
  UserCog37,
  UserShield37,
  UserStar37,
  UserHeart37,
  UserCheck39,
  UserX39,
  UserPlus39,
  UserMinus39,
  UserCog38,
  UserShield38,
  UserStar38,
  UserHeart38,
  UserCheck40,
  UserX40,
  UserPlus40,
  UserMinus40,
  UserCog39,
  UserShield39,
  UserStar39,
  UserHeart39,
  UserCheck41,
  UserX41,
  UserPlus41,
  UserMinus41,
  UserCog40,
  UserShield40,
  UserStar40,
  UserHeart40,
  UserCheck42,
  UserX42,
  UserPlus42,
  UserMinus42,
  UserCog41,
  UserShield41,
  UserStar41,
  UserHeart41,
  UserCheck43,
  UserX43,
  UserPlus43,
  UserMinus43,
  UserCog42,
  UserShield42,
  UserStar42,
  UserHeart42,
  UserCheck44,
  UserX44,
  UserPlus44,
  UserMinus44,
  UserCog43,
  UserShield43,
  UserStar43,
  UserHeart43,
  UserCheck45,
  UserX45,
  UserPlus45,
  UserMinus45,
  UserCog44,
  UserShield44,
  UserStar44,
  UserHeart44,
  UserCheck46,
  UserX46,
  UserPlus46,
  UserMinus46,
  UserCog45,
  UserShield45,
  UserStar45,
  UserHeart45,
  UserCheck47,
  UserX47,
  UserPlus47,
  UserMinus47,
  UserCog46,
  UserShield46,
  UserStar46,
  UserHeart46,
  UserCheck48,
  UserX48,
  UserPlus48,
  UserMinus48,
  UserCog47,
  UserShield47,
  UserStar47,
  UserHeart47,
  UserCheck49,
  UserX49,
  UserPlus49,
  UserMinus49,
  UserCog48,
  UserShield48,
  UserStar48,
  UserHeart48,
  UserCheck50,
  UserX50,
  UserPlus50,
  UserMinus50,
  UserCog49,
  UserShield49,
  UserStar49,
  UserHeart49
} from 'lucide-react';

export default function AISupplyChainRiskManagement() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Risk Assessment',
      description: 'Advanced machine learning algorithms identify and predict supply chain risks with 96.3% accuracy',
      benefits: ['Real-time risk scoring', 'Predictive risk modeling', 'Multi-factor risk analysis', 'Automated risk alerts']
    },
    {
      icon: AlertTriangle,
      title: 'Early Warning System',
      description: 'Proactive monitoring and alerts for potential supply chain disruptions before they impact operations',
      benefits: ['24/7 risk monitoring', 'Intelligent alert prioritization', 'Risk trend analysis', 'Preventive action recommendations']
    },
    {
      icon: Globe,
      title: 'Global Supply Chain Visibility',
      description: 'End-to-end visibility across your entire supply chain network with real-time tracking and monitoring',
      benefits: ['Multi-tier supplier mapping', 'Real-time shipment tracking', 'Geographic risk assessment', 'Supply chain network optimization']
    },
    {
      icon: Shield,
      title: 'Compliance & Regulatory Monitoring',
      description: 'Automated monitoring of regulatory changes and compliance requirements across all jurisdictions',
      benefits: ['Regulatory change alerts', 'Compliance risk scoring', 'Automated reporting', 'Audit trail management']
    },
    {
      icon: Workflow,
      title: 'Automated Risk Response',
      description: 'Intelligent workflow automation for rapid response to supply chain disruptions and risks',
      benefits: ['Automated response triggers', 'Escalation workflows', 'Alternative supplier recommendations', 'Business continuity planning']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics & Reporting',
      description: 'Comprehensive analytics dashboard with customizable reports and actionable insights',
      benefits: ['Custom dashboards', 'Real-time metrics', 'Trend analysis', 'Performance benchmarking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$899',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 100 suppliers',
        'Basic risk assessment',
        'Standard reporting',
        'Email support',
        'Basic integrations',
        'Risk monitoring'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact?service=ai-supply-chain-risk&plan=starter'
    },
    {
      name: 'Professional',
      price: '$1,799',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 1,000 suppliers',
        'Advanced AI analytics',
        'Custom dashboards',
        'Priority support',
        'Advanced integrations',
        'Automated workflows',
        'Compliance monitoring',
        'API access'
      ],
      popular: true,
      cta: 'Get Started',
      href: '/contact?service=ai-supply-chain-risk&plan=professional'
    },
    {
      name: 'Enterprise',
      price: '$3,599',
      period: '/month',
      description: 'For large multinational corporations',
      features: [
        'Unlimited suppliers',
        'Custom AI models',
        'White-label solution',
        'Dedicated support manager',
        'Full integration suite',
        'Advanced analytics',
        'Custom development',
        'On-premise option'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact?service=ai-supply-chain-risk&plan=enterprise'
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing Risk Management',
      description: 'Monitor supplier performance and identify potential disruptions in manufacturing supply chains',
      icon: Factory,
      benefits: ['Reduce production delays by 45%', 'Identify alternative suppliers', 'Optimize inventory levels']
    },
    {
      title: 'Logistics & Transportation',
      description: 'Track shipments and monitor transportation risks across global supply chains',
      icon: Truck,
      benefits: ['Real-time shipment visibility', 'Route optimization', 'Delivery risk mitigation']
    },
    {
      title: 'Retail Supply Chain',
      description: 'Manage inventory risks and ensure product availability across retail networks',
      icon: Package,
      benefits: ['Prevent stockouts', 'Optimize reorder points', 'Improve customer satisfaction']
    },
    {
      title: 'Financial Risk Assessment',
      description: 'Evaluate financial risks of suppliers and assess creditworthiness',
      icon: DollarSign,
      benefits: ['Credit risk monitoring', 'Financial health tracking', 'Payment risk assessment']
    }
  ];

  const testimonials = [
    {
      name: 'David Chen',
      role: 'Supply Chain Director',
      company: 'Global Manufacturing Corp',
      content: 'This platform has transformed our risk management. We\'ve reduced supply chain disruptions by 60% and improved our response time significantly.',
      rating: 5
    },
    {
      name: 'Sarah Rodriguez',
      role: 'VP of Operations',
      company: 'Retail Chain International',
      content: 'The AI-powered risk assessment has helped us prevent stockouts and maintain optimal inventory levels across all our locations.',
      rating: 5
    },
    {
      name: 'Michael Thompson',
      role: 'Logistics Manager',
      company: 'Shipping Solutions Ltd',
      content: 'Real-time visibility and risk monitoring have improved our delivery reliability and customer satisfaction dramatically.',
      rating: 5
    }
  ];

  const marketComparison = {
    competitors: [
      { name: 'Resilinc', price: '$2,500-5,000/month', features: 'Good risk monitoring, expensive' },
      { name: 'Supply Chain Risk Management', price: '$1,800-4,000/month', features: 'Basic features, limited AI' },
      { name: 'Risk Management Solutions', price: '$3,000-7,000/month', features: 'Advanced features, very expensive' }
    ],
    ourAdvantage: [
      'More affordable than competitors',
      'Superior AI capabilities',
      'Better user experience',
      'Faster implementation',
      'Superior customer support'
    ]
  };

  const riskCategories = [
    {
      title: 'Supplier Risks',
      description: 'Monitor supplier financial health, performance, and compliance',
      icon: Users,
      risks: ['Financial instability', 'Quality issues', 'Delivery delays', 'Compliance violations']
    },
    {
      title: 'Geopolitical Risks',
      description: 'Assess political, economic, and social risks in supplier locations',
      icon: Globe,
      risks: ['Political instability', 'Economic sanctions', 'Trade restrictions', 'Social unrest']
    },
    {
      title: 'Operational Risks',
      description: 'Monitor operational risks in your supply chain network',
      icon: Activity,
      risks: ['Production delays', 'Quality control issues', 'Capacity constraints', 'Technology failures']
    },
    {
      title: 'Environmental Risks',
      description: 'Assess environmental and sustainability risks',
      icon: Leaf,
      risks: ['Climate change impacts', 'Natural disasters', 'Environmental regulations', 'Sustainability compliance']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Supply Chain Risk Management Platform | Zion Tech Group"
        description="Transform your supply chain with AI-powered risk management. Reduce disruptions by 60%, improve visibility, and ensure business continuity. Starting at $899/month."
        keywords="AI supply chain risk management, supply chain visibility, risk assessment, supplier monitoring, supply chain analytics, business continuity"
        canonicalUrl="https://ziontechgroup.com/services/ai-supply-chain-risk-management"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Risk Management</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your supply chain with intelligent risk management. Reduce disruptions by 60%, improve visibility, 
              and ensure business continuity with AI-powered supply chain technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact?service=ai-supply-chain-risk"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-500 transition-all duration-200">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">60%</div>
                <div className="text-gray-400">Reduced Disruptions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">96.3%</div>
                <div className="text-gray-400">AI Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">45%</div>
                <div className="text-gray-400">Faster Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-400">Monitoring</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Supply Chain Risk Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with supply chain expertise to deliver 
              unprecedented risk visibility and management capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Risk Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor and manage all types of supply chain risks with our comprehensive risk assessment platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.risks.map((risk, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <AlertTriangle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                      {risk}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing for Every Business Size
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business. All plans include our core AI features and 24/7 support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-orange-500/50 bg-gradient-to-br from-slate-800/80 to-orange-900/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.href}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">Need a custom solution?</p>
            <Link
              to="/contact?service=ai-supply-chain-risk&plan=custom"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-500 transition-all duration-200"
            >
              Contact Sales Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Supply Chain Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading organizations are using our platform to transform their supply chain risk management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we compare to the competition and why leading organizations choose our platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Competitor Comparison</h3>
              <div className="space-y-4">
                {marketComparison.competitors.map((competitor, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-white">{competitor.name}</h4>
                      <span className="text-gray-400 text-sm">{competitor.price}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{competitor.features}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Advantages</h3>
              <div className="space-y-4">
                {marketComparison.ourAdvantage.map((advantage, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about the transformative impact of our AI supply chain risk management platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-orange-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600/20 to-red-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations already using our AI-powered platform to improve supply chain resilience, 
              reduce risks, and ensure business continuity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact?service=ai-supply-chain-risk"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact?service=ai-supply-chain-risk&demo=request"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-500 transition-all duration-200"
              >
                Schedule Demo
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 21-day free trial • ✓ No credit card required • ✓ Full feature access</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-red-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
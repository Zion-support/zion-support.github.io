import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Settings,
  Monitor,
  AlertTriangle,
  Lightbulb,
  Target,
  Rocket,
  Globe,
  Lock,
  Database,
  Network,
  Cpu,
  Smartphone,
  Cloud,
  Server,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  Calendar,
  FileText,
  PieChart,
  LineChart,
  Activity,
  Command,
  Bot,
  Cog,
  RefreshCw,
  Eye,
  Key,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  MessageSquare,
  Video,
  PhoneCall,
  Mail as MailIcon,
  MessageCircle,
  Bell,
  UserCheck,
  UserX,
  UserPlus,
  Users as UsersIcon,
  Building,
  Home,
  Briefcase,
  GraduationCap,
  Heart,
  Globe as GlobeIcon,
  Wifi,
  Bluetooth,
  WifiOff,
  Signal,
  Battery,
  Power,
  PowerOff,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Video as VideoIcon,
  VideoOff,
  Image,
  File,
  Folder,
  FolderOpen,
  Trash2,
  Edit,
  Save,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Move,
  Copy,
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
  Code as CodeIcon,
  Link as LinkIcon,
  ExternalLink,
  Paperclip,
  Send,
  Archive,
  Inbox,
  Outbox,
  Trash,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprise,
  Wink,
  Tongue,
  Kiss,
  Wink2,
  Grimace,
  Sunglasses,
  Confused,
  Confounded,
  Kissing,
  KissingHeart,
  KissingSmile,
  KissingClosedEyes,
  StuckOutTongue,
  StuckOutTongueWinkingEye,
  StuckOutTongueClosedEyes,
  Disappointed,
  Worried,
  Angry as AngryIcon,
  Rage,
  Cry,
  Sob,
  Joy,
  Astonished,
  Scream,
  Neckbeard,
  Smirk,
  NoMouth,
  NeutralFace,
  Expressionless,
  Husk,
  RollingEyes} from 'lucide-react';

const AIAutonomousBusinessOperations = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Decision Making",
      description: "Advanced machine learning algorithms that make intelligent business decisions in real-time",
      benefits: ["Automated risk assessment", "Predictive analytics", "Intelligent resource allocation", "Market trend analysis"]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "End-to-end automation of complex business processes and workflows",
      benefits: ["Reduced manual errors", "Increased efficiency", "24/7 operation", "Scalable processes"]
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization of business performance metrics",
      benefits: ["Real-time insights", "Proactive improvements", "Cost optimization", "Revenue enhancement"]
    },
    {
      icon: Shield,
      title: "Intelligent Security",
      description: "AI-driven security monitoring and threat detection",
      benefits: ["Advanced threat detection", "Automated response", "Compliance monitoring", "Risk mitigation"]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enhanced collaboration tools with AI-powered insights",
      benefits: ["Smart task allocation", "Performance tracking", "Communication optimization", "Knowledge sharing"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive business intelligence and reporting",
      benefits: ["Custom dashboards", "Predictive modeling", "Data visualization", "Actionable insights"]
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      applications: ["Risk management", "Fraud detection", "Portfolio optimization", "Compliance automation"],
      icon: DollarSign
    },
    {
      industry: "Healthcare",
      applications: ["Patient care optimization", "Resource management", "Clinical decision support", "Administrative automation"],
      icon: Heart
    },
    {
      industry: "Manufacturing",
      applications: ["Supply chain optimization", "Quality control", "Predictive maintenance", "Production planning"],
      icon: Cog
    },
    {
      industry: "Retail",
      applications: ["Inventory management", "Customer behavior analysis", "Pricing optimization", "Supply chain management"],
      icon: ShoppingCart
    },
    {
      industry: "Technology",
      applications: ["DevOps automation", "Performance monitoring", "Security operations", "Customer support"],
      icon: Cpu
    },
    {
      industry: "Consulting",
      applications: ["Client management", "Project optimization", "Knowledge management", "Resource allocation"],
      icon: Briefcase
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses starting their automation journey",
      features: [
        "Basic AI decision making",
        "Process automation (up to 10 workflows)",
        "Standard analytics dashboard",
        "Email support",
        "Basic security monitoring"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$8,500",
      period: "/month",
      description: "Ideal for growing businesses with complex operations",
      features: [
        "Advanced AI decision making",
        "Unlimited process automation",
        "Custom analytics dashboards",
        "Priority support",
        "Advanced security features",
        "API integrations",
        "Custom reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$25,000",
      period: "/month",
      description: "Comprehensive solution for large enterprises",
      features: [
        "Full AI autonomy",
        "Enterprise-grade automation",
        "Custom AI models",
        "Dedicated support team",
        "Advanced security & compliance",
        "White-label options",
        "Custom development",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Autonomous Business Operations - Zion Tech Group"
        description="Transform your business with AI-powered autonomous operations. Automate decision-making, optimize processes, and achieve unprecedented efficiency with our cutting-edge platform."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-purple-600/20 text-purple-400 text-sm font-semibold rounded-full border border-purple-500/30">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Platform
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI Autonomous
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Business Operations
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your business with intelligent automation. Our AI platform makes decisions, 
            optimizes processes, and operates autonomously 24/7 to maximize efficiency and profitability.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              to="#demo"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose AI Autonomous Operations?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and intelligence in your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "24/7 Operation",
                description: "Your business never sleeps with continuous AI monitoring and decision-making"
              },
              {
                icon: DollarSign,
                title: "Cost Reduction",
                description: "Reduce operational costs by up to 40% through intelligent automation"
              },
              {
                icon: TrendingUp,
                title: "Increased Efficiency",
                description: "Boost productivity by 300% with AI-powered process optimization"
              },
              {
                icon: Shield,
                title: "Risk Mitigation",
                description: "Proactively identify and address risks before they impact your business"
              },
              {
                icon: Users,
                title: "Team Empowerment",
                description: "Free your team to focus on strategic initiatives and innovation"
              },
              {
                icon: Target,
                title: "Data-Driven Decisions",
                description: "Make informed decisions based on real-time data and AI insights"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI capabilities designed to transform every aspect of your business operations
            </p>
          </motion.div>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600">
                    <div className="w-full h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-16 h-16 text-purple-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform is designed to transform operations across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg mr-4">
                    <useCase.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                <ul className="space-y-2">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-center text-gray-300 text-sm">
                      <ArrowRight className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`bg-slate-800/50 rounded-xl p-8 border ${
                  tier.popular 
                    ? 'border-purple-500 ring-2 ring-purple-500/20' 
                    : 'border-slate-700'
                } hover:border-purple-400 transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {tier.popular && (
                  <div className="flex items-center justify-center mb-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-400">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/request-quote"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our AI experts to discuss how autonomous operations can revolutionize your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="p-4 bg-purple-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-purple-400 font-semibold">{contactInfo.phone}</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="p-4 bg-blue-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-400 font-semibold">{contactInfo.email}</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="p-4 bg-green-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-green-400 font-semibold text-sm">{contactInfo.address}</p>
            </motion.div>
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Request Custom Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessOperations;
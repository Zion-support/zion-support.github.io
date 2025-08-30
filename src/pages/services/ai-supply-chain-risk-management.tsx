import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle, 
  BarChart3,
  Clock,
  DollarSign,
  Users,
  Database,
  Zap,
  ArrowRight,
  Star,
  Globe,
  Lock,
  Eye,
  ShieldCheck,
  FileCheck,
  AlertCircle,
  Calendar,
  Target,
  PieChart,
  Activity,
  BookOpen,
  Settings,
  Bell,
  Download,
  Upload,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Copy,
  Share2,
  Printer,
  Mail,
  Phone,
  MessageCircle,
  Video,
  Camera,
  Mic,
  Headphones,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  Cloud,
  Wifi,
  Bluetooth,
  CreditCard,
  Wallet,
  PiggyBank,
  Building,
  Home,
  MapPin,
  Navigation,
  Compass,
  Globe2,
  World,
  Flag,
  Award,
  Trophy,
  Medal,
  Certificate,
  Badge,
  Tag,
  Label,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Plus,
  Minus,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Maximize,
  Minimize,
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
  Indent,
  Outdent,
  ListOrdered,
  ListUnordered,
  Quote,
  Code,
  Link as LinkIcon,
  Image,
  Video as VideoIcon,
  Music,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  HardDrive,
  Archive,
  Inbox,
  Send,
  MailOpen,
  MailCheck,
  MailWarning,
  MailX,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  PhoneOff,
  Voicemail,
  MessageSquare,
  MessageCircle as MessageCircleIcon,
  MessageSquare as MessageSquareIcon,
  MessageCircle as MessageCircleIcon2,
  MessageSquare as MessageSquareIcon2,
  MessageCircle as MessageCircleIcon3,
  MessageSquare as MessageSquareIcon3,
  MessageCircle as MessageCircleIcon4,
  MessageSquare as MessageSquareIcon4,
  MessageCircle as MessageCircleIcon5,
  MessageSquare as MessageSquareIcon5,
  MessageCircle as MessageCircleIcon6,
  MessageSquare as MessageSquareIcon6,
  MessageCircle as MessageCircleIcon7,
  MessageSquare as MessageSquareIcon7,
  MessageCircle as MessageCircleIcon8,
  MessageSquare as MessageSquareIcon8,
  MessageCircle as MessageCircleIcon9,
  MessageSquare as MessageSquareIcon9,
  MessageCircle as MessageCircleIcon10,
  MessageSquare as MessageSquareIcon10
} from 'lucide-react';

export default function AISupplyChainRiskManagement() {
  const features = [
    {
      title: 'Real-time Risk Monitoring',
      description: '24/7 automated monitoring of supply chain risks across all tiers and geographies',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Powered Risk Prediction',
      description: 'Machine learning algorithms that predict potential disruptions before they occur',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Multi-tier Supplier Mapping',
      description: 'Complete visibility into your entire supplier network with risk scoring',
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Geopolitical Risk Analysis',
      description: 'Monitor political, economic, and environmental risks in supplier regions',
      icon: MapPin,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Financial Health Monitoring',
      description: 'Track supplier financial stability and credit risk in real-time',
      icon: DollarSign,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Automated Risk Alerts',
      description: 'Instant notifications when risk thresholds are exceeded or new threats emerge',
      icon: Bell,
      color: 'from-teal-500 to-green-500'
    }
  ];

  const benefits = [
    {
      title: 'Reduce Supply Disruptions',
      description: 'Proactive risk identification prevents costly supply chain interruptions',
      icon: Shield,
      metric: '85%',
      metricLabel: 'Fewer Disruptions'
    },
    {
      title: 'Lower Operational Costs',
      description: 'Optimize inventory levels and reduce emergency sourcing expenses',
      icon: DollarSign,
      metric: '30-50%',
      metricLabel: 'Cost Reduction'
    },
    {
      title: 'Improve Resilience',
      description: 'Build a more robust and adaptable supply chain network',
      icon: TrendingUp,
      metric: '90%',
      metricLabel: 'Resilience Score'
    },
    {
      title: 'Faster Response Time',
      description: 'Real-time alerts enable immediate action on emerging risks',
      icon: Zap,
      metric: '60%',
      metricLabel: 'Faster Response'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 100 suppliers',
        'Basic risk monitoring',
        'Standard risk scoring',
        'Email alerts',
        'Basic reporting',
        '5 user accounts',
        'Email support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$899',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 1,000 suppliers',
        'Advanced risk monitoring',
        'AI risk prediction',
        'Real-time alerts',
        'Custom reporting',
        'Unlimited user accounts',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large multinational corporations',
      features: [
        'Unlimited suppliers',
        'Full risk management suite',
        'Custom AI models',
        'Dedicated support team',
        'On-premise deployment',
        'Custom integrations',
        'Training & certification',
        'SLA guarantees',
        '24/7 phone support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const riskCategories = [
    'Geopolitical Risks',
    'Financial Instability',
    'Natural Disasters',
    'Cybersecurity Threats',
    'Regulatory Changes',
    'Quality Issues',
    'Capacity Constraints',
    'Transportation Delays',
    'Currency Fluctuations',
    'Trade Restrictions'
  ];

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      role: 'Supply Chain Director',
      company: 'Global Manufacturing Corp',
      content: 'The AI Supply Chain Risk Management platform has given us unprecedented visibility into our supplier network. We\'ve prevented multiple disruptions and saved millions in potential losses.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Procurement Manager',
      company: 'Retail Chain',
      content: 'Real-time risk monitoring has transformed how we manage our supply chain. The AI predictions are incredibly accurate and help us stay ahead of potential issues.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Operations VP',
      company: 'Technology Company',
      content: 'This platform has become essential to our operations. The multi-tier supplier mapping and risk scoring provide insights we never had before.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium mb-6"
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              AI-Powered Supply Chain Risk Management
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              AI Supply Chain
              <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Risk Management
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Protect your supply chain with AI-powered risk monitoring, predictive analytics, and real-time alerts. Identify threats before they become disruptions and build a resilient supply network.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Watch Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Advanced Risk Management Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our AI-powered platform provides comprehensive supply chain risk management with intelligent monitoring and predictive analytics.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Measurable Business Impact
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              See real results with our AI-powered supply chain risk management platform
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-400 mb-2">{benefit.metric}</div>
                <div className="text-sm text-gray-400 mb-3">{benefit.metricLabel}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Choose the plan that fits your supply chain complexity. All plans include our core AI risk management features.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-orange-500 ring-2 ring-orange-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Categories Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Comprehensive Risk Coverage
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our platform monitors all critical supply chain risk categories
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {riskCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-700/50 rounded-lg p-4 text-center border border-gray-600 hover:border-orange-500/50 transition-all duration-300"
              >
                <AlertTriangle className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300 font-medium">{category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Trusted by Supply Chain Leaders
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              See what supply chain professionals are saying about our platform
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-orange-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900/50 to-red-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Protect Your Supply Chain?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already secured their supply chains with AI-powered risk management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
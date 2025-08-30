import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  FileText, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle,
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

export default function AIFinancialComplianceAssistant() {
  const features = [
    {
      title: 'Real-time Compliance Monitoring',
      description: '24/7 automated monitoring of financial transactions and regulatory requirements',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Powered Risk Assessment',
      description: 'Machine learning algorithms that identify potential compliance risks before they become issues',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Automated Reporting',
      description: 'Generate regulatory reports automatically with customizable templates and schedules',
      icon: FileText,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Regulatory Updates',
      description: 'Stay current with real-time updates on changing financial regulations and requirements',
      icon: RefreshCw,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Audit Trail Management',
      description: 'Comprehensive tracking of all compliance activities with tamper-proof records',
      icon: Database,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Multi-Jurisdiction Support',
      description: 'Handle compliance requirements across multiple countries and regulatory bodies',
      icon: Globe,
      color: 'from-teal-500 to-green-500'
    }
  ];

  const benefits = [
    {
      title: 'Reduce Compliance Costs',
      description: 'Automate manual processes and reduce the need for expensive compliance consultants',
      icon: DollarSign,
      metric: '40-60%',
      metricLabel: 'Cost Reduction'
    },
    {
      title: 'Minimize Risk Exposure',
      description: 'Proactive identification and mitigation of compliance risks before they escalate',
      icon: Shield,
      metric: '90%',
      metricLabel: 'Risk Reduction'
    },
    {
      title: 'Improve Efficiency',
      description: 'Streamline compliance workflows and reduce time spent on manual reporting',
      icon: Zap,
      metric: '70%',
      metricLabel: 'Time Savings'
    },
    {
      title: 'Ensure Accuracy',
      description: 'AI-powered validation ensures all compliance data is accurate and up-to-date',
      icon: CheckCircle,
      metric: '99.9%',
      metricLabel: 'Accuracy Rate'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small financial institutions',
      features: [
        'Basic compliance monitoring',
        'Standard reporting templates',
        'Email alerts',
        'Basic risk assessment',
        '5 user accounts',
        'Email support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing financial services',
      features: [
        'Advanced compliance monitoring',
        'Custom reporting templates',
        'Real-time alerts',
        'Advanced risk assessment',
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
      description: 'For large financial institutions',
      features: [
        'Full compliance suite',
        'Custom development',
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

  const complianceStandards = [
    'SOX (Sarbanes-Oxley Act)',
    'GLBA (Gramm-Leach-Bliley Act)',
    'PCI DSS (Payment Card Industry)',
    'GDPR (General Data Protection Regulation)',
    'CCPA (California Consumer Privacy Act)',
    'Basel III',
    'Dodd-Frank Act',
    'FATCA (Foreign Account Tax Compliance Act)',
    'AML (Anti-Money Laundering)',
    'KYC (Know Your Customer)'
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Chief Compliance Officer',
      company: 'Global Financial Services',
      content: 'The AI Financial Compliance Assistant has transformed our compliance operations. We\'ve reduced audit preparation time by 80% and eliminated compliance violations.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Risk Management Director',
      company: 'Regional Bank',
      content: 'Real-time monitoring and automated reporting have given us unprecedented visibility into our compliance status. The AI risk assessment is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Legal Counsel',
      company: 'FinTech Startup',
      content: 'As a growing company, we needed a compliance solution that could scale with us. This platform has exceeded our expectations in every way.',
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
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6"
            >
              <Shield className="h-4 w-4 mr-2" />
              AI-Powered Financial Compliance
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              AI Financial
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Compliance Assistant
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Transform your financial compliance operations with AI-powered automation, real-time monitoring, and intelligent risk assessment. Stay compliant, reduce costs, and focus on growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
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
              Powerful Features for Modern Compliance
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our AI-powered platform provides comprehensive compliance management with intelligent automation and real-time insights.
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
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
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
              See real results with our AI-powered compliance platform
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
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
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
              Choose the plan that fits your compliance needs. All plans include our core AI features.
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
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
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

      {/* Compliance Standards Section */}
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
              Comprehensive Compliance Coverage
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our platform supports all major financial compliance standards and regulations
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-700/50 rounded-lg p-4 text-center border border-gray-600 hover:border-blue-500/50 transition-all duration-300"
              >
                <ShieldCheck className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300 font-medium">{standard}</p>
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
              Trusted by Financial Leaders
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              See what compliance professionals are saying about our platform
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
                  <div className="text-blue-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Compliance Operations?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of financial institutions that have already modernized their compliance with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
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
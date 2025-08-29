import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Target, 
  CheckCircle, 
  TrendingUp, 
  Zap, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  BarChart3,
  Shield,
  Globe,
  Award,
  Phone,
  Mail,
  MapPin,
  Brain,
  Rocket,
  Sparkles,
  FileText,
  Code,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Eye,
  Search,
  Filter,
  Clipboard,
  PenTool,
  GanttChart,
  Kanban,
  GitBranch,
  Workflow,
  BarChart3,
  AlertTriangle,
  CheckSquare,
  Timer,
  Lightbulb,
  Settings,
  Database,
  Lock,
  Unlock,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Download,
  Upload,
  Share2,
  Copy,
  Edit3,
  Trash2,
  Save,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Layout,
  Sidebar,
  SidebarClose,
  SidebarOpen,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Split,
  Columns,
  Rows,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Star as StarIcon,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  MessageCircle,
  MessageSquareText,
  MessageCircleText,
  MessageSquareDots,
  MessageCircleDots,
  MessageSquarePlus,
  MessageCirclePlus,
  MessageSquareMinus,
  MessageCircleMinus,
  MessageSquareX,
  MessageCircleX,
  MessageSquareCheck,
  MessageCircleCheck,
  MessageSquareWarning,
  MessageCircleWarning,
  MessageSquareQuestion,
  MessageCircleQuestion,
  MessageSquareInfo,
  MessageCircleInfo,
  MessageSquareMore,
  MessageCircleMore,
  MessageSquareReply,
  MessageCircleReply,
  MessageSquareForward,
  MessageCircleForward,
  MessageSquareShare,
  MessageCircleShare,
  MessageSquareEdit,
  MessageCircleEdit,
  MessageSquareTrash,
  MessageCircleTrash,
  MessageSquarePin,
  MessageCirclePin,
  MessageSquareUnpin,
  MessageCircleUnpin,
  MessageSquareBookmark,
  MessageCircleBookmark,
  MessageSquareUnbookmark,
  MessageCircleUnbookmark,
  MessageSquareArchive,
  MessageCircleArchive,
  MessageSquareUnarchive,
  MessageCircleUnarchive,
  MessageSquareMute,
  MessageCircleMute,
  MessageSquareUnmute,
  MessageCircleUnmute,
  MessageSquareBlock,
  MessageCircleBlock,
  MessageSquareUnblock,
  MessageCircleUnblock,
  MessageSquareReport,
  MessageCircleReport,
  MessageSquareFlag,
  MessageCircleFlag,
  MessageSquareUnflag,
  MessageCircleUnflag,
  MessageSquarePin2,
  MessageCirclePin2,
  MessageSquareUnpin2,
  MessageCircleUnpin2,
  MessageSquareBookmark2,
  MessageCircleBookmark2,
  MessageSquareUnbookmark2,
  MessageCircleUnbookmark2,
  MessageSquareArchive2,
  MessageCircleArchive2,
  MessageSquareUnarchive2,
  MessageCircleUnarchive2,
  MessageSquareMute2,
  MessageCircleMute2,
  MessageSquareUnmute2,
  MessageCircleUnmute2,
  MessageSquareBlock2,
  MessageCircleBlock2,
  MessageSquareUnblock2,
  MessageCircleUnblock2,
  MessageSquareReport2,
  MessageCircleReport2,
  MessageSquareFlag2,
  MessageCircleFlag2,
  MessageSquareUnflag2,
  MessageCircleUnflag2
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function AIProjectManagementAutomation() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Task Management",
      description: "Intelligent task prioritization and resource allocation using machine learning",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Workflow,
      title: "Automated Workflow Orchestration",
      description: "Smart workflow automation that adapts to your team's patterns and preferences",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Analytics,
      title: "Predictive Analytics",
      description: "AI-driven insights into project timelines, risks, and resource optimization",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Team Collaboration AI",
      description: "Intelligent team matching and communication optimization based on skills and availability",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Smart Goal Tracking",
      description: "Automated progress monitoring with AI-powered milestone predictions",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Risk Management AI",
      description: "Proactive risk identification and mitigation strategies using predictive modeling",
      color: "from-red-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Reduce project planning time by 70%",
      metric: "70%"
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Lower project management costs by 45%",
      metric: "45%"
    },
    {
      icon: TrendingUp,
      title: "Success Rate",
      description: "Increase project success rate by 35%",
      metric: "35%"
    },
    {
      icon: Users,
      title: "Team Productivity",
      description: "Boost team productivity by 60%",
      metric: "60%"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 10 team members",
        "AI task prioritization",
        "Basic workflow automation",
        "Standard reporting",
        "Email support",
        "5 project templates"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50 team members",
        "Advanced AI analytics",
        "Custom workflow automation",
        "Advanced reporting & dashboards",
        "Priority support",
        "Unlimited project templates",
        "API access",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Full AI suite access",
        "Enterprise workflow automation",
        "Custom AI model training",
        "Dedicated support manager",
        "White-label options",
        "Advanced security features",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const useCases = [
    {
      title: "Software Development",
      description: "Agile project management with AI-powered sprint planning and bug prediction",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Marketing Campaigns",
      description: "Automated campaign tracking and performance optimization using AI insights",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Construction Projects",
      description: "Resource optimization and timeline management for complex construction projects",
      icon: Building,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Event Planning",
      description: "Intelligent event coordination with automated vendor management and scheduling",
      icon: Calendar,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Project Management Automation - Zion Tech Group"
        description="Revolutionary AI-powered project management platform that automates workflows, optimizes resources, and predicts project success with 99.5% accuracy."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary AI Technology
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered Project Management
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Automation Platform
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your project management with intelligent automation, predictive analytics, 
              and AI-driven insights that boost productivity by 60% and reduce costs by 45%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge machine learning with intuitive project management 
              to deliver unprecedented efficiency and insights.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of companies that have transformed their project management 
              with our AI-powered platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial 
              and our industry-leading AI technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-purple-500 ring-2 ring-purple-500/20' 
                    : 'border-gray-700'
                } hover:border-gray-600 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/demo"}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform is designed to work across all industries and project types, 
              providing tailored solutions for your specific needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${useCase.color} mb-6`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the future of project management with AI-powered automation that 
              delivers real results and measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Ready to revolutionize your project management? Our AI experts are here 
                to help you implement the perfect solution for your organization.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Request a Custom Demo
              </h3>
              <p className="text-gray-300 mb-6">
                See how our AI platform can transform your specific project management needs.
              </p>
              <Link
                to="/demo"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 w-full justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
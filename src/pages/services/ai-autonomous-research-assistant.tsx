import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { SEOOptimizer, defaultSEO } from '../../components/SEOOptimizer';
import { 
  Search, 
  BookOpen, 
  FileText, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain,
  Globe,
  BarChart3,
  Users,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Network,
  Database,
  Workflow,
  Activity,
  Eye,
  Filter,
  Calendar,
  Package,
  Warehouse,
  Rocket,
  Satellite,
  Cloud,
  Lock,
  Monitor,
  Smartphone,
  Server,
  Chip,
  Wifi,
  Target,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Video,
  GraduationCap,
  Users2,
  Handshake,
  Building2,
  ShoppingCart,
  Heart,
  Leaf,
  Sparkles,
  Crown,
  Gem,
  Trophy,
  Medal,
  Badge,
  Certificate,
  Diploma,
  Scroll,
  Pencil,
  Edit,
  Trash2,
  Copy,
  Download,
  Upload,
  Share2,
  ExternalLink,
  Maximize2,
  Minimize2,
  RotateCcw,
  RefreshCw,
  Power,
  PowerOff,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  FastForward,
  Rewind,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Image,
  Video as VideoIcon,
  VideoOff,
  Music,
  Headphones,
  Speaker,
  Radio,
  Tv,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Tablet as TabletIcon,
  Laptop as LaptopIcon,
  Desktop,
  Printer,
  Scanner,
  Fax,
  Copier,
  Projector,
  Whiteboard,
  Chalkboard,
  Calendar as CalendarIcon,
  Clock as ClockIcon2,
  Timer,
  Stopwatch,
  AlarmClock,
  Hourglass,
  CalendarDays,
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
  CalendarCopy,
  CalendarDownload,
  CalendarUpload,
  CalendarShare,
  CalendarExternalLink,
  CalendarMaximize,
  CalendarMinimize,
  CalendarRotate,
  CalendarRefresh,
  CalendarPower,
  CalendarPowerOff,
  CalendarPlay,
  CalendarPause,
  CalendarStop,
  CalendarSkipBack,
  CalendarSkipForward,
  CalendarFastForward,
  CalendarRewind,
  CalendarVolume,
  CalendarVolumeX,
  CalendarMic,
  CalendarMicOff,
  CalendarCamera,
  CalendarCameraOff,
  CalendarImage,
  CalendarVideo,
  CalendarVideoOff,
  CalendarMusic,
  CalendarHeadphones,
  CalendarSpeaker,
  CalendarRadio,
  CalendarTv,
  CalendarMonitor,
  CalendarSmartphone,
  CalendarTablet,
  CalendarLaptop,
  CalendarDesktop,
  CalendarPrinter,
  CalendarScanner,
  CalendarFax,
  CalendarCopier,
  CalendarProjector,
  CalendarWhiteboard,
  CalendarChalkboard
} from 'lucide-react';

const seoConfig = {
  ...defaultSEO,
  title: "AI Autonomous Research Assistant | Zion Tech Group",
  description: "Revolutionary AI-powered research platform that autonomously conducts research, analyzes data, and generates insights. Accelerate research by 10x and discover breakthrough insights.",
  keywords: "AI research, autonomous research, research automation, AI research assistant, intelligent research, research AI, automated research, research intelligence",
  url: "https://ziontechgroup.com/services/ai-autonomous-research-assistant"
};

export default function AIAutonomousResearchAssistant() {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Research Execution",
      description: "AI agents that independently conduct research, gather data, and analyze information across multiple sources and databases."
    },
    {
      icon: Search,
      title: "Intelligent Literature Review",
      description: "Advanced NLP algorithms that automatically review and synthesize research papers, identifying key insights and trends."
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Visualization",
      description: "Machine learning models that analyze complex datasets, identify patterns, and generate interactive visualizations."
    },
    {
      icon: Globe,
      title: "Multi-Source Intelligence",
      description: "Integration with academic databases, industry reports, news sources, and proprietary data for comprehensive research coverage."
    },
    {
      icon: Workflow,
      title: "Research Workflow Automation",
      description: "End-to-end automation of research processes, from hypothesis generation to report writing and presentation creation."
    },
    {
      icon: Shield,
      title: "Advanced Security & Compliance",
      description: "Enterprise-grade security with data privacy protection, regulatory compliance, and comprehensive audit trails."
    }
  ];

  const benefits = [
    "Accelerate research timelines by 10x through AI automation",
    "Discover breakthrough insights with advanced pattern recognition",
    "Reduce research costs by 70% with autonomous execution",
    "Real-time collaboration and knowledge sharing across teams",
    "Seamless integration with existing research tools and databases",
    "Scalable architecture supporting multiple research domains"
  ];

  const pricing = [
    {
      name: "Researcher",
      price: "$1,500",
      period: "/month",
      description: "Perfect for individual researchers and small teams",
      features: [
        "Up to 100 research queries/month",
        "Basic AI research assistance",
        "Literature review automation",
        "Email support",
        "Standard integrations"
      ],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Academic",
      price: "$4,500",
      period: "/month",
      description: "Ideal for academic institutions and research labs",
      features: [
        "Up to 1,000 research queries/month",
        "Advanced AI research capabilities",
        "Data analysis automation",
        "Priority support",
        "Custom integrations",
        "Advanced analytics"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$15,000",
      period: "/month",
      description: "For large research organizations and corporations",
      features: [
        "Unlimited research queries",
        "Full AI research autonomy",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solutions",
        "Multi-domain research support"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Academic Research",
      description: "Accelerate academic research with AI-powered literature reviews, data analysis, and hypothesis generation.",
      icon: GraduationCap
    },
    {
      title: "Market Research",
      description: "Conduct comprehensive market research with autonomous data collection, competitor analysis, and trend identification.",
      icon: BarChart3
    },
    {
      title: "Scientific Discovery",
      description: "Accelerate scientific breakthroughs with AI-powered hypothesis testing, data analysis, and pattern recognition.",
      icon: Lightbulb
    },
    {
      title: "Business Intelligence",
      description: "Generate actionable business insights with autonomous research on industry trends, market opportunities, and competitive landscapes.",
      icon: TrendingUp
    }
  ];

  return (
    <>
      <SEOOptimizer config={seoConfig} />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8">
                  <Search className="w-4 h-4 mr-2" />
                  AI-Powered Research Platform
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Autonomous Research
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Intelligence</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Revolutionize your research capabilities with our AI-powered platform that autonomously conducts research, 
                  analyzes data, and generates breakthrough insights. Accelerate research by 10x and discover what others miss.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Intelligent Research Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with deep research expertise to deliver 
                unprecedented research acceleration and insight discovery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Research Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented research acceleration and insight discovery with our AI-powered research platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your research needs. All plans include a 30-day free trial.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-green-500/50 bg-green-500/5' 
                      : 'border-green-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                    }`}
                  >
                    {plan.buttonText}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Research Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI research platform is designed to meet the unique challenges of various research domains.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600/20 to-blue-600/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of researchers already using our AI platform to accelerate discoveries, 
                generate insights, and achieve breakthrough results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
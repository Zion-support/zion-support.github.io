import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { SEOOptimizer, defaultSEO } from '../../components/SEOOptimizer';
import { 
  Factory, 
  Cpu, 
  Settings, 
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
  Search,
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
  Cpu,
  Wifi,
  Target,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Video,
  FileText,
  BookOpen,
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
import { Link } from 'react-router-dom';

const seoConfig = {
  ...defaultSEO,
  title: "AI Autonomous Manufacturing Platform | Zion Tech Group",
  description: "Revolutionary AI-powered manufacturing platform that autonomously optimizes production processes, quality control, and supply chain operations. Increase productivity by 50% and reduce defects by 80%.",
  keywords: "AI manufacturing, autonomous manufacturing, smart factory, Industry 4.0, predictive maintenance, quality control AI, manufacturing automation, intelligent manufacturing",
  url: "https://ziontechgroup.com/services/ai-autonomous-manufacturing-platform"
};

export default function AIAutonomousManufacturingPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Production Optimization",
      description: "Advanced machine learning algorithms that continuously optimize production schedules, resource allocation, and workflow efficiency in real-time."
    },
    {
      icon: Cpu,
      title: "Autonomous Quality Control",
      description: "Computer vision and AI systems that automatically inspect products, detect defects, and maintain consistent quality standards with 99.9% accuracy."
    },
    {
      icon: BarChart3,
      title: "Predictive Maintenance",
      description: "IoT sensors and AI analytics that predict equipment failures before they occur, reducing downtime by up to 70% and extending machine lifespan."
    },
    {
      icon: Globe,
      title: "Smart Supply Chain Integration",
      description: "Seamless integration with suppliers and logistics partners, with AI-driven demand forecasting and automated inventory management."
    },
    {
      icon: Workflow,
      title: "Intelligent Workflow Automation",
      description: "End-to-end automation of manufacturing processes, from raw material handling to finished product packaging and shipping."
    },
    {
      icon: Shield,
      title: "Advanced Security & Compliance",
      description: "Enterprise-grade cybersecurity with blockchain verification, regulatory compliance tracking, and comprehensive audit trails."
    }
  ];

  const benefits = [
    "Increase manufacturing productivity by 50% through AI optimization",
    "Reduce product defects by 80% with autonomous quality control",
    "Minimize equipment downtime by 70% with predictive maintenance",
    "Real-time monitoring and analytics for proactive decision-making",
    "Seamless integration with existing MES and ERP systems",
    "Scalable architecture supporting multiple production facilities"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$5,000",
      period: "/month",
      description: "Perfect for small manufacturing operations",
      features: [
        "Up to 10 production lines",
        "Basic AI optimization",
        "Quality control automation",
        "Email support",
        "Standard integrations"
      ],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$15,000",
      period: "/month",
      description: "Ideal for growing manufacturing companies",
      features: [
        "Up to 50 production lines",
        "Advanced AI optimization",
        "Predictive maintenance",
        "Priority support",
        "Custom integrations",
        "Advanced analytics"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$50,000",
      period: "/month",
      description: "For large-scale manufacturing operations",
      features: [
        "Unlimited production lines",
        "Full AI autonomy",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solutions",
        "Multi-site management"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Automotive Manufacturing",
      description: "Optimize assembly lines, quality control, and supply chain management for automotive production with AI-powered automation.",
      icon: Car
    },
    {
      title: "Electronics Production",
      description: "Streamline PCB assembly, component testing, and quality assurance with intelligent manufacturing systems.",
      icon: Chip
    },
    {
      title: "Pharmaceutical Manufacturing",
      description: "Ensure compliance and quality in drug production with AI-powered monitoring and automated quality control.",
      icon: Heart
    },
    {
      title: "Food & Beverage Processing",
      description: "Optimize production efficiency and maintain food safety standards with intelligent monitoring systems.",
      icon: Package
    }
  ];

  return (
    <>
      <SEOOptimizer config={seoConfig} />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8">
                  <Factory className="w-4 h-4 mr-2" />
                  AI-Powered Manufacturing Platform
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Autonomous Manufacturing
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Intelligence</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Revolutionize your manufacturing operations with our AI-powered platform that autonomously optimizes 
                  production processes, quality control, and supply chain operations. Increase productivity by 50% and reduce defects by 80%.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center"
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
                Intelligent Manufacturing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with deep manufacturing expertise to deliver 
                unprecedented efficiency and quality improvements.
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
                  className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-400" />
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
                Transform Your Manufacturing Operations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency and quality improvements with our AI-powered manufacturing platform.
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
                Choose the plan that best fits your manufacturing needs. All plans include a 30-day free trial.
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
                      ? 'border-purple-500/50 bg-purple-500/5' 
                      : 'border-purple-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-purple-500 hover:bg-purple-600 text-white'
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
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI manufacturing platform is designed to meet the unique challenges of various industries.
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
                  className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Manufacturing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies already using our AI manufacturing platform to increase productivity, 
                improve quality, and gain competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center"
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
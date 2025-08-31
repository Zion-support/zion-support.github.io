import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { SEOOptimizer, defaultSEO } from '../../components/SEOOptimizer';
import { 
  Truck, 
  Route, 
  MapPin, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain,
  Globe,
  BarChart3,
  Users,
  Settings,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Cpu,
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
  Ship,
  Plane,
  Train,
  Car,
  Bike,
  Rocket,
  Satellite,
  Cloud,
  Lock,
  Key,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  Chip,
  Wifi,
  Bluetooth,
  Gps,
  Compass,
  Target,
  Flag,
  CheckSquare,
  AlertTriangle,
  Info,
  HelpCircle,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  MessageCircle,
  Video,
  FileText,
  BookOpen,
  GraduationCap,
  Users2,
  Handshake,
  Building2,
  Factory,
  ShoppingCart,
  Heart,
  Leaf,
  Zap as ZapIcon,
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
  title: "AI Autonomous Logistics Platform | Zion Tech Group",
  description: "Revolutionary AI-powered logistics platform that autonomously optimizes supply chains, routes, and delivery operations. Reduce costs by 40% and improve efficiency by 60%.",
  keywords: "AI logistics, autonomous logistics, supply chain optimization, route optimization, delivery automation, logistics AI, smart logistics, intelligent transportation",
  url: "https://ziontechgroup.com/services/ai-autonomous-logistics-platform"
};

export default function AIAutonomousLogisticsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Route Optimization",
      description: "Advanced algorithms that continuously learn and optimize delivery routes in real-time, reducing fuel costs and delivery times by up to 35%."
    },
    {
      icon: Truck,
      title: "Autonomous Fleet Management",
      description: "Intelligent fleet coordination with predictive maintenance, real-time tracking, and automated dispatching for maximum operational efficiency."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Machine learning models that predict demand patterns, optimize inventory levels, and forecast delivery windows with 95% accuracy."
    },
    {
      icon: Globe,
      title: "Global Supply Chain Visibility",
      description: "End-to-end visibility across your entire supply chain with real-time monitoring, alerts, and automated issue resolution."
    },
    {
      icon: Workflow,
      title: "Intelligent Workflow Automation",
      description: "Automated order processing, warehouse operations, and last-mile delivery coordination with minimal human intervention."
    },
    {
      icon: Shield,
      title: "Advanced Security & Compliance",
      description: "Enterprise-grade security with blockchain verification, regulatory compliance, and comprehensive audit trails."
    }
  ];

  const benefits = [
    "Reduce logistics costs by 40% through AI optimization",
    "Improve delivery efficiency by 60% with autonomous routing",
    "99.9% uptime with redundant AI systems and failover protection",
    "Real-time tracking and predictive analytics for proactive management",
    "Seamless integration with existing ERP and WMS systems",
    "Scalable architecture supporting millions of shipments daily"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small logistics operations",
      features: [
        "Up to 1,000 shipments/month",
        "Basic AI route optimization",
        "Real-time tracking",
        "Email support",
        "Standard integrations"
      ],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "/month",
      description: "Ideal for growing logistics companies",
      features: [
        "Up to 10,000 shipments/month",
        "Advanced AI optimization",
        "Predictive analytics",
        "Priority support",
        "Custom integrations",
        "Advanced reporting"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$25,000",
      period: "/month",
      description: "For large-scale logistics operations",
      features: [
        "Unlimited shipments",
        "Full AI autonomy",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solutions",
        "Advanced analytics dashboard"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "E-commerce Logistics",
      description: "Optimize last-mile delivery for e-commerce companies with AI-powered route planning and real-time customer updates.",
      icon: ShoppingCart
    },
    {
      title: "Manufacturing Supply Chain",
      description: "Streamline raw material procurement and finished goods distribution with intelligent inventory management.",
      icon: Factory
    },
    {
      title: "Healthcare Logistics",
      description: "Ensure timely delivery of medical supplies and pharmaceuticals with temperature-controlled monitoring and compliance tracking.",
      icon: Heart
    },
    {
      title: "Retail Distribution",
      description: "Optimize store replenishment and cross-docking operations with predictive demand forecasting.",
      icon: Building2
    }
  ];

  return (
    <>
      <SEOOptimizer config={seoConfig} />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
                  <Truck className="w-4 h-4 mr-2" />
                  AI-Powered Logistics Platform
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Autonomous Logistics
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Intelligence</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Revolutionize your logistics operations with our AI-powered platform that autonomously optimizes 
                  supply chains, routes, and delivery operations. Reduce costs by 40% and improve efficiency by 60%.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center"
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
                Intelligent Logistics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with deep logistics expertise to deliver 
                unprecedented efficiency and cost savings.
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
                  className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-400" />
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
                Transform Your Logistics Operations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency and cost savings with our AI-powered logistics platform.
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
                Choose the plan that best fits your logistics needs. All plans include a 30-day free trial.
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
                      ? 'border-blue-500/50 bg-blue-500/5' 
                      : 'border-blue-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
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
                Our AI logistics platform is designed to meet the unique challenges of various industries.
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
                  className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Logistics?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies already using our AI logistics platform to reduce costs, 
                improve efficiency, and gain competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center"
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
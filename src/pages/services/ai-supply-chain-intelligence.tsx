import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Truck, 
  Warehouse, 
  Workflow, 
  Shield, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Cloud,
  Lock,
  Activity,
  Target,
  DollarSign,
  Clock,
  Star,
  Rocket,
  Cpu,
  Network,
  Globe,
  Building2,
  FileText,
  MessageCircle,
  Calendar,
  Settings,
  PieChart,
  LineChart,
  BarChart,
  PieChart3,
  ActivitySquare,
  GanttChart,
  Kanban,
  CalendarDays,
  UserCheck,
  CreditCard,
  ShoppingCart,
  Receipt,
  Calculator,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  Zap as ZapIcon,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Link as LinkIcon,
  Copy,
  Share2,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Percent,
  Hash,
  Hash as HashIcon,
  Hash as HashIcon2,
  Hash as HashIcon3,
  Hash as HashIcon4,
  Hash as HashIcon5,
  Hash as HashIcon6,
  Hash as HashIcon7,
  Hash as HashIcon8,
  Hash as HashIcon9,
  Hash as HashIcon10,
  Package,
  Route,
  Navigation,
  Compass,
  Map,
  Globe2,
  Anchor,
  Ship,
  Plane,
  Train,
  Bus,
  Car,
  Bike,
  Walk,
  Run,
  StopCircle,
  PlayCircle,
  PauseCircle,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Camera,
  CameraOff,
  Image,
  ImageOff,
  File,
  FileText as FileTextIcon,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  FilePresentation,
  FileDocument,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileZip,
  FileRar,
  File7z,
  FileTxt,
  FileCsv,
  FileJson,
  FileXml,
  FileHtml,
  FileCss,
  FileJs,
  FileTs,
  FileJsx,
  FileTsx,
  FileVue,
  FileSvelte,
  FileAngular,
  FileReact,
  FileNode,
  FilePython,
  FileJava,
  FileCpp,
  FileCSharp,
  FilePhp,
  FileRuby,
  FileGo,
  FileRust,
  FileSwift,
  FileKotlin,
  FileDart,
  FileFlutter,
  FileReactNative,
  FileIonic,
  FileElectron,
  FileNext,
  FileNuxt,
  FileGatsby,
  FileStrapi,
  FileSanity,
  FileContentful,
  FileShopify,
  FileWooCommerce,
  FileMagento,
  FileBigCommerce,
  FilePrestaShop,
  FileOpenCart,
  FileZenCart,
  FileOsCommerce,
  FileVirtueMart,
  FileRedShop,
  FileJoomla,
  FileDrupal,
  FileWordPress,
  FileTumblr,
  FileMedium,
  FileSubstack,
  FileGhost,
  FileHugo,
  FileJekyll,
  FileHexo,
  FileVuePress,
  FileDocusaurus,
  FileGitBook,
  FileNotion,
  FileAirtable,
  FileMonday,
  FileAsana,
  FileTrello,
  FileJira,
  FileLinear,
  FileClickUp,
  FileBasecamp,
  FileSlack,
  FileDiscord,
  FileTeams,
  FileZoom,
  FileMeet,
  FileSkype,
  FileWhatsApp,
  FileTelegram,
  FileSignal,
  FileViber,
  FileWeChat,
  FileLine,
  FileKakaoTalk,
  FileVK,
  FileQQ,
  FileWeibo,
  FileTikTok,
  FileInstagram,
  FileFacebook,
  FileTwitter,
  FileLinkedIn,
  FileYouTube,
  FileTwitch,
  FileReddit,
  FilePinterest,
  FileSnapchat,
  FileSpotify,
  FileAppleMusic,
  FileSoundCloud,
  FileBandcamp,
  FileDeezer,
  FileTidal,
  FileAmazonMusic,
  FileGooglePlayMusic,
  FilePandora,
  FileLastFm,
  FileShazam,
  FileAudible,
  FileKindle,
  FileNetflix,
  FileHulu,
  FileDisneyPlus,
  FileHBO,
  FilePrimeVideo,
  FileAppleTV,
  FileCrunchyroll,
  FileFunimation,
  FileVrv,
  FileHidive,
  FileRetroCrush,
  FileTubi,
  FilePluto,
  FileRoku,
  FileFireTV,
  FileAndroidTV,
  FileAppleTV2,
  FileChromecast,
  FileAirPlay,
  FileMiracast,
  FileDLNA,
  FileUPnP,
  FileBluetooth,
  FileWifi,
  FileEthernet,
  FileUSB,
  FileHDMI,
  FileDisplayPort,
  FileVGA,
  FileDVI,
  FileThunderbolt,
  FileLightning,
  FileMicroUSB,
  FileTypeC,
  FileMiniUSB,
  FileFireWire,
  FileSCSI,
  FileSATA,
  FileNVMe,
  FilePCIe,
  FileAGP,
  FileISA,
  FileEISA,
  FileMCA,
  FileVLB,
  FilePCMCIA,
  FileExpressCard,
  FileCardBus,
  FileMiniPCI,
  FileMiniPCIe,
  FileM2,
  FileU2,
  FileSAS,
  FileFibreChannel,
  FileInfiniBand,
  FileMyrinet,
  FileOmniPath,
  FileCray,
  FileIBM,
  FileHP,
  FileDell,
  FileLenovo,
  FileAsus,
  FileAcer,
  FileMSI,
  FileGigabyte,
  FileASRock,
  FileBiostar,
  FileEVGA,
  FileCorsair,
  FileThermaltake,
  FileCoolerMaster,
  FileNZXT,
  FilePhanteks,
  FileFractal,
  FilebeQuiet,
  FileSilverstone,
  FileLianLi,
  FileInWin,
  FileBitFenix,
  FileRosewill,
  FileAntec,
  FileEnermax,
  FileSeasonic,
  FileEVGA2,
  FileCorsair2,
  FileThermaltake2,
  FileCoolerMaster2,
  FileNZXT2,
  FilePhanteks2,
  FileFractal2,
  FilebeQuiet2,
  FileSilverstone2,
  FileLianLi2,
  FileInWin2,
  FileBitFenix2,
  FileRosewill2,
  FileAntec2,
  FileEnermax2,
  FileSeasonic2
} from 'lucide-react';

const AISupplyChainIntelligence = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Advanced machine learning algorithms for accurate demand prediction, inventory optimization, and supply planning"
    },
    {
      icon: Workflow,
      title: "Intelligent Route Optimization",
      description: "AI-driven logistics optimization for cost-effective shipping, delivery scheduling, and route planning"
    },
    {
      icon: BarChart3,
      title: "Real-Time Supply Chain Analytics",
      description: "Comprehensive dashboards with real-time KPIs, performance metrics, and predictive insights"
    },
    {
      icon: Truck,
      title: "Smart Inventory Management",
      description: "AI-optimized inventory levels, automated reordering, and demand-driven stock management"
    },
    {
      icon: Database,
      title: "Unified Supply Chain Data",
      description: "Centralized data management with AI-powered data cleansing, validation, and integration"
    },
    {
      icon: Shield,
      title: "Risk Management & Compliance",
      description: "Proactive risk identification, compliance monitoring, and automated mitigation strategies"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses starting their supply chain optimization journey",
      features: [
        "Up to 5 locations",
        "Basic demand forecasting",
        "Standard reporting",
        "Email support",
        "Cloud hosting included",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$899",
      period: "/month",
      description: "Ideal for growing businesses with advanced supply chain needs",
      features: [
        "Up to 25 locations",
        "Advanced AI forecasting",
        "Route optimization",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "Full-featured solution for large enterprises with complex supply chain requirements",
      features: [
        "Unlimited locations",
        "Custom AI models",
        "White-label options",
        "Dedicated support",
        "On-premise option",
        "Custom development",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "25% Cost Reduction",
      description: "Optimize routes, reduce inventory costs, and minimize waste through AI insights"
    },
    {
      icon: Clock,
      title: "40% Faster Delivery",
      description: "Intelligent route optimization and demand forecasting improve delivery times"
    },
    {
      icon: Target,
      title: "30% Better Accuracy",
      description: "AI-driven forecasting and planning improve supply chain accuracy and efficiency"
    },
    {
      icon: Users,
      title: "Enhanced Visibility",
      description: "Real-time tracking and analytics provide complete supply chain transparency"
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Optimize production planning, inventory management, and supplier relationships",
      icon: Cpu
    },
    {
      industry: "Retail & E-commerce",
      description: "Streamline inventory, improve delivery times, and enhance customer satisfaction",
      icon: ShoppingCart
    },
    {
      industry: "Logistics & Transportation",
      description: "Optimize routes, reduce fuel costs, and improve fleet efficiency",
      icon: Truck
    },
    {
      industry: "Healthcare",
      description: "Manage medical supplies, optimize distribution, and ensure availability",
      icon: Heart
    }
  ];

  const supplyChainMetrics = [
    {
      metric: "Order Fulfillment Rate",
      description: "Track the percentage of orders fulfilled on time and in full",
      icon: CheckCircle
    },
    {
      metric: "Inventory Turnover",
      description: "Monitor how efficiently inventory is managed and sold",
      icon: RefreshCw
    },
    {
      metric: "Lead Time",
      description: "Measure the time from order placement to delivery",
      icon: Clock
    },
    {
      metric: "Supply Chain Cost",
      description: "Track total supply chain costs and identify optimization opportunities",
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain Intelligence
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Supply Chain with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> AI Intelligence</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Optimize your entire supply chain with intelligent automation, predictive analytics, and AI-driven insights. 
              Reduce costs, improve efficiency, and deliver exceptional customer experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300">
                Schedule Demo
              </button>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Supply Chains
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Everything you need to optimize your supply chain operations and drive business growth
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
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              See real results with our AI-powered supply chain intelligence platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zion-cyan mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Supply Chain Metrics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Track the metrics that matter most for supply chain optimization and business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supplyChainMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 text-center hover:border-zion-purple/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{metric.metric}</h3>
                <p className="text-zion-slate-light">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that best fits your supply chain needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-blue-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/90 hover:to-zion-purple/90'
                    : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored supply chain solutions for various industries and business types
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 text-center hover:border-zion-purple/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of businesses already using AI-powered supply chain intelligence to optimize operations and drive growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Need Help Getting Started?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-zion-cyan mb-3" />
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-zion-cyan mb-3" />
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-zion-cyan mb-3" />
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainIntelligence;
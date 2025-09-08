import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  BarChart3, 
  Code, 
  Server, 
  Smartphone, 
  Atom, 
  Star, 
  Target, 
  TrendingUp, 
  Award, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  Workflow, 
  Leaf, 
  Truck, 
  Building, 
  PenTool, 
  Eye, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Heart,
  Satellite,
  Wifi,
  Bot,
  Layers,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Rocket as RocketIcon,
  Leaf as LeafIcon,
  Globe2,
  Handshake,
  FileText,
  Video,
  GraduationCap,
  Palette,
  Camera,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Truck as TruckIcon,
  Building2,
  Factory,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  Volcano,
  Cave,
  Canyon,
  Valley,
  Flask,
  Microscope,
  TestTube,
  Pill,
  Stethoscope,
  HeartPulse,
  Activity,
  PieChart,
  LineChart,
  AreaChart,
  ScatterChart,
  BarChart,
  TrendingDown,
  Minus,
  Plus,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  Bell,
  Clock,
  Calendar,
  Timer,
  Stopwatch,
  Hourglass,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Mute,
  Unmute,
  Mic,
  MicOff,
  Headphones,
  Speaker,
  Monitor,
  MonitorOff,
  MonitorSpeaker,
  MonitorSmartphone,
  Laptop,
  LaptopOff,
  Tablet,
  Smartphone,
  SmartphoneOff,
  SmartphoneCharging,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  BatteryWarning,
  Wifi,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  SignalZero,
  Bluetooth,
  BluetoothOff,
  BluetoothSearching,
  BluetoothConnected,
  BluetoothDisconnected,
  BluetoothX,
  BluetoothA,
  BluetoothB,
  BluetoothC,
  BluetoothD,
  BluetoothE,
  BluetoothF,
  BluetoothG,
  BluetoothH,
  BluetoothI,
  BluetoothJ,
  BluetoothK,
  BluetoothL,
  BluetoothM,
  BluetoothN,
  BluetoothO,
  BluetoothP,
  BluetoothQ,
  BluetoothR,
  BluetoothS,
  BluetoothT,
  BluetoothU,
  BluetoothV,
  BluetoothW,
  BluetoothX2,
  BluetoothY,
  BluetoothZ
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const featuredServices = [
    {
      name: 'AI-Powered Business Intelligence Platform',
      description: 'Transform your data into actionable intelligence with advanced AI analytics, interactive dashboards, and predictive insights.',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-powered-business-intelligence-platform',
      features: ['AI-powered analytics', 'Interactive dashboards', 'Data integration', 'Advanced reporting'],
      pricing: 'Starting at $299/month',
      category: 'AI & Analytics'
    },
    {
      name: 'Quantum Computing Solutions Platform',
      description: 'Harness the revolutionary potential of quantum computing to solve complex problems that are impossible for classical computers.',
      icon: Atom,
      color: 'from-purple-500 to-pink-500',
      href: '/services/quantum-computing-solutions-platform',
      features: ['Quantum algorithm development', 'Quantum security', 'Quantum ML', 'Cloud access'],
      pricing: 'Starting at $1,999/month',
      category: 'Quantum Computing'
    },
    {
      name: 'AI Customer Success Platform',
      description: 'Leverage artificial intelligence to predict customer needs, automate success workflows, and drive unprecedented retention.',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      href: '/services/ai-customer-success-platform',
      features: ['AI insights', 'Automated workflows', 'Health scoring', 'Success playbooks'],
      pricing: 'Starting at $199/month',
      category: 'Customer Success'
    },
    {
      name: 'AI Content Creation Studio Pro',
      description: 'Advanced AI content creation platform for marketing, branding, and content strategy.',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      href: '/services/AI-Content-Creation-Studio-Pro',
      features: ['AI content generation', 'Brand consistency', 'SEO optimization', 'Multi-format output'],
      pricing: 'Starting at $399/month',
      category: 'Content Creation'
    },
    {
      name: 'Quantum AI Trading Platform',
      description: 'Next-generation quantum trading platform for financial markets and algorithmic trading.',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      href: '/services/Quantum-AI-Trading-Platform',
      features: ['Quantum algorithms', 'AI trading', 'Risk management', 'Real-time analytics'],
      pricing: 'Starting at $2,999/month',
      category: 'Financial Technology'
    }
  ];

  const serviceCategories = [
    {
      name: 'Artificial Intelligence',
      description: 'Cutting-edge AI solutions for business transformation',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        'AI Business Intelligence',
        'AI Customer Success',
        'AI Content Creation',
        'AI Cybersecurity',
        'AI HR Platform'
      ]
    },
    {
      name: 'Quantum Computing',
      description: 'Next-generation quantum solutions for complex problems',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      services: [
        'Quantum Computing Platform',
        'Quantum AI Trading',
        'Quantum Security',
        'Quantum ML',
        'Post-Quantum Cryptography'
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      description: 'Innovative software-as-a-service for modern businesses',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      services: [
        'Lead Generation AI',
        'Support Automation',
        'Reporting Studio',
        'Security Scanner',
        'OCR Pipeline'
      ]
    },
    {
      name: 'IT Infrastructure',
      description: 'Enterprise-grade IT solutions and services',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      services: [
        'Cloud Migration',
        'DevOps Automation',
        'Cybersecurity',
        'Data Engineering',
        'IoT Platforms'
      ]
    }
  ];

  const industrySolutions = [
    {
      industry: 'Financial Services',
      icon: DollarSign,
      solutions: ['AI Trading', 'Risk Management', 'Fraud Detection', 'Portfolio Optimization'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      industry: 'Healthcare',
      icon: Heart,
      solutions: ['AI Diagnostics', 'Patient Analytics', 'Drug Discovery', 'Care Coordination'],
      color: 'from-red-500 to-pink-500'
    },
    {
      industry: 'Manufacturing',
      icon: Factory,
      solutions: ['Predictive Maintenance', 'Quality Control', 'Supply Chain', 'Performance Analytics'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      industry: 'Retail & E-commerce',
      icon: ShoppingCart,
      solutions: ['Customer Analytics', 'Inventory Management', 'Personalization', 'Supply Chain'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2025 Innovative Services Showcase
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover the Future of
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Technology Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive suite of cutting-edge AI, quantum computing, and micro-SaaS solutions 
              designed to transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 mr-2" />
                Explore Services
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Innovative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most advanced and transformative services designed to give you a competitive edge.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <span className="text-lg font-bold text-blue-400">{service.pricing}</span>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive range of technology services organized by category.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="flex items-center text-gray-300 hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      {service}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
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
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored technology solutions designed for specific industry challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{industry.industry}</h3>
                <ul className="space-y-2 text-sm">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="text-gray-300">
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover how our innovative services can drive growth, efficiency, and competitive advantage 
              for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Our Experts
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 mr-2" />
                Explore All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
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
};

export default InnovativeServicesShowcase2025;
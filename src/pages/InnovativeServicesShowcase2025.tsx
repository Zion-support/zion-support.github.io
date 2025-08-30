import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Activity,
  Eye,
  AlertTriangle,
  RefreshCw,
  Target,
  Wifi,
  Coins,
  Car,
  Building2,
  Gamepad2,
  Palette,
  Bot,
  Workflow,
  BarChart,
  Users2,
  Settings as SettingsIcon,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Square,
  RotateCcw,
  Power,
  PowerOff,
  Download,
  Upload,
  Copy,
  Link as LinkIcon,
  ExternalLink,
  Info,
  AlertCircle,
  XCircle,
  Plus,
  Minus,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Video,
  Camera,
  Mic,
  Headphones,
  Printer,
  Scanner,
  Fax,
  Projector,
  Keyboard,
  Mouse,
  Gamepad,
  Controller,
  Joystick,
  Remote,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  BatteryEmpty,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  SignalZero,
  WifiOff,
  Bluetooth,
  BluetoothOff,
  Radio,
  RadioOff,
  Tv,
  TvOff,
  MonitorOff,
  SmartphoneOff,
  Tablet,
  TabletOff,
  Laptop,
  LaptopOff,
  Desktop,
  DesktopOff,
  ServerOff,
  DatabaseOff,
  NetworkOff,
  GlobeOff,
  LockOff,
  Unlock,
  Key,
  KeyOff,
  Fingerprint,
  UserCheck,
  UserX,
  UsersOff,
  UserOff,
  UserPlus,
  UserMinus,
  UserEdit,
  UserCog,
  Cog,
  Settings2,
  Tool,
  Wrench,
  Hammer,
  Screwdriver,
  Saw,
  Drill,
  Screw,
  Nut,
  Bolt,
  Washer,
  Rivet,
  Nail,
  Pin,
  Paperclip,
  Stapler,
  Tape,
  Glue,
  Paintbrush,
  Palette2,
  Canvas,
  Easel,
  Brush,
  Spray,
  Roller,
  Bucket,
  Sponge,
  Towel,
  Rag,
  Broom,
  Mop,
  Vacuum,
  Trash,
  Trash2,
  Recycle,
  RecycleOff,
  LeafOff,
  Tree,
  TreeOff,
  Flower,
  FlowerOff,
  Seed,
  SeedOff,
  Sprout,
  SproutOff,
  Plant,
  PlantOff,
  Garden,
  GardenOff,
  Farm,
  FarmOff,
  Tractor,
  TractorOff,
  Combine,
  CombineOff,
  Harvester,
  HarvesterOff,
  Plow,
  PlowOff,
  Cultivator,
  CultivatorOff,
  Seeder,
  SeederOff,
  Spreader,
  SpreaderOff,
  Sprayer,
  SprayerOff,
  Irrigator,
  IrrigatorOff,
  Fertilizer,
  FertilizerOff,
  Pesticide,
  PesticideOff,
  Herbicide,
  HerbicideOff,
  Fungicide,
  FungicideOff,
  Insecticide,
  InsecticideOff,
  Rodenticide,
  RodenticideOff,
  Molluscicide,
  MolluscicideOff,
  Acaricide,
  AcaricideOff,
  Nematicide,
  NematicideOff,
  Bactericide,
  BactericideOff,
  Virucide,
  VirucideOff,
  Algicide,
  AlgicideOff,
  HerbicideOff,
  FungicideOff,
  InsecticideOff,
  RodenticideOff,
  MolluscicideOff,
  AcaricideOff,
  NematicideOff,
  BactericideOff,
  VirucideOff,
  AlgicideOff
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const heroStats = [
    { label: 'AI Solutions', value: '50+', icon: Brain },
    { label: 'Enterprise Clients', value: '200+', icon: Building },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Years Experience', value: '15+', icon: Star }
  ];

  const featuredServices = [
    {
      name: 'AI Edge Computing Platform',
      description: 'Deploy AI intelligence directly to edge devices for real-time processing and IoT orchestration',
      icon: Cpu,
      href: '/services/ai-edge-computing-platform',
      color: 'from-blue-600 to-cyan-600',
      features: ['Real-time AI processing', 'Distributed intelligence', 'Edge security', '5G integration'],
      pricing: 'Starting at $2,999/month'
    },
    {
      name: 'AI Financial Compliance Assistant',
      description: 'Transform financial compliance with AI-driven automation and real-time risk monitoring',
      icon: Shield,
      href: '/services/ai-financial-compliance-assistant',
      color: 'from-red-600 to-orange-600',
      features: ['Real-time monitoring', 'AI risk assessment', 'Automated reporting', 'Multi-jurisdiction support'],
      pricing: 'Starting at $1,499/month'
    },
    {
      name: 'AI Healthcare Analytics Platform',
      description: 'Revolutionize healthcare with predictive diagnostics and patient outcome prediction',
      icon: Activity,
      href: '/services/ai-healthcare-analytics-platform',
      color: 'from-green-600 to-emerald-600',
      features: ['Predictive diagnostics', 'Patient outcome prediction', 'Real-time monitoring', 'Clinical decision support'],
      pricing: 'Starting at $2,999/month'
    },
    {
      name: 'AI Supply Chain Risk Management',
      description: 'Protect your supply chain with AI-powered risk detection and predictive analytics',
      icon: AlertTriangle,
      href: '/services/ai-supply-chain-risk-management',
      color: 'from-yellow-600 to-orange-600',
      features: ['Real-time risk monitoring', 'Predictive analytics', 'Supplier assessment', 'Geopolitical analysis'],
      pricing: 'Starting at $1,999/month'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: [
        { name: 'AI Edge Computing Platform', href: '/services/ai-edge-computing-platform', description: 'Real-time AI processing at the edge' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform', description: 'Predictive healthcare diagnostics' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Advanced analytics and insights' },
        { name: 'AI Content Generation', href: '/services/ai-content-generation-platform', description: 'Automated content creation' }
      ]
    },
    {
      name: 'Financial & Compliance',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      services: [
        { name: 'AI Financial Compliance', href: '/services/ai-financial-compliance-assistant', description: 'Automated compliance monitoring' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'Advanced threat detection' },
        { name: 'AI Risk Assessment', href: '/services/ai-risk-assessment', description: 'Comprehensive risk analysis' },
        { name: 'AI Audit Automation', href: '/services/ai-audit-automation', description: 'Streamlined audit processes' }
      ]
    },
    {
      name: 'Supply Chain & Operations',
      icon: Network,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'AI Supply Chain Risk Management', href: '/services/ai-supply-chain-risk-management', description: 'Proactive risk mitigation' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'End-to-end optimization' },
        { name: 'AI Inventory Management', href: '/services/ai-inventory-management', description: 'Smart inventory control' },
        { name: 'AI Demand Forecasting', href: '/services/ai-demand-forecasting', description: 'Accurate demand prediction' }
      ]
    },
    {
      name: 'Healthcare & Life Sciences',
      icon: Heart,
      color: 'from-green-600 to-emerald-600',
      services: [
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', description: 'Comprehensive health insights' },
        { name: 'AI Medical Imaging', href: '/services/ai-medical-imaging', description: 'Advanced diagnostic imaging' },
        { name: 'AI Drug Discovery', href: '/services/ai-drug-discovery', description: 'Accelerated drug development' },
        { name: 'AI Patient Care', href: '/services/ai-patient-care', description: 'Personalized care optimization' }
      ]
    }
  ];

  const industrySolutions = [
    {
      industry: 'Manufacturing',
      icon: Building2,
      description: 'AI-powered production optimization and quality control',
      solutions: ['Predictive maintenance', 'Quality assurance', 'Supply chain optimization', 'Process automation']
    },
    {
      industry: 'Healthcare',
      icon: Activity,
      description: 'Transform patient care with AI-driven insights and automation',
      solutions: ['Predictive diagnostics', 'Treatment optimization', 'Patient monitoring', 'Clinical decision support']
    },
    {
      industry: 'Financial Services',
      icon: Coins,
      description: 'Secure and compliant financial operations with AI',
      solutions: ['Risk assessment', 'Compliance automation', 'Fraud detection', 'Customer analytics']
    },
    {
      industry: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Enhance customer experience and optimize operations',
      solutions: ['Customer analytics', 'Inventory management', 'Demand forecasting', 'Personalization']
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 40% through AI automation',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Efficiency Gains',
      description: 'Improve productivity by 60% with intelligent process automation',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and prevent risks before they impact your business',
      icon: ShieldCheck,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Innovation Acceleration',
      description: 'Stay ahead of the competition with cutting-edge AI solutions',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp Industries',
      company: 'TechCorp Industries',
      content: 'Zion Tech Group\'s AI Edge Computing Platform transformed our IoT operations. We\'ve seen a 35% improvement in response times.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Head of Compliance, GlobalBank',
      company: 'GlobalBank',
      content: 'The AI Financial Compliance Assistant has revolutionized our compliance operations. We\'ve reduced manual work by 80%.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Chief Medical Officer, HealthNet',
      company: 'HealthNet',
      content: 'Our diagnostic accuracy improved by 25% with the AI Healthcare Analytics Platform. It\'s a game-changer for patient care.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover our cutting-edge AI, IT, and Micro SAAS services. Transform your business with innovative solutions designed for the future."
        keywords="AI services, IT services, Micro SAAS, innovative solutions, business transformation, AI edge computing, healthcare analytics, compliance automation"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Innovative Services Showcase 2025
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Business
              <span className="block text-zion-cyan">With AI Innovation</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge AI, IT, and Micro SAAS services. 
              From edge computing to healthcare analytics, we're redefining what's possible in business technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-dark transition-colors flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/20 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Stats */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-purple/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our most innovative and transformative services designed to revolutionize 
              your business operations and drive growth.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-zion-slate-light mb-4">{service.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-zion-cyan mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-zion-slate-light flex items-center">
                            <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan font-medium">{service.pricing}</span>
                      <Link 
                        to={service.href}
                        className="px-4 py-2 bg-zion-cyan text-white rounded-lg text-sm font-medium hover:bg-zion-cyan-dark transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Explore our comprehensive range of services organized by industry 
              and technology focus areas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border-l-2 border-zion-purple/30 pl-4">
                      <Link 
                        to={service.href}
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                      >
                        {service.name}
                      </Link>
                      <p className="text-zion-slate-light text-sm mt-1">{service.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored solutions designed specifically for your industry's unique 
              challenges and opportunities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{solution.industry}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{solution.description}</p>
                <ul className="space-y-2 text-left">
                  {solution.solutions.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-zion-slate-light flex items-center">
                      <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Transform your business with measurable benefits and proven results 
              from our innovative AI solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-purple/20 rounded-lg p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Hear from industry leaders who have transformed their businesses 
              with our innovative solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-zion-cyan text-sm">{testimonial.role}</div>
                  <div className="text-zion-slate-light text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of companies that have already revolutionized their 
              operations with our innovative AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:bg-zion-slate-light transition-colors"
              >
                Get Started Today
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

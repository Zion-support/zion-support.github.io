import React from 'react.ts';
import { motion            } from 'framer-motion.ts';
<<<<<<< HEAD
import { Brain, Shield, Cloud, Server, BarChart3, Users, ShoppingCart,
  MessageCircle, HelpCircle, DollarSign, Target, TrendingUp,
  Atom, Network, Eye, PenTool, Heart, Building, Truck,
  Lock, Smartphone, Mail, Video, Satellite, Leaf, Code,
  Zap, Star, Rocket, Globe, Cpu, ArrowRight, FileText,
  Workflow, Database, AlertTriangle, Package, Route, Factory,
  Calculator, Graph
const NewInnovativeServices2025: React.FC = (): JSX.Element => {
  const newServices = [
=======
import { Link            } from 'react-router-dom.ts';
import { Brain, 
  GitFork, 
  Shield, 
  Users, 
  BarChart3, 
  Eye, 
  CheckCircle, 
  ArrowRight,
  Play,
  Clock,
  TrendingUp,
  Cpu,
  Network,
  Bot,
  Sparkles,
  Globe,
  Activity,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  MessageCircle,
  Search,
  FileText,
  Settings,
  Palette,
  Zap as ZapIcon2,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Star,
  Award,
  Rocket,
  Lightbulb,
  Handshake,
  Target as TargetIcon,
  Users2,
  Briefcase,
  Building,
  Truck,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Atom,
  Leaf as LeafIcon,
  Gamepad2 as Gamepad2Icon,
  Coins as CoinsIcon,
  Satellite as SatelliteIcon,
  Key,
  Fingerprint,
  AlertTriangle,
  Zap,
  Target,
      GitFork as WorkflowIcon,
  BookOpen,
  FileCheck,
  UserCheck,
  Globe as GlobeIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Eye as EyeIcon,
  BarChart3 as BarChart3Icon,
  Users as UsersIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Play as PlayIcon,
  Clock as ClockIcon,
  TrendingUp as TrendingUpIcon,
  Cpu as CpuIcon,
  Network as NetworkIcon,
  Bot as BotIcon,
  Sparkles as SparklesIcon,
  Globe as GlobeIcon2,
  Activity as ActivityIcon,
  Code as CodeIcon,
  Server as ServerIcon,
  Chip as ChipIcon,
  Wifi as WifiIcon,
  ShieldCheck as ShieldCheckIcon,
  Globe2 as Globe2Icon,
  MessageCircle as MessageCircleIcon,
  Search as SearchIcon,
  FileText as FileTextIcon,
  Settings as SettingsIcon,
  Palette as PaletteIcon,
  Zap as ZapIcon3,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  DollarSign as DollarSignIcon,
  Star as StarIcon,
  Award as AwardIcon,
  Rocket as RocketIcon,
  Lightbulb as LightbulbIcon,
  Handshake as HandshakeIcon,
  Target as TargetIcon2,
  Users2 as Users2Icon,
  Briefcase as BriefcaseIcon,
  Building as BuildingIcon,
  Truck as TruckIcon,
  Leaf as LeafIcon2,
  Gamepad2 as Gamepad2Icon2,
  Coins as CoinsIcon2,
  Satellite as SatelliteIcon2,
  Atom as AtomIcon,
  Leaf as LeafIcon3,
  Gamepad2 as Gamepad2Icon3,
  Coins as CoinsIcon3,
  Satellite as SatelliteIcon3
           } from 'lucide-react.ts';

export default function NewInnovativeServices2025(...args: any[]): any {
  const featuredServices = [
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    {
      title: "AI Workflow Orchestrator",
      description: "Transform business processes with AI-powered workflow automation and intelligent orchestration",
      icon: WorkflowIcon,
      category: "AI & Automation",
      price: "From $299/month",
      features: ["AI-powered process optimization", "Visual workflow designer", "Automated execution", "Performance analytics"],
      link: "/services/ai-workflow-orchestrator",
      color: "from-zion-cyan to-zion-purple",
      popular: true
    },
    {
      title: "AI Data Governance Platform",
      description: "Secure, govern, and manage data with AI-powered compliance automation and intelligent protection",
      icon: Shield,
      category: "Data & Security",
      price: "From $499/month",
      features: ["AI-powered data discovery", "Advanced access control", "Data lineage tracking", "Compliance automation"],
      link: "/services/ai-data-governance-platform",
      color: "from-zion-purple to-zion-cyan",
      popular: false
    },
    {
<<<<<<< HEAD
      id: 'ai-customer-experience-analytics',
      title: 'AI Customer Experience Analytics',
      description: 'Transform customer insights with AI-powered analytics. Understand emotions, predict satisfaction, and optimize experiences.',
      icon: BarChart3,
      category: 'AI & Analytics',
      price: 'From $249/month',
      features: [
        'Real-time Sentiment Analysis',
        'Customer Journey Mapping',
        'Predictive Satisfaction',
        'Behavioral Analytics'
      ],
      benefits: [
        'Increase customer satisfaction by 45%',
        'Reduce customer churn by 60%',
        'Improve response time by 70%',
        'Boost customer lifetime value by 50%'
      ],
      href: '/services/ai-customer-experience-analytics',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Transform supply chain with AI-powered optimization. Reduce costs, improve efficiency, and gain real-time visibility.',
      icon: Truck,
      category: 'AI & Logistics',
      price: 'From $599/month',
      features: [
        'Intelligent Route Optimization',
        'Global Supply Chain Visibility',
        'Predictive Demand Forecasting',
        'Smart Inventory Management'
      ],
      benefits: [
        'Reduce supply chain costs by 25-40%',
        'Improve delivery performance by 60%',
        'Reduce inventory costs by 30%',
        'Increase supplier performance by 45%'
      ],
      href: '/services/ai-supply-chain-optimization',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai-financial-risk-management',
      title: 'AI Financial Risk Management',
      description: 'Transform financial risk management with AI-powered analytics. Monitor risks in real-time and optimize portfolio performance.',
      icon: Shield,
      category: 'AI & Finance',
      price: 'From $799/month',
      features: [
        'Real-time Risk Monitoring',
        'Predictive Risk Analytics',
        'Intelligent Risk Alerts',
        'Portfolio Optimization'
      ],
      benefits: [
        'Reduce portfolio volatility by 30-40%',
        'Improve risk-adjusted returns by 25%',
        'Early warning system for disruptions',
        'Automated compliance monitoring'
      ],
      href: '/services/ai-financial-risk-management',
      color: 'from-emerald-500 to-teal-500'

=======
      title: "AI Customer Experience Analytics",
      description: "Transform customer insights into actionable intelligence with AI-powered analytics and personalization",
      icon: Brain,
      category: "Customer Experience",;
      price: "From $399/month",;
      features: ["Sentiment analysis", "Customer journey mapping", "Predictive analytics", "Personalization engine"],;
      link: "/services/ai-customer-experience-analytics",;
      color: "from-zion-cyan to-zion-purple",;
      popular: false;
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      description: "Cutting-edge AI solutions for business transformation",
      services: [
        "AI Workflow Orchestrator",
        "AI Data Governance Platform",
        "AI Customer Experience Analytics",
        "AI Project Management",
        "AI Financial Analytics"
      ],
      color: "from-zion-cyan to-zion-purple"
    },
    {
      name: "Data & Analytics",
      icon: BarChart3,
      description: "Advanced data solutions for informed decision-making",
      services: [
        "Data Governance Platform",
        "Customer Experience Analytics",
        "Business Intelligence",
        "Predictive Analytics",
        "Data Quality Management"
      ],
      color: "from-zion-purple to-zion-cyan"
    },
    {
      name: "Security & Compliance",
      icon: Shield,
      description: "Enterprise-grade security and compliance solutions",
      services: [
        "Data Governance Platform",
        "Zero Trust Network Access",
        "Security Headers & CSP",
        "DSR Privacy Portal",
        "AI Cybersecurity Platform"
      ],
      color: "from-zion-cyan to-zion-green"
    },
    {
      name: "Business Process Automation",
      icon: WorkflowIcon,
      description: "Streamline operations with intelligent automation",
      services: [
        "AI Workflow Orchestrator",
        "AI Project Management",;
        "Customer Support Automation",;
        "Email Automation",;
        "Process Optimization";
      ],;
      color: "from-zion-purple to-zion-orange";
    };
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and optimize workflows for 30-90% efficiency gains"
    },
    {
      icon: DollarSign,
<<<<<<< HEAD
      color: 'from-emerald-500 to-teal-500',
      count: 1

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"

            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-400/30 mb-6">
              <Rocket className="w-5 h-5 text-indigo-400 mr-2" />
              <span className="text-indigo-300 font-medium">2025 New Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              New Innovative
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
                Services 2025
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our latest AI-powered micro SAAS services designed to transform your business operations,
              enhance customer experiences, and drive innovation across all industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/20">
                Explore Services
              </button>
              <button className="px-8 py-4 border border-indigo-400/30 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-400/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive range of AI-powered solutions
            </p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category, index)            => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-indigo-400/30 transition-all duration-200 text-center"

                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} service{category.count !== 1 ? 's' : ''}</p>
              </motion.div>
            ))}
=======
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation and process optimization"
    },
    {
      icon: Users,
      title: "Enhanced Customer Experience",
      description: "Deliver personalized, responsive experiences that increase customer satisfaction and loyalty";
    },;
    {;
      icon: Shield,;
      title: "Improved Security",;
      description: "Advanced security measures and compliance automation protect your business and data";
    };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-zion-slate-900 via-zion-slate-800 to-zion-slate-900">
      {/* Futuristic Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4 mr-2" />
                2025 Innovative Services Showcase
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                Revolutionary AI Services
              </h1>
              
              <p className="text-xl md:text-2xl text-zion-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our cutting-edge AI-powered micro SAAS services designed to transform your business. 
                From workflow automation to data governance, we provide innovative solutions that drive growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Explore Services
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </div>
        </section>

<<<<<<< HEAD
      {/* New Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Latest Innovative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge AI solutions to transform your business
            </p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {newServices.map((service, index)            => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-indigo-400/30 transition-all duration-200"

                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">{service.category}</span>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{service.description}</p>

                <div className="mb-4">
                  <span className="text-lg font-bold text-white">{service.price}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
=======
        {/* Featured Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Innovative Services
              </h2>
              <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
                Our flagship AI-powered solutions designed to revolutionize how you do business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
              {featuredServices.map((service, index)            => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 20 






}}
                  whileInView = {
  { opacity: 1,
  y: 0 






}}
                  transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                  viewport={{ once: true }}
                  className={`relative bg-zion-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 ${
                    service.popular ? 'border-zion-cyan/50 bg-zion-cyan/5' : 'border-zion-slate-600/50'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-zion-slate-700 text-zion-cyan text-xs font-medium mb-3">
                      {service.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-zion-slate-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-300">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                        {feature}
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className={`w-full px-4 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200 text-center block`}

                  Learn More
                </Link>
              </motion.div>
            ))}
=======
                  
                  <Link to={service.link}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        service.popular
                          ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                          : 'bg-zion-slate-700 text-white hover:bg-zion-slate-600'
                      }`}
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </div>
        </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}

            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our innovative AI-powered services and discover how they can revolutionize your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/20">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-indigo-400/30 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-400/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}

            <h2 className="text-3xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p>+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p>kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                <a href="https://ziontechgroup.com" className="text-indigo-400 hover:text-indigo-300">
                  ziontechgroup.com
                </a>
              </div>
=======
        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Service Categories
              </h2>
              <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
                Explore our organized service portfolio designed to meet every aspect of your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
              {serviceCategories.map((category, index)            => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 20 






}}
                  whileInView = {
  { opacity: 1,
  y: 0 






}}
                  transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                  viewport={{ once: true }}
                  className="bg-zion-slate-800/50 backdrop-blur-sm border border-zion-slate-600/50 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                  </div>
                  <p className="text-zion-slate-300 mb-6">{category.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-zion-cyan">Services Include:</h4>
                    <ul className="space-y-2">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-zion-slate-300">
                          <ArrowRight className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
                Experience the transformative power of AI-powered solutions designed for modern businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index)            => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 20 






}}
                  whileInView = {
  { opacity: 1,
  y: 0 






}}
                  transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                  viewport={{ once: true }}
                  className="bg-zion-slate-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-cyan/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-300 mb-8">
                Join forward-thinking organizations that are already leveraging our AI-powered services 
                to drive innovation and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-cyan mb-4" />
                <p className="text-zion-slate-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-cyan mb-4" />
                <p className="text-zion-slate-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
                <p className="text-zion-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
};

export default NewInnovativeServices2025;}}}
=======
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Scale, 
  Building2, 
  Truck, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Globe,
  Shield,
  BarChart3,
  Clock,
  DollarSign,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Cloud,
  Lock,
  Eye,
  Search,
  Filter,
  PieChart,
  LineChart,
  FileText,
  Route,
  Warehouse,
  Home,
  Package,
  Factory,
  Ship,
  Plane,
  Car
} from 'lucide-react';

export default function InnovativeServicesShowcase2026() {
  const newServices = [
    {
      id: 'ai-legal-document-analysis',
      title: 'AI Legal Document Analysis Platform',
      description: 'Revolutionize legal document processing with AI-powered analysis. Reduce review time by 80%, improve accuracy by 95%, and ensure compliance.',
      icon: Scale,
      href: '/services/ai-legal-document-analysis',
      color: 'from-blue-600 to-purple-600',
      features: [
        'AI-Powered Analysis with 95% accuracy',
        'Intelligent Search across legal documents',
        'Compliance Monitoring & Risk Assessment',
        'Automated Review & Analytics Dashboard'
      ],
      pricing: 'From $299/month',
      category: 'Legal Tech',
      stats: {
        accuracy: '95%',
        timeSavings: '80%',
        costReduction: '60%'
      }
    },
    {
      id: 'ai-real-estate-investment-analytics',
      title: 'AI Real Estate Investment Analytics',
      description: 'Transform your real estate investments with AI-powered market analysis, ROI predictions, and comprehensive property insights.',
      icon: Building2,
      href: '/services/ai-real-estate-investment-analytics',
      color: 'from-green-600 to-blue-600',
      features: [
        'AI Market Predictions with 92% accuracy',
        'Investment ROI Calculator',
        'Geographic Intelligence & Market Trends',
        'Property Search Engine & Risk Assessment'
      ],
      pricing: 'From $199/month',
      category: 'Real Estate Tech',
      stats: {
        accuracy: '92%',
        timeSavings: '80%',
        roiImprovement: '40%'
      }
    },
    {
      id: 'ai-supply-chain-optimization-enhanced',
      title: 'AI Supply Chain Optimization Platform',
      description: 'Revolutionize your supply chain operations with AI-powered optimization. Reduce costs by 40%, improve delivery times by 50%.',
      icon: Truck,
      href: '/services/ai-supply-chain-optimization-enhanced',
      color: 'from-blue-600 to-indigo-600',
      features: [
        'AI-Powered Demand Forecasting (94% accuracy)',
        'Intelligent Route Optimization',
        'Smart Inventory Management',
        'Global Supply Chain Visibility'
      ],
      pricing: 'From $399/month',
      category: 'Supply Chain Tech',
      stats: {
        accuracy: '94%',
        costReduction: '40%',
        deliveryImprovement: '50%'
=======
import { 
  Brain, 
  Users, 
  Database, 
  Truck, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Shield,
  Cloud,
  Cpu,
  Workflow,
  BarChart3,
  MessageCircle,
  Calendar,
  Activity,
  Target,
  DollarSign,
  Clock,
  Rocket,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ExternalLink,
  Award,
  Globe,
  Building2,
  FileText,
  Heart,
  ShoppingCart,
  Lock,
  Network,
  Atom,
  Wifi,
  Server,
  Palette,
  PenTool,
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
  ChevronRight as ChevronRightIcon,
  Link as LinkIcon,
  Copy,
  Share2,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  MessageSquare
} from 'lucide-react';

const InnovativeServicesShowcase2026 = () => {
  const featuredServices = [
    {
      icon: Database,
      title: "AI Enterprise Resource Planning",
      description: "Transform your business operations with intelligent automation, real-time analytics, and AI-driven insights. Unify your enterprise resources and drive growth across your entire organization.",
      href: "/services/ai-enterprise-resource-planning",
      color: "from-emerald-500 to-teal-500",
      features: [
        "AI-Powered Forecasting",
        "Intelligent Process Automation",
        "Real-Time Analytics Dashboard",
        "Smart Resource Management",
        "Unified Data Platform",
        "Advanced Security & Compliance"
      ],
      benefits: [
        "30% Cost Reduction",
        "50% Faster Decision Making",
        "25% Improved Accuracy",
        "Enhanced Collaboration"
      ],
      pricing: {
        starter: "$299/month",
        professional: "$799/month",
        enterprise: "$1,999/month"
      }
    },
    {
      icon: Users,
      title: "AI Customer Success Platform",
      description: "Proactively manage customer relationships, prevent churn, and drive growth with intelligent automation, predictive analytics, and personalized success strategies powered by artificial intelligence.",
      href: "/services/ai-customer-success-platform",
      color: "from-pink-500 to-rose-500",
      features: [
        "AI-Powered Customer Insights",
        "Automated Success Workflows",
        "Real-Time Success Metrics",
        "Proactive Customer Engagement",
        "Unified Customer Data",
        "Predictive Churn Prevention"
      ],
      benefits: [
        "40% Higher Retention",
        "3x Faster Onboarding",
        "90% Customer Satisfaction",
        "2.5x Revenue Growth"
      ],
      pricing: {
        starter: "$199/month",
        professional: "$499/month",
        enterprise: "$1,299/month"
      }
    },
    {
      icon: Truck,
      title: "AI Supply Chain Intelligence",
      description: "Optimize your entire supply chain with intelligent automation, predictive analytics, and AI-driven insights. Reduce costs, improve efficiency, and deliver exceptional customer experiences.",
      href: "/services/ai-supply-chain-intelligence",
      color: "from-orange-500 to-amber-500",
      features: [
        "AI-Powered Demand Forecasting",
        "Intelligent Route Optimization",
        "Real-Time Supply Chain Analytics",
        "Smart Inventory Management",
        "Unified Supply Chain Data",
        "Risk Management & Compliance"
      ],
      benefits: [
        "25% Cost Reduction",
        "40% Faster Delivery",
        "30% Better Accuracy",
        "Enhanced Visibility"
      ],
      pricing: {
        starter: "$399/month",
        professional: "$899/month",
        enterprise: "$2,499/month"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-7ee0
      }
    }
  ];

  const categories = [
    {
      name: 'Legal Technology',
      icon: Scale,
      description: 'AI-powered legal document analysis and compliance solutions',
      count: 1,
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Real Estate Technology',
      icon: Building2,
      description: 'AI-driven investment analytics and market intelligence',
      count: 1,
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'Supply Chain Technology',
      icon: Truck,
      description: 'AI-powered optimization and logistics solutions',
      count: 1,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const benefits = [
    "Cut operational costs by 25-60%",
    "Improve accuracy by 92-95%",
    "Reduce processing time by 50-80%",
    "Enhance decision-making with AI insights",
    "Scale operations without proportional cost increases",
    "Stay ahead of competition with cutting-edge technology"
  ];

  const stats = [
    { number: '3', label: 'New Services Launched', icon: Rocket },
    { number: '95%', label: 'Average Accuracy Rate', icon: Target },
    { number: '60%', label: 'Average Cost Reduction', icon: DollarSign },
    { number: '80%', label: 'Average Time Savings', icon: Clock }
  ];

  const industries = [
    { name: "Legal", icon: Scale, description: "Document analysis and compliance" },
    { name: "Real Estate", icon: Building2, description: "Investment analytics and market intelligence" },
    { name: "Manufacturing", icon: Factory, description: "Supply chain optimization" },
    { name: "Real Estate", icon: Package, description: "Inventory and logistics management" },
    { name: "Healthcare", icon: Shield, description: "Supply chain and compliance" },
    { name: "Finance", icon: DollarSign, description: "Risk assessment and analytics" }
  ];

  return (
    <>
      <Helmet>
        <title>Innovative Services Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's latest innovative AI services launched in 2026. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI services 2026, innovative technology, legal tech, real estate tech, supply chain optimization, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2026" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2 text-purple-400" />
                New in 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Innovative Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Showcase 2026</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover our latest AI-powered solutions designed to revolutionize industries and transform business operations. 
                Experience unprecedented efficiency, accuracy, and cost savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore Services
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our latest AI-powered solutions are designed to transform industries and drive unprecedented business growth.
              </p>
            </motion.div>

            <div className="space-y-12">
              {newServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Service Icon and Basic Info */}
                    <div className="text-center lg:text-left">
                      <div className="flex justify-center lg:justify-start mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color}`}>
                          <service.icon className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-700/50 text-zinc-300 text-sm font-medium mb-4">
                        {service.category}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      <div className="text-2xl font-bold text-purple-400 mb-4">{service.pricing}</div>
                    </div>

                    {/* Features */}
                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(service.stats).map(([key, value]) => (
                          <div key={key} className="text-center bg-zinc-700/30 rounded-lg p-3">
                            <div className="text-2xl font-bold text-purple-400">{value}</div>
                            <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to={service.href}
                          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                        <button className="px-6 py-3 border border-purple-500 text-white font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                          Start Free Trial
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
=======
  const additionalServices = [
    {
      icon: Brain,
      title: "AI Enterprise Automation Platform",
      description: "Streamline business processes with intelligent automation and AI-driven decision making",
      href: "/services/ai-enterprise-automation-platform",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Platform",
      description: "Advanced threat detection and prevention with machine learning",
      href: "/services/ai-cybersecurity-platform",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud FinOps Optimizer",
      description: "Optimize cloud costs and resource allocation with AI insights",
      href: "/services/cloud-finops-optimizer",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Edge Computing Solutions",
      description: "Ultra-low latency computing for IoT and real-time applications",
      href: "/services/edge-computing-solutions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Network,
      title: "Blockchain Enterprise Solutions",
      description: "Secure, transparent, and efficient blockchain implementations",
      href: "/services/blockchain-enterprise-solutions",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Atom,
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing for complex problem solving",
      href: "/services/quantum-computing-solutions",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const industrySolutions = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "AI-powered healthcare analytics, patient management, and medical research",
      href: "/solutions/healthcare",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: DollarSign,
      title: "Financial Services",
      description: "Risk management, fraud detection, and automated trading platforms",
      href: "/solutions/financial",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Cpu,
      title: "Manufacturing",
      description: "Smart manufacturing, predictive maintenance, and quality control",
      href: "/solutions/manufacturing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building2,
      title: "Government",
      description: "Digital transformation, citizen services, and security solutions",
      href: "/solutions/government",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Customer experience optimization, inventory management, and sales automation",
      href: "/solutions/retail",
      color: "from-orange-500 to-amber-500"
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
              <Star className="w-4 h-4 mr-2" />
              Innovation Showcase 2026
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Business Technology</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Explore our latest innovative micro SAAS services, AI solutions, and enterprise platforms 
              designed to transform your business operations and drive unprecedented growth in 2026.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
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
              Featured Innovations 2026
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our flagship services that are revolutionizing business operations across industries
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-purple/40 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to={service.href}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Benefits</h4>
                      <div className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2 text-zion-slate-light">
                            <TrendingUp className="w-4 h-4 text-zion-cyan" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-zion-cyan mb-3">Pricing Plans</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-zion-slate-light">
                          <span>Starter:</span>
                          <span className="text-zion-cyan font-semibold">{service.pricing.starter}</span>
                        </div>
                        <div className="flex justify-between text-zion-slate-light">
                          <span>Professional:</span>
                          <span className="text-zion-cyan font-semibold">{service.pricing.professional}</span>
                        </div>
                        <div className="flex justify-between text-zion-slate-light">
                          <span>Enterprise:</span>
                          <span className="text-zion-cyan font-semibold">{service.pricing.enterprise}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Categories Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of AI-powered solutions across different industries and business domains.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-400 mb-4">{category.description}</p>
                    <div className="text-sm text-purple-400 font-medium">{category.count} Service{category.count !== 1 ? 's' : ''}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Business</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency and growth with our AI-powered solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI services are designed to address the unique challenges and opportunities across various industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                      <industry.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
                  </div>
                  <p className="text-gray-400">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of businesses who have already revolutionized their operations with our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-purple-500 text-white font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                    <Phone className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-400">+1 302 464 0950</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-400">kleber@ziontechgroup.com</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
=======
      {/* Additional Services Section */}
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
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Explore our comprehensive range of AI, cloud, and technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
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
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored solutions designed for the unique challenges of different industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-4">{solution.description}</p>
                <Link
                  to={solution.href}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  Explore Solutions
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of businesses already using our innovative solutions to drive growth and success
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
    </>
  );
}

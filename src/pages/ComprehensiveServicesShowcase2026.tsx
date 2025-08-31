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
  Calendar,
  Clock,
  CheckSquare,
  FileText,
  PieChart,
  TrendingDown,
  AlertTriangle,
  UserCheck,
  Team,
  Activity,
  HeartPulse,
  Stethoscope,
  Pill,
  Syringe,
  Microscope,
  TestTube,
  Thermometer,
  Bandage,
  Ambulance,
  Hospital,
  User,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCheck2,
  UserClock,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserX2,
  UserCheck3,
  UserClock2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserX3,
  UserCheck4,
  UserClock3,
  UserCog3,
  UserEdit3,
  UserSearch3,
  UserVoice3,
  UserX4,
  UserCheck5,
  UserClock4,
  UserCog4,
  UserEdit4,
  UserSearch4,
  UserVoice4,
  UserX5,
  UserCheck6,
  UserClock5,
  UserCog5,
  UserEdit5,
  UserSearch5,
  UserVoice5,
  UserX6,
  UserCheck7,
  UserClock6,
  UserCog6,
  UserEdit6,
  UserSearch6,
  UserVoice6,
  UserX7,
  UserCheck8,
  UserClock7,
  UserCog7,
  UserEdit7,
  UserSearch7,
  UserVoice7,
  UserX8,
  UserCheck9,
  UserClock8,
  UserCog8,
  UserEdit8,
  UserSearch8,
  UserVoice8,
  UserX9,
  UserCheck10,
  UserClock9,
  UserCog9,
  UserEdit9,
  UserSearch9,
  UserVoice9,
  UserX10,
  Play,
  Bank,
  LineChart,
  Wallet,
  CreditCard,
  PiggyBank,
  Calculator,
  Percent,
  TrendingUp2,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Info,
  Settings,
  Database2,
  Network2,
  Shield2,
  Lock2,
  Key,
  Fingerprint,
  EyeOff,
  EyeOn,
  Download,
  Upload,
  Share2,
  Copy,
  Edit,
  Trash2,
  Plus,
  Minus,
  Divide,
  Equal,
  Hash,
  Hash2,
  Hash3,
  Hash4,
  Hash5,
  Hash6,
  Hash7,
  Hash8,
  Hash9,
  Hash10
} from 'lucide-react';

const ComprehensiveServicesShowcase2026: React.FC = () => {
  const featuredServices = [
    {
      title: 'AI Project Management Platform',
      description: 'Transform project workflows with AI-powered task prioritization, predictive timelines, and smart resource allocation',
      icon: Workflow,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-powered-project-management-platform',
      price: 'From $29/month',
      features: ['AI task prioritization', 'Predictive timeline management', 'Smart resource allocation', 'Real-time collaboration', 'Advanced analytics', 'Automated reporting'],
      benefits: ['30% faster project completion', '50% reduction in delays', 'Improved team productivity', 'Real-time risk mitigation']
    },
    {
      title: 'AI Financial Analytics Platform',
      description: 'Revolutionize financial intelligence with AI-powered forecasting, risk assessment, and portfolio optimization',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      href: '/services/ai-financial-analytics-platform',
      price: 'From $49/month',
      features: ['AI financial forecasting', 'Real-time market analysis', 'Automated risk assessment', 'Smart portfolio optimization', 'Comprehensive reporting', 'Regulatory compliance'],
      benefits: ['40% better investment returns', '60% faster analysis', '90% risk reduction', '24/7 market monitoring']
    },
    {
      title: 'AI Healthcare Analytics Platform',
      description: 'Transform patient care with AI-powered risk assessment, predictive analytics, and clinical decision support',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      href: '/services/ai-healthcare-analytics-platform',
      price: 'From $99/month',
      features: ['AI patient risk assessment', 'Real-time health monitoring', 'Predictive treatment analytics', 'Population health management', 'Clinical decision support', 'Quality metrics'],
      benefits: ['35% reduction in readmissions', '50% faster diagnosis', '90% patient satisfaction', '24/7 patient monitoring']
    },
    {
      title: 'AI Content Creation Studio Pro',
      description: 'Advanced AI-powered content creation platform with intelligent optimization and brand consistency',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      href: '/services/AI-Content-Creation-Studio-Pro',
      price: 'From $79/month',
      features: ['AI content generation', 'Brand consistency', 'SEO optimization', 'Multi-format support', 'Performance analytics', 'Team collaboration'],
      benefits: ['10x faster content creation', 'Improved SEO rankings', 'Consistent brand voice', 'Reduced content costs']
    },
    {
      title: 'Quantum AI Trading Platform',
      description: 'Next-generation quantum computing-powered trading platform with advanced AI algorithms',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      href: '/services/Quantum-AI-Trading-Platform',
      price: 'From $199/month',
      features: ['Quantum computing integration', 'Advanced AI algorithms', 'Real-time market data', 'Risk management', 'Portfolio optimization', 'Multi-exchange support'],
      benefits: ['Quantum speed advantage', 'Enhanced prediction accuracy', 'Reduced trading latency', 'Advanced risk modeling']
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Content Creation Studio Pro', href: '/services/AI-Content-Creation-Studio-Pro', price: 'From $79/month' },
        { name: 'AI Project Management Platform', href: '/services/ai-powered-project-management-platform', price: 'From $29/month' },
        { name: 'AI Financial Analytics Platform', href: '/services/ai-financial-analytics-platform', price: 'From $49/month' },
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', price: 'From $99/month' }
      ]
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum solutions for complex computational challenges',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      services: [
        { name: 'Quantum AI Trading Platform', href: '/services/Quantum-AI-Trading-Platform', price: 'From $199/month' },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', price: 'From $149/month' },
        { name: 'Quantum Cybersecurity', href: '/services/quantum-cybersecurity', price: 'From $299/month' }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      description: 'Innovative software-as-a-service solutions for modern businesses',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'LeadGen AI Microsite', href: '/services/leadgen-ai-microsite', price: 'From $99/month' },
        { name: 'Agentic Support Bot', href: '/services/agentic-support-bot', price: 'From $149/month' },
        { name: 'Automated Reporting Studio', href: '/services/automated-reporting-studio', price: 'From $79/month' },
        { name: 'Security Posture Scanner', href: '/services/security-posture-scanner', price: 'From $199/month' }
      ]
    },
    {
      title: 'IT Infrastructure',
      description: 'Enterprise-grade IT solutions for modern organizations',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Cloud Migration & Modernization', href: '/services/cloud-migration', price: 'From $15,000' },
        { name: 'Zero-Trust Cybersecurity', href: '/services/zero-trust-cybersecurity', price: 'From $5,000' },
        { name: 'Data Engineering & Analytics', href: '/services/data-engineering', price: 'From $7,500' },
        { name: 'IoT & Edge Platforms', href: '/services/iot-edge-platforms', price: 'From $12,000' }
      ]
    }
  ];

  const pricingComparison = [
    {
      category: 'AI Micro SAAS',
      services: [
        { name: 'AI Project Management', price: '$29/month', features: ['Up to 10 team members', 'AI task prioritization', 'Basic analytics'] },
        { name: 'AI Financial Analytics', price: '$49/month', features: ['Up to 5 portfolios', 'Basic AI forecasting', 'Market data access'] },
        { name: 'AI Healthcare Analytics', price: '$99/month', features: ['Up to 100 patients', 'Basic AI risk assessment', 'Patient monitoring'] }
      ]
    },
    {
      category: 'Enterprise AI',
      services: [
        { name: 'AI Content Creation Pro', price: '$79/month', features: ['Unlimited content', 'Advanced AI models', 'Team collaboration'] },
        { name: 'Quantum AI Trading', price: '$199/month', features: ['Quantum computing', 'Advanced algorithms', 'Multi-exchange support'] },
        { name: 'AI Development & MLOps', price: 'From $8,000', features: ['Custom LLMs', 'RAG implementation', 'MLOps pipelines'] }
      ]
    },
    {
      category: 'IT Infrastructure',
      services: [
        { name: 'Cloud Migration', price: 'From $15,000', features: ['Lift-and-shift', 'Containerization', 'Serverless refactors'] },
        { name: 'Cybersecurity Suite', price: 'From $5,000', features: ['ZTA architecture', 'SOC hardening', 'SIEM integration'] },
        { name: 'Data Engineering', price: 'From $7,500', features: ['ELT/ETL pipelines', 'Data lakes/warehouses', 'BI dashboards'] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2026 Comprehensive Services Showcase
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Discover Our{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovative Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Explore our comprehensive suite of AI-powered micro SAAS solutions, IT services, and cutting-edge technology platforms designed to transform your business operations and drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Innovative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and cutting-edge services that are transforming industries worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-3">{service.description}</p>
                    <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center text-gray-300">
                        <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of services organized by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <div key={service.name} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-white font-medium">{service.name}</span>
                      <div className="flex items-center space-x-3">
                        <span className="text-blue-400 text-sm">{service.price}</span>
                        <Link
                          to={service.href}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pricing Comparison
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare pricing across different service categories to find the perfect solution for your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingComparison.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold text-white mb-4 text-center">{category.category}</h3>
                
                <div className="space-y-4">
                  {category.services.map((service) => (
                    <div key={service.name} className="p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{service.name}</h4>
                        <span className="text-blue-400 font-bold">{service.price}</span>
                      </div>
                      <ul className="space-y-1">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-12 border border-blue-500/30"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our comprehensive suite of innovative services and start your transformation journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Started
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2026;

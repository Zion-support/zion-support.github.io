import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Cloud, 
  Cpu, 
  Lock, 
  Heart, 
  Globe, 
  Zap, 
  TrendingUp,
  CheckCircle,
  Star,
  DollarSign,
  Users,
  Target,
  ArrowRight,
  Search,
  Filter,
  Grid,
  List,
  Eye,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Linkedin,
  Twitter,
  Github,
  Atom,
  PenTool,
  MessageCircle as MessageCircleIcon,
  Target as TargetIcon,
  Search as SearchIcon,
  Eye as EyeIcon,
  Database,
  Network,
  BarChart3,
  Server,
  Code,
  Truck,
  Building,
  Smartphone,
  Cube,
  Gauge,
  AlertTriangle,
  Key,
  FileText,
  Image
} from 'lucide-react';

const EnhancedServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-cyan-400 to-blue-500' },
    { id: 'AI & Automation', name: 'AI & Automation', icon: Brain, color: 'from-purple-400 to-cyan-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-purple-400 to-pink-500' },
    { id: 'Blockchain', name: 'Blockchain & Web3', icon: Lock, color: 'from-green-400 to-emerald-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-red-400 to-pink-500' },
    { id: 'Edge Computing', name: 'IoT & Edge', icon: Cpu, color: 'from-blue-400 to-cyan-500' },
    { id: 'Digital Twin', name: 'Digital Twin', icon: Eye, color: 'from-indigo-400 to-purple-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-green-400 to-blue-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-400 to-indigo-500' }
  ];

  const featuredServices = [
    {
      id: 'ai-autonomous-research-assistant',
      title: 'AI Autonomous Research Assistant',
      description: 'Self-learning AI that conducts independent research, generates hypotheses, and discovers new insights across multiple domains.',
      category: 'AI & Automation',
      price: '$1,999/month',
      marketPrice: '$1,999 - $5,999/month',
      roi: '300-500%',
      innovationLevel: 'Revolutionary',
      features: ['Autonomous literature review', 'Hypothesis generation', 'Cross-domain knowledge synthesis', 'Real-time research updates'],
      icon: Brain,
      color: 'from-purple-400 to-cyan-500',
      href: '/services/ai-autonomous-research-assistant'
    },
    {
      id: 'quantum-ai-trading-platform',
      title: 'Quantum AI Trading Platform',
      description: 'Next-generation trading platform combining quantum computing algorithms with AI for ultra-fast market analysis and automated trading.',
      category: 'Quantum Computing',
      price: '$4,999/month',
      marketPrice: '$4,999 - $15,999/month',
      roi: '500-1000%',
      innovationLevel: 'Revolutionary',
      features: ['Quantum portfolio optimization', 'AI market sentiment analysis', 'Real-time risk assessment', 'Automated trading strategies'],
      icon: TrendingUp,
      color: 'from-purple-400 to-pink-500',
      href: '/services/quantum-ai-trading-platform'
    },
    {
      id: 'ai-healthcare-diagnostic-platform',
      title: 'AI Healthcare Diagnostic Platform',
      description: 'Advanced AI-powered diagnostic platform that analyzes medical images, lab results, and patient data for early disease detection.',
      category: 'AI & Healthcare',
      price: '$2,999/month',
      marketPrice: '$2,999 - $8,999/month',
      roi: '200-400%',
      innovationLevel: 'Advanced',
      features: ['Medical image analysis', 'Lab result interpretation', 'Patient risk assessment', 'Treatment recommendations'],
      icon: Heart,
      color: 'from-red-400 to-pink-500',
      href: '/services/ai-healthcare-platform'
    },
    {
      id: 'blockchain-web3-platform',
      title: 'Blockchain Web3 Development Platform',
      description: 'Comprehensive platform for building, deploying, and managing decentralized applications (dApps) with advanced smart contract capabilities.',
      category: 'Blockchain',
      price: '$1,499/month',
      marketPrice: '$1,499 - $4,999/month',
      roi: '300-600%',
      innovationLevel: 'Advanced',
      features: ['Smart contract development', 'dApp deployment tools', 'Multi-chain support', 'Token creation and management'],
      icon: Lock,
      color: 'from-green-400 to-emerald-500',
      href: '/services/blockchain-web3-platform'
    },
    {
      id: 'ai-content-creation-studio',
      title: 'AI Content Creation Studio',
      description: 'All-in-one AI-powered content creation platform that generates high-quality articles, videos, graphics, and social media content.',
      category: 'AI & Automation',
      price: '$399/month',
      marketPrice: '$399 - $1,299/month',
      roi: '200-400%',
      innovationLevel: 'Advanced',
      features: ['AI article writing', 'Video generation', 'Graphic design automation', 'Social media content'],
      icon: PenTool,
      color: 'from-orange-400 to-red-500',
      href: '/services/ai-content-creation-studio'
    },
    {
      id: 'iot-edge-computing-platform',
      title: 'IoT Edge Computing Platform',
      description: 'Advanced edge computing platform that processes IoT data locally for real-time analytics, reduced latency, and enhanced security.',
      category: 'Edge Computing',
      price: '$899/month',
      marketPrice: '$899 - $2,999/month',
      roi: '250-500%',
      innovationLevel: 'Advanced',
      features: ['Local data processing', 'Real-time analytics', 'Edge AI inference', 'Device management'],
      icon: Cpu,
      color: 'from-blue-400 to-cyan-500',
      href: '/services/iot-edge-computing-platform'
    },
    {
      id: 'digital-twin-platform',
      title: 'Digital Twin Platform',
      description: 'Comprehensive digital twin platform that creates virtual replicas of physical assets for monitoring, simulation, and predictive maintenance.',
      category: 'Digital Twin',
      price: '$1,999/month',
      marketPrice: '$1,999 - $5,999/month',
      roi: '300-600%',
      innovationLevel: 'Advanced',
      features: ['3D asset modeling', 'Real-time monitoring', 'Predictive maintenance', 'Simulation capabilities'],
      icon: Eye,
      color: 'from-indigo-400 to-purple-500',
      href: '/services/digital-twin-platform'
    },
    {
      id: 'ai-project-management-platform',
      title: 'AI Project Management Platform',
      description: 'Intelligent project management platform that uses AI to optimize resource allocation, predict risks, and automate project workflows.',
      category: 'AI & Automation',
      price: '$799/month',
      marketPrice: '$799 - $2,499/month',
      roi: '250-400%',
      innovationLevel: 'Advanced',
      features: ['AI task prioritization', 'Resource optimization', 'Risk prediction', 'Automated scheduling'],
      icon: Target,
      color: 'from-purple-400 to-cyan-500',
      href: '/services/ai-project-management-platform'
    }
  ];

  const filteredServices = featuredServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Enhanced Services Showcase 2025 - Zion Tech Group"
        description="Discover our comprehensive suite of innovative AI, Quantum Computing, Blockchain, and Micro SaaS solutions. Transform your business with cutting-edge technology."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Enhanced Services
                </span>
                <br />
                <span className="text-white">Showcase 2025</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Discover our comprehensive suite of innovative AI, Quantum Computing, Blockchain, and Micro SaaS solutions. 
                Transform your business with cutting-edge technology designed for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-200"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Request Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="py-8 bg-slate-800/50 border-y border-slate-700/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <GlobeIcon className="w-5 h-5 text-purple-400" />
                <span>ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Filters and Search */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <category.icon className="w-4 h-4 mr-2" />
                      {category.name}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>
                  
                  <div className="flex bg-slate-800 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-all duration-200 ${
                        viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-all duration-200 ${
                        viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <>
                      <div className={`h-48 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <service.icon className="w-20 h-20 text-white" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                            {service.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                            ))}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-slate-300 mb-4 line-clamp-3">{service.description}</p>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Starting Price:</span>
                            <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Market Price:</span>
                            <span className="text-slate-300">{service.marketPrice}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">ROI:</span>
                            <span className="text-green-400 font-semibold">{service.roi}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Innovation Level:</span>
                            <span className="text-purple-400 font-semibold">{service.innovationLevel}</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.slice(0, 4).map((feature, index) => (
                              <div key={index} className="flex items-center text-sm text-slate-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                <span className="truncate">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Link
                            to={service.href}
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 text-center"
                          >
                            Learn More
                          </Link>
                          <Link
                            to="/contact"
                            className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-center"
                          >
                            Contact
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    // List View
                    <>
                      <div className={`w-48 h-48 bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                        <service.icon className="w-20 h-20 text-white" />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                            {service.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                            ))}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-slate-300 mb-4">{service.description}</p>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                            <div className="text-sm text-slate-400">Starting Price</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-slate-300">{service.marketPrice}</div>
                            <div className="text-sm text-slate-400">Market Price</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-green-400">{service.roi}</div>
                            <div className="text-sm text-slate-400">ROI</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-purple-400">{service.innovationLevel}</div>
                            <div className="text-sm text-slate-400">Innovation Level</div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, index) => (
                              <div key={index} className="flex items-center text-sm text-slate-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Link
                            to={service.href}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 hover:scale-105"
                          >
                            Learn More
                          </Link>
                          <Link
                            to="/contact"
                            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-medium py-2 px-6 rounded-lg transition-all duration-200"
                          >
                            Contact Sales
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                  Join hundreds of companies already leveraging our cutting-edge technology solutions. 
                  Get started today with a personalized consultation and custom implementation plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Link>
                  <Link
                    to="/request-quote"
                    className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-200"
                  >
                    <DollarSign className="w-5 h-5 mr-2" />
                    Get Custom Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnhancedServicesShowcase2025;
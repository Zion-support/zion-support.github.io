import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍', color: 'from-zion-purple to-zion-indigo' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' }
  ];
  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'reviews':
        return b.reviews - a.reviews;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
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
  ];
  return (
import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code,
  Database,
  Network,
  Smartphone,
  Globe,
  Zap,
  Cpu,
  Lock,
  BarChart3,
  Users,
  Rocket,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Server,
  Wifi,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Eye,
  Heart,
  ShoppingCart,
  Briefcase,
  Lightbulb,
  ShieldCheck
} from 'lucide-react';
const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      color: "from-zion-cyan to-zion-purple",
      services: [
        "AI-Powered Business Intelligence",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants"
      ],
      link: "/ai-services"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      icon: Shield,
      color: "from-zion-purple to-zion-cyan",
      services: [
        "Zero Trust Architecture",
        "Threat Detection & Response",
        "Penetration Testing",
        "Security Audits & Compliance",
        "Incident Response",
        "Vulnerability Assessment"
      ],
      link: "/it-services/cybersecurity"
    },
    {
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and DevOps",
      icon: Cloud,
      color: "from-zion-blue to-zion-cyan",
      services: [
        "Cloud Migration",
        "DevOps Automation",
        "Infrastructure as Code",
        "Container Orchestration",
        "Serverless Architecture",
        "Multi-Cloud Management"
      ],
      link: "/it-services/infrastructure"
    },
    {
      title: "Software Development",
      description: "Custom software and application development",
      icon: Code,
      color: "from-zion-cyan to-zion-blue",
      services: [
        "Web Application Development",
        "Mobile App Development",
        "API Development",
        "Microservices Architecture",
        "Legacy System Modernization",
        "Quality Assurance & Testing"
      ],
      link: "/it-services/development"
    },
    {
      title: "Data & Analytics",
      description: "Data-driven insights and business intelligence",
      icon: Database,
      color: "from-zion-purple to-zion-blue",
      services: [
        "Data Engineering",
        "Business Intelligence",
        "Data Warehousing",
        "Real-time Analytics",
        "Data Visualization",
        "Big Data Processing"
      ],
      link: "/ai-services/predictive-analytics"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting",
      icon: Zap,
      color: "from-zion-blue to-zion-purple",
      services: [
        "Digital Strategy",
        "Process Automation",
        "Change Management",
        "Technology Assessment",
        "Digital Roadmap",
        "Implementation Support"
      ],
      link: "/it-services/digital-transformation"
    }
  ];
  const featuredServices = [
    {
      title: "AI Consciousness Simulator",
      description: "Advanced AI consciousness research platform for understanding human cognition",
      icon: Brain,
      color: "from-zion-cyan to-zion-blue",
      link: "/ai-services/consciousness-simulator"
    },
    {
      title: "Quantum Computing Suite",
      description: "Next-generation quantum computing solutions for complex problem solving",
      icon: Atom,
      color: "from-zion-purple to-zion-cyan",
      link: "/emerging-tech/quantum-computing"
    },
    {
      title: "Green IT Solutions",
      description: "Sustainable technology infrastructure for environmentally conscious businesses",
      icon: Heart,
      color: "from-zion-cyan to-zion-green",
      link: "/green-it"
    }
  ];
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "99.9%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "50+", label: "Expert Engineers", icon: Users }
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Our
              <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Comprehensive technology solutions designed to drive innovation, enhance security, 
              and accelerate your business growth in the digital age.
            </motion.p>
          </div>
        </div>
      </section>
      {/* Featured Services */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most innovative and cutting-edge solutions that are transforming industries worldwide.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={service.link}>
                  <div className="bg-zion-slate/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Categories */}
      <section className="py-20 bg-zion-slate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light text-white">
      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of cutting-edge micro SAAS solutions, AI-powered innovations, and quantum computing services designed to transform your business
            </p>
          </motion.div>
          {/* Search and Filter */}
          <motion.div 
            className="max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search services, features, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 glass border border-zion-cyan/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 text-lg"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-zion-cyan" />
            </div>
            {/* Sort and View Controls */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-300">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="glass border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-zion-cyan"
                >
                  <option value="rating">Rating</option>
                  <option value="price">Price</option>
                  <option value="reviews">Reviews</option>
                  <option value="name">Name</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'glass text-gray-300 hover:text-white'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-zion-cyan text-white' : 'glass text-gray-300 hover:text-white'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'glass border border-white/20 text-gray-300 hover:bg-white/10 hover:border-zion-cyan/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Services Grid/List */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
            }
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={viewMode === 'grid' 
                  ? "glass rounded-2xl p-6 border border-white/20 hover:border-zion-cyan/40 transition-all duration-500 hover:transform hover:scale-105 group"
                  : "glass rounded-2xl p-6 border border-white/20 hover:border-zion-cyan/40 transition-all duration-500 group"
                }
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-600'}`} />
                    ))}
                    <span className="text-sm text-gray-400 ml-1">({service.reviews})</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">{service.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">{service.description}</p>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full border border-zion-purple/30">
                    {service.category}
                  </span>
                </div>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-zion-green mb-2">{service.price}<span className="text-sm text-gray-400">{service.period}</span></div>
                  <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-zion-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-gray-400 flex items-center">
                        <span className="w-3 h-3 bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {service.estimatedDelivery}
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 flex items-center gap-1 group-hover:gap-2"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
      {/* Why Choose Zion Tech Group */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results and competitive advantage
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award,
  Rocket,
  Target
} from 'lucide-react';
export default function Services() {
  const services = [
    {
      id: 1,
      title: 'AI & Machine Learning Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning solutions that transform business operations and drive innovation.',
      icon: Brain,
      features: [
        'Custom AI model development',
        'Machine learning pipeline optimization',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics and forecasting',
        'AI-powered automation'
      ],
      benefits: [
        'Increased operational efficiency',
        'Data-driven decision making',
        'Cost reduction through automation',
        'Competitive advantage through AI'
      ],
      useCases: [
        'Customer service chatbots',
        'Predictive maintenance',
        'Fraud detection systems',
        'Recommendation engines',
        'Process automation'
      ]
    },
    {
      id: 2,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets, ensure compliance, and maintain business continuity.',
      icon: Shield,
      features: [
        'Threat detection and response',
        'Vulnerability assessment and management',
        'Security architecture design',
        'Incident response planning',
        'Compliance and audit support',
        'Security awareness training'
      ],
      benefits: [
        'Protection against cyber threats',
        'Regulatory compliance',
        'Reduced security risks',
        'Enhanced customer trust'
      ],
      useCases: [
        'Enterprise security infrastructure',
        'Cloud security implementation',
        'Data protection and privacy',
        'Security operations center',
        'Compliance frameworks'
      ]
    },
    {
      id: 3,
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud solutions that enable modern applications and support business growth.',
      icon: Cloud,
      features: [
        'Cloud migration and strategy',
        'Multi-cloud architecture design',
        'DevOps and CI/CD implementation',
        'Container orchestration',
        'Serverless computing',
        'Cloud cost optimization'
      ],
      benefits: [
        'Scalability and flexibility',
        'Reduced infrastructure costs',
        'Improved performance and reliability',
        'Faster time to market'
      ],
      useCases: [
        'Application modernization',
        'Data center consolidation',
        'Disaster recovery solutions',
        'High-performance computing',
        'Global application deployment'
      ]
    },
    {
      id: 4,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation to modernize your business processes.',
      icon: Zap,
      features: [
        'Digital strategy development',
        'Process optimization and automation',
        'Legacy system modernization',
        'Change management consulting',
        'Digital workplace solutions',
        'Customer experience transformation'
      ],
      benefits: [
        'Improved operational efficiency',
        'Enhanced customer experience',
        'Increased market competitiveness',
        'Future-ready business model'
      ],
      useCases: [
        'Business process automation',
        'Customer journey optimization',
        'Employee productivity tools',
        'Digital customer engagement',
        'Operational excellence programs'
      ]
    },
    {
      id: 5,
      title: 'Technology Consulting',
      description: 'Strategic technology consulting to align your IT investments with business objectives and drive growth.',
      icon: Globe,
      features: [
        'Technology strategy and roadmap',
        'Architecture review and design',
        'Technology vendor selection',
        'Project management and delivery',
        'Performance optimization',
        'Technology risk assessment'
      ],
      benefits: [
        'Optimized technology investments',
        'Reduced project risks',
        'Improved technology alignment',
        'Enhanced decision making'
      ],
      useCases: [
        'Technology strategy development',
        'System architecture design',
        'Vendor evaluation and selection',
        'Project portfolio management',
        'Technology transformation planning'
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business success
          </p>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-dark mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From AI and machine learning to cybersecurity and cloud infrastructure, we provide the expertise and solutions you need
            </p>
          </div>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-zion-slate-dark">{service.title}</h3>
                  </div>
                  <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-zion-slate-dark mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-zion-slate-light flex items-start">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-zion-slate-dark mb-3 flex items-center">
                        <Award className="w-5 h-5 text-zion-purple mr-2" />
                        Business Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-zion-slate-light flex items-start">
                            <div className="w-2 h-2 bg-zion-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-zion-slate-dark mb-3 flex items-center">
                      <Rocket className="w-5 h-5 text-zion-cyan mr-2" />
                      Common Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="px-3 py-1 bg-zion-slate-light/10 text-zion-slate-dark rounded-full text-sm">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-zion-slate-light/5 to-zion-cyan/5 rounded-2xl p-8 border border-zion-slate-light/20">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                        <service.icon className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-zion-slate-dark mb-4">
                        Ready to Get Started?
                      </h4>
                      <p className="text-zion-slate-light mb-6">
                        Let's discuss how our {service.title.toLowerCase()} can transform your business
                      </p>
                      <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                        Schedule Consultation
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
      {/* Main Services Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Our flagship services that drive business transformation and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-8 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-zion-purple/20 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-6 text-lg">{service.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-purple-light transition-colors font-medium"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
=======
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We combine deep expertise, innovative solutions, and unwavering commitment to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">
                Certified professionals with deep expertise in cutting-edge technologies
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Proven Track Record</h3>
              <p className="text-zion-slate-light">
                Successfully delivered hundreds of projects across diverse industries
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Results-Driven</h3>
              <p className="text-zion-slate-light">
                Focused on delivering measurable business outcomes and ROI
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Innovation Focus</h3>
              <p className="text-zion-slate-light">
                Always exploring new technologies and approaches to solve complex challenges
              </p>
            </div>
          </div>
=======
          >
            <motion.div variants={itemVariants} className="glass rounded-xl p-6 border border-white/20 hover:border-zion-cyan/30 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">We stay ahead of the curve with the latest technologies and methodologies, ensuring your business always has a competitive edge.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="glass rounded-xl p-6 border border-white/20 hover:border-zion-cyan/30 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Results Driven</h3>
              <p className="text-gray-300">Our solutions are designed to deliver measurable business outcomes, from increased efficiency to improved customer satisfaction.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="glass rounded-xl p-6 border border-white/20 hover:border-zion-cyan/30 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-3">Partnership Approach</h3>
              <p className="text-gray-300">We work as an extension of your team, providing ongoing support and collaboration to ensure long-term success.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have already revolutionized their operations with our innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss how our technology solutions can drive your success and accelerate your digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-all duration-300">
              View Case Studies
            </button>
          </div>
=======
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="glass border border-zion-cyan/30 text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Request a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
=======
const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions powered by AI, quantum computing, and autonomous systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold mb-3">AI Solutions</h3>
              <p className="text-gray-300">Cutting-edge artificial intelligence services</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold mb-3">Cloud & DevOps</h3>
              <p className="text-gray-300">Scalable cloud infrastructure and automation</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
              <p className="text-gray-300">End-to-end business process modernization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;

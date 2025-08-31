<<<<<<< HEAD
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
=======
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Zap,
  Cloud,
  Lock,
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
  Car,
  Heart,
  ShoppingCart,
  Atom,
  Wifi,
  Server,
  Palette,
  PenTool,
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
  Copy,
  Share2,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  MessageSquare
} from 'lucide-react';

export default function InnovativeServicesShowcase2026() {
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const services = [
    {
      id: 'ai-autonomous-logistics',
      title: 'AI Autonomous Logistics Platform',
      description: 'Revolutionize your logistics operations with AI-powered autonomous fleet management and intelligent route optimization.',
      icon: Truck,
      category: 'AI & Automation',
      price: '$599/month',
      features: [
        'AI-Powered Fleet Management',
        'Intelligent Route Optimization',
        'Smart Package Tracking',
        'Global Supply Chain Visibility',
        'Predictive Analytics (95% accuracy)',
        'Security & Compliance'
      ],
      benefits: [
        '40% reduction in delivery costs',
        '60% improvement in delivery times',
        '95% route optimization accuracy',
        '80% reduction in fuel consumption'
      ],
      href: '/services/ai-autonomous-logistics-platform',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      id: 'ai-quantum-neural',
      title: 'AI Quantum Neural Network Platform',
      description: 'Experience the future of AI with our revolutionary quantum neural network platform for unprecedented computational power.',
      icon: Atom,
      category: 'Quantum AI',
      price: '$1,999/month',
      features: [
        'Quantum Neural Networks',
        'Advanced AI Models',
        'Quantum Circuit Optimization',
        'Distributed Computing',
        'Real-time Processing',
        'Quantum Security'
      ],
      benefits: [
        '1000x faster computation',
        'Unlimited scalability',
        'Quantum advantage',
        'Future-proof technology'
      ],
      href: '/services/ai-quantum-neural-network-platform',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'ai-space-tech',
      title: 'AI Space Technology Platform',
      description: 'Explore the final frontier with our AI-powered space technology platform for satellite operations and space exploration.',
      icon: Rocket,
      category: 'Space Tech',
      price: '$2,499/month',
      features: [
        'Satellite AI Management',
        'Space Data Analytics',
        'Orbital Optimization',
        'Space Weather Prediction',
        'Mission Planning AI',
        'Global Coverage'
      ],
      benefits: [
        'Global satellite coverage',
        'Real-time space data',
        'Advanced mission planning',
        'Space exploration support'
      ],
      href: '/services/ai-space-technology-platform',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const categories = [
    { name: 'All', count: services.length },
    { name: 'AI & Automation', count: services.filter(s => s.category === 'AI & Automation').length },
    { name: 'Quantum AI', count: services.filter(s => s.category === 'Quantum AI').length },
    { name: 'Space Tech', count: services.filter(s => s.category === 'Space Tech').length }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Innovative Services Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's latest innovative AI services launched in 2026. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI services 2026, innovative technology, autonomous logistics, quantum AI, space technology, Zion Tech Group" />
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

        {/* Category Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-zinc-800/50 text-gray-300 hover:bg-zinc-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
=======
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('innovation');
  const categories = ['All', 'AI & Automation', 'Quantum Computing', 'Blockchain', 'Cybersecurity', 'IoT', 'AI & Content', 'DevOps', 'Finance', 'Sustainability'];
  const filtered = INNOVATIVE_MICRO_SAAS_SERVICES_2026;
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>;
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      );
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'innovation':
          return b.innovationLevel === 'Revolutionary' ? 1 : -1;
        case 'roi':
          return parseInt(b.roi.split('-')[0]) - parseInt(a.roi.split('-')[0]);
        default:
          return 0;
    });
    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'AI & Automation':;
        return <Cpu className="w-5 h-5" />;
      case 'Quantum Computing':
        return <Zap className="w-5 h-5" />;
      case 'Blockchain':
        return <Database className="w-5 h-5" />;
      case 'Cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'IoT':
        return <Globe className="w-5 h-5" />;
      case 'AI & Content':
        return <Cpu className="w-5 h-5" />;
      case 'DevOps':
        return <Database className="w-5 h-5" />;
      case 'Finance':
        return <TrendingUp className="w-5 h-5" />;
      case 'Sustainability':
        return <Leaf className="w-5 h-5" />;
      default:
        return 0}
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      };
    };
  };
  const getInnovationBadge = (level: string) => {
    const colors = {
  'Revolutionary': 'bg-gradient-to-r from-purple-600 to-pink-600',
      'Advanced': 'bg-gradient-to-r from-blue-600 to-cyan-600',;
  ;
  ;
  ;
  ;
  'Cutting-Edge': 'bg-gradient-to-r from-green-600 to-emerald-600';
    ;
};
    return (
      <span className = {`${colors[level as keyof typeof colors] || colors.Advanced} text-white text-xs px-2 py-1 rounded-full font-semibold`}>;
        {level};
      </span>;
    );
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>
      {/* Header Section */}
      <motion.div
        className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Innovative Services 2026
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover cutting-edge micro SAAS solutions that transform industries and drive innovation.
            From AI-powered platforms to quantum-safe cybersecurity, we deliver the future of technology.
          </motion.p>
          {/* Contact Information */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 text-cyan-400">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Filters and Search */}
      <motion.div
        className="relative z-10 px-4 sm:px-6 lg:px-8 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category  => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              {/* Sort Filter */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                  <option value="innovation">Innovation Level</option>
                  <option value="price">Price</option>
                  <option value="roi">ROI</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <motion.div
        className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial = {
  { opacity: 0,
  y: 20 
}}
                animate = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 
}}
                className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-400/10"
              >
                {/* Innovation Level Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    service.innovationLevel === 'Cutting-edge'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : service.innovationLevel === 'Advanced'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  }`}>
                    {service.innovationLevel}
                  </span>
                </div>
                {/* Title and Description */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                {/* Key Features */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-cyan-300/80 mb-2">Key Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-800/50 text-slate-300 px-2 py-1 rounded"
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs text-slate-400 px-2 py-1">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                {/* Pricing and ROI */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-slate-400 font-normal">/mo</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-green-400">
                      ROI: {service.roi}
                    </div>
                    <div className="text-xs text-slate-400">
                      {service.marketPrice}
                    </div>
                  </div>
                </div>
                {/* Benefits */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-cyan-300/80 mb-2">Key Benefits:</div>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-cyan-400/10 text-cyan-300 px-2 py-1 rounded-full"
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Contact and CTA */}
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs text-slate-400">
                      Delivery: {service.estimatedDelivery}
                    </div>
                    <div className="text-xs text-slate-400">
                      Support: {service.supportLevel}
                    </div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                  </div>
                  <div className="flex items-center justify-between">
<<<<<<< HEAD
                    <div className="text-purple-400 font-semibold">{service.price}</div>
                    <Link
                      to={service.href}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
=======
                    <div className="text-xs text-slate-400">
                      <a
                        href={`tel:${service.contactInfo.phone}`}
                        className="text-cyan-300 hover:text-cyan-200 transition-colors"
                        {service.contactInfo.phone}
                      </a>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 group">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of businesses already using our innovative solutions to drive growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Need Help Getting Started?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-3" />
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-3" />
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-400 mb-3" />
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
=======
        </div>
      </motion.div>
      {/* Call to Action */}
      <motion.div
        className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative solutions can drive your success.
              Get in touch with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-2 px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-xl font-semibold border border-slate-600/50 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          )}
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Our innovative services are designed to give you a competitive edge in the rapidly evolving technology landscape.
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-slate-400">
                  <a href="tel:+13024640950" className="text-cyan-300 hover:text-cyan-200">
                    +1 302 464 0950
                  </a>
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-slate-400">
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-slate-400">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Why Choose Zion Tech Group?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Cutting-Edge Innovation</div>
                      <div className="text-sm text-slate-400">Access to the latest AI, quantum computing, and emerging technologies</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Enterprise Security</div>
                      <div className="text-sm text-slate-400">SOC 2, ISO 27001, and industry-leading security standards</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Proven ROI</div>
                      <div className="text-sm text-slate-400">Average 300-800% return on investment across our services</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Global Support</div>
                      <div className="text-sm text-slate-400">24/7 support and implementation across multiple time zones</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export default InnovativeServicesShowcase2026;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7

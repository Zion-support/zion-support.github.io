import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Infinity,
  Building2,
  Car,
  Factory,
  GraduationCap,
  Scale,
  Truck,
  Wheat,
  Zap2,
  Brain2,
  Cloud2,
  Lock2,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function InnovativeServices2025() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // Mock data for innovative services 2025
  const innovativeServices = [
    {
      id: 1,
      name: "AI-Powered Business Intelligence Suite",
      category: "AI & Analytics",
      description: "Advanced business intelligence platform powered by machine learning algorithms for predictive analytics and data-driven decision making.",
      price: "$2,999/month",
      rating: 4.9,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports", "API Integration"],
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Quantum Computing Optimization Platform",
      category: "Quantum Computing",
      description: "Next-generation quantum computing solutions for complex optimization problems in logistics, finance, and research.",
      price: "$5,999/month",
      rating: 4.8,
      features: ["Quantum Algorithms", "Hybrid Classical-Quantum", "Industry Solutions", "Expert Support"],
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Blockchain Supply Chain Tracker",
      category: "Blockchain",
      description: "Transparent and secure supply chain tracking using blockchain technology for end-to-end visibility.",
      price: "$1,999/month",
      rating: 4.7,
      features: ["Real-time Tracking", "Smart Contracts", "Compliance Reporting", "Mobile App"],
      icon: Database,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "IoT Edge Computing Hub",
      category: "IoT & Edge",
      description: "Intelligent edge computing platform for IoT devices with real-time processing and analytics capabilities.",
      price: "$3,499/month",
      rating: 4.6,
      features: ["Edge AI", "Device Management", "Data Analytics", "Security"],
      icon: Network,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "Cybersecurity Threat Intelligence",
      category: "Cybersecurity",
      description: "AI-driven cybersecurity platform that provides real-time threat detection and automated response.",
      price: "$4,499/month",
      rating: 4.9,
      features: ["Threat Detection", "Automated Response", "Compliance", "24/7 Monitoring"],
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 6,
      name: "Metaverse Development Studio",
      category: "Metaverse",
      description: "Complete metaverse development platform for creating immersive virtual experiences and digital assets.",
      price: "$6,999/month",
      rating: 4.8,
      features: ["3D Modeling", "VR/AR Support", "Asset Management", "Multi-platform"],
      icon: Globe,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Cpu },
    { id: 'blockchain', name: 'Blockchain', icon: Database },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Network },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'metaverse', name: 'Metaverse', icon: Globe }
  ];

  const filteredServices = innovativeServices.filter(service => {
    if (activeCategory !== 'all' && service.category !== activeCategory) return false;
    if (searchTerm && !service.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating': return b.rating - a.rating;
      case 'price': return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedServices = sortedServices.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services 2025 - Zion Tech Group"
        description="Discover cutting-edge innovative services for 2025 including AI, quantum computing, blockchain, IoT, cybersecurity, and metaverse solutions."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Innovative Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
                2025
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
            >
              Experience the future of technology with our cutting-edge innovative services. 
              From AI-powered solutions to quantum computing, we're shaping tomorrow's digital landscape.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transform hover:scale-105 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/pricing"
                className="inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-200"
              >
                View Pricing
                <DollarSign className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-zion-cyan text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-slate-300">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent transition-all duration-200"
              >
                <option value="rating">Rating</option>
                <option value="price">Price</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-slate-300">{service.rating}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-200">
                {service.name}
              </h3>
              
              <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              <div className="mb-4">
                <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-slate-300 mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-lg">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-medium rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 bg-slate-700/50 text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-600/50 transition-all duration-200"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === page
                    ? 'bg-zion-cyan text-white'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 rounded-3xl border border-zion-cyan/20 p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Innovate?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Join the future of technology with our innovative services. 
            Transform your business and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transform hover:scale-105 transition-all duration-200"
            >
              Start Your Journey
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-200"
            >
              Request Demo
              <Play className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
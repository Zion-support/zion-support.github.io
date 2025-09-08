import React, { useState } from 'react';
<<<<<<<< HEAD:src/pages/Services.tsx
>>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f:src/pages/Services.tsx.backup.1756208062
import { useState, useMemo } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from '../data/comprehensiveServices';
import React, { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Globe,
  Settings,
  Database,
  Network
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { enhancedMicroSaasServices2025, enhancedITServices2025, enhancedAIServices2025 } from '../data/comprehensiveServices2025';
import Link from 'next/link';
import { enhancedMicroSaasServices2025 } from '../data/comprehensiveServices2025';

    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Comprehensive technology solutions designed to transform your business 
              and drive sustainable growth in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/request-quote" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >
                Request Quote
              </Link>
            </div>
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
import React from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
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

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  // Comprehensive services data
  const services = [
    {
      id: 1,
      name: "AI-Powered Business Intelligence Suite",
      category: "AI & Business Intelligence",
      description: "Advanced business intelligence platform powered by machine learning algorithms for predictive analytics and data-driven decision making.",
      price: "$2,999/month",
      rating: 4.9,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports", "API Integration"],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      marketPrice: "$4,500/month",
      competitors: ["Tableau", "Power BI", "Qlik"],
      roi: "300% in 12 months"
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
      color: "from-blue-500 to-cyan-500",
      marketPrice: "$8,000/month",
      competitors: ["IBM Quantum", "Google Quantum", "Microsoft Azure Quantum"],
      roi: "500% in 18 months"
    },
    {
      id: 3,
      name: "Blockchain Supply Chain Tracker",
      category: "Blockchain & Web3",
      description: "Transparent and secure supply chain tracking using blockchain technology for end-to-end visibility.",
      price: "$1,999/month",
      rating: 4.7,
      features: ["Real-time Tracking", "Smart Contracts", "Compliance Reporting", "Mobile App"],
      icon: Database,
      color: "from-green-500 to-emerald-500",
      marketPrice: "$3,200/month",
      competitors: ["IBM Blockchain", "Hyperledger", "Ethereum Enterprise"],
      roi: "250% in 9 months"
    },
    {
      id: 4,
      name: "IoT Edge Computing Hub",
      category: "IoT & Edge Computing",
      description: "Intelligent edge computing platform for IoT devices with real-time processing and analytics capabilities.",
      price: "$3,499/month",
      rating: 4.6,
      features: ["Edge AI", "Device Management", "Data Analytics", "Security"],
      icon: Network,
      color: "from-orange-500 to-red-500",
      marketPrice: "$5,500/month",
      competitors: ["AWS IoT", "Azure IoT", "Google Cloud IoT"],
      roi: "400% in 15 months"
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
      color: "from-red-500 to-pink-500",
      marketPrice: "$6,800/month",
      competitors: ["CrowdStrike", "SentinelOne", "Carbon Black"],
      roi: "600% in 12 months"
    },
    {
      id: 6,
      name: "Metaverse Development Studio",
      category: "AI & Metaverse",
      description: "Complete metaverse development platform for creating immersive virtual experiences and digital assets.",
      price: "$6,999/month",
      rating: 4.8,
      features: ["3D Modeling", "VR/AR Support", "Asset Management", "Multi-platform"],
      icon: Globe,
      color: "from-indigo-500 to-purple-500",
      marketPrice: "$10,000/month",
      competitors: ["Unity", "Unreal Engine", "Roblox Studio"],
      roi: "800% in 24 months"
    },
    {
      id: 7,
      name: "AI Healthcare Analytics Platform",
      category: "AI & Healthcare",
      description: "Advanced healthcare analytics platform using AI for patient care optimization and medical research.",
      price: "$3,999/month",
      rating: 4.9,
      features: ["Patient Analytics", "Drug Discovery", "Clinical Trials", "HIPAA Compliant"],
      icon: Heart,
      color: "from-red-500 to-pink-500",
      marketPrice: "$6,200/month",
      competitors: ["Cerner", "Epic", "Allscripts"],
      roi: "450% in 18 months"
    },
    {
      id: 8,
      name: "Digital Twin Platform",
      category: "Digital Twin",
      description: "Comprehensive digital twin platform for creating virtual replicas of physical systems and processes.",
      price: "$4,999/month",
      rating: 4.7,
      features: ["3D Modeling", "Real-time Sync", "Predictive Maintenance", "IoT Integration"],
      icon: Globe2,
      color: "from-green-500 to-emerald-500",
      marketPrice: "$7,500/month",
      competitors: ["Siemens", "GE Digital", "PTC"],
      roi: "350% in 15 months"
    },
    {
      id: 9,
      name: "Cloud DevOps Automation",
      category: "Cloud & DevOps",
      description: "Automated cloud infrastructure management and deployment platform for modern applications.",
      price: "$2,499/month",
      rating: 4.8,
      features: ["CI/CD Pipeline", "Infrastructure as Code", "Monitoring", "Auto-scaling"],
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      marketPrice: "$4,000/month",
      competitors: ["GitLab", "Jenkins", "CircleCI"],
      roi: "400% in 12 months"
    },
    {
      id: 10,
      name: "AI Legal Document Analysis",
      category: "AI & Legal Tech",
      description: "Intelligent legal document analysis platform using NLP and AI for contract review and legal research.",
      price: "$3,299/month",
      rating: 4.8,
      features: ["Contract Analysis", "Legal Research", "Compliance Check", "Risk Assessment"],
      icon: Scale,
      color: "from-indigo-500 to-purple-500",
      marketPrice: "$5,200/month",
      competitors: ["LexisNexis", "Westlaw", "Thomson Reuters"],
      roi: "300% in 12 months"
    },
    {
      id: 11,
      name: "AI Financial Trading Platform",
      category: "AI & FinTech",
      description: "Advanced AI-powered financial trading platform with predictive analytics and automated trading strategies.",
      price: "$7,999/month",
      rating: 4.9,
      features: ["Algorithmic Trading", "Risk Management", "Portfolio Optimization", "Real-time Data"],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      marketPrice: "$12,000/month",
      competitors: ["Bloomberg Terminal", "Refinitiv", "FactSet"],
      roi: "1000% in 24 months"
    },
    {
      id: 12,
      name: "Space Technology Solutions",
      category: "Space Technology",
      description: "Cutting-edge space technology solutions for satellite operations, space debris tracking, and space exploration.",
      price: "$8,999/month",
      rating: 4.9,
      features: ["Satellite Operations", "Space Debris Tracking", "Mission Planning", "Ground Control"],
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      marketPrice: "$15,000/month",
      competitors: ["SpaceX", "Blue Origin", "Virgin Galactic"],
      roi: "1200% in 36 months"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: services.length },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', icon: '🤖', count: services.filter(s => s.category === 'AI & Business Intelligence').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️', count: services.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: '🔗', count: services.filter(s => s.category === 'Blockchain & Web3').length },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: '🌐', count: services.filter(s => s.category === 'IoT & Edge Computing').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️', count: services.filter(s => s.category === 'Cybersecurity').length },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', icon: '🌍', count: services.filter(s => s.category === 'AI & Metaverse').length },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: '🏥', count: services.filter(s => s.category === 'AI & Healthcare').length },
    { id: 'Digital Twin', name: 'Digital Twin', icon: '🔄', count: services.filter(s => s.category === 'Digital Twin').length },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: '☁️', count: services.filter(s => s.category === 'Cloud & DevOps').length },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: '⚖️', count: services.filter(s => s.category === 'AI & Legal Tech').length },
    { id: 'AI & FinTech', name: 'AI & FinTech', icon: '💰', count: services.filter(s => s.category === 'AI & FinTech').length },
    { id: 'Space Technology', name: 'Space Technology', icon: '🚀', count: services.filter(s => s.category === 'Space Technology').length }
  ];

  const filteredServices = services.filter(service => {
    if (activeCategory !== 'all' && service.category !== activeCategory) return false;
    if (searchTerm && !service.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating': return b.rating - a.rating;
      case 'price': return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'reviews': return b.rating - a.rating;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  ];

  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedServices = sortedServices.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services - Zion Tech Group"
        description="Discover cutting-edge innovative services including AI, quantum computing, blockchain, IoT, cybersecurity, and more. Transform your business with Zion Tech Group."
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
                That Transform
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
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our AI experts help you implement the right technology solutions to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/innovative-services-showcase"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >
                  View All Innovative Services
                </Link>
                <Link
                  to="/request-quote"
                  className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Request Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services Links */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Explore More Services</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Discover our comprehensive portfolio of innovative micro SAAS and specialized IT solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <Link
                to="/services/comprehensive"
                className="bg-zion-blue-light/20 rounded-lg p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-3">Comprehensive Services</h3>
                <p className="text-zion-slate-light mb-4">
                  Explore our complete portfolio of micro SAAS and IT solutions with transparent pricing and detailed features.
                </p>
                <div className="text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group">
                  View All Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link
                to="/services/innovative-showcase"
                className="bg-zion-blue-light/20 rounded-lg p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-3">Innovative Showcase</h3>
                <p className="text-zion-slate-light mb-4">
                  Discover cutting-edge solutions including AI-powered business intelligence and advanced cybersecurity platforms.
                </p>
                <div className="text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group">
                  Explore Innovations <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
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
                  <span>{category.icon}</span>
                  {category.name} ({category.count})
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
                <option value="reviews">Reviews</option>
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
                <span className="text-sm text-slate-400 ml-2">vs {service.marketPrice}</span>
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

              <div className="mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">ROI:</span>
                  <span className="text-green-400 font-medium">{service.roi}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Competitors:</span>
                  <span className="text-slate-300">{service.competitors.slice(0, 2).join(', ')}</span>
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
            Ready to Transform Your Business?
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
}
              {/* Results Count */}
              <div className="flex items-end">
                <span className="text-zion-slate-light">
                  {filteredServices.length} services found
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zion-purple/20 rounded-lg text-zion-cyan">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm">{service.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {getPricingDisplay(service)}
                  </div>
                  <div className="text-xs text-zion-slate-light capitalize">
                    {service.pricingModel.replace('-', ' ')}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zion-slate-light mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-zion-cyan" />
                  Key Features
                </h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Clock className="w-4 h-4 text-zion-cyan" />
                  <span>{service.estimatedDelivery}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Shield className="w-4 h-4 text-zion-cyan" />
                  <span className="capitalize">{service.supportLevel}</span>
                </div>
              </div>

              {/* Market Price */}
              <div className="mb-4 p-3 bg-zion-blue-dark/30 rounded-lg">
                <div className="text-xs text-zion-slate-light mb-1">Market Price Range</div>
                <div className="text-zion-cyan font-medium">{service.marketPrice}</div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contact Info */}
              <div className="border-t border-zion-purple/20 pt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-zion-slate-light">
                    <div>📧 {service.contactInfo.email}</div>
                    <div>📱 {service.contactInfo.phone}</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
>>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f:src/pages/Services.tsx.backup.1756208062
}
}
import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { servicesCatalog } from '@/data/servicesCatalog';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Services() {
	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	return (
		<>
			<SEO
				title="Services - Micro SaaS, IT and AI Solutions | Zion Tech Group"
				description="Explore our micro SaaS products, enterprise IT services, and AI solutions with transparent pricing, clear features, and easy ways to get started."
				canonical="/services"
				url="https://ziontechgroup.com/services"
			/>

			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold text-white">Services & Solutions</h1>
						<p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
							Real, ready-to-deploy offerings across Micro SaaS, AI, Cybersecurity, Data, and Cloud.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-12">
						{servicesCatalog.map(category => (
							<section key={category.slug}>
								<h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">{category.name}</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{category.items.map(item => (
										<div key={item.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all">
											<div className="flex items-start justify-between gap-4">
												<div>
													<h3 className="text-xl font-semibold text-white">{item.title}</h3>
													<p className="text-zion-slate-light mt-2">{item.description}</p>
												</div>
												<div className="text-right min-w-[120px]">
													<div className="text-zion-cyan font-semibold">{item.price}</div>
													<div className="text-zion-slate-light text-sm">{item.billing === 'month' ? 'Monthly' : item.billing === 'hour' ? 'Hourly' : 'Project-based'}</div>
												</div>
											</div>

											<ul className="mt-4 space-y-2 text-zion-slate-light text-sm list-disc list-inside">
												{item.features.map((f, idx) => (
													<li key={idx}>{f}</li>
												))}
											</ul>

											<div className="mt-6 flex items-center justify-between">
												<Link
													to={item.href}
													target={item.external ? '_blank' : undefined}
													rel={item.external ? 'noopener noreferrer' : undefined}
													className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg border border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20"
												>
													<span>{item.ctaLabel}</span>
													{item.external && <ExternalLink className="w-4 h-4" />}
												</Link>
												<span className="text-zion-slate-light text-sm">Category: {item.category}</span>
											</div>
										</div>
									))}
								</div>
							</section>
						))}
					</div>

					<section className="mt-16">
						<h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Contact Us</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white"><Phone className="w-5 h-5" /><span>{contact.mobile}</span></div>
							</div>
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white"><Mail className="w-5 h-5" /><span>{contact.email}</span></div>
							</div>
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white"><MapPin className="w-5 h-5" /><span>{contact.address}</span></div>
							</div>
						</div>
						<div className="mt-6">
							<Link to="/contact" className="inline-flex items-center gap-2 text-white underline">Go to contact page</Link>
						</div>
					</section>

				</div>
			</main>
		</>
	);
}

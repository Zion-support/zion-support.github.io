<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  Database,
  Network,
  Rocket,
  Target,
  Award,
  Clock,
  Star,
  Atom,
  Link,
  Wifi,
  Cloud,
  Lock,
  Leaf,
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  TrendingDown,
  Calendar,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Server,
  Database as DatabaseIcon,
  ShieldCheck,
  Globe2,
  Cpu as CpuIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Lock as LockIcon,
  Cloud as CloudIcon,
  Wifi as WifiIcon,
  Leaf as LeafIcon,
  Eye as EyeIcon,
  MessageSquare as MessageSquareIcon,
  BarChart3 as BarChart3Icon,
  Rocket as RocketIcon,
  Target as TargetIcon,
  Award as AwardIcon,
  Clock as ClockIcon,
  Star as StarIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Grid as GridIcon,
  List as ListIcon,
  ChevronDown as ChevronDownIcon,
  ExternalLink as ExternalLinkIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  DollarSign as DollarSignIcon,
  TrendingDown as TrendingDownIcon,
  Calendar as CalendarIcon,
  Code as CodeIcon,
  Settings as SettingsIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Server as ServerIcon,
  Database as DatabaseIcon2,
  ShieldCheck as ShieldCheckIcon,
  Globe2 as Globe2Icon
} from 'lucide-react';
import { CUTTING_EDGE_INNOVATIONS_2025 } from '../data/2025-cutting-edge-innovations.jsx';

const InnovativeServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [sortBy, setSortBy] = useState('innovation');

  const categories = [
    { id: 'all', name: 'All Services', icon: Rocket, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Automation', name: 'AI & Automation', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'Blockchain', name: 'Blockchain', icon: Link, color: 'from-green-500 to-emerald-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge', icon: Wifi, color: 'from-orange-500 to-red-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-pink-500' },
    { id: 'Digital Twin', name: 'Digital Twin', icon: Eye, color: 'from-yellow-500 to-orange-500' },
    { id: 'Metaverse & VR', name: 'Metaverse & VR', icon: Globe2, color: 'from-purple-500 to-indigo-500' },
    { id: 'Green Technology', name: 'Green Tech', icon: Leaf, color: 'from-green-500 to-teal-500' }
  ];

  const filteredServices = CUTTING_EDGE_INNOVATIONS_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'innovation':
        return b.price - a.price; // Higher price = more innovative
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || Rocket;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.color || 'from-gray-500 to-gray-600';
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 animate-pulse"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent mb-6"
            >
              Cutting-Edge Innovations 2025
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
            >
              Discover the future of technology with our revolutionary micro SAAS services, 
              AI solutions, and innovative IT services that will transform your business
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="bg-zion-cyan/10 border border-zion-cyan/30 rounded-full px-6 py-3 text-zion-cyan">
                <span className="font-semibold">{CUTTING_EDGE_INNOVATIONS_2025.length}+</span> Innovative Services
              </div>
              <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-full px-6 py-3 text-zion-purple">
                <span className="font-semibold">9</span> Technology Categories
              </div>
              <div className="bg-zion-cyan/10 border border-zion-cyan/30 rounded-full px-6 py-3 text-zion-cyan">
                <span className="font-semibold">99.9%</span> Uptime Guarantee
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Contact Information Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-blue-light py-6"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-zion-cyan" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3">
              <MailIcon className="w-5 h-5 text-zion-cyan" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPinIcon className="w-5 h-5 text-zion-cyan" />
              <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-3">
              <GlobeIcon className="w-5 h-5 text-zion-cyan" />
              <a href="https://ziontechgroup.com" className="font-semibold hover:text-zion-cyan transition-colors">
                ziontechgroup.com
              </a>
=======
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Star, Clock, Users, ArrowRight, CheckCircle, Phone, Mail, Globe, Zap, Shield, Brain, Cpu, TrendingUp, Rocket, Leaf, Eye, Network, Cube } from 'lucide-react';
import SEOHead from '../components/SEOHead';
// Import all service data
import { ADVANCED_AI_SERVICES } from '../data/advancedAIServices';
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES } from '../data/innovativeITInfrastructure';
import { IOT_EDGE_COMPUTING_SERVICES } from '../data/iotEdgeComputingServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
const InnovativeServicesShowcase = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSubcategory, setSelectedSubcategory] = useState('all');
    const [priceRange, setPriceRange] = useState('all');
    // SEO configuration
    const seoConfig = {
        title: "Innovative Services 2025 - Zion Tech Group",
        description: "Discover cutting-edge AI, IT infrastructure, and micro SaaS services designed to transform your business. Explore our innovative technology solutions.",
        keywords: "AI services, IT infrastructure, micro SaaS, innovative technology, business solutions",
        url: "https://ziontechgroup.com/innovative-services"
    };
    // Combine all services
    const allServices = [
        ...ADVANCED_AI_SERVICES,
        ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES,
        ...IOT_EDGE_COMPUTING_SERVICES,
        ...INNOVATIVE_MICRO_SAAS_SERVICES
    ];
    const getSubcategoriesForCategory = (category) => {
        if (category === 'all')
            return [];
        return INNOVATIVE_SERVICE_SUBCATEGORIES_2025[category] || [];
    };
    const getCategoryIcon = (category) => {
        const categoryIcons = {
            'AI & Analytics': <Brain className="h-5 w-5"/>,
            'Emerging Technology': <Rocket className="h-5 w-5"/>,
            'Blockchain & Web3': <Cube className="h-5 w-5"/>,
            'IoT & Edge Computing': <Network className="h-5 w-5"/>,
            'Cybersecurity': <Shield className="h-5 w-5"/>,
            'Metaverse & VR/AR': <Eye className="h-5 w-5"/>,
            'Green Technology': <Leaf className="h-5 w-5"/>,
            'Digital Twin': <Cpu className="h-5 w-5"/>
        };
        return categoryIcons[category] || <Zap className="h-5 w-5"/>;
    };
    const getPriceRange = (price) => {
        if (price < 10000)
            return 'starter';
        if (price < 25000)
            return 'professional';
        return 'enterprise';
    };
    const getPriceRangeColor = (range) => {
        switch (range) {
            case 'starter': return 'bg-green-100 text-green-800 border-green-200';
            case 'professional': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'enterprise': return 'bg-purple-100 text-purple-800 border-purple-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEOHead config={seoConfig}/>
      
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Innovative Services Showcase
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our cutting-edge micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business operations and drive innovation.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2"/>
                <span>{allServices.length}+ Services</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="w-5 h-5 mr-2"/>
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="w-5 h-5 mr-2"/>
                <span>Global Support</span>
              </div>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
            </div>
          </div>
        </div>
      </motion.div>

<<<<<<< HEAD
      {/* Filters and Search */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent appearance-none"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-zion-slate-dark text-white">
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light pointer-events-none" />
            </div>

            {/* Price Range */}
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="20000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="flex-1 h-2 bg-zion-slate rounded-lg appearance-none cursor-pointer slider"
              />
              <span className="text-zion-cyan font-semibold min-w-[80px]">
                ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </span>
            </div>

            {/* View Mode */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-zion-cyan text-zion-slate-dark' 
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                <GridIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all ${
                  viewMode === 'list' 
                    ? 'bg-zion-cyan text-zion-slate-dark' 
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                <ListIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sort Options */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-zion-slate-light">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="innovation" className="bg-zion-slate-dark text-white">Most Innovative</option>
                <option value="price-low" className="bg-zion-slate-dark text-white">Price: Low to High</option>
                <option value="price-high" className="bg-zion-slate-dark text-white">Price: High to Low</option>
                <option value="name" className="bg-zion-slate-dark text-white">Name: A to Z</option>
=======
      {/* Search and Filter Section */}
      <section className="py-12 bg-zion-slate-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"/>
                <Input placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10"/>
              </div>
              
              <select value={selectedCategory} onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSelectedSubcategory('all');
        }} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue">
                <option value="all">All Categories</option>
                {INNOVATIVE_SERVICE_CATEGORIES_2025.map((category) => (<option key={category} value={category}>{category}</option>))}
              </select>
              
              <select value={selectedSubcategory} onChange={(e) => setSelectedSubcategory(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue">
                <option value="all">All Subcategories</option>
                {getSubcategoriesForCategory(selectedCategory).map((subcategory) => (<option key={subcategory} value={subcategory}>{subcategory}</option>))}
              </select>
              
              <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue">
                <option value="all">All Prices</option>
                <option value="low">Under $10K</option>
                <option value="medium">$10K - $25K</option>
                <option value="high">$25K+</option>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
              </select>
            </div>
            <div className="text-zion-slate-light">
              Showing <span className="text-zion-cyan font-semibold">{sortedServices.length}</span> of {CUTTING_EDGE_INNOVATIONS_2025.length} services
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
<<<<<<< HEAD
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="container mx-auto px-4 pb-20"
      >
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                      {React.createElement(getCategoryIcon(service.category), { className: "w-4 h-4" })}
                      {service.category}
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {sortedServices.length === 0 ? (<div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4"/>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedServices.map((service) => (<div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group">
                {/* Service Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getCategoryIcon(service.category)}
                      <div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriceRangeColor(service.price)}`}>
                          {getPriceRangeLabel(service.price)}
                        </span>
                      </div>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
                    </div>
                    <div className="text-zion-cyan font-bold text-lg">
                      {formatPrice(service.price)}
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {service.description}
                  </p>

<<<<<<< HEAD
                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-lg">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-2 py-1 bg-zion-slate/20 text-zion-slate-light text-xs rounded-lg">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-zion-cyan font-bold text-lg">{service.roi}</div>
                      <div className="text-zion-slate-light text-xs">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-zion-cyan font-bold text-lg">{service.estimatedDelivery}</div>
                      <div className="text-zion-slate-light text-xs">Delivery</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-slate-dark font-semibold py-3 px-4 rounded-xl hover:from-zion-cyan-light hover:to-zion-cyan transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </button>
                    <button className="px-4 py-3 border border-zion-cyan/30 text-zion-cyan rounded-xl hover:bg-zion-cyan/10 transition-all duration-300">
                      <ExternalLinkIcon className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Innovation Level Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      service.innovationLevel === 'Revolutionary' ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' :
                      service.innovationLevel === 'Breakthrough' ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white' :
                      'bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-slate-dark'
                    }`}>
                      {service.innovationLevel}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column - Basic Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                        {React.createElement(getCategoryIcon(service.category), { className: "w-4 h-4" })}
                        {service.category}
                      </div>
                      <div className="text-zion-cyan font-bold text-2xl">
                        {formatPrice(service.price)}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-zion-cyan font-bold text-lg">{service.roi}</div>
                        <div className="text-zion-slate-light text-xs">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-zion-cyan font-bold text-lg">{service.estimatedDelivery}</div>
                        <div className="text-zion-slate-light text-xs">Delivery</div>
                      </div>
                      <div className="text-center">
                        <div className="text-zion-cyan font-bold text-lg">{service.supportLevel}</div>
                        <div className="text-zion-slate-light text-xs">Support</div>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column - Features */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span className="text-zion-slate-light text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Actions & Details */}
                  <div className="lg:col-span-1">
                    <div className="space-y-4">
                      <div className="text-right">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          service.innovationLevel === 'Revolutionary' ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' :
                          service.innovationLevel === 'Breakthrough' ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white' :
                          'bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-slate-dark'
                        }`}>
                          {service.innovationLevel}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-slate-dark font-semibold py-3 px-4 rounded-xl hover:from-zion-cyan-light hover:to-zion-cyan transition-all duration-300 transform hover:scale-105">
                          Get Started
                        </button>
                        <button className="w-full border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-xl hover:bg-zion-cyan/10 transition-all duration-300">
                          Learn More
                        </button>
                      </div>

                      <div className="text-center text-zion-slate-light text-sm">
                        Market Price: <span className="text-zion-cyan font-semibold">{service.marketPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
=======
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1"/>
                      {service.estimatedDelivery}
                    </span>
                    <span className="flex items-center">
                      <ShieldCheck className="w-4 h-4 mr-1"/>
                      {service.supportLevel}
                    </span>
                  </div>
                </div>

                {/* Service Features */}
                <div className="p-6 border-b border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (<div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                        <span>{feature}</span>
                      </div>))}
                    {service.features.length > 4 && (<div className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 4} more features
                      </div>)}
                  </div>
                </div>

                {/* Service Benefits */}
                <div className="p-6 border-b border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-3">Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, index) => (<div key={index} className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0"/>
                        <span>{benefit}</span>
                      </div>))}
                  </div>
                </div>

                {/* Service Footer */}
                <div className="p-6 bg-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                      Market Price: <span className="font-medium">{service.marketPrice}</span>
                    </div>
                    <div className="flex space-x-2">
                      {service.tags.slice(0, 3).map((tag, index) => (<span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                          {tag}
                        </span>))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link to={'link' in service ? service.link : '#'} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2"/>
                    </Link>
                    <a href={`tel:${service.contactInfo.phone}`} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center" title="Call us">
                      <Phone className="w-4 h-4"/>
                    </a>
                    <a href={`mailto:${service.contactInfo.email}`} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center" title="Email us">
                      <Mail className="w-4 h-4"/>
                    </a>
                  </div>
                </div>
              </div>))}
          </div>)}
      </div>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="container mx-auto px-4 pb-20"
      >
        <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 rounded-3xl p-12 text-center border border-zion-cyan/30">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join hundreds of forward-thinking companies that are already leveraging our cutting-edge 
            innovations to gain competitive advantages and drive growth.
          </p>
<<<<<<< HEAD
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-slate-dark font-bold py-4 px-8 rounded-xl text-lg hover:from-zion-cyan-light hover:to-zion-cyan transition-all duration-300 transform hover:scale-105">
              Schedule a Consultation
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-xl text-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InnovativeServicesShowcase;
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2"/>
              Call +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2"/>
              Email Us
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-sm">
              <MapPin className="w-4 h-4 inline mr-2"/>
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>

          {filteredServices.length === 0 ? (<div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-zion-slate mb-4">No services found</h3>
              <p className="text-zion-slate-light mb-6">Try adjusting your search criteria or browse all categories.</p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                setPriceRange('all');
            }} variant="outline">
                Clear Filters
              </Button>
            </div>) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (<Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-zion-slate-light">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-zion-blue/20 rounded-lg flex items-center justify-center">
                          {getCategoryIcon(service.category)}
                        </div>
                        <Badge variant="outline" className={`border-2 ${getPriceRangeColor(getPriceRange(service.price))}`}>
                          {getPriceRange(service.price)}
                        </Badge>
                      </div>
                      {service.featured && (<Badge className="bg-zion-purple text-white">
                          <Star className="h-3 w-3 mr-1"/>
                          Featured
                        </Badge>)}
                    </div>
                    
                    <CardTitle className="text-xl text-zion-blue-dark group-hover:text-zion-purple transition-colors">
                      {service.title}
                    </CardTitle>
                    
                    <CardDescription className="text-zion-slate line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-zion-blue-dark mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-zion-cyan"/>
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (<li key={index} className="text-sm text-zion-slate-light flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>))}
                        {service.features.length > 3 && (<li className="text-sm text-zion-cyan font-medium">
                            +{service.features.length - 3} more features
                          </li>)}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-zion-blue-dark mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-zion-cyan"/>
                        Key Benefits
                      </h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (<li key={index} className="text-sm text-zion-slate-light flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"></div>
                            {benefit}
                          </li>))}
                      </ul>
                    </div>

                    {/* Pricing & Details */}
                    <div className="pt-4 border-t border-zion-slate-light">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-2xl font-bold text-zion-blue-dark">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <Badge variant="outline" className="text-zion-cyan border-zion-cyan">
                          {service.pricingModel}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4"/>
                          {service.estimatedDelivery}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4"/>
                          {service.supportLevel}
                        </span>
                      </div>

                      {/* Rating */}
                      {service.rating && (<div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (<Star key={i} className={`h-4 w-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}/>))}
                          </div>
                          <span className="text-sm text-zion-slate-light">
                            {service.rating} ({service.reviewCount} reviews)
                          </span>
                        </div>)}

                      {/* Market Price */}
                      <div className="mb-4 p-3 bg-zion-slate-light rounded-lg">
                        <div className="text-sm text-zion-slate-light mb-1">Market Price Range</div>
                        <div className="font-semibold text-zion-blue-dark">{service.marketPrice}</div>
                      </div>

                      {/* ROI */}
                      <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="text-sm text-green-700 mb-1">Expected ROI</div>
                        <div className="font-semibold text-green-800">{service.roi}</div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button asChild className="flex-1 bg-zion-blue hover:bg-zion-blue-dark">
                          <Link to="/contact">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4"/>
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                          <Link to="/request-quote">Quote</Link>
                        </Button>
                      </div>

                      {/* Contact Info */}
                      <div className="mt-4 pt-4 border-t border-zion-slate-light">
                        <div className="text-sm text-zion-slate-light mb-2">Ready to transform your business?</div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-zion-cyan"/>
                          <span className="text-zion-blue-dark font-medium">+1 302 464 0950</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-zion-cyan"/>
                          <span className="text-zion-blue-dark font-medium">kleber@ziontechgroup.com</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>))}
            </div>)}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Future-Proof Your Business?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-10 max-w-3xl mx-auto">
            Join the technology revolution with Zion Tech Group. Our innovative solutions are designed to 
            drive growth, efficiency, and competitive advantage in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Link to="/request-quote">Get Custom Quote</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-zion-cyan-light">Cutting-edge technology solutions that keep you ahead of the competition</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-cyan-light">Bank-grade security and compliance for your most critical business operations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-zion-cyan-light">24/7 expert support and dedicated success managers for your business</p>
            </div>
          </div>
        </div>
      </section>
    </div>);
};
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
<<<<<<< HEAD
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5c5f
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Users, 
<<<<<<< HEAD
  Globe, 
  Target,
=======
  TrendingUp, 
  Zap, 
  Target, 
  Sparkles,
  Globe,
  Lock,
=======
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Zap,
  Brain,
  Shield,
  Cpu,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
  Database,
  Network,
  Code,
  BarChart3,
<<<<<<< HEAD
  Microchip,
  Atom,
  Satellite,
  Leaf,
  Battery,
  Eye,
  Heart,
  Star,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5c5f
  ArrowRight,
  Phone,
  Mail,
  MapPin,
<<<<<<< HEAD
  ExternalLink,
  CheckCircle,
  Clock,
  DollarSign,
  Award,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

// Import service data
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_NEW_SERVICES } from '../data/innovativeNewServices';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { EMERGING_TECH_SERVICES } from '../data/emergingTechServices';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES } from '../data/specializedITInfrastructureServices';

const ComprehensiveServicesOverview: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('innovation');

  // Combine all services
  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...INNOVATIVE_NEW_SERVICES,
    ...ADVANCED_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_SERVICES,
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES
  ];

  // Get unique categories
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  // Price ranges
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-500', label: '$0 - $500/month' },
    { value: '500-1000', label: '$500 - $1,000/month' },
    { value: '1000-2000', label: '$1,000 - $2,000/month' },
    { value: '2000+', label: '$2,000+/month' }
  ];

  // Helper function to get service price
  const getServicePrice = (service: any) => {
    if (typeof service.price === 'number') {
      return service.price;
    }
    if (service.price && typeof service.price === 'object' && service.price.monthly) {
      return service.price.monthly;
    }
    return 0;
  };

  // Helper function to get service tags
  const getServiceTags = (service: any) => {
    if (service.tags && Array.isArray(service.tags)) {
      return service.tags;
    }
    return [];
  };

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const serviceTitle = 'title' in service ? service.title : 'name' in service ? service.name : '';
      const matchesSearch = serviceTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           getServiceTags(service).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      const servicePrice = getServicePrice(service);
      const matchesPrice = selectedPriceRange === 'all' || 
        (selectedPriceRange === '0-500' && servicePrice <= 500) ||
        (selectedPriceRange === '500-1000' && servicePrice > 500 && servicePrice <= 1000) ||
        (selectedPriceRange === '1000-2000' && servicePrice > 1000 && servicePrice <= 2000) ||
        (selectedPriceRange === '2000+' && servicePrice > 2000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return getServicePrice(a) - getServicePrice(b);
        case 'price-high':
          return getServicePrice(b) - getServicePrice(a);
        case 'innovation':
          const aTags = getServiceTags(a);
          const bTags = getServiceTags(b);
          return bTags.filter(tag => ['AI', 'Quantum', 'Autonomous', 'Innovation'].includes(tag)).length - 
                 aTags.filter(tag => ['AI', 'Quantum', 'Autonomous', 'Innovation'].includes(tag)).length;
        case 'name':
          const aTitle = 'title' in a ? a.title : 'name' in a ? a.name : '';
          const bTitle = 'title' in b ? b.title : 'name' in b ? b.name : '';
          return aTitle.localeCompare(bTitle);
        default:
          return 0;
      }
    });

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Digital Marketing':
      case 'AI & Customer Service':
      case 'AI & Legal Tech':
      case 'AI & Supply Chain':
      case 'AI & Human Resources':
      case 'AI & Financial Services':
      case 'AI & Healthcare':
      case 'AI & Consciousness':
        return Brain;
      case 'Quantum Computing':
        return Zap;
      case 'Cybersecurity':
        return Shield;
      case 'IT Infrastructure':
        return Cpu;
      case 'Space Technology':
        return Rocket;
      case 'Neurotechnology':
        return Target;
      case 'Autonomous Systems':
        return Users;
      case 'Blockchain & Web3':
        return Globe;
      case 'Internet of Things':
        return Cpu;
      default:
        return Lightbulb;
=======
  Target,
  Lightbulb,
  Rocket,
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  Building,
  Globe2,
  Lock,
  Cloud,
  Server,
  Eye,
  Heart,
  Sparkles,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { ADDITIONAL_INNOVATIVE_SERVICES } from '../data/additionalInnovativeServices';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';

export default function ComprehensiveServicesOverview() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combine all services
  const allServices = [...ADDITIONAL_INNOVATIVE_SERVICES, ...SPECIALIZED_IT_SERVICES];

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter services based on search and filters
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Group services by category
  const servicesByCategory = filteredServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
    }
    acc[service.category].push(service);
    return acc;
  }, {} as { [key: string]: typeof allServices });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Marketing': TrendingUp,
      'AI & Customer Service': Users,
      'AI & Financial Services': DollarSign,
      'AI & Supply Chain': Network,
      'AI & Healthcare': Heart,
      'AI & Legal Tech': Shield,
      'AI & Education': Lightbulb,
      'AI & Energy': Zap,
      'AI & Manufacturing': Building,
      'Cloud & DevOps': Cloud,
      'Cybersecurity': Lock,
      'Data & Analytics': Database,
      'Edge Computing & IoT': Cpu,
      'Integration & APIs': Code,
      'Digital Twin & Simulation': Eye,
      'Blockchain & Web3': Globe2,
      'Quantum Computing': Sparkles
    };
    return iconMap[category] || Target;
  };

<<<<<<< HEAD
  const getServiceColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Digital Marketing':
      case 'AI & Customer Service':
      case 'AI & Legal Tech':
      case 'AI & Supply Chain':
      case 'AI & Human Resources':
      case 'AI & Financial Services':
      case 'AI & Healthcare':
      case 'AI & Consciousness':
        return 'from-blue-500 to-purple-600';
      case 'Quantum Computing':
        return 'from-purple-500 to-pink-600';
      case 'Cybersecurity':
        return 'from-red-500 to-orange-600';
      case 'IT Infrastructure':
        return 'from-green-500 to-emerald-600';
      case 'Space Technology':
        return 'from-indigo-500 to-blue-600';
      case 'Neurotechnology':
        return 'from-pink-500 to-red-600';
      case 'Autonomous Systems':
        return 'from-yellow-500 to-orange-600';
      case 'Blockchain & Web3':
        return 'from-cyan-500 to-blue-600';
      case 'Internet of Things':
        return 'from-emerald-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <>
      <SEOHead 
        title="Comprehensive Technology Services - Zion Tech Group"
        description="Explore our comprehensive portfolio of cutting-edge technology services including AI, Quantum Computing, Cybersecurity, IT Infrastructure, and more. Transform your business with innovative solutions."
        keywords="technology services, AI services, quantum computing, cybersecurity, IT infrastructure, micro SaaS, autonomous systems, space technology, neurotechnology"
        image="/images/services-overview-og.jpg"
        canonical="https://ziontechgroup.com/comprehensive-services-overview"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Cutting-Edge Technology Solutions
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Technology
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Services Portfolio
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our extensive range of innovative technology services designed to accelerate your business growth, 
              enhance security, and drive digital transformation. From AI-powered solutions to quantum computing, 
              we deliver cutting-edge technology that gives you a competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>500+ Services Available</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                <span>Industry Leading Innovation</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="w-5 h-5 text-blue-400 mr-2" />
                <span>Global Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or technologies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Options */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setSortBy('innovation')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === 'innovation'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                <Lightbulb className="w-4 h-4 inline mr-2" />
                Most Innovative
              </button>
              <button
                onClick={() => setSortBy('price-low')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === 'price-low'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                <DollarSign className="w-4 h-4 inline mr-2" />
                Price: Low to High
              </button>
              <button
                onClick={() => setSortBy('price-high')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === 'price-high'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                <DollarSign className="w-4 h-4 inline mr-2" />
                Price: High to Low
              </button>
              <button
                onClick={() => setSortBy('name')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === 'name'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                A-Z
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-gray-400">
                Discover innovative solutions tailored to your business needs
              </p>
=======
  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Marketing': 'from-pink-500 to-rose-600',
      'AI & Customer Service': 'from-blue-500 to-indigo-600',
      'AI & Financial Services': 'from-green-500 to-emerald-600',
      'AI & Supply Chain': 'from-purple-500 to-violet-600',
      'AI & Healthcare': 'from-red-500 to-pink-600',
      'AI & Legal Tech': 'from-yellow-500 to-orange-600',
      'AI & Education': 'from-cyan-500 to-blue-600',
      'AI & Energy': 'from-orange-500 to-red-600',
      'AI & Manufacturing': 'from-indigo-500 to-purple-600',
      'Cloud & DevOps': 'from-blue-500 to-cyan-600',
      'Cybersecurity': 'from-red-500 to-orange-600',
      'Data & Analytics': 'from-green-500 to-teal-600',
      'Edge Computing & IoT': 'from-purple-500 to-pink-600',
      'Integration & APIs': 'from-yellow-500 to-green-600',
      'Digital Twin & Simulation': 'from-indigo-500 to-blue-600',
      'Blockchain & Web3': 'from-emerald-500 to-green-600',
      'Quantum Computing': 'from-violet-500 to-purple-600'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  const getCategoryDescription = (category: string) => {
    const descriptions: { [key: string]: string } = {
      'AI & Marketing': 'AI-powered marketing solutions that optimize campaigns, personalize content, and drive conversions',
      'AI & Customer Service': 'Intelligent customer experience platforms that deliver personalized, omnichannel support',
      'AI & Financial Services': 'Advanced financial analytics and risk management solutions powered by AI',
      'AI & Supply Chain': 'Intelligent supply chain optimization platforms that reduce costs and improve efficiency',
      'AI & Healthcare': 'AI-powered healthcare analytics and clinical decision support systems',
      'AI & Legal Tech': 'Intelligent legal research and compliance automation platforms',
      'AI & Education': 'Personalized learning platforms that adapt to individual student needs',
      'AI & Energy': 'Smart energy management solutions that optimize consumption and reduce costs',
      'AI & Manufacturing': 'Intelligent manufacturing platforms that optimize production and quality control',
      'Cloud & DevOps': 'Enterprise-grade cloud-native development and DevOps automation platforms',
      'Cybersecurity': 'Advanced security frameworks including zero-trust architecture and threat detection',
      'Data & Analytics': 'Comprehensive data lake and analytics platforms for enterprise insights',
      'Edge Computing & IoT': 'Edge computing and IoT management platforms for real-time processing',
      'Integration & APIs': 'Enterprise API management and system integration platforms',
      'Digital Twin & Simulation': 'Digital twin platforms for industrial applications and simulation',
      'Blockchain & Web3': 'Enterprise blockchain platforms for secure, transparent business processes',
      'Quantum Computing': 'Quantum computing services for research and enterprise applications'
    };
    return descriptions[category] || 'Innovative technology solutions for modern businesses';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group" 
        description="Explore our complete portfolio of AI-powered services, specialized IT solutions, and innovative technology platforms designed to transform your business."
        keywords="comprehensive services, AI solutions, IT services, technology platforms, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/comprehensive-services-overview"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Complete Portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Comprehensive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
              Services Overview
            </span>
            <span className="block text-3xl md:text-4xl text-zion-slate-light mt-4">
              Your Complete Technology Solution Partner
            </span>
          </h1>
          
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our extensive portfolio of {allServices.length}+ innovative services and solutions 
            designed to accelerate your digital transformation and drive business innovation across all industries.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-zion-slate-light">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-zion-cyan" />
              <span>https://ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              <Link
                to="/innovative-services"
                className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Services
              </Link>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = getServiceIcon(service.category);
                const colorClass = getServiceColor(service.category);
                
                return (
                  <div
                    key={service.id}
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Service Header */}
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${colorClass} rounded-lg mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {'title' in service ? service.title : 'name' in service ? service.name : ''}
                        </h3>
                        <p className="text-sm text-gray-400">{service.category}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Price and Delivery */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-green-400">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span className="font-semibold">${getServicePrice(service).toLocaleString()}</span>
                        <span className="text-gray-400 text-sm ml-1">/month</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{('estimatedDelivery' in service ? service.estimatedDelivery : '4-6 weeks')}</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {getServiceTags(service).slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Key Benefits:</h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Price */}
                    <div className="mb-6 p-3 bg-gray-700/30 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-yellow-400 font-medium">{service.marketPrice}</span>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-6 p-4 bg-gray-700/30 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Contact Information:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-300">
                          <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                          <a href={`tel:${service.contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                            {service.contactInfo.phone}
                          </a>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                          <a href={`mailto:${service.contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                            {service.contactInfo.email}
                          </a>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                          <span>364 E Main St STE 1008, Middletown DE 19709</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={`https://ziontechgroup.com/contact?service=${service.id}`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                      </a>
                      <a
                        href={`https://ziontechgroup.com/services/${service.id}`}
                        className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our team of experts is ready to help you implement the perfect technology solution. 
              Get in touch today to discuss your needs and discover how we can accelerate your digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center px-8 py-4 border border-gray-600 text-gray-300 rounded-lg text-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-400">Experienced professionals with deep industry knowledge</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-400">Track record of successful implementations and ROI</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Support</h3>
                <p className="text-gray-400">24/7 support and maintenance worldwide</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
=======
  CheckCircle,
  DollarSign,
  Clock,
  Award,
  Search,
  Filter,
  Grid3X3,
  List
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  services: string[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'ai-machine-learning',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence solutions that transform business operations',
    icon: Brain,
    color: 'from-cyan-500 to-blue-600',
    services: [
      'AI Business Intelligence Suite',
      'Quantum Machine Learning Platform',
      'Edge AI Platform',
      'AI Marketing Automation',
      'AI HR Management Platform',
      'AI Legal Technology Platform'
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Compliance',
    description: 'Enterprise-grade security solutions to protect your digital assets',
    icon: Shield,
    color: 'from-purple-500 to-pink-600',
    services: [
      'Cybersecurity Compliance Automation',
      'SOC2 Compliance Automation',
      'Advanced Threat Detection',
      'Security Policy Management',
      'Incident Response Automation'
    ]
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure',
    description: 'Scalable cloud solutions and robust IT infrastructure management',
    icon: Cpu,
    color: 'from-green-500 to-emerald-600',
    services: [
      'IoT Management Platform',
      'Edge Computing Solutions',
      'Cloud Migration Services',
      'DevOps Automation',
      'Infrastructure as Code'
    ]
  },
  {
    id: 'blockchain-defi',
    name: 'Blockchain & DeFi',
    description: 'Enterprise blockchain solutions and decentralized finance platforms',
    icon: Network,
    color: 'from-yellow-500 to-orange-600',
    services: [
      'Blockchain & DeFi Platform',
      'Smart Contract Development',
      'Token Management System',
      'DeFi Protocol Integration',
      'Cross-chain Solutions'
    ]
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    description: 'Next-generation quantum computing solutions for complex problem solving',
    icon: Atom,
    color: 'from-violet-500 to-purple-600',
    services: [
      'Quantum Computing Platform',
      'Quantum Machine Learning',
      'Quantum Internet Platform',
      'Quantum Algorithm Library',
      'Quantum Simulation Tools'
    ]
  },
  {
    id: 'emerging-technologies',
    name: 'Emerging Technologies',
    description: 'Cutting-edge solutions in neuromorphic computing, 6G, and space tech',
    icon: Rocket,
    color: 'from-pink-500 to-rose-600',
    services: [
      'Neuromorphic Computing Platform',
      '6G Network Infrastructure',
      'Space Technology Platform',
      'Brain-Computer Interface',
      'Fusion Energy Platform'
    ]
  },
  {
    id: 'sustainability',
    name: 'Sustainability & ESG',
    description: 'Environmental impact monitoring and sustainability optimization',
    icon: Leaf,
    color: 'from-emerald-500 to-teal-600',
    services: [
      'Sustainable Technology Platform',
      'Carbon Footprint Tracking',
      'Energy Efficiency Optimization',
      'ESG Compliance Tools',
      'Environmental Impact Analytics'
    ]
  },
  {
    id: 'autonomous-systems',
    name: 'Autonomous Systems',
    description: 'Fully autonomous business operations and intelligent automation',
    icon: Zap,
    color: 'from-orange-500 to-red-600',
    services: [
      'Autonomous Business Operations',
      'Autonomous Manufacturing Platform',
      'AI Business Agents',
      'Process Orchestration',
      'Predictive Maintenance'
    ]
  }
];

const ComprehensiveServicesOverview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCategories = SERVICE_CATEGORIES.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: ServiceCategory) => {
    const IconComponent = category.icon;
    return <IconComponent className="h-8 w-8" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      <SEOHead
        title="Comprehensive Technology Services Overview | Zion Tech Group"
        description="Explore our complete portfolio of AI, cybersecurity, blockchain, quantum computing, and emerging technology solutions. Transform your business with cutting-edge innovation."
        keywords="comprehensive services, AI solutions, cybersecurity, blockchain, quantum computing, emerging technology, Zion Tech Group"
        type="website"
        url="https://ziontechgroup.com/comprehensive-services-overview"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            Comprehensive Technology Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover our complete portfolio of cutting-edge technology solutions designed to accelerate your digital transformation and drive innovation across all aspects of your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/innovative-services-showcase"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold rounded-lg transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="py-8 bg-zion-blue-dark/50 border-y border-zion-blue-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3 text-zion-cyan">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3 text-zion-purple-light">
              <Mail className="h-5 w-5" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3 text-zion-slate-light">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Search and Filters */}
      <section className="py-8 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-zion-purple text-white'
                    : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-light/20'
                }`}
              >
                All Categories
              </button>
              {SERVICE_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-purple text-white'
                      : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-light/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan w-full sm:w-64"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-zion-purple text-white'
                      : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-light/20'
                  }`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-zion-purple text-white'
                      : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-light/20'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredCategories.length} Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg">
              Comprehensive solutions across all major technology domains
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-zion-blue-dark/50 backdrop-blur-md rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                      {getCategoryIcon(category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-zion-slate-light text-sm">{category.services.length} services</p>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-zion-slate-light mb-6 line-clamp-3">
                    {category.description}
                  </p>

                  {/* Services List */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-zion-cyan" />
                      Key Services
                    </h4>
                    <div className="space-y-2">
                      {category.services.slice(0, 4).map((service, index) => (
                        <div key={index} className="flex items-start gap-2 text-zion-slate-light text-sm">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                          <span>{service}</span>
                        </div>
                      ))}
                      {category.services.length > 4 && (
                        <div className="text-zion-purple-light text-sm font-medium">
                          +{category.services.length - 4} more services
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/innovative-services-showcase?category=${category.id}`}
                    className="w-full text-center px-4 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-medium rounded-lg transition-all duration-300"
                  >
                    Explore {category.name}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-zion-blue-dark/50 backdrop-blur-md rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-purple/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${category.color} flex-shrink-0`}>
                      {getCategoryIcon(category)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                          <p className="text-zion-slate-light text-lg mb-3">{category.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-zion-cyan font-semibold text-lg">{category.services.length} Services</div>
                          <div className="text-zion-slate-light text-sm">Available</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-zion-cyan" />
                            Featured Services
                          </h4>
                          <div className="space-y-2">
                            {category.services.slice(0, 6).map((service, index) => (
                              <div key={index} className="flex items-start gap-2 text-zion-slate-light text-sm">
                                <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                                <span>{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Star className="h-4 w-4 text-zion-cyan" />
                            Key Benefits
                          </h4>
                          <div className="space-y-2 text-zion-slate-light text-sm">
                            <div>• Accelerate digital transformation</div>
                            <div>• Reduce operational costs</div>
                            <div>• Improve efficiency & productivity</div>
                            <div>• Future-proof your business</div>
                            <div>• Competitive advantage</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Link
                          to={`/innovative-services-showcase?category=${category.id}`}
                          className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-medium rounded-lg transition-all duration-300"
                        >
                          Explore Services
                        </Link>
                        <Link
                          to="/contact"
                          className="px-6 py-3 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-medium rounded-lg transition-all duration-300"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-xl mb-4">
                No service categories found matching your criteria
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our services leverage the latest technologies and frameworks to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'AI & ML', icon: Brain, color: 'from-cyan-500 to-blue-600' },
              { name: 'Quantum', icon: Atom, color: 'from-violet-500 to-purple-600' },
              { name: 'Blockchain', icon: Network, color: 'from-yellow-500 to-orange-600' },
              { name: 'IoT & Edge', icon: Cpu, color: 'from-green-500 to-emerald-600' },
              { name: 'Cybersecurity', icon: Shield, color: 'from-purple-500 to-pink-600' },
              { name: 'Cloud Native', icon: Globe, color: 'from-blue-500 to-indigo-600' },
              { name: 'Autonomous', icon: Zap, color: 'from-orange-500 to-red-600' },
              { name: 'Sustainability', icon: Leaf, color: 'from-emerald-500 to-teal-600' }
            ].map((tech, index) => (
              <div key={tech.name} className="text-center group">
                <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
=======
      {/* Services by Category */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Services by Category
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our services organized by category to find the perfect solution for your business needs
            </p>
          </div>

          {Object.entries(servicesByCategory).map(([category, services]) => {
            if (services.length === 0) return null;
            
            const IconComponent = getCategoryIcon(category);
            const categoryColor = getCategoryColor(category);
            const categoryDescription = getCategoryDescription(category);
            
            return (
              <div key={category} className="mb-16">
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${categoryColor} mr-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category}</h3>
                    <p className="text-lg text-gray-400 max-w-2xl">{categoryDescription}</p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={service.id}
                      className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      {/* Service Header */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-400 text-sm line-clamp-3">
                          {service.description}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30"
                            >
                              <CheckCircle className="w-3 h-3 mr-1" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Pricing and Contact */}
                      <div className="border-t border-gray-700/50 pt-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-xl font-bold text-white">
                            ${service.price.toLocaleString()}
                            <span className="text-sm text-gray-400 font-normal">/month</span>
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.estimatedDelivery}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <a
                            href={service.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 text-center"
                          >
                            Learn More
                          </a>
                          <a
                            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                          >
                            Contact
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {Object.keys(servicesByCategory).length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </div>
          )}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our comprehensive technology solutions are designed to accelerate your digital transformation and give you a competitive edge in today's rapidly evolving market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/innovative-services-showcase"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold rounded-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Footer */}
      <section className="py-12 bg-zion-blue-dark/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <div className="space-y-2 text-zion-slate-light">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
              <div className="text-zion-slate-light">
                <p>364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Learn More</h3>
              <div className="space-y-2">
                <Link to="/innovative-services-showcase" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                  All Services
                </Link>
                <Link to="/case-studies" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                  Case Studies
                </Link>
                <Link to="/about" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                  About Zion Tech
                </Link>
              </div>
            </div>
=======
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our team of experts is ready to help you implement the perfect solution for your business needs. 
            Get in touch today to start your digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1 302 464 0950
            </a>
            
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-2">Visit our website for more information:</p>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300"
            >
              https://ziontechgroup.com
            </a>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
          </div>
        </div>
      </section>
    </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5c5f
  );
<<<<<<< HEAD
};

export default ComprehensiveServicesOverview;
=======
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04

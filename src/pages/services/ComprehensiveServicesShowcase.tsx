<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

const ComprehensiveServicesShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud & Infrastructure',
    'Networking',
    'IT Management',
    'Quantum Technology',
    'Emerging Tech'
  ];

  const services = [
    {
      id: 'ai-autonomous-systems',
      title: "AI Autonomous Systems",
      description: "Next-generation AI systems that operate independently and learn continuously",
      category: "AI & Machine Learning",
      icon: Brain,
      features: ["Self-learning algorithms", "Autonomous decision making", "Continuous optimization"],
      path: "/services/ai-autonomous-systems",
      featured: true,
      rating: 5
    },
    {
      id: 'cybersecurity',
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive security solutions with AI-powered threat detection",
      category: "Cybersecurity",
      icon: Shield,
      features: ["Real-time monitoring", "AI threat analysis", "Automated response"],
      path: "/services/cybersecurity",
      featured: true,
      rating: 5
    },
    {
      id: 'quantum-technology',
      title: "Quantum Technology Solutions",
      description: "Revolutionary quantum computing and encryption services",
      category: "Quantum Technology",
      icon: Cpu,
      features: ["Quantum encryption", "Superior performance", "Future-proof architecture"],
      path: "/services/quantum-technology",
      featured: true,
      rating: 5
    },
    {
      id: 'it-infrastructure',
      title: "IT Infrastructure Services",
      description: "Comprehensive IT infrastructure management and optimization",
      category: "IT Management",
      icon: Database,
      features: ["Infrastructure design", "Performance optimization", "Scalability planning"],
      path: "/services/it-infrastructure",
      featured: false,
      rating: 4
    },
    {
      id: 'micro-saas',
      title: "Micro SAAS Solutions",
      description: "Custom software solutions for specific business needs",
      category: "Emerging Tech",
      icon: Globe,
      features: ["Custom development", "Rapid deployment", "Scalable solutions"],
      path: "/services/micro-saas-solutions",
      featured: false,
      rating: 4
    },
    {
      id: '5g-enterprise',
      title: "5G Enterprise Solutions",
      description: "Cutting-edge 5G networks optimized for enterprise needs",
      category: "Networking",
      icon: Zap,
      features: ["Ultra-low latency", "Massive connectivity", "Enterprise security"],
      path: "/5g-enterprise-solutions",
      featured: false,
      rating: 4
    },
    {
      id: 'ai-research-assistant',
      title: "AI Autonomous Research Assistant",
      description: "AI-powered research and analysis platform",
      category: "AI & Machine Learning",
      icon: Brain,
      features: ["Automated research", "Data analysis", "Insight generation"],
      path: "/ai-autonomous-research-assistant",
      featured: false,
      rating: 4
    },
    {
      id: 'quantum-neural-network',
      title: "Quantum Neural Network Platform",
      description: "Revolutionary neural networks leveraging quantum computing",
      category: "AI & Quantum",
      icon: Cpu,
      features: ["Quantum algorithms", "Enhanced learning", "Breakthrough performance"],
      path: "/quantum-neural-network-platform",
      featured: false,
      rating: 5
    },
    {
      id: 'autonomous-business',
      title: "Autonomous Business Operations Platform",
      description: "AI-powered business process automation and optimization",
      category: "AI & Machine Learning",
      icon: Brain,
      features: ["Process automation", "Business intelligence", "Performance optimization"],
      path: "/autonomous-business-operations-platform",
      featured: false,
      rating: 4
    },
    {
      id: 'ai-asset-management',
      title: "AI-Powered IT Asset Management",
      description: "Intelligent asset tracking and optimization for modern enterprises",
      category: "IT Management",
      icon: Database,
      features: ["Predictive maintenance", "Cost optimization", "Real-time insights"],
      path: "/ai-powered-it-asset-management",
      featured: false,
      rating: 4
    },
    {
      id: 'soc2-compliance',
      title: "SOC2 Compliance Automation",
      description: "Automated compliance management and reporting",
      category: "Cybersecurity",
      icon: Shield,
      features: ["Automated compliance", "Real-time monitoring", "Audit preparation"],
      path: "/soc2-compliance-automation",
      featured: false,
      rating: 4
    },
    {
      id: 'industry-solutions',
      title: "Industry-Specific Solutions",
      description: "Tailored solutions for healthcare, finance, and manufacturing",
      category: "Emerging Tech",
      icon: Globe,
      features: ["Industry expertise", "Custom solutions", "Compliance ready"],
      path: "/services/industry-solutions",
      featured: false,
      rating: 4
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Comprehensive Services
              </span>
              <br />
              <span className="text-white">Showcase</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our complete portfolio of cutting-edge technology services designed to transform 
              your business and drive innovation across all industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                      : 'bg-gray-800/50 text-gray-400 hover:text-cyan-400'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                      : 'bg-gray-800/50 text-gray-400 hover:text-cyan-400'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
              }
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="group relative"
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      {service.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                      
                      <div className="relative z-10 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <div className="relative z-10">
                        <div className="mb-2">
                          <span className="text-xs font-medium text-cyan-400 uppercase tracking-wide">
                            {service.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex mr-2">
                            {renderStars(service.rating)}
                          </div>
                          <span className="text-sm text-gray-400">({service.rating}/5)</span>
                        </div>

                        <ul className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <Link
                          to={service.path}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ) : (
                    // List View
                    <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <span className="text-xs font-medium text-cyan-400 uppercase tracking-wide">
                                {service.category}
                              </span>
                              {service.featured && (
                                <span className="ml-2 px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <div className="flex items-center">
                              {renderStars(service.rating)}
                              <span className="text-sm text-gray-400 ml-2">({service.rating}/5)</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <ul className="flex flex-wrap gap-4">
                              {service.features.slice(0, 3).map((feature) => (
                                <li key={feature} className="flex items-center text-sm text-gray-400">
                                  <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            
                            <Link
                              to={service.path}
                              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
=======
import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Server, 
  Atom, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Rocket,
  Cpu,
  Eye,
  Lock,
  Home
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../../data/innovativeMicroSaasServices';
import { ADVANCED_IT_INFRASTRUCTURE_SERVICES } from '../../data/advancedITInfrastructureServices';
import { EMERGING_TECHNOLOGY_SERVICES } from '../../data/emergingTechnologyServices';

export default function ComprehensiveServicesShowcase() {
  const serviceCategories = [
    {
      name: "Innovative Micro SAAS",
      icon: Brain,
      description: "Cutting-edge micro SAAS solutions featuring AI, blockchain, IoT, and emerging technologies",
      services: INNOVATIVE_MICRO_SAAS_SERVICES.slice(0, 4),
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Advanced IT Infrastructure",
      icon: Server,
      description: "Enterprise-grade infrastructure solutions including edge computing, quantum-ready systems, and zero-trust security",
      services: ADVANCED_IT_INFRASTRUCTURE_SERVICES.slice(0, 4),
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Emerging Technologies",
      icon: Atom,
      description: "Revolutionary technologies including neuromorphic computing, DNA storage, and quantum internet",
      services: EMERGING_TECHNOLOGY_SERVICES.slice(0, 4),
      color: "from-green-500 to-emerald-500"
    }
  ];

  const highlights = [
    {
      title: "300%+ Average ROI",
      description: "Our innovative services deliver exceptional return on investment within 6-12 months",
      icon: TrendingUp
    },
    {
      title: "Future-Ready Technology",
      description: "Built with cutting-edge technologies that will define the next decade of innovation",
      icon: Rocket
    },
    {
      title: "Enterprise-Grade Security",
      description: "Multi-layered security with compliance across SOC 2, ISO 27001, HIPAA, and more",
      icon: Shield
    },
    {
      title: "24/7 Expert Support",
      description: "Dedicated support team with deep expertise in emerging technologies and enterprise solutions",
      icon: Eye
    }
  ];

  const technologies = [
    "AI/ML", "Blockchain", "Quantum Computing", "IoT", "Edge Computing", "Cloud Native",
    "Neuromorphic", "DNA Storage", "Biocomputing", "Photonic Computing", "Swarm Robotics"
  ];
=======
import React, { useState, useEffect } from 'react';
import { SEO } from '../../components/SEO';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Target, 
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  MapPin,
  Calendar,
  Award,
  Zap,
  Shield,
  Brain,
  Heart,
  Leaf,
  Scale,
  Link,
  GraduationCap,
  Drone,
  Rocket
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES, MARKET_INSIGHTS } from '../../data/innovativeNewServices';

export default function ComprehensiveServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_NEW_SERVICES.map(s => s.category.split(' & ')[0])))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-200', label: '$0 - $200' },
    { value: '200-500', label: '$200 - $500' },
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-2500', label: '$1,000 - $2,500' },
    { value: '2500+', label: '$2,500+' }
  ];
  const innovationLevels = ['all', 'Advanced', 'Cutting-edge', 'Revolutionary', 'Breakthrough'];

  const filteredServices = INNOVATIVE_NEW_SERVICES.filter(service => {
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3676
import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
<<<<<<< HEAD
  Shield,
  Heart,
  Leaf,
  Scale,
  Truck,
  TrendingUp,
  Building,
  GraduationCap,
=======
  Shield, 
  Heart, 
  Leaf, 
  Scale, 
  Truck, 
  TrendingUp, 
  Building, 
  GraduationCap, 
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3676
  Atom,
  Zap,
  Globe,
  Users,
  BarChart3,
  Target,
  Award,
<<<<<<< HEAD
  Cpu,
  Lock,
  Eye,
  Rocket,
  Database,
  Network,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Wifi,
  Satellite,
  Camera,
  Drone,
  Car,
  Factory,
  Hospital,
  School,
  Building2,
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3676
  Search,
  Filter,
  Star,
  Clock,
  DollarSign,
<<<<<<< HEAD
  TrendingUp as TrendingUpIcon,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES } from '../../data/advancedInnovativeServices';
import { EMERGING_TECH_SERVICES } from '../../data/emergingTechServices';

export default function ComprehensiveServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState<string>('name');

  // Combine all services
  const allServices = [...ADVANCED_INNOVATIVE_SERVICES, ...EMERGING_TECH_SERVICES];

  const categories = [
    { name: "All", icon: Globe, color: "from-blue-500 to-purple-500", count: allServices.length },
    { name: "AI & IoT", icon: Brain, color: "from-purple-500 to-pink-500", count: allServices.filter(s => s.category.includes('AI') || s.category.includes('IoT')).length },
    { name: "Quantum Computing", icon: Atom, color: "from-indigo-500 to-purple-500", count: allServices.filter(s => s.category.includes('Quantum')).length },
    { name: "Autonomous Systems", icon: Rocket, color: "from-orange-500 to-red-500", count: allServices.filter(s => s.category.includes('Autonomous')).length },
    { name: "Blockchain & Identity", icon: Lock, color: "from-green-500 to-blue-500", count: allServices.filter(s => s.category.includes('Blockchain')).length },
    { name: "AI & Legal Tech", icon: Scale, color: "from-blue-500 to-indigo-500", count: allServices.filter(s => s.category.includes('Legal')).length },
    { name: "Sustainability & Green Tech", icon: Leaf, color: "from-emerald-500 to-green-500", count: allServices.filter(s => s.category.includes('Sustainability') || s.category.includes('Green')).length },
    { name: "Cybersecurity", icon: Shield, color: "from-red-500 to-orange-500", count: allServices.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Security')).length },
    { name: "Smart Cities & IoT", icon: Building, color: "from-gray-500 to-blue-500", count: allServices.filter(s => s.category.includes('Smart Cities')).length },
    { name: "AI & Healthcare", icon: Heart, color: "from-pink-500 to-red-500", count: allServices.filter(s => s.category.includes('Healthcare')).length },
    { name: "Emerging Tech", icon: Zap, color: "from-yellow-500 to-orange-500", count: allServices.filter(s => s.category.includes('Neuromorphic') || s.category.includes('Synthetic Biology') || s.category.includes('Space Technology') || s.category.includes('Materials Science') || s.category.includes('Brain-Computer Interface') || s.category.includes('Digital Twins') || s.category.includes('Edge AI') || s.category.includes('Holographic')).length }
  ];

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : "from-gray-500 to-gray-600";
  };

  const getServiceIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      "AI & IoT": Cpu,
      "Quantum Computing": Atom,
      "Autonomous Systems": Drone,
      "Blockchain & Identity": Lock,
      "AI & Legal Tech": Scale,
      "Sustainability & Green Tech": Leaf,
      "Cybersecurity": Shield,
      "Smart Cities & IoT": Building,
      "AI & Healthcare": Heart,
      "Neuromorphic Computing": Brain,
      "Synthetic Biology": Leaf,
      "Space Technology": Satellite,
      "Materials Science": Atom,
      "Brain-Computer Interface": Brain,
      "Quantum Internet": Network,
      "Digital Twins": Monitor,
      "Edge AI": Cpu,
      "Holographic Technology": Eye
=======
  TrendingDown,
  Eye,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES } from '../../data/innovativeNewServices';

export default function ComprehensiveServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('innovation');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(INNOVATIVE_NEW_SERVICES.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = INNOVATIVE_NEW_SERVICES
    .filter(service => 
      (selectedCategory === 'All' || service.category === selectedCategory) &&
      (service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'roi':
          return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
        case 'innovation':
          return b.innovationLevel.includes('Revolutionary') ? 1 : -1;
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Digital Marketing': Brain,
      'Cybersecurity': Shield,
      'Healthcare': Heart,
      'Sustainability': Leaf,
      'Legal Tech': Scale,
      'Supply Chain': Truck,
      'FinTech': TrendingUp,
      'Smart Cities': Building,
      'Education': GraduationCap,
      'Quantum Computing': Atom,
      'AI & Customer Experience': Users,
      'Blockchain & Supply Chain': Globe,
      'AI & IoT': Zap,
      'Metaverse & Virtual Reality': Eye,
      'AI & Human Resources': Users,
      'Edge Computing & IoT': Zap
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3676
    };
    return iconMap[category] || Globe;
  };

<<<<<<< HEAD
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || 
                           (selectedCategory === 'Emerging Tech' && 
                            (service.category.includes('Neuromorphic') || service.category.includes('Synthetic Biology') || 
                             service.category.includes('Space Technology') || service.category.includes('Materials Science') || 
                             service.category.includes('Brain-Computer Interface') || service.category.includes('Quantum Internet') || 
                             service.category.includes('Digital Twins') || service.category.includes('Edge AI') || 
                             service.category.includes('Holographic'))) ||
                           service.category.includes(selectedCategory.replace(' & ', ' ').split(' ')[0]) ||
                           service.category.includes(selectedCategory.replace(' & ', ' ').split(' ')[1] || '');
    
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e4ee
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
<<<<<<< HEAD
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    
    const matchesPrice = (() => {
      if (selectedPriceRange === 'all') return true;
      const [min, max] = selectedPriceRange.split('-').map(Number);
      if (selectedPriceRange === '2500+') return service.price >= 2500;
      return service.price >= min && service.price <= max;
    })();
    
    const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesInnovation;
=======
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    
    return matchesCategory && matchesSearch && matchesPrice;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e4ee
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
<<<<<<< HEAD
      case 'name':
        return a.title.localeCompare(b.title);
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e4ee
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
<<<<<<< HEAD
      case 'innovation':
        const innovationOrder = { 'Advanced': 1, 'Cutting-edge': 2, 'Revolutionary': 3, 'Breakthrough': 4 };
        return innovationOrder[a.innovationLevel as keyof typeof innovationOrder] - innovationOrder[b.innovationLevel as keyof typeof innovationOrder];
=======
      case 'name':
        return a.title.localeCompare(b.title);
      case 'innovation':
        return b.innovationLevel.localeCompare(a.innovationLevel);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e4ee
      default:
        return 0;
    }
  });

<<<<<<< HEAD
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI': Brain,
      'Cybersecurity': Shield,
      'Healthcare': Heart,
      'IoT': Zap,
      'Legal': Scale,
      'Blockchain': Link,
      'FinTech': TrendingUp,
      'Education': GraduationCap,
      'Robotics': Drone,
      'Quantum': Star
    };
    
    for (const [key, icon] of Object.entries(iconMap)) {
      if (category.includes(key)) return icon;
    }
    return Rocket;
  };

  const getInnovationLevelColor = (level: string) => {
    const colorMap: { [key: string]: string } = {
      'Advanced': 'text-blue-500',
      'Cutting-edge': 'text-purple-500',
      'Revolutionary': 'text-orange-500',
      'Breakthrough': 'text-red-500'
    };
    return colorMap[level] || 'text-gray-500';
  };

  const getInnovationLevelBg = (level: string) => {
    const bgMap: { [key: string]: string } = {
      'Advanced': 'bg-blue-500/20',
      'Cutting-edge': 'bg-purple-500/20',
      'Revolutionary': 'bg-orange-500/20',
      'Breakthrough': 'bg-red-500/20'
    };
    return bgMap[level] || 'bg-gray-500/20';
  };
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f87d

=======
  const stats = {
    totalServices: allServices.length,
    averagePrice: Math.round(allServices.reduce((sum, s) => sum + s.price, 0) / allServices.length),
    priceRange: {
      min: Math.min(...allServices.map(s => s.price)),
      max: Math.max(...allServices.map(s => s.price))
    },
    categories: categories.length - 1
  };

>>>>>>> origin/cursor/expand-services-and-deploy-updates-e4ee
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Showcase - Zion Tech Group" 
<<<<<<< HEAD
<<<<<<< HEAD
        description="Complete showcase of Zion Tech Group's innovative micro SAAS services, advanced IT infrastructure, and emerging technology solutions for forward-thinking businesses."
        keywords="comprehensive services, micro SAAS, IT infrastructure, emerging technology, AI services, blockchain solutions, Zion Tech Group"
        canonical="https://ziontechgroup.com/services/comprehensive-services-showcase"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services Showcase
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Innovation Across Every Technology Domain
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover Zion Tech Group's complete portfolio of cutting-edge services spanning micro SAAS solutions, 
            advanced IT infrastructure, and revolutionary emerging technologies. Transform your business with 
            the most innovative solutions available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore All Services
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our comprehensive services cover every aspect of modern technology needs, from 
              micro SAAS solutions to enterprise infrastructure and emerging technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-zion-blue-light to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-4 text-center">
                  {category.name}
                </h3>
                <p className="text-zion-slate mb-6 text-center">
                  {category.description}
                </p>
                <div className="space-y-3">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg border border-zion-blue-light">
                      <div>
                        <h4 className="font-semibold text-zion-blue-dark text-sm">
                          {service.title}
                        </h4>
                        <p className="text-xs text-zion-slate">
                          {service.category}
                        </p>
                      </div>
                      <span className="text-lg font-bold text-zion-cyan">
                        ${service.price}
                      </span>
                    </div>
                  ))}
                </div>
                <button className={`w-full mt-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${category.color} hover:opacity-90 transition-opacity`}>
                  View All {category.name} Services
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience the advantages of working with a technology partner that combines 
              innovation, expertise, and proven results across all service categories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <highlight.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {highlight.title}
                </h3>
                <p className="text-zion-slate">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Comprehensive Technology Stack
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our services leverage the most advanced technologies and frameworks available, 
              ensuring exceptional performance, scalability, and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-zion-blue-light rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-zion-blue-dark">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Proven Success & Results
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our comprehensive services deliver measurable business impact and exceptional 
              results across all technology domains and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">500+</div>
              <p className="text-lg text-zion-slate">Successful Projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">50+</div>
              <p className="text-lg text-zion-slate">Technology Domains</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">25+</div>
              <p className="text-lg text-zion-slate">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-zion-cyan mb-2">99%</div>
              <p className="text-lg text-zion-slate">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our comprehensive services are tailored to meet the unique requirements and 
              compliance needs of different industries and business sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Healthcare", "Finance", "Manufacturing", "Retail",
              "Education", "Government", "Technology", "Energy"
            ].map((industry, index) => (
              <div key={index} className="bg-zion-blue-light rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-zion-blue-dark">
                  {industry}
                </span>
              </div>
            ))}
          </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5da1
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our comprehensive suite of services is designed to address every aspect of your 
              technology needs. Get in touch to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
=======
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Explore our comprehensive portfolio of innovative services and discover how 
            Zion Tech Group can accelerate your digital transformation and business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Contact us: <strong>+1 302 464 0950</strong> | <strong>kleber@ziontechgroup.com</strong></p>
            <p>Visit: <strong>https://ziontechgroup.com</strong></p>
            <p>Address: <strong>364 E Main St STE 1008, Middletown DE 19709</strong></p>
          </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5da1
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default ComprehensiveServicesShowcase;
=======
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5da1
=======
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e4ee
        description="Explore our complete portfolio of innovative micro SAAS services, IT solutions, and AI innovations. Find the perfect solution for your business needs."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
<<<<<<< HEAD
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Comprehensive Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of {INNOVATIVE_NEW_SERVICES.length}+ innovative services 
              designed to transform your business and drive growth
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <Award className="w-5 h-5 mr-2 text-yellow-400" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                <span>Fast Delivery</span>
=======
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Discover our complete portfolio of cutting-edge micro SAAS solutions, IT services, and AI innovations
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-2xl font-bold">{stats.totalServices}</div>
                <div className="text-sm text-gray-300">Total Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-2xl font-bold">{stats.categories}</div>
                <div className="text-sm text-gray-300">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-2xl font-bold">${stats.averagePrice}</div>
                <div className="text-sm text-gray-300">Avg. Price</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-2xl font-bold">${stats.priceRange.min}-${stats.priceRange.max}</div>
                <div className="text-sm text-gray-300">Price Range</div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e4ee
              </div>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Market Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Market Overview & Growth Potential
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Total Market</h3>
              <p className="text-2xl font-bold text-cyan-400">{MARKET_INSIGHTS.totalAddressableMarket}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Growth Rate</h3>
              <p className="text-2xl font-bold text-green-400">{MARKET_INSIGHTS.growthRate}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Services Available</h3>
              <p className="text-2xl font-bold text-purple-400">{INNOVATIVE_NEW_SERVICES.length}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Industries Served</h3>
              <p className="text-2xl font-bold text-orange-400">15+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value} className="bg-gray-800 text-white">
                    {range.label}
                  </option>
                ))}
              </select>

              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {innovationLevels.map(level => (
                  <option key={level} value={level} className="bg-gray-800 text-white">
                    {level === 'all' ? 'All Levels' : level}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                <option value="price-low" className="bg-gray-800 text-white">Price: Low to High</option>
                <option value="price-high" className="bg-gray-800 text-white">Price: High to Low</option>
                <option value="innovation" className="bg-gray-800 text-white">Innovation Level</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Showing {filteredServices.length} of {INNOVATIVE_NEW_SERVICES.length} services
            </p>
=======
      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-white placeholder-gray-300 border border-white/20 focus:border-white/40 focus:outline-none"
                />
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-20 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white border border-white/20 focus:border-white/40 focus:outline-none text-sm"
                />
                <span className="text-gray-300">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 2000])}
                  className="w-20 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white border border-white/20 focus:border-white/40 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white border border-white/20 focus:border-white/40 focus:outline-none text-sm"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="innovation">Innovation Level</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-white/20 backdrop-blur-sm text-gray-300 hover:bg-white/30'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="bg-white/20 rounded-full px-2 py-1 text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e4ee
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Services Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              return (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getInnovationLevelColor(service.innovationLevel)} ${getInnovationLevelBg(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>Market Price: {service.marketPrice}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Delivery: {service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Target className="w-4 h-4 mr-2" />
                      <span>ROI: {service.roi}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-6">
            {sortedServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              return (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                          <p className="text-gray-300 mb-3">{service.description}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getInnovationLevelColor(service.innovationLevel)} ${getInnovationLevelBg(service.innovationLevel)}`}>
                            {service.innovationLevel}
                          </span>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-cyan-400">
                              ${service.price.toLocaleString()}
                              <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                          <div className="space-y-1">
                            {service.features.slice(0, 4).map((feature, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                          <div className="space-y-1">
                            {service.benefits.slice(0, 4).map((benefit, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-400">
                                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Details:</h4>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-400">
                              <DollarSign className="w-4 h-4 mr-2" />
                              <span>Market: {service.marketPrice}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-400">
                              <Clock className="w-4 h-4 mr-2" />
                              <span>Delivery: {service.estimatedDelivery}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-400">
                              <Target className="w-4 h-4 mr-2" />
                              <span>ROI: {service.roi}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {service.tags.slice(0, 5).map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg flex items-center transition-all duration-300">
                          Get Started
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
=======
      {/* Results Summary */}
      <div className="container mx-auto px-4 mb-6">
        <div className="flex items-center justify-between text-white">
          <div>
            <span className="text-lg font-semibold">{filteredServices.length}</span> services found
            {selectedCategory !== 'All' && (
              <span className="text-gray-300 ml-2">in {selectedCategory}</span>
            )}
          </div>
          <div className="text-sm text-gray-300">
            Showing {Math.min(sortedServices.length, 20)} of {sortedServices.length} results
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.slice(0, 20).map((service) => {
            const ServiceIcon = getServiceIcon(service.category);
            return (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                    <ServiceIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.currency}{service.price}</div>
                    <div className="text-sm text-gray-300">per month</div>
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                    {service.category}
                  </span>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-gray-400">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-gray-400">Delivery</div>
                    <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-gray-400">ROI</div>
                    <div className="text-green-400 font-semibold">{service.roi}</div>
                  </div>
                </div>

                {/* Innovation Level */}
                <div className="mb-4 p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                  <div className="text-sm text-purple-300 font-semibold mb-1">Innovation Level</div>
                  <div className="text-xs text-purple-200">{service.innovationLevel}</div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-white/20 pt-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Ready to get started?</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center gap-2 text-white">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        {service.contactInfo.phone}
                      </div>
                      <div className="flex items-center justify-center gap-2 text-white">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        {service.contactInfo.email}
                      </div>
                      <div className="flex items-center justify-center gap-2 text-blue-300">
                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                        <a href={service.contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Visit Website
                        </a>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e4ee
=======
  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Digital Marketing': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Healthcare': 'from-green-500 to-teal-500',
      'Sustainability': 'from-emerald-500 to-green-500',
      'Legal Tech': 'from-blue-500 to-indigo-500',
      'Supply Chain': 'from-yellow-500 to-orange-500',
      'FinTech': 'from-green-500 to-blue-500',
      'Smart Cities': 'from-gray-500 to-blue-500',
      'Education': 'from-purple-500 to-blue-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'AI & Customer Experience': 'from-cyan-500 to-blue-500',
      'Blockchain & Supply Chain': 'from-yellow-500 to-green-500',
      'AI & IoT': 'from-blue-500 to-cyan-500',
      'Metaverse & Virtual Reality': 'from-purple-500 to-indigo-500',
      'AI & Human Resources': 'from-pink-500 to-red-500',
      'Edge Computing & IoT': 'from-indigo-500 to-cyan-500'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  const getInnovationLevel = (level: string) => {
    if (level.includes('Revolutionary')) return { color: 'text-yellow-400', bg: 'bg-yellow-400/20', icon: Sparkles };
    if (level.includes('Cutting-edge')) return { color: 'text-cyan-400', bg: 'bg-cyan-400/20', icon: Star };
    if (level.includes('Advanced')) return { color: 'text-blue-400', bg: 'bg-blue-400/20', icon: Award };
    return { color: 'text-green-400', bg: 'bg-green-400/20', icon: CheckCircle };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEO 
        title="Comprehensive Services Showcase - Zion Tech Group" 
        description="Explore our complete portfolio of innovative micro SAAS services, AI solutions, and cutting-edge technology services designed to transform your business."
        keywords="micro SAAS, AI services, technology solutions, digital transformation, innovation, business automation"
        canonical="https://ziontechgroup.com/services/comprehensive-showcase"
      />

      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 via-zion-purple/80 to-zion-cyan/70"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-pulse">
              Comprehensive Services
              <span className="block text-4xl md:text-5xl text-zion-cyan mt-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Innovation Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our complete ecosystem of revolutionary micro SAAS services, AI solutions, and cutting-edge 
              technology services designed to accelerate your digital transformation and business growth.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-cyan">{INNOVATIVE_NEW_SERVICES.length}+</div>
                <div className="text-sm text-zion-slate-light">Innovative Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-purple">15+</div>
                <div className="text-sm text-zion-slate-light">Technology Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-green">500%+</div>
                <div className="text-sm text-zion-slate-light">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-orange">24/7</div>
                <div className="text-sm text-zion-slate-light">Global Support</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                <Sparkles className="w-5 h-5 inline mr-2" />
                Explore Services
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="relative">
                <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 appearance-none"
                >
                  <option value="innovation" className="bg-gray-800 text-white">Sort by Innovation</option>
                  <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                  <option value="roi" className="bg-gray-800 text-white">Sort by ROI</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Revolutionary Services Portfolio
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              {filteredServices.length} innovative services found - each designed to give your business a competitive edge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              const innovation = getInnovationLevel(service.innovationLevel);
              
              return (
                <div key={service.id} className="group relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-zion-cyan/70">
                          per {service.pricingModel}
                        </div>
                      </div>
                    </div>

                    {/* Innovation Level Badge */}
                    <div className="mb-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${innovation.bg} ${innovation.color}`}>
                        <innovation.icon className="w-3 h-3 mr-1" />
                        {service.innovationLevel.split(' ')[0]}
                      </div>
                    </div>

                    {/* Service Title & Description */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-zion-cyan/80 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-white/80">
                            <Zap className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-4 p-3 bg-white/5 rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-zion-cyan/70">Market Price:</span>
                          <div className="text-white font-semibold">{service.marketPrice}</div>
                        </div>
                        <div>
                          <span className="text-zion-cyan/70">ROI:</span>
                          <div className="text-green-400 font-semibold">{service.roi}</div>
                        </div>
                        <div>
                          <span className="text-zion-cyan/70">Delivery:</span>
                          <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                        </div>
                        <div>
                          <span className="text-zion-cyan/70">Support:</span>
                          <div className="text-white font-semibold capitalize">{service.supportLevel}</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center group"
                      >
                        <Users className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 text-center">
                      <div className="text-xs text-zion-cyan/70">
                        📞 {service.contactInfo.phone}
                      </div>
                      <div className="text-xs text-zion-cyan/70">
                        ✉️ {service.contactInfo.email}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3676
                      </div>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
              );
            })}
=======
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-300">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {filteredServices.length > 20 && (
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Load More Services
            </button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e4ee
          </div>
        )}
      </div>

<<<<<<< HEAD
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300">
              Contact our team to discuss your needs and find the perfect solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 text-lg font-semibold">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-purple-400 text-lg font-semibold">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Quick response guaranteed</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-green-400 text-lg font-semibold">ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Explore our full portfolio</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-gray-400 mr-2" />
              <p className="text-gray-400">
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105">
              Schedule a Free Consultation
            </button>
=======
      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our comprehensive portfolio of innovative services is designed to give you a competitive edge in today's rapidly evolving digital landscape. 
            Get in touch to discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <div className="w-5 h-5 bg-white rounded-full"></div>
              Call Now: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
            >
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-2">Visit our website for more information</p>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 underline text-lg"
            >
              https://ziontechgroup.com
            </a>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e4ee
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f87d
=======
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e4ee
=======
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-cyan/80">Try adjusting your search criteria or browse all categories</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="bg-white/5 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver innovative solutions that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-First Approach</h3>
              <p className="text-zion-cyan/80">
                Leverage the latest AI technologies to gain competitive advantages and drive innovation
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-zion-purple to-zion-pink rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-zion-cyan/80">
                Built-in security and compliance features to protect your business and data
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-zion-green to-zion-teal rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-zion-cyan/80">
                Measurable business outcomes with rapid implementation and quick time-to-value
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-zion-orange to-zion-red rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Support</h3>
              <p className="text-zion-cyan/80">
                24/7 support and expertise from our global team of technology professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-zion-blue to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Contact our team of experts to discuss how our innovative services can drive your digital transformation and business growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="bg-zion-cyan rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Consultation</h3>
              <p className="text-zion-cyan/80 mb-4">
                Get personalized advice from our technology experts
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Expert Consultation Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Schedule Consultation →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="bg-zion-purple rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ROI Assessment</h3>
              <p className="text-zion-cyan/80 mb-4">
                Understand the potential return on your investment
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=ROI Assessment Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Get Assessment →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="bg-zion-green rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Quick Start</h3>
              <p className="text-zion-cyan/80 mb-4">
                Begin your transformation journey immediately
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Quick Start Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Start Now →
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">📞 Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">✉️ Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">🌐 Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">📍 Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3676

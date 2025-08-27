import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  Clock,
  Users,
  Target,
  BarChart3,
  Rocket,
  Cpu,
  Network,
  Database,
  Lock,
  Leaf,
  Scale,
  Stethoscope,
  Car,
  Building2,
  DollarSign,
  Award,
  Lightbulb,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Play,
  Eye,
  X,
  Flask
} from 'lucide-react';
import { ENHANCED_INNOVATIVE_SERVICES_2027, EnhancedInnovativeService2027 } from '../data/enhancedInnovativeServices2027';

const EnhancedInnovativeServicesShowcase2027: React.FC = () => {
  const [services, setServices] = useState<EnhancedInnovativeService2027[]>(ENHANCED_INNOVATIVE_SERVICES_2027);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');
  const [sortBy, setSortBy] = useState('title');
  const [selectedService, setSelectedService] = useState<EnhancedInnovativeService2027 | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = ['all', ...Array.from(new Set(services.map(s => s.category)))];
  const innovationLevels = ['all', ...Array.from(new Set(services.map(s => s.innovationLevel)))];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
    
    return matchesSearch && matchesCategory && matchesInnovation;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'innovation':
        const innovationOrder = { 'Breakthrough': 3, 'Advanced': 2, 'Innovative': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - 
               (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
      default:
        return a.title.localeCompare(b.title);
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Financial Technology': return <DollarSign className="w-5 h-5" />;
      case 'Quantum & Cloud Computing': return <Cpu className="w-5 h-5" />;
      case 'AI & Supply Chain': return <Network className="w-5 h-5" />;
      case 'Neurotechnology & AI': return <Brain className="w-5 h-5" />;
      case 'AI & Energy Management': return <Zap className="w-5 h-5" />;
      case 'Quantum & Networking': return <Globe className="w-5 h-5" />;
      case 'AI & Education Technology': return <Users className="w-5 h-5" />;
      case 'Quantum & Materials Science': return <Flask className="w-5 h-5" />;
      case 'AI & Space Technology': return <Rocket className="w-5 h-5" />;
      case 'Quantum & Biology': return <Stethoscope className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Breakthrough': return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Advanced': return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Innovative': return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default: return 'bg-gray-600';
    }
  };

  const handleServiceClick = (service: EnhancedInnovativeService2027) => {
    setSelectedService(service);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (selectedService) {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }
  };

  const prevSlide = () => {
    if (selectedService) {
      setCurrentSlide((prev) => (prev - 1 + 4) % 4);
=======
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from '@/data/innovativeMicroSaasServices2027';
import { INNOVATIVE_IT_SERVICES_2027 } from '@/data/innovativeITServices2027';
import { INNOVATIVE_AI_SERVICES_2027 } from '@/data/innovativeAIServices2027';
const EnhancedInnovativeServicesShowcase2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'showcase'>('showcase');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', color: 'from-zion-cyan to-zion-purple' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'Artificial Intelligence', icon: '🤖', color: 'from-blue-500 to-cyan-500' },
    { id: 'blockchain', name: 'Blockchain', icon: '🔗', color: 'from-green-500 to-emerald-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'edge', name: 'Edge Computing', icon: '🌐', color: 'from-indigo-500 to-purple-500' },
    { id: 'sustainability', name: 'Sustainability', icon: '🌱', color: 'from-green-500 to-teal-500' },
    { id: 'metaverse', name: 'Metaverse', icon: '🌍', color: 'from-pink-500 to-rose-500' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥', color: 'from-red-500 to-pink-500' },
    { id: 'financial', name: 'Financial Services', icon: '💰', color: 'from-yellow-500 to-orange-500' }
  ];
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2027,
    ...INNOVATIVE_IT_SERVICES_2027,
    ...INNOVATIVE_AI_SERVICES_2027
  ];
  const filteredServices = allServices.filter(service => {
    if (selectedCategory === 'all') return true;
    return service.category.toLowerCase().includes(selectedCategory) ||
           service.subcategory.toLowerCase().includes(selectedCategory);
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<<<<<<< HEAD
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent mb-6">
              Enhanced Innovative Services 2027
            </h1>
            <p className="text-xl text-zion-gray-light mb-8 max-w-3xl mx-auto">
              Discover the future of technology with our comprehensive suite of AI, quantum computing, 
              and cutting-edge innovative services designed to revolutionize your business.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2"
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Eye className="w-5 h-5" />
                <span>Explore Services</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold flex items-center space-x-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-gray-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-gray-dark rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:border-zion-cyan"
              />
            </div>

=======
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Enhanced Innovative
            </span>
            <br />
            <span className="text-zion-neon">Services Showcase 2027</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-cyan/80 mb-8 max-w-4xl mx-auto"
          >
            Immerse yourself in our revolutionary technology showcase featuring cutting-edge micro SAAS, IT, and AI services. 
            Experience the future of technology with interactive demos and comprehensive insights.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3">
              <span className="text-zion-purple text-lg font-semibold">Interactive Showcase</span>
            </div>
            <div className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3">
              <span className="text-zion-cyan text-lg font-semibold">Live Demos</span>
            </div>
            <div className="bg-zion-neon/20 backdrop-blur-sm border border-zion-neon/30 rounded-full px-6 py-3">
              <span className="text-zion-neon text-lg font-semibold">Future Tech</span>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Category Navigation */}
      <section className="py-12 bg-black/20 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-zion-slate-dark border border-zion-gray-dark rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
<<<<<<< HEAD
            </select>

            {/* Innovation Level Filter */}
            <select
              value={selectedInnovationLevel}
              onChange={(e) => setSelectedInnovationLevel(e.target.value)}
              className="px-4 py-3 bg-zion-slate-dark border border-zion-gray-dark rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              {innovationLevels.map(level => (
                <option key={level} value={level}>
                  {level === 'all' ? 'All Innovation Levels' : level}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-zion-slate-dark border border-zion-gray-dark rounded-lg text-white focus:outline-none focus:border-zion-cyan"
            >
              <option value="title">Sort by Title</option>
              <option value="price">Sort by Price</option>
              <option value="innovation">Sort by Innovation</option>
              <option value="roi">Sort by ROI</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services-grid" className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
=======
            </div>
            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('showcase')}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  viewMode === 'showcase'
                    ? 'bg-zion-cyan text-black border-zion-cyan'
                    : 'bg-transparent text-zion-cyan border-zion-cyan/30 hover:border-zion-cyan/60'
                }`}
              >
                Showcase
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-zion-cyan text-black border-zion-cyan'
                    : 'bg-transparent text-zion-cyan border-zion-cyan/30 hover:border-zion-cyan/60'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-zion-cyan text-black border-zion-cyan'
                    : 'bg-transparent text-zion-cyan border-zion-cyan/30 hover:border-zion-cyan/60'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Service Showcase */}
      {viewMode === 'showcase' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
              onClick={() => handleServiceClick(service)}
            >
<<<<<<< HEAD
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getCategoryIcon(service.category)}
                  <span className="text-zion-gray-light text-sm">{service.category}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                  {service.innovationLevel}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                {service.title}
              </h3>

              <p className="text-zion-gray-light mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-zion-cyan">
                  ${service.price.toLocaleString()}<span className="text-sm text-zion-gray-light">/month</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-green-400">{service.roi}</div>
                  <div className="text-sm text-zion-gray-light">ROI</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-zion-slate-dark text-zion-gray-light text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {service.tags.length > 3 && (
                  <span className="px-2 py-1 bg-zion-slate-dark text-zion-gray-light text-xs rounded-full">
                    +{service.tags.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-zion-gray-light text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{service.estimatedDelivery}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zion-slate-dark rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  {getCategoryIcon(selectedService.category)}
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                    <p className="text-zion-gray-light">{selectedService.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-zion-gray-light hover:text-white transition-colors"
=======
              Featured Services
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="space-y-20"
            >
              {filteredServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex space-x-4 mb-6 border-b border-zion-gray-dark">
                {['Overview', 'Features', 'Technical Specs', 'Contact'].map((tab, index) => (
                  <button
                    key={tab}
                    onClick={() => setCurrentSlide(index)}
                    className={`pb-2 px-4 transition-colors ${
                      currentSlide === index
                        ? 'text-zion-cyan border-b-2 border-zion-cyan'
                        : 'text-zion-gray-light hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Content Slides */}
              <div className="relative">
                {/* Overview Slide */}
                {currentSlide === 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="bg-white/5 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">{selectedService.marketingContent?.headline}</h3>
                      <p className="text-zion-gray-light leading-relaxed">{selectedService.marketingContent?.valueProposition}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span>Key Benefits</span>
                        </h4>
                        <ul className="space-y-2">
                          {selectedService.benefits.map((benefit, index) => (
                            <li key={index} className="text-zion-gray-light flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white/5 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                          <Target className="w-5 h-5 text-zion-cyan" />
                          <span>Target Audience</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.targetAudience.map((audience, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-zion-slate-light text-zion-gray-light text-sm rounded-full"
                            >
                              {audience}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Features Slide */}
                {currentSlide === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                          <Zap className="w-5 h-5 text-yellow-400" />
                          <span>Key Features</span>
                        </h4>
                        <ul className="space-y-2">
                          {selectedService.features.map((feature, index) => (
                            <li key={index} className="text-zion-gray-light flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white/5 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                          <Lightbulb className="w-5 h-5 text-zion-purple" />
                          <span>Use Cases</span>
                        </h4>
                        <ul className="space-y-2">
                          {selectedService.useCases.map((useCase, index) => (
                            <li key={index} className="text-zion-gray-light flex items-start space-x-2">
                              <ArrowRight className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Technical Specs Slide */}
                {currentSlide === 2 && selectedService.technicalSpecs && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                          <Cpu className="w-5 h-5 text-blue-400" />
                          <span>Technology Stack</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.technology.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-400/20 text-blue-300 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                          <Network className="w-5 h-5 text-green-400" />
                          <span>Integrations</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.integrations.map((integration, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-green-400/20 text-green-300 text-sm rounded-full"
                            >
                              {integration}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white/5 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Performance</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-zion-gray-light">Uptime:</span>
                            <span className="text-green-400 font-semibold">{selectedService.technicalSpecs.uptime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zion-gray-light">API Endpoints:</span>
                            <span className="text-zion-cyan font-semibold">{selectedService.technicalSpecs.apiEndpoints}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Security</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.security.map((security, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-red-400/20 text-red-300 text-xs rounded-full"
                            >
                              {security}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Compliance</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.compliance.map((compliance, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-purple-400/20 text-purple-300 text-xs rounded-full"
                            >
                              {compliance}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Contact Slide */}
                {currentSlide === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-xl p-8 text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
                      <p className="text-zion-gray-light mb-6">
                        Contact our team to discuss how {selectedService.title} can revolutionize your operations.
                      </p>
<<<<<<< HEAD
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white/10 rounded-xl p-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Pricing Information</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-zion-gray-light">Monthly Price:</span>
                              <span className="text-2xl font-bold text-zion-cyan">${selectedService.price.toLocaleString()}</span>
=======
                      {/* Innovation Level Badge */}
                      <div className="inline-block">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                          service.innovationLevel === 'Revolutionary' 
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : service.innovationLevel === 'Advanced'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-green-500/20 text-green-400 border border-green-500/30'
                        }`}>
                          {service.innovationLevel} Innovation
                        </span>
                      </div>
                    </div>
                    {/* Key Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features?.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-zion-cyan/80">
                              <span className="text-zion-cyan">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits?.slice(0, 4).map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-zion-cyan/80">
                              <span className="text-zion-neon">→</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* Pricing and Market Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-black/30 rounded-lg p-4 border border-zion-cyan/20">
                        <div className="text-sm text-zion-cyan/50 mb-1">Starting Price</div>
                        <div className="text-2xl font-bold text-zion-cyan">
                          ${(service as any).price?.toLocaleString() || 
                             (service as any).pricing?.monthly?.toLocaleString() || 'Custom'}
                        </div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 border border-zion-purple/20">
                        <div className="text-sm text-zion-purple/50 mb-1">Expected ROI</div>
                        <div className="text-2xl font-bold text-zion-purple">
                          {(service as any).roi || 'High'}
                        </div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 border border-zion-neon/20">
                        <div className="text-sm text-zion-neon/50 mb-1">Market Size</div>
                        <div className="text-2xl font-bold text-zion-neon">
                          {(service as any).marketSize || 'Growing'}
                        </div>
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Link
                        to={`/services/${service.id}`}
                        className="bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-bold py-3 px-8 rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-transparent border-2 border-zion-cyan text-zion-cyan font-bold py-3 px-8 rounded-lg hover:bg-zion-cyan hover:text-black transition-all duration-300"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                  {/* Service Visualization */}
                  <div className="flex-1">
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="relative group"
                    >
                      <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30 backdrop-blur-sm">
                        <div className="text-center mb-6">
                          <div className="text-8xl mb-4">{service.icon || '🚀'}</div>
                          <h4 className="text-xl font-bold text-white mb-2">Interactive Demo</h4>
                          <p className="text-zion-cyan/70">Experience this technology</p>
                        </div>
                        
                        {/* Demo Placeholder */}
                        <div className="bg-black/30 rounded-lg p-6 border border-zion-cyan/20">
                          <div className="text-center text-zion-cyan/50">
                            <div className="text-4xl mb-2">🎮</div>
                            <p>Interactive demonstration coming soon</p>
                            <p className="text-sm mt-2">Click to explore features</p>
                          </div>
                        </div>
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-zion-cyan">
                              {(service as any).technicalSpecs?.apiEndpoints || '100+'}
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zion-gray-light">Market Range:</span>
                              <span className="text-zion-gray-light">{selectedService.marketPrice}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zion-gray-light">Expected ROI:</span>
                              <span className="text-green-400 font-semibold">{selectedService.roi}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zion-gray-light">Delivery Time:</span>
                              <span className="text-zion-gray-light">{selectedService.estimatedDelivery}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/10 rounded-xl p-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <Phone className="w-5 h-5 text-zion-cyan" />
                              <span className="text-zion-gray-light">{selectedService.contactInfo.phone}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Mail className="w-5 h-5 text-zion-cyan" />
                              <span className="text-zion-gray-light">{selectedService.contactInfo.email}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <MapPin className="w-5 h-5 text-zion-cyan" />
                              <span className="text-zion-gray-light">{selectedService.contactInfo.address}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <ExternalLink className="w-5 h-5 text-zion-cyan" />
                              <a
                                href={selectedService.contactInfo.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zion-cyan hover:text-white transition-colors"
                              >
                                Visit Website
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
<<<<<<< HEAD

                      <div className="flex justify-center space-x-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2"
                          onClick={() => window.open(`tel:${selectedService.contactInfo.phone}`)}
                        >
                          <Phone className="w-5 h-5" />
                          <span>Call Now</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold flex items-center space-x-2"
                          onClick={() => window.open(`mailto:${selectedService.contactInfo.email}`)}
                        >
                          <Mail className="w-5 h-5" />
                          <span>Email Us</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevSlide}
                  className="flex items-center space-x-2 text-zion-gray-light hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>

                <div className="flex space-x-2">
                  {[0, 1, 2, 3].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentSlide === index ? 'bg-zion-cyan' : 'bg-zion-gray-dark'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="flex items-center space-x-2 text-zion-gray-light hover:text-white transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
=======
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
      {/* Grid View */}
      {viewMode === 'grid' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/60 transition-all duration-500 hover:transform hover:scale-105"
                >
                  {/* Innovation Level Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      service.innovationLevel === 'Revolutionary' 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : service.innovationLevel === 'Advanced'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  {/* Service Icon */}
                  <div className="text-4xl mb-4">{service.icon || '🚀'}</div>
                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  {/* Service Description */}
                  <p className="text-zion-cyan/70 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  {/* Service Category */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-zion-cyan/50">{service.category}</span>
                    <span className="text-zion-cyan/30">•</span>
                    <span className="text-xs text-zion-cyan/50">{service.subcategory}</span>
                  </div>
                  {/* Price Range */}
                  <div className="mb-4">
                    <span className="text-zion-neon font-semibold">
                      ${(service as any).price?.toLocaleString() || 
                         (service as any).pricing?.monthly?.toLocaleString() || 'Custom Pricing'}
                    </span>
                  </div>
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features?.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-zion-cyan">✓</span>
                          <span className="text-xs text-zion-cyan/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-semibold py-2 px-4 rounded-lg text-center hover:from-zion-purple hover:to-zion-cyan transition-all duration-300"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-transparent border border-zion-cyan text-zion-cyan font-semibold py-2 px-4 rounded-lg hover:bg-zion-cyan hover:text-black transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
      {/* List View */}
      {viewMode === 'list' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="space-y-6"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/60 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* Service Icon and Basic Info */}
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{service.icon || '🚀'}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-zion-cyan/70 mb-2">
                          <span>{service.category}</span>
                          <span>•</span>
                          <span>{service.subcategory}</span>
                        </div>
                        <p className="text-zion-cyan/80">{service.description}</p>
                      </div>
                    </div>
                    {/* Service Details */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-black/30 rounded-lg p-4 border border-zion-cyan/20">
                        <div className="text-sm text-zion-cyan/50 mb-1">Price</div>
                        <div className="text-xl font-bold text-zion-cyan">
                          ${(service as any).price?.toLocaleString() || 
                             (service as any).pricing?.monthly?.toLocaleString() || 'Custom'}
                        </div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 border border-zion-purple/20">
                        <div className="text-sm text-zion-purple/50 mb-1">ROI</div>
                        <div className="text-xl font-bold text-zion-purple">
                          {(service as any).roi || 'High'}
                        </div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4 border border-zion-neon/20">
                        <div className="text-sm text-zion-neon/50 mb-1">Innovation</div>
                        <div className="text-xl font-bold text-zion-neon">
                          {service.innovationLevel}
                        </div>
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        to={`/services/${service.id}`}
                        className="bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-semibold py-2 px-6 rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-transparent border border-zion-cyan text-zion-cyan font-semibold py-2 px-6 rounded-lg hover:bg-zion-cyan hover:text-black transition-all duration-300"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Experience the Future?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-cyan/80 mb-8"
          >
            Contact our team to schedule a personalized demo and discuss how our innovative services can transform your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-bold py-4 px-8 rounded-lg text-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300"
            >
              Schedule Demo
            </Link>
            
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-lg text-lg hover:bg-zion-cyan hover:text-black transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-zion-cyan/70"
          >
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
          </motion.div>
        </div>
      )}

      {/* Contact Section */}
      <div id="contact" className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-zion-gray-light mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your needs and discover how our innovative services can transform your business.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-gray-light">+1 302 464 0950</p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-gray-light">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-gray-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 mx-auto"
            onClick={() => window.open('https://ziontechgroup.com', '_blank')}
          >
            <ExternalLink className="w-5 h-5" />
            <span>Visit Zion Tech Group</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
export default EnhancedInnovativeServicesShowcase2027;
import React, { useState } from 'react';
import { motion   } from 'framer-motion';
import { Link   } from 'react-router-dom';
import { Brain, 
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
  Server,
  Scale,
  Truck,
  Target,
  Building,
  Home,
  Lock,
  Wrench,
  FileText,
  Video,
  Mic,
  Camera,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Calendar,
  Clock,
  BarChart3,
  Target,
  Users,
  Check,
  X
  } from 'lucide-react';
import { SEO   } from '@/components/SEO';
import { Button   } from '@/components/ui/button';
import { Badge   } from '@/components/ui/badge';
import { revolutionaryMicroSaasServices2028, 
  revolutionaryITInfrastructureServices2028, 
  revolutionaryAIServices2028 
  } from '@/data/innovativeMicroSaasServices2028';

export default function InnovativeServicesShowcase2028(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const allServices = [
    ...revolutionaryMicroSaasServices2028.map(s => ({ ...s, type: any'Micro SaaS' })),
    ...revolutionaryITInfrastructureServices2028.map(s   => ({ ...s, type: any'IT Infrastructure' })),
    ...revolutionaryAIServices2028.map(s   => ({ ...s, type: 'AI Services' }))
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  const filteredServices = selectedCategory === 'all' 
    ? allServices: anyallServices.filter(s   => s.type === selectedCategory);

  const getCategoryIcon = (category: string)   => {
    switch (category) {
      case 'Legal Tech': return Scale;
      case 'Supply Chain': return Truck;
      case 'Marketing Tech': return Target;
      case 'HR Tech': return Users;
      case 'Sustainability': return Globe;
      case 'Real Estate Tech': return Home;
      case 'Cybersecurity': return Shield;
      case 'Industrial IoT': return Wrench;
      case 'Cloud Computing': return Cloud;
      case 'Content Creation': return FileText;
      case 'Healthcare AI': return Heart;
      default: return Rocket;
    }
  };

  const getCategoryColor = (category: string)   => {
    const colors = [
      'from-blue-600 to-cyan-600',
      'from-purple-600 to-pink-600',
      'from-green-600 to-emerald-600',
      'from-red-600 to-orange-600',
      'from-indigo-600 to-purple-600',
      'from-yellow-600 to-orange-600',
      'from-teal-600 to-blue-600',
      'from-pink-600 to-red-600'
    ];
    return colors[Math.abs(category.length) % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2028 | Zion Tech Group"
        description="Discover our cutting-edge AI, blockchain, quantum computing, and emerging technology services. Transform your business with innovative solutions."
        keywords="AI services, blockchain, quantum computing, metaverse, edge computing, autonomous systems, digital twin, space technology"
      />

      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovative Services
            </span>
            <br />
            <span className="text-white">Showcase 2028</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover cutting-edge AI, blockchain, quantum computing, and emerging technology services 
            that will transform your business and drive innovation in 2028 and beyond.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              size="lg"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Filter our innovative services by category to find the perfect solution for your business needs
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg scale-105'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-section" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'All Services' : selectedCategory}
            </h2>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              Discover our revolutionary solutions designed to transform your business operations and drive growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index)   => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                    {service.type}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Category:</span>
                    <span className="text-white font-medium">{service.category}</span>
                  </div>
                  
                  {service.pricing && (
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Pricing:</span>
                      <span className="text-white font-medium">{service.pricing}</span>
                    </div>
                  )}

                  {service.price && (
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Price:</span>
                      <span className="text-zion-cyan font-bold">${service.price.toLocaleString()}</span>
                    </div>
                  )}

                  {service.hourlyRate && (
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Hourly Rate:</span>
                      <span className="text-zion-cyan font-bold">${service.hourlyRate}/hr</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Market Price:</span>
                    <span className="text-white font-medium">{service.marketPrice}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">ROI:</span>
                    <span className="text-green-400 font-medium">{service.roi}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white"
                  onClick={() => setSelectedService(service)}
                >
                  View Details
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zion-blue-dark border border-zion-cyan/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(selectedService.category)}`}>
                    {React.createElement(getCategoryIcon(selectedService.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedService.name}</h2>
                    <p className="text-zion-slate-light">{selectedService.category}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zion-slate-light hover:text-white"
                  onClick={() => setSelectedService(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                  <p className="text-zion-slate-light mb-6">{selectedService.description}</p>

                  <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Pricing & Details</h3>
                    <div className="space-y-3">
                      {selectedService.price && (
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Price:</span>
                          <span className="text-zion-cyan font-bold">${selectedService.price.toLocaleString()}</span>
                        </div>
                      )}
                      {selectedService.hourlyRate && (
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Hourly Rate:</span>
                          <span className="text-zion-cyan font-bold">${selectedService.hourlyRate}/hr</span>
                        </div>
                      )}
                      {selectedService.projectRate && (
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Project Rate:</span>
                          <span className="text-zion-cyan font-bold">${selectedService.projectRate.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Market Price:</span>
                        <span className="text-white font-medium">{selectedService.marketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">ROI:</span>
                        <span className="text-green-400 font-medium">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Setup Time:</span>
                        <span className="text-white font-medium">{selectedService.setupTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Target Audience</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.targetAudience.map((audience, index) => (
                        <Badge key={index} variant="secondary" className="bg-zion-cyan/20 text-zion-cyan">
                          {audience}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {selectedService.integrations && (
                    <div className="bg-white/5 rounded-lg p-4 mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Integrations</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.integrations.map((integration, index) => (
                          <Badge key={index} variant="outline" className="border-zion-cyan/30 text-zion-cyan">
                            {integration}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Market Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Market Size:</span>
                        <span className="text-white">{selectedService.marketSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Growth Rate:</span>
                        <span className="text-green-400">{selectedService.growthRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Innovation Level:</span>
                        <span className="text-zion-cyan">{selectedService.innovationLevel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light">
                  Get Started
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  Request Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex-shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Innovation Level Filter */}
            <div className="flex-shrink-0">
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {innovationLevels.map(level => (
                  <option key={level} value={level} className="bg-slate-800 text-white">
                    {level}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="flex-shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="name" className="bg-slate-800 text-white">Sort by Name</option>
                <option value="price" className="bg-slate-800 text-white">Sort by Price</option>
                <option value="roi" className="bg-slate-800 text-white">Sort by ROI</option>
                <option value="innovation" className="bg-slate-800 text-white">Sort by Innovation</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex-shrink-0">
              <div className="flex bg-white/10 rounded-xl p-1 border border-white/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="container mx-auto px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover {filteredServices.length} Innovative Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From AI-powered solutions to cutting-edge emerging technologies
          </motion.p>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="group"
                variants={itemVariants}
                whileHover="hover"
                custom={index}
              >
                <motion.div
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 h-full"
                  variants={cardVariants}
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {React.createElement(getCategoryIcon(service.category), {
                          className: "w-5 h-5 text-cyan-400"
                        })}
                        <span className="text-xs text-gray-400 uppercase tracking-wider">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)} text-white`}>
                      {service.innovationLevel}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Price and ROI */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">ROI</div>
                      <div className="text-lg font-bold text-green-400">{service.roi}</div>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Phone className="w-4 h-4" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <a
                        href={`mailto:${service.contactInfo.email}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-4">
                    <a
                      href={`/services/${service.id}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover="hover"
                custom={index}
              >
                <motion.div
                  className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300"
                  variants={cardVariants}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Service Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {React.createElement(getCategoryIcon(service.category), {
                              className: "w-5 h-5 text-cyan-400"
                            })}
                            <span className="text-xs text-gray-400 uppercase tracking-wider">
                              {service.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 mb-4">
                            {service.description}
                          </p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)} text-white`}>
                          {service.innovationLevel}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and Actions */}
                    <div className="lg:w-80 flex flex-col justify-between">
                      <div>
                        {/* Price and ROI */}
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-cyan-400 mb-1">
                            ${service.price.toLocaleString()}
                            <span className="text-sm text-gray-400 font-normal">/month</span>
                          </div>
                          <div className="text-sm text-gray-400">ROI</div>
                          <div className="text-xl font-bold text-green-400">{service.roi}</div>
                        </div>

                        {/* Market Info */}
                        <div className="bg-white/5 rounded-xl p-4 mb-4">
                          <div className="text-sm text-gray-400 mb-2">Market Size</div>
                          <div className="text-white font-semibold">{service.marketSize}</div>
                          <div className="text-sm text-gray-400 mt-2">Delivery</div>
                          <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                        </div>
                      </div>

                      {/* Contact and Action */}
                      <div>
                        <div className="border-t border-white/10 pt-4 mb-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <div className="flex items-center gap-2 text-gray-400">
                              <Phone className="w-4 h-4" />
                              <span>{service.contactInfo.phone}</span>
                            </div>
                            <a
                              href={`mailto:${service.contactInfo.email}`}
                              className="text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <Mail className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                        <a
                          href={`/services/${service.id}`}
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                        >
                          Learn More
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedInnovationLevel('All');
              }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Connect with our team of experts to discuss how our innovative services can drive your business forward in 2028 and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
            >
              Get Started Today
            </a>
            <a
              href="/pricing"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg border border-white/20"
            >
              View Pricing
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InnovativeServicesShowcase2028;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Star, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Cpu,
  Lock,
  Heart,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Workflow,
  Atom,
  Target,
  Award,
  Code,
  Truck,
  Building,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  PanelLeft,
  Search,
  Filter,
  Grid,
  List,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronDown,
  ExternalLink,
  X,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { REVOLUTIONARY_MICRO_SAAS_SERVICES_2030 } from '../data/revolutionaryMicroSaasServices2030';

export default function InnovativeServicesShowcase2030() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const categories = ['All', 'AI & Analytics', 'Cybersecurity', 'Healthcare', 'Finance', 'Supply Chain', 'Marketing', 'Sales', 'Compliance', 'Cloud', 'IoT & Edge', 'Blockchain', 'Quantum Computing'];

  const filteredServices = REVOLUTIONARY_MICRO_SAAS_SERVICES_2030.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const togglePlayPause = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Analytics': Brain,
      'Cybersecurity': Shield,
      'Healthcare': Heart,
      'Finance': DollarSign,
      'Supply Chain': Truck,
      'Marketing': PenTool,
      'Sales': TrendingUp,
      'Compliance': Lock,
      'Cloud': Cloud,
      'IoT & Edge': Cpu,
      'Blockchain': Network,
      'Quantum Computing': Atom
    };
    return iconMap[category] || Globe;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Analytics': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Healthcare': 'from-green-500 to-emerald-500',
      'Finance': 'from-blue-500 to-cyan-500',
      'Supply Chain': 'from-indigo-500 to-purple-500',
      'Marketing': 'from-pink-500 to-rose-500',
      'Sales': 'from-yellow-500 to-orange-500',
      'Compliance': 'from-gray-500 to-slate-500',
      'Cloud': 'from-cyan-500 to-blue-500',
      'IoT & Edge': 'from-emerald-500 to-teal-500',
      'Blockchain': 'from-violet-500 to-purple-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-20 pb-16"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Revolutionary Services 2030
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Next-Generation
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Micro SAAS Solutions
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
            >
              Discover our revolutionary micro SAAS services that combine cutting-edge AI, 
              advanced technology, and innovative solutions to transform your business operations.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { label: "Services", value: REVOLUTIONARY_MICRO_SAAS_SERVICES_2030.length.toString() },
                { label: "Categories", value: categories.length.toString() },
                { label: "AI Score", value: "98+" },
                { label: "ROI", value: "800%" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Controls Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
        >
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
                      : 'bg-slate-700/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
                      : 'bg-slate-700/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Audio Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={togglePlayPause}
                  className="p-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-gray-400 hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-gray-400 hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
        >
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                        {React.createElement(getCategoryIcon(service.category), { className: "w-3 h-3 mr-2" })}
                        {service.category}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                      </div>
                    </div>

                    {/* Service Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-cyan-400">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      {/* Service Icon */}
                      <div className={`w-20 h-20 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        {React.createElement(getCategoryIcon(service.category), { className: "w-10 h-10 text-white" })}
                      </div>

                      {/* Service Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-3">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                            {React.createElement(getCategoryIcon(service.category), { className: "w-3 h-3 mr-2" })}
                            {service.category}
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-300">{service.rating}</span>
                            </div>
                            <div className="text-2xl font-bold text-cyan-400">
                              ${service.price.toLocaleString()}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <span>AI Score: {service.aiScore}%</span>
                            <span>Setup: {service.setupTime}</span>
                            <span>ROI: {service.roi}</span>
                          </div>
                          <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-lg">
                No services found matching your criteria.
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(selectedService.category)} text-white mb-4`}>
                      {React.createElement(getCategoryIcon(selectedService.category), { className: "w-4 h-4 mr-2" })}
                      {selectedService.category}
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{selectedService.title}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="ml-6 p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    {/* Tags */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Features & Capabilities</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.tags.map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
                      <div className="space-y-2 text-gray-300">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>{selectedService.contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>{selectedService.contactInfo.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{selectedService.contactInfo.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    {/* Pricing & ROI */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Investment & Returns</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Price:</span>
                          <span className="text-2xl font-bold text-cyan-400">${selectedService.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Market Price:</span>
                          <span className="text-gray-300">{selectedService.marketPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">ROI:</span>
                          <span className="text-green-400 font-semibold">{selectedService.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Setup Time:</span>
                          <span className="text-gray-300">{selectedService.setupTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Competitors */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Competitive Landscape</h3>
                      <div className="space-y-2">
                        {selectedService.competitors.map((competitor: string, index: number) => (
                          <div key={index} className="text-gray-300 text-sm">
                            • {competitor}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                      <a
                        href={selectedService.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                      >
                        <span className="flex items-center gap-2">
                          Get Started
                          <ExternalLink className="w-5 h-5" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
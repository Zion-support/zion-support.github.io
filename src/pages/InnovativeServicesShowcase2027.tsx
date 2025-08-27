import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Rocket, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Atom, 
  Dna, 
  Network, 
  Lock, 
  Search,
  Filter,
  Grid3X3,
  List,
  ChevronDown,
  Star,
  CheckCircle,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Users,
  Target,
  Lightbulb,
  Code,
  BarChart3,
  Eye,
  Handshake,
  Building,
  Globe2,
  ShieldCheck,
  Network2,
  Smartphone as Mobile,
  Server as Infrastructure,
  Monitor as Analytics,
  Zap as Lightning,
  Users2,
  Award as Trophy,
  Clock as Time,
  DollarSign as Money,
  TrendingUp as Growth,
  Eye as Vision,
  Handshake as Partnership,
  Building as Enterprise,
  Sparkles,
  Orbit,
  Microscope,
  BrainCircuit,
  Quantum,
  Space,
  Biohazard,
  Nanotech,
  Neural,
  Robot
} from 'lucide-react';
import { innovativeServices2027, serviceCategories2027, getServicesByCategory } from '@/data/innovativeServices2027';
import { SEO } from '@/components/SEO';

interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  price: string;
  aiScore: number;
  technology: string[];
  useCases: string[];
  benefits: string[];
  implementation: string;
  support: string;
  rating: number;
  reviews: number;
  launchDate: string;
  status: 'active' | 'beta' | 'coming-soon';
  website: string;
  contactInfo: string;
}

const categoryIcons: { [key: string]: any } = {
  'Quantum AI': Quantum,
  'Autonomous AI': BrainCircuit,
  'Quantum Finance': DollarSign,
  'Space Technology': Space,
  'Biotechnology': Biohazard,
  'Quantum Security': Shield,
  'Nanotechnology': Nanotech,
  'Neural Technology': Neural,
  'Quantum Medicine': Brain,
  'Autonomous Systems': Robot
};

const categoryColors: { [key: string]: string } = {
  'Quantum AI': 'from-purple-600 via-pink-600 to-cyan-500',
  'Autonomous AI': 'from-blue-600 via-cyan-600 to-teal-500',
  'Quantum Finance': 'from-green-600 via-emerald-600 to-teal-500',
  'Space Technology': 'from-indigo-600 via-purple-600 to-pink-500',
  'Biotechnology': 'from-red-600 via-pink-600 to-purple-500',
  'Quantum Security': 'from-orange-600 via-red-600 to-pink-500',
  'Nanotechnology': 'from-yellow-600 via-orange-600 to-red-500',
  'Neural Technology': 'from-violet-600 via-purple-600 to-indigo-500',
  'Quantum Medicine': 'from-cyan-600 via-blue-600 to-indigo-500',
  'Autonomous Systems': 'from-teal-600 via-cyan-600 to-blue-500'
};

export default function InnovativeServicesShowcase2027() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'aiScore'>('aiScore');

  const filteredServices = getServicesByCategory(selectedCategory).filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'aiScore':
        return b.aiScore - a.aiScore;
      default:
        return 0;
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500 text-white';
      case 'beta':
        return 'bg-yellow-500 text-black';
      case 'coming-soon':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Live';
      case 'beta':
        return 'Beta';
      case 'coming-soon':
        return 'Coming Soon';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2027 | Zion Tech Group"
        description="Discover our cutting-edge 2027 innovative services including Quantum AI, Autonomous Systems, Space Technology, Biotechnology, and more. Transform your business with next-generation technology solutions."
        keywords="innovative services 2027, quantum AI, autonomous systems, space technology, biotechnology, nanotechnology, neural technology, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-zion-slate via-zion-purple to-zion-cyan py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-slate/80 via-zion-purple/80 to-zion-cyan/80"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                Innovative Services
              </span>
              <br />
              <span className="text-4xl md:text-6xl text-zion-neon-glow">2027</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-neon-light mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our cutting-edge micro SAAS services, 
              AI solutions, and revolutionary platforms that will transform your business
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-zion-neon-light">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 text-zion-cyan/20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Quantum className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-zion-purple/20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Brain className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-1/3 text-zion-neon/20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Rocket className="w-16 h-16" />
        </motion.div>
      </motion.div>

      {/* Controls Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zion-neon/20">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-neon/60 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-zion-neon/30 rounded-xl text-white placeholder-zion-neon/60 focus:outline-none focus:border-zion-neon focus:ring-2 focus:ring-zion-neon/20 transition-all"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-zion-neon/30 rounded-xl text-white focus:outline-none focus:border-zion-neon focus:ring-2 focus:ring-zion-neon/20 transition-all"
              >
                {serviceCategories2027.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* View Mode and Sort */}
            <div className="flex items-center gap-4">
              <div className="flex bg-slate-700/50 rounded-xl p-1 border border-zion-neon/30">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-zion-neon text-slate-900' 
                      : 'text-zion-neon/60 hover:text-zion-neon'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'list' 
                      ? 'bg-zion-neon text-slate-900' 
                      : 'text-zion-neon/60 hover:text-zion-neon'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 bg-slate-700/50 border border-zion-neon/30 rounded-xl text-white focus:outline-none focus:border-zion-neon focus:ring-2 focus:ring-zion-neon/20 transition-all"
              >
                <option value="aiScore">Sort by AI Score</option>
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${viewMode}-${sortBy}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-6'
            }
          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-zion-neon/20 overflow-hidden hover:border-zion-neon/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-neon/20 ${
                  viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                }`}
              >
                {/* Service Header */}
                <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryColors[service.category] || 'from-gray-600 to-gray-700'}`}>
                        {React.createElement(categoryIcons[service.category] || Brain, { className: 'w-6 h-6 text-white' })}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                        <span className="text-zion-neon/80 text-sm">{service.category}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                      {getStatusText(service.status)}
                    </span>
                  </div>
                  
                  <p className="text-zion-neon/80 mb-4 line-clamp-3">{service.description}</p>
                  
                  {/* AI Score and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-zion-cyan" />
                      <span className="text-zion-cyan font-semibold">AI Score: {service.aiScore}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white">{service.rating}</span>
                      <span className="text-zion-neon/60">({service.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className={`p-6 bg-slate-700/30 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                  {/* Price and Launch Date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-zion-neon">{service.price}</div>
                    <div className="text-zion-neon/60 text-sm">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {new Date(service.launchDate).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-zion-purple" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-neon/80">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4 text-zion-cyan" />
                      Technology
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technology.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zion-neon/10 border border-zion-neon/20 rounded-lg text-xs text-zion-neon">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      Benefits
                    </h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="text-sm text-zion-neon/80 line-clamp-2">
                          • {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-zion-neon to-zion-cyan text-slate-900 font-semibold rounded-xl hover:from-zion-cyan hover:to-zion-neon transition-all duration-300 transform hover:scale-105"
                    >
                      <Eye className="w-4 h-4" />
                      View Service
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${service.contactInfo.split(' | ')[0]}?subject=Inquiry about ${service.name}`}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700/50 border border-zion-neon/30 text-zion-neon rounded-xl hover:bg-zion-neon/10 hover:border-zion-neon transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-zion-neon/60 text-xl mb-4">No services found</div>
            <p className="text-zion-neon/40">Try adjusting your search criteria or category selection</p>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="bg-gradient-to-r from-zion-slate via-zion-purple to-zion-cyan py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-neon-light mb-8 max-w-3xl mx-auto">
            Our innovative services are designed to give you a competitive edge in the rapidly evolving technology landscape. 
            Let's discuss how we can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Innovative Services Consultation"
              className="px-8 py-4 bg-zion-neon text-slate-900 font-semibold rounded-xl hover:bg-zion-cyan transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 bg-slate-700/50 border border-zion-neon/30 text-zion-neon font-semibold rounded-xl hover:bg-zion-neon/10 hover:border-zion-neon transition-all duration-300"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
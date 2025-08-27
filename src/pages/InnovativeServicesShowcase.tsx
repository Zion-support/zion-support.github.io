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
            </div>
          </div>
        </div>
      </motion.div>

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
              </select>
            </div>
            <div className="text-zion-slate-light">
              Showing <span className="text-zion-cyan font-semibold">{sortedServices.length}</span> of {CUTTING_EDGE_INNOVATIONS_2025.length} services
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
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
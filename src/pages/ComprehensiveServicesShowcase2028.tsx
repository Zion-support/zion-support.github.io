import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Lock,
  Cloud,
  Shield,
  Users,
  Database,
  Network,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Rocket,
  Target,
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Clock,
  BarChart3,
  Cpu,
  Palette,
  Heart,
  Building2,
  Car,
  Plane,
  Ship,
  Train,
  Leaf,
  Sun,
  Wind,
  Droplets,
  Atom,
  Dna,
  Microscope,
  Stethoscope,
  Pill,
  Syringe,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  HeartPulse,
  Activity,
  Zap,
  Flash,
  Sparkles,
  Infinity,
  Layers,
  GitBranch,
  Code,
  Bug,
  TestTube,
  Flask,
  Beaker,
  Microscope,
  Telescope,
  Satellite,
  Rocket,
  Planet,
  Moon,
  Sun,
  Star,
  Galaxy,
  Universe,
  Earth,
  Globe,
  Map,
  Compass,
  Navigation,
  Route,
  Path,
  Way,
  Road,
  Street,
  Highway,
  Bridge,
  Tunnel,
  Gate,
  Door,
  Window,
  Wall,
  House,
  Building,
  Factory,
  Warehouse,
  Office,
  Shop,
  Store,
  Market,
  Mall,
  Plaza,
  Square,
  Park,
  Garden,
  Forest,
  Mountain,
  River,
  Ocean,
  Sea,
  Lake,
  Pond,
  Stream,
  Waterfall,
  Beach,
  Island,
  Desert,
  Jungle,
  Savannah,
  Tundra,
  Arctic,
  Antarctic,
  Space,
  Time,
  Calendar,
  Clock,
  Watch,
  Timer,
  Stopwatch,
  Hourglass,
  Sand,
  Water,
  Fire,
  Air,
  Earth,
  Metal,
  Wood,
  Stone,
  Crystal,
  Diamond,
  Gold,
  Silver,
  Bronze,
  Iron,
  Steel,
  Aluminum,
  Copper,
  Zinc,
  Lead,
  Mercury,
  Uranium,
  Plutonium,
  Hydrogen,
  Helium,
  Carbon,
  Nitrogen,
  Oxygen,
  Fluorine,
  Neon,
  Sodium,
  Magnesium,
  Silicon,
  Phosphorus,
  Sulfur,
  Chlorine,
  Argon,
  Potassium,
  Calcium,
  Scandium,
  Titanium,
  Vanadium,
  Chromium,
  Manganese,
  Cobalt,
  Nickel,
  Copper,
  Zinc,
  Gallium,
  Germanium,
  Arsenic,
  Selenium,
  Bromine,
  Krypton,
  Rubidium,
  Strontium,
  Yttrium,
  Zirconium,
  Niobium,
  Molybdenum,
  Technetium,
  Ruthenium,
  Rhodium,
  Palladium,
  Silver,
  Cadmium,
  Indium,
  Tin,
  Antimony,
  Tellurium,
  Iodine,
  Xenon,
  Cesium,
  Barium,
  Lanthanum,
  Cerium,
  Praseodymium,
  Neodymium,
  Promethium,
  Samarium,
  Europium,
  Gadolinium,
  Terbium,
  Dysprosium,
  Holmium,
  Erbium,
  Thulium,
  Ytterbium,
  Lutetium,
  Hafnium,
  Tantalum,
  Tungsten,
  Rhenium,
  Osmium,
  Iridium,
  Platinum,
  Gold,
  Mercury,
  Thallium,
  Lead,
  Bismuth,
  Polonium,
  Astatine,
  Radon,
  Francium,
  Radium,
  Actinium,
  Thorium,
  Protactinium,
  Uranium,
  Neptunium,
  Plutonium,
  Americium,
  Curium,
  Berkelium,
  Californium,
  Einsteinium,
  Fermium,
  Mendelevium,
  Nobelium,
  Lawrencium,
  Rutherfordium,
  Dubnium,
  Seaborgium,
  Bohrium,
  Hassium,
  Meitnerium,
  Darmstadtium,
  Roentgenium,
  Copernicium,
  Nihonium,
  Flerovium,
  Moscovium,
  Livermorium,
  Tennessine,
  Oganesson
} from 'lucide-react';

// Import all service data
import { INNOVATIVE_SERVICES_2028 } from '../data/innovativeServices2028';
import { EMERGING_TECH_SERVICES_2028 } from '../data/emergingTechInnovativeServices2028';
import { FINANCIAL_AI_SERVICES_2028 } from '../data/specializedFinancialAIServices2028';
import { HEALTHCARE_AI_SERVICES_2028 } from '../data/specializedHealthcareAIServices2028';
import { BLOCKCHAIN_WEB3_SERVICES_2028 } from '../data/specializedBlockchainWeb3Services2028';

// Combine all services
const ALL_SERVICES_2028 = [
  ...INNOVATIVE_SERVICES_2028,
  ...EMERGING_TECH_SERVICES_2028,
  ...FINANCIAL_AI_SERVICES_2028,
  ...HEALTHCARE_AI_SERVICES_2028,
  ...BLOCKCHAIN_WEB3_SERVICES_2028
];

// Service categories
const SERVICE_CATEGORIES = [
  {
    id: 'all',
    name: 'All Services',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    count: ALL_SERVICES_2028.length
  },
  {
    id: 'ai-enterprise',
    name: 'AI & Enterprise',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    count: ALL_SERVICES_2028.filter(s => s.category.includes('AI') || s.category.includes('Enterprise')).length
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    icon: Atom,
    color: 'from-indigo-500 to-purple-500',
    count: ALL_SERVICES_2028.filter(s => s.category.includes('Quantum')).length
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    count: ALL_SERVICES_2028.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Security')).length
  },
  {
    id: 'healthcare',
    name: 'Healthcare Technology',
    icon: HeartPulse,
    color: 'from-green-500 to-emerald-500',
    count: ALL_SERVICES_2028.filter(s => s.category.includes('Healthcare')).length
  },
  {
    id: 'financial',
    name: 'Financial Technology',
    icon: DollarSign,
    color: 'from-yellow-500 to-orange-500',
    count: ALL_SERVICES_2028.filter(s => s.category.includes('Financial')).length
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    icon: GitBranch,
    color: 'from-blue-600 to-indigo-600',
    count: ALL_SERVICES_2028.filter(s => s.category.includes('Blockchain') || s.category.includes('DeFi') || s.category.includes('NFT')).length
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Technology',
    icon: Rocket,
    color: 'from-pink-500 to-red-500',
    count: ALL_SERVICES_2028.filter(s => s.category.includes('Emerging') || s.category.includes('Neuromorphic') || s.category.includes('DNA')).length
  }
];

// Pricing tiers
const PRICING_TIERS = [
  {
    id: 'all',
    name: 'All Prices',
    range: 'All pricing options'
  },
  {
    id: 'budget',
    name: 'Budget',
    range: 'Under $15,000/month'
  },
  {
    id: 'mid-range',
    name: 'Mid-Range',
    range: '$15,000 - $30,000/month'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    range: 'Over $30,000/month'
  }
];

// Contact information
const CONTACT_INFO = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  website: 'https://ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

export default function ComprehensiveServicesShowcase2028() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [expandedService, setExpandedService] = useState<any>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredServices = ALL_SERVICES_2028.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      SERVICE_CATEGORIES.find(cat => cat.id === selectedCategory)?.name.includes(service.category) ||
      service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesPricing = selectedPricing === 'all' ||
      (selectedPricing === 'budget' && service.price < 15000) ||
      (selectedPricing === 'mid-range' && service.price >= 15000 && service.price <= 30000) ||
      (selectedPricing === 'enterprise' && service.price > 30000);
    
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesPricing && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'roi':
        return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
      case 'name':
        return a.title.localeCompare(b.title);
      case 'innovation':
        const innovationOrder = { 'revolutionary': 3, 'cutting-edge': 2, 'advanced': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.name === categoryName);
    if (!category) return Globe;
    return category.icon;
  };

  const getCategoryColor = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.name === categoryName);
    return category?.color || 'from-blue-500 to-cyan-500';
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center py-16 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Zion Tech Group
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Comprehensive Micro SAAS Services & Solutions 2028
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              {ALL_SERVICES_2028.length}+ Innovative Services
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              Cutting-Edge Technology
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              High ROI Solutions
            </div>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or use cases..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
              >
                <Filter className="w-5 h-5" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
                <option value="innovation">Sort by Innovation Level</option>
              </select>
            </div>

            {/* Expanded Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-white/20"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Categories */}
                    <div>
                      <h3 className="text-white font-semibold mb-3">Categories</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {SERVICE_CATEGORIES.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`p-2 rounded-lg text-sm transition-colors ${
                              selectedCategory === category.id
                                ? 'bg-blue-600 text-white'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <category.icon className="w-4 h-4" />
                              {category.name}
                            </div>
                            <div className="text-xs opacity-75">{category.count}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div>
                      <h3 className="text-white font-semibold mb-3">Pricing Tiers</h3>
                      <div className="space-y-2">
                        {PRICING_TIERS.map((tier) => (
                          <button
                            key={tier.id}
                            onClick={() => setSelectedPricing(tier.id)}
                            className={`w-full p-3 rounded-lg text-left transition-colors ${
                              selectedPricing === tier.id
                                ? 'bg-blue-600 text-white'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                            }`}
                          >
                            <div className="font-medium">{tier.name}</div>
                            <div className="text-sm opacity-75">{tier.range}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-gray-400">
              {selectedCategory !== 'all' && `Filtered by: ${SERVICE_CATEGORIES.find(c => c.id === selectedCategory)?.name}`}
              {selectedPricing !== 'all' && ` • ${PRICING_TIERS.find(p => p.id === selectedPricing)?.name}`}
              {searchTerm && ` • Search: "${searchTerm}"`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                      {React.createElement(getCategoryIcon(service.category), { className: 'w-5 h-5 text-white' })}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{formatPrice(service.price)}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Service Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <BarChart3 className="w-4 h-4" />
                    ROI: <span className="text-green-400 font-semibold">{service.roi}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    Delivery: <span className="text-blue-400">{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Target className="w-4 h-4" />
                    Level: <span className="text-purple-400 capitalize">{service.innovationLevel}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-lg">
                      +{service.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setExpandedService(expandedService?.id === service.id ? null : service)}
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    {expandedService?.id === service.id ? 'Show Less' : 'Learn More'}
                  </button>
                  <a
                    href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${service.title}`}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>

                {/* Expanded Service Details */}
                <AnimatePresence>
                  {expandedService?.id === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-white/20"
                    >
                      <div className="space-y-4">
                        {/* Features */}
                        <div>
                          <h4 className="text-white font-semibold mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 5).map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="text-white font-semibold mb-2">Benefits</h4>
                          <ul className="space-y-1">
                            {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start gap-2 text-sm text-gray-300">
                                <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Market Info */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Market Size:</span>
                            <div className="text-white font-medium">{service.marketSize}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Support Level:</span>
                            <div className="text-white font-medium capitalize">{service.supportLevel}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto px-4 mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Get in touch with our team to discuss how our innovative services can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {CONTACT_INFO.phone}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
              >
                <Mail className="w-5 h-5" />
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="mt-6 text-blue-100">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                {CONTACT_INFO.address}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/20 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400">
                © 2028 Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-gray-400">
                <a href={CONTACT_INFO.website} className="hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
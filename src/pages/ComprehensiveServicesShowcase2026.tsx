import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cpu, 
  Network,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
<<<<<<< HEAD
import { SEO } from '../components/SEO';
import { 
  revolutionaryMicroSaasServices2026,
  revolutionaryITInfrastructureServices2026,
  revolutionaryAIServices2026,
  ALL_REVOLUTIONARY_SERVICES_2026
} from '../data/comprehensiveServices2026';

const ComprehensiveServicesShowcase2026: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');

  const categories = ['all', ...Array.from(new Set(ALL_REVOLUTIONARY_SERVICES_2026.map(s => s.category)))];
  const innovationLevels = ['all', ...Array.from(new Set(ALL_REVOLUTIONARY_SERVICES_2026.map(s => s.innovationLevel)))];

  const filteredServices = useMemo(() => {
    let filtered = ALL_REVOLUTIONARY_SERVICES_2026;
    
    if (searchTerm) {
      const lowerQuery = searchTerm.toLowerCase();
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        service.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (selectedInnovationLevel !== 'all') {
      filtered = filtered.filter(service => service.innovationLevel === selectedInnovationLevel);
    }
    
    return filtered;
  }, [searchTerm, selectedCategory, selectedInnovationLevel]);

=======
import { SEO } from "@/components/SEO";
import { INNOVATIVE_NEW_SERVICES_2026, SERVICE_CATEGORIES_2026, PRICING_TIERS_2026, CONTACT_INFO_2026 } from "@/data/innovativeNewServices2026";
import { SPECIALIZED_IT_SERVICES_2026, IT_SERVICE_CATEGORIES_2026 } from "@/data/specializedITServices2026";
import { ADVANCED_AI_SERVICES_2026, AI_SERVICE_CATEGORIES_2026 } from "@/data/advancedAIServices2026";
export default function ComprehensiveServicesShowcase2026() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedServiceType, setSelectedServiceType] = useState('all');
  // Combine all services
  const allServices = [
    ...INNOVATIVE_NEW_SERVICES_2026,
    ...SPECIALIZED_IT_SERVICES_2026,
    ...ADVANCED_AI_SERVICES_2026
  ];
  // Service types for filtering
  const serviceTypes = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'innovative', name: 'Innovative Services', icon: Rocket, color: 'from-zion-purple to-zion-pink' },
    { id: 'it', name: 'IT Services', icon: Server, color: 'from-zion-blue to-zion-cyan' },
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'from-zion-green to-zion-blue' }
  ];
  // Price ranges
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$100 - $1,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$1,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$5,000+' }
  ];
  // Sort options
  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' }
  ];
  // Filter and sort services
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 5000);
    
    const matchesServiceType = selectedServiceType === 'all' || 
                              (selectedServiceType === 'innovative' && INNOVATIVE_NEW_SERVICES_2026.includes(service)) ||
                              (selectedServiceType === 'it' && SPECIALIZED_IT_SERVICES_2026.includes(service)) ||
                              (selectedServiceType === 'ai' && ADVANCED_AI_SERVICES_2026.includes(service));
    
    return matchesSearch && matchesCategory && matchesPrice && matchesServiceType;
  });
  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.createdAt || '2026-01-01').getTime() - new Date(a.createdAt || '2026-01-01').getTime();
      default:
        return 0;
    }
  });
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Quantum Computing': return <Cpu className="w-5 h-5" />;
      case 'Neural Networks': return <Brain className="w-5 h-5" />;
      case 'Blockchain Development': return <Shield className="w-5 h-5" />;
      case 'Quantum Computing Infrastructure': return <Cpu className="w-5 h-5" />;
      case 'Edge Computing': return <Network className="w-5 h-5" />;
      case 'Autonomous Systems': return <Brain className="w-5 h-5" />;
      case 'Quantum AI': return <Zap className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };
<<<<<<< HEAD

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Breakthrough': return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Advanced': return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default: return 'bg-gray-600';
    }
=======
  const getCategoryColor = (category: string) => {
    const cat = SERVICE_CATEGORIES_2026.find(c => c.id === category.toLowerCase().replace(' ', '-')) ||
                IT_SERVICE_CATEGORIES_2026.find(c => c.id === category.toLowerCase().replace(' ', '-')) ||
                AI_SERVICE_CATEGORIES_2026.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
  };
  return (
<>
      <SEO 
        title="Revolutionary Services 2026 - Zion Tech Group"
        description="Discover Zion Tech Group's revolutionary 2026 micro SAAS, IT infrastructure, and AI services. Quantum computing, edge AI, autonomous agents, and more."
        keywords="quantum computing, edge AI, autonomous AI, blockchain, micro SAAS, IT services, AI services, 2026, Zion Tech Group"
      />
      
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
=======
      {/* Hero Section */}
      <section className="bg-futuristic min-h-[70vh] flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-zion-green rounded-full animate-pulse delay-1500"></div>
        </div>
        <div className="container-responsive relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-responsive font-bold mb-6">
              <span className="text-gradient">Comprehensive Services</span>
              <br />
              <span className="text-white">Showcase 2026</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Discover our comprehensive collection of innovative micro SAAS services, cutting-edge IT solutions, 
              and revolutionary AI platforms. Transform your business with the future of technology.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
              </div>
            </div>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
                <div className="text-zion-slate-light">Total Services</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-zion-purple mb-2">12</div>
                <div className="text-zion-slate-light">Categories</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-zion-green mb-2">24/7</div>
                <div className="text-zion-slate-light">Support</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-zion-orange mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Filters Section */}
      <section className="py-12 bg-zion-slate-dark">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Service Type Filter */}
            <div>
              <label className="block text-zion-slate-light mb-2 font-medium">Service Type</label>
              <select
                value={selectedServiceType}
                onChange={(e) => setSelectedServiceType(e.target.value)}
                className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                {serviceTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
            {/* Category Filter */}
            <div>
              <label className="block text-zion-slate-light mb-2 font-medium">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="all">All Categories</option>
                {SERVICE_CATEGORIES_2026.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
                {IT_SERVICE_CATEGORIES_2026.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
                {AI_SERVICE_CATEGORIES_2026.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            {/* Price Range Filter */}
            <div>
              <label className="block text-zion-slate-light mb-2 font-medium">Price Range</label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.name}</option>
                ))}
              </select>
            </div>
            {/* Sort Options */}
            <div>
              <label className="block text-zion-slate-light mb-2 font-medium">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16 bg-futuristic">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Discover Our Services
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Explore our comprehensive collection of innovative services designed to transform your business
            </p>
          </div>
          {sortedServices.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                            {service.category}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30">
                            {service.pricing}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Service Description */}
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-green" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-zion-cyan">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Pricing & Benefits */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-white">${service.price.toLocaleString()}</span>
                        <span className="text-sm text-zion-slate-light">/month</span>
                      </div>
                      <div className="text-sm text-zion-slate-light mb-2">
                        Market: {service.marketPrice}
                      </div>
                      <div className="text-sm text-zion-green font-medium">
                        ROI: {service.roi}
                      </div>
                    </div>
                    {/* Contact & Actions */}
                    <div className="border-t border-zion-cyan/20 pt-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-zion-slate-light">
                          <div className="flex items-center gap-1 mb-1">
                            <Phone className="w-3 h-3" />
                            {service.contactInfo.phone}
                          </div>
                          <div className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {service.contactInfo.email}
                          </div>
                        </div>
                        <Link
                          to={service.contactInfo.website}
                          className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Get in touch with our team to discuss how our innovative services can help you achieve your goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO_2026.phone}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO_2026.email}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO_2026.address}</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg text-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 inline-flex items-center gap-2"
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
            >
              Revolutionary Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                2026
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto"
            >
              Experience the future with Zion Tech Group's cutting-edge micro SAAS, IT infrastructure, and AI services. 
              Quantum computing, edge AI, autonomous agents, and blockchain solutions that redefine what's possible.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-zinc-400"
            >
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {ALL_REVOLUTIONARY_SERVICES_2026.length} Revolutionary Services
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                Up to 1000x Performance Improvement
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Market Leading Innovation
              </span>
            </motion.div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Search and Filter Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-zinc-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

                {/* Innovation Level Filter */}
                <select
                  value={selectedInnovationLevel}
                  onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {innovationLevels.map(level => (
                    <option key={level} value={level} className="bg-zinc-800 text-white">
                      {level === 'all' ? 'All Innovation Levels' : level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <p className="text-sm text-zinc-400">{service.category}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 mb-4 line-clamp-3">{service.description}</p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-white">
                        ${'price' in service ? service.price.toLocaleString() : service.hourlyRate}
                      </span>
                      <span className="text-zinc-400">
                        /{'pricingModel' in service ? service.pricingModel : 'hour'}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400">{'marketPrice' in service ? service.marketPrice : `$${service.projectRate?.toLocaleString()}/project`}</p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                          <Zap className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-zinc-400">Market Size:</span>
                        <p className="text-white font-medium">{'marketSize' in service ? service.marketSize : 'N/A'}</p>
                      </div>
                      <div>
                        <span className="text-zinc-400">Growth Rate:</span>
                        <p className="text-white font-medium">{'growthRate' in service ? service.growthRate : 'N/A'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Target Audience</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.targetAudience.slice(0, 3).map((audience, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-white/10 pt-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-zinc-300">
                        <Phone className="w-4 h-4 text-blue-400" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <Mail className="w-4 h-4 text-green-400" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <MapPin className="w-4 h-4 text-red-400" />
                        <span className="line-clamp-1">{service.contactInfo.address}</span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <a
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-zinc-400 text-lg">No services found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedInnovationLevel('all');
                  }}
                  className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl p-12 border border-white/10"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                Join the future with Zion Tech Group's revolutionary 2026 services. 
                Get in touch to discuss how we can help you achieve quantum advantage and AI supremacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Email kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-zinc-400">
                <p>364 E Main St STE 1008 Middletown DE 19709</p>
                <p className="text-sm mt-2">Available 24/7 for enterprise clients</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
=======
        </div>
      </section>
</>
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
  );
};

export default ComprehensiveServicesShowcase2026;
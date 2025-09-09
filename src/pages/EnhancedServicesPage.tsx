import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  Search,
  Filter,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Sparkles,
  Target,
  BarChart3,
  Palette,
  Wrench,
  Lightbulb,
  Leaf,
  Wifi,
  Smartphone,
  Monitor,
  Laptop,
  Tablet
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { ENHANCED_SERVICES_2025 } from "@/data/enhancedServices2025";
import { ADDITIONAL_INNOVATIVE_SERVICES } from "@/data/additionalInnovativeServices";
import { IT_SERVICES } from "@/data/itServices";

// Combine all services
const ALL_SERVICES = [
  ...ENHANCED_SERVICES_2025,
  ...ADDITIONAL_INNOVATIVE_SERVICES,
  ...IT_SERVICES
];

export default function EnhancedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue', count: ALL_SERVICES.length },
    { id: 'ai', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('ai')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('cyber') || s.category.toLowerCase().includes('security')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('quantum')).length },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-purple to-zion-blue', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('blockchain')).length },
    { id: 'iot', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('iot') || s.category.toLowerCase().includes('edge')).length },
    { id: 'content', name: 'Content Creation', icon: Code, color: 'from-zion-orange to-zion-purple', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('content')).length },
    { id: 'hr', name: 'HR & Talent', icon: Users, color: 'from-zion-pink to-zion-purple', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('hr')).length },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf, color: 'from-zion-green to-zion-blue', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('sustainability') || s.category.toLowerCase().includes('green')).length },
    { id: 'digital-twin', name: 'Digital Twin', icon: Server, color: 'from-zion-blue to-zion-purple', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('digital twin')).length },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-zion-blue to-zion-cyan', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('cloud') || s.category.toLowerCase().includes('devops')).length },
    { id: 'data', name: 'Data & Analytics', icon: BarChart3, color: 'from-zion-purple to-zion-cyan', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('data') || s.category.toLowerCase().includes('analytics')).length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Network, color: 'from-zion-slate to-zion-cyan', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('infrastructure')).length },
    { id: 'development', name: 'Development', icon: Code, color: 'from-zion-orange to-zion-purple', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('development')).length },
    { id: 'consulting', name: 'Consulting', icon: Lightbulb, color: 'from-zion-yellow to-zion-orange', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('consulting')).length },
    { id: 'managed', name: 'Managed Services', icon: Wrench, color: 'from-zion-slate to-zion-blue', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('managed')).length },
    { id: '5g', name: '5G & IoT', icon: Wifi, color: 'from-zion-cyan to-zion-green', count: ALL_SERVICES.filter(s => s.category.toLowerCase().includes('5g')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$100 - $1,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$1,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$5,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'innovation', name: 'Innovation Level' }
  ];

  // Filter and sort services
  const filteredServices = ALL_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.createdAt || '2025-01-01').getTime() - new Date(a.createdAt || '2025-01-01').getTime();
      case 'innovation':
        const innovationOrder = { 'Cutting-edge': 3, 'Advanced': 2, 'Standard': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(/[^a-z]/g, ''));
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(/[^a-z]/g, ''));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  const getInnovationBadgeColor = (level: string) => {
    switch (level) {
      case 'Cutting-edge':
        return 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white';
      case 'Advanced':
        return 'bg-gradient-to-r from-zion-purple to-zion-blue text-white';
      default:
        return 'bg-zion-slate text-white';
    }
  };

  return (
    <>
      <SEO 
        title="Comprehensive Technology Services - Zion Tech Group"
        description="Discover our complete portfolio of innovative micro SAAS services, IT solutions, and AI-powered platforms. Transform your business with cutting-edge technology solutions."
        canonical="/enhanced-services"
        url="https://ziontechgroup.com/enhanced-services"
      />
      
      {/* Hero Section */}
      <section className="bg-futuristic min-h-[70vh] flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-40 right-40 w-16 h-16 border border-zion-cyan rounded-full animate-pulse delay-3000"></div>
        </div>

        <div className="container-responsive relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-zion-cyan mr-3" />
              <h1 className="heading-responsive font-bold">
                <span className="text-gradient">Comprehensive Technology</span>
                <br />
                <span className="text-white">Services & Solutions</span>
              </h1>
              <Sparkles className="w-8 h-8 text-zion-cyan ml-3" />
            </div>
            
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed max-w-4xl mx-auto">
              Transform your business with our complete portfolio of innovative micro SAAS services, 
              cutting-edge IT solutions, and AI-powered platforms. From quantum computing to sustainable technology, 
              discover the future of business technology.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-xl px-16 py-5 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light text-sm">
                  {filteredServices.length} services found
                </div>
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
                <div className="text-3xl font-bold text-zion-cyan mb-2">{ALL_SERVICES.length}+</div>
                <div className="text-zion-slate-light">Total Services</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-zion-purple mb-2">{categories.length}</div>
                <div className="text-zion-slate-light">Technology Categories</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-zion-blue mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime Guarantee</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-zion-green mb-2">24/7</div>
                <div className="text-zion-slate-light">Expert Support</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container-responsive">
          {/* Category Pills */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="ml-1 px-2 py-1 bg-zion-slate-light/20 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Advanced Filters */}
          <motion.div 
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-4">
              {/* Price Range Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-zion-cyan" />
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>{range.name}</option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-zion-cyan" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-1 w-4 h-4">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20'
                  }`}
                >
                  <div className="space-y-1 w-4 h-4">
                    <div className="bg-current rounded-sm h-1"></div>
                    <div className="bg-current rounded-sm h-1"></div>
                    <div className="bg-current rounded-sm h-1"></div>
                  </div>
                </button>
              </div>
            </div>

            <div className="text-zion-slate-light">
              Showing {sortedServices.length} of {ALL_SERVICES.length} services
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container-responsive">
          <AnimatePresence mode="wait">
            {sortedServices.length > 0 ? (
              <motion.div 
                className={viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className={`card-futuristic group ${
                      viewMode === 'list' ? 'flex items-start gap-6' : ''
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: viewMode === 'grid' ? -10 : 0 }}
                  >
                    {/* Service Header */}
                    <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-6'}`}>
                      <div className={`${viewMode === 'list' ? 'w-20 h-20' : 'w-12 h-12'} bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                        <getCategoryIcon(service.category) className={`${viewMode === 'list' ? 'w-10 h-10' : 'w-6 h-6'} text-white`} />
                      </div>
                    </div>

                    <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                      {/* Service Title and Price */}
                      <div className={`${viewMode === 'list' ? 'flex items-start justify-between mb-4' : 'mb-4'}`}>
                        <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                          <h3 className={`${viewMode === 'list' ? 'text-2xl' : 'text-xl'} font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors`}>
                            {service.title}
                          </h3>
                          
                          <p className="text-zion-slate-light leading-relaxed mb-4">
                            {service.description}
                          </p>
                        </div>
                        
                        <div className={`text-right ${viewMode === 'list' ? 'ml-6' : ''}`}>
                          <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                          <div className="text-sm text-zion-slate-light">per month</div>
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="space-y-4 mb-6">
                        {/* Category & Innovation Level */}
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zion-cyan font-medium">{service.category}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationBadgeColor(service.innovationLevel)}`}>
                            {service.innovationLevel}
                          </span>
                        </div>

                        {/* ROI & Market Price */}
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1 text-zion-green">
                            <TrendingUp className="w-4 h-4" />
                            <span>ROI: {service.roi}</span>
                          </div>
                          <div className="text-zion-slate-light">
                            Market: {service.marketPrice}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                                <CheckCircle className="w-3 h-3 text-zion-cyan" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Service Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                        <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{service.estimatedDelivery}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-zion-cyan" />
                            <span>{service.supportLevel}</span>
                          </div>
                        </div>
                        
                        <Link
                          to={`/services/${service.id}`}
                          className="btn-futuristic px-4 py-2 text-sm"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your search criteria or browse all categories
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="btn-futuristic px-6 py-3"
                >
                  View All Services
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-responsive font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Get in touch with our technology experts to discuss your specific needs and discover 
              how our innovative solutions can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              
              <a
                href="tel:+13024640950"
                className="btn-neon px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </div>
            
            <div className="mt-8 text-zion-slate-light">
              <p className="mb-2">📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a></p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
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
  Atom,
  Blockchain,
  Heart,
  Scale,
  Factory,
  Satellite,
  Robot,
  PenTool,
  Save,
  Wifi,
  Headphones,
  Activity,
  Leaf,
  Copy
} from 'lucide-react';
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
  const getCategoryIcon = (category: string) => {
    const cat = SERVICE_CATEGORIES_2026.find(c => c.id === category.toLowerCase().replace(' ', '-')) ||
                IT_SERVICE_CATEGORIES_2026.find(c => c.id === category.toLowerCase().replace(' ', '-')) ||
                AI_SERVICE_CATEGORIES_2026.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Zap;
  };
  const getCategoryColor = (category: string) => {
    const cat = SERVICE_CATEGORIES_2026.find(c => c.id === category.toLowerCase().replace(' ', '-')) ||
                IT_SERVICE_CATEGORIES_2026.find(c => c.id === category.toLowerCase().replace(' ', '-')) ||
                AI_SERVICE_CATEGORIES_2026.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };
  return (
<>
      <SEO 
        title="Comprehensive Services Showcase 2026 - Zion Tech Group"
        description="Discover our comprehensive collection of innovative micro SAAS services, IT solutions, and AI platforms for 2026. Transform your business with cutting-edge technology solutions."
        canonical="/comprehensive-services-2026"
        url="https://ziontechgroup.com/comprehensive-services-2026"
      />
      
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
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
</>
  );
}
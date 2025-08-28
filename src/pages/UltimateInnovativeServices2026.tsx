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
  ShoppingCart,
  Building,
  Truck,
  Eye,
  EyeOff,
  ExternalLink,
  Award,
  Target,
  Lightbulb,
  Sparkles,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Dna,
  Space,
  Layers,
  Monitor,
  Smartphone,
  Globe2,
  Leaf
} from 'lucide-react';
import SEO from "@/components/SEO";
import { ULTIMATE_INNOVATIVE_SERVICES_2026 } from "@/data/ultimateInnovativeServices2026";

export default function UltimateInnovativeServices2026() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'quantum-ai', name: 'Quantum AI', icon: Atom, color: 'from-zion-purple to-zion-cyan' },
    { id: 'neuromorphic-ai', name: 'Neuromorphic AI', icon: BrainIcon, color: 'from-zion-pink to-zion-purple' },
    { id: 'synthetic-biology', name: 'Synthetic Biology', icon: Dna, color: 'from-zion-green to-zion-blue' },
    { id: 'space-technology', name: 'Space Technology', icon: Space, color: 'from-zion-blue to-zion-purple' },
    { id: 'advanced-materials', name: 'Advanced Materials', icon: Layers, color: 'from-zion-orange to-zion-red' },
    { id: 'brain-computer-interface', name: 'Brain-Computer Interface', icon: Monitor, color: 'from-zion-purple to-zion-pink' },
    { id: 'digital-twin', name: 'Digital Twin', icon: Globe2, color: 'from-zion-cyan to-zion-green' },
    { id: 'extended-reality', name: 'Extended Reality', icon: Smartphone, color: 'from-zion-orange to-zion-purple' },
    { id: 'edge-ai', name: 'Edge AI', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'federated-learning', name: 'Federated Learning', icon: Network, color: 'from-zion-purple to-zion-blue' },
    { id: 'sustainable-technology', name: 'Sustainable Technology', icon: Leaf, color: 'from-zion-green to-zion-blue' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'under-10k', name: 'Under $10K', range: 'Under $10,000' },
    { id: '10k-20k', name: '$10K - $20K', range: '$10,000 - $20,000' },
    { id: 'over-20k', name: 'Over $20K', range: 'Over $20,000' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'innovation', name: 'Innovation Level' },
    { id: 'roi', name: 'ROI Potential' }
  ];

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  const filteredServices = ULTIMATE_INNOVATIVE_SERVICES_2026.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory);
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'under-10k' && service.price < 10000) ||
                        (selectedPriceRange === '10k-20k' && service.price >= 10000 && service.price <= 20000) ||
                        (selectedPriceRange === 'over-20k' && service.price > 20000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'innovation':
        const innovationOrder = { 'Revolutionary': 3, 'Cutting-edge': 2, 'Advanced': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - 
               (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      case 'roi':
        const aROI = parseInt(a.roi.split('-')[0]);
        const bROI = parseInt(b.roi.split('-')[0]);
        return bROI - aROI;
      default:
        return 0;
    }
  });

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Ultimate Innovative Services 2026 | Zion Tech Group"
        description="Discover our revolutionary micro SAAS services including Quantum AI, Neuromorphic Computing, Synthetic Biology, Space Technology, and more cutting-edge solutions."
        keywords="quantum AI, neuromorphic computing, synthetic biology, space technology, brain-computer interface, digital twin, extended reality, edge AI, federated learning, sustainable technology"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ultimate Innovative Services
              <span className="block text-6xl md:text-8xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              Revolutionary micro SAAS solutions that push the boundaries of technology. 
              From Quantum AI to Brain-Computer Interfaces, discover the future of innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white"
              >
                <Sparkles className="w-5 h-5" />
                <span>12 Revolutionary Services</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white"
              >
                <Award className="w-5 h-5" />
                <span>Industry-Leading Innovation</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white"
              >
                <Target className="w-5 h-5" />
                <span>Proven ROI</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-slate-300 rounded-lg text-white placeholder-zion-slate-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-slate-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-zion-slate-800 text-white">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-slate-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id} className="bg-zion-slate-800 text-white">
                    {range.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Options */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-zion-slate-300">Sort by:</span>
            {sortOptions.map(option => (
              <button
                key={option.id}
                onClick={() => setSortBy(option.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  sortBy === option.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-white/10 text-zion-slate-300 hover:bg-white/20'
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredServices.length} Revolutionary Services Found
            </h2>
            <p className="text-zion-slate-300 text-lg">
              Discover the future of technology with our cutting-edge micro SAAS solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-zion-slate-300/20 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/10 hover:border-zion-cyan/50 hover:shadow-2xl hover:shadow-zion-cyan/20">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category.toLowerCase())}`}>
                        {React.createElement(getCategoryIcon(service.category.toLowerCase()), { 
                          className: "w-6 h-6 text-white" 
                        })}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">
                          ${service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-zion-slate-400">
                          {service.pricingModel}
                        </div>
                      </div>
                    </div>

                    {/* Service Title and Description */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Innovation Level Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        service.innovationLevel === 'Revolutionary' 
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : service.innovationLevel === 'Cutting-edge'
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {service.innovationLevel}
                      </div>
                      <div className="text-xs text-zion-slate-400">
                        ROI: {service.roi}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-zion-slate-700/50 text-zion-slate-300 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {service.tags.length > 3 && (
                        <span className="px-2 py-1 bg-zion-slate-700/50 text-zion-slate-400 text-xs rounded-md">
                          +{service.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleServiceExpansion(service.id)}
                      className="w-full flex items-center justify-center gap-2 py-2 text-zion-cyan hover:text-white transition-colors"
                    >
                      {expandedService === service.id ? (
                        <>
                          <EyeOff className="w-4 h-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4" />
                          Learn More
                        </>
                      )}
                    </button>

                    {/* Expanded Service Details */}
                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-zion-slate-600/30"
                        >
                          {/* Features */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 5).map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2 text-xs text-zion-slate-300">
                                  <CheckCircle className="w-3 h-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                            <ul className="space-y-1">
                              {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-start gap-2 text-xs text-zion-slate-300">
                                  <ZapIcon className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Market Info */}
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div>
                              <span className="text-zion-slate-400">Market Size:</span>
                              <div className="text-white font-semibold">{service.marketSize}</div>
                            </div>
                            <div>
                              <span className="text-zion-slate-400">Delivery:</span>
                              <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                            </div>
                          </div>

                          {/* Contact Button */}
                          <div className="mt-4">
                            <Link
                              to="/contact"
                              className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-200 font-semibold"
                            >
                              <MessageCircle className="w-4 h-4" />
                              Get Started
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
              <p className="text-zion-slate-300 mb-6">
                Try adjusting your search criteria or browse all our innovative services.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-blue transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-blue/10 to-zion-purple/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-300 mb-8">
              Our revolutionary micro SAAS services are designed to give you a competitive edge. 
              Contact us today to discuss how we can help you achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-200 font-semibold text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Start Your Journey
              </Link>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-zion-slate-300 text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            <div className="mt-8 text-zion-slate-400">
              <p>Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
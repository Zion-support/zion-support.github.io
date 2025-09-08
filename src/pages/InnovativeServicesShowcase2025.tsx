import React, { useState, useMemo } from 'react';
import { motion   } from 'framer-motion';
import { Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Cpu,
  Database,
  Network,
  Layers,
  Brain,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Lock,
  Users,
  BarChart3,
  Target,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
  } from 'lucide-react';
import { SEO   } from '../components/SEO';
import { ADVANCED_AI_SERVICES_2025   } from '../data/advancedAIServices2025';
import { INNOVATIVE_IT_INFRASTRUCTURE_2025   } from '../data/innovativeITInfrastructure2025';
import { INNOVATIVE_BLOCKCHAIN_WEB3_SERVICES_2025   } from '../data/innovativeBlockchainWeb3Services2025';

interface Service {


  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
contactInfo: {
    phone: string;
    email: string;
    website: string;
  

};
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
}

const InnovativeServicesShowcase2025: React.FC = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<any>('all');
  const [sortBy, setSortBy] = useState<any>('name');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_MICRO_SAAS_SERVICES_2025.map(service => service.category)))];
  
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-1000', label: 'Under $1,000' },
    { value: '1000-2000', label: '$1,000 - $2,000' },
    { value: '2000-3000', label: '$2,000 - $3,000' },
    { value: '3000+', label: '$3,000+' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
      
      return matchesSearch && matchesCategory && matchesInnovation;
    });

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'roi':
        filtered.sort((a, b) => parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]));
        break;
      case 'delivery':
        filtered.sort((a, b) => parseInt(a.estimatedDelivery.split('-')[0]) - parseInt(b.estimatedDelivery.split('-')[0]));
        break;
      default: anyfiltered.sort((a, b)   => a.title.localeCompare(b.title));
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string)   => {
    switch (category) {
      case 'AI Security': return <Shield className="w-5 h-5" />;
      case 'AI Finance': return <DollarSign className="w-5 h-5" />;
      case 'AI Healthcare': return <Brain className="w-5 h-5" />;
      case 'AI Operations': return <BarChart3 className="w-5 h-5" />;
      case 'AI Legal': return <Lock className="w-5 h-5" />;
      case 'Cloud Computing': return <Cloud className="w-5 h-5" />;
      case 'Edge Computing': return <Zap className="w-5 h-5" />;
      case 'Quantum Computing': return <Cpu className="w-5 h-5" />;
      case 'Data Center Management': return <Server className="w-5 h-5" />;
      case 'Network Infrastructure': return <Network className="w-5 h-5" />;
      case 'Blockchain & Web3': return <Layers className="w-5 h-5" />;
      default: return <Target className="w-5 h-5" />;
    }
  };

  const getInnovationLevelColor = (level: string)   => {
    switch (level) {
      case 'Revolutionary': return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Cutting-edge': return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Advanced': return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default: return 'bg-gradient-to-r from-gray-600 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Explore our cutting-edge AI, IT infrastructure, and blockchain services. Discover innovative solutions that drive business transformation and competitive advantage."
      />
      
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative Services Showcase
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our cutting-edge AI, IT infrastructure, and blockchain services designed to transform your business and drive competitive advantage in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-blue-400">
                <Star className="w-5 h-5 mr-2" />
                <span>15+ Advanced AI Services</span>
              </div>
              <div className="flex items-center text-green-400">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>10+ IT Infrastructure Solutions</span>
              </div>
              <div className="flex items-center text-purple-400">
                <Globe className="w-5 h-5 mr-2" />
                <span>5+ Blockchain & Web3 Platforms</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus: anyoutline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category   => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Innovation Level Filter */}
            <select
              value={selectedInnovationLevel}
              onChange={(e) => setSelectedInnovationLevel(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus: anyoutline-none focus:ring-2 focus:ring-blue-500"
            >
              {innovationLevels.map(level   => (
                <option key={level} value={level} className="bg-slate-800 text-white">
                  {level === 'all' ? 'All Innovation Levels' : level}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name" className="bg-slate-800 text-white">Sort by Name</option>
              <option value="price-low" className="bg-slate-800 text-white">Price: Low to High</option>
              <option value="price-high" className="bg-slate-800 text-white">Price: High to Low</option>
              <option value="roi" className="bg-slate-800 text-white">Highest ROI</option>
              <option value="delivery" className="bg-slate-800 text-white">Fastest Delivery</option>
            </select>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg: anygrid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index)   => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-sm text-gray-400">{service.subcategory}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                  {service.innovationLevel}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

              {/* Price and ROI */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-green-400">
                  {service.currency}{service.price.toLocaleString()}
                  <span className="text-sm text-gray-400 font-normal">/{service.pricingModel}</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-400">{service.roi}</div>
                  <div className="text-sm text-gray-400">ROI</div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-400 text-center">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specs */}
              {service.technicalSpecs && (
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <h4 className="text-sm font-semibold text-white mb-2">Technical Specs</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                    <div>
                      <span className="text-gray-400">Uptime:</span> {service.technicalSpecs.uptime}
                    </div>
                    <div>
                      <span className="text-gray-400">APIs:</span> {service.technicalSpecs.apiEndpoints}
                    </div>
                  </div>
                </div>
              )}

              {/* Delivery and Support */}
              <div className="flex items-center justify-between mb-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {service.estimatedDelivery}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {service.supportLevel}
                </div>
              </div>

              {/* Market Info */}
              <div className="mb-4 p-3 bg-white/5 rounded-lg">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Market Price:</span>
                    <div className="text-white font-semibold">{service.marketPrice}</div>
                  </div>
                  {service.marketSize && (
                    <div>
                      <span className="text-gray-400">Market Size:</span>
                      <div className="text-white font-semibold">{service.marketSize}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-white/20 pt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-300">
                    <div className="flex items-center mb-1">
                      <Phone className="w-4 h-4 mr-2" />
                      {service.contactInfo.phone}
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {service.contactInfo.email}
                    </div>
                  </div>
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedInnovationLevel('all');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement these innovative solutions and drive your business forward.
          </p>
          
          {/* Contact CTA */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value} className="bg-gray-800 text-white">
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Innovative Services Available
            </h2>
            <p className="text-gray-300">
              Each service is designed with cutting-edge AI technology and proven business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <span className="text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Pricing and ROI */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl font-bold text-green-400">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-300">Market Price</div>
                      <div className="text-sm text-blue-400">{service.marketPrice}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <TrendingUp className="w-4 h-4" />
                      <span>ROI: {service.roi}</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-400">
                      <Clock className="w-4 h-4" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact and CTA */}
                <div className="space-y-3">
                  <div className="text-center">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Quote Request for ${service.title}`}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Get Quote
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <a href={`tel:${service.contactInfo.phone}`} className="hover:text-white transition-colors">
                        {service.contactInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      <a href={service.contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search criteria or contact us directly for custom solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white/5 border-t border-white/20 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative AI-powered services can help you achieve your goals.
            Our team of experts is ready to provide personalized solutions and support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-3">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 font-semibold">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-3">Get a detailed quote</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300 font-semibold">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-3">Learn more about our services</p>
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-semibold">
                ziontechgroup.com
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Cutting-edge AI technology</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Proven ROI and business value</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Expert support and implementation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Custom solutions for your needs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-zion-slate-dark mb-6">Ready to Transform Your Business?</h2>
        <p className="text-zion-slate-light text-lg mb-8">
          Contact us today to learn how our innovative AI services can revolutionize your operations and drive unprecedented growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="tel:+13024640950" className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors">
            <Phone className="w-5 h-5 mr-2"/> +1 302 464 0950
          </a>
          <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/5 transition-colors">
            <Mail className="w-5 h-5 mr-2"/> kleber@ziontechgroup.com
          </a>
        </div>
        
        <div className="text-sm text-zion-slate-light">
          Visit us at <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a>
        </div>
      </section>
    </div>
  );
}

export default InnovativeServicesShowcase2025;

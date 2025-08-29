import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { REVOLUTIONARY_SERVICES_2025, getRevolutionaryServicesByCategory, getRevolutionaryServicesByInnovationLevel, getRevolutionaryTrendingServices } from '@/data/revolutionaryServices2025';

const RevolutionaryServices2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);

  const categories = ['all', ...Array.from(new Set(REVOLUTIONARY_SERVICES_2025.map(s => s.category)))];
  const innovationLevels = ['all', 'Revolutionary', 'Advanced'];

  const filteredServices = useMemo(() => {
    let filtered = REVOLUTIONARY_SERVICES_2025;

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by innovation level
    if (selectedInnovationLevel !== 'all') {
      filtered = filtered.filter(service => service.innovationLevel === selectedInnovationLevel);
    }

    // Filter by price range
    filtered = filtered.filter(service => 
      service.price >= priceRange[0] && service.price <= priceRange[1]
    );

    return filtered;
  }, [searchQuery, selectedCategory, selectedInnovationLevel, priceRange]);

  const trendingServices = getRevolutionaryTrendingServices(6);
  const stats = {
    total: REVOLUTIONARY_SERVICES_2025.length,
    revolutionary: REVOLUTIONARY_SERVICES_2025.filter(s => s.innovationLevel === 'Revolutionary').length,
    advanced: REVOLUTIONARY_SERVICES_2025.filter(s => s.innovationLevel === 'Advanced').length,
    avgPrice: Math.round(REVOLUTIONARY_SERVICES_2025.reduce((sum, s) => sum + s.price, 0) / REVOLUTIONARY_SERVICES_2025.length)
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}k`;
    }
    return `$${price}`;
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Quantum Computing': <Brain className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'AI Sales & Marketing': <TrendingUp className="w-5 h-5" />,
      'IoT & Edge Computing': <Cpu className="w-5 h-5" />,
      'Healthcare AI': <Heart className="w-5 h-5" />,
      'Blockchain & AI': <Lock className="w-5 h-5" />,
      'Sustainability & Green Tech': <Globe className="w-5 h-5" />,
      'Autonomous Systems': <Rocket className="w-5 h-5" />,
      'Legal Tech': <Shield className="w-5 h-5" />
    };
    return iconMap[category] || <Zap className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Revolutionary Services 2025 - Zion Tech Group" 
        description="Explore our cutting-edge AI, IT, and Micro SaaS services that are revolutionizing industries. From quantum computing to autonomous systems, discover the future of technology."
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Revolutionary Services 2025
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed">
              Discover the future of technology with our cutting-edge AI, IT, and Micro SaaS solutions that are transforming industries worldwide.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{stats.total}</div>
                <div className="text-sm text-slate-400">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{stats.revolutionary}</div>
                <div className="text-sm text-slate-400">Revolutionary</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{stats.advanced}</div>
                <div className="text-sm text-slate-400">Advanced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">${stats.avgPrice}</div>
                <div className="text-sm text-slate-400">Avg Price</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 backdrop-blur border border-cyan-400/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="text-cyan-300 hover:text-cyan-200">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search revolutionary services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-cyan-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-slate-800 border border-cyan-400/20 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Innovation Level Filter */}
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-cyan-400" />
                <select
                  value={selectedInnovationLevel}
                  onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                  className="bg-slate-800 border border-cyan-400/20 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  {innovationLevels.map(level => (
                    <option key={level} value={level}>
                      {level === 'all' ? 'All Levels' : level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-cyan-400" />
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-20 bg-slate-800 border border-cyan-400/20 rounded-lg px-2 py-2 text-white text-center focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                  />
                  <span className="text-slate-400">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 50000])}
                    className="w-20 bg-slate-800 border border-cyan-400/20 rounded-lg px-2 py-2 text-white text-center focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-slate-400">
              Showing {filteredServices.length} of {REVOLUTIONARY_SERVICES_2025.length} revolutionary services
            </div>
          </div>
        </div>
      </section>

      {/* Trending Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">🔥 Trending Revolutionary Services</h2>
            <p className="text-slate-400">Our most innovative and high-ROI solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-800/60 backdrop-blur border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-cyan-300/70">{service.category}</div>
                      <div className="text-xs text-slate-400">{service.subcategory}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {service.innovationLevel === 'Revolutionary' && <Star className="w-4 h-4 text-yellow-400 fill-current" />}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      service.innovationLevel === 'Revolutionary' 
                        ? 'bg-yellow-400/20 text-yellow-400' 
                        : 'bg-blue-400/20 text-blue-400'
                    }`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Price:</span>
                    <span className="text-cyan-400 font-semibold">{formatPrice(service.price)}/{service.pricingModel}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">ROI:</span>
                    <span className="text-green-400 font-semibold">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Delivery:</span>
                    <span className="text-slate-300">{service.estimatedDelivery}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 bg-slate-700/50 rounded-full text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to={`/services/${service.id}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="text-xs text-slate-400">
                    Market: {service.marketPrice}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">All Revolutionary Services</h2>
            <p className="text-slate-400">Comprehensive catalog of cutting-edge solutions</p>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-slate-400">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-slate-800/40 backdrop-blur border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 rounded-xl p-5 hover:scale-102"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div className="text-xs uppercase tracking-wide text-cyan-300/70">{service.category}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      service.innovationLevel === 'Revolutionary' 
                        ? 'bg-yellow-400/20 text-yellow-400' 
                        : 'bg-blue-400/20 text-blue-400'
                    }`}>
                      {service.innovationLevel}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Price:</span>
                      <span className="text-cyan-400 font-semibold">{formatPrice(service.price)}/{service.pricingModel}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">ROI:</span>
                      <span className="text-green-400 font-semibold">{service.roi}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to={`/services/${service.id}`}
                      className="text-cyan-400 hover:text-cyan-300 text-xs font-medium flex items-center gap-1"
                    >
                      Details <ArrowRight className="w-3 h-3" />
                    </Link>
                    <div className="text-xs text-slate-400">
                      {service.estimatedDelivery}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Our revolutionary services are designed to transform your operations, boost efficiency, and drive unprecedented growth. 
              Get in touch to discover how we can help you stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Request Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <a
                href="https://ziontechgroup.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-xl border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-colors"
              >
                Explore More Services
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Our Site</h3>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RevolutionaryServices2025;
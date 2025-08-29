import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  ShoppingCart, 
  Zap, 
  Star, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Globe,
  Cpu,
  Lock,
  Heart,
  Server,
  Database,
  Network,
  Code,
  Search,
  Filter,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '@/data/innovativeMicroSaasServices2025';

export default function ServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('innovation');
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-cyan-500 to-blue-600', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.length },
    { id: 'AI', name: 'AI & Analytics', icon: Brain, color: 'from-cyan-500 to-purple-600', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('AI') || s.category.includes('Analytics')).length },
    { id: 'Quantum', name: 'Quantum Computing', icon: Rocket, color: 'from-blue-500 to-cyan-600', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Quantum')).length },
    { id: 'Blockchain', name: 'Blockchain', icon: Lock, color: 'from-purple-500 to-blue-600', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Blockchain')).length },
    { id: 'IoT', name: 'IoT & Edge', icon: Cpu, color: 'from-green-500 to-cyan-600', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('IoT')).length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Security') || s.category.includes('Compliance')).length },
    { id: 'Healthcare', name: 'Healthcare', icon: Heart, color: 'from-pink-500 to-purple-600', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Healthcare')).length },
    { id: 'Finance', name: 'Finance', icon: DollarSign, color: 'from-green-500 to-blue-600', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Finance')).length },
    { id: 'Manufacturing', name: 'Manufacturing', icon: Server, color: 'from-blue-500 to-purple-600', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Manufacturing')).length },
    { id: 'Sustainability', name: 'Sustainability', icon: Globe, color: 'from-orange-500 to-green-600', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Sustainability')).length }
  ];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return (a.price || 0) - (b.price || 0);
      case 'price-high':
        return (b.price || 0) - (a.price || 0);
      case 'innovation':
        return b.innovationLevel === 'Cutting-edge' ? 1 : -1;
      case 'roi':
        return parseInt(b.roi?.replace('%', '') || '0') - parseInt(a.roi?.replace('%', '') || '0');
      default:
        return 0;
    }
  });

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'from-cyan-500 to-blue-600';
  };

  return (
    <>
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group"
        description="Explore our complete portfolio of innovative AI, quantum computing, blockchain, IoT, and emerging technology solutions. Transform your business with cutting-edge services."
        canonical="/services-overview"
        url="https://ziontechgroup.com/services-overview"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Comprehensive Services Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Discover our complete range of innovative AI, quantum computing, blockchain, IoT, and emerging technology solutions designed to transform your business
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg px-6 py-3">
                <span className="text-cyan-400 font-semibold">{INNOVATIVE_MICRO_SAAS_SERVICES_2025.length}+ Services</span>
              </div>
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg px-6 py-3">
                <span className="text-blue-400 font-semibold">Cutting-edge Technology</span>
              </div>
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg px-6 py-3">
                <span className="text-purple-400 font-semibold">Enterprise Solutions</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Banner */}
        <section className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-y border-cyan-500/30">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-white mb-2">Ready to Transform Your Business?</h3>
                <p className="text-cyan-200">Get expert consultation and custom solutions</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search services by name, description, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Sort */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                >
                  <option value="innovation">Sort by Innovation</option>
                  <option value="roi">Sort by ROI</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-8 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' border-transparent text-white shadow-lg'
                      : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {sortedServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
                >
                  {/* Service Header */}
                  <div className="p-6 border-b border-slate-700">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <getCategoryIcon(service.category) className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">
                          {service.currency}{service.price?.toLocaleString()}
                        </div>
                        <div className="text-sm text-slate-400">{service.pricingModel}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-slate-400">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{service.innovationLevel}</span>
                      </div>
                      <button
                        onClick={() => toggleServiceExpansion(service.id)}
                        className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span className="text-sm">
                          {expandedServices.includes(service.id) ? 'Show Less' : 'Learn More'}
                        </span>
                        {expandedServices.includes(service.id) ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Service Details */}
                  {expandedServices.includes(service.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 bg-slate-800/30 border-t border-slate-700"
                    >
                      {/* Key Benefits */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                        <div className="space-y-2">
                          {service.benefits?.slice(0, 3).map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-300">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Market Info */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-sm text-slate-400">Market Price</div>
                          <div className="text-sm font-semibold text-white">{service.marketPrice}</div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-400">ROI</div>
                          <div className="text-sm font-semibold text-green-400">{service.roi}</div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-400">Delivery</div>
                          <div className="text-sm font-semibold text-white">{service.estimatedDelivery}</div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-400">Support</div>
                          <div className="text-sm font-semibold text-white capitalize">{service.supportLevel}</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to={`/services/${service.id.replace(/-/g, '-')}`}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition-all duration-300 hover:scale-105"
                        >
                          View Details
                        </Link>
                        <a
                          href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                          className="flex-1 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-2 px-4 rounded-lg text-center transition-all duration-300"
                        >
                          Get Quote
                        </a>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {sortedServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-slate-400">Try adjusting your search criteria or browse all categories</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
          <div className="container mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Our team of experts is ready to help you implement the perfect solution for your business needs
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Request Custom Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
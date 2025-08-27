import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from '@/data/innovativeMicroSaasServices2027';
import { INNOVATIVE_IT_SERVICES_2027 } from '@/data/innovativeITServices2027';
import { INNOVATIVE_AI_SERVICES_2027 } from '@/data/innovativeAIServices2027';
import { COMPREHENSIVE_PRICING_GUIDE_2027 } from '@/data/comprehensivePricingGuide2027';
const ComprehensiveServicesOverview2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('innovation');
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'ai', name: 'Artificial Intelligence', icon: '🤖' },
    { id: 'blockchain', name: 'Blockchain', icon: '🔗' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'edge', name: 'Edge Computing', icon: '🌐' },
    { id: 'sustainability', name: 'Sustainability', icon: '🌱' },
    { id: 'metaverse', name: 'Metaverse', icon: '🌍' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'financial', name: 'Financial Services', icon: '💰' }
  ];
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2027,
    ...INNOVATIVE_IT_SERVICES_2027,
    ...INNOVATIVE_AI_SERVICES_2027
  ];
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory) ||
      service.subcategory.toLowerCase().includes(selectedCategory);
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return (a as any).price - (b as any).price;
      case 'innovation':
        return getInnovationLevel(b.innovationLevel) - getInnovationLevel(a.innovationLevel);
      case 'market':
        return parseFloat((b as any).marketSize?.replace(/[^0-9.]/g, '') || '0') - 
               parseFloat((a as any).marketSize?.replace(/[^0-9.]/g, '') || '0');
      default:
        return 0;
    }
  });
  function getInnovationLevel(level: string): number {
    switch (level.toLowerCase()) {
      case 'revolutionary': return 3;
      case 'advanced': return 2;
      case 'standard': return 1;
      default: return 0;
    }
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Comprehensive Services
            </span>
            <br />
            <span className="text-zion-neon">Overview 2027</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-cyan/80 mb-8 max-w-4xl mx-auto"
          >
            Discover our revolutionary micro SAAS, IT, and AI services that are shaping the future of technology. 
            From quantum computing to blockchain solutions, we provide cutting-edge services for the digital age.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full px-6 py-3">
              <span className="text-zion-purple text-lg font-semibold">500+ Services</span>
            </div>
            <div className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-full px-6 py-3">
              <span className="text-zion-cyan text-lg font-semibold">24/7 Support</span>
            </div>
            <div className="bg-zion-neon/20 backdrop-blur-sm border border-zion-neon/30 rounded-full px-6 py-3">
              <span className="text-zion-neon text-lg font-semibold">Global Reach</span>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Filters and Search */}
      <section className="py-12 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-black border-zion-cyan'
                      : 'bg-transparent text-zion-cyan border-zion-cyan/30 hover:border-zion-cyan/60'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 bg-black/30 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:border-zion-cyan focus:outline-none"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-black/30 border border-zion-cyan/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-zion-cyan/20 rounded-2xl mb-4">
                <MapPin className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan/80 mb-4">Schedule an in-person meeting</p>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zion-cyan text-white px-6 py-3 rounded-xl font-semibold hover:bg-zion-cyan/80 transition-colors"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/60 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Innovation Level Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    service.innovationLevel === 'Revolutionary' 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : service.innovationLevel === 'Advanced'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {service.innovationLevel}
                  </span>
                </div>
                {/* Service Icon */}
                <div className="text-4xl mb-4">{service.icon || '🚀'}</div>
                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                {/* Service Description */}
                <p className="text-zion-cyan/70 mb-4 line-clamp-3">
                  {service.description}
                </p>
                {/* Service Category */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-zion-cyan/50">{service.category}</span>
                  <span className="text-zion-cyan/30">•</span>
                  <span className="text-xs text-zion-cyan/50">{service.subcategory}</span>
                </div>
                {/* Price Range */}
                <div className="mb-4">
                  <span className="text-zion-neon font-semibold">
                    {service.pricing?.monthly ? `$${service.pricing.monthly.toLocaleString()}/month` : 
                     (service as any).price ? `$${(service as any).price.toLocaleString()}/month` : 'Custom Pricing'}
                  </span>
                </div>
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features?.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-zion-cyan">✓</span>
                        <span className="text-xs text-zion-cyan/70">{feature}</span>
                      </div>
                    ))}
                    {service.features?.length > 3 && (
                      <span className="text-xs text-zion-cyan/50">
                        +{service.features.length - 3} more features
                      </span>
                    )}
                  </div>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags?.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Market Info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xs text-zion-cyan/50">
                    Market: {(service as any).marketSize || 'Growing'}
                  </div>
                  <div className="text-xs text-zion-neon font-semibold">
                    ROI: {(service as any).roi || 'High'}
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-semibold py-2 px-4 rounded-lg text-center hover:from-zion-purple hover:to-zion-cyan transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-transparent border border-zion-cyan text-zion-cyan font-semibold py-2 px-4 rounded-lg hover:bg-zion-cyan hover:text-black transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* No Results */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-cyan/70">
                Try adjusting your search criteria or category filter
              </p>
            </motion.div>
          )}
        </div>
      </section>
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-cyan/80 mb-8"
          >
            Contact our team of experts to discuss how our innovative services can drive your success in 2027 and beyond.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-bold py-4 px-8 rounded-lg text-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300"
            >
              Get Started Today
            </Link>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-lg text-lg hover:bg-zion-cyan hover:text-black transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-zion-cyan/70"
          >
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default ComprehensiveServicesOverview2027;
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Globe,
  Settings,
  Database,
  Network,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2026, SERVICE_CATEGORIES_2026, PRICING_TIERS_2026, CONTACT_INFO_2026 } from '../data/innovativeMicroSaasServices2026';

const InnovativeServicesShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_MICRO_SAAS_SERVICES_2026;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case 'ai-score':
        return [...filtered].sort((a, b) => b.aiScore - a.aiScore);
      default:
        return filtered.sort((a, b) => (b.featured ? 1 : -1));
    }
  }, [selectedCategory, searchTerm, sortBy]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Business Intelligence':
        return <Brain className="w-6 h-6" />;
      case 'Quantum Computing':
        return <Cpu className="w-6 h-6" />;
      case 'Blockchain & Web3':
        return <Database className="w-6 h-6" />;
      case 'IoT & Edge Computing':
        return <Network className="w-6 h-6" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'Healthcare AI':
        return <Users className="w-6 h-6" />;
      case 'FinTech':
        return <Target className="w-6 h-6" />;
      case 'Supply Chain AI':
        return <Globe className="w-6 h-6" />;
      case 'Autonomous AI':
        return <Rocket className="w-6 h-6" />;
      case 'Quantum AI':
        return <Zap className="w-6 h-6" />;
      case 'Green Technology':
        return <Settings className="w-6 h-6" />;
      case 'Space Technology':
        return <Rocket className="w-6 h-6" />;
      case '5G Networks':
        return <Network className="w-6 h-6" />;
      case 'Digital Twin':
        return <Database className="w-6 h-6" />;
      case 'Autonomous Robotics':
        return <Cpu className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Innovative Services 2026
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed"
            >
              Cutting-edge micro SAAS services and solutions designed to transform your business 
              with AI, quantum computing, blockchain, and next-generation technologies.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a 
                href={`mailto:${CONTACT_INFO_2026.email}`}
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Started
              </a>
              <a 
                href={`tel:${CONTACT_INFO_2026.mobile}`}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="ai-score">AI Score</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <button
              onClick={() => handleCategorySelect('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                  : 'bg-white text-zion-blue-dark hover:bg-zion-cyan/10 border border-zion-cyan/30'
              }`}
            >
              All Services
            </button>
            {SERVICE_CATEGORIES_2026.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                    : 'bg-white text-zion-blue-dark hover:bg-zion-cyan/10 border border-zion-cyan/30'
                }`}
              >
                {getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {service.featured && (
                    <div className="absolute top-4 right-4 bg-zion-cyan text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    AI Score: {service.aiScore}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {getCategoryIcon(service.category)}
                    <span className="text-sm text-zion-blue-dark font-medium">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Rating and Reviews */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {service.rating} ({service.reviewCount} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-zion-blue-dark">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                    <span className="text-sm text-gray-500">/month</span>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits Preview */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <ArrowRight className="w-4 h-4 text-zion-cyan" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${CONTACT_INFO_2026.email}?subject=Inquiry about ${service.title}`}
                      className="flex-1 bg-zion-cyan text-white text-center py-2 px-4 rounded-lg hover:bg-zion-cyan-light transition-colors font-medium"
                    >
                      Get Quote
                    </a>
                    <a
                      href={`tel:${CONTACT_INFO_2026.mobile}`}
                      className="px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="mt-4 text-zion-cyan hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-16 bg-gradient-to-r from-zion-blue to-zion-cyan text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-zion-slate-light">
              Choose the plan that best fits your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(PRICING_TIERS_2026).map(([tier, details], index) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-2xl font-bold mb-2">{tier}</h3>
                <div className="text-3xl font-bold mb-4">{details.price}</div>
                <p className="text-zion-slate-light mb-6">{details.description}</p>
                <ul className="space-y-3 mb-6">
                  {details.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${CONTACT_INFO_2026.email}?subject=Pricing inquiry for ${tier} plan`}
                  className="w-full bg-zion-cyan text-white text-center py-3 px-4 rounded-lg hover:bg-zion-cyan-light transition-colors font-medium block"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Get in touch with our team of experts to discuss your specific needs 
              and discover how our innovative services can drive your success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <a 
                  href={`tel:${CONTACT_INFO_2026.mobile}`}
                  className="text-zion-cyan hover:underline text-lg"
                >
                  {CONTACT_INFO_2026.mobile}
                </a>
              </div>

              <div className="text-center">
                <Mail className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <a 
                  href={`mailto:${CONTACT_INFO_2026.email}`}
                  className="text-zion-cyan hover:underline text-lg"
                >
                  {CONTACT_INFO_2026.email}
                </a>
              </div>

              <div className="text-center">
                <MapPin className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  {CONTACT_INFO_2026.address}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${CONTACT_INFO_2026.email}?subject=Free consultation request`}
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Request Free Consultation
              </a>
              <a
                href={CONTACT_INFO_2026.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                Visit Website
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 p-6 bg-zion-cyan/10 rounded-lg">
              <h3 className="text-lg font-semibold text-zion-cyan mb-2">
                {CONTACT_INFO_2026.support}
              </h3>
              <p className="text-gray-600">
                {CONTACT_INFO_2026.consultation}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2026;
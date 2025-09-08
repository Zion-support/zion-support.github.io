import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { NEXT_GEN_MICRO_SAAS_SERVICES_2025 } from '../data/nextGenMicroSaasServices2025';

const NextGenMicroSaasServices2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = NEXT_GEN_MICRO_SAAS_SERVICES_2025;
  
  const categories = ['All', ...Array.from(new Set(services.map(service => service.category)))];
  const pricingRanges = ['All', 'Under $100', '$100-$300', '$300-$500', '$500+'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    
    let matchesPricing = true;
    if (selectedPricing !== 'All') {
      const price = service.price.monthly;
      switch (selectedPricing) {
        case 'Under $100':
          matchesPricing = price < 100;
          break;
        case '$100-$300':
          matchesPricing = price >= 100 && price < 300;
          break;
        case '$300-$500':
          matchesPricing = price >= 300 && price < 500;
          break;
        case '$500+':
          matchesPricing = price >= 500;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price':
        return a.price.monthly - b.price.monthly;
      case 'category':
        return a.category.localeCompare(b.category);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Next-Gen Micro SAAS Services 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's cutting-edge micro SAAS solutions, from AI-powered platforms to blockchain solutions. 
              Scalable, affordable, and innovative services designed for growing businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-6">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-cyan-100">Happy Clients</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-6">
                <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-green-100">Success Rate</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6">
                <Award className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-purple-100">Years Experience</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6">
                <Globe className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-orange-100">Countries Served</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Pricing Filter */}
              <div className="relative">
                <select
                  value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {pricingRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="category">Sort by Category</option>
                  <option value="rating">Sort by Rating</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="p-6">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-cyan-600 text-white text-xs rounded-full">
                          {service.category}
                        </span>
                        <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                          {service.subcategory}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleServiceExpansion(service.id)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {expandedService === service.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Price and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.price.monthly}/month
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                    </div>
                  </div>

                  {/* Pricing Tier */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      service.pricingTier === 'Enterprise' ? 'bg-purple-600 text-white' :
                      service.pricingTier === 'Professional' ? 'bg-blue-600 text-white' :
                      service.pricingTier === 'Starter' ? 'bg-green-600 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {service.pricingTier}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags?.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Content */}
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-700 pt-4 mt-4"
                    >
                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 5).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2 text-sm text-gray-300">
                              <Zap className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Competitive Advantage */}
                      {service.competitiveAdvantage && (
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">Competitive Advantage:</h4>
                          <p className="text-sm text-green-400">{service.competitiveAdvantage}</p>
                        </div>
                      )}

                      {/* ROI Metrics */}
                      {service.roiMetrics && (
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">ROI Metrics:</h4>
                          <ul className="space-y-1">
                            {service.roiMetrics.slice(0, 2).map((metric, metricIndex) => (
                              <li key={metricIndex} className="text-sm text-green-400">
                                {metric}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technical Specs */}
                      {service.technicalSpecs && (
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">Technical Specifications:</h4>
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                            <div>API Endpoints: {service.technicalSpecs.apiEndpoints}</div>
                            <div>Uptime: {service.technicalSpecs.uptime}</div>
                          </div>
                        </div>
                      )}

                      {/* Compliance Standards */}
                      {service.complianceStandards && (
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">Compliance Standards:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.complianceStandards.slice(0, 3).map((standard, standardIndex) => (
                              <span key={standardIndex} className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                                {standard}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-all duration-300"
                    >
                      Learn More
                    </Link>
                    <a
                      href={service.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedPricing('All');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team of experts to discuss how our micro SAAS services can help you grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="text-white font-semibold">Phone</div>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="text-white font-semibold">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="text-white font-semibold">Address</div>
              <div className="text-cyan-400 text-center">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NextGenMicroSaasServices2025;
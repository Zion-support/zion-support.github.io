import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  Zap,
  Shield,
  Brain,
  Atom,
  Rocket,
  Heart,
  Building,
  Car,
  Package,
  Eye,
  Cog,
  Microscope,
  Dna,
  Satellite,
  Battery,
  Key,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { revolutionary2026CuttingEdgeInnovationServices } from "@/data/revolutionary-2026-cutting-edge-innovations-v2";
import { revolutionary2026SpecializedIndustrySolutionServices } from "@/data/revolutionary-2026-specialized-industry-solutions-v2";
import { revolutionary2026EmergingTechBreakthroughServices } from "@/data/revolutionary-2026-emerging-tech-breakthroughs-v2";

export default function Revolutionary2026PricingGuide() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // Combine all services
  const allServices = [
    ...revolutionary2026CuttingEdgeInnovationServices,
    ...revolutionary2026SpecializedIndustrySolutionServices,
    ...revolutionary2026EmergingTechBreakthroughServices
  ];

  // Group services by category
  const servicesByCategory = allServices.reduce((acc, service) => {
    const category = service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, typeof allServices>);

  // Filter services by price range
  const filteredServices = allServices.filter(service => {
    const price = parseFloat(service.price.replace(/[$,]/g, ''));
    switch (selectedPriceRange) {
      case 'budget':
        return price < 3000;
      case 'mid-range':
        return price >= 3000 && price < 6000;
      case 'enterprise':
        return price >= 6000;
      default:
        return true;
    }
  });

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Neuromorphic')) return Brain;
    if (category.includes('Quantum')) return Atom;
    if (category.includes('Space')) return Rocket;
    if (category.includes('Healthcare') || category.includes('Medical')) return Heart;
    if (category.includes('Manufacturing')) return Building;
    if (category.includes('Transportation')) return Car;
    if (category.includes('Supply Chain')) return Package;
    if (category.includes('Holographic')) return Eye;
    if (category.includes('Robotics')) return Cog;
    if (category.includes('Nanotechnology')) return Microscope;
    if (category.includes('Biotechnology')) return Dna;
    if (category.includes('Sensing')) return Satellite;
    if (category.includes('Energy')) return Battery;
    if (category.includes('Communication')) return Key;
    return Zap;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI') || category.includes('Neuromorphic')) return 'from-purple-600 to-pink-600';
    if (category.includes('Quantum')) return 'from-indigo-600 to-purple-600';
    if (category.includes('Space')) return 'from-blue-600 to-indigo-600';
    if (category.includes('Healthcare')) return 'from-red-600 to-pink-600';
    if (category.includes('Manufacturing')) return 'from-gray-600 to-blue-600';
    if (category.includes('Transportation')) return 'from-blue-600 to-indigo-600';
    if (category.includes('Supply Chain')) return 'from-orange-600 to-red-600';
    if (category.includes('Holographic')) return 'from-cyan-600 to-blue-600';
    if (category.includes('Robotics')) return 'from-gray-600 to-blue-600';
    if (category.includes('Nanotechnology')) return 'from-blue-600 to-cyan-600';
    if (category.includes('Biotechnology')) return 'from-green-600 to-teal-600';
    if (category.includes('Sensing')) return 'from-indigo-600 to-purple-600';
    if (category.includes('Energy')) return 'from-yellow-600 to-orange-600';
    if (category.includes('Communication')) return 'from-green-600 to-emerald-600';
    return 'from-zion-cyan to-zion-blue';
  };

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All', count: allServices.length },
    { id: 'budget', name: 'Budget', range: '$1,000 - $3,000', count: allServices.filter(s => parseFloat(s.price.replace(/[$,]/g, '')) < 3000).length },
    { id: 'mid-range', name: 'Mid-Range', range: '$3,000 - $6,000', count: allServices.filter(s => parseFloat(s.price.replace(/[$,]/g, '')) >= 3000 && parseFloat(s.price.replace(/[$,]/g, '')) < 6000).length },
    { id: 'enterprise', name: 'Enterprise', range: '$6,000+', count: allServices.filter(s => parseFloat(s.price.replace(/[$,]/g, '')) >= 6000).length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Revolutionary 2026 Pricing Guide - Zion Tech Group"
        description="Comprehensive pricing guide for our revolutionary 2026 services including quantum computing, AI, biotechnology, nanotechnology, and emerging technologies. Find the perfect solution for your business."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary 2026
              <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Pricing Guide
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover transparent pricing for our cutting-edge services. From quantum computing to AI, find the perfect solution that fits your budget and transforms your business.
            </p>
            
            {/* Price Range Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setSelectedPriceRange(range.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedPriceRange === range.id
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <div className="text-sm">{range.name}</div>
                  <div className="text-xs opacity-80">{range.range}</div>
                  <div className="text-xs opacity-60">({range.count} services)</div>
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
              <Link
                to="/revolutionary-2026-services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Transparent Pricing</h3>
            <p className="text-gray-400">Clear, upfront pricing with no hidden fees. Choose the plan that fits your budget and scale as you grow.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Flexible Plans</h3>
            <p className="text-gray-400">Monthly subscriptions with trial periods and flexible setup options. Start small and expand as needed.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Proven ROI</h3>
            <p className="text-gray-400">Our customers see an average of 800% ROI within 12 months. Transform your business with cutting-edge technology.</p>
          </motion.div>
        </div>
      </div>

      {/* Services by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Services by Category
        </h2>

        <div className="space-y-8">
          {Object.entries(servicesByCategory).map(([category, services]) => {
            const filteredCategoryServices = services.filter(service => {
              if (selectedPriceRange === 'all') return true;
              const price = parseFloat(service.price.replace(/[$,]/g, ''));
              switch (selectedPriceRange) {
                case 'budget':
                  return price < 3000;
                case 'mid-range':
                  return price >= 3000 && price < 6000;
                case 'enterprise':
                  return price >= 6000;
                default:
                  return true;
              }
            });

            if (filteredCategoryServices.length === 0) return null;

            const IconComponent = getCategoryIcon(category);
            const categoryColor = getCategoryColor(category);
            const isExpanded = expandedCategories.includes(category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full p-6 text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${categoryColor} flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{category}</h3>
                        <p className="text-gray-400">{filteredCategoryServices.length} services available</p>
                      </div>
                    </div>
                    <div className="text-zion-cyan">
                      {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </div>
                  </div>
                </button>

                {/* Category Services */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10"
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {filteredCategoryServices.map((service) => (
                            <div
                              key={service.id}
                              className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-zion-cyan/30 transition-all duration-300"
                            >
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <h4 className="text-lg font-semibold text-white mb-1">{service.name}</h4>
                                  <p className="text-sm text-gray-400 line-clamp-2">{service.tagline}</p>
                                </div>
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-white">{service.price}</div>
                                  <div className="text-sm text-gray-400">{service.period}</div>
                                </div>
                              </div>

                              <div className="space-y-2 mb-4">
                                {service.features.slice(0, 3).map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-sm text-gray-300">
                                    <Check className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                                {service.features.length > 3 && (
                                  <div className="text-xs text-zion-cyan">
                                    +{service.features.length - 3} more features
                                  </div>
                                )}
                              </div>

                              <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                                <div className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {service.trialDays} day trial
                                </div>
                                <div className="flex items-center">
                                  <Zap className="w-3 h-3 mr-1" />
                                  {service.setupTime} setup
                                </div>
                              </div>

                              <div className="flex space-x-2">
                                <Link
                                  to={`/services/${service.id}`}
                                  className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-semibold py-2 px-3 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 text-center"
                                >
                                  Learn More
                                </Link>
                                <Link
                                  to="/contact"
                                  className="bg-white/10 text-white text-sm font-semibold py-2 px-3 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                                >
                                  Contact
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pricing Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Pricing Comparison
        </h2>

        <div className="overflow-x-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 text-white font-semibold">Service</th>
                  <th className="py-4 px-4 text-white font-semibold">Category</th>
                  <th className="py-4 px-4 text-white font-semibold">Price</th>
                  <th className="py-4 px-4 text-white font-semibold">Trial</th>
                  <th className="py-4 px-4 text-white font-semibold">Setup</th>
                  <th className="py-4 px-4 text-white font-semibold">Rating</th>
                  <th className="py-4 px-4 text-white font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service, index) => (
                  <tr key={service.id} className={`border-b border-white/5 ${index % 2 === 0 ? 'bg-white/5' : ''}`}>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center text-sm`}>
                          {service.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-gray-400 text-sm">{service.tagline}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{service.category}</td>
                    <td className="py-4 px-4">
                      <div className="text-white font-semibold">{service.price}</div>
                      <div className="text-gray-400 text-sm">{service.period}</div>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{service.trialDays} days</td>
                    <td className="py-4 px-4 text-gray-300">{service.setupTime}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white">{service.rating}</span>
                        <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20 rounded-3xl p-12 border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Can't find exactly what you need? Our team can create custom solutions tailored to your specific requirements. Contact us for a personalized consultation and quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan font-semibold">+1 302 464 0950</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan font-semibold">kleber@ziontechgroup.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
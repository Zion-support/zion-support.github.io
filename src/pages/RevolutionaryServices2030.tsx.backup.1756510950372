import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Rocket, 
  Zap, 
  Cpu, 
  Heart, 
  Globe, 
  Shield, 
  Lock,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Target,
  Award,
  Lightbulb,
  Gauge,
  BarChart3,
  Settings,
  Database,
  Network,
  Code,
  Palette,
  Gamepad2,
  Music
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { REVOLUTIONARY_SERVICES_2030 } from "@/data/revolutionaryServices2030";
import { EMERGING_TECH_SERVICES_2030 } from "@/data/emergingTechServices2030";
import { REVOLUTIONARY_PRICING_GUIDE_2030 } from "@/data/revolutionaryPricingGuide2030";

export default function RevolutionaryServices2030() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Revolutionary Services', icon: Rocket, color: 'from-zion-purple to-zion-orange' },
    { id: 'AI Services', name: 'AI Services', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'Blockchain Services', name: 'Blockchain Services', icon: Lock, color: 'from-zion-purple to-zion-blue' },
    { id: 'Cybersecurity Services', name: 'Cybersecurity Services', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'Emerging Tech', name: 'Emerging Technology', icon: Cpu, color: 'from-zion-orange to-zion-green' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$1,000 - $10,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$10,000 - $25,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$25,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'innovation', name: 'Innovation Level' },
    { id: 'market-size', name: 'Market Size' }
  ];

  // Combine all revolutionary services
  const allServices = [
    ...REVOLUTIONARY_SERVICES_2030,
    ...EMERGING_TECH_SERVICES_2030
  ];

  // Filter and sort services
  const filteredServices = allServices.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
    const priceMatch = selectedPriceRange === 'all' || 
      (selectedPriceRange === 'budget' && service.pricing.monthly <= 10000) ||
      (selectedPriceRange === 'mid-range' && service.pricing.monthly > 10000 && service.pricing.monthly <= 25000) ||
      (selectedPriceRange === 'enterprise' && service.pricing.monthly > 25000);
    
    return categoryMatch && priceMatch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.pricing.monthly - b.pricing.monthly;
      case 'price-high':
        return b.pricing.monthly - a.pricing.monthly;
      case 'innovation':
        return b.innovationLevel.localeCompare(a.innovationLevel);
      case 'market-size':
        return parseFloat(b.marketSize.replace(/[^0-9.]/g, '')) - parseFloat(a.marketSize.replace(/[^0-9.]/g, ''));
      default:
        return b.featured ? 1 : -1;
    }
  });

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return Brain;
      case 'Blockchain Services':
        return Lock;
      case 'Cybersecurity Services':
        return Shield;
      default:
        return Rocket;
    }
  };

  const getServiceColor = (category: string) => {
    switch (category) {
      case 'AI Services':
        return 'from-zion-cyan to-zion-purple';
      case 'Blockchain Services':
        return 'from-zion-purple to-zion-blue';
      case 'Cybersecurity Services':
        return 'from-zion-purple to-zion-red';
      default:
        return 'from-zion-orange to-zion-green';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Revolutionary Services 2030 - Zion Tech Group"
        description="Discover our revolutionary AI, blockchain, cybersecurity, and emerging technology services that will transform your business in 2030 and beyond."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary Services
              <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-orange bg-clip-text text-transparent">
                2030
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our groundbreaking AI, blockchain, cybersecurity, and emerging technology services. 
              Transform your business with solutions that were once science fiction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Get Started Today
              </Link>
              <Link
                to="#services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Target className="mr-2 h-5 w-5" />
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-zion-cyan mb-2">{allServices.length}</div>
              <div className="text-gray-400">Revolutionary Services</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-zion-purple mb-2">$2.1T+</div>
              <div className="text-gray-400">Combined Market Size</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-zion-orange mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-zion-green mb-2">24/7</div>
              <div className="text-gray-400">Global Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <category.icon className="mr-2 h-4 w-4" />
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Price Range Filter */}
              <div className="flex gap-3">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPriceRange(range.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedPriceRange === range.id
                        ? 'bg-zion-cyan text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {range.name}
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 focus:border-zion-cyan focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {sortedServices.map((service, index) => {
                const IconComponent = getServiceIcon(service.category);
                const colorClass = getServiceColor(service.category);
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-zion-cyan"
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClass}`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        {service.featured && (
                          <span className="px-2 py-1 bg-zion-orange text-white text-xs rounded-full">Featured</span>
                        )}
                        {service.trending && (
                          <span className="px-2 py-1 bg-zion-purple text-white text-xs rounded-full">Trending</span>
                        )}
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    
                    {/* Service Description */}
                    <p className="text-gray-400 mb-4 line-clamp-3">{service.description}</p>

                    {/* Service Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-300">
                        <DollarSign className="mr-2 h-4 w-4 text-zion-green" />
                        <span className="font-medium">${service.pricing.monthly.toLocaleString()}/month</span>
                        <span className="text-gray-500 ml-2">({service.pricing.marketPrice})</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-300">
                        <BarChart3 className="mr-2 h-4 w-4 text-zion-blue" />
                        <span>Market: {service.marketSize}</span>
                      </div>

                      <div className="flex items-center text-sm text-gray-300">
                        <Star className="mr-2 h-4 w-4 text-zion-yellow" />
                        <span>{service.rating}/5 ({service.reviewCount} reviews)</span>
                      </div>

                      <div className="flex items-center text-sm text-gray-300">
                        <Gauge className="mr-2 h-4 w-4 text-zion-purple" />
                        <span>Innovation: {service.innovationLevel}</span>
                      </div>
                    </div>

                    {/* Service Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="mr-2 h-3 w-3 text-zion-green" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Service Actions */}
                    <div className="flex flex-col space-y-3">
                      <Link
                        to={`/services/${service.id}`}
                        className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-center py-3 px-4 rounded-lg font-medium hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                      >
                        Learn More
                      </Link>
                      
                      <div className="flex space-x-2">
                        <Link
                          to="/contact"
                          className="flex-1 bg-gray-700 text-white text-center py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-600 transition-all duration-300"
                        >
                          <Phone className="inline mr-1 h-3 w-3" />
                          Contact
                        </Link>
                        <Link
                          to={service.website}
                          className="flex-1 bg-gray-700 text-white text-center py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-600 transition-all duration-300"
                        >
                          <Globe className="inline mr-1 h-3 w-3" />
                          Website
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                  setSortBy('featured');
                }}
                className="text-zion-cyan hover:text-zion-blue transition-colors duration-300"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team of revolutionary technology experts to discuss how our 2030 services can accelerate your success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="h-8 w-8 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-zion-purple mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-zion-orange mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
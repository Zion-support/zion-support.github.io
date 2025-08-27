import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Server, 
  Rocket, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Target,
  Lightbulb,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Search,
  Filter,
  Grid3X3,
  List
} from 'lucide-react';
import { NEXT_GEN_INNOVATIVE_SERVICES_2025 } from '../data/nextGenInnovativeServices2025';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['all', ...Array.from(new Set(NEXT_GEN_INNOVATIVE_SERVICES_2025.map(s => s.category)))];

  const filteredServices = NEXT_GEN_INNOVATIVE_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'quantum computing':
        return <Cpu className="w-6 h-6" />;
      case 'ai & automation':
        return <Brain className="w-6 h-6" />;
      case 'edge computing':
        return <Server className="w-6 h-6" />;
      case 'blockchain & ai':
        return <Globe className="w-6 h-6" />;
      case 'cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'healthcare':
        return <Target className="w-6 h-6" />;
      case 'financial services':
        return <TrendingUp className="w-6 h-6" />;
      case 'manufacturing':
        return <Code className="w-6 h-6" />;
      case 'retail':
        return <Users className="w-6 h-6" />;
      default:
        return <Rocket className="w-6 h-6" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'revolutionary':
        return 'from-purple-500 to-pink-500';
      case 'advanced':
        return 'from-cyan-500 to-blue-500';
      case 'innovative':
        return 'from-green-500 to-teal-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-gradient-to-br from-zion-slate-dark/80 via-zion-slate/80 to-zion-slate-light/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 h-full transition-all duration-500 hover:border-zion-cyan/40 hover:shadow-2xl hover:shadow-zion-cyan/20">
        {/* Innovation Level Badge */}
        <div className="absolute -top-3 left-6">
          <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)} text-white text-xs font-bold shadow-lg`}>
            {service.innovationLevel}
          </div>
        </div>

        {/* Category Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center text-zion-cyan">
            {getCategoryIcon(service.category)}
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-zion-cyan">
              {service.currency}{service.price.toLocaleString()}
            </div>
            <div className="text-xs text-zion-slate-light">per {service.pricingModel}</div>
          </div>
        </div>

        {/* Service Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-zion-cyan mb-2 flex items-center">
            <CheckCircle className="w-4 h-4 mr-2" />
            Key Features
          </h4>
          <div className="space-y-1">
            {service.features.slice(0, 3).map((feature: string, idx: number) => (
              <div key={idx} className="text-xs text-zion-slate-light flex items-center">
                <div className="w-1 h-1 bg-zion-cyan rounded-full mr-2" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-zion-cyan mb-2 flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            Benefits
          </h4>
          <div className="space-y-1">
            {service.benefits.slice(0, 2).map((benefit: string, idx: number) => (
              <div key={idx} className="text-xs text-zion-slate-light flex items-center">
                <div className="w-1 h-1 bg-zion-purple rounded-full mr-2" />
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* ROI and Market Info */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center p-2 bg-zion-cyan/10 rounded-lg">
            <div className="text-xs text-zion-slate-light">ROI</div>
            <div className="text-sm font-bold text-zion-cyan">{service.roi}</div>
          </div>
          <div className="text-center p-2 bg-zion-purple/10 rounded-lg">
            <div className="text-xs text-zion-slate-light">Delivery</div>
            <div className="text-sm font-bold text-zion-purple">{service.estimatedDelivery}</div>
          </div>
        </div>

        {/* Market Price Comparison */}
        <div className="mb-4 p-3 bg-zion-slate-dark/50 rounded-lg border border-zion-slate/30">
          <div className="text-xs text-zion-slate-light mb-1">Market Price Range</div>
          <div className="text-sm font-semibold text-white">{service.marketPrice}</div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Link
            to={`/services/${service.id}`}
            className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-semibold py-2 px-4 rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 flex items-center justify-center group"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <button className="px-4 py-2 border border-zion-cyan/30 text-zion-cyan text-sm font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300">
            <Star className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const ServiceListItem = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-gradient-to-r from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
        <div className="flex items-start space-x-6">
          {/* Icon and Category */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center text-zion-cyan">
              {getCategoryIcon(service.category)}
            </div>
            <div className="mt-2 text-center">
              <div className={`px-2 py-1 rounded-full bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)} text-white text-xs font-bold`}>
                {service.innovationLevel}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold text-zion-cyan">
                  {service.currency}{service.price.toLocaleString()}
                </div>
                <div className="text-sm text-zion-slate-light">per {service.pricingModel}</div>
                <div className="text-sm text-zion-purple font-semibold mt-1">{service.roi} ROI</div>
              </div>
            </div>

            {/* Features and Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature: string, idx: number) => (
                    <div key={idx} className="text-sm text-zion-slate-light flex items-center">
                      <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zion-purple mb-2">Benefits</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit: string, idx: number) => (
                    <div key={idx} className="text-sm text-zion-slate-light flex items-center">
                      <TrendingUp className="w-3 h-3 text-zion-purple mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-zion-slate-light">
                <span className="font-semibold">Market Price:</span> {service.marketPrice} | 
                <span className="font-semibold ml-2">Delivery:</span> {service.estimatedDelivery}
              </div>
              <Link
                to={`/services/${service.id}`}
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-2 rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 flex items-center group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Comprehensive
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Service Portfolio
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge AI solutions, innovative micro SAAS platforms, and next-generation IT infrastructure 
            designed to transform your business and drive innovation in 2025 and beyond.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark hover:text-white'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>

            {/* Search and View Toggle */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 px-4 py-2 bg-zion-slate-dark/50 border border-zion-slate/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-zion-slate-light" />
              </div>
              
              <div className="flex items-center space-x-2 bg-zion-slate-dark/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <div className="text-zion-slate-light">
            Showing {filteredServices.length} of {NEXT_GEN_INNOVATIVE_SERVICES_2025.length} services
          </div>
        </div>

        {/* Services Display */}
        {filteredServices.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <ServiceListItem key={service.id} service={service} index={index} />
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-16">
            <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria.</div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions and drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 flex items-center justify-center"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border border-zion-cyan/30 text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;

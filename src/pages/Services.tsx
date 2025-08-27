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
  List,
  Atom,
  Heart,
  Scale,
  Factory,
  Satellite,
  ShoppingCart,
  Building,
  Truck,
  DollarSign
} from 'lucide-react';
import { NEXT_GEN_INNOVATIVE_SERVICES_2025 } from '../data/nextGenInnovativeServices2025';
import { ADVANCED_INNOVATIVE_SERVICES_2026 } from '../data/advancedInnovativeServices2026';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedYear, setSelectedYear] = useState<'all' | '2025' | '2026'>('all');

  // Combine all services
  const allServices = [...NEXT_GEN_INNOVATIVE_SERVICES_2025, ...ADVANCED_INNOVATIVE_SERVICES_2026];
  
  // Add year property to distinguish between 2025 and 2026 services
  const servicesWithYear = allServices.map(service => ({
    ...service,
    year: NEXT_GEN_INNOVATIVE_SERVICES_2025.includes(service) ? '2025' : '2026'
  }));

  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];

  const filteredServices = servicesWithYear.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || service.year === selectedYear;
    return matchesCategory && matchesSearch && matchesYear;
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'quantum computing':
      case 'quantum ai':
        return <Atom className="w-6 h-6" />;
      case 'ai & automation':
      case 'ai development':
        return <Brain className="w-6 h-6" />;
      case 'edge computing':
        return <Server className="w-6 h-6" />;
      case 'blockchain & ai':
      case 'blockchain':
        return <Network className="w-6 h-6" />;
      case 'cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'healthcare':
      case 'healthcare ai':
        return <Heart className="w-6 h-6" />;
      case 'financial services':
      case 'ai finance':
        return <TrendingUp className="w-6 h-6" />;
      case 'manufacturing':
      case 'manufacturing ai':
        return <Factory className="w-6 h-6" />;
      case 'retail':
        return <ShoppingCart className="w-6 h-6" />;
      case 'space technology':
      case 'space tech':
        return <Satellite className="w-6 h-6" />;
      case 'neurotechnology':
        return <Brain className="w-6 h-6" />;
      case 'theoretical physics':
        return <Atom className="w-6 h-6" />;
      case 'legal tech':
        return <Scale className="w-6 h-6" />;
      case 'transportation':
        return <Truck className="w-6 h-6" />;
      case 'enterprise':
        return <Building className="w-6 h-6" />;
      default:
        return <Rocket className="w-6 h-6" />;
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'revolutionary':
      case 'futuristic':
      case 'theoretical':
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

        {/* Year Badge */}
        <div className="absolute -top-3 right-6">
          <div className={`px-3 py-1 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-xs font-bold shadow-lg`}>
            {service.year}
          </div>
        </div>

        {/* Category Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-lg flex items-center justify-center">
            {getCategoryIcon(service.category)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-sm text-zion-slate-light">{service.category}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Price and ROI */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-zion-cyan">
            ${service.price.toLocaleString()}
          </div>
          <div className="text-sm text-zion-slate-light">
            ROI: {service.roi}
          </div>
        </div>

        {/* Features Preview */}
        <div className="mb-4">
          <div className="text-xs text-zion-slate-light mb-2">Key Features:</div>
          <div className="flex flex-wrap gap-1">
            {service.features.slice(0, 3).map((feature: string, idx: number) => (
              <span key={idx} className="px-2 py-1 bg-zion-slate-dark/50 rounded text-xs text-zion-slate-light">
                {feature}
              </span>
            ))}
            {service.features.length > 3 && (
              <span className="px-2 py-1 bg-zion-cyan/20 rounded text-xs text-zion-cyan">
                +{service.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-auto">
          <a
            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </a>
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
      <div className="bg-gradient-to-r from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 transition-all duration-500 hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/20">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
            {getCategoryIcon(service.category)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                {service.title}
              </h3>
              <div className={`px-2 py-1 rounded-full text-xs font-bold ${service.year === '2026' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'} text-white`}>
                {service.year}
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getInnovationLevelColor(service.innovationLevel)} text-white`}>
                {service.innovationLevel}
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-3 leading-relaxed">
              {service.description}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-zion-slate-light mb-4">
              <span className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                ${service.price.toLocaleString()}
              </span>
              <span className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                ROI: {service.roi}
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                {service.estimatedDelivery}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
              <a
                href={service.contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zion-cyan/30 text-zion-cyan px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300 flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="text-gradient">Innovative Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto"
          >
            Discover our cutting-edge 2025 and revolutionary 2026 services. From AI automation to quantum computing, 
            we're pioneering the future of technology solutions.
          </motion.p>
        </div>

        {/* Filters Section */}
        <div className="mb-12">
          <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/40 transition-colors duration-300"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan/40 transition-colors duration-300"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

                {/* Year Filter */}
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value as 'all' | '2025' | '2026')}
                  className="px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan/40 transition-colors duration-300"
                >
                  <option value="all">All Years</option>
                  <option value="2025">2025 Services</option>
                  <option value="2026">2026 Services</option>
                </select>
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
            Showing {filteredServices.length} of {allServices.length} services
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
                setSelectedYear('all');
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

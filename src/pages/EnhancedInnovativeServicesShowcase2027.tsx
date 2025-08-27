import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Globe, 
  Zap, 
  Shield, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Code,
  Lock,
  Rocket,
  Leaf,
  Waves,
  Factory,
  Building2,
  Cpu,
  Network,
  Eye,
  Heart,
  Lightbulb,
  TrendingUp,
  Users,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Filter,
  Search,
  Grid3X3,
  List
} from 'lucide-react';
import { enhancedInnovativeServices2027, enhancedInnovativeServices2027Categories } from '../data/enhancedInnovativeServices2027';

const categoryIcons: { [key: string]: React.ComponentType<any> } = {
  'Web3 Solutions': Globe,
  'Metaverse Solutions': Eye,
  'Sustainable Tech': Leaf,
  'NeuroTech Solutions': Brain,
  'Fusion Energy Solutions': Zap,
  'OceanTech Solutions': Waves,
  'AgriTech Solutions': Factory,
  'Smart City Solutions': Building2,
  'Digital Twin Solutions': Cpu,
  'Edge AI Solutions': Network,
  'Federated Learning Solutions': Code
};

const categoryColors: { [key: string]: string } = {
  'Web3 Solutions': 'from-purple-500 to-pink-500',
  'Metaverse Solutions': 'from-blue-500 to-cyan-500',
  'Sustainable Tech': 'from-green-500 to-emerald-500',
  'NeuroTech Solutions': 'from-indigo-500 to-purple-500',
  'Fusion Energy Solutions': 'from-orange-500 to-red-500',
  'OceanTech Solutions': 'from-blue-500 to-teal-500',
  'AgriTech Solutions': 'from-green-500 to-lime-500',
  'Smart City Solutions': 'from-gray-500 to-blue-500',
  'Digital Twin Solutions': 'from-purple-500 to-indigo-500',
  'Edge AI Solutions': 'from-red-500 to-pink-500',
  'Federated Learning Solutions': 'from-yellow-500 to-orange-500'
};

export default function EnhancedInnovativeServicesShowcase2027() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'innovation'>('name');

  const filteredServices = enhancedInnovativeServices2027.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'innovation':
        const innovationOrder = { 'Breakthrough': 3, 'Cutting-edge': 2, 'Advanced': 1, 'Innovative': 0 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - 
               (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      default:
        return 0;
    }
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                Innovative Services 2027
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover cutting-edge micro SAAS, IT services, and AI solutions that will transform your business in 2027 and beyond
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-zion-cyan text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Explore Services
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-slate-dark/50 backdrop-blur-sm border-t border-b border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zion-slate-light">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-zion-cyan" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-zion-blue transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-zion-cyan text-white'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70'
                }`}
              >
                All Categories
              </button>
              {enhancedInnovativeServices2027Categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode and Sort */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-zion-slate-dark/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="innovation">Sort by Innovation</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {viewMode === 'grid' ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sortedServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 h-full">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColors[service.category]}`}>
                      {React.createElement(categoryIcons[service.category] || Code, { className: "w-5 h-5 text-white" })}
                    </div>
                    <span className="text-sm font-medium text-zion-cyan">{service.category}</span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Price and Billing */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                    <div className="text-sm text-zion-slate-light capitalize">{service.billing}</div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-sm text-zion-slate-light/70">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Innovation Level */}
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-zion-slate-light">
                      Innovation Level: <span className="text-zion-cyan font-medium">{service.innovationLevel}</span>
                    </span>
                  </div>

                  {/* Market Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <div className="text-zion-slate-light">Market Size</div>
                      <div className="text-white font-medium">{service.marketSize}</div>
                    </div>
                    <div>
                      <div className="text-zion-slate-light">Growth Rate</div>
                      <div className="text-white font-medium">{service.growthRate}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <a
                      href={service.href}
                      target={service.external ? "_blank" : "_self"}
                      rel={service.external ? "noopener noreferrer" : ""}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-xl font-semibold text-center block hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      {service.ctaLabel}
                      {service.external && <ExternalLink className="w-4 h-4" />}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {sortedServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-zion-slate-dark/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left Column - Basic Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColors[service.category]}`}>
                        {React.createElement(categoryIcons[service.category] || Code, { className: "w-6 h-6 text-white" })}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-zion-cyan">{service.category}</span>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-zion-slate-light mb-4 text-lg">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-zion-slate-light text-sm">Price</div>
                        <div className="text-white font-semibold">{service.price}</div>
                      </div>
                      <div>
                        <div className="text-zion-slate-light text-sm">Billing</div>
                        <div className="text-white font-semibold capitalize">{service.billing}</div>
                      </div>
                      <div>
                        <div className="text-zion-slate-light text-sm">Innovation</div>
                        <div className="text-white font-semibold">{service.innovationLevel}</div>
                      </div>
                      <div>
                        <div className="text-zion-slate-light text-sm">ROI</div>
                        <div className="text-white font-semibold">{service.roi}</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Features and CTA */}
                  <div className="lg:w-80">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 6).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <div key={index} className="text-sm text-zion-slate-light">
                            • {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href={service.href}
                      target={service.external ? "_blank" : "_self"}
                      rel={service.external ? "noopener noreferrer" : ""}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-xl font-semibold text-center block hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      {service.ctaLabel}
                      {service.external && <ExternalLink className="w-4 h-4" />}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* No Results */}
        {sortedServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light">
              Try adjusting your search terms or category filters
            </p>
          </div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-slate-dark to-zion-slate border-t border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions and drive innovation in your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="https://ziontechgroup.com"
                whileHover={{ scale: 1.05 }}
                className="bg-zion-cyan text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                Visit Website
              </motion.a>
              <motion.a
                href="tel:+13024640950"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.a
                href="mailto:kleber@ziontechgroup.com"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
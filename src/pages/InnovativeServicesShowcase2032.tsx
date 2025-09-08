import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Leaf, 
  Building2, 
  Link, 
  Scale, 
  Rocket, 
  GraduationCap, 
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Globe,
  Users,
  Zap,
  Target,
  Award,
  Clock,
  DollarSign,
  BarChart3,
  Cpu,
  Database,
  Cloud,
  Lock,
  Eye,
  MessageSquare,
  Workflow,
  Atom,
  Satellite,
  Building,
  Car,
  ShoppingBag,
  BookOpen,
  Gavel,
  Home,
  Calculator
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { innovativeMicroSaasServices2032 } from '../data/innovativeMicroSaasServices2032';

export default function InnovativeServicesShowcase2032() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: innovativeMicroSaasServices2032.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: Brain, count: innovativeMicroSaasServices2032.filter(s => s.category === 'AI & Machine Learning').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: innovativeMicroSaasServices2032.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Green Technology', name: 'Green Tech', icon: Leaf, count: innovativeMicroSaasServices2032.filter(s => s.category === 'Green Technology').length },
    { id: 'Healthcare Tech', name: 'Healthcare', icon: Building2, count: innovativeMicroSaasServices2032.filter(s => s.category === 'Healthcare Tech').length },
    { id: 'Blockchain & Web3', name: 'Blockchain', icon: Link, count: innovativeMicroSaasServices2032.filter(s => s.category === 'Blockchain & Web3').length },
    { id: 'Legal Tech', name: 'Legal Tech', icon: Scale, count: innovativeMicroSaasServices2032.filter(s => s.category === 'Legal Tech').length },
    { id: 'Space Technology', name: 'Space Tech', icon: Rocket, count: innovativeMicroSaasServices2032.filter(s => s.category === 'Space Technology').length },
    { id: 'Education Tech', name: 'EdTech', icon: GraduationCap, count: innovativeMicroSaasServices2032.filter(s => s.category === 'Education Tech').length },
    { id: 'Quantum Computing', name: 'Quantum', icon: Atom, count: innovativeMicroSaasServices2032.filter(s => s.category === 'Quantum Computing').length }
  ];

  const filteredServices = innovativeMicroSaasServices2032
    .filter(service => 
      (selectedCategory === 'all' || service.category === selectedCategory) &&
      (searchQuery === '' || 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        case 'newest':
          return b.new ? 1 : -1;
        case 'popular':
          return b.popular ? 1 : -1;
        case 'featured':
        default:
          return b.featured ? 1 : -1;
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { label: 'Total Services', value: innovativeMicroSaasServices2032.length, icon: Star },
    { label: 'AI Services', value: innovativeMicroSaasServices2032.filter(s => s.category === 'AI & Machine Learning').length, icon: Brain },
    { label: 'New Services', value: innovativeMicroSaasServices2032.filter(s => s.new).length, icon: Zap },
    { label: 'Featured', value: innovativeMicroSaasServices2032.filter(s => s.featured).length, icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="2032 Innovative Services Showcase - Zion Tech Group" 
        description="Discover our cutting-edge 2032 innovative services including AI solutions, quantum computing, blockchain, and emerging technologies. Transform your business with Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Star className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              2032 Innovative Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge micro SAAS services, AI solutions, 
              and emerging technologies designed to transform your business and drive innovation
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-zion-cyan mb-1">{stat.value}</div>
                  <div className="text-sm text-zion-slate-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <label className="text-zion-slate-light text-sm">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-zion-slate-dark border border-zion-cyan/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="popular">Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark text-zion-slate-light hover:bg-zion-slate hover:text-white border border-zion-cyan/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="group relative bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Badges */}
                <div className="flex gap-2 mb-4">
                  {service.new && (
                    <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full font-medium">
                      New
                    </span>
                  )}
                  {service.featured && (
                    <span className="px-2 py-1 bg-zion-cyan text-white text-xs rounded-full font-medium">
                      Featured
                    </span>
                  )}
                  {service.popular && (
                    <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full font-medium">
                      Popular
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.name}</h3>
                <p className="text-zion-slate-light mb-4 text-center">{service.tagline}</p>
                <p className="text-sm text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-zion-cyan">{service.price}</div>
                  <div className="text-sm text-zion-slate-light">per {service.billing}</div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
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

                {/* ROI */}
                {service.roi && (
                  <div className="text-center mb-6 p-3 bg-green-600/20 border border-green-600/30 rounded-lg">
                    <div className="text-green-400 font-semibold">ROI</div>
                    <div className="text-white font-bold">{service.roi}</div>
                  </div>
                )}

                {/* CTA Button */}
                <div className="text-center">
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-zion-cyan/25"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Contact Info */}
                <div className="mt-6 pt-4 border-t border-zion-cyan/20 text-center text-sm text-zion-slate-light">
                  <div>Contact: {service.contactInfo.email}</div>
                  <div>Phone: {service.contactInfo.mobile}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our innovative 2032 services can drive growth, 
              improve efficiency, and give you a competitive edge in your industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-8 text-zion-slate-light">
              <p>Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
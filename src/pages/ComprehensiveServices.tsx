import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, DollarSign, ExternalLink, Workflow, MessageSquare, Globe, TrendingUp, Sparkles, Bot, Shield, FileText, Users, BarChart3, Cloud, ShieldCheck, Star, Phone, Mail, MapPin, Zap, Rocket, Car, Dna, Robot, Eye, Atom, Microscope, City, RefreshCw, Globe2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { zionCuttingEdgeServices2029 } from '../../data/zion-2029-cutting-edge-services';
import { zionEmergingTechServices2029 } from '../../data/zion-2029-emerging-tech-services';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Cpu, 
  Database, 
  Rocket, 
  Target, 
  Users, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Workflow,
  Atom,
  MessageCircle,
  PenTool,
  Calendar,
  Heart,
  DollarSign,
  ShoppingBag,
  Settings,
  Globe,
  Award,
  TrendingUp
} from 'lucide-react';
import SEO from '../components/SEO';

export default function ComprehensiveServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');

  // Combine all services
  const allServices = [...zionCuttingEdgeServices2029, ...zionEmergingTechServices2029];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return b.isPopular ? 1 : -1;
    }
  });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4">
          <span className="text-2xl">{service.icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">{service.name}</h3>
          <p className="text-sm text-cyan-400">{service.category}</p>
        </div>
        {service.isPopular && (
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Popular
          </div>
        )}
        {service.isNew && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            New
          </div>
        )}
      </div>
      
      <p className="text-gray-300 mb-2 font-medium">{service.tagline}</p>
      <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
      
      <div className="mb-4">
        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
        <span className="text-gray-400">{service.period}</span>
        <p className="text-sm text-gray-500 mt-1">{service.marketPrice}</p>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? "text-yellow-400" : "text-gray-600"}`} />
            ))}
          </div>
          <span className="text-sm text-gray-400 ml-2">({service.reviews} reviews)</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
        <div className="grid grid-cols-1 gap-1">
          {service.features.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-300">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
        <div className="grid grid-cols-1 gap-1">
          {service.benefits.slice(0, 3).map((benefit, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-300">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
              {benefit}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 p-3 bg-slate-700/30 rounded-lg">
        <div className="text-xs text-gray-400 mb-1">Market Size: {service.marketSize}</div>
        <div className="text-xs text-gray-400 mb-1">Growth Rate: {service.growthRate}</div>
        <div className="text-xs text-gray-400">ROI: {service.roi}</div>
      </div>

      <div className="flex gap-2">
        <Link
          to={service.link}
          className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm font-medium"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
        <a
          href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
          className="inline-flex items-center justify-center px-3 py-2 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
          title="Contact Sales"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services - Zion Tech Group" 
        description="Discover our complete portfolio of cutting-edge AI, IT, and emerging technology services. From quantum computing to space technology, we deliver innovative solutions for the future."
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Cutting-Edge Technology Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <br />
              <span className="text-white">Comprehensive Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Leading the future with revolutionary AI, quantum computing, space technology, and emerging tech solutions. 
              Transform your business with our cutting-edge micro SAAS, IT infrastructure, and AI innovation services.
            </p>
            
            {/* Contact Information */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Zion Tech Group</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold text-lg rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Globe className="w-5 h-5 mr-2" />
                Visit Our Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
              >
                <option value="popular" className="bg-slate-800 text-white">Most Popular</option>
                <option value="rating" className="bg-slate-800 text-white">Highest Rated</option>
                <option value="price-low" className="bg-slate-800 text-white">Price: Low to High</option>
                <option value="price-high" className="bg-slate-800 text-white">Price: High to Low</option>
                <option value="newest" className="bg-slate-800 text-white">Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {filteredServices.length} Revolutionary Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge technology solutions designed to transform industries and drive innovation
            </p>
          </motion.div>
          
          {sortedServices.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {sortedServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or browse all categories</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-cyan-400">Business</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cutting-edge services can help you achieve your business goals and drive innovation. 
              Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold text-lg rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Infinity,
  Atom,
  Eye,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  Play,
  MailIcon as MailIcon2
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { REVOLUTIONARY_SERVICES_2030 } from '../data/revolutionaryServices2030';

export default function RevolutionaryServices2030() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  // Get unique categories from services
  const categories = [
    { id: 'all', name: 'All Services', count: REVOLUTIONARY_SERVICES_2030.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Operations').length, icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'AI & Content', name: 'AI & Content', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Business Intelligence').length, icon: '📊', color: 'from-indigo-500 to-blue-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-blue-500 to-cyan-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐', color: 'from-teal-500 to-cyan-500' },
    { id: 'Digital Twin', name: 'Digital Twin', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'Digital Twin').length, icon: '🔄', color: 'from-blue-500 to-indigo-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' },
    { id: 'FinTech', name: 'FinTech', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Education', name: 'AI & Education', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Entertainment').length, icon: '🎮', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Research', name: 'AI & Research', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' },
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Green Tech').length, icon: '🌿', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Space Tech').length, icon: '🛸', color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Development', name: 'AI & Development', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Development').length, icon: '💻', color: 'from-cyan-500 to-blue-500' }
  ];

  const filteredServices = REVOLUTIONARY_SERVICES_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return b.rating - a.rating;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Revolutionary Services 2030 - Zion Tech Group"
        description="Discover our cutting-edge revolutionary services for 2030 including AI-powered autonomous operations, quantum cybersecurity, and next-generation technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary Services
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                2030
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our cutting-edge AI, IT infrastructure, and micro SAAS solutions designed for the next decade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{REVOLUTIONARY_SERVICES_2030.length}</div>
              <div className="text-gray-400">Revolutionary Services</div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-gray-400">AI Accuracy</div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">1000%</div>
              <div className="text-gray-400">ROI Potential</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search revolutionary services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Sort */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence>
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
                  className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  {/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-300">{service.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Price:</span>
                      <span className="text-cyan-400 font-bold">
                        {service.currency}{service.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Market Price:</span>
                      <span className="text-green-400 text-sm">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">ROI:</span>
                      <span className="text-yellow-400 text-sm">{service.roi}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Setup Time:</span>
                      <span className="text-blue-400 text-sm">{service.setupTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {service.tags.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700 text-gray-400 text-xs rounded-md">
                          +{service.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-slate-700 pt-4">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                      <span>Contact:</span>
                      <span className="text-cyan-400">{service.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>Email:</span>
                      <span className="text-cyan-400">{service.contactInfo.email}</span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        to={`/contact?service=${service.id}`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Quote
                      </Link>
                      <Link
                        to={service.contactInfo.website}
                        className="flex-1 border border-cyan-500 text-cyan-400 text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
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
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our revolutionary 2030 services. 
              Get in touch to discuss how we can help you achieve unprecedented growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
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
  Building2,
  Car,
  Factory,
  GraduationCap,
  Scale,
  Truck,
  Wheat,
  Zap2,
  Brain2,
  Cloud2,
  Lock2,
  ChevronLeft,
  ChevronRight,
  Factory2,
  Leaf2,
  Rocket2,
  Atom,
  Eye,
  Heart2,
  Briefcase,
  GraduationCap2,
  ShoppingBag,
  Car2,
  Building3,
  Globe3,
  Shield3,
  Brain3,
  Cloud3,
  Lock3,
  Zap3,
  Users2,
  Code2,
  Database2,
  Network2,
  Smartphone2,
  BarChart4,
  MessageSquare2,
  FileText2,
  ShoppingCart2,
  Headphones2,
  Mail2,
  Search2,
  HelpCircle2,
  ShieldCheck2,
  Globe4,
  Leaf3,
  Sparkles2,
  Target2,
  DollarSign2,
  Clock2,
  Award2,
  Phone2,
  MapPin2,
  Infinity2,
  Building4,
  Car3,
  Factory3,
  GraduationCap3,
  Scale2,
  Truck2,
  Wheat2,
  Zap4,
  Brain4,
  Cloud4,
  Lock4,
  ChevronLeft2,
  ChevronRight2
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSAASServices2025';
import { COMPREHENSIVE_PRICING_GUIDE_2030 } from '../data/comprehensivePricingGuide2030';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // Enhanced categories with new services
  const categories = [
    { id: 'all', name: 'All Services', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Business Intelligence').length, icon: '📊', color: 'from-blue-500 to-cyan-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' },
    { id: 'AI & Content', name: 'AI & Content', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' },
    { id: 'AI & Development', name: 'AI & Development', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Development').length, icon: '💻', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' },
    { id: 'FinTech', name: 'FinTech', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Legal', name: 'AI & Legal', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Legal').length, icon: '⚖️', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Real Estate', name: 'AI & Real Estate', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Real Estate').length, icon: '🏠', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Hospitality', name: 'AI & Hospitality', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Hospitality').length, icon: '🍽️', color: 'from-orange-500 to-yellow-500' },
    { id: 'AI & Fitness', name: 'AI & Fitness', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Fitness').length, icon: '💪', color: 'from-green-500 to-teal-500' },
    { id: 'AI & E-commerce', name: 'AI & E-commerce', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & E-commerce').length, icon: '🛒', color: 'from-blue-500 to-purple-500' },
    { id: 'AI & Manufacturing', name: 'AI & Manufacturing', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Manufacturing').length, icon: '🏭', color: 'from-gray-500 to-blue-500' },
    { id: 'AI & Logistics', name: 'AI & Logistics', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Logistics').length, icon: '🚚', color: 'from-blue-500 to-green-500' },
    { id: 'AI & Agriculture', name: 'AI & Agriculture', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Agriculture').length, icon: '🌾', color: 'from-green-500 to-yellow-500' },
    { id: 'AI & Construction', name: 'AI & Construction', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Construction').length, icon: '🏗️', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Retail', name: 'AI & Retail', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Retail').length, icon: '🛍️', color: 'from-purple-500 to-pink-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-purple-500 to-blue-500' },
    { id: 'Metaverse & VR', name: 'Metaverse & VR', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Metaverse & VR').length, icon: '🥽', color: 'from-indigo-500 to-purple-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' },
    { id: 'Space Technology', name: 'Space Technology', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-blue-500 to-indigo-500' },
    { id: 'Autonomous Systems', name: 'Autonomous Systems', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Autonomous Systems').length, icon: '🤖', color: 'from-gray-500 to-blue-500' },
    { id: 'Neurotechnology', name: 'Neurotechnology', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Neurotechnology').length, icon: '🧠', color: 'from-pink-500 to-purple-500' },
    { id: 'Biotechnology', name: 'Biotechnology', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Biotechnology').length, icon: '🧬', color: 'from-green-500 to-blue-500' },
    { id: 'Quantum Security', name: 'Quantum Security', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Quantum Security').length, icon: '🔐', color: 'from-red-500 to-purple-500' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Sustainable Technology').length, icon: '🌱', color: 'from-green-500 to-emerald-500' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-blue-500 to-cyan-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'IoT & Edge Computing').length, icon: '📡', color: 'from-purple-500 to-blue-500' },
    { id: 'Digital Twin', name: 'Digital Twin', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'Digital Twin').length, icon: '🔄', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Customer Support').length, icon: '🎧', color: 'from-blue-500 to-green-500' },
    { id: 'AI & HR', name: 'AI & HR', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Research', name: 'AI & Research', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Education', name: 'AI & Education', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-green-500 to-blue-500' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === 'AI & Entertainment').length, icon: '🎮', color: 'from-purple-500 to-pink-500' }
  ];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
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

  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = sortedServices.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="Innovative AI & IT Services - Zion Tech Group"
        description="Discover cutting-edge AI-powered micro SAAS services, IT solutions, and emerging technology services. Transform your business with our innovative solutions."
        keywords="AI services, micro SAAS, IT solutions, emerging technology, business intelligence, cybersecurity, quantum computing, blockchain, metaverse"
        ogType="website"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Revolutionary AI & IT Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with our cutting-edge AI-powered micro SAAS services, 
            specialized industry solutions, and emerging technology platforms. 
            Experience the future of business technology.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div 
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-blue-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-2" />
                <p className="text-white font-semibold">Call Us</p>
                <p className="text-blue-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-2" />
                <p className="text-white font-semibold">Email Us</p>
                <p className="text-purple-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-400 mb-2" />
                <p className="text-white font-semibold">Visit Us</p>
                <p className="text-green-300">364 E Main St STE 1008</p>
                <p className="text-green-300">Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/request-quote" 
              className="btn-futuristic text-lg px-8 py-4"
            >
              Get Free Quote
            </Link>
            <Link 
              to="/demo" 
              className="btn-futuristic-outline text-lg px-8 py-4"
            >
              Schedule Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our innovative services span across multiple industries and technologies, 
              providing cutting-edge solutions for modern businesses. From AI-powered 
              business intelligence to quantum computing and emerging technologies.
            </p>
          </motion.div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {categories.slice(0, 16).map((category, index) => (
              <motion.div
                key={category.id}
                className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {category.count} Services
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="reviews">Sort by Reviews</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Category:</span>
                    <span className="text-blue-400 text-sm font-medium">{service.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Price:</span>
                    <span className="text-green-400 text-lg font-bold">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Rating:</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white ml-1">{service.rating}</span>
                      <span className="text-gray-400 ml-1">({service.reviewCount})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">AI Score:</span>
                    <span className="text-purple-400 font-semibold">{service.aiScore}%</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-yellow-400">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">ROI:</span>
                    <span className="text-green-400 font-semibold">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-blue-400">{service.setupTime}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/request-quote"
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-slate-700/50 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600/50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700/50 text-white hover:bg-slate-600/50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-slate-700/50 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600/50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our innovative AI and IT services 
              to gain competitive advantages and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/request-quote" 
                className="btn-futuristic text-lg px-8 py-4"
              >
                Start Your Project
              </Link>
              <Link 
                to="/contact" 
                className="btn-futuristic-outline text-lg px-8 py-4"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {INNOVATIVE_MICRO_SAAS_SERVICES_2025.length}+
                  </div>
                  <div className="text-gray-300">Services Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
                  <div className="text-gray-300">Customer Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

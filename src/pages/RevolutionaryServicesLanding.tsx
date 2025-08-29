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
  Microscope,
  GraduationCap,
  Palette,
  Satellite,
  TreePine,
  Truck,
  Home,
  ShieldAlert,
  Sprout,
  Zap as Lightning
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { REVOLUTIONARY_SERVICES_2030 } from '../data/revolutionaryServices2030';

export default function RevolutionaryServicesLanding() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  // Enhanced categories with icons and colors
  const categories = [
    { id: 'all', name: 'All Services', count: REVOLUTIONARY_SERVICES_2030.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'FinTech', name: 'FinTech & Financial Services', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Technology', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Research', name: 'AI & Research', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' },
    { id: 'AI & Education', name: 'AI & Education', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Entertainment').length, icon: '🎮', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' },
    { id: 'AI & Development', name: 'AI & Development', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Development').length, icon: '💻', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' },
    { id: 'AI & Space Tech', name: 'AI & Space Technology', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Space Tech').length, icon: '🛸', color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Green Tech', name: 'AI & Green Technology', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'AI & Green Tech').length, icon: '🌿', color: 'from-green-500 to-emerald-500' },
    { id: 'Supply Chain', name: 'Supply Chain & Logistics', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'Supply Chain').length, icon: '🚚', color: 'from-orange-500 to-red-500' },
    { id: 'Real Estate', name: 'Real Estate & Property', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'Real Estate').length, icon: '🏠', color: 'from-blue-500 to-cyan-500' },
    { id: 'Insurance', name: 'Insurance & Risk Management', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'Insurance').length, icon: '🛡️', color: 'from-yellow-500 to-orange-500' },
    { id: 'Agriculture', name: 'Agriculture & AgTech', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'Agriculture').length, icon: '🌾', color: 'from-green-500 to-teal-500' },
    { id: 'Energy', name: 'Energy & Utilities', count: REVOLUTIONARY_SERVICES_2030.filter(s => s.category === 'Energy').length, icon: '⚡', color: 'from-yellow-500 to-orange-500' }
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Revolutionary Micro SAAS, IT & AI Services 2030 | Zion Tech Group"
        description="Discover our revolutionary micro SAAS, IT, and AI services for 2030. Cutting-edge solutions across FinTech, Healthcare, Legal Tech, Education, and more with proven ROI and enterprise-grade quality."
        keywords="revolutionary services, micro SAAS 2030, AI services, IT services, FinTech, healthcare AI, legal tech, education AI, metaverse, space tech, green tech"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  2030 & Beyond
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
                Experience the future of technology with our revolutionary micro SAAS, IT infrastructure, and AI services. 
                From FinTech to Space Tech, we're delivering cutting-edge solutions that transform industries and drive unprecedented growth.
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 rounded-lg border border-cyan-500/30">
                  <div className="text-cyan-400 text-4xl mb-2">🚀</div>
                  <h3 className="text-white font-semibold mb-2">Revolutionary Innovation</h3>
                  <p className="text-slate-300 text-sm">Cutting-edge AI, quantum computing, and emerging technologies</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-lg border border-purple-500/30">
                  <div className="text-purple-400 text-4xl mb-2">💎</div>
                  <h3 className="text-white font-semibold mb-2">Proven ROI</h3>
                  <p className="text-slate-300 text-sm">Average 400%+ return on investment within 6-8 months</p>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-lg border border-green-500/30">
                  <div className="text-green-400 text-4xl mb-2">🌍</div>
                  <h3 className="text-white font-semibold mb-2">Global Impact</h3>
                  <p className="text-slate-300 text-sm">Solutions deployed worldwide with enterprise-grade security</p>
                </div>
              </div>
            </motion.div>

            {/* Search and Filter Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search revolutionary services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-80"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
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
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
                >
                  {/* Service Image */}
                  <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <div className="text-6xl opacity-60 group-hover:opacity-80 transition-opacity">
                      {service.category === 'FinTech' && '💰'}
                      {service.category === 'AI & Healthcare' && '🏥'}
                      {service.category === 'AI & Legal Tech' && '⚖️'}
                      {service.category === 'AI & Research' && '🔬'}
                      {service.category === 'AI & Education' && '🎓'}
                      {service.category === 'AI & Entertainment' && '🎮'}
                      {service.category === 'AI & Operations' && '⚙️'}
                      {service.category === 'AI & Development' && '💻'}
                      {service.category === 'AI & Metaverse' && '🌍'}
                      {service.category === 'AI & Space Tech' && '🛸'}
                      {service.category === 'AI & Green Tech' && '🌿'}
                      {service.category === 'Supply Chain' && '🚚'}
                      {service.category === 'Real Estate' && '🏠'}
                      {service.category === 'Insurance' && '🛡️'}
                      {service.category === 'Agriculture' && '🌾'}
                      {service.category === 'Energy' && '⚡'}
                      {!['FinTech', 'AI & Healthcare', 'AI & Legal Tech', 'AI & Research', 'AI & Education', 'AI & Entertainment', 'AI & Operations', 'AI & Development', 'AI & Metaverse', 'AI & Space Tech', 'AI & Green Tech', 'Supply Chain', 'Real Estate', 'Insurance', 'Agriculture', 'Energy'].includes(service.category) && '🚀'}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                        {service.subcategory}
                      </span>
                      {service.featured && (
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center gap-1 text-slate-400">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{service.rating}</span>
                        <span className="text-slate-500">({service.reviewCount})</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <Brain className="w-4 h-4 text-cyan-400" />
                        <span>AI {service.aiScore}</span>
                      </div>
                    </div>

                    {/* Pricing & ROI */}
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-sm">Starting Price</span>
                        <span className="text-white font-bold text-lg">
                          {service.currency}{service.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Market Price</span>
                        <span className="text-cyan-400">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">ROI</span>
                        <span className="text-green-400 font-medium">{service.roi}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium"
                      >
                        Learn More
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Setup Info */}
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Setup Time: {service.setupTime}</span>
                        <span>Availability: {service.availability}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results Message */}
            {sortedServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
                <p className="text-slate-400">Try adjusting your search criteria or browse all categories.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Join hundreds of organizations already leveraging our revolutionary services to achieve unprecedented growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Revolutionary Services Consultation"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
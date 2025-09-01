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
  Satellite,
  Telescope,
  Microscope,
  Car,
  Building,
  Factory,
  Hospital,
  GraduationCap,
  Gamepad2,
  Scale,
  Truck,
  Leaf as LeafIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { EXPANDED_INNOVATIVE_SERVICES_2031 } from '../data/expandedInnovativeServices2031';
import { QUANTUM_SPACE_TECH_SERVICES_2031 } from '../data/quantumSpaceTechServices2031';

export default function ComprehensiveServicesLanding2031() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  // Combine all services
  const allServices = [...EXPANDED_INNOVATIVE_SERVICES_2031, ...QUANTUM_SPACE_TECH_SERVICES_2031];

  // Get unique categories from services
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: allServices.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 'FinTech', name: 'FinTech', count: allServices.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: allServices.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Education', name: 'AI & Education', count: allServices.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Entertainment', name: 'AI & Entertainment', count: allServices.filter(s => s.category === 'AI & Entertainment').length, icon: '🎮', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Operations', name: 'AI & Operations', count: allServices.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' },
    { id: 'AI & Real Estate', name: 'AI & Real Estate', count: allServices.filter(s => s.category === 'AI & Real Estate').length, icon: '🏠', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Logistics', name: 'AI & Logistics', count: allServices.filter(s => s.category === 'AI & Logistics').length, icon: '🚚', color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Agriculture', name: 'AI & Agriculture', count: allServices.filter(s => s.category === 'AI & Agriculture').length, icon: '🌾', color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Energy', name: 'AI & Energy', count: allServices.filter(s => s.category === 'AI & Energy').length, icon: '⚡', color: 'from-yellow-500 to-orange-500' },
    { id: 'AI & Retail', name: 'AI & Retail', count: allServices.filter(s => s.category === 'AI & Retail').length, icon: '🛍️', color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Insurance', name: 'AI & Insurance', count: allServices.filter(s => s.category === 'AI & Insurance').length, icon: '🛡️', color: 'from-blue-500 to-indigo-500' },
    { id: 'AI & Hospitality', name: 'AI & Hospitality', count: allServices.filter(s => s.category === 'AI & Hospitality').length, icon: '🏨', color: 'from-orange-500 to-red-500' },
    { id: 'AI & Construction', name: 'AI & Construction', count: allServices.filter(s => s.category === 'AI & Construction').length, icon: '🏗️', color: 'from-gray-500 to-slate-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' },
    { id: 'Space Technology', name: 'Space Technology', count: allServices.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-purple-500 to-pink-500' }
  ];

  const filteredServices = allServices.filter(service => {
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'FinTech': return <DollarSign className="w-6 h-6" />;
      case 'AI & Healthcare': return <Heart className="w-6 h-6" />;
      case 'AI & Legal Tech': return <Scale className="w-6 h-6" />;
      case 'AI & Education': return <GraduationCap className="w-6 h-6" />;
      case 'AI & Entertainment': return <Gamepad2 className="w-6 h-6" />;
      case 'AI & Operations': return <Factory className="w-6 h-6" />;
      case 'AI & Real Estate': return <Building className="w-6 h-6" />;
      case 'AI & Logistics': return <Truck className="w-6 h-6" />;
      case 'AI & Agriculture': return <LeafIcon className="w-6 h-6" />;
      case 'AI & Energy': return <ZapIcon className="w-6 h-6" />;
      case 'AI & Retail': return <ShoppingCart className="w-6 h-6" />;
      case 'AI & Insurance': return <ShieldIcon className="w-6 h-6" />;
      case 'AI & Hospitality': return <Building className="w-6 h-6" />;
      case 'AI & Construction': return <Building className="w-6 h-6" />;
      case 'Quantum Computing': return <Atom className="w-6 h-6" />;
      case 'Space Technology': return <Satellite className="w-6 h-6" />;
      default: return <Brain className="w-6 h-6" />;
    }
  };

  return (
    <>
      <SEO 
        title="Comprehensive Micro SAAS, IT & AI Services 2031 | Zion Tech Group"
        description="Discover our revolutionary 2031 portfolio of cutting-edge micro SAAS, IT, and AI services. From quantum computing to space technology, transform your business with Zion Tech Group."
        keywords="micro SAAS 2031, IT services 2031, AI services 2031, quantum computing, space technology, fintech, healthcare AI, legal tech, education AI, entertainment AI, construction AI, real estate AI, logistics AI, agriculture AI, energy AI, retail AI, insurance AI, hospitality AI"
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
                  Revolutionary 2031
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Micro SAAS & AI Services
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
                Experience the future of technology with our comprehensive portfolio of cutting-edge micro SAAS solutions, 
                enterprise IT services, and AI-powered innovations. From quantum computing to space technology, 
                we're delivering real results with proven ROI and enterprise-grade security.
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
                  <h3 className="text-white font-semibold mb-2">Cutting-Edge Innovation</h3>
                  <p className="text-slate-300 text-sm">Latest AI, quantum computing, and space technology solutions</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-lg border border-purple-500/30">
                  <div className="text-purple-400 text-4xl mb-2">💰</div>
                  <h3 className="text-white font-semibold mb-2">Proven ROI</h3>
                  <p className="text-slate-300 text-sm">Average 400-2000% return on investment within months</p>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-lg border border-green-500/30">
                  <div className="text-green-400 text-4xl mb-2">⚡</div>
                  <h3 className="text-white font-semibold mb-2">Rapid Deployment</h3>
                  <p className="text-slate-300 text-sm">Most solutions deployed in 2-8 weeks</p>
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
                    placeholder="Search services..."
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
              className="flex flex-wrap gap-3 justify-center"
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
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-400 text-sm">{service.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{service.rating}</span>
                      <span className="text-slate-400 text-sm">({service.reviewCount})</span>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Service Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Price:</span>
                      <span className="text-white font-semibold">${service.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Market Price:</span>
                      <span className="text-cyan-400">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">ROI:</span>
                      <span className="text-green-400 font-semibold">{service.roi}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Setup Time:</span>
                      <span className="text-orange-400">{service.setupTime}</span>
                    </div>
                  </div>

                  {/* AI Score */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-400 text-sm">AI Intelligence Score:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                          style={{ width: `${service.aiScore}%` }}
                        ></div>
                      </div>
                      <span className="text-cyan-400 font-semibold text-sm">{service.aiScore}%</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm font-medium"
                    >
                      Learn More
                    </Link>
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="flex-1 bg-slate-700 text-white text-center py-2 px-4 rounded-lg hover:bg-slate-600 transition-all duration-300 text-sm font-medium"
                    >
                      Get Quote
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Contact: {service.contactInfo.phone}</span>
                      <a
                        href={`mailto:${service.contactInfo.email}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        {service.contactInfo.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl border border-cyan-500/30"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Join thousands of businesses already leveraging our cutting-edge AI and technology solutions. 
                Get started today and experience unprecedented growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:scale-105"
                >
                  <MailIcon className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We're not just another technology company. We're your strategic partner in digital transformation, 
                delivering real results with cutting-edge innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Award className="w-12 h-12 text-cyan-400" />,
                  title: "Proven Excellence",
                  description: "4.9/5 rating across all services with thousands of satisfied clients worldwide"
                },
                {
                  icon: <TrendingUp className="w-12 h-12 text-green-400" />,
                  title: "Guaranteed ROI",
                  description: "Average 400-2000% return on investment within months of implementation"
                },
                {
                  icon: <Zap className="w-12 h-12 text-yellow-400" />,
                  title: "Rapid Deployment",
                  description: "Most solutions deployed in 2-8 weeks with minimal business disruption"
                },
                {
                  icon: <ShieldCheck className="w-12 h-12 text-purple-400" />,
                  title: "Enterprise Security",
                  description: "Bank-level security with 99.99% uptime and comprehensive compliance"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Get in Touch Today
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div>
                  <MailIcon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-slate-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
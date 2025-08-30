import React, { useState, useEffect } from 'react';
import { motion   } from 'framer-motion';
import { ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail as MailIcon,
  MapPin,
  Phone,
  Rocket,
  Search,
  Star,
  Zap,
  Shield,
  Cloud,
  Brain,
  Globe,
  TrendingUp,
  Award,
  Users,
  Clock,
  DollarSign,
  Target,
  CheckCircle,
  ArrowUpRight,
  Play,
  BookOpen,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  BarChart3,
  Code,
  Palette,
  Smartphone,
  Monitor,
  Server,
  Wifi,
  Satellite,
  Leaf,
  Building,
  FlaskConical,
  X
  } from 'lucide-react';
import { SEO   } from '../components/SEO';
import { REVOLUTIONARY_SERVICES_2030, REVOLUTIONARY_SERVICE_CATEGORIES, REVOLUTIONARY_SERVICE_STATISTICS   } from '../data/revolutionaryServices2030';

export default function RevolutionaryServices2030(...args: any[]): any {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [selectedService, setSelectedService] = useState(null);

  // Filter and sort services
  const filteredServices = REVOLUTIONARY_SERVICES_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
      case 'aiScore':
        return b.aiScore - a.aiScore;
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = sortedServices.slice(startIndex, endIndex);

  const handlePageChange = (page: anynumber)   => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelect = (service: any)   => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const getCategoryIcon = (category: string)   => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Autonomous Systems': <Brain className="w-6 h-6" />,
      'Quantum Computing': <Zap className="w-6 h-6" />,
      'AI & Metaverse': <Globe className="w-6 h-6" />,
      'AI & Space Tech': <Satellite className="w-6 h-6" />,
      'AI & Environmental Tech': <Leaf className="w-6 h-6" />,
      'AI & Education': <BookOpen className="w-6 h-6" />,
      'AI & Entertainment': <Palette className="w-6 h-6" />,
      'AI & Research': <FlaskConical className="w-6 h-6" />,
      'AI & Development': <Code className="w-6 h-6" />,
      'Blockchain & Web3': <Network className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Cloud & DevOps': <Cloud className="w-6 h-6" />,
      'IoT & Edge Computing': <Wifi className="w-6 h-6" />,
      'Digital Twin': <Eye className="w-6 h-6" />,
      'Sustainable Technology': <Leaf className="w-6 h-6" />,
      'IT Infrastructure': <Server className="w-6 h-6" />,
      'Emerging Technology': <Lightbulb className="w-6 h-6" />
    };
    return iconMap[category] || <Rocket className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string)   => {
    const colorMap: { [key: string]: string } = {
      'AI & Autonomous Systems': 'from-purple-500 to-pink-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'AI & Metaverse': 'from-blue-500 to-cyan-500',
      'AI & Space Tech': 'from-purple-500 to-indigo-500',
      'AI & Environmental Tech': 'from-green-500 to-emerald-500',
      'AI & Education': 'from-blue-500 to-indigo-500',
      'AI & Entertainment': 'from-pink-500 to-red-500',
      'AI & Research': 'from-purple-500 to-violet-500',
      'AI & Development': 'from-cyan-500 to-blue-500',
      'Blockchain & Web3': 'from-yellow-500 to-orange-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud & DevOps': 'from-blue-500 to-cyan-500',
      'IoT & Edge Computing': 'from-teal-500 to-cyan-500',
      'Digital Twin': 'from-blue-500 to-indigo-500',
      'Sustainable Technology': 'from-green-500 to-teal-500',
      'IT Infrastructure': 'from-slate-500 to-gray-500',
      'Emerging Technology': 'from-violet-500 to-purple-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <>
      <SEO
        title="Revolutionary Services 2030 - Zion Tech Group"
        description="Discover the future of technology with Zion Tech Group's revolutionary micro SAAS, IT, and AI services for 2030. Cutting-edge solutions with proven ROI and rapid deployment."
        keywords="revolutionary services 2030, micro SAAS, AI services, IT solutions, quantum computing, blockchain, cybersecurity, Zion Tech Group"
        image="https://ziontechgroup.com/images/revolutionary-services-2030.jpg"
        url="https://ziontechgroup.com/revolutionary-services-2030"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Revolutionary Services
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  2030
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of technology with Zion Tech Group's cutting-edge micro SAAS, 
                IT infrastructure, and AI-powered solutions. Transform your business with proven ROI 
                and rapid deployment capabilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <span className="font-semibold">{REVOLUTIONARY_SERVICE_STATISTICS.totalServices}+</span> Services
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <span className="font-semibold">{REVOLUTIONARY_SERVICE_STATISTICS.totalCategories}</span> Categories
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <span className="font-semibold">{REVOLUTIONARY_SERVICE_STATISTICS.averageRating}/5</span> Rating
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <span className="font-semibold">${REVOLUTIONARY_SERVICE_STATISTICS.averagePrice.toLocaleString()}</span> Avg Price
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MailIcon className="w-5 h-5" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters and Search */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search revolutionary services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="rating">Sort by Rating</option>
                    <option value="price">Sort by Price</option>
                    <option value="reviews">Sort by Reviews</option>
                    <option value="aiScore">Sort by AI Score</option>
                  </select>
                </div>
              </div>

              {/* Category Filters */}
              <div className="mt-8">
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeCategory === 'all'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-white/10 backdrop-blur-sm text-white hover: anybg-white/20'
                    }`}
                  >
                    All Services ({REVOLUTIONARY_SERVICES_2030.length})
                  </button>
                  {REVOLUTIONARY_SERVICE_CATEGORIES.map((category)   => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        activeCategory === category
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-white/10 backdrop-blur-sm text-white hover: anybg-white/20'
                      }`}
                    >
                      {category} ({REVOLUTIONARY_SERVICES_2030.filter(s   => s.category === category).length})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
              {currentServices.map((service)   => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                  onClick={() => handleServiceSelect(service)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{service.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Price:</span>
                      <span className="text-white font-semibold">${service.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Market Price:</span>
                      <span className="text-green-400 text-sm">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Setup Time:</span>
                      <span className="text-blue-400 text-sm">{service.setupTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">AI Score:</span>
                      <span className="text-purple-400 font-semibold">{service.aiScore}/100</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{service.reviewCount} reviews</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {Array.from({ length: anytotalPages }, (_, i)   => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another technology company. We're your strategic partner in digital transformation, 
                offering cutting-edge solutions with proven results and exceptional support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Award className="w-12 h-12" />,
                  title: "Proven Excellence",
                  description: "Industry-leading solutions with documented success stories and measurable ROI"
                },
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: "Rapid Deployment",
                  description: "Quick setup times ranging from 4-24 weeks depending on complexity"
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Enterprise Security",
                  description: "Bank-grade security with compliance certifications and 24/7 monitoring"
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Expert Support",
                  description: "Dedicated support team with deep technical expertise and rapid response times"
                }
              ].map((feature, index)   => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Let's discuss how our revolutionary services can accelerate your digital transformation 
                and drive unprecedented growth. Contact us today for a personalized consultation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <select className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option value="">Select Service Category</option>
                    {REVOLUTIONARY_SERVICE_CATEGORIES.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Request Consultation
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-purple-400" />
                      <div>
                        <p className="text-white font-semibold">Phone</p>
                        <p className="text-gray-300">+1 302 464 0950</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MailIcon className="w-6 h-6 text-purple-400" />
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-gray-300">kleber@ziontechgroup.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-6 h-6 text-purple-400" />
                      <div>
                        <p className="text-white font-semibold">Address</p>
                        <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Proven ROI with documented results</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Rapid deployment and setup</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">24/7 expert support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Enterprise-grade security</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Custom solutions and integration</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-900 border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${getCategoryColor(selectedService.category)}`}>
                  {getCategoryIcon(selectedService.category)}
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">{selectedService.title}</h2>
              <p className="text-gray-300 text-lg mb-6">{selectedService.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white">{selectedService.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Subcategory:</span>
                      <span className="text-white">{selectedService.subcategory}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-white font-semibold">${selectedService.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-green-400">{selectedService.marketPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Setup Time:</span>
                      <span className="text-blue-400">{selectedService.setupTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">AI Score:</span>
                      <span className="text-purple-400 font-semibold">{selectedService.aiScore}/100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rating:</span>
                      <span className="text-white">{selectedService.rating}/5 ({selectedService.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <div className="space-y-3">
                    {selectedService.tags.map((tag, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{tag}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4 mt-6">ROI & Benefits</h3>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-green-400 font-semibold">{selectedService.roi}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Integrations</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.integrations.map((integration, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Competitors</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.competitors.map((competitor, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-sm text-red-300"
                    >
                      {competitor}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.title}`}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get Quote
                </a>
                <a
                  href={`tel:${selectedService.contactInfo.phone}`}
                  className="flex-1 border-2 border-white/30 text-white py-4 px-6 rounded-lg font-semibold text-center hover:bg-white/10 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

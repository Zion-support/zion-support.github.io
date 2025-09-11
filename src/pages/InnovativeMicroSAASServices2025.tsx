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
  Filter,
  Grid,
  List,
  Eye,
  Download,
  Share2,
  BookOpen,
  Play,
  Calendar,
  UserCheck,
  BarChart,
  PieChart,
  Activity,
  Target as TargetIcon,
  Zap as ZapIcon,
  Crown,
  Sparkles as SparklesIcon,
  Flame,
  Sun,
  Moon,
  Infinity as InfinityIcon,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare,
  GitBranchPlus,
  GitCommitPlus,
  GitPullRequestPlus,
  GitMergePlus,
  GitComparePlus,
  GitBranchMinus,
  GitCommitMinus,
  GitPullRequestMinus,
  GitMergeMinus,
  GitCompareMinus,
  PenTool
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { innovativeMicroSaasServices2025 } from '../data/innovativeMicroSaasServices2025';

export default function InnovativeMicroSAASServices2025() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(innovativeMicroSaasServices2025.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = innovativeMicroSaasServices2025
    .filter(service => 
      (activeCategory === 'all' || service.category === activeCategory) &&
      (searchTerm === '' || 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return b.innovationLevel.localeCompare(a.innovationLevel);
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  const categoryIcons: { [key: string]: React.ReactNode } = {
    'Legal Technology': <Scale className="w-6 h-6" />,
    'Supply Chain Management': <Truck className="w-6 h-6" />,
    'Healthcare Technology': <Heart className="w-6 h-6" />,
    'Financial Technology': <DollarSign className="w-6 h-6" />,
    'Content Marketing': <PenTool className="w-6 h-6" />,
    'Customer Service': <MessageSquare className="w-6 h-6" />,
    'Project Management': <Target className="w-6 h-6" />,
    'Cybersecurity': <Shield className="w-6 h-6" />,
    'Business Process Automation': <Zap className="w-6 h-6" />,
    'Industrial IoT': <Cpu className="w-6 h-6" />
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Legal Technology': 'from-purple-500 to-pink-500',
      'Supply Chain Management': 'from-blue-500 to-cyan-500',
      'Healthcare Technology': 'from-red-500 to-pink-500',
      'Financial Technology': 'from-green-500 to-emerald-500',
      'Content Marketing': 'from-orange-500 to-red-500',
      'Customer Service': 'from-indigo-500 to-purple-500',
      'Project Management': 'from-yellow-500 to-orange-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Business Process Automation': 'from-blue-500 to-indigo-500',
      'Industrial IoT': 'from-gray-500 to-blue-500'
    };
    return colors[category] || 'from-gray-500 to-blue-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative Micro SAAS Services 2025 | Zion Tech Group"
        description="Discover cutting-edge AI-powered micro SAAS solutions for 2025. Legal tech, healthcare analytics, supply chain optimization, and more. Transform your business with Zion Tech Group."
        keywords="AI micro SAAS, legal technology, healthcare analytics, supply chain optimization, financial trading, content creation, customer support, project management, cybersecurity, workflow automation, predictive maintenance"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Innovative Micro SAAS
              </span>
              <br />
              <span className="text-white">Services 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI-powered micro SAAS solutions. 
              From legal tech to healthcare analytics, we deliver intelligent automation 
              that drives growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-lg">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
                <p className="text-purple-100">Innovative Services</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-lg">
                <Zap className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">500%</h3>
                <p className="text-blue-100">Average ROI</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-lg">
                <Clock className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
                <p className="text-green-100">Support Available</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-lg">
                <Award className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">99.9%</h3>
                <p className="text-orange-100">Uptime Guarantee</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>

              {/* Sort and View */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="rating">Most Innovative</option>
                  <option value="price">Price: Low to High</option>
                  <option value="name">Name: A to Z</option>
                  <option value="category">Category</option>
                </select>

                <div className="flex bg-white/20 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${
                      viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-300'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${
                      viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-300'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {currentServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {currentServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 overflow-hidden hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div>
                      <div className={`p-6 bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                        <div className="flex items-center justify-between mb-4">
                          {categoryIcons[service.category]}
                          <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                            {service.pricing}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-white/90 text-sm">{service.description}</p>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl font-bold text-white">${service.price}</span>
                          <span className="text-gray-400 text-sm">{service.pricingModel}</span>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                          <div className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-gray-300 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                          <div className="space-y-1">
                            {service.benefits.slice(0, 2).map((benefit, idx) => (
                              <div key={idx} className="flex items-center text-gray-300 text-sm">
                                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <span className="text-green-400 font-semibold">{service.roi}</span>
                          <span className="text-blue-400 text-sm">{service.setupTime}</span>
                        </div>

                        <div className="flex gap-2 mb-4">
                          {service.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <Link
                            to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                          >
                            Learn More
                          </Link>
                          <Link
                            to="/contact"
                            className="px-4 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                          >
                            <Mail className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                              {categoryIcons[service.category]}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">{service.name}</h3>
                              <p className="text-gray-400">{service.category}</p>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-4">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-3xl font-bold text-white">${service.price}</span>
                          <p className="text-gray-400 text-sm">{service.pricingModel}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Features</h4>
                          <div className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-gray-300 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Benefits</h4>
                          <div className="space-y-1">
                            {service.benefits.slice(0, 2).map((benefit, idx) => (
                              <div key={idx} className="flex items-center text-gray-300 text-sm">
                                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Details</h4>
                          <div className="space-y-1 text-sm text-gray-300">
                            <div>ROI: {service.roi}</div>
                            <div>Setup: {service.setupTime}</div>
                            <div>Users: {service.userLimit}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {service.tags.slice(0, 4).map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Link
                            to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                          >
                            Learn More
                          </Link>
                          <Link
                            to="/contact"
                            className="px-4 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                          >
                            <Mail className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/20 text-gray-300 hover:bg-white/30'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our innovative micro SAAS solutions. 
              Get started today and experience the future of business automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Free Trial
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-purple-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Globe className="w-5 h-5 mr-3 text-purple-400" />
                  <span>https://ziontechgroup.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Cutting-Edge AI Technology</h4>
                    <p className="text-gray-300 text-sm">Latest AI models and algorithms for maximum performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Proven ROI</h4>
                    <p className="text-gray-300 text-sm">Average 500% return on investment within 6-12 months</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">24/7 Support</h4>
                    <p className="text-gray-300 text-sm">Round-the-clock technical support and customer service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Enterprise Security</h4>
                    <p className="text-gray-300 text-sm">Bank-level security and compliance standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
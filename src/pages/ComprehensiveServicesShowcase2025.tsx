import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  DollarSign,
  Users,
  Target,
  Globe,
  Cpu,
  Database,
  Lock,
  Eye,
  Activity,
  BarChart3,
  TrendingUp,
  Code,
  Cloud,
  Smartphone,
  Server,
  Network,
  Palette,
  Settings,
  Play,
  Pause,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  ShoppingCart,
  Scale,
  Home,
  GraduationCap,
  Truck,
  Leaf,
  Factory,
  Store,
  UserCheck,
  Heart,
  Search,
  Filter,
  ChevronDown
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI Development', name: 'AI Development', count: allServices.filter(s => s.category === 'AI Development').length, icon: '💻', color: 'from-zion-blue to-zion-indigo' },
    { id: 'Digital Marketing', name: 'Digital Marketing', count: allServices.filter(s => s.category === 'Digital Marketing').length, icon: '📱', color: 'from-zion-green to-zion-emerald' },
    { id: 'Customer Service', name: 'Customer Service', count: allServices.filter(s => s.category === 'Customer Service').length, icon: '🎧', color: 'from-zion-orange to-zion-red' },
    { id: 'Financial Technology', name: 'Financial Technology', count: allServices.filter(s => s.category === 'Financial Technology').length, icon: '💰', color: 'from-zion-yellow to-zion-orange' },
    { id: 'Project Management', name: 'Project Management', count: allServices.filter(s => s.category === 'Project Management').length, icon: '📊', color: 'from-zion-purple to-zion-pink' },
    { id: 'Supply Chain', name: 'Supply Chain', count: allServices.filter(s => s.category === 'Supply Chain').length, icon: '🔗', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-red to-zion-pink' },
    { id: 'Healthcare Technology', name: 'Healthcare Technology', count: allServices.filter(s => s.category === 'Healthcare Technology').length, icon: '🏥', color: 'from-zion-green to-zion-blue' },
    { id: 'Business Intelligence', name: 'Business Intelligence', count: allServices.filter(s => s.category === 'Business Intelligence').length, icon: '📈', color: 'from-zion-purple to-zion-indigo' },
    { id: 'Research & Development', name: 'Research & Development', count: allServices.filter(s => s.category === 'Research & Development').length, icon: '🔬', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Legal Technology', name: 'Legal Technology', count: allServices.filter(s => s.category === 'Legal Technology').length, icon: '⚖️', color: 'from-zion-purple to-zion-indigo' },
    { id: 'Real Estate Technology', name: 'Real Estate Technology', count: allServices.filter(s => s.category === 'Real Estate Technology').length, icon: '🏠', color: 'from-zion-green to-zion-emerald' },
    { id: 'Educational Technology', name: 'Educational Technology', count: allServices.filter(s => s.category === 'Educational Technology').length, icon: '🎓', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Logistics & Transportation', name: 'Logistics & Transportation', count: allServices.filter(s => s.category === 'Logistics & Transportation').length, icon: '🚚', color: 'from-zion-orange to-zion-red' },
    { id: 'Energy & Sustainability', name: 'Energy & Sustainability', count: allServices.filter(s => s.category === 'Energy & Sustainability').length, icon: '🌱', color: 'from-zion-green to-zion-emerald' },
    { id: 'Manufacturing Technology', name: 'Manufacturing Technology', count: allServices.filter(s => s.category === 'Manufacturing Technology').length, icon: '🏭', color: 'from-zion-blue to-zion-indigo' },
    { id: 'Retail Technology', name: 'Retail Technology', count: allServices.filter(s => s.category === 'Retail Technology').length, icon: '🛍️', color: 'from-zion-purple to-zion-pink' },
    { id: 'Human Resources', name: 'Human Resources', count: allServices.filter(s => s.category === 'Human Resources').length, icon: '👥', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Customer Success', name: 'Customer Success', count: allServices.filter(s => s.category === 'Customer Success').length, icon: '❤️', color: 'from-zion-red to-zion-pink' }
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

  return (
    <>
      <Helmet>
        <title>Comprehensive Micro SAAS Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, and IT services. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="micro SAAS, AI services, IT solutions, business automation, digital transformation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Comprehensive Micro SAAS
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Services Showcase 2025
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Discover our cutting-edge collection of {allServices.length}+ innovative micro SAAS services, 
              AI-powered solutions, and transformative IT services designed to revolutionize your business operations.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold text-cyan-400">{allServices.length}+</span>
                <span className="ml-2">Services</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold text-purple-400">98%</span>
                <span className="ml-2">AI Accuracy</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold text-green-400">500%+</span>
                <span className="ml-2">ROI Average</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6" />
                <span className="text-lg font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6" />
                <span className="text-lg font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="grid md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none cursor-pointer"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* Sort By */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none cursor-pointer"
                  >
                    <option value="rating" className="bg-gray-800 text-white">Sort by Rating</option>
                    <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                    <option value="reviews" className="bg-gray-800 text-white">Sort by Reviews</option>
                    <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* View Mode */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 px-4 py-3 rounded-lg border transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 border-cyan-500 text-white' 
                        : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex-1 px-4 py-3 rounded-lg border transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 border-cyan-500 text-white' 
                        : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {viewMode === 'list' ? (
                    // List View
                    <div className="flex w-full">
                      <div className="w-1/3 h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-4xl mb-2">🚀</div>
                          <div className="text-sm font-semibold">{service.category}</div>
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                          <div className="flex items-center space-x-2">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="text-white font-semibold">{service.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-cyan-400">${service.price.toLocaleString()}</div>
                          <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Grid View
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-lg">🚀</span>
                          </div>
                          <div>
                            <div className="text-sm text-cyan-400 font-semibold">{service.category}</div>
                            <div className="text-xs text-gray-400">{service.subcategory}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm font-semibold">{service.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{service.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Price:</span>
                          <span className="text-cyan-400 font-semibold">${service.price.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Market Price:</span>
                          <span className="text-gray-300">{service.marketPrice}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">ROI:</span>
                          <span className="text-green-400 font-semibold">{service.roi}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Setup Time:</span>
                          <span className="text-gray-300">{service.setupTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/10 text-xs text-cyan-300 rounded-full border border-cyan-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                        {service.tags.length > 3 && (
                          <span className="px-2 py-1 bg-white/10 text-xs text-gray-400 rounded-full">
                            +{service.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Users className="w-4 h-4" />
                          <span>{service.reviewCount} reviews</span>
                        </div>
                        <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {sortedServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Join thousands of businesses already leveraging our innovative micro SAAS solutions 
                to achieve unprecedented growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call +1 302 464 0950</span>
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-cyan-600 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Email kleber@ziontechgroup.com</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;

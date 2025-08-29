import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Brain,
  Shield,
  Zap,
  Cloud,
  Lock,
  Globe,
  Cpu,
  Database,
  Network,
  Smartphone,
  BarChart3,
  TrendingUp,
  Users,
  Building2,
  Leaf,
  Car,
  Heart,
  Scale,
  Eye,
  Rocket,
  Target,
  Settings,
  Calendar,
  DollarSign,
  Clock,
  Award,
  Globe2,
  Lightbulb,
  Code,
  Palette,
  Camera,
  Video,
  Music,
  BookOpen,
  GraduationCap,
  Gamepad2,
  Microscope,
  Vr,
  TreePine,
  Satellite
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES_2030 } from '../data/comprehensiveServices2030';

const categoryIcons: Record<string, React.ComponentType<any>> = {
  'AI & Automation': Brain,
  'Cybersecurity': Shield,
  'Content Creation': Palette,
  'Sales & Marketing': Target,
  'Customer Support': Users,
  'Data Analytics': BarChart3,
  'Cloud & DevOps': Cloud,
  'IoT & Edge': Smartphone,
  'Digital Twin': Eye,
  'Blockchain & Web3': Globe,
  'Healthcare': Heart,
  'Legal Tech': Scale,
  'Education': GraduationCap,
  'Entertainment': Gamepad2,
  'Research': Microscope,
  'Metaverse': Vr,
  'Green Tech': TreePine,
  'Space Tech': Satellite,
  'Development': Code
};

export default function ComprehensiveServices2030() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [priceRange, setPriceRange] = useState([0, 50000]);

  const categories = ['All', ...Array.from(new Set(COMPREHENSIVE_SERVICES_2030.map(service => service.category)))];

  const filteredServices = useMemo(() => {
    let filtered = COMPREHENSIVE_SERVICES_2030.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      
      const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'ai-score':
        filtered.sort((a, b) => b.aiScore - a.aiScore);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, priceRange]);

  const stats = {
    totalServices: COMPREHENSIVE_SERVICES_2030.length,
    averageRating: (COMPREHENSIVE_SERVICES_2030.reduce((sum, service) => sum + service.rating, 0) / COMPREHENSIVE_SERVICES_2030.length).toFixed(1),
    totalReviews: COMPREHENSIVE_SERVICES_2030.reduce((sum, service) => sum + service.reviewCount, 0),
    averagePrice: Math.round(COMPREHENSIVE_SERVICES_2030.reduce((sum, service) => sum + service.price, 0) / COMPREHENSIVE_SERVICES_2030.length)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Comprehensive Services 2030
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
          >
            Discover the future of technology with our cutting-edge AI, IT, and micro SAAS solutions. 
            Transform your business with intelligent automation and innovative digital solutions.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">{stats.totalServices}</div>
              <div className="text-blue-200">Total Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">{stats.averageRating}</div>
              <div className="text-blue-200">Avg Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">{stats.totalReviews}</div>
              <div className="text-blue-200">Reviews</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">${stats.averagePrice.toLocaleString()}</div>
              <div className="text-blue-200">Avg Price</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white/10 text-blue-100 hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price (Low)</option>
                <option value="price-high">Sort by Price (High)</option>
                <option value="reviews">Sort by Reviews</option>
                <option value="name">Sort by Name</option>
                <option value="ai-score">Sort by AI Score</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="mt-6 flex items-center gap-4 text-white">
              <span>Price Range:</span>
              <input
                type="range"
                min="0"
                max="50000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="flex-1"
              />
              <span>${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-blue-200">
                Discover cutting-edge solutions for your business transformation
              </p>
            </motion.div>

            <AnimatePresence>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => {
                  const CategoryIcon = categoryIcons[service.category] || Globe;
                  
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                    >
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                            <CategoryIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-sm text-blue-200">{service.category}</p>
                          </div>
                        </div>
                        {service.featured && (
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-xs font-medium">Featured</span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-full border border-blue-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{service.rating}</div>
                          <div className="text-xs text-blue-200">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{service.reviewCount}</div>
                          <div className="text-xs text-blue-200">Reviews</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{service.aiScore}%</div>
                          <div className="text-xs text-blue-200">AI Score</div>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="bg-white/5 rounded-xl p-4 mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-white">${service.price.toLocaleString()}</span>
                          <span className="text-sm text-blue-200">Market: ${service.marketPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-green-400">ROI: {service.roi}%</span>
                          <span className="text-gray-300">Setup: {service.setupTime}</span>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-2 mb-6 text-sm">
                        <div className="flex items-center gap-2 text-blue-200">
                          <Phone className="w-4 h-4" />
                          <span>{service.contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-200">
                          <Mail className="w-4 h-4" />
                          <span>{service.contactInfo.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-200">
                          <MapPin className="w-4 h-4" />
                          <span>{service.contactInfo.address}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Link
                          to={`/services/${service.id}`}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl text-center font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                          href={`mailto:${service.contactInfo.email}?subject=Quote Request: ${service.title}`}
                          className="flex-1 bg-white/10 text-white py-3 px-4 rounded-xl text-center font-medium hover:bg-white/20 transition-all duration-200 border border-white/20 flex items-center justify-center gap-2"
                        >
                          Get Quote
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatePresence>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-blue-200 mb-6">
                  Try adjusting your search criteria or filters
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange([0, 50000]);
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get in touch with our experts to discuss your specific needs and discover how our 
              cutting-edge services can drive your success in 2030 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="mt-8 text-blue-200">
              <p className="text-lg">
                <MapPin className="inline w-5 h-5 mr-2" />
                364 E Main St STE 1008 Middletown DE 19709
              </p>
              <p className="text-lg mt-2">
                <Globe2 className="inline w-5 h-5 mr-2" />
                <a href="https://ziontechgroup.com" className="hover:text-white transition-colors">
                  https://ziontechgroup.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
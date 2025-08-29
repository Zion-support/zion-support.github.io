import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  Eye,
  Download,
  Share2
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES_2026 } from '../data/advancedMicroSaasServices2026';
import { SPECIALIZED_IT_SERVICES_2026 } from '../data/specializedITServices2026';

export default function ComprehensiveServicesShowcase2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services
  const allServices = useMemo(() => [
    ...ADVANCED_MICRO_SAAS_SERVICES_2026,
    ...SPECIALIZED_IT_SERVICES_2026
  ], []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(allServices.map(service => service.category))];
    return cats;
  }, [allServices]);

  // Get price ranges
  const priceRanges = useMemo(() => {
    const ranges = [
      'All',
      'Under $500',
      '$500 - $1,000',
      '$1,000 - $2,000',
      '$2,000 - $5,000',
      'Over $5,000'
    ];
    return ranges;
  }, []);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      
      let matchesPrice = true;
      if (selectedPriceRange !== 'All') {
        const price = service.price;
        switch (selectedPriceRange) {
          case 'Under $500':
            matchesPrice = price < 500;
            break;
          case '$500 - $1,000':
            matchesPrice = price >= 500 && price < 1000;
            break;
          case '$1,000 - $2,000':
            matchesPrice = price >= 1000 && price < 2000;
            break;
          case '$2,000 - $5,000':
            matchesPrice = price >= 2000 && price < 5000;
            break;
          case 'Over $5,000':
            matchesPrice = price >= 5000;
            break;
        }
      }
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-300 text-sm mb-3 line-clamp-2">
            {service.description}
          </p>
        </div>
        {service.featured && (
          <div className="ml-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
        )}
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-cyan-400">
            ${service.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-400">/month</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(service.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-400'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-400">({service.reviewCount})</span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Market Price:</span>
          <span className="text-sm text-gray-300">{service.marketPrice}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {service.tags.slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Category:</span>
            <span className="text-sm text-white">{service.category}</span>
          </div>
          {service.subcategory && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Type:</span>
              <span className="text-sm text-white">{service.subcategory}</span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <h4 className="text-sm font-semibold text-white">Key Benefits:</h4>
        <ul className="space-y-1">
          {service.benefits.slice(0, 3).map((benefit: string, index: number) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3 mb-6">
        <h4 className="text-sm font-semibold text-white">Key Features:</h4>
        <ul className="space-y-1">
          {service.features.slice(0, 4).map((feature: string, index: number) => (
            <li key={index} className="flex items-start space-x-2">
              <Zap className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3 mb-6">
        <h4 className="text-sm font-semibold text-white">Target Audience:</h4>
        <div className="flex flex-wrap gap-2">
          {service.targetAudience.slice(0, 3).map((audience: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30"
            >
              {audience}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <h4 className="text-sm font-semibold text-white">Use Cases:</h4>
        <ul className="space-y-1">
          {service.useCases.slice(0, 3).map((useCase: string, index: number) => (
            <li key={index} className="flex items-start space-x-2">
              <Lightbulb className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-300">{useCase}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3 mb-6">
        <h4 className="text-sm font-semibold text-white">Integrations:</h4>
        <div className="flex flex-wrap gap-2">
          {service.integrations.slice(0, 4).map((integration: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30"
            >
              {integration}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <h4 className="text-sm font-semibold text-white">Compliance:</h4>
        <div className="flex flex-wrap gap-2">
          {service.compliance.slice(0, 4).map((compliance: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30"
            >
              {compliance}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <h4 className="text-sm font-semibold text-white">Support:</h4>
        <ul className="space-y-1">
          {service.support.slice(0, 3).map((support: string, index: number) => (
            <li key={index} className="flex items-start space-x-2">
              <Users className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-300">{support}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-white/20 pt-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">AI Score:</span>
            <span className="text-sm font-semibold text-cyan-400">
              {service.aiScore || service.technicalScore}/100
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Location:</span>
            <span className="text-sm text-white">{service.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Availability:</span>
            <span className="text-sm text-green-400">{service.availability}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Created:</span>
            <span className="text-sm text-white">
              {new Date(service.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={service.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors group"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Learn More</span>
          </a>
          <a
            href={`mailto:${service.contactEmail}?subject=Inquiry about ${service.title}`}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </a>
        </div>
        
        <div className="text-center">
          <a
            href={`tel:${service.contactPhone}`}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors w-full"
          >
            <Phone className="w-4 h-4" />
            <span>Call {service.contactPhone}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );

  const ServiceList = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
    >
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-3">
          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-gray-300 text-sm line-clamp-3">{service.description}</p>
        </div>
        
        <div className="col-span-2">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">
              ${service.price.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">/month</div>
            <div className="text-xs text-gray-500 mt-1">{service.marketPrice}</div>
          </div>
        </div>
        
        <div className="col-span-2">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(service.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-400'
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-400">({service.reviewCount})</div>
          </div>
        </div>
        
        <div className="col-span-2">
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">AI Score</div>
            <div className="text-lg font-bold text-cyan-400">
              {service.aiScore || service.technicalScore}/100
            </div>
          </div>
        </div>
        
        <div className="col-span-2">
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Category</div>
            <div className="text-sm text-white">{service.category}</div>
            {service.subcategory && (
              <div className="text-xs text-gray-500">{service.subcategory}</div>
            )}
          </div>
        </div>
        
        <div className="col-span-1">
          <div className="flex flex-col space-y-2">
            <a
              href={service.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
              title="Learn More"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${service.contactEmail}?subject=Inquiry about ${service.title}`}
              className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              title="Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${service.contactPhone}`}
              className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              title="Call"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Comprehensive Services Showcase 2026 - Zion Tech Group"
        description="Explore our comprehensive portfolio of cutting-edge AI, IT, and micro SAAS services for 2026. Advanced solutions with competitive pricing and expert support."
        keywords="AI services, IT solutions, micro SAAS, cybersecurity, cloud computing, blockchain, quantum computing, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services Showcase
              <span className="block text-cyan-400">2026</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge portfolio of AI-powered solutions, specialized IT services, and innovative micro SAAS platforms. 
              Transform your business with enterprise-grade technology and expert support.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-lg font-semibold">{allServices.length}+ Services</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Star className="w-5 h-5" />
                <span className="text-lg font-semibold">4.8+ Average Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Users className="w-5 h-5" />
                <span className="text-lg font-semibold">Global Availability</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Contact Zion Tech Group</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-8 h-8 text-cyan-400" />
                <span className="text-white font-semibold">Phone</span>
                <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-8 h-8 text-purple-400" />
                <span className="text-white font-semibold">Email</span>
                <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-8 h-8 text-green-400" />
                <span className="text-white font-semibold">Address</span>
                <span className="text-gray-300 text-center">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-end">
              {/* Search */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-white mb-2">Search Services</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, description, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-white">View Mode:</span>
                <div className="flex bg-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-600 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-cyan-600 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                Showing {filteredServices.length} of {allServices.length} services
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search criteria or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedPriceRange('All');
                }}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {viewMode === 'grid' ? <ServiceCard service={service} /> : <ServiceList service={service} />}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Get in touch with our team of experts to discuss your specific needs and discover how our cutting-edge services can drive your success.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={`mailto:${contactInfo.email}?subject=Services Inquiry`}
                className="flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Get Started</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
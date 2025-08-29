import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  Palette,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const categoryIcons: Record<string, React.ReactNode> = {
  'AI & Analytics': <Brain className="w-6 h-6" />,
  'AI & Sales': <TrendingUp className="w-6 h-6" />,
  'AI & Support': <MessageCircle className="w-6 h-6" />,
  'AI & Finance': <DollarSign className="w-6 h-6" />,
  'AI & Operations': <Settings className="w-6 h-6" />,
  'AI & HR': <Users className="w-6 h-6" />,
  'AI & Management': <Target className="w-6 h-6" />,
  'AI & Marketing': <BarChart3 className="w-6 h-6" />,
  'AI & Education': <GraduationCap className="w-6 h-6" />,
  'AI & Legal': <FileText className="w-6 h-6" />,
  'AI & Healthcare': <Heart className="w-6 h-6" />,
  'Cybersecurity': <Shield className="w-6 h-6" />,
  'Cloud & DevOps': <Cloud className="w-6 h-6" />,
  'IoT & Edge': <Cpu className="w-6 h-6" />,
  'Blockchain': <Lock className="w-6 h-6" />,
  'Quantum Computing': <Atom className="w-6 h-6" />,
  'Sustainability': <Leaf className="w-6 h-6" />,
  'Space Tech': <Satellite className="w-6 h-6" />,
  'FinTech': <DollarSign className="w-6 h-6" />,
  'Healthcare': <Heart className="w-6 h-6" />,
  'E-commerce': <ShoppingCart className="w-6 h-6" />,
  'Content & Media': <BookOpen className="w-6 h-6" />,
  'Productivity': <Settings className="w-6 h-6" />,
  'Analytics': <BarChart3 className="w-6 h-6" />,
  'Automation': <Zap className="w-6 h-6" />,
  'Innovation': <Lightbulb className="w-6 h-6" />,
  'Emerging Tech': <Sparkles className="w-6 h-6" />
};

const categoryColors: Record<string, string> = {
  'AI & Analytics': 'from-purple-600 to-pink-600',
  'AI & Sales': 'from-blue-600 to-cyan-600',
  'AI & Support': 'from-green-600 to-emerald-600',
  'AI & Finance': 'from-yellow-600 to-orange-600',
  'AI & Operations': 'from-indigo-600 to-purple-600',
  'AI & HR': 'from-pink-600 to-rose-600',
  'AI & Management': 'from-cyan-600 to-blue-600',
  'AI & Marketing': 'from-orange-600 to-red-600',
  'AI & Education': 'from-emerald-600 to-green-600',
  'AI & Legal': 'from-violet-600 to-purple-600',
  'AI & Healthcare': 'from-red-600 to-pink-600',
  'Cybersecurity': 'from-red-600 to-orange-600',
  'Cloud & DevOps': 'from-blue-600 to-indigo-600',
  'IoT & Edge': 'from-green-600 to-teal-600',
  'Blockchain': 'from-yellow-600 to-orange-600',
  'Quantum Computing': 'from-purple-600 to-indigo-600',
  'Sustainability': 'from-green-600 to-emerald-600',
  'Space Tech': 'from-indigo-600 to-purple-600',
  'FinTech': 'from-emerald-600 to-teal-600',
  'Healthcare': 'from-red-600 to-pink-600',
  'E-commerce': 'from-blue-600 to-cyan-600',
  'Content & Media': 'from-purple-600 to-pink-600',
  'Productivity': 'from-orange-600 to-red-600',
  'Analytics': 'from-cyan-600 to-blue-600',
  'Automation': 'from-green-600 to-emerald-600',
  'Innovation': 'from-yellow-600 to-orange-600',
  'Emerging Tech': 'from-purple-600 to-indigo-600'
};

export default function InnovativeServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const categories = useMemo(() => {
    const cats = [...new Set(INNOVATIVE_MICRO_SAAS_SERVICES_2025.map(service => service.category))];
    return cats.sort();
  }, []);

  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = service.price;
        switch (priceRange) {
          case 'low':
            return price <= 1000;
          case 'medium':
            return price > 1000 && price <= 3000;
          case 'high':
            return price > 3000;
          default:
            return true;
        }
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Micro SAAS Services 2025 - Zion Tech Group"
        description="Discover our cutting-edge micro SAAS services for 2025. AI-powered solutions, quantum cybersecurity, edge computing, and more. Transform your business with innovative technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative Micro SAAS Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                2025 Edition
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge micro SAAS solutions. From AI-powered content management to quantum cybersecurity, 
              we deliver innovative technology that drives growth and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
              >
                Get Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <div>
                <p className="text-sm text-blue-100">Phone</p>
                <p className="font-semibold">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <div>
                <p className="text-sm text-blue-100">Email</p>
                <p className="font-semibold">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5" />
              <div>
                <p className="text-sm text-blue-100">Website</p>
                <a href={contactInfo.website} className="font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5" />
              <div>
                <p className="text-sm text-blue-100">Address</p>
                <p className="font-semibold text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under $1,000</option>
                  <option value="medium">$1,000 - $3,000</option>
                  <option value="high">Over $3,000</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="category">Sort by Category</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Innovative Services Available
            </h2>
            <p className="text-gray-300">
              Discover cutting-edge solutions designed to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  {/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColors[service.category] || 'from-gray-600 to-gray-700'}`}>
                        {categoryIcons[service.category] || <Star className="w-5 h-5 text-white" />}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">
                          ${service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-300">per month</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">
                        {service.category}
                      </span>
                      {service.subcategory && (
                        <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                          {service.subcategory}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-blue-400 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specs */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Technology:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technicalSpecs?.technology.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {service.technicalSpecs?.technology.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                          +{service.technicalSpecs.technology.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="text-center p-2 bg-blue-600/20 rounded">
                        <div className="text-blue-300">Market Price</div>
                        <div className="text-white font-semibold">{service.marketPrice}</div>
                      </div>
                      <div className="text-center p-2 bg-green-600/20 rounded">
                        <div className="text-green-300">ROI</div>
                        <div className="text-white font-semibold">{service.roi}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more information about pricing, features, and implementation.`}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-center text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="px-4 py-2 border border-white/30 text-white rounded-lg text-sm font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{service.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-3 h-3" />
                        <span>{service.innovationLevel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <section className="py-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Innovative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most advanced and in-demand micro SAAS solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {NEW_INNOVATIVE_MICRO_SAAS_SERVICES_2025.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="text-3xl font-bold text-blue-400">{service.currency}{service.price.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{service.roi}</div>
                    <div className="text-gray-300 text-sm">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{service.estimatedDelivery}</div>
                    <div className="text-gray-300 text-sm">Delivery</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">4.9</span>
                    <span className="text-gray-400 text-sm">(127 reviews)</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      {/* Market Insights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Insights & ROI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services deliver exceptional returns on investment with proven market performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30"
            >
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">400%</div>
              <div className="text-gray-300">Average ROI</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl border border-green-500/30"
            >
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-gray-300">Active Users</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30"
            >
              <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl border border-orange-500/30"
            >
              <Globe className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Countries Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative micro SaaS solutions can drive growth, 
              efficiency, and competitive advantage for your organization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-3">Speak directly with our experts</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-3">Get detailed information and quotes</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-purple-400 hover:text-purple-300 font-semibold"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Website</h3>
                <p className="text-gray-300 mb-3">Explore our full portfolio</p>
                <a
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-semibold flex items-center justify-center space-x-1"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Schedule a Free Consultation
              </h3>
              <p className="text-blue-100 mb-6">
                Get personalized recommendations and implementation strategies for your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}?subject=Free Consultation Request&body=Hi, I'd like to schedule a free consultation to discuss how your innovative micro SaaS services can benefit my business. Please let me know available times.`}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Schedule Consultation
                </a>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
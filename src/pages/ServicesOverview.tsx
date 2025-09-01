import React, { useState, useMemo } from 'react';'
import { motion } from 'framer-motion';
import {

  Search,
  Filter,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,  Target,
  Globe,
  Lock,
  Cpu,
  Heart,
  Atom,
  MessageCircle,
  BookOpen,
  Workflow,
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
  Sparkles,
  DollarSign,
  Users,
  Eye,'
  ArrowUpRight} from 'lucide-react';'
import { SEO } from '../components/SEO';'
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const categoryIcons: Record<string, React.ReactNode> = {
'
  'AI & Analytics': <Brain className="w-6 h-6" />,'"
  'AI & Sales': <TrendingUp className="w-6 h-6" />,'"
  'AI & Support': <MessageCircle className="w-6 h-6" />,'"
  'AI & Finance': <DollarSign className="w-6 h-6" />,'"
  'AI & Operations': <Settings className="w-6 h-6" />,'"
  'AI & HR': <Users className="w-6 h-6" />,'"
  'AI & Management': <Target className="w-6 h-6" />,'"
  'AI & Marketing': <BarChart3 className="w-6 h-6" />,'"
  'AI & Education': <GraduationCap className="w-6 h-6" />,'"
  'AI & Legal': <FileText className="w-6 h-6" />,'"
  'AI & Healthcare': <Heart className="w-6 h-6" />,"
  Cybersecurity: <Shield className="w-6 h-6" />,'"
  'Cloud & DevOps': <Cloud className="w-6 h-6" />,'"
  'IoT & Edge': <Cpu className="w-6 h-6" />,"
  Blockchain: <Lock className="w-6 h-6" />,'"
  'Quantum Computing': <Atom className="w-6 h-6" />,"
  Sustainability: <Leaf className="w-6 h-6" />,'"
  'Space Tech': <Satellite className="w-6 h-6" />,"
  FinTech: <DollarSign className="w-6 h-6" />,"
  Healthcare: <Heart className="w-6 h-6" />,'"
  'E-commerce': <ShoppingCart className="w-6 h-6" />,'"
  'Content & Media': <BookOpen className="w-6 h-6" />,"
  Productivity: <Settings className="w-6 h-6" />,"
  Analytics: <BarChart3 className="w-6 h-6" />,"
  Automation: <Zap className="w-6 h-6" />,"
  Innovation: <Lightbulb className="w-6 h-6" />,'"
  'Emerging Tech': <Sparkles className="w-6 h-6" />};
const categoryColors: Record<string, string> = {
'
  'AI & Analytics': 'from-purple-600 to-pink-600','
  'AI & Sales': 'from-blue-600 to-cyan-600','
  'AI & Support': 'from-green-600 to-emerald-600','
  'AI & Finance': 'from-yellow-600 to-orange-600','
  'AI & Operations': 'from-indigo-600 to-purple-600','
  'AI & HR': 'from-pink-600 to-rose-600','
  'AI & Management': 'from-cyan-600 to-blue-600','
  'AI & Marketing': 'from-orange-600 to-red-600','
  'AI & Education': 'from-emerald-600 to-green-600','
  'AI & Legal': 'from-violet-600 to-purple-600','
  'AI & Healthcare': 'from-red-600 to-pink-600','
  Cybersecurity: 'from-red-600 to-orange-600','
  'Cloud & DevOps': 'from-blue-600 to-indigo-600','
  'IoT & Edge': 'from-green-600 to-teal-600','
  Blockchain: 'from-yellow-600 to-orange-600','
  'Quantum Computing': 'from-purple-600 to-indigo-600','
  Sustainability: 'from-green-600 to-emerald-600','
  'Space Tech': 'from-indigo-600 to-purple-600','
  FinTech: 'from-emerald-600 to-teal-600','
  Healthcare: 'from-red-600 to-pink-600','
  'E-commerce': 'from-blue-600 to-cyan-600','
  'Content & Media': 'from-purple-600 to-pink-600','
  Productivity: 'from-orange-600 to-red-600','
  Analytics: 'from-cyan-600 to-blue-600','
  Automation: 'from-green-600 to-emerald-600','
  Innovation: 'from-yellow-600 to-orange-600','
  'Emerging Tech': 'from-purple-600 to-indigo-600'};

const serviceCategories = [
  {
'
    name: 'AI & Machine Learning',
    icon: Brain,'
    color: 'from-purple-600 to-pink-600',
    description:'
      'Advanced AI solutions for business automation and intelligence',
    count: 0},
  {
'
    name: 'Cybersecurity & Compliance',
    icon: Shield,'
    color: 'from-red-600 to-orange-600','
    description: 'Enterprise-grade security and compliance solutions',
    count: 0},
  {
'
    name: 'Cloud & DevOps',
    icon: Cloud,'
    color: 'from-blue-600 to-indigo-600','
    description: 'Cloud infrastructure and development operations',
    count: 0},
  {
'
    name: 'IoT & Edge Computing',
    icon: Cpu,'
    color: 'from-green-600 to-teal-600','
    description: 'Internet of Things and edge computing solutions',
    count: 0},
  {
'
    name: 'Digital Transformation',
    icon: Rocket,'
    color: 'from-orange-600 to-red-600','
    description: 'Business transformation and modernization',
    count: 0},
  {
'
    name: 'Emerging Technologies',
    icon: Sparkles,'
    color: 'from-yellow-600 to-orange-600','
    description: 'Cutting-edge technologies and innovations',
    count: 0},
  {
'
    name: 'Micro SaaS Solutions',
    icon: ShoppingCart,'
    color: 'from-teal-600 to-cyan-600','
    description: 'Scalable software-as-a-service solutions',
    count: 0},
  {
'
    name: 'Healthcare & Life Sciences',
    icon: Heart,'
    color: 'from-red-600 to-pink-600','
    description: 'Healthcare technology and life sciences solutions',
    count: 0},
];
  
    // Filter by search query
    if (searchQuery) {

      filtered = filtered.filter()
        service =>
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          service.tags.some(tag =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }
    // Filter by category'
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory)}

      filtered = filtered.filter()
        service => service.category === selectedCategory
      );
    }
  };

    // Filter by price range'
    if (priceRange !== 'all') {

      filtered = filtered.filter(service => {

        const price = service.price;        switch (priceRange) {
'
          case 'low':
            return price <= 1000;'
          case 'medium':
            return price > 1000 && price <= 3000;'
          case 'high':
            return price > 3000;
          default:
            return true;
        }
      }) ;
    }
    // Sort services
    filtered.sort((a, b) => {

      switch (sortBy) {
'
        case 'name':
          return a.title.localeCompare(b.title);'
        case 'price-low':
          return a.price - b.price;'
        case 'price-high':
          return b.price - a.price;'
        case 'category':
          return a.category.localeCompare (b.category) ;
        default:
          return 0;
      }
    }) ;

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]) ;

  const contactInfo = {
'
    phone: '+1 302 464 0950','
    email: 'kleber@ziontechgroup.com','
    website: 'https://ziontechgroup.com','
    address: '364 E Main St STE 1008 Middletown DE 19709'};

  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO"
        title="Services Overview - Zion Tech Group""        description="Comprehensive overview of all our innovative services including AI solutions, cybersecurity, cloud services, IoT, and emerging technologies. Transform your business with our cutting-edge solutions."
       />

      {/* Hero Section */}"
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >"
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">"
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Complete Services
              </span>
              <br />"
              <span className="text-white">Portfolio</span>
            </h1>"
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive range of innovative services designed
              to transform your business. From AI-powered solutions to emerging
              technologies, we have everything you need to succeed.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">"
              <div className="flex items-center space-x-2 text-gray-300">"
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>50+ Innovative Solutions</span>
              </div>"
              <div className="flex items-center space-x-2 text-gray-300">"
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>8 Service Categories</span>
              </div>"
              <div className="flex items-center space-x-2 text-gray-300">"
                <CheckCircle className="w-5 h-5 text-green-400" />                <span>Enterprise Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}"
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">"
        <div className="max-w-7xl mx-auto">"
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">"
            <div className="flex items-center space-x-3">"
              <Phone className="w-5 h-5" />
              <div>"
                <p className="text-sm text-blue-100">Phone</p>"
                <p className="font-semibold">{contactInfo.phone}</p>
              </div>
            </div>"
            <div className="flex items-center space-x-3">"
              <Mail className="w-5 h-5" />
              <div>"
                <p className="text-sm text-blue-100">Email</p>"
                <p className="font-semibold">{contactInfo.email}</p>
              </div>
            </div>"
            <div className="flex items-center space-x-3">"
              <Globe className="w-5 h-5" />
              <div>"                <p className="text-sm text-blue-100">Website</p>
                <a
                  href={contactInfo.website}"
                  className="font-semibold hover:underline""
                  target="_blank""
                  rel="noopener noreferrer"
                >'
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>"
            <div className="flex items-center space-x-3">"
              <MapPin className="w-5 h-5" />
              <div>"
                <p className="text-sm text-blue-100">Address</p>"                <p className="font-semibold text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}"
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">"
          <div className="text-center mb-12">"
            <h2 className="text-3xl font-bold text-white mb-4">
              Service Categories
            </h2>"
            <p className="text-gray-300 text-lg">
              Explore our comprehensive service categories designed to meet all
              your business needs
            </p>
          </div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesWithCounts.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}"
                className="group cursor-pointer"
                onClick={() =>'
                  setSelectedCategory(category.name === 'all' ? 'all' : 'all')
                }
              >"
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}
                  >"
                    <category.icon className="w-8 h-8 text-white" />
                  </div>"
                  <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>"
                  <p className="text-gray-300 text-sm mb-4 text-center">
                    {category.description}
                  </p>"
                  <div className="text-center">"
                    <div className="text-2xl font-bold text-blue-400 mb-2">
                      {category.count}
                    </div>"
                    <div className="text-gray-400 text-sm">
                      Services Available
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400 font-medium">{category.count} Services</span>
                  {selectedCategory === category.id && (
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Filters and Search */}"
      <section className="py-8 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">"
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">"
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Search */}"
              <div className="relative">"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input"
                  type="text""                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}"
                  className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >"
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <select
                  value={priceRange}
                  onChange={e => setPriceRange(e.target.value)}"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >"
                  <option value="all">All Prices</option>"
                  <option value="low">Under $1,000</option>"
                  <option value="medium">$1,000 - $3,000</option>"
                  <option value="high">Over $3,000</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >"
                  <option value="name">Sort by Name</option>"
                  <option value="price-low">Price: Low to High</option>"
                  <option value="price-high">Price: High to Low</option>"
                  <option value="category">Sort by Category</option>
                </select>
              </div>

              {/* View Mode Toggle */}"
              <div className="flex space-x-2">
                <button'
                  onClick={() => setViewMode('grid')}`
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
'
                    viewMode === 'grid''
                      ? 'bg-blue-600 text-white''
                      : 'bg-white/20 text-white hover:bg-white/30'`
                  }`}
                >
                  Grid
                </button>
                <button'
                  onClick={() => setViewMode('list')}`
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
'
                    viewMode === 'list''
                      ? 'bg-blue-600 text-white''
                      : 'bg-white/20 text-white hover:bg-white/30'`
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}"
      <section className="py-12 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">"
          <div className="mb-8">"
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Services Available
            </h2>"
            <p className="text-gray-300">
              Discover cutting-edge solutions designed to transform your
              business operations
            </p>
          </div>
'
          {viewMode === 'grid' ? ("
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}"
                  className="group relative"
                >"
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    {/* Service Header */}"
                    <div className="mb-4">"
                      <div className="flex items-center justify-between mb-3">
                        <div'`
                          className={`p-2 rounded-lg bg-gradient-to-r ${categoryColors[service.category] || 'from-gray-600 to-gray-700'}`}
                        >
                          {categoryIcons[service.category] || ("
                            <Star className="w-5 h-5 text-white" />
                          )}
                        </div>"
                        <div className="text-right">"                          <div className="text-2xl font-bold text-white">
                            ${service.price.toLocaleString()}
                          </div>"
                          <div className="text-sm text-gray-300">per month</div>
                        </div>
                      </div>
"
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
"
                      <div className="flex items-center space-x-2 mb-3">"
                        <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">
                          {service.category}
                        </span>
                        {service.subcategory && ("
                          <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                            {service.subcategory}
                          </span>) }
                      </div>
                    </div>

                    {/* Description */}"
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key Features */}"
                    <div className="mb-4">"
                      <h4 className="text-sm font-semibold text-white mb-2">
                        Key Features:
                      </h4>"
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div
                            key={idx}"
                            className="flex items-center space-x-2 text-xs text-gray-300"
                          >"
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />"                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && ("
                          <div className="text-xs text-gray-400">
                            +{service.features.length - 3} more features
                          </div>) }
                      </div>
                    </div>

                    {/* Market Info */}"
                    <div className="mb-6">"
                      <div className="grid grid-cols-2 gap-3 text-xs">"
                        <div className="text-center p-2 bg-blue-600/20 rounded">"
                          <div className="text-blue-300">Market Price</div>"
                          <div className="text-white font-semibold">
                            {service.marketPrice}
                          </div>
                        </div>"
                        <div className="text-center p-2 bg-green-600/20 rounded">"
                          <div className="text-green-300">ROI</div>"
                          <div className="text-white font-semibold">
                            {service.roi}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                    {/* CTA Button */}"
                    <div className="flex space-x-3">
                      <a'`
                        href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more information about pricing, features, and implementation.`}"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-center text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Get Quote</span>"
                        <ArrowRight className="w-4 h-4" />                      </a>
                      <a`
                        href={`tel:${contactInfo.phone}`}"
                        className="px-4 py-2 border border-white/30 text-white rounded-lg text-sm font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                      >"
                        <Phone className="w-4 h-4" />                      </a>
                    </div>
                  </div>

                    {/* Additional Info */}"
                    <div className="mt-4 pt-4 border-t border-white/20">"
                      <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">"
                        <div className="flex items-center space-x-1">"
                          <Clock className="w-3 h-3" />
                          <span>{service.estimatedDelivery}</span>
                        </div>"
                        <div className="flex items-center space-x-1">"
                          <Award className="w-3 h-3" />                          <span>{service.innovationLevel}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : ("
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}"
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >"
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">"
                    <div className="flex-1">"
                      <div className="flex items-start space-x-4">
                        <div'`
                          className={`p-3 rounded-lg bg-gradient-to-r ${categoryColors[service.category] || 'from-gray-600 to-gray-700'}`}
                        >
                          {categoryIcons[service.category] || ("
                            <Star className="w-6 h-6 text-white" />
                          )}
                        </div>"
                        <div className="flex-1">"
                          <h3 className="text-xl font-bold text-white mb-2">
                            {service.title}
                          </h3>"
                          <p className="text-gray-300 mb-3">
                            {service.description}
                          </p>"
                          <div className="flex flex-wrap gap-2 mb-3">"                            <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full">
                              {service.category}
                            </span>
                            {service.subcategory && ("
                              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full">
                                {service.subcategory}
                              </span>
                            )}
                          </div>"
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>"
                              <span className="text-gray-400">Price:</span>"
                              <div className="text-white font-semibold">
                                ${service.price.toLocaleString()}/month
                              </div>
                            </div>
                            <div>"
                              <span className="text-gray-400">ROI:</span>"
                              <div className="text-white font-semibold">
                                {service.roi}
                              </div>
                            </div>
                            <div>"
                              <span className="text-gray-400">Delivery:</span>"
                              <div className="text-white font-semibold">
                                {service.estimatedDelivery}
                              </div>
                            </div>
                            <div>"
                              <span className="text-gray-400">Level:</span>"
                              <div className="text-white font-semibold">
                                {service.innovationLevel}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>"
                    <div className="flex flex-col space-y-3">
                      <a'`
                        href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more information about pricing, features, and implementation.`}"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Get Quote</span>"
                        <ArrowRight className="w-4 h-4" />                      </a>
                      <a`
                        href={`tel:${contactInfo.phone}`}"
                        className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                      >"
                        <Phone className="w-4 h-4" />                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredServices.length === 0 && ("
            <div className="text-center py-12">"
              <div className="text-gray-400 text-lg mb-4">
                No services found matching your criteria
              </div>
              <button
                onClick={() => {
'
                  setSearchQuery('');'
                  setSelectedCategory('all');'
                  setPriceRange('all');
                }}"                className="text-blue-400 hover:text-blue-300 underline"
              >
                Clear all filters
              </button>
            </div>) }
        </div>
      </section>

      {/* Call to Action Section */}"
      <section className="py-20 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >"
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>"
            <p className="text-xl text-gray-300 mb-8">'
              Let's discuss how our comprehensive services can drive growth,
              efficiency, and competitive advantage for your organization.
            </p>
"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">"
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">"
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />"
                <h3 className="text-xl font-semibold text-white mb-2">
                  Call Us
                </h3>"
                <p className="text-gray-300 mb-3">
                  Speak directly with our experts
                </p>
                <a`
                  href={`tel:${contactInfo.phone}`}"                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  {contactInfo.phone}
                </a>
              </div>
"
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">"
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />"
                <h3 className="text-xl font-semibold text-white mb-2">
                  Email Us
                </h3>"
                <p className="text-gray-300 mb-3">
                  Get detailed information and quotes
                </p>
                <a`
                  href={`mailto:${contactInfo.email}`}"                  className="text-purple-400 hover:text-purple-300 font-semibold"
                >
                  {contactInfo.email}
                </a>
              </div>
"
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">"
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />"
                <h3 className="text-xl font-semibold text-white mb-2">
                  Visit Website
                </h3>"                <p className="text-gray-300 mb-3">Explore our full portfolio</p>
                <a
                  href={contactInfo.website}"
                  target="_blank""
                  rel="noopener noreferrer""
                  className="text-green-400 hover:text-green-300 font-semibold flex items-center justify-center space-x-1"
                >
                  <span>Visit Site</span>"
                  <ExternalLink className="w-4 h-4" />                </a>
              </div>
            </div>
"
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">"
              <h3 className="text-2xl font-bold text-white mb-4">
                Schedule a Free Consultation
              </h3>"
              <p className="text-blue-100 mb-6">
                Get personalized recommendations and implementation strategies
                for your business needs
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a'`
                  href={`mailto:${contactInfo.email}?subject=Free Consultation Request&body=Hi, I'd like to schedule a free consultation to discuss how your comprehensive services can benefit my business. Please let me know available times.`}"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Schedule Consultation
                </a>
                <a`
                  href={`tel:${contactInfo.phone}`}"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
                >
                  Call Now
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Emerging Tech</h3>
                <p className="text-gray-400">Next-generation technologies for the future</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Emerging Tech').map(service => (
                <div key={service.id} className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-medium">${service.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">{service.innovationLevel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
'"`
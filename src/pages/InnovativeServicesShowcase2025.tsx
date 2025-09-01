import { 
  Brain, Database, Users, Truck, Shield, Briefcase, Cpu, Wrench, Leaf, Atom,
  ArrowRight, ExternalLink, Phone, Mail, Zap, Target, Clock, Globe, Check
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  
  
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Innovative AI Services Showcase 2025 - Zion Tech Group"
        description="Discover our cutting-edge AI-powered micro SAAS services and solutions. From workflow orchestration to quantum machine learning, transform your business with intelligent technology."
       />
      
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6"
          >
            <Brain className="w-4 h-4 mr-2"  /> Innovative AI Services 2025
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Innovative AI Services Showcase 2025
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zion-slate-light text-xl"
          >
            Discover our cutting-edge AI-powered micro SAAS services that are revolutionizing industries and transforming businesses worldwide.
          </motion.p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Service Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <span key={category} className="px-4 py-2 bg-zion-cyan/10 text-zion-cyan rounded-full text-sm font-medium">
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-zion-cyan/10 rounded-lg">
                  <service.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <div className="ml-3">
                  <span className="text-xs text-zion-slate-light bg-zion-slate-light/10 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-zion-slate-dark mb-3">{service.title}</h3>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</div>
                <div className="text-sm text-zion-slate-light">Starting price</div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-zion-slate-dark mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zion-slate-dark">
                      <Check className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0"  />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-zion-slate-dark mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zion-slate-dark">
                      <Zap className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0"  />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <a 
                  href={service.path} 
                  className="w-full px-4 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors text-center font-medium inline-flex items-center justify-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2"  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5"  />
              <div>
                <p className="text-sm text-blue-100">Phone</p>
                <p className="font-semibold">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5"  />
              <div>
                <p className="text-sm text-blue-100">Email</p>
                <p className="font-semibold">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5"  />
              <div>
                <p className="text-sm text-blue-100">Website</p>
                <a href={contactInfo.website} className="font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5"  />
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
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />
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
                        {categoryIcons[service.category] || <Star className="w-5 h-5 text-white"  />}
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
                  </p>
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0"  />
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
                          <TrendingUp className="w-3 h-3 text-blue-400 flex-shrink-0"  />
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
                      <ArrowRight className="w-4 h-4"  />
                    </a>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="px-4 py-2 border border-white/30 text-white rounded-lg text-sm font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4"  />
                    </a>
                  </div>
                  {/* Additional Info */}
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3"  />
                        <span>{service.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-3 h-3"  />
                        <span>{service.innovationLevel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0"  />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current"  />
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
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  )}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Prices</option>
              <option value="low">Under $500/month</option>
              <option value="medium">$500 - $2,000/month</option>
              <option value="high">Over $2,000/month</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
          {filteredServices.map((service) => {
            const IconComponent = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${categoryColor} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <CategoryIcon className="w-8 h-8 text-white" />
                    {service.innovationLevel && (
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        {service.innovationLevel}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Price and Delivery */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-400">
                      {service.currency}{service.price.toLocaleString()}
                      <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Delivery</div>
                      <div className="text-sm font-semibold">{service.estimatedDelivery}</div>
                    </div>
                  </div>

                  {/* Market Price */}
                  <div className="mb-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-sm text-gray-400 mb-1">Market Price Range</div>
                    <div className="text-sm font-semibold text-blue-400">{service.marketPrice}</div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features</div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-blue-400 cursor-pointer hover:underline">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Benefits</div>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Comprehensive Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our complete portfolio of cutting-edge technology solutions, AI services, and innovative business solutions designed to transform your organization
          </p>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg p-6 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-zion-cyan mb-4">Ready to Transform Your Business?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-zion-slate-light text-sm">Phone</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div>
                <p className="text-zion-slate-light text-sm">Email</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-zion-slate-light text-sm">Website</p>
                <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light font-semibold">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 border border-zion-cyan/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-light/10 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:bg-zion-blue-light/20 transition-all duration-300 backdrop-blur-sm group"
            >
              {/* Service Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm mb-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-zion-cyan font-bold text-lg">
                    ${service.price.toLocaleString()}/{service.pricingModel}
                  </span>
                  <span className="text-zion-slate-light text-sm">
                    {service.estimatedDelivery}
                  </span>
                <h4 className="text-zion-cyan font-semibold mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-start">
                      <span className="text-zion-cyan mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <h4 className="text-zion-cyan font-semibold mb-2">Benefits</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                    <span key={index} className="px-2 py-1 text-xs bg-gray-500/20 text-gray-300 rounded">
                    <span
                      key={index}
                      className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                    >
              </div>

              {/* Contact and Actions */}
              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {service.estimatedDelivery}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={service.demoUrl}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a 
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors flex items-center gap-1"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                  </div>
                </div>
              </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Get Started</span>
                  </a>
                  
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Request Quote</span>
                  </a>


      {/* Stats Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <UsersIcon className="h-12 w-12 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUpIcon className="h-12 w-12 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <GlobeIcon className="h-12 w-12 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-400">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-12 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, features, or industries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="lg:w-48">
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredServices.length} Innovative Solutions Available
            </h2>
            <p className="text-gray-400 text-lg">
              Each solution is designed to address real business challenges with proven technology and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div
                  key={service.id}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColor}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-400">
                          <Star className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Market Price & Delivery */}
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Market Price:</span>
                      <span className="text-green-400 font-medium">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Delivery:</span>
                      <span className="text-blue-400">{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Support:</span>
                      <span className="text-purple-400 capitalize">{service.supportLevel}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">
                No services found matching your criteria.
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="https://ziontechgroup.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Website <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Our Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709<br />
                United States
              </p>
export default ComprehensiveServicesShowcase;

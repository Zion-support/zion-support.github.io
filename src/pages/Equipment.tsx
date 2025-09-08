import React from 'react';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Equipment Services - Zion Tech Group"
        description="Enterprise-grade technology equipment and infrastructure solutions. Servers, networking, storage, and security hardware."
      />
      
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Equipment</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enterprise-grade technology infrastructure and equipment solutions for modern businesses.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105">
              Get Equipment Quote
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Equipment & Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology equipment solutions to power your digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get expert consultation and equipment recommendations for your business needs.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105">
              Contact Equipment Team
            </button>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option value="all">All Categories</option>
            {equipmentCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>
          
          <select
            value={selectedAvailability}
            onChange={(e) => setSelectedAvailability(e.target.value)}
            className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {availabilityOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name} {option.count > 0 && `(${option.count})`}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Equipment Categories */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Equipment Categories
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-slate-400 mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-medium">{category.count} items</span>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Equipment */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Featured Equipment
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredEquipment.map((equipment, index) => (
            <motion.div
              key={equipment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{equipment.name}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{equipment.type}</p>
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <span className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>{equipment.condition}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{equipment.location}</span>
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{equipment.rating}</span>
                  </div>
                  <span className="text-sm text-slate-400">{equipment.reviews} reviews</span>
                </div>
              </div>
              
              <p className="text-slate-300 mb-4">{equipment.description}</p>
              
              {/* Specifications */}
              <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-medium text-slate-300 mb-2">Specifications</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(equipment.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-slate-400 capitalize">{key}:</span>
                      <span className="text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-cyan-400 font-medium text-lg">{equipment.price}</span>
                  {equipment.originalPrice && (
                    <span className="text-slate-400 text-sm line-through ml-2">{equipment.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    equipment.availability === 'In Stock' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {equipment.availability}
                  </span>
                  <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Additional Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Installation & Setup</h3>
            <p className="text-slate-400 mb-4">Professional installation and configuration of all equipment</p>
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
              Learn More
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Warranty & Support</h3>
            <p className="text-slate-400 mb-4">Extended warranties and technical support for all equipment</p>
            <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
              Learn More
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Rental Options</h3>
            <p className="text-slate-400 mb-4">Flexible rental solutions for temporary equipment needs</p>
            <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Custom Equipment Solutions?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            We can help you find the perfect equipment for your specific requirements. 
            Our team will work with you to understand your needs and recommend the right solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-medium">
              Request Custom Quote
            </button>
            <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
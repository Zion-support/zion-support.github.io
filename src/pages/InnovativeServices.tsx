    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Innovative Services
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto">
              Discover the future of technology with our cutting-edge innovative services that push the boundaries 
              of what's possible in AI, quantum computing, neural interfaces, and beyond.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-slate-800 py-8 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Innovation Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
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
              className="bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-purple-400">
                      {getCategoryIcon(service.category)}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-400">
                      {formatPrice(service.price, service.pricingModel)}
                    </span>
                    <div className={`text-sm font-semibold ${getInnovationScoreColor(service.innovationScore)}`}>
                      Innovation Score: {service.innovationScore}%
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                    {service.category}
                  </span>
                  <span className="inline-block bg-slate-600 text-slate-300 text-xs px-2 py-1 rounded-full ml-2">
                    {service.pricingModel}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Revolutionary Features:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Transformative Benefits:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <Rocket className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.useCases.slice(0, 2).map((useCase, index) => (
                      <li key={index} className="flex items-center">
                        <Lightbulb className="w-4 h-4 text-yellow-400 mr-2" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Explore Innovation
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-800 py-16 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Shape the Future?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-pink-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href="https://ziontechgroup.com" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServices;
}

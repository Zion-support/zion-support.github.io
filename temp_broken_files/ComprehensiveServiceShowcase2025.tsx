            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
              ))}
            {/* View Controls */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="delivery">Sort by Delivery</option>
              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white/20' : ''}`}
                >
                  <Grid className="h-4 w-4 text-white" />
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white/20' : ''}`}
                >
                  <List className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        <div
          className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
          }
        >
          <div>
            {filteredServices.map((serviceindex) => (
              <div
                key={service.id}
                className={`group cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105'
                    : 'bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300'
                }`}
                onClick={() => setSelectedService(service)}
              >
                {viewMode === 'grid' ? (
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                        <service.icon className="h-8 w-8 text-white" />
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPricingColor(service.pricing.type)}`}>
                          {pricingTypes[service.pricing.type].label}
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm ml-1">{service.rating}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.title}
                      <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                        {service.description}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Complexity</span>
                        <span className={`font-medium ${getComplexityColor(service.complexity)}`}>
                          {complexityLevels[service.complexity].label}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Delivery</span>
                        <span className="text-white font-medium">{service.deliveryTime}</span>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Price</span>
                        <span className="text-white font-bold text-lg">
                          ${service.pricing.price.toLocaleString()}/{service.pricing.period}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(03).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                          {tag}
                      ))}
                    <div className="flex items-center text-purple-300 group-hover:text-purple-200 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                ) : (
                  <div className="flex items-center space-x-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color}`}>
                      <service.icon className="h-8 w-8 text-white" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {service.title}
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm ml-1">{service.rating}</span>
                            <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPricingColor(service.pricing.type)}`}>
                            {pricingTypes[service.pricing.type].label}
                      <p className="text-gray-300 mb-3">{service.description}</p>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-gray-400">Delivery: </span>
                          <span className="text-white ml-1">{service.deliveryTime}</span>
                        <div className="flex items-center">
                          <Target className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-gray-400">Complexity: </span>
                          <span className={`ml-1 ${getComplexityColor(service.complexity)}`}>
                            {complexityLevels[service.complexity].label}
                        <div className="text-white font-bold">
                          ${service.pricing.price.toLocaleString()}/{service.pricing.period}
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <div>
        {selectedService && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedService.color}`}>
                  <selectedService.icon className="h-12 w-12 text-white" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedService.title}
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {selectedService.description}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Rating</div>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="text-white text-xl font-bold ml-2">{selectedService.rating}</span>
                        <span className="text-gray-400 ml-2">({selectedService.reviews} reviews)</span>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Delivery Time</div>
                      <div className="text-white text-xl font-bold">{selectedService.deliveryTime}</div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Complexity</div>
                      <div className={`text-xl font-bold ${getComplexityColor(selectedService.complexity)}`}>
                        {complexityLevels[selectedService.complexity].label}
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Pricing</div>
                      <div className="text-white text-xl font-bold">
                        ${selectedService.pricing.price.toLocaleString()}/{selectedService.pricing.period}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedService.features.map((featureindex) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                      ))}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Benefits</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedService.benefits.map((benefitindex) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <TrendingUp className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                          <span>{benefit}</span>
                      ))}
                <div>
                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Pricing Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Service Type</span>
                        <span className="text-white font-medium">
                          {pricingTypes[selectedService.pricing.type].label}
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Price</span>
                        <span className="text-white font-bold text-2xl">
                          ${selectedService.pricing.price.toLocaleString()}
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Billing Period</span>
                        <span className="text-white font-medium">
                          Per {selectedService.pricing.period}
                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
                          {tag}
                      ))}
                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                      Get Started Now
                    <button className="w-full bg-white/10 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                      Contact Sales
import React from "react";

const function ComprehensiveServiceShowcase2025() { = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function ComprehensiveServiceShowcase2025() {</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ComprehensiveServiceShowcase2025() {;

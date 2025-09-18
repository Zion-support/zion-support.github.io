              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-2" />
              <p className="text-white font-semibold">Call Us</p>
              <a href="tel:+13024640950" className="text-blue-300 hover:text-white transition-colors">
                +1 302 464 0950
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-2" />
              <p className="text-white font-semibold">Email Us</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:text-white transition-colors">
                kleber@ziontechgroup.com
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-pink-400 mb-2" />
              <p className="text-white font-semibold">Visit Us</p>
              <p className="text-pink-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Comprehensive Service Portfolio
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our cutting-edge services span across AI, blockchain, quantum computing, and sustainable technology. 
            Each solution is designed to deliver measurable business value and competitive advantage.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name} ({category.count})
            ))}
        {/* Search and Sort */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
            />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="rating">Sort by Rating</option>
            <option value="price">Sort by Price</option>
            <option value="reviews">Sort by Reviews</option>
            <option value="name">Sort by Name</option>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            {sortedServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      {getCategoryIcon(service.category)}
                    <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded">
                      {service.subcategory}
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{service.rating}</span>
                    <span className="text-gray-400">({service.reviewCount})</span>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-white font-semibold">{service.currency}{service.price.toLocaleString()}</span>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-blue-400">{service.marketPrice}</span>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">ROI:</span>
                    <span className="text-green-400 font-semibold">{service.roi}</span>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-yellow-400">{service.setupTime}</span>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">AI Score</span>
                    <span className="text-white font-semibold">{service.aiScore}/100</span>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${service.aiScore}%` }}
                    ></div>
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">Key Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {tag}
                    ))}
                <div className="space-y-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  <a
                    href={`https://ziontechgroup.com/services/${service.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-blue-500 text-blue-400 font-semibold py-3 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    <span>Visit Service Page</span>
                    <Globe className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our cutting-edge technology solutions. 
              Get started today and experience the future of business innovation.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Contact Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Build the Future Together
              <p className="text-gray-300 mb-8 text-lg">
                Our team of technology experts is ready to help you implement cutting-edge solutions 
                that will transform your business operations and drive unprecedented growth.
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">24/7 Technical Support</span>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Custom Implementation</span>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Ongoing Optimization</span>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">ROI Guarantee</span>
            <div className="bg-gray-800 rounded-xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                      +1 302 464 0950
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">
                      kleber@ziontechgroup.com
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-pink-400">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-white font-semibold">Website</p>
                    <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                      ziontechgroup.com
  );



export default ComprehensiveServicesAdvertising;
import React from 'react';

const function ComprehensiveServicesAdvertising() {: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function ComprehensiveServicesAdvertising() {</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default function ComprehensiveServicesAdvertising() {;

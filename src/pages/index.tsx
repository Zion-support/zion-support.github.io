import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Services
            </a>
            <a
              href="/products"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Products
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Our Services</h3>
            <p className="text-gray-300 mb-6">
              Discover our comprehensive range of technology services including AI development, cloud migration, cybersecurity, and more.
            </p>
            <a href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Learn More
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Our Products</h3>
            <p className="text-gray-300 mb-6">
              Explore our innovative product portfolio including AI-powered solutions, SaaS platforms, and security tools.
            </p>
            <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              View Products
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
            <p className="text-gray-300 mb-6">
              Ready to transform your business? Contact us for a free consultation and custom solution design.
            </p>
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how our technology solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              ✉️ Get Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
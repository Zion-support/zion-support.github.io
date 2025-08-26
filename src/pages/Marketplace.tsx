import React from 'react';
import { Link } from 'react-router-dom';

const Marketplace: React.FC = () => {
  const marketplaceCategories = [
    {
      title: "AI Solutions",
      description: "Ready-to-deploy AI models and solutions",
      count: "25+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cybersecurity Tools",
      description: "Advanced security and compliance solutions",
      count: "18+",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and DevOps tools",
      count: "32+",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing",
      description: "Quantum algorithms and quantum-ready applications",
      count: "12+",
      color: "from-orange-500 to-red-500"
    }
  ];

  const featuredProducts = [
    {
      name: "AI Autonomous Research Assistant",
      category: "AI Solutions",
      description: "Intelligent research automation tool that can analyze documents, extract insights, and generate comprehensive reports.",
      price: "$2,999/month",
      rating: 4.8,
      reviews: 127,
      image: "/images/marketplace/ai-research-assistant.jpg"
    },
    {
      name: "Advanced Cybersecurity Suite",
      category: "Cybersecurity",
      description: "Comprehensive security solution with threat detection, vulnerability assessment, and compliance automation.",
      price: "$4,499/month",
      rating: 4.9,
      reviews: 89,
      image: "/images/marketplace/cybersecurity-suite.jpg"
    },
    {
      name: "Quantum Neural Network Platform",
      category: "Quantum Computing",
      description: "Next-generation platform for quantum machine learning and neural network optimization.",
      price: "$8,999/month",
      rating: 4.7,
      reviews: 45,
      image: "/images/marketplace/quantum-platform.jpg"
    },
    {
      name: "Green IT Management Suite",
      category: "Cloud Services",
      description: "Sustainable IT infrastructure management with carbon footprint tracking and optimization.",
      price: "$1,999/month",
      rating: 4.6,
      reviews: 203,
      image: "/images/marketplace/green-it-suite.jpg"
    }
  ];

  const recentProducts = [
    {
      name: "SOC2 Compliance Automation",
      category: "Compliance",
      price: "$3,299/month",
      rating: 4.5,
      reviews: 23
    },
    {
      name: "Affiliate Attribution Hub",
      category: "Marketing",
      price: "$1,799/month",
      rating: 4.4,
      reviews: 67
    },
    {
      name: "Accessibility Auditor Pro",
      category: "Compliance",
      price: "$899/month",
      rating: 4.7,
      reviews: 156
    },
    {
      name: "Micro-SaaS Starter Kit",
      category: "Development",
      price: "$499/month",
      rating: 4.3,
      reviews: 89
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Marketplace
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover and deploy cutting-edge technology solutions from Zion Tech Group. 
              From AI-powered tools to quantum computing platforms, find the perfect 
              solution for your business needs.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search for solutions, tools, or services..."
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select className="px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">All Categories</option>
                <option value="ai">AI Solutions</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="cloud">Cloud Services</option>
                <option value="quantum">Quantum Computing</option>
              </select>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300">
                Search
              </button>
            </div>
          </div>
          
          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketplaceCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-white">{category.count}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">{category.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Featured Products */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Solutions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-300">{product.rating}</span>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{product.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">{product.price}</span>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Products */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Recently Added</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentProducts.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-xs text-gray-300">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-blue-400 mb-3">{product.price}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{product.reviews} reviews</span>
                    <button className="px-4 py-2 border border-gray-600 text-white text-sm rounded-lg hover:bg-gray-800 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Can't Find What You Need?</h3>
              <p className="text-gray-300 mb-6">
                We offer custom development services to create tailored solutions for your specific requirements. 
                Let's discuss your project and build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Start Custom Project
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
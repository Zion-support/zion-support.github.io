import React from 'react';
import { Link } from 'react-router-dom';
import { NEW_BLOG_POSTS_2026, NEW_SERVICES_2026 } from '../data/newContent2026';

const NewContentShowcase2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Revolutionary Content 2026
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover the latest breakthroughs in AI, quantum computing, neural interfaces, and autonomous systems
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-yellow-400 text-purple-900 rounded-full font-semibold">
                🚀 New AI Automation
              </span>
              <span className="px-4 py-2 bg-pink-400 text-purple-900 rounded-full font-semibold">
                ⚡ Quantum Computing
              </span>
              <span className="px-4 py-2 bg-blue-400 text-purple-900 rounded-full font-semibold">
                🧠 Neural Interfaces
              </span>
              <span className="px-4 py-2 bg-green-400 text-purple-900 rounded-full font-semibold">
                🤖 Autonomous AI
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore cutting-edge insights and breakthrough technologies that are shaping the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEW_BLOG_POSTS_2026.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 relative">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-400 text-purple-900 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {post.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI and technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEW_SERVICES_2026.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 relative">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-400 text-indigo-900 rounded-full text-sm font-semibold">
                      AI Score: {service.aiScore}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-indigo-600">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-gray-600">{service.reviews.rating}</span>
                      <span className="ml-1 text-gray-500">({service.reviews.count})</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-semibold mr-2">Delivery:</span>
                      <span>{service.deliveryTime}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-semibold mr-2">Support:</span>
                      <span>{service.support}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our revolutionary AI and technology solutions to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewContentShowcase2026;
import React from 'react';
import { Link } from 'react-router-dom';
import { REVOLUTIONARY_BLOG_POSTS_2027, REVOLUTIONARY_CASE_STUDIES_2027, REVOLUTIONARY_SERVICES_2027 } from '../data/revolutionaryContent2026';
const RevolutionaryContent2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionary Content 2027
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our groundbreaking content covering synthetic intelligence, 
              quantum neural fusion, holographic reality, and consciousness transfer technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-purple-600/20 rounded-full text-purple-300 border border-purple-500/30">
                🚀 Revolutionary Technology
              </span>
              <span className="px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 border border-blue-500/30">
                🧠 AI Consciousness
              </span>
              <span className="px-4 py-2 bg-indigo-600/20 rounded-full text-indigo-300 border border-indigo-500/30">
                ⚡ Quantum Computing
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionary Blog Posts
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dive deep into the latest breakthroughs in AI, quantum computing, and emerging technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVOLUTIONARY_BLOG_POSTS_2027.map((post) => (
              <div key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  {post.isNew && (
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-semibold border border-red-500/30">
                      NEW
                    </span>
                  )}
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30">
                    {post.urgency}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>👁️ {post.views.toLocaleString()}</span>
                    <span>❤️ {post.likes}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Case Studies */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Revolutionary Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading companies are transforming their businesses with our cutting-edge technology
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {REVOLUTIONARY_CASE_STUDIES_2027.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  {caseStudy.isNew && (
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-semibold border border-red-500/30">
                      NEW
                    </span>
                  )}
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {caseStudy.title}
                </h3>
                <p className="text-lg text-blue-300 mb-4">
                  {caseStudy.company} • {caseStudy.industry}
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm mb-4">{caseStudy.challenge}</p>
                  <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm mb-4">{caseStudy.solution}</p>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Results:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {caseStudy.results.slice(0, 3).map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs border border-indigo-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  Duration: {caseStudy.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Revolutionary Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI and technology solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVOLUTIONARY_SERVICES_2027.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  {service.isNew && (
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-semibold border border-red-500/30">
                      NEW
                    </span>
                  )}
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-semibold border border-indigo-500/30">
                    {service.urgency}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="text-indigo-400 mr-2">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-indigo-300">
                    {service.pricing}
                  </div>
                  <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already transforming their businesses with our revolutionary technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );

export default RevolutionaryContent2027;
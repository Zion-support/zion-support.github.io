
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of innovative technology solutions, AI-powered services, 
              and digital transformation expertise. We help businesses thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions to drive your business forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 text-2xl">
                ✍️
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Content Generation</h3>
              <p className="text-gray-300 mb-6">
                Generate high-quality content in seconds with AI-powered writing assistance, SEO optimization, and brand voice customization.
              </p>
              <Link
                to="/services/comprehensive"
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6 text-2xl">
                🤖
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Customer Support</h3>
              <p className="text-gray-300 mb-6">
                Automate customer support with AI-powered chatbots, intelligent ticket routing, and sentiment analysis.
              </p>
              <Link
                to="/services/comprehensive"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 text-2xl">
                💰
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Sales Intelligence</h3>
              <p className="text-gray-300 mb-6">
                Boost sales performance with AI-driven lead scoring, predictive analytics, and automated sales process optimization.
              </p>
              <Link
                to="/services/comprehensive"
                className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-300"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
            >
              View All Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h2>
              <p className="text-lg text-gray-300 mb-6">
                We are a team of passionate technologists dedicated to helping businesses 
                navigate the complex landscape of modern technology. With years of experience 
                in AI, cloud computing, and digital transformation, we deliver solutions 
                that drive real business value.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our mission is to empower organizations with cutting-edge technology 
                solutions that enable growth, efficiency, and innovation in an ever-evolving digital world.
              </p>
              <Link
                to="/about"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-white/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-3xl">Z</span>
                  </div>
                  <p className="text-white/80 text-lg">Innovation • Excellence • Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our technology solutions can help you achieve your goals 
            and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/careers"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* More Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Explore Our Full Service Portfolio</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From quantum computing to autonomous AI development, discover our comprehensive range of innovative technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-700/30 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 text-xl">
                ⚛️
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
              <p className="text-gray-300 text-sm mb-4">
                Access quantum processing power for complex computational challenges
              </p>
              <Link
                to="/services/comprehensive"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-300"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-slate-700/30 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 text-xl">
                🧠
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Autonomous AI</h3>
              <p className="text-gray-300 text-sm mb-4">
                Build and deploy AI models with zero coding required
              </p>
              <Link
                to="/services/comprehensive"
                className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-300"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-slate-700/30 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 text-xl">
                🌐
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Edge AI Computing</h3>
              <p className="text-gray-300 text-sm mb-4">
                Deploy AI models at the edge for real-time processing
              </p>
              <Link
                to="/services/comprehensive"
                className="text-green-400 hover:text-green-300 font-medium text-sm transition-colors duration-300"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-slate-700/30 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 text-xl">
                🔒
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Cybersecurity</h3>
              <p className="text-gray-300 text-sm mb-4">
                Protect systems with AI-driven threat detection
              </p>
              <Link
                to="/services/comprehensive"
                className="text-red-400 hover:text-red-300 font-medium text-sm transition-colors duration-300"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services/comprehensive"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              View All Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Let's discuss how our innovative technology solutions can transform your business and drive success
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Start Your Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-gray-300">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

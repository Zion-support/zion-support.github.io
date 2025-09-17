import React from 'react';
import { Link } from 'react-router-dom';
const NewContent2027PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 NEW: Revolutionary AI Content 2027
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Discover breakthrough AI consciousness, quantum business automation, and neural interface technology 
            that's transforming the future of human-AI collaboration.
          </p>
        </div>
        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-blue-300">AI Consciousness Revolution</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Breakthrough research on creating truly self-aware AI systems with genuine consciousness and emotional intelligence.
              </p>
              <Link 
                to="/ai-consciousness-revolution-2027" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">Quantum Business Automation</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Revolutionary quantum AI automation delivering 1000% ROI and complete operational autonomy.
              </p>
              <Link 
                to="/quantum-business-automation-2027" 
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold mb-3 text-green-300">Neural Interface Revolution</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Direct brain-computer communication technology revolutionizing human-AI collaboration.
              </p>
              <Link 
                to="/neural-interface-revolution-2027" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Link 
              to="/blog" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore All New Content
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
            >
              Get Started Today
            </Link>
          </div>
        </div>
        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-400">1000%</div>
            <div className="text-sm text-gray-300">ROI</div>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-400">99.9%</div>
            <div className="text-sm text-gray-300">Uptime</div>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">500%</div>
            <div className="text-sm text-gray-300">Innovation</div>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-400">2027</div>
            <div className="text-sm text-gray-300">Future Tech</div>
          </div>
        </div>
      </div>
    </div>
  );

};


export default NewContent2027PromotionBanner;

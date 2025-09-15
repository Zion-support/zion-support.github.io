import React from 'react';

const NextGenTechShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEXT-GEN SHOWCASE • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Next-Gen Tech Showcase 2025
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Explore the most advanced technologies that are reshaping our world and 
            creating new possibilities for the future
          </p>
        </div>

        {/* Technology Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-200">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-orange-800">AI & Machine Learning</h3>
            <p className="text-gray-600 mb-6 text-center">
              Advanced artificial intelligence systems that learn, adapt, and make intelligent decisions
            </p>
            <ul className="text-orange-700 space-y-2 text-sm">
              <li>• Deep learning networks</li>
              <li>• Natural language processing</li>
              <li>• Computer vision</li>
              <li>• Predictive analytics</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-red-200">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-red-800">Quantum Computing</h3>
            <p className="text-gray-600 mb-6 text-center">
              Revolutionary computing power that solves complex problems exponentially faster
            </p>
            <ul className="text-red-700 space-y-2 text-sm">
              <li>• Quantum algorithms</li>
              <li>• Quantum cryptography</li>
              <li>• Molecular simulation</li>
              <li>• Optimization problems</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-pink-200">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-pink-800">Neural Interfaces</h3>
            <p className="text-gray-600 mb-6 text-center">
              Direct brain-computer interfaces that enable thought-controlled computing
            </p>
            <ul className="text-pink-700 space-y-2 text-sm">
              <li>• Brain-computer interfaces</li>
              <li>• Thought control</li>
              <li>• Cognitive enhancement</li>
              <li>• Neural networks</li>
            </ul>
          </div>
        </div>

        {/* Advanced Technologies Showcase */}
        <div className="bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 rounded-3xl p-12 mb-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌟 Advanced Technologies</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Discover the cutting-edge technologies that are defining the future of innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">🌐 Edge Computing</h3>
              <p className="text-orange-100 mb-6">
                Process data closer to the source for faster response times and reduced latency
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>Real-time processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>Reduced latency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>Offline capabilities</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">🔒 Blockchain & Web3</h3>
              <p className="text-red-100 mb-6">
                Decentralized technologies that enable secure, transparent, and trustless systems
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Decentralized systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Smart contracts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Digital ownership</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Implementation Timeline */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">📅 Technology Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our comprehensive timeline for implementing next-generation technologies
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">Q1</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Integration</h3>
                <p className="text-gray-600">Implement advanced AI systems and machine learning capabilities</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">Q2</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Quantum Computing</h3>
                <p className="text-gray-600">Deploy quantum computing solutions for complex problem solving</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">Q3</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Neural Interfaces</h3>
                <p className="text-gray-600">Launch brain-computer interface technologies</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">Q4</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Integration</h3>
                <p className="text-gray-600">Complete integration of all next-generation technologies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Impact Metrics */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">📊 Technology Impact</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The measurable impact of next-generation technologies on business performance
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">500%</div>
              <div className="text-gray-600 font-semibold">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">90%</div>
              <div className="text-gray-600 font-semibold">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-semibold">Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">Availability</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Embrace Next-Gen Technology?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the technological revolution and transform your business with cutting-edge solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Tech Journey
            </a>
            <a 
              href="/pages/InnovativeServicesShowcase2025" 
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-lg"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenTechShowcase2025;
import React from 'react';

const NextGenTechShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEXT-GEN TECHNOLOGY • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Next-Gen Tech Showcase 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover the most advanced technologies reshaping our world - from AI and quantum computing 
            to neural interfaces and beyond. Experience the future today.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#showcase" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Showcase
            </a>
            <a href="#contact" className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-lg">
              Get Access
            </a>
          </div>
        </div>

        {/* Technology Showcase Grid */}
        <div id="showcase" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-200">
            <div className="text-5xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Advanced AI Systems</h3>
            <p className="text-gray-600 mb-6 text-center">
              Next-generation artificial intelligence with human-like reasoning and autonomous capabilities.
            </p>
            <ul className="text-orange-600 space-y-2 text-sm">
              <li>• Autonomous agents</li>
              <li>• Human-like reasoning</li>
              <li>• Emotional intelligence</li>
              <li>• Creative problem solving</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-red-200">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Quantum Computing</h3>
            <p className="text-gray-600 mb-6 text-center">
              Revolutionary quantum processors that solve impossible problems with exponential speed.
            </p>
            <ul className="text-red-600 space-y-2 text-sm">
              <li>• Exponential speedup</li>
              <li>• Quantum cryptography</li>
              <li>• Molecular simulation</li>
              <li>• Optimization problems</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-pink-200">
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Neural Interfaces</h3>
            <p className="text-gray-600 mb-6 text-center">
              Direct brain-computer interfaces enabling thought-controlled systems and enhanced cognition.
            </p>
            <ul className="text-pink-600 space-y-2 text-sm">
              <li>• Thought control</li>
              <li>• Neural feedback</li>
              <li>• Medical applications</li>
              <li>• Enhanced learning</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-200">
            <div className="text-5xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Edge Computing</h3>
            <p className="text-gray-600 mb-6 text-center">
              Distributed computing at the edge for ultra-low latency and real-time processing.
            </p>
            <ul className="text-purple-600 space-y-2 text-sm">
              <li>• Ultra-low latency</li>
              <li>• Real-time processing</li>
              <li>• Distributed intelligence</li>
              <li>• Edge optimization</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-200">
            <div className="text-5xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Predictive Analytics</h3>
            <p className="text-gray-600 mb-6 text-center">
              Advanced predictive models that forecast trends and optimize business outcomes.
            </p>
            <ul className="text-indigo-600 space-y-2 text-sm">
              <li>• Trend forecasting</li>
              <li>• Risk assessment</li>
              <li>• Opportunity identification</li>
              <li>• Strategic planning</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-200">
            <div className="text-5xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Future Technologies</h3>
            <p className="text-gray-600 mb-6 text-center">
              Emerging technologies that will shape the next decade of innovation and progress.
            </p>
            <ul className="text-teal-600 space-y-2 text-sm">
              <li>• Augmented reality</li>
              <li>• Virtual reality</li>
              <li>• Holographic displays</li>
              <li>• Space technology</li>
            </ul>
          </div>
        </div>

        {/* Interactive Technology Demo */}
        <div className="bg-gradient-to-r from-orange-900 to-red-900 rounded-2xl p-12 mb-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demo</h2>
            <p className="text-xl opacity-90">Experience our technologies in action</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2">AI Assistant Demo</h3>
              <p className="text-orange-100 text-sm mb-4">Try our conversational AI</p>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-50 transition-colors">
                Try Demo
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-2">Quantum Simulator</h3>
              <p className="text-orange-100 text-sm mb-4">Experience quantum computing</p>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-50 transition-colors">
                Launch Sim
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">🧬</div>
              <h3 className="text-lg font-bold mb-2">Neural Interface</h3>
              <p className="text-orange-100 text-sm mb-4">Control with your mind</p>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-50 transition-colors">
                Connect
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">🔮</div>
              <h3 className="text-lg font-bold mb-2">Predictive Model</h3>
              <p className="text-orange-100 text-sm mb-4">See the future</p>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-50 transition-colors">
                Predict
              </button>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Healthcare</h3>
            <p className="text-gray-600 text-sm mb-4">
              AI-powered diagnostics, neural interfaces for rehabilitation, and quantum drug discovery.
            </p>
            <div className="text-orange-600 font-bold text-sm">+300% Efficiency</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
            <div className="text-4xl mb-4">🏦</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Finance</h3>
            <p className="text-gray-600 text-sm mb-4">
              Quantum risk analysis, AI trading algorithms, and predictive market modeling.
            </p>
            <div className="text-red-600 font-bold text-sm">+500% Returns</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
            <div className="text-4xl mb-4">🏭</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Manufacturing</h3>
            <p className="text-gray-600 text-sm mb-4">
              Neural-controlled robotics, predictive maintenance, and quantum optimization.
            </p>
            <div className="text-pink-600 font-bold text-sm">99.9% Accuracy</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Space</h3>
            <p className="text-gray-600 text-sm mb-4">
              AI navigation systems, quantum communication, and neural-controlled spacecraft.
            </p>
            <div className="text-purple-600 font-bold text-sm">10x Mission Success</div>
          </div>
        </div>

        {/* Technology Roadmap */}
        <div className="bg-white rounded-2xl p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🗺️ Technology Roadmap 2025-2030</h2>
            <p className="text-xl text-gray-600">Our vision for the future of technology</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">2025</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Advanced AI & Neural Interfaces</h3>
                <p className="text-gray-600">Human-level AI and commercial neural interfaces</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">2026</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Quantum Supremacy</h3>
                <p className="text-gray-600">Practical quantum computing applications</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">2027</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Mind-Machine Fusion</h3>
                <p className="text-gray-600">Seamless integration of human and artificial intelligence</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">2030</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Technological Singularity</h3>
                <p className="text-gray-600">The convergence of all advanced technologies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div id="contact" className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready for the Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in shaping the future of technology and experience the next generation of innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-lg">
              Start Future Journey
            </a>
            <a href="/pages/ComprehensiveServices2025" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Explore All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenTechShowcase2025;
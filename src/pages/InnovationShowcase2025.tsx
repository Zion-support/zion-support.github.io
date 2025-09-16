import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const InnovationShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6">
            🚀 INNOVATION SHOWCASE • 2025
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🌟 Innovation Showcase 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover the most groundbreaking innovations that are reshaping industries and creating new possibilities for the future of technology.
          </p>
        </div>

        {/* Featured Innovations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Autonomous AI Agents</h3>
            <p className="text-gray-600 mb-6 text-center">
              Self-operating AI systems that can independently manage complex business processes and make intelligent decisions.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-sm text-gray-600">24/7 autonomous operation</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Real-time decision making</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Self-learning capabilities</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore AI Agents →
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Quantum Edge Computing</h3>
            <p className="text-gray-600 mb-6 text-center">
              Revolutionary quantum computing solutions that bring unprecedented processing power to edge devices.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Exponential speed increase</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Ultra-low latency</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Quantum encryption</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Discover Quantum →
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Neural Interface Platform</h3>
            <p className="text-gray-600 mb-6 text-center">
              Direct brain-computer interfaces that enable seamless interaction between human consciousness and digital systems.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Thought-based control</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Non-invasive technology</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Real-time feedback</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Connect Neural →
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Metaverse Integration</h3>
            <p className="text-gray-600 mb-6 text-center">
              Seamless integration between physical and virtual worlds, creating immersive digital experiences.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Immersive experiences</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Cross-platform compatibility</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Real-time collaboration</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Enter Metaverse →
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4 text-center">🛡️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">AI-Powered Security</h3>
            <p className="text-gray-600 mb-6 text-center">
              Advanced cybersecurity solutions powered by artificial intelligence that provide proactive threat protection.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Predictive threat detection</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Automated response</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Zero-trust architecture</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Secure Now →
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4 text-center">☁️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Cloud-Native AI</h3>
            <p className="text-gray-600 mb-6 text-center">
              Scalable AI solutions built for the cloud, enabling rapid deployment and infinite scalability.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Auto-scaling capabilities</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Global deployment</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Cost optimization</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Scale AI →
            </button>
          </div>
        </div>

        {/* Innovation Impact */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 mb-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Innovation Impact</h2>
            <p className="text-xl opacity-90">See how our innovations are transforming industries worldwide</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200 text-lg">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200 text-lg">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$2B+</div>
              <div className="text-blue-200 text-lg">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-200 text-lg">Support Available</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Innovate?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the innovation revolution and transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Innovating
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-12 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-xl">
              View Case Studies
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InnovationShowcase2025;
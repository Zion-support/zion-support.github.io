import React from 'react';
import { Link } from 'react-router-dom';

const NextGenTechShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 NEXT-GEN TECHNOLOGY • 2025
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Next-Gen Technology Showcase
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary innovations that are reshaping industries and transforming the way we work, live, and connect.
            </p>
          </div>

          {/* Interactive Tech Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">AI-Powered Automation</h3>
              <p className="text-purple-100 mb-6 text-center">
                Autonomous systems that learn, adapt, and optimize business processes in real-time
              </p>
              <ul className="text-purple-200 space-y-2 mb-6 text-sm">
                <li>• Self-healing infrastructure</li>
                <li>• Predictive analytics</li>
                <li>• Intelligent decision making</li>
                <li>• Automated workflow optimization</li>
              </ul>
              <div className="text-center">
                <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Available Now
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Computing</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Revolutionary quantum processors solving complex problems exponentially faster
              </p>
              <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
                <li>• Quantum cryptography</li>
                <li>• Molecular simulation</li>
                <li>• Optimization algorithms</li>
                <li>• Machine learning acceleration</li>
              </ul>
              <div className="text-center">
                <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Beta Testing
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Neural Interfaces</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Direct brain-computer interfaces enabling seamless human-machine interaction
              </p>
              <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
                <li>• Non-invasive BCI technology</li>
                <li>• Thought-controlled devices</li>
                <li>• Neural feedback systems</li>
                <li>• Cognitive enhancement</li>
              </ul>
              <div className="text-center">
                <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Research Phase
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🌐</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Edge Computing</h3>
              <p className="text-orange-100 mb-6 text-center">
                Distributed computing infrastructure bringing intelligence closer to data sources
              </p>
              <ul className="text-orange-200 space-y-2 mb-6 text-sm">
                <li>• Real-time processing</li>
                <li>• Reduced latency</li>
                <li>• Enhanced security</li>
                <li>• IoT optimization</li>
              </ul>
              <div className="text-center">
                <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Deployed
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🔗</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Blockchain 3.0</h3>
              <p className="text-indigo-100 mb-6 text-center">
                Next-generation blockchain with enhanced scalability, security, and sustainability
              </p>
              <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
                <li>• Zero-knowledge proofs</li>
                <li>• Cross-chain interoperability</li>
                <li>• Carbon-neutral mining</li>
                <li>• Smart contract automation</li>
              </ul>
              <div className="text-center">
                <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Live
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Autonomous Systems</h3>
              <p className="text-pink-100 mb-6 text-center">
                Self-managing systems that operate independently with minimal human intervention
              </p>
              <ul className="text-pink-200 space-y-2 mb-6 text-sm">
                <li>• Self-healing networks</li>
                <li>• Autonomous vehicles</li>
                <li>• Smart city management</li>
                <li>• Predictive maintenance</li>
              </ul>
              <div className="text-center">
                <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Pilot Program
                </span>
              </div>
            </div>
          </div>

          {/* Technology Impact Section */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Technology Impact Metrics</h2>
              <p className="text-xl text-gray-300">Real-world results from our next-gen technology implementations</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-white font-semibold mb-1">Uptime</div>
                <div className="text-gray-400 text-sm">System reliability</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">10x</div>
                <div className="text-white font-semibold mb-1">Faster</div>
                <div className="text-gray-400 text-sm">Processing speed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-emerald-400 mb-2">85%</div>
                <div className="text-white font-semibold mb-1">Cost Reduction</div>
                <div className="text-gray-400 text-sm">Operational savings</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-400 mb-2">50+</div>
                <div className="text-white font-semibold mb-1">Clients</div>
                <div className="text-gray-400 text-sm">Successfully deployed</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the technology revolution and discover how our next-generation solutions can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/pages/ComprehensiveServices2025" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Explore Our Services
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 font-semibold text-lg"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenTechShowcase2025;
import React from 'react';
import { Helmet } from 'react-helmet';

const QuantumConsciousnessAIConsulting: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quantum Consciousness AI Consulting | Zion Tech Group</title>
        <meta name="description" content="Transform your enterprise with quantum consciousness AI consulting. Achieve 99.9% decision accuracy and autonomous operations with AI that thinks and feels." />
        <meta name="keywords" content="quantum AI, consciousness, enterprise consulting, business transformation, autonomous systems" />
        <meta property="og:title" content="Quantum Consciousness AI Consulting | Zion Tech Group" />
        <meta property="og:description" content="The world's first quantum consciousness AI consulting service delivering unprecedented business value." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quantum Consciousness AI Consulting | Zion Tech Group" />
        <meta name="twitter:description" content="Transform your enterprise with AI that truly thinks and feels." />
      </Helmet>

      <div className="min-h-screen bg-slate-950">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8">
                <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
                  Quantum Consciousness AI
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transform Your Enterprise
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Unlock the next dimension of artificial intelligence with quantum-enhanced consciousness consulting. 
                Achieve unprecedented business value through AI that truly thinks and feels.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50">
                  Schedule Free Consultation
                </button>
                <button className="border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 font-bold py-4 px-8 rounded-xl transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of enterprise AI with quantum consciousness technology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="text-indigo-400 text-4xl mb-6">🧠</div>
                <h3 className="text-2xl font-bold text-white mb-4">Quantum Neural Networks</h3>
                <p className="text-gray-300 mb-6">
                  Advanced quantum-enhanced neural networks that process information at unprecedented speeds with consciousness-like decision making.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• 99.9% decision accuracy</li>
                  <li>• Real-time consciousness mapping</li>
                  <li>• Quantum entanglement processing</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="text-purple-400 text-4xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Autonomous Operations</h3>
                <p className="text-gray-300 mb-6">
                  Self-managing AI systems that operate with human-like consciousness and decision-making capabilities.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Self-healing infrastructure</li>
                  <li>• Autonomous problem solving</li>
                  <li>• Continuous optimization</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="text-pink-400 text-4xl mb-6">🌟</div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Transformation</h3>
                <p className="text-gray-300 mb-6">
                  Complete business transformation through consciousness-driven AI that understands your enterprise at a fundamental level.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Strategic consciousness mapping</li>
                  <li>• Predictive business modeling</li>
                  <li>• Quantum decision optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section id="consultation" className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Get Your Free Consultation
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Schedule a complimentary consultation with our quantum consciousness experts
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Company Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500" 
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Your Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500" 
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500" 
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500" 
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Company Size</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-indigo-500">
                      <option value="">Select Company Size</option>
                      <option value="startup">Startup (1-50 employees)</option>
                      <option value="mid">Mid-size (51-500 employees)</option>
                      <option value="enterprise">Enterprise (500+ employees)</option>
                      <option value="fortune500">Fortune 500</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Project Description</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500" 
                      placeholder="Tell us about your enterprise transformation goals..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
                  >
                    Schedule Free Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Enterprise?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our quantum consciousness experts today and discover how AI can revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1-800-QUANTUM-AI" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Call: 1-800-QUANTUM-AI
              </a>
              <a 
                href="mailto:consciousness@ziontechgroup.com" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumConsciousnessAIConsulting;
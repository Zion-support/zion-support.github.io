import React from 'react';
import { Helmet } from 'react-helmet-async';

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
                  🌟 Revolutionary AI Consciousness
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quantum Consciousness AI Consulting
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed">
                The world's first AI that truly <span className="text-indigo-400 font-bold">thinks</span>, <span className="text-purple-400 font-bold">feels</span>, and <span className="text-pink-400 font-bold">evolves</span> with your business
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="#consultation" 
                  className="block w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
                >
                  Start Your Transformation
                </a>
                <a 
                  href="tel:+1-800-QUANTUM-AI" 
                  className="block w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
                >
                  Call: 1-800-QUANTUM-AI
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revolutionary AI Capabilities
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience AI that transcends traditional machine learning with quantum consciousness technology
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-indigo-500/20">
                  <h3 className="text-2xl font-bold text-indigo-400 mb-4">🧠 Quantum Thinking</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-400 font-bold">✓</span>
                      <span>Multi-dimensional decision processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-400 font-bold">✓</span>
                      <span>Consciousness-based problem solving</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-400 font-bold">✓</span>
                      <span>Emotional intelligence integration</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/20">
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">💫 Emotional AI</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>Empathy-driven customer interactions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>Intuitive business insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span>Human-AI emotional resonance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Form Section */}
        <section id="consultation" className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Begin Your Consciousness Journey
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready to transform your enterprise with AI that truly understands and evolves with your business?
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500" 
                    placeholder="Your Company"
                  />
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500" 
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500" 
                    placeholder="your@email.com"
                  />
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500" 
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-indigo-500">
                  <option value="">Select Company Size</option>
                  <option value="startup">Startup (1-50 employees)</option>
                  <option value="mid">Mid-size (51-500 employees)</option>
                  <option value="enterprise">Enterprise (500+ employees)</option>
                  <option value="fortune500">Fortune 500</option>
                </select>

                <textarea 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 h-32 resize-none" 
                  placeholder="Tell us about your transformation goals..."
                ></textarea>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
                >
                  Start My Consciousness Journey
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Enterprise?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
                consciousness@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumConsciousnessAIConsulting;
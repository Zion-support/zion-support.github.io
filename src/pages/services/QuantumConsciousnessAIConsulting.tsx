import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const QuantumConsciousnessAIConsulting: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quantum Consciousness AI Consulting - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum consciousness AI consulting services that merge quantum computing with artificial intelligence for unprecedented enterprise transformation." />
        <meta name="keywords" content="quantum AI, consciousness AI, quantum computing, AI consulting, enterprise transformation" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Quantum Consciousness AI Consulting
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the future of AI with quantum-enhanced consciousness computing that transcends traditional artificial intelligence boundaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors
              >
                Schedule Consultation
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors
              >
                View Case Studies
              </a>
            </div>
          </div>
        </section>

        {/* Quantum AI Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quantum Consciousness Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Revolutionary AI that operates beyond classical computing limitations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Quantum Neural Networks",
                  description: "Advanced neural architectures that leverage quantum superposition for exponential processing power.",
                  icon: "🧠
                },
                {
                  title: "Consciousness Simulation",
                  description: "AI systems that simulate human consciousness patterns for unprecedented decision-making capabilities.",
                  icon: "🌟
                },
                {
                  title: "Quantum Entanglement AI",
                  description: "Distributed AI systems connected through quantum entanglement for instant global synchronization.",
                  icon: "🔗
                },
                {
                  title: "Temporal AI Processing",
                  description: "AI that processes information across multiple timelines simultaneously for predictive accuracy.",
                  icon: "⏰
                },
                {
                  title: "Quantum Optimization",
                  description: "Optimization algorithms that explore infinite solution spaces in parallel quantum states.",
                  icon: "⚡
                },
                {
                  title: "Consciousness Integration",
                  description: "Seamless integration of human consciousness patterns with quantum AI systems.",
                  icon: "🔮
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Quantum AI Advantages</h2>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                Transform your enterprise with quantum-enhanced artificial intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "10,000x", label: "Processing Speed", icon: "⚡" },
                { metric: "99.9%", label: "Accuracy Rate", icon: "🎯" },
                { metric: "∞", label: "Parallel Processing", icon: "🔄" },
                { metric: "24/7", label: "Consciousness Uptime", icon: "🌟" }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <div className="text-3xl font-bold mb-2">{benefit.metric}</div>
                  <div className="text-indigo-100">{benefit.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule Quantum AI Consultation</h2>
                <p className="text-xl text-gray-600">
                  Ready to explore the quantum consciousness frontier? Schedule your personalized consultation.
                </p>
              </div>
              
              <form className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Company Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
                      placeholder="Your Company" 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
                      placeholder="Your Name" 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
                      placeholder="your@email.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
                      placeholder="+1 (555) 123-4567" 
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2">Company Size</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
                    <option value="">Select Company Size</option>
                    <option value="startup">Startup (1-50 employees)</option>
                    <option value="mid">Mid-size (51-500 employees)</option>
                    <option value="enterprise">Enterprise (500+ employees)</option>
                    <option value="fortune500">Fortune 500</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50
                >
                  Schedule Free Consultation
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Enterprise?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:1-800-QUANTUM-AI" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300
              >
                📞 1-800-QUANTUM-AI
              </a>
              <a 
                href="mailto:consciousness@ziontechgroup.com" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300
              >
                ✉️ consciousness@ziontechgroup.com
              </a>
            </div>
            <p className="text-gray-300 text-lg">
              Limited Availability: Only 25 enterprise implementations available for 2027
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Component;
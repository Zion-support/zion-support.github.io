import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionary AI solutions for enterprise. Transform your business with Meta-Cognitive AI, 
              Quantum-Neural Networks, and Autonomous Operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300">
              Delivering cutting-edge AI solutions that drive real business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Solutions</h3>
              <p className="text-gray-300">
                Advanced artificial intelligence that automates complex business processes and drives innovation.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">
                Experience 2000x processing speed improvements with our quantum-enhanced computing solutions.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Military-grade security protocols ensuring your data and operations remain protected at all times.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of forward-thinking companies already implementing our revolutionary AI solutions.
          </p>
          <Link 
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
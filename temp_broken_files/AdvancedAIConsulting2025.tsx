import React from 'react';

const AdvancedAIConsulting2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6">
            🚀 NEW SERVICE • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Advanced AI Consulting 2025
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your business with our comprehensive AI consulting services. 
            From strategy to implementation, we guide you through every step of your AI journey.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors font-semibold text-lg">
              View Case Studies
            </button>
          </div>
        </div>

        {/* Service Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-5xl mb-4 text-center">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Strategy</h3>
            <p className="text-gray-300 mb-6 text-center">
              Develop comprehensive AI strategies aligned with your business objectives
            </p>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• AI readiness assessment</li>
              <li>• Technology roadmap</li>
              <li>• ROI projections</li>
              <li>• Risk mitigation</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Implementation</h3>
            <p className="text-gray-300 mb-6 text-center">
              End-to-end AI implementation with proven methodologies
            </p>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Model development</li>
              <li>• Data pipeline setup</li>
              <li>• Integration services</li>
              <li>• Performance optimization</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="text-5xl mb-4 text-center">📈</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Optimization</h3>
            <p className="text-gray-300 mb-6 text-center">
              Continuous improvement and scaling of your AI systems
            </p>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Performance monitoring</li>
              <li>• Model retraining</li>
              <li>• Scaling strategies</li>
              <li>• Cost optimization</li>
            </ul>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 border border-gray-600/30">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$5,000<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>• AI readiness assessment</li>
                <li>• Basic strategy development</li>
                <li>• 20 hours consulting</li>
                <li>• Email support</li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Started
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-400/30 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$15,000<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>• Comprehensive AI strategy</li>
                <li>• Implementation support</li>
                <li>• 60 hours consulting</li>
                <li>• Priority support</li>
                <li>• Monthly reviews</li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Choose Professional
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 border border-gray-600/30">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>• Full AI transformation</li>
                <li>• Dedicated team</li>
                <li>• Unlimited consulting</li>
                <li>• 24/7 support</li>
                <li>• Custom solutions</li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300">See how we've transformed businesses with AI</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">+400%</span>
                <span className="text-sm text-gray-400">Efficiency Gain</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fortune 500 Manufacturing</h3>
              <p className="text-gray-300 mb-6">
                Implemented predictive maintenance AI that reduced downtime by 60% and increased production efficiency by 400%.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-semibold">Read Full Case Study →</span>
                <span className="text-gray-400 text-sm">6 months project</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">$2.5M</span>
                <span className="text-sm text-gray-400">Cost Savings</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Retail Chain</h3>
              <p className="text-gray-300 mb-6">
                Deployed AI-powered inventory management that optimized stock levels and saved $2.5M annually.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-semibold">Read Full Case Study →</span>
                <span className="text-gray-400 text-sm">4 months project</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already transformed their operations with our AI consulting services.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAIConsulting2025;
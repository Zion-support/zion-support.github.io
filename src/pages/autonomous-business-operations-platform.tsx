import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AutonomousBusinessOperationsPlatform() {
  return (
    <>
      <Helmet>
        <title>Autonomous Business Operations Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary autonomous business operations platform that automates and optimizes all aspects of business operations using advanced AI and machine learning." />
        <meta name="keywords" content="autonomous business operations, AI automation, business process automation, autonomous systems, AI platform" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Autonomous Business Operations Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with fully autonomous operations powered by cutting-edge AI. 
                Automate, optimize, and scale your business processes like never before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Autonomous Business Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Fully Autonomous Operations</h3>
                <p className="text-gray-300">
                  Self-managing business processes that adapt and optimize in real-time without human intervention.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Intelligent Analytics</h3>
                <p className="text-gray-300">
                  Advanced AI-powered analytics that provide deep insights and predictive capabilities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-400">Process Optimization</h3>
                <p className="text-gray-300">
                  Continuous process improvement and optimization using machine learning algorithms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Areas Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Autonomous Business Areas
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Operations Management</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Supply chain automation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Inventory management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Quality control systems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Production scheduling</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Business Intelligence</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Financial forecasting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Market analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Customer insights</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Performance metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Why Choose Autonomous Operations?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Cost Reduction</h3>
                <p className="text-gray-300">
                  Reduce operational costs by up to 40% through intelligent automation and optimization.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Scalability</h3>
                <p className="text-gray-300">
                  Scale your operations seamlessly without proportional increases in overhead costs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-400">Efficiency</h3>
                <p className="text-gray-300">
                  Achieve operational efficiency improvements of 60% or more through intelligent automation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔮</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Predictive Insights</h3>
                <p className="text-gray-300">
                  Leverage predictive analytics to make proactive business decisions and prevent issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the autonomous business revolution and transform your operations with AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AIPoweredITAssetManagement() {
  return (
    <>
      <Helmet>
        <title>AI-Powered IT Asset Management - Zion Tech Group</title>
        <meta name="description" content="Intelligent IT asset management powered by AI for optimal resource utilization, cost optimization, and strategic technology planning." />
        <meta name="keywords" content="IT asset management, AI asset management, IT infrastructure, asset optimization, technology planning" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                AI-Powered IT Asset Management
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize your IT infrastructure with intelligent asset management powered by advanced AI. 
                Optimize costs, improve efficiency, and make data-driven technology decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                  Get Started
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
              Intelligent Asset Management Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Asset Discovery & Inventory</h3>
                <p className="text-gray-300">
                  Automated discovery and comprehensive inventory management of all IT assets across your organization.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Predictive Analytics</h3>
                <p className="text-gray-300">
                  AI-powered analytics to predict asset lifecycle, maintenance needs, and optimal replacement timing.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-400">Cost Optimization</h3>
                <p className="text-gray-300">
                  Intelligent cost analysis and optimization recommendations for maximum ROI on IT investments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Asset Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Comprehensive Asset Coverage
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Hardware Assets</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Servers and workstations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Network equipment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Storage devices</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Mobile devices</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Software Assets</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Licenses and subscriptions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Cloud services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Custom applications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Open source tools</span>
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
              Why Choose AI-Powered Asset Management?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Improved Efficiency</h3>
                <p className="text-gray-300">
                  Streamline asset tracking and management processes with intelligent automation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Strategic Insights</h3>
                <p className="text-gray-300">
                  Data-driven insights for better technology planning and investment decisions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-400">Risk Mitigation</h3>
                <p className="text-gray-300">
                  Proactive identification and mitigation of asset-related risks and compliance issues.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">ROI Optimization</h3>
                <p className="text-gray-300">
                  Maximize return on IT investments through intelligent asset lifecycle management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Optimize Your IT Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your IT asset management with AI-powered intelligence and automation.
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
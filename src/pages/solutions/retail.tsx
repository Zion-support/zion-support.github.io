import React from 'react';
import { SEO } from '../../components/SEO';
import { ArrowRight, ShoppingBag, Shield, Users, Database, Globe, Lock, BarChart3, Cpu, Target, TrendingUp, Code, Zap, Activity, Brain, CreditCard } from 'lucide-react';

export default function RetailSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Retail Solutions - Zion Tech Group"
        description="Transform retail with AI-powered solutions. Enhance customer experience, optimize operations, and drive sales with smart retail technology."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Smart Retail Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Retail
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform retail with AI-powered solutions. Enhance customer experience, 
              optimize operations, and drive sales with smart retail technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                Retail Inquiry
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Retail-Focused Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Designed for customer engagement, operational efficiency, and sales growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Customer Analytics</h3>
              <p className="text-gray-400">
                AI-powered customer behavior analysis and insights.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-pink-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Inventory Management</h3>
              <p className="text-gray-400">
                Smart inventory optimization and demand forecasting.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Personalization</h3>
              <p className="text-gray-400">
                Tailored shopping experiences and recommendations.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Omnichannel</h3>
              <p className="text-gray-400">
                Seamless integration across all retail channels.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Analytics</h3>
              <p className="text-gray-400">
                Live performance monitoring and business insights.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mobile Commerce</h3>
              <p className="text-gray-400">
                Advanced mobile shopping and payment solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Retail Service Areas
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions for modern retail operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Customer Experience</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Personalized Marketing</h4>
                    <p className="text-gray-400">AI-driven targeted campaigns and offers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Recommendation Engine</h4>
                    <p className="text-gray-400">Smart product suggestions and cross-selling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Customer Support</h4>
                    <p className="text-gray-400">AI-powered chatbots and support automation</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Operations & Analytics</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Supply Chain</h4>
                    <p className="text-gray-400">Intelligent inventory and logistics management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Performance Analytics</h4>
                    <p className="text-gray-400">Real-time business intelligence and reporting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Loss Prevention</h4>
                    <p className="text-gray-400">AI-powered security and fraud detection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Retail Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with the latest technologies for maximum retail impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI/ML</h3>
              <p className="text-gray-400 text-sm">
                Machine learning and predictive analytics
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cloud</h3>
              <p className="text-gray-400 text-sm">
                Scalable cloud infrastructure and storage
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Web3</h3>
              <p className="text-gray-400 text-sm">
                Blockchain and decentralized commerce
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
              <p className="text-gray-400 text-sm">
                Real-time data insights and reporting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Retail Transformation Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Measurable improvements in customer experience and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Sales Growth</h3>
              <p className="text-gray-400">
                45% increase in average order value
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Customer Satisfaction</h3>
              <p className="text-gray-400">
                80% improvement in customer experience scores
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Operational Efficiency</h3>
              <p className="text-gray-400">
                60% reduction in inventory costs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Retail?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join leading retailers using AI to enhance customer experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
              Retail Inquiry
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-200 text-lg">
              Schedule Retail Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
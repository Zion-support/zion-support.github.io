import React from 'react';
import { SEO } from '../../components/SEO';
import { ArrowRight, Rocket, Zap, Target, TrendingUp, Code, Database, Cpu, Globe, Heart, Leaf, Users, Shield, Lightbulb, BarChart3 } from 'lucide-react';

export default function StartupSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Startup Solutions - Zion Tech Group"
        description="Accelerate your startup with cutting-edge AI solutions. From MVP to scale, we help startups innovate faster and grow smarter."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Startup Innovation Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Startup
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Accelerate your startup with cutting-edge AI solutions. From MVP to scale, 
              we help startups innovate faster, validate ideas quicker, and grow smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">
                Launch Your Startup
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-200">
                Free Consultation
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
              Startup-Focused Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Designed for rapid iteration, validation, and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Prototyping</h3>
              <p className="text-gray-400">
                Build and test MVPs in days, not months.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Market Validation</h3>
              <p className="text-gray-400">
                AI-powered insights to validate your ideas.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Architecture</h3>
              <p className="text-gray-400">
                Built to grow from 10 to 10 million users.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud-Native</h3>
              <p className="text-gray-400">
                Pay-as-you-grow infrastructure costs.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">User Acquisition</h3>
              <p className="text-gray-400">
                AI-driven growth and retention strategies.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-pink-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lean Development</h3>
              <p className="text-gray-400">
                Focus on what matters most to users.
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
              Startup Growth Stages
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Solutions for every phase of your startup journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Early Stage (MVP)</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Idea Validation</h4>
                    <p className="text-gray-400">AI-powered market research and validation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Rapid Prototyping</h4>
                    <p className="text-gray-400">Quick MVP development and testing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">User Research</h4>
                    <p className="text-gray-400">AI-driven user behavior analysis</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Growth Stage (Scale)</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Performance Optimization</h4>
                    <p className="text-gray-400">AI-powered performance monitoring</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">User Acquisition</h4>
                    <p className="text-gray-400">Scalable growth marketing automation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Data Analytics</h4>
                    <p className="text-gray-400">Advanced business intelligence</p>
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
              Modern Tech Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with the latest technologies for maximum performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI/ML</h3>
              <p className="text-gray-400 text-sm">
                Machine learning and AI services
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cloud</h3>
              <p className="text-gray-400 text-sm">
                Scalable cloud infrastructure
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Web3</h3>
              <p className="text-gray-400 text-sm">
                Blockchain and decentralized tech
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
              <p className="text-gray-400 text-sm">
                Real-time data insights
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
              Why Startups Choose Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Proven track record with successful startups
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-gray-400">
                Cutting-edge AI solutions for competitive advantage
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Speed to Market</h3>
              <p className="text-gray-400">
                Rapid development and deployment cycles
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
              <p className="text-gray-400">
                Solutions that grow with your user base
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build the Next Big Thing?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join hundreds of successful startups using AI to disrupt industries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">
              Start Building Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-200 text-lg">
              Free Startup Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
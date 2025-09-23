import React from 'react';
import { ArrowRight, Brain, Zap, Shield, Globe, Rocket, TrendingUp, Users } from 'lucide-react';

const TechnologyInsights2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              LATEST INSIGHTS • JANUARY 2025
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Technology Insights 2025
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Discover the groundbreaking technologies and trends that are reshaping industries and transforming the future of business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center">
                Explore Trends <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Trends Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🔮 Key Technology Trends 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most significant technological breakthroughs that will define the next decade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Autonomous Systems</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Self-learning AI agents that can handle complex business processes, make decisions, and adapt to changing environments without human intervention.
              </p>
              <div className="flex items-center text-purple-600 font-semibold">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Computing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Revolutionary computing power that can solve complex problems in seconds, transforming cryptography, optimization, and scientific research.
              </p>
              <div className="flex items-center text-cyan-600 font-semibold">
                Explore Quantum <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero-Trust Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced security frameworks that verify every access request, providing unprecedented protection against evolving cyber threats.
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                Security Solutions <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Edge Computing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Distributed computing infrastructure that brings processing power closer to data sources, enabling real-time applications and IoT.
              </p>
              <div className="flex items-center text-orange-600 font-semibold">
                Edge Solutions <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Neural Interfaces</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Direct brain-computer interfaces that enable seamless interaction between human cognition and digital systems.
              </p>
              <div className="flex items-center text-indigo-600 font-semibold">
                Neural Tech <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Twins</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Virtual replicas of physical systems that enable predictive maintenance, optimization, and real-time monitoring.
              </p>
              <div className="flex items-center text-pink-600 font-semibold">
                Digital Solutions <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Impact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🏭 Industry Transformation Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how these technologies are revolutionizing different sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-4">Healthcare</h3>
              <p className="text-gray-300 mb-4">AI diagnostics, personalized medicine, and telemedicine platforms</p>
              <div className="text-3xl font-bold text-green-400">+45%</div>
              <div className="text-sm text-gray-400">Efficiency Improvement</div>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold mb-4">Manufacturing</h3>
              <p className="text-gray-300 mb-4">Smart factories, predictive maintenance, and automated quality control</p>
              <div className="text-3xl font-bold text-blue-400">+60%</div>
              <div className="text-sm text-gray-400">Productivity Gain</div>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold mb-4">Finance</h3>
              <p className="text-gray-300 mb-4">Algorithmic trading, fraud detection, and blockchain settlements</p>
              <div className="text-3xl font-bold text-purple-400">+35%</div>
              <div className="text-sm text-gray-400">Cost Reduction</div>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold mb-4">Logistics</h3>
              <p className="text-gray-300 mb-4">Autonomous vehicles, route optimization, and supply chain visibility</p>
              <div className="text-3xl font-bold text-orange-400">+50%</div>
              <div className="text-sm text-gray-400">Delivery Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't get left behind. Partner with Zion Tech Group to implement these cutting-edge technologies and gain a competitive advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Get Started Today
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyInsights2025;
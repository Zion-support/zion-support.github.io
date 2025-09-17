import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, Zap, Shield, Target, Users, TrendingUp, CheckCircle } from 'lucide-react';

const RevolutionaryAIServices2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Revolutionary AI Services 2025 - Transform Your Business with Next-Gen AI</title>
        <meta name="description" content="Discover our revolutionary AI services that are transforming businesses in 2025. From autonomous operations to quantum computing, unlock unprecedented growth and efficiency." />
        <meta name="keywords" content="AI services, artificial intelligence, business transformation, automation, quantum computing, machine learning" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary AI Services
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI services that deliver unprecedented results. 
              From autonomous operations to quantum computing, we provide the complete AI transformation toolkit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                Get Started Today
                <ArrowRight className="ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1000%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Revolutionary AI Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Autonomous Business Operations */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                  <Brain className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Autonomous Business Operations</h3>
              </div>
              <p className="text-gray-300 mb-6">
                AI systems that manage entire departments with complete autonomy, delivering 99.9% uptime and 500% efficiency gains.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Self-healing infrastructure
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Predictive maintenance
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Automated decision making
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Quantum Computing Solutions */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Quantum Computing Solutions</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Solve complex optimization problems in seconds that would take traditional computers years to process.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Supply chain optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Financial risk analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Drug discovery acceleration
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* AI-Powered Security */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">AI-Powered Security</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Advanced AI security systems that detect and prevent threats in real-time with 99.99% accuracy.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Threat detection
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Automated response
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Zero-trust architecture
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Predictive Analytics */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-500/20 p-3 rounded-lg mr-4">
                  <Target className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Predictive Analytics</h3>
              </div>
              <p className="text-gray-300 mb-6">
                AI that predicts market trends, customer behavior, and business outcomes with 95% accuracy.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Market trend prediction
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Customer behavior analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Risk assessment
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* AI Customer Experience */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-pink-500/20 p-3 rounded-lg mr-4">
                  <Users className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white">AI Customer Experience</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Hyper-personalized customer experiences that increase satisfaction by 400% and retention by 500%.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Personalization engine
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Emotional intelligence
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Omnichannel orchestration
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* AI Business Intelligence */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-500/20 p-3 rounded-lg mr-4">
                  <TrendingUp className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white">AI Business Intelligence</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Transform data into actionable insights with AI that processes millions of variables in real-time.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Real-time analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Automated reporting
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Strategic recommendations
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join hundreds of companies already seeing 1000% ROI with our revolutionary AI services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center">
              Start Your AI Transformation
              <ArrowRight className="ml-2" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RevolutionaryAIServices2025;
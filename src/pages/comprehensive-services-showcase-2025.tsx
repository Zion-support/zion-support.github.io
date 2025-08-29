import React from 'react';
import { SEO } from '../components/SEO';
import { ArrowRight, Star, Rocket, Brain, Users, Zap, Shield, TrendingUp, Code, Database, Cpu, Target, Globe, Heart, Leaf } from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Discover our complete portfolio of AI-powered services for 2025. From healthcare to space technology, we have the solutions to transform your business."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Complete Service Portfolio 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Showcase 2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our complete portfolio of cutting-edge AI services designed to revolutionize industries 
              and drive innovation across all sectors. From healthcare to space exploration, we have the solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-200">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-200">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions across all major technology domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Machine Learning */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI & Machine Learning</h3>
              <p className="text-gray-400 mb-4">
                Advanced AI solutions for business intelligence, content creation, and predictive analytics.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• AI Business Intelligence</div>
                <div>• AI Content Creation</div>
                <div>• AI Healthcare Platform</div>
                <div>• AI Cybersecurity</div>
              </div>
            </div>

            {/* Quantum Computing */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Computing</h3>
              <p className="text-gray-400 mb-4">
                Next-generation quantum solutions for optimization and complex problem solving.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Quantum AI Platform</div>
                <div>• Quantum Machine Learning</div>
                <div>• Quantum Optimization</div>
                <div>• Quantum Security</div>
              </div>
            </div>

            {/* IoT & Edge Computing */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">IoT & Edge Computing</h3>
              <p className="text-gray-400 mb-4">
                Connected devices and edge processing for real-time data analysis.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• IoT Edge Computing</div>
                <div>• Smart Device Management</div>
                <div>• Real-time Analytics</div>
                <div>• Edge AI Processing</div>
              </div>
            </div>

            {/* Blockchain & Web3 */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Blockchain & Web3</h3>
              <p className="text-gray-400 mb-4">
                Decentralized solutions and smart contract platforms for the future web.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Blockchain Platform</div>
                <div>• Smart Contracts</div>
                <div>• DeFi Solutions</div>
                <div>• Web3 Infrastructure</div>
              </div>
            </div>

            {/* Healthcare AI */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-red-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Healthcare AI</h3>
              <p className="text-gray-400 mb-4">
                AI-powered healthcare solutions for diagnostics and patient care.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• AI Diagnostics Platform</div>
                <div>• Medical Imaging AI</div>
                <div>• Patient Care Analytics</div>
                <div>• Drug Discovery AI</div>
              </div>
            </div>

            {/* Green Technology */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Green Technology</h3>
              <p className="text-gray-400 mb-4">
                Sustainable solutions for environmental monitoring and energy management.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Environmental Monitoring</div>
                <div>• Smart Energy Systems</div>
                <div>• Carbon Tracking</div>
                <div>• Sustainable Infrastructure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services 2025
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our most innovative and in-demand solutions for the coming year
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">AI-Powered Solutions</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">AI Business Intelligence</h4>
                    <p className="text-gray-400">Transform data into actionable insights with machine learning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">AI Content Creation</h4>
                    <p className="text-gray-400">Generate high-quality content at scale with AI assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">AI Cybersecurity</h4>
                    <p className="text-gray-400">Advanced threat detection and security automation</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Emerging Technologies</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Quantum Computing</h4>
                    <p className="text-gray-400">Solve complex problems with quantum algorithms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Space Technology</h4>
                    <p className="text-gray-400">AI-powered satellite and space exploration systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Metaverse Platform</h4>
                    <p className="text-gray-400">Build immersive virtual worlds with AI integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tailored solutions for major industries and sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Healthcare</h3>
              <p className="text-gray-400 text-sm">AI diagnostics, patient care, and medical research</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Finance</h3>
              <p className="text-gray-400 text-sm">Risk assessment, fraud detection, and trading algorithms</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Manufacturing</h3>
              <p className="text-gray-400 text-sm">Predictive maintenance and quality control</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Retail</h3>
              <p className="text-gray-400 text-sm">Customer analytics and inventory optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Discover how our comprehensive AI services can revolutionize your operations in 2025
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-200 text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
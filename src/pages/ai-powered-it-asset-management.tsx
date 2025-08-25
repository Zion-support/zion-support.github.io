import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Database, Brain, Zap, Shield, Network, ArrowRight, Star, Rocket, Target, Users, BarChart3, Clock, Cpu, HardDrive, Server } from 'lucide-react';

export default function AIPoweredITAssetManagement() {
  return (
    <>
      <SEOHead
        title="AI-Powered IT Asset Management | Zion Tech Group"
        description="Intelligent IT asset management platform powered by AI that automates inventory tracking, maintenance scheduling, and lifecycle management for optimal IT infrastructure performance."
        keywords="AI IT asset management, IT asset tracking, IT infrastructure management, AI-powered IT, asset lifecycle management, IT automation"
        canonical="https://ziontechgroup.com/ai-powered-it-asset-management"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                  <Database className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered IT Asset Management
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your IT infrastructure with intelligent asset management powered by AI. 
                Automate tracking, optimize performance, and maximize ROI across your entire IT ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Asset Management Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI platform provides comprehensive IT asset management with predictive analytics, 
                automated maintenance, and intelligent optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-8 rounded-xl border border-green-500/20">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg w-fit mb-6">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Analytics</h3>
                <p className="text-gray-300">
                  Advanced machine learning algorithms that analyze asset performance, predict failures, 
                  and optimize resource allocation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-xl border border-blue-500/20">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Discovery</h3>
                <p className="text-gray-300">
                  Intelligent asset discovery and inventory management with real-time updates and 
                  automated categorization.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-xl border border-purple-500/20">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-6">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Security & Compliance</h3>
                <p className="text-gray-300">
                  Comprehensive security monitoring, compliance tracking, and automated risk assessment 
                  for all IT assets.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-xl border border-indigo-500/20">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg w-fit mb-6">
                  <HardDrive className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Lifecycle Management</h3>
                <p className="text-gray-300">
                  End-to-end asset lifecycle tracking from procurement to retirement with 
                  intelligent replacement recommendations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 p-8 rounded-xl border border-yellow-500/20">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg w-fit mb-6">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Performance Monitoring</h3>
                <p className="text-gray-300">
                  Real-time performance monitoring with predictive maintenance alerts and 
                  automated optimization suggestions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-900/50 to-pink-900/50 p-8 rounded-xl border border-red-500/20">
                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg w-fit mb-6">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Network Integration</h3>
                <p className="text-gray-300">
                  Seamless integration with existing network infrastructure and management tools 
                  for unified asset oversight.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Asset Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Asset Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Manage all types of IT assets with intelligent automation and AI-powered insights.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Hardware Assets</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Servers & Workstations</h4>
                      <p className="text-gray-300">Comprehensive management of all computing infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Network Equipment</h4>
                      <p className="text-gray-300">Routers, switches, firewalls, and network appliances</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Storage Systems</h4>
                      <p className="text-gray-300">SAN, NAS, and cloud storage infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Software & Licenses</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Application Management</h4>
                      <p className="text-gray-300">Software inventory and license compliance tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Cloud Resources</h4>
                      <p className="text-gray-300">AWS, Azure, and Google Cloud asset management</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Virtual Infrastructure</h4>
                      <p className="text-gray-300">VMware, Hyper-V, and container management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transformative Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience unprecedented efficiency and cost savings with AI-powered IT asset management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-fit mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">40% Cost Reduction</h3>
                <p className="text-gray-300">Significant reduction in IT asset management costs</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">90% Time Savings</h3>
                <p className="text-gray-300">Automated processes save valuable IT staff time</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">100% Compliance</h3>
                <p className="text-gray-300">Automated compliance tracking and reporting</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-fit mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">5x Efficiency</h3>
                <p className="text-gray-300">Dramatic improvement in asset utilization</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your IT infrastructure management with AI-powered automation and 
              intelligent insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Optimizing Today
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
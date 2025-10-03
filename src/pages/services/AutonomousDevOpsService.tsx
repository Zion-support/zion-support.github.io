import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import { 
  Rocket, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Shield, 
  Zap 
} from "lucide-react";

const AutonomousDevOpsService: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Autonomous DevOps Service | Zion Tech Group</title>
        <meta name="description" content="Revolutionary autonomous DevOps platform that delivers 99.9% uptime, 90% faster deployments, and zero-touch operations." />
        <meta name="keywords" content="autonomous DevOps, AI-powered deployment, automated operations, zero-touch DevOps" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6">
                <Rocket className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-semibold">New Service Launch - October 2025</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Autonomous DevOps
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Zero-Touch Operations
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionary AI-powered DevOps platform that delivers 99.9% uptime, 90% faster deployments, and completely autonomous operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Autonomous Operations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform handles all aspects of DevOps operations autonomously, from deployment to monitoring and optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <Rocket className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Autonomous Deployments</h3>
                <p className="text-gray-300 mb-4">AI-powered deployment system that automatically handles rollouts, rollbacks, and optimization.</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                    <span>Zero-downtime deployments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                    <span>Automatic rollback on failures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                    <span>Performance optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <Shield className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Intelligent Monitoring</h3>
                <p className="text-gray-300 mb-4">Advanced monitoring system that predicts and prevents issues before they impact users.</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                    <span>Predictive failure detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                    <span>Automatic scaling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                    <span>Real-time optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Self-Healing Infrastructure</h3>
                <p className="text-gray-300 mb-4">Infrastructure that automatically detects and fixes issues without human intervention.</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                    <span>Automatic issue resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                    <span>Resource optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                    <span>Performance tuning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Measurable Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous DevOps platform delivers quantifiable improvements across all key metrics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
                <div className="text-gray-300">Faster Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">75%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Autonomous Operations</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/40">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your DevOps?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the autonomous DevOps revolution and experience zero-touch operations with guaranteed results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AutonomousDevOpsService;
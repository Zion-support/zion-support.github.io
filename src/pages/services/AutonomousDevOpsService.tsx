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
        <title>Autonomous DevOps Service - Zion Tech Group</title>
        <meta name="description" content="Complete autonomous DevOps platform with 90-day implementation and $10M+ annual cost savings." />
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
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Autonomous DevOps Service
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Complete autonomous DevOps platform with intelligent automation, self-healing infrastructure, and zero-touch deployments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Everything you need for autonomous DevOps</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl border border-blue-500/20">
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Complete Platform</h3>
                <p className="text-gray-300">Full autonomous DevOps platform with all tools integrated.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl border border-blue-500/20">
                <Clock className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">90-Day Implementation</h3>
                <p className="text-gray-300">Fast deployment and migration within 90 days.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl border border-blue-500/20">
                <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">$10M+ Savings</h3>
                <p className="text-gray-300">Annual cost savings of $10 million or more.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl border border-blue-500/20">
                <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">80% Faster Deployments</h3>
                <p className="text-gray-300">Dramatic reduction in deployment time.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl border border-blue-500/20">
                <Shield className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Security First</h3>
                <p className="text-gray-300">Built-in security and compliance features.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl border border-blue-500/20">
                <Rocket className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Zero Touch</h3>
                <p className="text-gray-300">Fully automated operations with minimal human intervention.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your DevOps?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading enterprises using our autonomous DevOps platform for unprecedented efficiency and cost savings.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AutonomousDevOpsService;
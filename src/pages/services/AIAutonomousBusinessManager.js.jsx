import React from 'react';
import { Link } from 'react-router-dom';
import { CogIcon, ChartBarIcon, ShieldCheckIcon, RocketLaunchIcon, UserGroupIcon } from '@heroicons/react/24/outline';
const AIAutonomousBusinessManager = () => {
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <CogIcon className="h-12 w-12 text-blue-400"/>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Autonomous Business Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business operations with our cutting-edge AI system that autonomously manages, 
              optimizes, and scales your business processes in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">
                Get Started
              </Link>
              <Link to="/case-studies" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Autonomous Business Management Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="p-3 bg-blue-600/20 rounded-lg w-fit mb-4">
                <CogIcon className="h-8 w-8 text-blue-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
              <p className="text-gray-300">
                Automatically identify, optimize, and execute business processes with minimal human intervention.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="p-3 bg-green-600/20 rounded-lg w-fit mb-4">
                <ChartBarIcon className="h-8 w-8 text-green-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
              <p className="text-gray-300">
                Real-time monitoring and analysis of business metrics with predictive insights and recommendations.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="p-3 bg-purple-600/20 rounded-lg w-fit mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-purple-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
              <p className="text-gray-300">
                Proactive identification and mitigation of business risks using advanced AI algorithms.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="p-3 bg-orange-600/20 rounded-lg w-fit mb-4">
                <RocketLaunchIcon className="h-8 w-8 text-orange-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Scalability Management</h3>
              <p className="text-gray-300">
                Automatically scale operations up or down based on demand and resource availability.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="p-3 bg-cyan-600/20 rounded-lg w-fit mb-4">
                <UserGroupIcon className="h-8 w-8 text-cyan-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Team Coordination</h3>
              <p className="text-gray-300">
                Intelligent task assignment and team coordination based on skills, availability, and priorities.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="p-3 bg-pink-600/20 rounded-lg w-fit mb-4">
                                 <CogIcon className="h-8 w-8 text-pink-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Learning & Adaptation</h3>
              <p className="text-gray-300">
                Continuous learning from business patterns to improve decision-making and efficiency over time.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integration</h3>
              <p className="text-gray-300">
                Seamlessly integrate with your existing business systems and data sources for comprehensive coverage.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Learning</h3>
              <p className="text-gray-300">
                AI analyzes your business patterns and learns optimal strategies for your specific industry and operations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Autonomous Operation</h3>
              <p className="text-gray-300">
                The system operates autonomously, making decisions and taking actions while keeping you informed.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Business Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600/20 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Increased Efficiency</h4>
                  <p className="text-gray-300">Reduce manual tasks by up to 80% and improve overall operational efficiency.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-600/20 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Cost Reduction</h4>
                  <p className="text-gray-300">Lower operational costs through automation and optimized resource allocation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-600/20 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">24/7 Operation</h4>
                  <p className="text-gray-300">Continuous business operations without human limitations or time constraints.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600/20 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Data-Driven Decisions</h4>
                  <p className="text-gray-300">Make informed decisions based on real-time data analysis and predictive insights.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-600/20 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Scalability</h4>
                  <p className="text-gray-300">Easily scale operations up or down based on business demands and growth.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-600/20 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Competitive Advantage</h4>
                  <p className="text-gray-300">Stay ahead of competitors with cutting-edge AI-powered business management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of autonomous business management with Zion Tech Group's AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">
              Schedule a Demo
            </Link>
            <Link to="/pricing" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>);
};
export default AIAutonomousBusinessManager;
